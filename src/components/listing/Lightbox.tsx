'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useInertBackground } from '@/hooks/useInertBackground';

interface LightboxProps {
  images: string[];
  title: string;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const TRANSITION_MS = 250;

export default function Lightbox({
  images,
  title,
  initialIndex,
  isOpen,
  onClose,
}: LightboxProps) {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  // 'next' | 'prev' drives which direction the slide animates in from.
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useFocusTrap(dialogRef, isMounted);
  useInertBackground(isMounted);

  // Sync starting photo whenever the lightbox is (re)opened at a new index.
  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  // Mount / unmount + fade transition, same pattern as the photo tour overlay.
  useEffect(() => {
    let frame: number;
    let unmountTimeout: ReturnType<typeof setTimeout>;

    if (isOpen) {
      setIsMounted(true);
      frame = requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      unmountTimeout = setTimeout(() => setIsMounted(false), TRANSITION_MS);
    }

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(unmountTimeout);
    };
  }, [isOpen]);

  function goTo(nextIndex: number, dir: 'next' | 'prev') {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    // Let the exit animation play, then swap the image and animate it in.
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      requestAnimationFrame(() => setIsAnimating(false));
    }, TRANSITION_MS / 2);
  }

  function goNext() {
    goTo((currentIndex + 1) % images.length, 'next');
  }

  function goPrev() {
    goTo((currentIndex - 1 + images.length) % images.length, 'prev');
  }

  // Keyboard: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!isMounted) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, currentIndex, isAnimating, onClose]);

  // Scroll lock + focus management
  useEffect(() => {
    if (isMounted) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();

      return () => {
        document.body.style.overflow = originalOverflow;
        previouslyFocused.current?.focus();
      };
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} - photo ${currentIndex + 1} of ${images.length}`}
      className={`fixed inset-0 z-[110] flex flex-col bg-black transition-opacity ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDuration: `${TRANSITION_MS}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close photo viewer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="text-sm font-medium text-white" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Image stage */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 md:px-16">
        <button
          type="button"
          onClick={goPrev}
          disabled={isAnimating}
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-transform duration-150 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50 md:left-6"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div
          className={`relative h-full w-full max-w-4xl transition-all ease-out ${
            isAnimating
              ? direction === 'next'
                ? '-translate-x-6 opacity-0'
                : 'translate-x-6 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
          style={{ transitionDuration: `${TRANSITION_MS / 2}ms` }}
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - photo ${currentIndex + 1} of ${images.length}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={isAnimating}
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-transform duration-150 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50 md:right-6"
          aria-label="Next photo"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>,
    document.body
  );
}
