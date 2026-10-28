import InquiryForm from '../../components/InquiryForm';
import '../../components/inquiry-form.css';
import './contact.css';

export const metadata = {
  title: 'Contact Us | CodeSquad',
  description: 'Get in touch with CodeSquad. Send an inquiry, call, email or book a free consultation. We usually reply within one business day.',
};

export default function ContactPage() {
  return (
    <main id="top">
      <section className="ct-hero" aria-labelledby="ct-title">
        <div className="ds-container ct-grid">
          <div className="ct-copy">
            <span className="ds-eyebrow">Contact us</span>
            <h1 id="ct-title" className="ds-h1">Let&rsquo;s talk about growing your practice.</h1>
            <p className="ds-lead">Tell us a little about your practice and we&rsquo;ll get back to you, usually within one business day.</p>

            <ul className="ct-details">
              <li><span className="ct-label">Call</span><a href="tel:+13073964945">+1 (307) 396-4945</a></li>
              <li><span className="ct-label">Email</span><a href="mailto:info@codesquad.ai">info@codesquad.ai</a></li>
              <li><span className="ct-label">Book</span><a href="https://calendly.com/code_squad/30min" target="_blank" rel="noopener noreferrer">Free 30-minute consultation →</a></li>
            </ul>
          </div>

          <div className="if-card ct-card">
            <InquiryForm page="/contact" />
          </div>
        </div>
      </section>
    </main>
  );
}
