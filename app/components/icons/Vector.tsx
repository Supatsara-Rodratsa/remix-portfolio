import type { SVGProps } from 'react'
const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={63}
    height={11}
    fill="none"
    viewBox="0 0 63 11"
    {...props}
  >
    <path
      stroke="#FDF574"
      strokeWidth={3}
      d="m1 9 8.975-7 11.303 7 10.97-7 8.31 7 12.633-7L62 9"
    />
  </svg>
)
export default SvgVector
