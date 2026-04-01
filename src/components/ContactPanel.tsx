import { useMemo, useState } from "react";

export function ContactPanel() {
  const [senderName, setSenderName] = useState("");
  const [projectType, setProjectType] = useState("Collision estimate");
  const facebookHref =
    "https://www.facebook.com/profile.php?id=61555435137428&__tn__=%2Cd";
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";

  const mailtoHref = useMemo(() => {
    const subject = `${projectType} inquiry`;
    const body = `Name: ${senderName || "TBD"}\nProject: ${projectType}\n\nI want to discuss scope, pricing, and next available appointment.`;
    return `mailto:Mccloudscollision@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [projectType, senderName]);

  const locationLinkClassName =
    "underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50";

  return (
    <aside className="panel rounded-[2rem] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-8">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
        Contact
      </p>
      <h3 className="mt-4 font-['Space_Grotesk'] text-3xl font-semibold leading-tight text-white">
        Call or email for a free estimate in{" "}
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className={locationLinkClassName}
        >
          Cookeville, TN
        </a>
        .
      </h3>
      <p className="mt-4 text-base leading-8 text-slate-300">
        Serving{" "}
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className={locationLinkClassName}
        >
          Cookeville, Tennessee
        </a>{" "}
        with collision repair, custom paint, restoration work, and
        insurance-related repairs backed by 35+ years of shop experience.
      </p>

      <a
        href="tel:9313193933"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15"
      >
        Call now for a free estimate: (931) 319-3933
      </a>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Your name
          </span>
          <input
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-orange-300 focus:bg-slate-950/90"
            placeholder="Jordan Ellis"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Project type
          </span>
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

      <a
        href={facebookHref}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-blue-300/35 bg-blue-300/10 px-6 py-4 text-sm font-semibold text-blue-100 transition hover:border-blue-200 hover:bg-blue-300/15"
      >
        Visit us on Facebook
      </a>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="tel:9313193933"
          className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4 transition hover:border-white/25 hover:bg-slate-950/60"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Phone
          </p>
          <p className="mt-3 text-lg font-semibold text-white">
            (931) 319-3933
          </p>
        </a>
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4 transition hover:border-white/25 hover:bg-slate-950/60"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Address
          </p>
          <p className="mt-3 text-lg font-semibold leading-7 text-white">
            1309 W Broad St, Cookeville, TN 38501
          </p>
        </a>
      </div>
    </aside>
  );
}
