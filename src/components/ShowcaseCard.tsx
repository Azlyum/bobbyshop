import { InteractiveImage, SpotlightImage } from './InteractiveImage';
import { ShowcaseBuild } from '../data/siteContent';

type ShowcaseCardProps = {
  build: ShowcaseBuild;
  onPreviewStart: (image: SpotlightImage) => void;
  onPreviewEnd: () => void;
  onOpen: (image: SpotlightImage) => void;
};

export function ShowcaseCard({ build, onPreviewStart, onPreviewEnd, onOpen }: ShowcaseCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className={`absolute inset-0 opacity-70 blur-3xl transition group-hover:opacity-100 ${build.glowClass}`} />
      <div className="relative flex h-full flex-col">
        <InteractiveImage
          image={{ src: build.imageSrc, alt: build.imageAlt, label: build.name }}
          wrapperClassName="rounded-[1.5rem] border border-white/10 bg-slate-950/60"
          imageClassName="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          onPreviewStart={onPreviewStart}
          onPreviewEnd={onPreviewEnd}
          onOpen={onOpen}
        />
        <p className="mt-5 text-sm uppercase tracking-[0.32em] text-slate-400">{build.category}</p>
        <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{build.name}</h3>
        <p className="mt-4 text-base leading-8 text-slate-300">{build.description}</p>
        <div className="mt-auto flex items-end justify-between gap-6 pt-8 text-sm text-slate-300">
          <span className="max-w-[12rem] leading-6">{build.timeline}</span>
          <span className="max-w-[10rem] text-right text-xs uppercase tracking-[0.24em] text-slate-200">{build.finish}</span>
        </div>
      </div>
    </article>
  );
}
