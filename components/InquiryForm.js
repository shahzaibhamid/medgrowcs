'use client';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitInquiryAction } from '../app/inquiry/actions';

const BOOKING_URL = 'https://calendly.com/code_squad/30min';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="ds-btn if-submit" disabled={pending} aria-disabled={pending}>
      {pending ? <><span className="if-spinner" aria-hidden="true" />Sending…</> : 'Send inquiry'}
    </button>
  );
}

// Compact homepage inquiry form. Shares the same server action (and so the same
// Supabase medspa_leads table and dashboard) as the /inquiry page — just fewer fields.
export default function InquiryForm({ page = '/' }) {
  const [state, formAction] = useFormState(submitInquiryAction, {});
  const errRef = useRef(null);
  const okRef = useRef(null);

  useEffect(() => {
    if (state?.error) errRef.current?.focus();
    if (state?.ok) okRef.current?.focus();
  }, [state]);

  if (state?.ok) {
    return (
      <div className="if-done" role="status">
        <span className="if-done-mark" aria-hidden="true">✓</span>
        <h3 className="ds-h3" tabIndex={-1} ref={okRef}>Thanks — your inquiry is in.</h3>
        <p>We&rsquo;ll reply by email, usually within one business day. Prefer to talk sooner?</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ds-btn">Book a Consultation</a>
      </div>
    );
  }

  return (
    <form className="if-form" action={formAction} noValidate>
      {state?.error ? (
        <div className="if-err" role="alert" tabIndex={-1} ref={errRef}>{state.error}</div>
      ) : null}

      <div className="if-row">
        <div className="if-field">
          <label className="ds-label" htmlFor="if-name">Name</label>
          <input className="ds-input" id="if-name" name="name" type="text" autoComplete="name" maxLength={120} required />
        </div>
        <div className="if-field">
          <label className="ds-label" htmlFor="if-email">Email</label>
          <input className="ds-input" id="if-email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={200} required />
        </div>
      </div>

      <div className="if-row">
        <div className="if-field">
          <label className="ds-label" htmlFor="if-phone">Phone <span className="if-opt">(optional)</span></label>
          <input className="ds-input" id="if-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={40} />
        </div>
        <div className="if-field">
          <label className="ds-label" htmlFor="if-business">Practice / business</label>
          <input className="ds-input" id="if-business" name="business" type="text" autoComplete="organization" maxLength={80} required />
        </div>
      </div>

      <div className="if-field">
        <label className="ds-label" htmlFor="if-message">How can we help? <span className="if-opt">(optional)</span></label>
        <textarea className="ds-textarea" id="if-message" name="message" rows={4} maxLength={4000} />
      </div>

      <input type="hidden" name="page" value={page} />
      {/* Honeypot for bots: hidden from people and screen readers. */}
      <div className="if-hp" aria-hidden="true">
        <label htmlFor="if-website">Website</label>
        <input type="text" id="if-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="if-actions">
        <Submit />
        <p className="if-alt">Prefer to talk first? <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a consultation</a></p>
      </div>
    </form>
  );
}
