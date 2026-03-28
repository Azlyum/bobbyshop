import { BeforeAfterCase } from '../data/siteContent';

type BeforeAfterCardProps = {
  item: BeforeAfterCase;
};

export function BeforeAfterCard({ item }: BeforeAfterCardProps) {
  return (
    <article className="panel flex h-full flex-col rounded-[2rem] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{item.workType}</p>
          <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{item.vehicle}</h3>
        </div>
        <span className="inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
          {item.highlight}
        </span>
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
