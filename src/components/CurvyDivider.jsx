export default function CurvyDivider({ flip = false, className = "" }) {
  return (
    <div className={className}>
      <svg
        className={`w-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          className="text-black"
          d="M0,96L80,128C160,160,320,224,480,240C640,256,800,224,960,197.3C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}
