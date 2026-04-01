import { useEffect, useMemo, useRef, useState } from "react";
import { BeforeAfterCard } from "../components/BeforeAfterCard";
import { ContactPanel } from "../components/ContactPanel";
import { FaqList } from "../components/FaqList";
import { GalleryModal } from "../components/GalleryModal";
import { ImageSpotlight } from "../components/ImageSpotlight";
import {
  InteractiveImage,
  SpotlightImage,
} from "../components/InteractiveImage";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { ShowcaseCard } from "../components/ShowcaseCard";
import {
  beforeAfterCases,
  heroGallery,
  processSteps,
  serviceHighlights,
  shopTheme,
  showcaseBuilds,
  stats,
} from "../data/siteContent";

function App() {
  type HeroServiceLink = {
    title: string;
    description: string;
  };

  const heroServiceLinks = [
    {
      title: "Insurance repairs",
      description:
        "Estimate support, claim-related collision work, and repair planning that helps move insurance jobs through the shop cleanly.",
    },
    {
      title: "Custom paint",
      description:
        "Full resprays, color matching, graphics, and one-of-a-kind paint work for cars, trucks, bikes, and specialty parts.",
    },
    {
      title: "Restoration work",
      description:
        "Older vehicles and worn parts get body correction, prep, refinishing, and detail work to bring them back the right way.",
    },
    {
      title: "Bike and truck builds",
      description:
        "From motorcycles to custom truck projects, the shop handles fabrication-minded work that needs fit, finish, and hand-built attention.",
    },
  ] satisfies readonly HeroServiceLink[];

  const [hoveredImage, setHoveredImage] = useState<SpotlightImage | null>(null);
  const [pinnedImage, setPinnedImage] = useState<SpotlightImage | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [beforeAfterStartIndex, setBeforeAfterStartIndex] = useState(0);
  const [activeHeroService, setActiveHeroService] = useState<HeroServiceLink>(
    heroServiceLinks[0],
  );
  const previewStartTimeoutRef = useRef<number | null>(null);
  const previewEndTimeoutRef = useRef<number | null>(null);
  const previewHistoryActiveRef = useRef(false);
  const suppressPreviewPopCloseRef = useRef(false);
  const facebookHref =
    "https://www.facebook.com/profile.php?id=61555435137428&__tn__=%2Cd";
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";
  const locationLinkClassName =
    "underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50";

  const activeImage = pinnedImage ?? hoveredImage;
  const galleryPreviewImages = useMemo(() => heroGallery.slice(0, 4), []);
  const visibleBeforeAfterCases = useMemo(() => {
    const visibleCount = Math.min(3, beforeAfterCases.length);

    return Array.from(
      { length: visibleCount },
      (_, offset) =>
        beforeAfterCases[
          (beforeAfterStartIndex + offset) % beforeAfterCases.length
        ],
    );
  }, [beforeAfterStartIndex]);

  const previewThemeImage = {
    src: shopTheme.imageSrc,
    alt: shopTheme.imageAlt,
    label: "McClouds Collision and Customs logo",
  };

  const handlePreviewStart = (image: SpotlightImage) => {
    if (pinnedImage) {
      return;
    }

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    if (previewStartTimeoutRef.current) {
      window.clearTimeout(previewStartTimeoutRef.current);
      previewStartTimeoutRef.current = null;
    }

    if (previewEndTimeoutRef.current) {
      window.clearTimeout(previewEndTimeoutRef.current);
      previewEndTimeoutRef.current = null;
    }

    previewStartTimeoutRef.current = window.setTimeout(() => {
      setHoveredImage((currentImage) =>
        currentImage?.src === image.src ? currentImage : image,
      );
      previewStartTimeoutRef.current = null;
    }, 180);
  };

  const handlePreviewEnd = () => {
    if (pinnedImage) {
      return;
    }

    if (previewStartTimeoutRef.current) {
      window.clearTimeout(previewStartTimeoutRef.current);
      previewStartTimeoutRef.current = null;
    }

    if (previewEndTimeoutRef.current) {
      window.clearTimeout(previewEndTimeoutRef.current);
    }

    previewEndTimeoutRef.current = window.setTimeout(() => {
      setHoveredImage(null);
      previewEndTimeoutRef.current = null;
    }, 90);
  };

  const handleOpenImage = (image: SpotlightImage) => {
    if (!pinnedImage && !previewHistoryActiveRef.current) {
      window.history.pushState({ imagePreview: true }, "");
      previewHistoryActiveRef.current = true;
    }

    setPinnedImage(image);
    setHoveredImage(null);
  };

  const handleCloseImage = () => {
    if (previewHistoryActiveRef.current) {
      suppressPreviewPopCloseRef.current = true;
      previewHistoryActiveRef.current = false;
      window.history.back();
      return;
    }

    setPinnedImage(null);
    setHoveredImage(null);
  };

  const handleOpenGallery = () => {
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  useEffect(
    () => () => {
      if (previewStartTimeoutRef.current) {
        window.clearTimeout(previewStartTimeoutRef.current);
      }

      if (previewEndTimeoutRef.current) {
        window.clearTimeout(previewEndTimeoutRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    const handlePopState = () => {
      if (suppressPreviewPopCloseRef.current) {
        suppressPreviewPopCloseRef.current = false;
        setPinnedImage(null);
        setHoveredImage(null);
        return;
      }

      if (previewHistoryActiveRef.current) {
        previewHistoryActiveRef.current = false;
        setPinnedImage(null);
        setHoveredImage(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (beforeAfterCases.length <= 3) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setBeforeAfterStartIndex(
        (currentIndex) => (currentIndex + 1) % beforeAfterCases.length,
      );
    }, 30000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.12),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(34,211,238,0.14),transparent_22%)]">
      <GalleryModal
        images={heroGallery}
        open={galleryOpen}
        onClose={handleCloseGallery}
      />
      <ImageSpotlight
        image={activeImage}
        pinned={Boolean(pinnedImage)}
        onClose={handleCloseImage}
      />
      <section className="relative isolate border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-lime-300/10 via-cyan-300/10 to-transparent blur-3xl" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-lime-300/10 blur-[120px]" />
        <div className="absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-cyan-300/10 blur-[140px]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-8 lg:px-8">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[56rem]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-lime-200">
                Collision Repair &amp; Custom Paint in{" "}
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-lime-100/30 underline-offset-4 transition hover:decoration-lime-100/70"
                >
                  Cookeville, TN
                </a>
              </p>
              <h1 className="mt-3 text-balance font-['Space_Grotesk'] text-2xl font-semibold uppercase tracking-[0.08em] text-slate-100 sm:whitespace-nowrap sm:text-3xl lg:text-[2.6rem]">
                McCloud&apos;s Collision & Customs
              </h1>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-slate-400">
                Serving{" "}
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={locationLinkClassName}
                >
                  Cookeville, Tennessee
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-300">
                All your custom automotive painting needs. Cars, trucks, and
                bikes. 35 years experience.
              </p>
            </div>
            <div className="pt-2 sm:pt-10">
              <a
                href="tel:9313193933"
                className="inline-flex items-center justify-center self-start rounded-full border border-lime-300/35 bg-lime-300/10 px-5 py-3 text-sm font-semibold text-lime-50 transition hover:border-lime-200 hover:bg-lime-300/15 sm:self-auto"
              >
                Call now: (931) 319-3933
              </a>
            </div>
          </header>

          <div className="grid flex-1 items-start gap-14 py-14 lg:grid-cols-[1fr_1.02fr] lg:py-20">
            <div>
              <div className="relative mb-8 w-full max-w-[38rem]">
                <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_18%_18%,rgba(163,230,53,0.22),transparent_26%),radial-gradient(circle_at_78%_28%,rgba(34,211,238,0.2),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.68))]" />
                <InteractiveImage
                  image={previewThemeImage}
                  wrapperClassName="rounded-[2.25rem] border border-lime-300/20 bg-transparent px-5 py-5 shadow-[0_38px_120px_rgba(2,6,23,0.55)] sm:px-8 sm:py-7"
                  imageClassName="relative mx-auto h-40 w-full object-contain sm:h-48 lg:h-56"
                  overlayLabel="Open logo artwork"
                  onPreviewStart={handlePreviewStart}
                  onPreviewEnd={handlePreviewEnd}
                  onOpen={handleOpenImage}
                />
              </div>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-lime-100 transition hover:border-lime-200/40 hover:bg-lime-300/15"
              >
                Based in Cookeville, TN at 1309 W. Broad Street.
              </a>
              <h1 className="mt-8 max-w-4xl font-['Space_Grotesk'] text-5xl font-semibold leading-[0.94] text-white sm:text-6xl lg:text-[5.2rem]">
                Collision repair and custom paint in{" "}
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={locationLinkClassName}
                >
                  Cookeville, Tennessee
                </a>
                .
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                McCloud&apos;s handles collision repair, custom paint,
                fabrication, bikes, trucks, insurance work, and restoration
                jobs for drivers across{" "}
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={locationLinkClassName}
                >
                  Cookeville, Tennessee
                </a>
                . One of the few shops with a computer color scanner to match
                paint and mix the paint in-house.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {heroServiceLinks.map((item) => {
                  const active = item.title === activeHeroService.title;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveHeroService(item)}
                      className={`rounded-full border px-4 py-2 text-left transition ${
                        active
                          ? "border-lime-300/35 bg-lime-300/10 text-lime-50"
                          : "border-white/12 bg-white/5 hover:border-white/25 hover:bg-white/8"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 max-w-2xl rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-lime-100/80">
                  {activeHeroService.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {activeHeroService.description}
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:9313193933"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Call Now for a Free Estimate
                </a>
                <a
                  href="mailto:Mccloudscollision@yahoo.com?subject=Shop%20Inquiry"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Get a Quote Today
                </a>
                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-blue-300/25 bg-blue-300/10 px-6 py-4 text-sm font-semibold text-blue-50 transition hover:border-blue-200 hover:bg-blue-300/15"
                >
                  Facebook
                </a>
                <a
                  href="tel:9313193933"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-6 py-4 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/15"
                >
                  Call the shop now: (931) 319-3933
                </a>
              </div>
              <dl className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="panel rounded-[1.75rem] p-5">
                    <dt className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">
                      {stat.label === "Based in" ? (
                        <a
                          href={mapsHref}
                          target="_blank"
                          rel="noreferrer"
                          className={locationLinkClassName}
                        >
                          {stat.value}
                        </a>
                      ) : (
                        stat.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-5 lg:pt-3">
              <div className="panel relative overflow-hidden rounded-[2.25rem] p-5 sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_38%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-sm">
                      <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                        Gallery
                      </p>
                      <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">
                        Finished work from the shop.
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        Open the full gallery to browse the shop&apos;s finished
                        after-work images in one place.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {galleryPreviewImages.map((item) => (
                      <figure
                        key={item.label}
                        className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-950/55"
                      >
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="h-56 w-full object-cover sm:h-60"
                        />
                        <figcaption className="border-t border-white/10 px-4 py-4 text-sm font-medium text-slate-200">
                          {item.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleOpenGallery}
                      className="inline-flex items-center justify-center rounded-full border border-lime-300/35 bg-lime-300/10 px-6 py-4 text-sm font-semibold text-lime-50 transition hover:border-lime-200 hover:bg-lime-300/15"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel relative overflow-hidden rounded-[2.25rem] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_right,rgba(34,211,238,0.12),transparent_35%)]" />
                <div className="relative">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-sm">
                      <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                        How the shop runs
                      </p>
                      <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">
                        Simple process. Straight communication.
                      </h2>
                    </div>
                    {/* <span className="inline-flex min-w-[8.5rem] items-center justify-center self-start rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 sm:self-auto">
                      Booking now
                    </span> */}
                  </div>
                  <div className="mt-8 space-y-4">
                    {processSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 transition duration-200 hover:border-white/20 hover:bg-slate-950/55"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-950">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-300">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8"
      >
        <SectionHeading
          eyebrow="Specialties"
          title="Repair and customization work built around clean fit, strong finish, and honest turnaround."
          description="From collision restoration to custom body changes."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              onPreviewStart={handlePreviewStart}
              onPreviewEnd={handlePreviewEnd}
              onOpen={handleOpenImage}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Shop standards"
            title="Work that looks consistent from the estimate to the final handoff."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {showcaseBuilds.map((build) => (
              <ShowcaseCard
                key={build.name}
                build={build}
                onPreviewStart={handlePreviewStart}
                onPreviewEnd={handlePreviewEnd}
                onOpen={handleOpenImage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Before and after"
          title={
            <>
              Before and after collision repair and paint work in{" "}
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className={locationLinkClassName}
              >
                Cookeville, TN
              </a>
              .
            </>
          }
          description="Real jobs from the shop with visible transformations, cleaner body lines, and finished paintwork that show what the work looks like when it leaves right."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visibleBeforeAfterCases.map((item) => (
            <BeforeAfterCard
              key={`${item.vehicle}-${beforeAfterStartIndex}`}
              item={item}
              onPreviewStart={handlePreviewStart}
              onPreviewEnd={handlePreviewEnd}
              onOpen={handleOpenImage}
            />
          ))}
        </div>
      </section>

      <section
        id="booking"
        className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.9fr] lg:px-8"
      >
        {/* Booking form is disabled until the backend workflow is ready.
        <div>
          <SectionHeading
            eyebrow="Booking"
            title="Book an appointment with the shop."
            description="Request a time for an estimate, collision inspection, paint consultation, or custom bodywork visit."
          />
          <BookingForm />
        </div>
        */}
        <ContactPanel />
      </section>

      <section className="border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions customers usually ask before they stop by."
              description={
                <>
                  Serving{" "}
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className={locationLinkClassName}
                  >
                    Cookeville, Tennessee
                  </a>{" "}
                  with collision repair, custom paint, and insurance-related
                  repairs. If the job is time-sensitive, call the shop directly
                  for the fastest answer.
                </>
              }
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9313193933"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Call now for a free estimate
              </a>
              <a
                href="tel: 9313193933"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                Tel : (931) 319-3933
              </a>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Based in{" "}
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className={locationLinkClassName}
              >
                Cookeville, TN
              </a>
              . Locally owned. 35+ years of experience with collision repair,
              custom paint, restoration work, and bike and truck builds.
            </p>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  );
}

export default App;
