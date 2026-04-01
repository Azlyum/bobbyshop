import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

const mapsHref =
  "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";
const emailHref = "mailto:Mccloudscollision@yahoo.com?subject=Shop%20Inquiry";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#141c16_0%,#1a251d_36%,#223027_100%),radial-gradient(circle_at_top_left,rgba(190,242,100,0.14),transparent_26%),radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.08),transparent_24%)] pb-24 md:pb-0"
    >
      <div className="app-depth-radial pointer-events-none fixed inset-0 z-0" />
      <div className="app-grain pointer-events-none fixed inset-0 z-0" />
      <div className="app-vignette pointer-events-none fixed inset-0 z-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[28rem] bg-[radial-gradient(circle_at_74%_18%,rgba(190,242,100,0.08),transparent_24%),radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.04),transparent_18%)]" />
      <SiteHeader />
      <section className="glass-band shine-sweep relative isolate border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-3 px-6 py-4 text-sm text-slate-200 xl:grid-cols-3 lg:px-8">
          <a
            href="tel:9313193933"
            className="glass-tile reveal-up reveal-delay-1 rounded-[1.4rem] px-4 py-3 transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(132,204,22,0.12)]"
          >
            <span className="relative block text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
              Call
            </span>
            <span className="relative mt-1 block font-semibold text-white">
              (931) 319-3933
            </span>
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="glass-tile reveal-up reveal-delay-2 rounded-[1.4rem] px-4 py-3 transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(255,255,255,0.08)]"
          >
            <span className="relative block text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
              Location
            </span>
            <span className="relative mt-1 block font-semibold text-white">
              1309 W Broad St, Cookeville, TN 38501
            </span>
          </a>
          <a
            href={emailHref}
            className="glass-tile reveal-up reveal-delay-3 rounded-[1.4rem] px-4 py-3 transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(34,211,238,0.1)]"
          >
            <span className="relative block text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
              Email
            </span>
            <span className="relative mt-1 block font-semibold text-white">
              Mccloudscollision@yahoo.com
            </span>
          </a>
        </div>
      </section>
      <div className="relative z-10">{children}</div>
      <footer className="border-t border-white/10 bg-slate-950/50">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>McCloud&apos;s Collision & Customs</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:9313193933" className="transition hover:text-white">
              (931) 319-3933
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              1309 W Broad St, Cookeville, TN
            </a>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden">
        <div className="floating-dock dock-breathe shine-sweep mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-[1.8rem] border border-white/10 p-3">
          <a
            href="tel:9313193933"
            className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-lime-300/40 bg-[linear-gradient(180deg,rgba(190,242,100,0.18),rgba(163,230,53,0.08))] px-4 py-3 text-sm font-semibold text-lime-50 shadow-[0_12px_30px_rgba(132,204,22,0.16)] transition hover:-translate-y-0.5 hover:border-lime-200 hover:bg-lime-300/18"
          >
            Call Now
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7"
          >
            Directions
          </a>
        </div>
      </div>
    </main>
  );
}
