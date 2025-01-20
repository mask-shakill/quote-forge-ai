interface LoadingSVGProps {
  size?: number;
  color?: string;
}

export default function LoadingSVG({
  size = 100,
  color = "#2a53bc",
}: LoadingSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke={color}
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
