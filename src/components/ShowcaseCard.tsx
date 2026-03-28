import { ShowcaseBuild } from '../data/siteContent';

type ShowcaseCardProps = {
  build: ShowcaseBuild;
};

export function ShowcaseCard({ build }: ShowcaseCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className={`absolute inset-0 opacity-70 blur-3xl transition group-hover:opacity-100 ${build.glowClass}`} />
      <div className="relative flex h-full flex-col">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{build.category}</p>
        <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{build.name}</h3>
        <p className="mt-4 text-base leading-8 text-slate-300">{build.description}</p>
        <div className="mt-auto flex items-center justify-between pt-8 text-sm text-slate-300">
          <span>{build.timeline}</span>
          <span className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-200">
            {build.finish}
          </span>
        </div>
      </div>
    </article>
  );
}
