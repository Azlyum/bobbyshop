"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const routeTargets = [
  "/about",
  "/services",
  "/insurance",
  "/gallery",
  "/contact",
  "/faq",
] as const;

type IdleHandle = number;
type IdleCallback = () => void;

function scheduleIdle(callback: IdleCallback): IdleHandle {
  const requestIdle = window.requestIdleCallback?.bind(window);

  if (requestIdle) {
    return requestIdle(() => callback(), { timeout: 1200 });
  }

  return window.setTimeout(callback, 250);
}

function cancelIdle(handle: IdleHandle) {
  const cancelIdle = window.cancelIdleCallback?.bind(window);

  if (cancelIdle) {
    cancelIdle(handle);
    return;
  }

  window.clearTimeout(handle);
}

export function RouteWarmup() {
  const router = useRouter();

  useEffect(() => {
    const warmRoutes = () => {
      routeTargets.forEach((href) => {
        router.prefetch(href);
      });
    };

    const timeoutId = window.setTimeout(() => {
      warmRoutes();
    }, 350);

    const idleId = scheduleIdle(warmRoutes);

    return () => {
      window.clearTimeout(timeoutId);
      cancelIdle(idleId);
    };
  }, [router]);

  return null;
}
