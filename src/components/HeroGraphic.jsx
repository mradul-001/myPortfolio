const HeroGraphic = () => {
  return (
    <svg
      viewBox="0 0 300 300"
      className="w-full max-w-sm"
      role="img"
      aria-label="Stylized code bracket monogram"
    >
      <path
        d="M110 50 L50 150 L110 250"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="500"
        strokeDashoffset="500"
        style={{ animation: "draw-bracket 0.9s ease-out 0.1s forwards" }}
      />
      <path
        d="M190 50 L250 150 L190 250"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="500"
        strokeDashoffset="500"
        style={{ animation: "draw-bracket 0.9s ease-out 0.35s forwards" }}
      />
      <line
        x1="165"
        y1="60"
        x2="135"
        y2="240"
        stroke="var(--color-ink)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="200"
        strokeDashoffset="200"
        style={{ animation: "draw-bracket 0.7s ease-out 0.7s forwards" }}
      />
    </svg>
  );
};

export default HeroGraphic;
