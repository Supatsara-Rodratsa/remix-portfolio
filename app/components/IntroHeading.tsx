import clsx from 'clsx'
import { Header } from './Header'

type IntroHeadingProps = {
  color: string
  label: string
  firstMeme: string
  secondMeme?: string
  textColor: string
  bg?: string
  isHeadingLeft?: boolean
}

const IntroHeading = ({
  color,
  label,
  firstMeme,
  secondMeme,
  textColor,
  bg = 'bg-r_orange',
  isHeadingLeft = false,
}: IntroHeadingProps) => {
  const Heading = () => (
    <div
      style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
      className={clsx(
        'w-full rounded-lg bg-[length:30px] mobile:min-h-[300px]',
        bg
      )}
    >
      <div className="w-full h-full flex justify-center items-center">
        <Header
          label={label}
          color={color}
          textColor={textColor}
          isRotate={false}
          variant="big"
          isScale
          enabledClick
        />
      </div>
    </div>
  )
  return (
    <section className="w-screen -mx-[40px] m-auto h-screen mobile:h-fit mobile:min-h-screen relative overflow-hidden bg-black border-[20px] border-black">
      <div className="flex mobile:flex-wrap gap-4 h-full">
        {isHeadingLeft && <Heading />}
        <div className="w-full flex flex-col gap-4">
          <img
            className={clsx(
              'rounded-lg object-cover object-bottom',
              secondMeme ? 'h-[50%]' : 'h-full'
            )}
            src={firstMeme}
            alt="meme"
          />
          {secondMeme && (
            <img
              className="h-[50%] object-cover rounded-lg"
              src={secondMeme}
              alt="meme"
            />
          )}
        </div>
        {!isHeadingLeft && <Heading />}
      </div>
    </section>
  )
}

export { IntroHeading }
