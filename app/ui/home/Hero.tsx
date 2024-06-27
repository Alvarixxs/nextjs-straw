import Image from "next/image";
import Back from "@/public/bg/ccchaos.svg";
import Icon from "@mdi/react";
import {mdiLaptop} from "@mdi/js";
import MacFrontWhite from "@/public/resources/mac/MacFrontWhite.png";
import MacBackWhite from "@/public/resources/mac/MacBackWhite.png";
import MacFrontDark from "@/public/resources/mac/MacFrontBlack.png";
import MacBackDark from "../../../public/resources/mac/MacBackBlack.png";

function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center relative px-6 py-20 overflow-hidden bg-neutral-200 dark:bg-black"
    >
      <Image src={Back} alt="" className="absolute animate-spin-slow z-10"/>
      <div className="flex-col flex gap-10 max-w-2xl lg:flex">
        <p className="font-black text-6xl animate-appear-from-below bg-clip-text text-transparent bg-gradient-to-r from-dark-blue via-dark-pink to-dark-purple
         py-2 dark:text-white"
        >
          Say hello to a world of innovative design
        </p>
        <p className="font-thin text-3xl animate-appear-from-below ">We strive for the <b>best</b> possible outcome for
          your firm.</p>
        <button
          className="flex gap-2 self-start border dark:border-white-trans py-2 px-4 transition
          duration-500 rounded-xl dark:hover:border-white hover:-translate-y-px z-10 relative border-black-trans hover:border-black"
        >
          <Icon path={mdiLaptop} size={1}/>
          <p
            className="dark:text-white text-base font-semibold"
          >
            See what we have to offer =&gt;
          </p>
        </button>
      </div>
      <div className="z-10">
        <Image
          src={MacFrontWhite}
          alt=""
          width={400}
          height={400}
          className="hidden dark:block"
        />
        <Image
          src={MacBackWhite}
          alt=""
          width={400}
          height={400}
          className="hidden dark:md:block"
        />
        <Image
          src={MacFrontDark}
          alt=""
          width={400}
          height={400}
          className="dark:hidden"
        />
        <Image
          src={MacBackDark}
          alt=""
          width={400}
          height={400}
          className="dark:hidden hidden md:block"
        />
      </div>
    </section>
  )
}

export default Hero