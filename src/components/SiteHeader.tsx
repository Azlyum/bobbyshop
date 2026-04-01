"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insurance", label: "Insurance" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;

const mapsHref =
  "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501";

function linkClassName(active: boolean) {
  return `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
    active
      ? "border-lime-300/40 bg-lime-300/12 text-lime-50"
      : "border-white/10 text-slate-200 hover:border-white/25 hover:bg-white/5"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(20,29,23,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3 lg:px-8">
          <div className="min-w-0">
            <Link href="/" className="block">
              <p className="max-w-[13rem] font-['Space_Grotesk'] text-sm font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:max-w-[18rem] sm:text-base sm:tracking-[0.09em] md:max-w-[20rem] md:text-lg xl:max-w-none xl:text-xl xl:tracking-[0.1em] xl:whitespace-nowrap">
                McCloud&apos;s Collision & Customs
              </p>
            </Link>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400 transition hover:text-slate-200"
            >
              Cookeville, TN
            </a>
          </div>

          <nav className="hidden basis-full flex-wrap items-center gap-2 border-t border-white/8 pt-3 xl:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:9313193933"
              className="hidden xl:inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-lime-300/40 bg-lime-300/12 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-50 shadow-[0_10px_30px_rgba(132,204,22,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-lime-200 hover:bg-lime-300/18 hover:shadow-[0_18px_36px_rgba(132,204,22,0.2)]"
            >
              Call (931) 319-3933
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/25 hover:bg-white/10 xl:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-site-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(13,20,16,0.46)] backdrop-blur-sm transition xl:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <div
        id="mobile-site-menu"
        className={`fixed right-4 top-20 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(24,34,27,0.94),rgba(31,43,35,0.9))] p-4 shadow-[0_30px_90px_rgba(2,6,23,0.4)] transition duration-300 xl:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-[1.25rem] border px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                pathname === item.href
                  ? "border-lime-300/40 bg-lime-300/12 text-lime-50"
                  : "border-white/10 bg-white/[0.03] text-slate-100 hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 grid gap-3">
          <a
            href="tel:9313193933"
            className="inline-flex items-center justify-center rounded-full border border-lime-300/40 bg-lime-300/12 px-4 py-4 text-sm font-semibold text-lime-50 transition hover:border-lime-200 hover:bg-lime-300/18"
          >
            Call the shop
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/12 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-white/22 hover:bg-white/5"
          >
            Open location
          </a>
        </div>
      </div>
    </>
  );
}
