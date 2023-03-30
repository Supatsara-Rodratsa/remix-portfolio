import { motion } from 'framer-motion'

type ProfileProps = {
  image?: string
}

const Profile = ({ image }: ProfileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="transition-all duration-700 relative w-[calc(100vw_/_3)] h-[calc(100vw_/_3)] min-w-[300px] min-h-[300px] inline-block -ml-[50px] -mt-[50px]"
    >
      <div className="absolute bg-black border-[10px] border-white w-[90%] h-[90%] rounded-full -bottom-[50px] -right-[50px]"></div>
      <div className="absolute bg-black border-[10px] border-white w-[90%] h-[90%] rounded-full overflow-hidden">
        <img
          src={image}
          alt="profile-2"
          className="object-cover object-bottom"
        />
      </div>
    </motion.div>
  )
}

export { Profile }
