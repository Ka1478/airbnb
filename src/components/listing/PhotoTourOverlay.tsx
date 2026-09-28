'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useInertBackground } from '@/hooks/useInertBackground';

interface PhotoTourOverlayProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onPhotoClick?: (index: number) => void;
}

const TRANSITION_MS = 200;

export default function PhotoTourOverlay({
  images,
  title,
  isOpen,
  onClose,
  onPhotoClick,
}: PhotoTourOverlayProps) {
  // Keep the overlay mounted briefly after isOpen goes false so the
  // fade-out transition can play before it's removed from the DOM.
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useFocusTrap(containerRef, isMounted);
  useInertBackground(isMounted);

  // Mount / unmount + trigger enter transition
  useEffect(() => {
    let visibilityFrame: number;
    let unmountTimeout: ReturnType<typeof setTimeout>;

    if (isOpen) {
      setIsMounted(true);
      // Wait a frame so the initial (opacity-0) styles are painted
      // before switching to the visible state — this is what makes
      // the fade actually animate instead of snapping in.
      visibilityFrame = requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      unmountTimeout = setTimeout(() => setIsMounted(false), TRANSITION_MS);
    }

    return () => {
      cancelAnimationFrame(visibilityFrame);
      clearTimeout(unmountTimeout);
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isMounted) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMounted, onClose]);

  // Lock body scroll while open, restore focus on close
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
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`All photos for ${title}`}
      className={`fixed inset-0 z-[100] overflow-y-auto bg-white transition-opacity duration-200 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="sticky top-0 z-10 flex items-center border-b border-gray-200 bg-white/95 px-6 py-4 backdrop-blur-sm md:px-10">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-label="Close photo tour"
        >
          <X className="h-5 w-5 text-charcoal" aria-hidden="true" />
        </button>
        <h2 className="ml-4 text-sm font-medium text-charcoal">{title}</h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 md:px-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((src, i) => (
            <li
              key={src}
              className={i % 5 === 0 ? 'sm:col-span-2' : undefined}
            >
              <button
                type="button"
                onClick={() => onPhotoClick?.(i)}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-charcoal"
                aria-label={`View photo ${i + 1} of ${images.length} for ${title}`}
              >
                <Image
                  src={src}
                  alt={`${title} - photo ${i + 1} of ${images.length}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
}
