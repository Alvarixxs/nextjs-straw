'use client'

import Accordion, {AccordionItem} from "@/app/ui/utils/Accordion";
import Icon from '@mdi/react';
import { mdiWatermark, mdiPencilRuler, mdiLanguageHtml5, mdiNodejs } from '@mdi/js';

const data = [
  {
    header: "BRANDING",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vulputate enim nulla aliquet porttitor lacus. Arcu cursus euismod quis viverra nibh. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Eget nullam non nisi est sit amet facilisis magna etiam. Id faucibus nisl tincidunt eget nullam non nisi est sit. Maecenas pharetra convallis posuere morbi leo urna. Morbi non arcu risus quis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sollicitudin aliquam ultrices sagittis orci. Eget mauris pharetra et ultrices neque ornare. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Felis bibendum ut tristique et egestas quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Risus at ultrices mi tempus. Suspendisse sed nisi lacus sed.",
    path: mdiWatermark
  },
  {
    header: "UX/UI DESIGN",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vulputate enim nulla aliquet porttitor lacus. Arcu cursus euismod quis viverra nibh. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Eget nullam non nisi est sit amet facilisis magna etiam. Id faucibus nisl tincidunt eget nullam non nisi est sit. Maecenas pharetra convallis posuere morbi leo urna. Morbi non arcu risus quis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sollicitudin aliquam ultrices sagittis orci. Eget mauris pharetra et ultrices neque ornare. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Felis bibendum ut tristique et egestas quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Risus at ultrices mi tempus. Suspendisse sed nisi lacus sed.",
    path: mdiPencilRuler
  },
  {
    header: "FRONTEND DEVELOPMENT",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vulputate enim nulla aliquet porttitor lacus. Arcu cursus euismod quis viverra nibh. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Eget nullam non nisi est sit amet facilisis magna etiam. Id faucibus nisl tincidunt eget nullam non nisi est sit. Maecenas pharetra convallis posuere morbi leo urna. Morbi non arcu risus quis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sollicitudin aliquam ultrices sagittis orci. Eget mauris pharetra et ultrices neque ornare. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Felis bibendum ut tristique et egestas quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Risus at ultrices mi tempus. Suspendisse sed nisi lacus sed.",
    path: mdiLanguageHtml5
  },
  {
    header: "BACKEND DEVELOPMENT",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vulputate enim nulla aliquet porttitor lacus. Arcu cursus euismod quis viverra nibh. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Eget nullam non nisi est sit amet facilisis magna etiam. Id faucibus nisl tincidunt eget nullam non nisi est sit. Maecenas pharetra convallis posuere morbi leo urna. Morbi non arcu risus quis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sollicitudin aliquam ultrices sagittis orci. Eget mauris pharetra et ultrices neque ornare. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Felis bibendum ut tristique et egestas quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Risus at ultrices mi tempus. Suspendisse sed nisi lacus sed.",
    path: mdiNodejs
  },
]

function Questions() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 gap-6">
      <h1
        className="bg-clip-text text-transparent bg-gradient-to-r from-dark-blue via-dark-pink to-dark-purple text-5xl font-bold p-6">
        Frequently asked questions.
      </h1>
      <Accordion
        value={null}
        className=" flex flex-col text-md"
      >
        {data.map((item) => (
          <AccordionItem
            key={item.header}
            value={item.header}
            trigger={
            <div className="font-semibold flex gap-4 items-center">
              <Icon path={item.path} size={1.5} className="group-hover:text-blue-950"/>
              <p>{item.header}</p>
            </div>}
            className="border-white-trans border-b max-w-4xl min-w-min"
          >
            <p className="text-neutral-400">{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default Questions;