import { motion } from 'framer-motion'

type OctagonProfileProps = {
  profile: string
}

const OctagonProfile = ({ profile }: OctagonProfileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ stiffness: 1000, damping: 20 }}
      className="octagon-clip-path transition-all duration-700 top-1 left-1 octagon-clip-path relative w-[500px] h-[500px] tablet:w-[450px] tablet:h-[450px] mobile:w-[300px] mobile:h-[300px] overflow-hidden box-border inline-block bg-lemon"
    >
      <img
        src={profile}
        alt="profile"
        className="w-full h-full object-cover object-bottom"
      />
    </motion.div>
  )
}

export default OctagonProfile
