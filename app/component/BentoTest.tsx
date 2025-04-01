import React from "react";
import { BentoGrid, BentoGridItem } from "../component/Bentogrid";
import {

} from "@tabler/icons-react";
import { Compare } from "./compare"; // Import the Compare component

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Proprietary Technology",
    description: "Developed in-house, our self-learning system continuously refines your resume and interview performance—no third-party wrappers here.",
    header: (
      <Compare
        firstImage="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
        secondImage="https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg"
        className="w-full h-full"
        showHandlebar={true}
        autoplay={true}
      />
    ),
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Innovative Personalization",
    description: "Our custom-built LLM and AI algorithms analyze your profile and target job to create a tailored, high-impact resume.",
    header: <Skeleton />,
    className: "md:col-span-1",

  },
  {
    title: "Practice & Continuous Improvement",
    description: "AI-driven mock interviews deliver real-time analytics and actionable feedback to rapidly boost your interview skills.",
    header: <Skeleton />,
    className: "md:col-span-1",

  },
  {
    title: "Stunning Design",
    description:
      "Advanced design algorithms power our smart templates, ensuring visually striking resumes that achieve top ATS scores.",
    header: <Skeleton />,
    className: "md:col-span-2",

  },
];
