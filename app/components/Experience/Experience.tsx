import type { Experience } from '~/generated/graphql'
import Header from '../Header'

type ExperienceProps = {
  experience: Experience[]
}

const ExperienceSection = ({ experience }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className="w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative pb-[20px] overflow-hidden bg-blue"
    >
      <div className="relative w-[calc(100%_-_80px)] h-full m-auto flex mx-[40px] pt-[100px] gap-8 mobile:flex-wrap mobile:pt-[100px] flex-col">
        <div className="flex gap-4 items-center">
          <Header label="Experience" color="bg-r_orange" />
          <div className="relative w-[120px] h-[120px] -mt-[15px]">
            <img src="assets/images/my-emoji-2.png" alt="experience" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
