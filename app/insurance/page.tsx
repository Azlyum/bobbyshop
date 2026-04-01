import Image from "next/image";
import { SectionHeading } from "../../src/components/SectionHeading";
import { SiteShell } from "../../src/components/SiteShell";
import {
  beforeAfterCases,
  serviceHighlights,
} from "../../src/data/siteContent";

const mapsHref =
  "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";

export default function InsurancePage() {
  const collisionImage = serviceHighlights[0];
  const repairCase = beforeAfterCases[2] ?? beforeAfterCases[0];

  return (
    <SiteShell>
      <section className="page-hero relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-lime-100/80">
              Insurance
            </p>
            <h1 className="mt-5 font-['Space_Grotesk'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Insurance-related repair help without the usual runaround.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              If your vehicle is part of an insurance claim, the shop can help
              you through the estimate and repair conversation while keeping the
              work itself moving in the right direction.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-lime relative">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:px-8 lg:py-20 xl:grid-cols-[1fr_1fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="What to do"
              title="Start with a call and the basic claim details."
              description="The fastest path is to call the shop, explain the damage, and share what insurance information you already have."
            />
            <div className="mt-8 space-y-4 text-base leading-8 text-slate-300">
              <p>
                Have your claim number, insurance company name, and a few
                photos ready if possible.
              </p>
              <p>
                If the vehicle is drivable, call ahead and set up a time to
                bring it by. If it is not, call anyway so the next steps are
                clear before anything stalls.
              </p>
              <p>
                You can reach the shop by phone at{" "}
                <a href="tel:9313193933" className="text-white underline">
                  (931) 319-3933
                </a>{" "}
                or by visiting{" "}
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  1309 W Broad St, Cookeville, TN
                </a>
                .
              </p>
            </div>
          </div>

          <div className="panel rounded-[2rem] p-4 sm:p-5">
            <div className="relative h-72 w-full overflow-hidden rounded-[1.5rem] bg-slate-950/40">
              <Image
                src={collisionImage.imageSrc}
                alt={collisionImage.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-3"
              />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">
              Collision estimate support
            </p>
            <p className="mt-3 text-base leading-8 text-slate-300">
              The goal is to keep the communication clear while the repair plan,
              parts, and finish details are being sorted out.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-cool relative border-y border-white/10 bg-slate-950/20">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="What customers want to know"
            title="How to find the shop and what to bring"
            description="Most people are trying to solve the same problems quickly after an accident or damage estimate."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {[
              "Call before you come so the shop knows what kind of repair or estimate you need.",
              "Bring claim details, photos, and any paperwork you already have from insurance.",
              "If you are coming from outside Cookeville, the shop still serves customers across Putnam County and surrounding areas.",
            ].map((item) => (
              <div key={item} className="panel rounded-[1.8rem] p-6">
                <p className="text-base leading-8 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 panel rounded-[2rem] p-4 sm:p-5">
            <div className="relative h-72 w-full overflow-hidden rounded-[1.5rem] bg-slate-950/40">
              <Image
                src={repairCase.imageSrc}
                alt={repairCase.imageAlt}
                fill
                sizes="100vw"
                className="object-contain p-3"
              />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">
              Real repair result
            </p>
            <p className="mt-3 text-base leading-8 text-slate-300">
              Insurance-related work still has to end with clean body lines,
              consistent finish, and a handoff that feels complete.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
