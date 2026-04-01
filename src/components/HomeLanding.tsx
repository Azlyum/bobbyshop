"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { beforeAfterCases, shopTheme, stats } from "../data/siteContent";

const mapsHref =
  "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";

const quickLinks = [
  {
    href: "/services",
    eyebrow: "Services",
    title: "Collision repair, paint, and fabrication",
    description: "Core service categories with examples of finished work.",
  },
  {
    href: "/gallery",
    eyebrow: "Gallery",
    title: "Before-and-after jobs and finished builds",
    description: "Finished work, transformation photos, and project highlights.",
  },
  {
    href: "/contact",
    eyebrow: "Contact",
    title: "Call, email, and location details",
    description: "Direct ways to reach the shop and get the conversation started.",
  },
  {
    href: "/faq",
    eyebrow: "FAQ",
    title: "Common questions from customers",
    description:
      "Quick answers about vehicle types, insurance, and how to reach the shop.",
  },
] as const;

const wowCase = beforeAfterCases[2] ?? beforeAfterCases[0];

function getStatHref(label: string) {
  if (label === "Years experience") {
    return "/about";
  }

  if (label === "Insurance claims") {
    return "/insurance";
  }

  return mapsHref;
}

export function HomeLanding() {
  const beforeImages = useMemo(
    () =>
      wowCase.gallery?.filter((image) =>
        image.label.toLowerCase().includes("before"),
      ) ?? [],
    [],
  );
  const afterImages = useMemo(
    () =>
      wowCase.gallery?.filter(
        (image) => !image.label.toLowerCase().includes("before"),
      ) ?? [
        {
          label: "After finished view",
          imageSrc: wowCase.imageSrc,
          imageAlt: wowCase.imageAlt,
        },
      ],
    [],
  );

  const [beforeIndex, setBeforeIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);

  useEffect(() => {
    if (beforeImages.length <= 1 && afterImages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (beforeImages.length > 1) {
        setBeforeIndex((current) => (current + 1) % beforeImages.length);
      }

      if (afterImages.length > 1) {
        setAfterIndex((current) => (current + 1) % afterImages.length);
      }
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [afterImages.length, beforeImages.length]);

  const activeBeforeImage = beforeImages[beforeIndex] ?? afterImages[0];
  const activeAfterImage = afterImages[afterIndex];

  return (
    <>
      <section className="relative isolate border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,12,0.18),rgba(15,22,18,0.62)),radial-gradient(circle_at_32%_34%,rgba(255,255,255,0.12),rgba(230,255,220,0.06)_20%,transparent_42%),radial-gradient(circle_at_68%_34%,rgba(190,242,100,0.16),rgba(163,230,53,0.08)_14%,transparent_28%),radial-gradient(circle_at_78%_42%,rgba(4,8,14,0.36),rgba(3,6,10,0.2)_24%,transparent_46%),radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="hero-structure absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
        <div className="ambient-orb absolute left-[-5rem] top-16 h-56 w-56 rounded-full bg-lime-300/12 blur-[110px]" />
        <div className="ambient-orb-delayed absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-cyan-200/8 blur-[130px]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 lg:px-8 lg:py-24 xl:flex-row xl:items-center">
          <div className="max-w-4xl">
            <p className="reveal-up text-sm font-semibold uppercase tracking-[0.24em] text-lime-100/80">
              McCloud&apos;s Collision & Customs
            </p>
            <h1 className="reveal-up reveal-delay-1 mt-5 font-['Space_Grotesk'] text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl xl:text-[5rem]">
              Collision Repair &amp; Custom Paint in Cookeville, TN. Done Right
              the First Time.
            </h1>
            <p className="reveal-up reveal-delay-2 mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Insurance help, clean body lines, custom paint, and restoration
              work in{" "}
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50"
              >
                Cookeville, TN
              </a>
              , serving drivers across Putnam County and surrounding areas.
              Honest shop communication and real repair experience without the
              runaround.
            </p>
            <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9313193933"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Call now for a free estimate
              </a>
              <Link
                href="/gallery"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 px-6 py-4 text-center text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                View gallery
              </Link>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const href = getStatHref(stat.label);
                const className =
                  "panel reveal-up block rounded-[1.75rem] p-5 transition hover:-translate-y-0.5 hover:border-lime-300/25";
                const content = (
                  <>
                    <dt className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">
                      {stat.value}
                    </dd>
                  </>
                );

                if (stat.label === "Based in") {
                  return (
                    <a
                      key={stat.label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                      style={{ animationDelay: "400ms" }}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link
                    key={stat.label}
                    href={href}
                    className={className}
                    style={{
                      animationDelay:
                        stat.label === "Years experience" ? "240ms" : "320ms",
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </dl>
          </div>

          <div className="panel shine-sweep reveal-up reveal-delay-4 relative mx-auto w-full max-w-xl overflow-hidden rounded-[2.25rem] p-5 sm:p-8">
            <div className="logo-halo absolute left-1/2 top-[42%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 sm:h-[26rem] sm:w-[26rem]" />
            <div className="absolute right-[-2.5rem] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-lime-200/10 blur-[72px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_38%)]" />
            <div className="relative">
              <div className="hero-float relative mx-auto h-48 w-full max-w-[19rem] sm:h-52 sm:max-w-[21rem]">
                <Image
                  src={shopTheme.imageSrc}
                  alt={shopTheme.imageAlt}
                  fill
                  sizes="(max-width: 640px) 19rem, 21rem"
                  priority
                  className="image-soft-fade object-contain"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {activeBeforeImage ? (
                  <div className="overflow-hidden rounded-[1.35rem] border border-red-300/18 bg-red-400/[0.08]">
                    <div className="relative h-36 w-full sm:h-44">
                      <Image
                        key={activeBeforeImage.imageSrc}
                        src={activeBeforeImage.imageSrc}
                        alt={activeBeforeImage.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, 18rem"
                        className="image-soft-fade object-cover"
                      />
                    </div>
                    <div className="px-3 py-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-red-50">
                        Before
                      </p>
                    </div>
                  </div>
                ) : null}
                <div className="overflow-hidden rounded-[1.35rem] border border-emerald-300/18 bg-emerald-400/[0.08]">
                  <div className="relative h-36 w-full sm:h-44">
                    <Image
                      key={activeAfterImage.imageSrc}
                      src={activeAfterImage.imageSrc}
                      alt={activeAfterImage.imageAlt}
                      fill
                      sizes="(max-width: 640px) 50vw, 18rem"
                      className="image-soft-fade object-cover"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-50">
                      After
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm leading-7 text-slate-300">
                {wowCase.vehicle} | {wowCase.workType}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="reveal-up text-sm uppercase tracking-[0.32em] text-cyan-200">
            Explore
          </p>
          <h2 className="reveal-up reveal-delay-1 mt-5 font-['Space_Grotesk'] text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Find the section you need.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quickLinks.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="panel shine-sweep reveal-up rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-lime-300/25"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                {item.eyebrow}
              </p>
              <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
