import { Header } from '../Header'
import { ParallaxText } from '../ParallaxText'

export const ProjectIntro = () => {
  return (
    <div
      style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
      className="bg-[length:10px] w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative py-[40px] overflow-hidden flex flex-col justify-between"
    >
      <div className="flex flex-col gap-2">
        <ParallaxText baseVelocity={2}>PROJECT</ParallaxText>
        <ParallaxText baseVelocity={-2}>PROJECT</ParallaxText>
      </div>
      <div className="w-full flex justify-center items-center">
        <Header
          label="Personal Project"
          variant="big"
          color="bg-lemon"
          textColor="text-darkBlue"
          isRotate={false}
          isScale
        />
      </div>

      <div className="flex flex-col gap-2">
        <ParallaxText baseVelocity={2}>PROJECT</ParallaxText>
        <ParallaxText baseVelocity={-2}>PROJECT</ParallaxText>
      </div>
    </div>
  )
}
