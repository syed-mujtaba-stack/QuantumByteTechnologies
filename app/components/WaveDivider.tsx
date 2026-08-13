export function WaveDivider({ fill, className = '' }: { fill: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block h-8 w-full lg:h-12"
      >
        <path
          d="M0,26 C240,60 480,2 720,22 C960,42 1200,8 1440,30 L1440,64 L0,64 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}