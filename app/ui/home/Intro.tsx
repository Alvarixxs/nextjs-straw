import Image from "next/image";
import Selection from "../../../public/resources/selection.svg"
import Analytics from "../../../public/resources/analytics.svg"
import Report from "../../../public/resources/report.svg"
import Nextjs from "../../../public/icons/Next.js.svg"
import Reakt from "../../../public/icons/React.svg"
import Js from "../../../public/icons/JavaScript.svg"
import Tailwind from "../../../public/icons/Tailwind CSS.svg"
import Vercel from "../../../public/icons/Vercel.svg"
import Link from "next/link";

function Intro() {
  return (
    <section
      className="min-h-screen dark:bg-waves-pattern-black bg-waves-pattern-white bg-center bg-no-repeat bg-cover flex items-center
      justify-center px-6 py-20 gap-6 flex-col-reverse md:flex-row z-10"
    >
      <Image
        src={Report}
        alt=""
        width={400}
        height={400}
      />
      <div className="flex flex-col max-w-3xl gap-6 backdrop-blur-md p-6">
        <h1 className="font-bold text-5xl">Skyrocket your business to the <em className="font-thin">next</em> level</h1>
        <div className="flex justify-between items-center p-6 border-y border-white-trans">
          <Link href="https://www.javascript.com/" target="_blank"><Image src={Js} alt="" width={40} height={40} /></Link>
          <Link href="https://react.dev/" target="_blank"><Image src={Reakt} alt="" width={40} height={40} className="animate-spin-medium"/></Link>
          <Link href="https://tailwindcss.com/" target="_blank"><Image src={Tailwind} alt="" width={40} height={40} /></Link>
          <Link href="https://nextjs.org/" target="_blank"><Image src={Nextjs} alt="" width={40} height={40} /></Link>
          <Link href="https://vercel.com/" target="_blank"><Image src={Vercel} alt="" width={40} height={40} /></Link>
        </div>
        <p
          className="dark:text-neutral-200 tracking-wide leading-7"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex font-light text-xl gap-6 flex-wrap">
          {linkTags.map((item) => (
            <Link href={item.href} key={item.label} className="self-start rounded-xl p-2 hover:-translate-y-px transition duration-300 hover:bg-white-trans">
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Intro

const linkTags = [
  {
    label: "Learn.",
    href: "/",
  },
  {
    label: "Reference.",
    href: "/",
  },
  {
    label: "Community.",
    href: "/",
  },
  {
    label: "Blog.",
    href: "/",
  },
]