import type { Certificate } from '~/generated/graphql'
import { Heading } from '../IntroHeading'

type CertificateSectionProps = {
  certificates: Certificate[]
}

export const CertificateSection = ({
  certificates,
}: CertificateSectionProps) => {
  return (
    <section className="w-screen -mx-[40px] m-auto h-screen mobile:h-fit mobile:min-h-fit relative overflow-hidden bg-black border-[20px] border-black">
      <div className="flex mobile:flex-wrap gap-4 h-full">
        <Heading
          bg={'bg-r_orange'}
          color={'bg-purple'}
          label="Certificate"
          textColor={'text-white'}
        />
        <div className="relative w-full bg-lemon rounded-lg h-full flex justify-center items-center text-black p-[80px] tablet:p-[40px] mobile:p-[40px]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-4xl font-lalezar tablet:text-3xl mobile:text-2xl uppercase">
              Certificate
            </div>
            <ul className="flex flex-col gap-2">
              {certificates.map((certificate) => (
                <li
                  className="list-disc text-lg tablet:text-base mobile:text-base w-fit"
                  key={certificate.id}
                >
                  {certificate.name}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="assets/images/my-emoji-3.png"
            alt="Rose's emoji"
            className="absolute bottom-0 w-[250px] tablet:w-[200px] mobile:hidden"
          />
        </div>
      </div>
    </section>
  )
}
