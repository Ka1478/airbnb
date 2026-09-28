interface LaurelIconProps {
  className?: string;
  flip?: boolean;
}

/**
 * A simple laurel-branch icon (leaves along a curved stem), used in pairs
 * — one flipped — to frame the Guest Favourite rating, matching the
 * reference site's badge treatment instead of an emoji stand-in.
 */
export default function LaurelIcon({ className = 'h-6 w-6', flip = false }: LaurelIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M4 21C4 14 7 7 13 3"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {[
        [5.2, 18.5, 8.2, 17.5],
        [5.9, 15.8, 9, 15.3],
        [6.8, 13.2, 10, 13.1],
        [7.9, 10.8, 11, 11],
        [9.3, 8.6, 12.2, 9.2],
        [11, 6.7, 13.5, 7.5],
        [13, 5, 15, 6],
      ].map(([x1, y1, x2, y2], i) => (
        <path
          key={i}
          d={`M${x1} ${y1} Q${(x1 + x2) / 2 + 1} ${(y1 + y2) / 2 - 0.5} ${x2} ${y2}`}
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
