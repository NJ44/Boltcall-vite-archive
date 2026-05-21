import React, { useEffect } from 'react';
import { updateMetaDescription } from '../lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Phone, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GiveawayBar from '../components/GiveawayBar';
import ReadingProgress from '../components/ReadingProgress';
import Breadcrumbs from '../components/Breadcrumbs';
import TableOfContents from '../components/TableOfContents';
import { useTableOfContents } from '../hooks/useTableOfContents';
import KeyTakeaways from '../components/blog/KeyTakeaways';

const BlogDoesResponseTimeAffectLocalBusiness: React.FC = () => {
  const headings = useTableOfContents();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Does Response Time Affect Local Business Jobs? | Boltcall';
    updateMetaDescription(
      'Learn how response time affects whether a local business gets the job. MIT research shows 391% higher conversion in under 1 minute. Start with Boltcall free.'
    );

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Does Response Time Affect Whether a Local Business Gets the Job or Not?',
      description:
        'Learn how response time affects whether a local business gets the job. MIT research shows 391% higher conversion in under 1 minute. Start with Boltcall free.',
      author: { '@type': 'Organization', name: 'Boltcall' },
      publisher: {
        '@type': 'Organization',
        name: 'Boltcall',
        logo: { '@type': 'ImageObject', url: 'https://boltcall.org/boltcall_full_logo.png' },
      },
      datePublished: '2026-05-21',
      dateModified: '2026-05-21',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://boltcall.org/blog/does-response-time-affect-whether-local-business-gets-job',
      },
      image: { '@type': 'ImageObject', url: 'https://boltcall.org/og-image.jpg' },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does response time really affect whether a local business gets the job?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — response time is the #1 conversion factor for local service businesses. Responding in under 1 minute makes you 391% more likely to convert a lead versus waiting 5 minutes. At 10 minutes, you are 10x less likely to even reach the customer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the ideal response time for a local service business lead?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under 60 seconds is the gold standard. MIT Sloan research shows that businesses responding in under a minute convert at 391% higher rates. Even 5 minutes dramatically reduces your odds. The first business to respond almost always gets the job.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after 5 minutes if a local business doesn\'t respond?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After 5 minutes, conversion likelihood drops 80%. The customer has already called the next business on their list. After 10 minutes, you\'re 10 times less likely to even reach them — the job is effectively gone.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries lose the most revenue to slow response times?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HVAC, plumbing, dental, med spa, and legal services are the highest-risk categories. Emergency service calls (burst pipe, broken HVAC) have the shortest conversion windows — often under 60 seconds — because the urgency is immediate.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Boltcall solve the response time problem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Boltcall responds to every inbound call and missed call in under 11 seconds on average, 24 hours a day, and books appointments directly into your calendar. Every lead gets responded to automatically — no staff required.',
          },
        },
      ],
    };

    ['article-schema', 'faq-schema', 'breadcrumb-jsonld', 'person-schema'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });

    const addScript = (id: string, data: object) => {
      const s = document.createElement('script');
      s.id = id;
      s.type = 'application/ld+json';
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    };

    addScript('article-schema', articleSchema);
    addScript('faq-schema', faqSchema);
    addScript('breadcrumb-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://boltcall.org' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://boltcall.org/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Does Response Time Affect Local Business Jobs?',
          item: 'https://boltcall.org/blog/does-response-time-affect-whether-local-business-gets-job',
        },
      ],
    });
    addScript('person-schema', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Boltcall Team',
      url: 'https://boltcall.org/about',
      worksFor: { '@type': 'Organization', name: 'Boltcall', url: 'https://boltcall.org' },
    });

    return () => {
      ['article-schema', 'faq-schema', 'breadcrumb-jsonld', 'person-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <GiveawayBar />
      <Header />
      <ReadingProgress />

      {/* Hero */}
      <section className="relative pt-32 pb-8 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8" style={{ marginLeft: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-4"
          >
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Does Response Time Affect Local Business Jobs?', href: '/blog/does-response-time-affect-whether-local-business-gets-job' },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
              Does <span className="text-blue-600">Response Time</span> Affect Whether a Local Business Gets the Job or Not?
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>May 21, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex gap-8">
          <article className="flex-1 max-w-4xl">

            {/* AEO Answer Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="speakable-intro text-xl text-gray-700 leading-relaxed font-medium">
                Yes — response time is the single biggest factor in whether a local service business wins or loses a job. Research from MIT Sloan found that contacting a lead within the first minute makes you 391% more likely to convert them compared to waiting just 5 minutes. The customer who called you also called your top two competitors. The first to respond gets the booking.
              </p>
            </motion.div>

            <KeyTakeaways items={[
              'Responding within 60 seconds makes you 391% more likely to convert a lead (MIT Sloan).',
              'After 5 minutes, your conversion probability drops by over 80%.',
              'At 10 minutes, you are 10 times less likely to even reach the customer.',
              'HVAC, plumbing, dental, and legal services have the tightest response windows.',
              'Boltcall responds to every inbound call in under 11 seconds, automatically, 24/7.',
            ]} />

            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">The Research</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Why the first response wins
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The evidence is unambiguous. MIT Sloan Management Review's landmark lead response study tracked over 100,000 inbound leads across multiple industries and found a stark relationship between response time and conversion: businesses that responded within 60 seconds were 391% more likely to convert the lead than those that waited five minutes. The same study found that waiting 10 minutes versus 5 minutes created another 10x drop in the likelihood of even reaching the prospect — not converting them, just reaching them.
                </p>
                <p>
                  For local service businesses, the dynamic is even more compressed. When a customer calls a plumber, HVAC company, or dental practice, they are not passively browsing — they have an active need and they are calling multiple businesses simultaneously. The call that gets answered first does not just get the initial conversation. It gets the booking, because the customer commits immediately and stops calling the others. This winner-take-all dynamic inside a 60-second window is the defining competitive reality of local service in 2026.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Why does the first responder win even if their price is higher?</h3>
                <p>
                  In an urgency scenario — a burst pipe, a tooth in pain, an HVAC unit out in August — price is rarely the deciding factor. Speed is. The customer's mental model is: I need this fixed now, and the first person I can actually talk to is going to fix it. They do not have the time or inclination to put the first respondent on hold, call three more businesses, collect quotes, and make a spreadsheet. They commit to whoever answers first, and price negotiation, if it happens at all, comes later and is marginal. The businesses that consistently answer first set the market price — because they are the default option.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">391%</div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Higher Conversion Under 60 Sec</div>
                    <div className="text-xs text-gray-500 mt-1">MIT Sloan Management Review</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">10x</div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Less Likely to Reach at 10 Min</div>
                    <div className="text-xs text-gray-500 mt-1">vs. responding in under 1 min</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Drop in Conversion at 5 Min</div>
                    <div className="text-xs text-gray-500 mt-1">compared to sub-60-second response</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Does speed matter differently for repeat customers vs. new leads?</h3>
                <p>
                  Speed matters most on first contact. A repeat customer who already trusts your business will tolerate a slightly slower response because the relationship offsets the urgency. But for new leads — which represent the entire growth capacity of your business — there is no trust buffer. The new lead has never worked with you. They are evaluating you in real time, and the evaluation criteria they are applying at the moment of first contact is simple: are you available right now? New leads that hit voicemail convert to booked jobs at a rate that approaches zero, because 75% of them never leave a voicemail at all and immediately call a competitor.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">The Window</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                The response time window that costs local businesses the most
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The most costly window is not after-hours calls — it is the gap during business hours when staff are busy. The average local service business misses 30–40% of calls during peak hours (9am–5pm, Monday–Friday) because the person answering the phone is already handling another call, is with a customer, or simply stepped away. These are peak-urgency calls from customers in active need mode, and they are going to voicemail at the worst possible time.
                </p>
                <p>
                  After-hours calls are costly too — but there is at least an expectation from the caller that the office might be closed. Peak-hours missed calls carry no such cushion. A customer who calls at 11am on a Thursday and hits voicemail has no charitable explanation for why a functioning business is unavailable. Their conclusion is that the business is either unorganized or too busy to take on new work — both of which push them directly to the next option on their list.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Which part of the day do local businesses miss the most calls?</h3>
                <p>
                  Data from inbound call analytics platforms shows that missed call rates peak between 8–10am (before staff are fully in), 12–1pm (lunch breaks), and after 5pm (end of day). For service businesses with a single front desk role, these three windows represent 40–60% of all inbound lead volume. An AI that covers exactly those windows — handling calls automatically during the hours when humans are least available — captures a disproportionate share of high-intent leads that would otherwise be lost.
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 my-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Response Time</th>
                        <th className="text-center px-4 py-3 font-semibold text-gray-700">Conversion Likelihood</th>
                        <th className="text-center px-4 py-3 font-semibold text-gray-700">What Is Happening</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['Under 60 seconds', 'Highest (391% above baseline)', 'Caller is still on the line, fully engaged, ready to book'],
                        ['1–5 minutes', 'Declining rapidly', 'Caller may be on hold with another business'],
                        ['5–10 minutes', '80% below peak', 'Caller has likely already booked elsewhere'],
                        ['10–30 minutes', '90%+ below peak', 'Booking is confirmed with a competitor'],
                        ['30+ minutes', 'Near zero', 'Job is done; lead is permanently lost'],
                      ].map(([time, likelihood, context], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <td className="px-4 py-3 font-medium text-gray-700">{time}</td>
                          <td className="px-4 py-3 text-center text-blue-700">{likelihood}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs">{context}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">By Industry</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Which industries lose the most to slow response
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Every local service category is affected by slow response, but some have measurably shorter conversion windows because the urgency is higher and the alternatives are more accessible. Emergency service categories — HVAC, plumbing, locksmiths — have conversion windows measured in seconds. Non-emergency but time-sensitive categories — dental, med spa, legal intake — have windows measured in minutes. Even in the longer-window categories, a competitor that responds in 30 seconds has a dramatic advantage over one that responds in 15 minutes.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Which service categories have the tightest response windows?</h3>
                <div className="space-y-4 mt-4">
                  {[
                    {
                      icon: <Zap className="w-4 h-4 text-blue-600" />,
                      category: 'HVAC & Plumbing (Emergency)',
                      window: 'Under 60 seconds',
                      detail: 'An AC unit failing in July or a pipe burst at 8pm generates maximum urgency. The caller is on search results with 5 businesses visible. They call in order until someone answers — the entire sequence takes under 3 minutes.',
                    },
                    {
                      icon: <Phone className="w-4 h-4 text-blue-600" />,
                      category: 'Dental Practices',
                      window: '1–5 minutes',
                      detail: 'Tooth pain calls have a slightly longer window but low patience for voicemail. Industry data shows 1 in 3 dental calls go unanswered during peak hours — a structural revenue problem most practices do not measure.',
                    },
                    {
                      icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
                      category: 'Med Spa & Aesthetics',
                      window: '5–15 minutes',
                      detail: 'Aesthetics bookings are impulse-driven. A potential patient who called on a lunch break has limited time. If they do not book within that window, the appointment is deferred indefinitely — and often never happens.',
                    },
                    {
                      icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
                      category: 'Legal Intake',
                      window: '15–60 minutes',
                      detail: 'Legal calls have the widest window but the highest value. A personal injury or divorce intake that converts represents $5,000–$50,000 in fees. Firms that respond within minutes convert significantly more of those calls than firms that respond the next business day.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {item.category} <span className="text-blue-600 font-normal text-sm">— window: {item.window}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                How to respond to every lead in under 60 seconds
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The only reliable way to respond to every inbound lead in under 60 seconds — across phone calls, web forms, and SMS messages, 24 hours a day — is to automate the first response layer. Human staff cannot maintain sub-60-second response times at scale without prohibitive cost and burnout. A well-configured AI receptionist can do it on every single interaction, consistently, without variation.
                </p>
                <p>
                  The key word is "configured." An AI that just answers and says "please hold" is not solving the problem — it is delaying it. The effective configuration answers within two rings, immediately greets the caller by name of the business, handles the most common service enquiries fluently, checks real calendar availability, and books a confirmed appointment before the call ends. That is the standard Boltcall delivers, and it is the standard that closes the 391% conversion gap permanently.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">What does a sub-60-second response look like in practice?</h3>
                <p>
                  When a caller dials a Boltcall-connected business, the AI answers within 11 seconds on average — before the second ring. It greets the caller professionally, identifies the service need, answers common questions in natural conversational speech, accesses the live calendar, and presents available time slots. For a standard appointment booking, the entire call takes 60–90 seconds and ends with a confirmed appointment in the calendar and a text confirmation sent to the caller. The business owner receives a real-time notification. No staff involvement at any point in that chain.
                </p>
                <p>
                  For businesses not yet on an AI platform, a partial fix is setting up an SMS autoresponder for missed calls — so any caller who does not get an answer at least receives a text within 30 seconds acknowledging the inquiry and committing to a callback time. This is better than nothing, but it does not capture the 75% of callers who hang up without leaving a voicemail and do not receive the auto-text because there is no missed call to trigger it. A fully automated call answering layer is the only complete solution. See the <Link to="/pricing" className="text-blue-600 hover:underline font-medium">Boltcall pricing page</Link> to find a plan that fits your business.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-4">Speed-to-lead checklist for local service businesses</h4>
                  <ul className="space-y-3">
                    {[
                      'Every inbound call answered in under 10 seconds, including after hours and weekends',
                      'Every web form lead responded to within 60 seconds via SMS or phone',
                      'Every missed call triggered an immediate automated follow-up text',
                      'Appointment booking available during the call — no callback queue',
                      'Every lead logged with caller information, transcript, and outcome',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: 'Does response time really affect whether a local business gets the job?',
                    a: 'Yes — response time is the #1 conversion factor for local service businesses. Responding in under 1 minute makes you 391% more likely to convert a lead versus waiting 5 minutes. At 10 minutes, you are 10x less likely to even reach the customer.',
                  },
                  {
                    q: 'What is the ideal response time for a local service business lead?',
                    a: 'Under 60 seconds is the gold standard. MIT Sloan research shows that businesses responding in under a minute convert at 391% higher rates. Even 5 minutes dramatically reduces your odds. The first business to respond almost always gets the job.',
                  },
                  {
                    q: 'What happens after 5 minutes if a local business doesn\'t respond?',
                    a: 'After 5 minutes, conversion likelihood drops 80%. The customer has already called the next business on their list. After 10 minutes, you\'re 10 times less likely to even reach them — the job is effectively gone.',
                  },
                  {
                    q: 'What industries lose the most revenue to slow response times?',
                    a: 'HVAC, plumbing, dental, med spa, and legal services are the highest-risk categories. Emergency service calls (burst pipe, broken HVAC) have the shortest conversion windows — often under 60 seconds — because the urgency is immediate.',
                  },
                  {
                    q: 'How does Boltcall solve the response time problem?',
                    a: 'Boltcall responds to every inbound call and missed call in under 11 seconds on average, 24 hours a day, and books appointments directly into your calendar. Every lead gets responded to automatically — no staff required.',
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA Block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="my-16"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-8 w-full max-w-[800px] group hover:bg-gray-50 transition duration-500 hover:duration-200">
                  <div className="flex justify-center isolate">
                    <div className="bg-white size-12 grid place-items-center rounded-xl relative left-2.5 top-1.5 -rotate-6 shadow-lg ring-1 ring-gray-200 group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
                      <Clock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="bg-white size-12 grid place-items-center rounded-xl relative z-10 shadow-lg ring-1 ring-gray-200 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
                      <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="bg-white size-12 grid place-items-center rounded-xl relative right-2.5 top-1.5 rotate-6 shadow-lg ring-1 ring-gray-200 group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
                      <TrendingUp className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <h2 className="text-gray-900 font-medium mt-4 text-4xl">Respond in Under 11 Seconds. Every Time.</h2>
                  <p className="text-base text-gray-600 mt-2">
                    Boltcall answers every inbound lead before your competitors do — 24/7, automatically. Start free and see how many jobs you have been missing.
                  </p>
                  <Link
                    to="/signup"
                    className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 shadow-sm active:shadow-none"
                  >
                    Start with Boltcall free
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Related Articles */}
            <div className="mb-10 border-t border-gray-100 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Related Reading</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog/why-local-service-businesses-lose-customers-not-answering-calls" className="text-blue-600 hover:underline font-medium text-sm">
                    Why Local Service Businesses Lose Customers by Not Answering Calls Quickly Enough
                  </Link>
                </li>
                <li>
                  <Link to="/blog/fastest-way-dentist-respond-missed-calls-automatically" className="text-blue-600 hover:underline font-medium text-sm">
                    Fastest Way for Dentists to Respond to Missed Calls Automatically
                  </Link>
                </li>
                <li>
                  <Link to="/blog/ai-receptionist-for-dentists" className="text-blue-600 hover:underline font-medium text-sm">
                    AI Receptionist for Dentists: The Complete Guide
                  </Link>
                </li>
                <li>
                  <Link to="/blog/how-fast-local-service-business-respond-online-lead-inquiry" className="text-blue-600 hover:underline font-medium text-sm">
                    How Fast Should a Local Business Respond to an Online Lead Inquiry?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/what-happens-plumber-misses-customer-call-urgent-service" className="text-blue-600 hover:underline font-medium text-sm">
                    What Happens When a Plumber Misses a Customer Call?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/best-way-hvac-company-never-miss-service-call-customer" className="text-blue-600 hover:underline font-medium text-sm">
                    Best Way for an HVAC Company to Never Miss a Service Call
                  </Link>
                </li>
              </ul>
            </div>

          </article>

          {/* Table of Contents Sidebar */}
          <TableOfContents headings={headings} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDoesResponseTimeAffectLocalBusiness;
