'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    // Hier kan later een API-route of externe service aangesloten worden.
    // Voor nu simuleren we een verzending.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('sent');
  }

  if (status === 'error') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-red-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <h3 className="text-lg font-semibold text-red-900">Er ging iets mis</h3>
        <p className="text-red-700 mt-1 mb-4">
          Uw bericht kon niet worden verzonden. Probeer het opnieuw of bel ons direct.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-red-800 hover:text-red-900 underline"
        >
          Opnieuw proberen
        </button>
      </div>
    );
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-green-900">Bericht verzonden</h3>
        <p className="text-green-700 mt-1">
          Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Telefoon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition"
            placeholder="Uw telefoonnummer"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          E-mailadres <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition"
          placeholder="uw@email.nl"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
          Onderwerp
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition bg-white"
        >
          <option value="">Selecteer een onderwerp</option>
          <option value="offerte">Offerte aanvragen</option>
          <option value="binnenschilderwerk">Binnenschilderwerk</option>
          <option value="buitenschilderwerk">Buitenschilderwerk</option>
          <option value="glaswerk">Glaswerk</option>
          <option value="wandafwerking">Wandafwerking</option>
          <option value="onderhoud">Onderhoudsschilderwerk</option>
          <option value="overig">Overig</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition resize-y"
          placeholder="Vertel ons over uw project of stel uw vraag..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto bg-brand-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Verzenden...' : 'Verstuur bericht'}
      </button>
    </form>
  );
}
