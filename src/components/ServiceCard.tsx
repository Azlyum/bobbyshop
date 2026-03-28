import { ServiceHighlight } from '../data/siteContent';

type ServiceCardProps = {
  service: ServiceHighlight;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="panel flex h-full flex-col rounded-[2rem] p-6">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{service.kicker}</p>
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
