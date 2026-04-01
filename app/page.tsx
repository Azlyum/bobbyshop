import { HomeLanding } from "../src/components/HomeLanding";
import { RouteWarmup } from "../src/components/RouteWarmup";
import { SiteShell } from "../src/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <RouteWarmup />
      <HomeLanding />
    </SiteShell>
  );
}
