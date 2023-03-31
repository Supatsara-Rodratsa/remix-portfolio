import type { Project } from '~/generated/graphql'
import { Header } from '../Header'
import { motion } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'

type ProjectDetailProps = {
  projects: Project[]
}

export const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const [mouseEnter, setMouseEnter] = useState<boolean[]>(
    Array.from(Array(projects.length).fill(false))
  )

  const onMouseEnterHandler = (index: number) => {
    mouseEnter[index] = true
    setMouseEnter([...mouseEnter])
  }

  const onMouseLeaveHandler = (index: number) => {
    mouseEnter[index] = false
    setMouseEnter([...mouseEnter])
  }

  return (
    <section
      style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
      className="bg-[length:30px] w-screen -mx-[40px] m-auto h-full min-h-[calc(100vh)] relative py-[80px] overflow-hidden bg-blue border-[20px] border-black"
    >
      <div className="m-[40px] flex flex-col gap-12">
        <div className="flex gap-4 items-center">
          <Header label="Projects" color="bg-r_orange" isAnimate={true} once />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ stiffness: 500 }}
            className="relative w-[110px] h-[110px]"
          >
            <img src="assets/images/my-emoji-2.png" alt="experience" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          {projects.map((project, i) => (
            <motion.div
              initial={{ x: i % 2 == 0 ? 200 : -200 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 30,
                restDelta: 0.001,
              }}
              key={project.id}
              className={clsx(
                'p-[20px] flex gap-12 justify-center items-center',
                i % 2 == 0 ? 'mobile:flex-wrap' : 'mobile:flex-wrap-reverse'
              )}
            >
              {i % 2 === 0 && (
                <Header
                  label={project.name}
                  color="bg-lemon"
                  textColor="text-darkBlue"
                  isRotate={false}
                  isAnimate={false}
                />
              )}
              <a
                href={project.link || ''}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => onMouseEnterHandler(i)}
                onMouseLeave={() => onMouseLeaveHandler(i)}
                className="relative w-[550px] tablet:w-[400px] mobile:w-[300px] overflow-hidden border-[10px] shadow-customGreen transition-all duration-500 ease-in-out cursor-pointer"
              >
                <img src={project.image?.url || ''} alt={project.name} />
                <motion.div
                  initial={{ y: 150 }}
                  animate={{ y: mouseEnter[i] ? 0 : 150 }}
                  transition={{ stiffness: 200 }}
                  className="absolute bottom-0 w-full px-[15px] pt-[5px] bg-r_orange custom-clip-path shadow-md font-lalezar text-2xl font-bolder text-blue"
                >
                  Visit Site
                </motion.div>
              </a>
              {i % 2 !== 0 && (
                <Header
                  label={project.name}
                  color="bg-purple"
                  isRotate={false}
                  isAnimate={false}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
