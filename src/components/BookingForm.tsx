import { FormEvent, useMemo, useState } from 'react';
import { bookingServices, preferredSlots } from '../data/siteContent';

type BookingState = {
  customerName: string;
  email: string;
  vehicle: string;
  service: string;
  date: string;
  slot: string;
  notes: string;
};

const initialState: BookingState = {
  customerName: '',
  email: '',
  vehicle: '',
  service: bookingServices[0],
  date: '',
  slot: preferredSlots[0],
  notes: ''
};

export function BookingForm() {
  const [formState, setFormState] = useState<BookingState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const summary = useMemo(
    () => `${formState.customerName || 'Client'} requested ${formState.service.toLowerCase()} for ${formState.vehicle || 'vehicle pending'}.`,
    [formState]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="panel mt-12 rounded-[2rem] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Client name</span>
            <input
              required
              value={formState.customerName}
              onChange={(event) => setFormState((current) => ({ ...current, customerName: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300 focus:bg-slate-950/90"
              placeholder="Jordan Ellis"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
            <input
              required
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300 focus:bg-slate-950/90"
              placeholder="jordan@clientmail.com"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Vehicle</span>
            <input
              required
              value={formState.vehicle}
              onChange={(event) => setFormState((current) => ({ ...current, vehicle: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300 focus:bg-slate-950/90"
              placeholder="2021 Ford F-150"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Service</span>
            <select
              value={formState.service}
              onChange={(event) => setFormState((current) => ({ ...current, service: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 focus:border-cyan-300 focus:bg-slate-950/90"
            >
              {bookingServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Preferred date</span>
            <input
              required
              type="date"
              value={formState.date}
              onChange={(event) => setFormState((current) => ({ ...current, date: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 focus:border-cyan-300 focus:bg-slate-950/90"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Preferred slot</span>
            <select
              value={formState.slot}
              onChange={(event) => setFormState((current) => ({ ...current, slot: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 focus:border-cyan-300 focus:bg-slate-950/90"
            >
              {preferredSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Vehicle notes</span>
          <textarea
            rows={5}
            value={formState.notes}
            onChange={(event) => setFormState((current) => ({ ...current, notes: event.target.value }))}
            className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300 focus:bg-slate-950/90"
            placeholder="Insurance claim, quarter panel damage, custom paint request, or any details the shop should know."
          />
        </label>

        <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Consults</p>
            <p className="mt-2 text-base font-semibold text-white">Estimates and walkarounds</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Collision</p>
            <p className="mt-2 text-base font-semibold text-white">Repair planning</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Custom</p>
            <p className="mt-2 text-base font-semibold text-white">Paint and body upgrades</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Request build slot
          </button>
          <p className="text-sm text-slate-400">{summary}</p>
        </div>
      </form>

      {isSubmitted && (
        <div className="mt-5 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          Appointment request received for {formState.date || 'your selected date'} at {formState.slot}.
        </div>
      )}
    </div>
  );
}
