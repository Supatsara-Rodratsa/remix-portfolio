import type { SVGProps } from 'react'
const SvgPolygon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={26}
    fill="none"
    viewBox="0 0 23 26"
    {...props}
  >
    <path fill="#000" d="M23 13 .5 25.99V.01L23 13Z" />
  </svg>
)
export default SvgPolygon
