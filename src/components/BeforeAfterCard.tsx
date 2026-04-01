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
    <article className="panel flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-6">
      <InteractiveImage
        image={spotlightImage}
        wrapperClassName="rounded-[1.5rem] border border-white/10 bg-slate-950/60"
        imageClassName="h-56 w-full object-cover"
        onPreviewStart={onPreviewStart}
        onPreviewEnd={onPreviewEnd}
        onOpen={onOpen}
      />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{item.workType}</p>
          <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{item.vehicle}</h3>
          <p className="mt-2 text-sm text-cyan-100">{item.highlight}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        <div className="rounded-[1.5rem] border border-red-300/15 bg-red-400/[0.07] p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-red-100/80">Before</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">{item.before}</p>
        </div>
        <div className="rounded-[1.5rem] border border-emerald-300/15 bg-emerald-400/[0.07] p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/80">After</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">{item.after}</p>
        </div>
      </div>
    </article>
  );
}
