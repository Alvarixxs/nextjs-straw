import Image from "next/image";
import Selection from "../../../public/resources/selection.svg"
import Nextjs from "../../../public/icons/Next.js.svg"
import Reakt from "../../../public/icons/React.svg"
import Js from "../../../public/icons/JavaScript.svg"
import Tailwind from "../../../public/icons/Tailwind CSS.svg"
import Vercel from "../../../public/icons/Vercel.svg"

function Intro() {
  return (
    <section
      className="min-h-screen bg-waves-pattern bg-center bg-no-repeat md:bg-contain bg-cover flex items-center
      justify-center p-6 gap-6 flex-col-reverse md:flex-row"
    >
      <Image
        src={Selection}
        alt=""
        width={400}
        height={400}
        className="block md:hidden"
      />
      <Image
        src={Selection}
        alt=""
        width={500}
        height={500}
        className="hidden md:block"
      />
      <div className="flex flex-col max-w-3xl gap-6 backdrop-blur-md p-6 rounded-xl">
        <p className="font-medium text-5xl">Skyrocket your business to the <em className="font-thin">next</em> level</p>
        <div className="flex justify-between items-center p-6 border-y border-white-trans">
          <Image src={Js} alt="" width={40} height={40} />
          <Image src={Reakt} alt="" width={40} height={40} />
          <Image src={Tailwind} alt="" width={40} height={40} />
          <Image src={Nextjs} alt="" width={40} height={40} />
          <Image src={Vercel} alt="" width={40} height={40} />
        </div>
        <p
          className="font-medium text-gray-200 tracking-wide leading-7"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex font-light text-xl gap-6 flex-wrap">
          <button className="self-start rounded-xl p-2 hover:-translate-y-px transition duration-300 hover:bg-white-trans"
          >
            Learn.
          </button>
          <button className="self-start rounded-xl p-2 hover:-translate-y-px transition duration-300 hover:bg-white-trans"
          >
            Reference.
          </button>
          <button className="self-start rounded-xl p-2 hover:-translate-y-px transition duration-300 hover:bg-white-trans"
          >
            Community.
          </button>
          <button className="self-start rounded-xl p-2 hover:-translate-y-px transition duration-300 hover:bg-white-trans"
          >
            Blog.
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro