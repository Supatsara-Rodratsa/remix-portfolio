import { motion } from 'framer-motion'

type IconFabProps = {
  word: string
}

export const IconFab = ({ word }: IconFabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ stiffness: 1000 }}
      className="fixed bottom-[40px] right-[40px] w-[100px] h-[100px] rounded-full cursor-pointer flex justify-center items-center bg-r_orange shadow-xl"
    >
      <motion.img
        src="assets/images/my-emoji.png"
        alt="Rose's emoji"
        className="pl-[5px]"
      />
      <div className="absolute bottom-[20px] w-[100px] h-[100px]">
        {word &&
          word.split('').map((char, i) => (
            <div
              className="absolute left-[50%]"
              key={i}
              style={{
                transform: `rotate(${i * 12}deg)`,
                transformOrigin: '0px 70px',
              }}
            >
              {char}
            </div>
          ))}
      </div>
    </motion.div>
  )
}
