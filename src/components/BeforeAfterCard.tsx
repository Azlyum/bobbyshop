import { useMemo } from 'react';
import { InteractiveImage, SpotlightImage } from './InteractiveImage';
import { BeforeAfterCase } from '../data/siteContent';

type BeforeAfterCardProps = {
  item: BeforeAfterCase;
  onPreviewStart: (image: SpotlightImage) => void;
  onPreviewEnd: () => void;
  onOpen: (image: SpotlightImage) => void;
};

export function BeforeAfterCard({ item, onPreviewStart, onPreviewEnd, onOpen }: BeforeAfterCardProps) {
  const spotlightImage = useMemo<SpotlightImage>(
    () => ({
      src: item.imageSrc,
      alt: item.imageAlt,
      label: item.vehicle,
      gallery: item.gallery?.map((image) => ({
        src: image.imageSrc,
        alt: image.imageAlt,
        label: image.label
      }))
    }),
    [item.gallery, item.imageAlt, item.imageSrc, item.vehicle]
  );

  return (
    <article className="panel group flex h-full flex-col overflow-hidden rounded-[2rem] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/25 sm:p-6">
      <InteractiveImage
        image={spotlightImage}
        wrapperClassName="rounded-[1.5rem] border border-white/10 bg-slate-950/60"
        imageClassName="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
        onPreviewStart={onPreviewStart}
        onPreviewEnd={onPreviewEnd}
        onOpen={onOpen}
      />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{item.workType}</p>
          <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{item.vehicle}</h3>
          <p className="mt-2 text-sm text-lime-100">{item.highlight}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        <div className="rounded-[1.5rem] border border-red-300/18 bg-red-400/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <p className="inline-flex rounded-full border border-red-200/18 bg-red-950/45 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-red-50 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">BEFORE</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">{item.before}</p>
        </div>
        <div className="rounded-[1.5rem] border border-emerald-300/18 bg-emerald-400/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <p className="inline-flex rounded-full border border-emerald-200/18 bg-emerald-950/45 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-50 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">AFTER</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">{item.after}</p>
        </div>
      </div>
    </article>
  );
}
