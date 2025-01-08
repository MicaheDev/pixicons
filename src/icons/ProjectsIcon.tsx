export default function ProjectsIcon({
  size = 40,
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 16 16"
      shapeRendering="crispEdges"
      width={size}
      height={size}
      className={className}
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="currentColor"
        d="M2 3h1M6 3h1M2 4h1M6 4h1M8 4h1M12 4h1M13 5h1M13 6h1M2 7h1M13 7h1M2 9h1M8 9h1M11 9h1M2 10h2M6 10h1M8 10h1M10 10h1M12 10h1M11 11h2M8 12h1"
      />
      <path stroke="currentColor" d="M3 3h1M12 9h1M5 10h1" />
      <path stroke="currentColor" d="M4 3h1M11 4h1M7 6h1M7 7h1M10 9h1M4 10h1" />
      <path stroke="currentColor" d="M5 3h1M2 5h1M2 6h1M9 6h1M9 7h1" />
      <path stroke="currentColor" d="M7 4h1M9 4h2M8 6h1M8 8h1M8 11h1M10 11h1" />
      <path stroke="currentColor" d="M13 4h1" />
      <path stroke="currentColor" d="M2 8h1M9 8h1" />
      <path stroke="currentColor" d="M7 8h1M9 10h1" />
    </svg>
  );
}
