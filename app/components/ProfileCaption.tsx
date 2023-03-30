import { useNavigate } from '@remix-run/react'
import { motion } from 'framer-motion'

type ProfileCaptionProp = {
  image: string
  caption: string
  link: string
}

const ProfileCaption = ({ image, caption, link }: ProfileCaptionProp) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ stiffness: 500 }}
      className="relative m-auto overflow-hidden border-white border-[10px] rounded-[20px] max-w-[500px] max-h-[500px] tablet:max-w-[400px] tablet:max-h-[400px] cursor-pointer"
      onClick={() => navigate(link)}
    >
      <img src={image} alt="profile" className="object-cover" />
      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ stiffness: 200 }}
        className="absolute bottom-0 w-full p-[30px] pb-[20px] bg-r_orange custom-clip-path shadow-md font-lalezar text-4xl font-bolder text-blue"
      >
        {caption}
      </motion.div>
    </motion.div>
  )
}

export { ProfileCaption }
