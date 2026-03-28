import { BeforeAfterCard } from '../components/BeforeAfterCard';
import { BookingForm } from '../components/BookingForm';
import { ContactPanel } from '../components/ContactPanel';
import { FaqList } from '../components/FaqList';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ShowcaseCard } from '../components/ShowcaseCard';
import { beforeAfterCases, processSteps, serviceHighlights, showcaseBuilds, stats } from '../data/siteContent';

function App() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-400/20 to-transparent blur-3xl" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 lg:px-8">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-['Space_Grotesk'] text-xl font-semibold uppercase tracking-[0.35em] text-slate-200">
                McCloud&apos;s Collision and Custom
              </p>
              <p className="mt-2 text-sm text-slate-400">Collision repair, custom bodywork, paint, refinishing</p>
            </div>
            <a
              href="#booking"
              className="inline-flex items-center justify-center self-start rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-300/15 sm:self-auto"
            >
              Book an Appointment
            </a>
          </header>

          <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div>
              <p className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
                Trusted collision and custom craftsmanship
              </p>
              <h1 className="mt-8 max-w-4xl font-['Space_Grotesk'] text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
                Collision repair and custom builds finished to a higher standard.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                McCloud&apos;s Collision and Custom serves Cookeville, Tennessee with collision work, paint correction,
                custom body upgrades, refinishing, and detail-first shop care that puts the vehicle back on the road
                looking right.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Schedule a shop consultation
                </a>
                <a
                  href="mailto:mccloudscollisioncustom@gmail.com?subject=Shop%20Inquiry"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Email the shop
                </a>
                <a
                  href="tel:9313193933"
                  className="inline-flex items-center justify-center rounded-full border border-orange-300/25 bg-orange-300/10 px-6 py-4 text-sm font-semibold text-orange-100 transition hover:border-orange-200 hover:bg-orange-300/15"
                >
                  Give us a call: (931) 319-3933
                </a>
              </div>
              <dl className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="panel rounded-3xl p-5">
                    <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</dt>
                    <dd className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-orange-300/10" />
              <div className="relative">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-sm">
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Current queue</p>
                    <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold text-white">Active repair and custom bookings</h2>
                  </div>
                  <span className="inline-flex min-w-[8.5rem] items-center justify-center self-start rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 sm:self-auto">
                    4 slots left
                  </span>
                </div>
                <div className="mt-8 space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 transition duration-200 hover:border-white/20 hover:bg-slate-950/55">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-950">
                          0{index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Specialties"
          title="Repair and customization work built around clean fit, strong finish, and honest turnaround."
          description="From collision restoration to custom body changes."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((service) => (
            <ServiceCard key={service.title} service={service} />
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
              <ShowcaseCard key={build.name} build={build} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Before and after"
          title="A clear look at what changes when the work is done right."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {beforeAfterCases.map((item) => (
            <BeforeAfterCard key={item.vehicle} item={item} />
          ))}
        </div>
      </section>

      <section id="booking" className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Booking"
            title="Book an appointment with the shop."
            description="Request a time for an estimate, collision inspection, paint consultation, or custom bodywork visit."
          />
          <BookingForm />
        </div>
        <ContactPanel />
      </section>

      <section className="border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions customers usually ask before they stop by."
              description="If the job is time-sensitive or you want to talk through the work directly, give us a call and the shop can point you in the right direction."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9313193933"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Give us a call
              </a>
              <a
                href="tel:9313193933"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                (931) 319-3933
              </a>
            </div>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  );
}

export default App;
