import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "../../src/components/SectionHeading";
import { SiteShell } from "../../src/components/SiteShell";
import {
  processSteps,
  stats,
} from "../../src/data/siteContent";

const mapsHref =
  "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";

function getStatHref(label: string) {
  if (label === "Insurance claims") {
    return "/insurance";
  }

  if (label === "Based in") {
    return mapsHref;
  }

  return null;
}

export default function AboutPage() {
  const featureImage = {
    imageSrc:
      "/Images/beforeAndAfter/organized_photos_aligned/after_work/project_04_general_lee_after_work_03.jpg",
    imageAlt: "Show-quality orange muscle car finished after bodywork and paint",
  };

  return (
    <SiteShell>
      <section className="page-hero relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-lime-100/80 sm:text-sm sm:tracking-[0.32em]">
              About
            </p>
            <h1 className="mt-6 font-['Space_Grotesk'] text-[2.45rem] font-semibold leading-[1.06] text-white sm:mt-5 sm:text-5xl lg:text-6xl">
              Decades of shop experience, straightforward communication, and
              work built to leave right.
            </h1>
            <p className="mt-6 max-w-3xl text-[1.06rem] leading-8 text-slate-300 sm:mt-5 sm:text-lg">
              McCloud&apos;s Collision & Customs is based in Cookeville and
              serves customers across Putnam County and surrounding areas with
              collision repair, refinishing, restoration work, and custom
              projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-lime relative">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:px-8 lg:py-20 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="What matters"
              title="Customers are looking for a shop they can trust."
              description="That means clean repair planning, clear answers, and finish work that does not look rushed."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const href = getStatHref(stat.label);
                const className =
                  "rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]";

                const content = (
                  <>
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                  </>
                );

                if (href === mapsHref) {
                  return (
                    <a
                      key={stat.label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  );
                }

                if (href) {
                  return (
                    <Link key={stat.label} href={href} className={className}>
                      {content}
                    </Link>
                  );
                }

                return (
                  <div key={stat.label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-base leading-8 text-slate-300">
              The shop handles everyday collision jobs and more specialized
              builds with the same focus on fit, finish, and honest
              communication. Customers are not limited to Cookeville. Many come
              in from Putnam County and nearby communities because they want the
              work done properly the first time.
            </p>
          </div>

          <div className="panel overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="relative h-72 w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={featureImage.imageSrc}
                alt={featureImage.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">
              Shop standards
            </p>
            <p className="mt-3 text-base leading-8 text-slate-300">
              The goal is not just to repair the damage. It is to send the
              vehicle back out looking finished, reading straight, and feeling
              complete. Computerized color matching ensures the paint blends
              seamlessly with the original factory finish.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-cool relative border-y border-white/10 bg-slate-950/20">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="How the shop works"
            title="Simple process, clear expectations"
            description="Customers usually want to know what happens after the first call or estimate."
          />
          <div className="mt-14 grid gap-5 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="panel rounded-[1.8rem] p-6">
                <p className="text-sm font-semibold text-lime-100">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
