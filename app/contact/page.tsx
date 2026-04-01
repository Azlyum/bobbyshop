import { ContactPanel } from "../../src/components/ContactPanel";
import { SiteShell } from "../../src/components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="page-hero relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-lime-100/80">
              Contact
            </p>
            <h1 className="mt-5 font-['Space_Grotesk'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Get in touch with the shop.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Call, email, or pull up directions for estimates, repair questions,
              and custom project discussions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-lime relative">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
          <ContactPanel />
        </div>
      </section>
    </SiteShell>
  );
}
