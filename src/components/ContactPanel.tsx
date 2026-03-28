import { useMemo, useState } from 'react';

export function ContactPanel() {
  const [senderName, setSenderName] = useState('');
  const [projectType, setProjectType] = useState('Collision estimate');

  const mailtoHref = useMemo(() => {
    const subject = `${projectType} inquiry`;
    const body = `Name: ${senderName || 'TBD'}\nProject: ${projectType}\n\nI want to discuss scope, pricing, and next available appointment.`;
    return `mailto:mccloudscollisioncustom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [projectType, senderName]);

  return (
    <aside className="panel rounded-[2rem] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-8">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Contact</p>
      <h3 className="mt-4 font-['Space_Grotesk'] text-3xl font-semibold leading-tight text-white">Reach the shop directly by email.</h3>
      <p className="mt-4 text-base leading-8 text-slate-300">
        Use the quick mail action for collision estimates, custom work questions, scheduling, or photo-based damage reviews.
      </p>

      <a
        href="tel:9313193933"
        className="mt-6 inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15"
      >
        Give us a call: (931) 319-3933
      </a>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Your name</span>
          <input
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-orange-300 focus:bg-slate-950/90"
            placeholder="Jordan Ellis"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Project type</span>
          <select
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 focus:border-orange-300 focus:bg-slate-950/90"
          >
            <option>Collision estimate</option>
            <option>Custom bodywork</option>
            <option>Paint and refinish</option>
            <option>Insurance repair question</option>
          </select>
        </label>
      </div>

      <a
        href={mailtoHref}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-orange-300/35 bg-orange-300/10 px-6 py-4 text-sm font-semibold text-orange-100 transition hover:border-orange-200 hover:bg-orange-300/15"
      >
        Compose shop email
      </a>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Phone</p>
          <p className="mt-3 text-lg font-semibold text-white">(931) 319-3933</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Address</p>
          <p className="mt-3 text-lg font-semibold leading-7 text-white">1309 W Broad St, Cookeville, TN 38501</p>
        </div>
      </div>
    </aside>
  );
}
