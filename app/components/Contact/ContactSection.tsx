import clsx from 'clsx'
import type { Contact } from '~/generated/graphql'
import { Header } from '../Header'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import ReactPlayer from 'react-player'

type ContactSectionProps = {
  video: string
  contact: Contact
}

export const ContactSection = ({ video, contact }: ContactSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  const Topic = ({ title }: { title: string }) => (
    <div className="text-xl font-lalezar min-w-[100px] mobile:min-w-[60px] mobile:text-lg">
      {title}:
    </div>
  )

  const Detail = ({ detail }: { detail: string }) => (
    <div style={{ overflowWrap: 'anywhere' }} className="text-base">
      {detail}
    </div>
  )

  return (
    <section
      id="contact"
      className="w-screen -mx-[40px] m-auto h-screen mobile:h-fit mobile:min-h-screen relative overflow-hidden bg-black border-[20px] border-black"
      ref={ref}
    >
      <div className="flex mobile:flex-wrap-reverse gap-4 h-full">
        <div className="w-[500px] flex flex-col gap-4">
          <div className="w-full h-screen relative">
            {hasWindow && (
              <ReactPlayer
                className="left-0 w-full h-full absolute"
                url={video}
                playing={isInView}
                loop
                controls
              />
            )}
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
          className={clsx(
            'w-full bg-[length:10px] mobile:min-h-[300px] bg-green flex justify-center items-center'
          )}
        >
          <div className="flex flex-col gap-12 min-w-[300px] mobile:max-w-[300px] justify-center bg-green m-[40px] p-10 rounded-lg text-black border-[10px] border-black">
            <Header label="Contact" color="bg-blue" isAnimate={false} />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Topic title="Phone" />
                <Detail detail={contact.phone || '-'} />
              </div>
              <div className="flex gap-4">
                <Topic title="Email" />
                <Detail detail={contact.email || '-'} />
              </div>
              <div className="flex gap-4">
                <Topic title="GitHub" />
                <Detail detail={contact.github || '-'} />
              </div>
              <div className="flex gap-4">
                <Topic title="LinkedIn" />
                <Detail detail={contact.linkedIn || '-'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
