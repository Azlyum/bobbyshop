import { FaqList } from "../../src/components/FaqList";
import { SiteShell } from "../../src/components/SiteShell";

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="page-hero relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-lime-100/80">
              FAQ
            </p>
            <h1 className="mt-5 font-['Space_Grotesk'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Common questions customers ask before they stop by.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Quick answers about the kind of work the shop takes on and the best
              way to make first contact.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-cool relative">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:px-8 lg:py-20 xl:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
              Fastest contact
            </p>
            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">
              Call the shop if the job is time-sensitive.
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9313193933"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Call now for a free estimate
              </a>
              <a
                href="mailto:Mccloudscollision@yahoo.com?subject=Shop%20Inquiry"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                Email the shop
              </a>
            </div>
          </div>
          <FaqList />
        </div>
      </section>
    </SiteShell>
  );
}
