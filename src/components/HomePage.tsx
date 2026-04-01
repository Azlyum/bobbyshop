"use client";

import Image from "next/image";
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

function HomePage() {
  type HeroServiceLink = {
    title: string;
    description: string;
  };
  type SpotlightSource = "page" | "gallery" | null;

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
  const [showFloatingCallPill, setShowFloatingCallPill] = useState(false);
  const [activeHeroService, setActiveHeroService] = useState<HeroServiceLink>(
    heroServiceLinks[0],
  );
  const previewStartTimeoutRef = useRef<number | null>(null);
  const previewEndTimeoutRef = useRef<number | null>(null);
  const previewHistoryActiveRef = useRef(false);
  const galleryHistoryActiveRef = useRef(false);
  const suppressPreviewPopCloseRef = useRef(false);
  const suppressGalleryPopCloseRef = useRef(false);
  const spotlightSourceRef = useRef<SpotlightSource>(null);
  const restoreGalleryAfterSpotlightRef = useRef(false);
  const galleryScrollTopRef = useRef(0);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const facebookHref =
    "https://www.facebook.com/profile.php?id=61555435137428&__tn__=%2Cd";
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";
  const locationLinkClassName =
    "underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50";

  const activeImage = pinnedImage ?? hoveredImage;
  const heroTransformationCase = useMemo(
    () => beforeAfterCases[2] ?? beforeAfterCases[0],
    [],
  );
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

  const heroTransformationBefore = useMemo<SpotlightImage>(() => {
    const beforeImage = heroTransformationCase.gallery?.find((image) =>
      image.label.toLowerCase().includes("before"),
    ) ??
      heroTransformationCase.gallery?.[0] ?? {
        label: "Before work",
        imageSrc: heroTransformationCase.imageSrc,
        imageAlt: heroTransformationCase.imageAlt,
      };

    return {
      src: beforeImage.imageSrc,
      alt: beforeImage.imageAlt,
      label: `${heroTransformationCase.vehicle} before`,
      sizes: "(max-width: 1024px) 100vw, 50vw",
    };
  }, [heroTransformationCase]);
  const heroTransformationAfter = useMemo<SpotlightImage>(
    () => ({
      src: heroTransformationCase.imageSrc,
      alt: heroTransformationCase.imageAlt,
      label: `${heroTransformationCase.vehicle} after`,
      sizes: "(max-width: 1024px) 100vw, 50vw",
      gallery: heroTransformationCase.gallery?.map((image) => ({
        src: image.imageSrc,
        alt: image.imageAlt,
        label: image.label,
      })),
    }),
    [heroTransformationCase],
  );

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

    spotlightSourceRef.current = "page";
    restoreGalleryAfterSpotlightRef.current = false;
    setPinnedImage(image);
    setHoveredImage(null);
  };

  const handleOpenGalleryImage = (image: SpotlightImage) => {
    if (galleryOpen) {
      setGalleryOpen(false);
    }

    if (!pinnedImage && !previewHistoryActiveRef.current) {
      window.history.pushState({ imagePreview: true }, "");
      previewHistoryActiveRef.current = true;
    }

    spotlightSourceRef.current = "gallery";
    restoreGalleryAfterSpotlightRef.current = true;
    setPinnedImage(image);
    setHoveredImage(null);
  };

  const handleCloseImage = () => {
    const shouldRestoreGallery = restoreGalleryAfterSpotlightRef.current;

    if (previewHistoryActiveRef.current) {
      suppressPreviewPopCloseRef.current = true;
      previewHistoryActiveRef.current = false;
      window.history.back();
      return;
    }

    spotlightSourceRef.current = null;
    restoreGalleryAfterSpotlightRef.current = false;
    setPinnedImage(null);
    setHoveredImage(null);

    if (shouldRestoreGallery) {
      setGalleryOpen(true);
    }
  };

  const handleOpenGallery = () => {
    if (!galleryHistoryActiveRef.current) {
      window.history.pushState({ galleryPreview: true }, "");
      galleryHistoryActiveRef.current = true;
    }

    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    if (galleryHistoryActiveRef.current) {
      suppressGalleryPopCloseRef.current = true;
      galleryHistoryActiveRef.current = false;
      window.history.back();
      return;
    }

    if (spotlightSourceRef.current !== "gallery") {
      restoreGalleryAfterSpotlightRef.current = false;
    }

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
        const shouldRestoreGallery = restoreGalleryAfterSpotlightRef.current;
        suppressPreviewPopCloseRef.current = false;
        spotlightSourceRef.current = null;
        restoreGalleryAfterSpotlightRef.current = false;
        setPinnedImage(null);
        setHoveredImage(null);

        if (shouldRestoreGallery) {
          setGalleryOpen(true);
        }

        return;
      }

      if (suppressGalleryPopCloseRef.current) {
        suppressGalleryPopCloseRef.current = false;

        if (spotlightSourceRef.current !== "gallery") {
          restoreGalleryAfterSpotlightRef.current = false;
        }

        setGalleryOpen(false);
        return;
      }

      if (previewHistoryActiveRef.current) {
        const shouldRestoreGallery = restoreGalleryAfterSpotlightRef.current;
        previewHistoryActiveRef.current = false;
        spotlightSourceRef.current = null;
        restoreGalleryAfterSpotlightRef.current = false;
        setPinnedImage(null);
        setHoveredImage(null);

        if (shouldRestoreGallery) {
          setGalleryOpen(true);
        }

        return;
      }

      if (galleryHistoryActiveRef.current) {
        galleryHistoryActiveRef.current = false;

        if (spotlightSourceRef.current !== "gallery") {
          restoreGalleryAfterSpotlightRef.current = false;
        }

        setGalleryOpen(false);
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

  useEffect(() => {
    const heroSection = heroSectionRef.current;

    if (!heroSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingCallPill(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -35% 0px",
      },
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#050705_0%,#0b100c_36%,#111611_100%),radial-gradient(circle_at_top_left,rgba(163,230,53,0.1),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.05),transparent_22%)]">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-semibold uppercase tracking-[0.1em] text-white sm:text-xl">
              McCloud&apos;s Collision & Customs
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400 transition hover:text-slate-200"
            >
              Cookeville, TN
            </a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-50 transition hover:border-lime-200 hover:bg-lime-300/15"
            >
              Location
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 transition hover:border-white/25 hover:bg-white/5"
            >
              Services
            </a>
            <a
              href="#before-after"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 transition hover:border-white/25 hover:bg-white/5"
            >
              Before &amp; After
            </a>
            <a
              href="#booking"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 transition hover:border-white/25 hover:bg-white/5"
            >
              Contact
            </a>
          </div>
          <a
            href="tel:9313193933"
            className="inline-flex items-center justify-center rounded-full border border-lime-300/40 bg-lime-300/12 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-50 shadow-[0_10px_30px_rgba(132,204,22,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-lime-200 hover:bg-lime-300/18 hover:shadow-[0_18px_36px_rgba(132,204,22,0.2)] sm:px-5"
          >
            Call (931) 319-3933
          </a>
        </div>
      </div>
      <a
        href="tel:9313193933"
        className={`fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center rounded-full border border-lime-300/40 bg-slate-950/92 px-5 py-4 text-sm font-semibold text-lime-50 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-200 hover:bg-slate-900 hover:shadow-[0_24px_60px_rgba(132,204,22,0.18)] sm:bottom-6 sm:left-auto sm:right-6 sm:px-6 ${
          showFloatingCallPill
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="sm:hidden">Call Now</span>
        <span className="hidden sm:inline">
          Call Now for a Free Estimate: (931) 319-3933
        </span>
      </a>
      <GalleryModal
        images={heroGallery}
        open={galleryOpen}
        onClose={handleCloseGallery}
        onOpenImage={handleOpenGalleryImage}
        initialScrollTop={galleryScrollTopRef.current}
        onScrollPositionChange={(scrollTop) => {
          galleryScrollTopRef.current = scrollTop;
        }}
      />
      <ImageSpotlight
        image={activeImage}
        pinned={Boolean(pinnedImage)}
        onClose={handleCloseImage}
      />
      <section
        ref={heroSectionRef}
        className="relative isolate border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.38),rgba(2,6,23,0.78)),radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-lime-300/12 via-white/6 to-transparent blur-3xl" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-lime-300/10 blur-[120px]" />
        <div className="absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-white/8 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(135deg,transparent_0,transparent_46%,rgba(255,255,255,0.85)_50%,transparent_54%,transparent_100%)] [background-size:16px_16px]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-8 lg:px-8">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[56rem]">
              <p className="text-lg font-semibold uppercase tracking-[0.1em] text-slate-200 sm:text-xl lg:text-2xl">
                McCloud&apos;s Collision &amp; Customs
              </p>
              <div className="mt-2">
                <h1 className="max-w-4xl font-['Space_Grotesk'] text-[2.4rem] font-semibold leading-[0.94] tracking-[-0.03em] text-white sm:text-5xl lg:text-[5.2rem]">
                  Collision Repair &amp; Custom Paint in{" "}
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-lime-100/30 underline-offset-4 transition hover:decoration-lime-100/70"
                  >
                    Cookeville, TN
                  </a>
                  . Done Right the First Time.
                </h1>
              </div>
              <div
                className="pointer-events-none absolute right-[-7rem] top-0 hidden h-[22rem] w-[40rem] overflow-hidden rounded-[30%] opacity-95 xl:block"
                aria-hidden="true"
              >
                <Image
                  src={shopTheme.imageSrc}
                  alt=""
                  fill
                  sizes="40rem"
                  priority
                  className="object-contain"
                />
              </div>
              <div
                className="pointer-events-none relative mt-3 h-24 w-56 overflow-hidden rounded-[30%] opacity-95 sm:mt-4 sm:h-28 sm:w-64 lg:hidden"
                aria-hidden="true"
              >
                <Image
                  src={shopTheme.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 14rem, 16rem"
                  priority
                  className="object-contain"
                />
              </div>
              <p className="mt-4 max-w-3xl font-['Space_Grotesk'] text-lg font-semibold text-lime-100 sm:text-3xl">
                Insurance help, clean body lines, and 35+ years of real shop
                experience.
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-base">
                No runaround. No guesswork. Just clean, honest work done right.
              </p>
              <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-slate-300">
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
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Free estimates, insurance claim support, and repair work that
                does not leave you chasing people for answers. McCloud&apos;s
                handles collision damage, paint match, restoration work, and
                custom projects with the kind of fit and finish customers want
                back on the road.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 font-medium text-slate-100 transition hover:border-lime-300/25 hover:bg-white/8"
                >
                  Cookeville, TN
                </a>
                <a
                  href="tel:9313193933"
                  className="rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 font-medium text-lime-50 transition hover:border-lime-200 hover:bg-lime-300/15"
                >
                  Tap to call: (931) 319-3933
                </a>
                <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 font-medium text-slate-100">
                  Trusted local shop
                </span>
              </div>
            </div>
            <div className="pt-2 sm:pt-9">
              <a
                href="tel:9313193933"
                className="inline-flex items-center justify-center self-start rounded-full border border-lime-300/45 bg-lime-300/18 px-6 py-4 text-center text-sm font-semibold text-lime-50 shadow-[0_16px_34px_rgba(132,204,22,0.2)] transition duration-300 hover:-translate-y-0.5 hover:border-lime-200 hover:bg-lime-300/24 hover:shadow-[0_22px_44px_rgba(132,204,22,0.28)] sm:self-auto"
              >
                Call Now for a Free Estimate | Get an Answer Today
              </a>
              <p className="mt-3 text-center text-xs font-medium text-slate-300 sm:self-center">
                Free estimates. Insurance claims welcome.
              </p>
            </div>
          </header>

          <div className="grid flex-1 items-start gap-14 py-14 lg:grid-cols-[1fr_1.02fr] lg:py-20">
            <div>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-lime-100 transition hover:border-lime-200/40 hover:bg-lime-300/15"
              >
                Based in Cookeville, TN at 1309 W. Broad Street.
              </a>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                McCloud&apos;s handles collision repair, custom paint,
                fabrication, bikes, trucks, insurance work, and restoration jobs
                for drivers across{" "}
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
              <div className="mt-6 inline-flex max-w-2xl flex-wrap gap-2 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                {[
                  "Free Estimates",
                  "Insurance Claims Welcome",
                  "Locally Owned in Cookeville",
                  "35+ Years Experience",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-lime-300/18 bg-lime-300/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-lime-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
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
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="tel:9313193933"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Call Now for a Free Estimate
                </a>
                <a
                  href="mailto:Mccloudscollision@yahoo.com?subject=Shop%20Inquiry"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 px-6 py-4 text-center text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Get a Quote Today
                </a>
                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-lime-300/30 hover:bg-white/10"
                >
                  Facebook
                </a>
                <a
                  href="tel:9313193933"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-lime-300/25 bg-lime-300/10 px-6 py-4 text-center text-sm font-semibold text-lime-50 transition hover:border-lime-200 hover:bg-lime-300/15"
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_38%)]" />
                <div className="relative">
                  <div className="max-w-xl">
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                      Featured transformation
                    </p>
                    <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.02em] text-white">
                      Damage in. Clean finish out.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-200">
                      Real before-and-after repair work from McCloud&apos;s
                      Collision &amp; Customs in{" "}
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className={locationLinkClassName}
                      >
                        Cookeville, TN
                      </a>
                      , showing the kind of finish customers can expect when the
                      job is done right.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {[
                      {
                        label: "Before",
                        accentClassName:
                          "border-red-300/20 bg-red-400/[0.08] text-red-100",
                        image: heroTransformationBefore,
                      },
                      {
                        label: "After",
                        accentClassName:
                          "border-emerald-300/20 bg-emerald-400/[0.08] text-emerald-100",
                        image: heroTransformationAfter,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="overflow-hidden rounded-[1.9rem] border border-lime-300/18 bg-slate-950/58 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
                      >
                        <div className="relative">
                          <InteractiveImage
                            image={item.image}
                            wrapperClassName="rounded-none border-0 bg-transparent"
                            imageClassName="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:brightness-110 sm:h-72"
                            overlayLabel={`Open ${item.label.toLowerCase()} image`}
                            onPreviewStart={handlePreviewStart}
                            onPreviewEnd={handlePreviewEnd}
                            onOpen={handleOpenImage}
                          />
                          <span
                            className={`pointer-events-none absolute left-4 top-4 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] shadow-[0_12px_28px_rgba(0,0,0,0.22)] ${item.accentClassName}`}
                          >
                            {item.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Featured job
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {heroTransformationCase.vehicle} |{" "}
                        {heroTransformationCase.workType}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        {heroTransformationCase.highlight}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleOpenGallery}
                      className="inline-flex items-center justify-center rounded-full border border-lime-300/40 bg-lime-300/14 px-6 py-4 text-sm font-semibold text-lime-50 shadow-[0_14px_36px_rgba(132,204,22,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-lime-200 hover:bg-lime-300/20 hover:shadow-[0_20px_44px_rgba(132,204,22,0.24)]"
                    >
                      View Full Gallery
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

      <section
        id="before-after"
        className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.92),rgba(3,7,18,0.98))]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_85%_80%,rgba(163,230,53,0.07),transparent_22%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
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
        </div>
      </section>

      <section id="booking" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.96)),radial-gradient(circle_at_top_right,rgba(163,230,53,0.08),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(135deg,transparent_0,transparent_46%,rgba(255,255,255,0.95)_50%,transparent_54%,transparent_100%)] [background-size:18px_18px]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.9fr] lg:px-8">
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
        </div>
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

export default HomePage;
