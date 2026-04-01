"use client";

import { useState } from "react";
import { BeforeAfterCard } from "./BeforeAfterCard";
import { GalleryModal } from "./GalleryModal";
import { ImageSpotlight } from "./ImageSpotlight";
import { SectionHeading } from "./SectionHeading";
import { SpotlightImage } from "./InteractiveImage";
import { beforeAfterCases, heroGallery } from "../data/siteContent";

export function GalleryPageContent() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryScrollTop, setGalleryScrollTop] = useState(0);
  const [activeImage, setActiveImage] = useState<SpotlightImage | null>(null);
  const [spotlightOrigin, setSpotlightOrigin] = useState<"gallery" | "cards" | null>(
    null,
  );

  function handleCloseSpotlight() {
    const shouldRestoreGallery = spotlightOrigin === "gallery";

    setActiveImage(null);
    setSpotlightOrigin(null);

    if (shouldRestoreGallery) {
      setGalleryOpen(true);
    }
  }

  return (
    <>
      <GalleryModal
        images={heroGallery}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onOpenImage={(image) => {
          setGalleryOpen(false);
          setSpotlightOrigin("gallery");
          setActiveImage(image);
        }}
        initialScrollTop={galleryScrollTop}
        onScrollPositionChange={setGalleryScrollTop}
      />
      <ImageSpotlight
        image={activeImage}
        pinned={Boolean(activeImage)}
        onClose={handleCloseSpotlight}
      />

      <section className="page-hero relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-4xl">
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-lime-100/80 sm:text-sm sm:tracking-[0.32em]">
                Gallery
              </p>
              <h1 className="mt-6 font-['Space_Grotesk'] text-[2.45rem] font-semibold leading-[1.06] text-white sm:mt-5 sm:text-5xl lg:text-6xl">
                Before-and-after work and finished builds from the shop.
              </h1>
              <p className="mt-6 max-w-3xl text-[1.06rem] leading-8 text-slate-300 sm:mt-5 sm:text-lg">
                Browse repair work, custom finishes, and project photos in one
                place.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-lime-300/40 bg-lime-300/14 px-6 py-4 text-sm font-semibold text-lime-50 shadow-[0_14px_36px_rgba(132,204,22,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-lime-200 hover:bg-lime-300/20"
            >
              Open full gallery
            </button>
          </div>
        </div>
      </section>

      <section className="section-atmosphere section-atmosphere-cool relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(14,20,24,0.72),rgba(17,24,29,0.82))]">
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Before and after"
            title="Real projects from the shop"
            description="Repairs, restorations, and paint jobs with clear starting points and finished outcomes."
          />
          <div className="mt-14 grid gap-7 xl:grid-cols-3">
            {beforeAfterCases.map((item) => (
              <BeforeAfterCard
                key={item.vehicle}
                item={item}
                onPreviewStart={() => undefined}
                onPreviewEnd={() => undefined}
                onOpen={(image) => {
                  setSpotlightOrigin("cards");
                  setActiveImage(image);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
