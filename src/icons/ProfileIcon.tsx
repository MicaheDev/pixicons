export default function ProfileIcon({
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
        d="M4 2h1M8 2h2M11 2h1M4 3h1M4 4h1M6 5h1M5 8h1M8 8h3M10 10h1M13 11h1M2 12h1"
      />
      <path stroke="currentColor" d="M5 2h1M4 5h1M7 10h1" />
      <path stroke="currentColor" d="M6 2h1M5 3h1M13 13h1" />
      <path
        stroke="currentColor"
        d="M7 2h1M10 3h2M9 5h1M11 5h1M11 7h1M6 8h1M5 10h1M12 10h1"
      />
      <path
        stroke="currentColor"
        d="M10 2h1M4 6h1M11 8h1M3 10h1M8 10h2M11 10h1M2 11h1M13 12h1"
      />
      <path stroke="currentColor" d="M11 4h1M11 6h1M4 7h1M7 7h1M4 8h1M2 13h1" />
      <path stroke="currentColor" d="M8 7h1" />
      <path stroke="currentColor" d="M7 8h1M4 10h1M6 10h1" />
    </svg>
  );
}
