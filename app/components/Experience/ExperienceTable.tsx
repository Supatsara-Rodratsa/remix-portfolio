import type { Experience } from '~/generated/graphql'
import { Work } from '../icons'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type ExperienceTableProps = {
  experience: Experience[]
}

export const ExperienceTable = ({ experience }: ExperienceTableProps) => {
  return (
    <div className="my-[40px] flex flex-col gap-8">
      {experience.map((exp, index) => (
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          key={exp.id}
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 grid-flow-row-dense mobile:grid-cols-1 tablet:grid-cols-1">
            <div className="flex flex-row gap-5">
              <div className={clsx(exp.hideName ? 'hidden' : 'block')}>
                <Work />
              </div>
              <div
                className={clsx(
                  'flex flex-col gap-1',
                  exp.hideName ? 'hidden' : 'block'
                )}
              >
                <div className="text-xl tablet:text-xl mobile:text-lg">
                  {exp.companyName}
                </div>
                <div className="text-lg tablet:text-base mobile:text-base">
                  {exp.location}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col font-bold text-xl tablet:text-lg mobile:text-base">
                {exp.position && exp.position.positionName}
              </div>
              <div className="flex flex-col text-gray-300 font-light text-lg tablet:text-base mobile:text-base">
                {exp.position?.period || '-'}
              </div>
            </div>
            <div className="flex flex-col w-[100%]">
              {exp.position &&
                exp.position.positionDetails.map((desc) => (
                  <ul key={desc.id}>
                    <li className="mb-[15px] list-disc text-lg tablet:text-base mobile:text-base">
                      {desc.detail}
                    </li>
                  </ul>
                ))}
            </div>
          </div>
          <hr
            className={clsx(
              'border border-dashed mt-[2rem]',
              exp.hideDash && index != experience.length && 'hidden'
            )}
          />
        </motion.div>
      ))}
    </div>
  )
}
