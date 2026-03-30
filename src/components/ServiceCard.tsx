import { InteractiveImage, SpotlightImage } from './InteractiveImage';
import { ServiceHighlight } from '../data/siteContent';

type ServiceCardProps = {
  service: ServiceHighlight;
  onPreviewStart: (image: SpotlightImage) => void;
  onPreviewEnd: () => void;
  onOpen: (image: SpotlightImage) => void;
};

export function ServiceCard({ service, onPreviewStart, onPreviewEnd, onOpen }: ServiceCardProps) {
  return (
    <article className="panel group flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-6">
      <InteractiveImage
        image={{ src: service.imageSrc, alt: service.imageAlt, label: service.title }}
        wrapperClassName="rounded-[1.5rem] border border-white/10 bg-slate-950/60"
        imageClassName="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        onPreviewStart={onPreviewStart}
        onPreviewEnd={onPreviewEnd}
        onOpen={onOpen}
      />
      <p className="mt-5 text-sm uppercase tracking-[0.32em] text-slate-400">{service.kicker}</p>
      <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-4 text-base leading-8 text-slate-300">{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.points.map((point) => (
          <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
