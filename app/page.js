import { getContent } from '../lib/content';
import GrowthHub from '../components/growth-hub/GrowthHub';
import InquiryForm from '../components/InquiryForm';
import './home.css';
import '../components/inquiry-form.css';
export const dynamic = 'force-static';
export const metadata = {
  title: 'MedGrow AI Solutions | Found. Chosen. Booked. — Patient Growth for Medical Practices',
  description: 'Medical advertising, SEO, AEO and GEO, and instant patient follow-up for clinics, med spas, dentists and plastic surgeons. Get found, get chosen, get booked.'
};

// The growth hub is an interactive React section; the rest of the page is static HTML around it.
const [before, after] = getContent('home').split('<!--#growth-hub-->');

export default function Home() {
  return (
    <main id="main">
      <div dangerouslySetInnerHTML={{ __html: before }} />
      <GrowthHub />
      <div dangerouslySetInnerHTML={{ __html: after }} />

      <section className="ds-section if-section" id="inquiry" aria-labelledby="if-title">
        <div className="ds-container if-wrap">
          <div className="if-head">
            <span className="ds-eyebrow">Get in touch</span>
            <h2 id="if-title" className="ds-h2">Send us a quick inquiry.</h2>
            <p className="ds-lead">Tell us a little about your practice and we&rsquo;ll get back to you, usually within one business day.</p>
          </div>
          <div className="if-card">
            <InquiryForm page="/" />
          </div>
        </div>
      </section>
    </main>
  );
}
