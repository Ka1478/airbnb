import { useEffect } from 'react';

/**
 * While `isActive`, marks the main app content (everything outside the
 * current overlay) as `inert` and `aria-hidden`, so screen reader users
 * and keyboard users can't navigate "behind" an open modal. Pair with
 * useFocusTrap so focus is also kept inside the overlay.
 *
 * Requires a #app-content wrapper around the app's non-overlay content
 * (see root layout.tsx) — overlays are portaled to document.body as
 * siblings of that wrapper, so it's safe to hide.
 */
export function useInertBackground(isActive: boolean) {
  useEffect(() => {
    const appContent = document.getElementById('app-content');
    if (!appContent) return;

    if (isActive) {
      appContent.setAttribute('inert', '');
      appContent.setAttribute('aria-hidden', 'true');
    }

    return () => {
      appContent.removeAttribute('inert');
      appContent.removeAttribute('aria-hidden');
    };
  }, [isActive]);
}
