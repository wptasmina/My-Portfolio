
// type SectionTitleProps = {
//   heading: string
//   subHeading: string
// }

import { SectionTitleProps } from "@/types";

export default function SectionTitle({ heading, subHeading}: SectionTitleProps) {
  return (
    <section className="flex items-center justify-center flex-col py-6">
      
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
        {heading}
      </h2>
      <p className="text-content dark:text-gray-400 md:text-xl text-xs max-w-2xl mx-auto">{subHeading}</p>
    </section>
  );
}
