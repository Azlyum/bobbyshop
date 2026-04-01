"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { ShowcaseCard } from "./ShowcaseCard";
import { ImageSpotlight } from "./ImageSpotlight";
import { SpotlightImage } from "./InteractiveImage";
import { serviceHighlights, showcaseBuilds } from "../data/siteContent";

export function ServicesPageContent() {
  const [activeImage, setActiveImage] = useState<SpotlightImage | null>(null);

  return (
    <>
      <ImageSpotlight
        image={activeImage}
        pinned={Boolean(activeImage)}
        onClose={() => setActiveImage(null)}
      />

      <section className="page-hero relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-lime-100/80 sm:text-sm sm:tracking-[0.32em]">
              Services
            </p>
            <h1 className="mt-6 font-['Space_Grotesk'] text-[2.45rem] font-semibold leading-[1.06] text-white sm:mt-5 sm:text-5xl lg:text-6xl">
              Collision repair, paint, and custom work built around clean finish.
            </h1>
            <p className="mt-6 max-w-3xl text-[1.06rem] leading-8 text-slate-300 sm:mt-5 sm:text-lg">
              The shop&apos;s core work includes collision repair, paint and
              refinish, and custom fabrication-minded jobs that need careful fit
              and finish.
            </p>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-lime relative">
        <div className="mx-auto w-full max-w-7xl px-6 pt-18 pb-24 lg:px-8 lg:pt-20">
          <SectionHeading
            eyebrow="Specialties"
            title="Core service lines"
            description="The main work the shop handles most often."
          />
          <div className="mt-14 grid gap-7 xl:grid-cols-3">
            {serviceHighlights.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onPreviewStart={() => undefined}
                onPreviewEnd={() => undefined}
                onOpen={setActiveImage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-warm border-y border-white/10 bg-slate-950/25">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Featured work"
            title="Recent examples of the shop&apos;s finish standards"
            description="A quick look at repair and custom jobs that show the kind of result the shop aims to deliver."
          />
          <div className="mt-14 grid gap-7 xl:grid-cols-3">
            {showcaseBuilds.map((build) => (
              <ShowcaseCard
                key={build.name}
                build={build}
                onPreviewStart={() => undefined}
                onPreviewEnd={() => undefined}
                onOpen={setActiveImage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
