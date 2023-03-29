import type { Education } from '~/generated/graphql'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { EducationIcon } from '../icons'

type EducationTableProps = {
  education: Education[]
}

const EducationTable = ({ education }: EducationTableProps) => {
  return (
    <div className="mt-[40px] flex flex-col gap-8">
      {education.map((edu, index) => (
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          key={edu.id}
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 grid-flow-row-dense mobile:grid-cols-1 tablet:grid-cols-1">
            <div className="flex flex-row gap-5">
              <EducationIcon />
              <div className={clsx('flex flex-col gap-1')}>
                <div className="text-xl tablet:text-xl mobile:text-lg">
                  {edu.universityName}
                </div>
                <div className="text-lg tablet:text-base mobile:text-base">
                  {edu.location}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col font-bold text-xl tablet:text-lg mobile:text-base">
                {edu.program}
              </div>
              <div className="flex flex-col font-light text-lg tablet:text-base mobile:text-base">
                {edu.period}
              </div>
              <div className="flex flex-row justify-between font-light gap-2 text-lg tablet:text-base mobile:text-base">
                <div>Grade: {edu.grade || '-'}</div>
                {edu.isFirstClassHonours && (
                  <div className="desktop:mr-[50px]">First Class Honours</div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-[100%]">
              {edu.programs &&
                edu.programs.map((program) => (
                  <ul key={program.id}>
                    <li className="mb-[15px] list-disc text-lg tablet:text-base mobile:text-base">
                      {program.name}
                    </li>
                  </ul>
                ))}
            </div>
          </div>
          <hr
            className={clsx(
              'border border-dashed mt-[2rem]',
              index === education.length - 1 && 'hidden'
            )}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default EducationTable
