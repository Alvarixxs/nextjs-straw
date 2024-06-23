import Link from "next/link";
import Icon from "@mdi/react";
import {mdiAbjadHebrew, mdiSlashForward} from "@mdi/js";
import {museoModerno} from "@/app/ui/fonts";

function Logo() {
  return (
    <Link href="/home" className="flex items-center">
      <Icon path={mdiAbjadHebrew} size={2}/>
      <Icon path={mdiSlashForward} size={1}/>
      <p className={`${museoModerno.className} text-3xl font-medium`}>STRAW</p>
    </Link>
  )
}

export default Logo