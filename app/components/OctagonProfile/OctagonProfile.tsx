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
      className="octagon-clip-path transition-all duration-700 top-1 left-1 octagon-clip-path relative w-[calc(100vw-/-2)] h-[calc(100vh-/-2)]  overflow-hidden box-border inline-block bg-lemon"
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
