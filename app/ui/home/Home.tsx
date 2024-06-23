import Image from "next/image";
import Back from "@/public/bg/ccchaos.svg";
import Icon from "@mdi/react";
import {mdiLaptop} from "@mdi/js";
import MacFront from "@/public/resources/MacFront.png";
import MacBack from "@/public/resources/MacBack.png";

function Home() {
  return (
    <section
      className="flex flex-col min-h-screen md:flex-row items-center justify-center bg-black relative p-6"
    >
      <Image src={Back} alt="" className="absolute"/>
      <div className="flex-col flex gap-10 max-w-2xl lg:flex">
        <p className="font-black text-6xl">Say hello to a world of innovative design</p>
        <p className="font-thin text-3xl">At <b className="font-medium">straw</b> we strive for the best
          possible outcome for your firm.</p>
        <button
          className="flex gap-2 self-start text-base border border-white-trans py-2 px-4 transition duration-500
           text-white rounded-xl hover:border-white hover:-translate-y-px font-semibold z-10 "
        >
          <Icon path={mdiLaptop} size={1}/>
          See what we have to offer =&gt;
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
        />
      </div>
    </section>
  )
}

export default Home