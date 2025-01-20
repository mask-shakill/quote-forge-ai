export default function LoadingSVG() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="8"
        strokeDasharray="200"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
