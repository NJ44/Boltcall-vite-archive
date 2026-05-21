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

const BlogFastestWayDentistRespondMissedCalls: React.FC = () => {
  const headings = useTableOfContents();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Fastest Way for Dentists to Handle Missed Calls | Boltcall';
    updateMetaDescription(
      'Learn the fastest way for a dentist to respond to missed calls automatically. AI phone agents book patients 24/7. Try Boltcall free today.'
    );

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'What Is the Fastest Way for a Dentist to Respond to Missed Calls Automatically?',
      description:
        'Learn the fastest way for a dentist to respond to missed calls automatically. AI phone agents book patients 24/7. Try Boltcall free today.',
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
        '@id': 'https://boltcall.org/blog/fastest-way-dentist-respond-missed-calls-automatically',
      },
      image: { '@type': 'ImageObject', url: 'https://boltcall.org/og-image.jpg' },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the fastest way for a dentist to respond to missed calls automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The fastest method is an AI phone agent connected to your dental practice phone line that answers within 3 seconds, 24/7. It handles patient questions, checks your scheduling system (Dentrix, Open Dental), and books appointments without any staff involvement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many calls does the average dental practice miss per day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Industry data shows 1 in 3 calls to the average dental practice goes unanswered during peak hours. At an estimated $800–$1,200 lifetime value per new patient, a practice missing 30–50 new patient calls per month is losing $24,000–$60,000 in annual revenue.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of dental patients leave a voicemail when a call is missed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only 25% of patients leave a voicemail when they reach dental office voicemail. The other 75% immediately call the next dentist on their list — the practice never knows a new patient opportunity was lost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI book dental appointments directly into practice management software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Modern AI receptionists integrate with Dentrix, Open Dental, Eaglesoft, and Curve to check real availability and book appointments during the call. A patient calling at 9 PM gets a confirmed slot before the staff arrives the next morning.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Boltcall help dental practices respond to missed calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Boltcall provides an AI receptionist that answers every inbound and missed call to dental practices instantly, responds to web and SMS inquiries, and books appointments directly into your scheduling system — 24/7 without staff involvement.',
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
          name: 'Fastest Way for Dentists to Handle Missed Calls',
          item: 'https://boltcall.org/blog/fastest-way-dentist-respond-missed-calls-automatically',
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
                { label: 'Fastest Way for Dentists to Handle Missed Calls', href: '/blog/fastest-way-dentist-respond-missed-calls-automatically' },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
              What Is the Fastest Way for a Dentist to{' '}
              <span className="text-blue-600">Respond to Missed Calls</span> Automatically?
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>May 21, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
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
                The fastest way for a dentist to respond to missed calls automatically is to connect an AI voice agent to your phone line that picks up instantly, handles patient questions, and books appointments without any staff involvement. When the AI answers a missed call in real time, there is no delay, no voicemail, and no callback queue.
              </p>
            </motion.div>

            <KeyTakeaways items={[
              '1 in 3 calls to the average dental practice goes unanswered during peak hours.',
              '75% of patients who reach voicemail never leave a message — they call the next dentist immediately.',
              'A practice missing 30–50 new patient calls per month loses $24,000–$60,000 in annual revenue.',
              'AI phone agents integrate with Dentrix, Open Dental, and Eaglesoft to book confirmed appointments on the call.',
              'Boltcall answers every dental practice call in under 11 seconds, 24/7, without staff involvement.',
            ]} />

            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Why missed calls are a critical problem for dental practices
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dental practices run on new patient acquisition and appointment capacity. Every inbound call that goes unanswered is a direct hit to both. Industry data shows that 1 in 3 calls to the average dental practice goes unanswered during business hours — not after hours, during the day — because the front desk team is handling another call, checking in a patient, or stepping away from the desk. Each of those missed calls represents a patient with a specific, time-sensitive need who will call the next dentist on their list within 60 seconds.
                </p>
                <p>
                  The revenue math is severe. A new dental patient has an estimated first-year treatment value of $800–$1,200 and a lifetime value of $3,000–$5,000 including continued care and referrals. A practice that misses 30–50 new patient calls per month — a realistic figure for a single-front-desk practice during lunch, mornings, and late afternoons — is forfeiting $24,000–$60,000 in annual revenue. That figure does not include the referral multiplier or the competitive cost of those patients reviewing and recommending the dentist who answered their call instead.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">When do dental practices miss the most patient calls?</h3>
                <p>
                  The highest-miss windows for dental practices are 8:00–9:00am (before the full team is in), 12:00–1:30pm (lunch coverage gaps), and 4:30–6:00pm (end-of-day wind-down). Emergency pain calls are not time-bound — they arrive at 9pm on a Sunday and represent the highest-urgency, fastest-converting patient type. A practice that covers only the 9-to-5 window is structurally unavailable for the patient segment most likely to book an emergency appointment immediately.
                </p>
                <p>
                  The call itself is only part of the problem. Of the patients who do reach voicemail, only 25% leave a message. The remaining 75% hang up silently and immediately dial the next dental practice on their Google search results. The original practice never knows the opportunity existed. There is no missed call with a name to reference. There is no callback number to pursue. The lead simply vanished — and became a new patient for a competitor.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1 in 3</div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Calls Missed During Peak Hours</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Patients Who Don't Leave Voicemail</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$5,000</div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Average Patient Lifetime Value</div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">The Primary Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                The fastest automated response: AI phone agent
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  An AI phone agent connected to your dental practice number is the fastest possible automated response to a missed call — because it eliminates the missed call entirely. Rather than catching the call on the backend with an SMS follow-up or a voicemail-to-email system, an AI agent answers before the call goes to voicemail, in under 3 seconds, and handles the entire patient interaction end-to-end. No delay, no staff involvement, no call-back required.
                </p>
                <p>
                  The patient experience is identical to speaking with a professional front desk team member. The AI greets them by practice name, identifies their need, answers common questions about services and insurance acceptance, and walks them through the scheduling process using real-time availability from your practice management system. By the end of the call — typically 60–90 seconds for a standard booking — the patient has a confirmed appointment slot and a text confirmation. They do not know they spoke to an AI unless they ask, and even then, a well-configured system can handle that question naturally.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">How does the AI access my dental practice schedule?</h3>
                <p>
                  Modern AI receptionist platforms integrate directly with major dental practice management software via API. Dentrix, Open Dental, Eaglesoft, and Curve Dental all have integration pathways that allow an AI to query real-time appointment availability and write confirmed bookings directly into the scheduling system. This means the patient gets a slot that is genuinely open — no double-booking, no pending confirmations that need staff review, no provisional holds. When the AI says "you're confirmed for Tuesday at 2pm," that appointment appears immediately in the practice's schedule.
                </p>
                <p>
                  For practices using scheduling tools that do not have direct API integrations, a middleware approach using Google Calendar or a third-party booking connector achieves the same result with a slightly different architecture. The key requirement is that the AI is checking live availability — not a static snapshot — so it can commit to appointments without creating scheduling conflicts.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">What patient questions can the AI handle without staff involvement?</h3>
                <div className="space-y-3 mt-4">
                  {[
                    { q: 'Do you accept my insurance?', detail: 'The AI is trained on your accepted insurance plans and can confirm coverage for the most common carriers immediately.' },
                    { q: 'What does a new patient visit cost?', detail: 'The AI provides the practice\'s standard new patient fee or ranges, and directs complex insurance questions to staff.' },
                    { q: 'How soon can I get an appointment for tooth pain?', detail: 'The AI checks real availability and surfaces emergency slots, offering same-day or next-day options when available.' },
                    { q: 'Do you see children?', detail: 'The AI confirms whether the practice is a general, family, or specialist practice and handles pediatric scheduling if applicable.' },
                    { q: 'What are your hours?', detail: 'The AI provides current hours and informs the patient of the AI\'s 24/7 availability for booking.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">"{item.q}"</div>
                        <div className="text-gray-600 text-xs mt-1">{item.detail}</div>
                      </div>
                    </div>
                  ))}
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
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Secondary Layer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Automated SMS follow-up as a secondary layer
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  An AI phone agent eliminates missed calls by answering them. But dental practices also receive inquiries via web forms, Google Business Profile messages, and social media messages — channels that do not involve a phone call and therefore cannot be answered by a phone agent. An automated SMS follow-up system that triggers within 60 seconds of any web or message enquiry provides the same speed-to-lead advantage across all inbound channels.
                </p>
                <p>
                  The ideal SMS follow-up is not a generic "Thanks for reaching out, we'll be in touch" acknowledgement. It is a specific, actionable response that mirrors what the AI phone agent would do on a call: identify the patient's need, provide a direct booking link, and offer to transfer to a human if the need is complex. A patient who submits a web form at 8pm receives a text within 60 seconds with a booking link that opens into your live scheduling system. Most patients who receive this response book without any human staff interaction.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Can the SMS follow-up system also catch actually missed calls?</h3>
                <p>
                  Yes — when configured as a missed-call text-back system. If a call rings through to voicemail for any reason (network issue, overflow, configuration error), the system detects the missed call event and immediately triggers a text to the caller's number: "Hi, this is [Practice Name]. We just missed your call — how can we help? Reply here or book at [link]." This catches the 25% of callers who did leave a voicemail and re-engages the 75% who hung up before leaving one. The text re-opens a conversion window that would otherwise be permanently closed.
                </p>
                <p>
                  Boltcall combines both layers — AI voice answering and automatic missed-call SMS — in a single platform. Every inbound call to your practice is handled by the AI agent first. If anything slips through, the SMS layer catches it. The result is a system where no patient inquiry goes unaddressed for more than 60 seconds, regardless of the time of day or the channel they used to reach out.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mt-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3">Response coverage: before and after Boltcall</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase text-red-600 mb-2 tracking-widest">Without Boltcall</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Lunch calls hit voicemail',
                          'After-hours calls hit voicemail',
                          'Web forms wait until morning',
                          '75% of missed callers gone forever',
                          'Staff manually returns calls — hours later',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-red-200 text-red-700 text-xs flex items-center justify-center font-bold">✕</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-green-600 mb-2 tracking-widest">With Boltcall</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'AI answers in under 11 seconds, 24/7',
                          'Appointments booked on the call',
                          'Web forms get SMS reply in under 60 sec',
                          'Missed calls get instant text follow-up',
                          'Staff sees confirmed bookings, not call queues',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Making It Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                What makes a fast response actually work
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Speed alone is not sufficient. An AI that answers in 3 seconds but cannot book an appointment, answer insurance questions, or handle a patient in distress is not solving the problem — it is creating a faster dead end. The quality of the response is what determines whether the speed advantage converts into a booked appointment. Three factors define the quality threshold: knowledge depth, system integration, and escalation handling.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">How do you train an AI receptionist for a dental practice?</h3>
                <p>
                  Training a dental AI receptionist takes 15–30 minutes and requires four inputs: a list of services offered, accepted insurance plans, current provider schedule availability rules (which providers see new patients, which slots are open for emergencies), and the practice's 15–20 most common patient questions with answers. Most platforms let you submit this as plain text or a simple form. The AI uses this information to answer patient questions accurately and in the practice's tone. More detailed inputs produce more accurate responses — a practice that specifies "Dr. Chen sees new patients Tuesdays and Thursdays only" will have that rule correctly applied to every booking the AI makes.
                </p>
                <p>
                  Escalation rules are equally important. When a patient is in severe pain, is in a dental emergency, or uses language indicating distress, the AI should escalate immediately — alerting an on-call staff member, connecting the call to an emergency line, or clearly directing the patient to the nearest emergency dental facility. Boltcall lets practices configure these rules precisely, ensuring that speed of response never comes at the expense of appropriate patient care.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">How quickly can a dental practice go live with an AI receptionist?</h3>
                <p>
                  Setup with Boltcall takes under five minutes for basic configuration. You connect your existing practice phone number via call forwarding, provide your business information, and the AI begins answering calls the same day. Deep integration with Dentrix, Open Dental, or your existing scheduling system adds 10–15 minutes of configuration but delivers the full appointment-booking capability. Most practices are fully live — with the AI answering, booking, and confirming appointments — within the same business day they sign up.
                </p>
                <p>
                  The investment is minimal relative to the revenue impact. Boltcall's plans start at $49/month — less than one missed new patient appointment. For a practice converting 50% of the calls it previously missed, the ROI is positive within the first week of operation. See <Link to="/pricing" className="text-blue-600 hover:underline font-medium">Boltcall's pricing page</Link> for a full plan comparison, or <Link to="/signup" className="text-blue-600 hover:underline font-medium">start free</Link> to see the platform before committing to a paid tier.
                </p>

                <div className="space-y-6 mt-8">
                  {[
                    {
                      icon: <Phone className="w-4 h-4 text-blue-600" />,
                      step: '1. Connect your practice phone',
                      text: 'Forward your existing practice number to Boltcall. Takes 2 minutes. No number porting, no hardware changes, no IT project. Your patients keep calling the same number.',
                    },
                    {
                      icon: <Zap className="w-4 h-4 text-blue-600" />,
                      step: '2. Configure your knowledge base',
                      text: 'Add your services, insurance plans, provider availability rules, and FAQ answers. Boltcall uses this to answer every patient question accurately and in your practice\'s voice.',
                    },
                    {
                      icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
                      step: '3. Integrate your scheduling system',
                      text: 'Connect Dentrix, Open Dental, or your calendar tool. The AI checks real availability and books confirmed appointments — no double-bookings, no staff review required for standard bookings.',
                    },
                    {
                      icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
                      step: '4. Set escalation rules',
                      text: 'Define when a human must step in — dental emergencies, distressed patients, complex clinical questions. The AI handles the rules you set and escalates only when genuinely needed.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{item.step}</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
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
                    q: 'What is the fastest way for a dentist to respond to missed calls automatically?',
                    a: 'The fastest method is an AI phone agent connected to your dental practice phone line that answers within 3 seconds, 24/7. It handles patient questions, checks your scheduling system (Dentrix, Open Dental), and books appointments without any staff involvement.',
                  },
                  {
                    q: 'How many calls does the average dental practice miss per day?',
                    a: 'Industry data shows 1 in 3 calls to the average dental practice goes unanswered during peak hours. At an estimated $800–$1,200 lifetime value per new patient, a practice missing 30–50 new patient calls per month is losing $24,000–$60,000 in annual revenue.',
                  },
                  {
                    q: 'What percentage of dental patients leave a voicemail when a call is missed?',
                    a: 'Only 25% of patients leave a voicemail when they reach dental office voicemail. The other 75% immediately call the next dentist on their list — the practice never knows a new patient opportunity was lost.',
                  },
                  {
                    q: 'Can AI book dental appointments directly into practice management software?',
                    a: 'Yes. Modern AI receptionists integrate with Dentrix, Open Dental, Eaglesoft, and Curve to check real availability and book appointments during the call. A patient calling at 9 PM gets a confirmed slot before the staff arrives the next morning.',
                  },
                  {
                    q: 'How does Boltcall help dental practices respond to missed calls?',
                    a: 'Boltcall provides an AI receptionist that answers every inbound and missed call to dental practices instantly, responds to web and SMS inquiries, and books appointments directly into your scheduling system — 24/7 without staff involvement.',
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
                      <Phone className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="bg-white size-12 grid place-items-center rounded-xl relative z-10 shadow-lg ring-1 ring-gray-200 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
                      <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="bg-white size-12 grid place-items-center rounded-xl relative right-2.5 top-1.5 rotate-6 shadow-lg ring-1 ring-gray-200 group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
                      <CheckCircle className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <h2 className="text-gray-900 font-medium mt-4 text-4xl">Never Miss a Patient Call Again</h2>
                  <p className="text-base text-gray-600 mt-2">
                    Boltcall answers every call to your dental practice in under 11 seconds, books appointments into your scheduling system, and follows up every web and SMS inquiry automatically. Try it free — no credit card required.
                  </p>
                  <Link
                    to="/signup"
                    className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 shadow-sm active:shadow-none"
                  >
                    Try Boltcall free today
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Related Articles */}
            <div className="mb-10 border-t border-gray-100 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Related Reading</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog/ai-receptionist-for-dentists" className="text-blue-600 hover:underline font-medium text-sm">
                    AI Receptionist for Dentists: The Complete Guide
                  </Link>
                </li>
                <li>
                  <Link to="/blog/why-local-service-businesses-lose-customers-not-answering-calls" className="text-blue-600 hover:underline font-medium text-sm">
                    Why Local Service Businesses Lose Customers by Not Answering Calls Quickly Enough
                  </Link>
                </li>
                <li>
                  <Link to="/blog/does-response-time-affect-whether-local-business-gets-job" className="text-blue-600 hover:underline font-medium text-sm">
                    Does Response Time Affect Whether a Local Business Gets the Job?
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

export default BlogFastestWayDentistRespondMissedCalls;
