import Image from "next/image";
import Back from "@/public/bg/ccchaos.svg";
import Icon from "@mdi/react";
import {mdiLaptop} from "@mdi/js";
import MacFront from "@/public/resources/MacFront.png";
import MacBack from "@/public/resources/MacBack.png";

function Home() {
  return (
    <section
      className="flex flex-col min-h-screen md:flex-row items-center justify-center bg-black relative px-6 py-20 overflow-hidden"
    >
      <Image src={Back} alt="" className="absolute animate-spin-slow z-10"/>
      <div className="flex-col flex gap-10 max-w-2xl lg:flex">
        <p className="font-black text-6xl animate-appear-from-below">Say hello to a world of innovative design</p>
        <p className="font-thin text-3xl animate-appear-from-below">We strive for the <b>best</b> possible outcome for your firm.</p>
        <button
          className="flex gap-2 self-start border border-white-trans py-2 px-4 transition
          duration-500 rounded-xl hover:border-white hover:-translate-y-px z-10 relative"
        >
          <Icon path={mdiLaptop} size={1}/>
          <p className="text-white text-base font-semibold">See what we have to offer =&gt;</p>
        </button>
      </div>
      <div className="z-10">
        <Image
          src={MacFront}
          alt=""
          width={400}
          height={400}
        />
        <Image
          src={MacBack}
          alt=""
          width={400}
          height={400}
          className="hidden md:block"
        />
      </div>
    </section>
  )
}

export default Home