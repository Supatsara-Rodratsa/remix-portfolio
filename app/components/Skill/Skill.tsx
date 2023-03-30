import Header from '../Header'

const Skill = () => {
  return (
    <section
      id="experience"
      className="w-screen -mx-[40px] m-auto h-screen mobile:h-fit mobile:min-h-screen relative overflow-hidden bg-black border-[20px] border-black"
    >
      <div className="flex mobile:flex-wrap gap-4 h-full">
        <div className="w-full flex flex-col gap-4">
          <img
            className="h-[50%] rounded-lg object-cover object-bottom"
            src="assets/images/meme.gif"
            alt="meme1"
          />
          <img
            className="h-[50%] object-cover rounded-lg"
            src="assets/images/meme3.gif"
            alt="meme2"
          />
        </div>
        <div
          style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
          className="w-full bg-green rounded-lg bg-[length:30px] mobile:min-h-[300px]"
        >
          <div className="w-full h-full flex justify-center items-center">
            <Header
              label="Skill & Software"
              color="bg-purple"
              isRotate={false}
              variant="big"
              isScale
              enabledClick
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
