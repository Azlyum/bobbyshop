import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.78rem] uppercase tracking-[0.26em] text-cyan-200 sm:text-sm sm:tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="mt-6 font-['Space_Grotesk'] text-[2.2rem] font-semibold leading-[1.06] text-white sm:mt-5 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-[1.06rem] leading-8 text-slate-300 sm:mt-5 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
