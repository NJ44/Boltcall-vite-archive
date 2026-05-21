import React, { useEffect } from 'react';
import { updateMetaDescription } from '../lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, Phone, CheckCircle, TrendingUp, Zap,
  AlertCircle, DollarSign,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GiveawayBar from '../components/GiveawayBar';
import ReadingProgress from '../components/ReadingProgress';
import Breadcrumbs from '../components/Breadcrumbs';
import TableOfContents from '../components/TableOfContents';
import { useTableOfContents } from '../hooks/useTableOfContents';
import KeyTakeaways from '../components/blog/KeyTakeaways';

const BlogWhatHappensPlumberMissesCall: React.FC = () => {
  const headings = useTableOfContents();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'When a Plumber Misses an Urgent Call | Boltcall';
    updateMetaDescription(
      'Learn what happens when a plumber misses a customer call for urgent service — and how AI call answering lets Boltcall recover every missed lead automatically.'
    );

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'What Happens When a Plumber Misses a Customer Call for Urgent Service?',
      description:
        'Learn what happens when a plumber misses a customer call for urgent service — and how AI call answering lets Boltcall recover every missed lead automatically.',
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
        '@id': 'https://boltcall.org/blog/what-happens-plumber-misses-customer-call-urgent-service',
      },
      image: { '@type': 'ImageObject', url: 'https://boltcall.org/og-image.jpg' },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens when a plumber misses a customer call for an emergency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The customer immediately calls the next plumber on their list. Over 80% of people who reach voicemail on an emergency call do not leave a message — they hang up and dial the next result. The original plumber loses the job without ever knowing the call came in.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much revenue does a plumber lose from one missed emergency call?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A single missed plumbing emergency is worth $300–$800 in immediate revenue, plus $2,000–$5,000 in potential lifetime value from repeat calls and referrals. A plumber missing 5 emergency calls per week loses over $100,000 per year.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do plumbers miss calls even when they try not to?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plumbers miss calls because field work makes answering impossible — a technician under a sink cannot safely stop to take a call. After-hours calls and peak-season volume surges also overwhelm any human-staffed answering system.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI answer plumbing emergency calls and book appointments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An AI receptionist answers every call within one ring, identifies emergencies, and either books an immediate slot or sends a priority text alert to the owner. Routine calls get booked automatically; emergency calls get escalated immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Boltcall help plumbers recover missed calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Boltcall connects to a plumbing company's main phone line and answers every missed call instantly with an AI that books appointments and sends emergency alerts. No call goes unanswered — every lead gets a response before the customer can dial a competitor.",
          },
        },
      ],
    };

    const speakableSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: document.title,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.speakable-intro'],
      },
    };

    ['article-schema', 'faq-schema', 'speakable-schema'].forEach(id => {
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
    addScript('speakable-schema', speakableSchema);

    const bcScript = document.createElement('script');
    bcScript.type = 'application/ld+json';
    bcScript.id = 'breadcrumb-jsonld';
    bcScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://boltcall.org' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://boltcall.org/blog' },
        { '@type': 'ListItem', position: 3, name: 'When a Plumber Misses an Urgent Call', item: 'https://boltcall.org/blog/what-happens-plumber-misses-customer-call-urgent-service' },
      ],
    });
    document.head.appendChild(bcScript);

    return () => {
      document.getElementById('breadcrumb-jsonld')?.remove();
      ['article-schema', 'faq-schema', 'speakable-schema'].forEach(id => {
        document.getElementById(id)?.remove();
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
                { label: 'When a Plumber Misses an Urgent Call', href: '/blog/what-happens-plumber-misses-customer-call-urgent-service' },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
              What Happens When a Plumber Misses a{' '}
              <span className="text-blue-600">Customer Call</span> for Urgent Service?
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
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
                When a plumber misses a customer call for urgent service, the customer immediately calls the next plumber on their list. Plumbing emergencies create intense urgency — over 80% of callers who do not reach a live person on their first attempt will not leave a voicemail. They move on within seconds.
              </p>
            </motion.div>

            <KeyTakeaways items={[
              'Over 80% of emergency callers who hit voicemail hang up and call a competitor — they never call back.',
              'A single missed plumbing emergency represents $300–$800 in immediate revenue and up to $5,000 in lifetime value.',
              'Plumbers miss calls most often during active jobs, after hours, and during peak seasonal surges.',
              'AI call answering eliminates missed calls by responding within one ring, 24/7, and booking on the spot.',
              'Boltcall connects to any plumbing company phone line and captures every lead before the customer can dial the next number.',
            ]} />

            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Customer Behavior</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                What the Customer Does Next
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A homeowner wakes up to a burst pipe at 6am. Water is spreading across the floor. They grab their phone, search "emergency plumber near me," and dial the first result. The call goes to voicemail. They hang up before the tone. They dial the second result. That plumber answers. The job — typically worth $400–$700 for an emergency call-out — is gone. The first plumber never even knew they were called.
                </p>
                <p>
                  This is not an edge case. Research on consumer behavior during service emergencies consistently shows that urgency collapses patience. When water is rising, a gas smell is spreading, or a toilet is overflowing, the customer is not in a position to wait for a callback. They need someone on the line now. The Google Business Profile with the most reviews and the best SEO ranking means nothing if no one answers.
                </p>
                <p>
                  The behavioral data backs this up: over 80% of callers who reach voicemail on an emergency service call do not leave a message. Of the small percentage who do leave a voicemail, the majority have already called a second company by the time the original plumber calls back. The window to win a plumbing emergency is measured in seconds — not minutes, not hours.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Why do emergency callers never leave a voicemail?</h3>
                <p>
                  Emergency callers skip voicemail for two reasons: time pressure and low confidence in a callback. When your kitchen is flooding, leaving a message feels pointless if the plumber might not hear it for an hour. The psychology is simple — the customer assumes that any business not answering an emergency line either cannot help quickly or does not prioritize urgency. Both perceptions send them to a competitor.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">How quickly does a customer move on after a missed call?</h3>
                <p>
                  Industry data from call tracking studies shows the median time between hitting voicemail and dialing a second plumber is under 45 seconds. In that window — less than a minute — the customer has already decided the first business is not reliable. They are not angry; they are simply solving their problem. The missed call is forgotten before the second plumber even picks up.
                </p>
              </div>
            </motion.section>

            {/* Stat Cards */}
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Don't Leave a Voicemail</div>
                <div className="text-xs text-gray-500 mt-1">Emergency callers who hang up</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">45s</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Time to Dial Competitor</div>
                <div className="text-xs text-gray-500 mt-1">Median time after missed call</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$100K+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Annual Revenue Lost</div>
                <div className="text-xs text-gray-500 mt-1">At 5 missed calls per week</div>
              </div>
            </div>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Revenue Impact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                The Revenue Impact of One Missed Call
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Most plumbing business owners think in terms of individual jobs. A missed burst-pipe call is $500 in lost revenue. That is real money, but it significantly understates the actual damage. Emergency plumbing customers are high-value long-term clients — they experienced a crisis, a plumber solved it, and they call that same plumber for every future issue. The immediate job value of $300–$800 is just the entry point into a relationship worth $2,000–$5,000 over several years.
                </p>
                <p>
                  Now compound that. A plumbing company missing five emergency calls per week — a conservative number for any busy operation — is losing 260 calls per year. Even assuming a 50% conversion rate if those calls were answered, that's 130 jobs. At an average emergency job value of $500, that's $65,000 per year in immediate revenue. Add in the lifetime value multiplier, and a single gap in call coverage costs a plumbing business well over $100,000 annually.
                </p>
                <p>
                  The hidden cost extends further still. Every unanswered emergency call is a 5-star review that never happens, a referral that never gets made, and a Google Business Profile that never improves. The compounding damage of missed calls is one of the most underestimated revenue leaks in the trades.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">What is the lifetime value of a plumbing customer acquired through an emergency call?</h3>
                <p>
                  A customer who calls in a plumbing emergency and has a positive experience typically becomes a repeat customer for 5–10 years. Including routine maintenance, fixture replacements, and occasional emergency call-backs, that customer generates $2,000–$5,000 in revenue over their lifetime. Emergency calls are the highest-value acquisition channel in plumbing — which is exactly why missing them is so costly.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                  <div className="text-xs font-bold uppercase text-red-600 mb-3 tracking-widest">The Hidden Math</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      '5 missed emergency calls per week × 52 weeks = 260 missed calls per year',
                      '260 calls × 50% conversion = 130 jobs that should have been won',
                      '130 jobs × $500 average = $65,000 in direct revenue lost',
                      '130 customers × $3,000 lifetime value = $390,000 in long-term value destroyed',
                      'Plus: zero referrals, zero reviews, zero brand growth from those 130 customers',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Root Causes</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Why Plumbers Miss Calls Even When Trying Not To
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The most frustrating part of missed calls for plumbing business owners is that they are not lazy or careless — they are genuinely trying to answer every call. The problem is structural. Plumbing is a hands-on trade conducted in locations where phone use is physically impossible: under sinks, inside crawl spaces, in basements with no signal, with tools running and water spraying. A technician cannot safely stop mid-repair to answer a call.
                </p>
                <p>
                  The second major cause is after-hours volume. Many plumbing emergencies occur outside of business hours — late evenings, early mornings, and weekends account for a disproportionate share of burst pipes, flooding events, and water heater failures. A plumber who works 8am–6pm misses every emergency call that arrives outside that window unless they have a dedicated answering system. Forwarding calls to a personal mobile is unreliable and exhausting; it also results in calls answered groggily or not at all.
                </p>
                <p>
                  The third cause is simultaneous volume during peak periods. When a cold snap hits a city, frozen pipe calls surge. A two-person plumbing operation receiving ten simultaneous calls will miss nine of them regardless of how hard the owner tries to answer. Human call handling simply cannot scale to match demand spikes.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">When do plumbers miss the most calls during the workday?</h3>
                <p>
                  The highest-risk windows for missed calls in a plumbing business are 7–9am (technicians mobilizing to first jobs), 11am–1pm (active mid-job periods), 5–8pm (after-office hours but still peak consumer distress time), and overnight. Weekends are also chronically underserved — many small plumbing companies effectively go dark on Saturday afternoons and Sundays, exactly when homeowners have time to notice and report problems.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Can a human receptionist solve the missed call problem for a plumbing business?</h3>
                <p>
                  A dedicated receptionist helps during business hours but does not solve after-hours and weekend coverage without significant additional cost. A full-time receptionist costs $35,000–$50,000 per year plus benefits. An after-hours live answering service adds $200–$600 per month. Neither solution handles simultaneous volume during surge events — and both fail if the person is sick, on break, or handling another call.
                </p>
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
                How AI Changes the Outcome of a Missed Call
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  An AI receptionist changes the fundamental dynamic of a missed call. Instead of the call going to voicemail, it is answered within one ring — every time, at any hour, regardless of how many other calls are coming in simultaneously. The AI identifies itself, greets the caller naturally, asks about the issue, and determines whether it is an emergency or a routine service request.
                </p>
                <p>
                  For routine requests, the AI books directly into the plumber's calendar and sends a confirmation text. The caller gets their appointment confirmed in under two minutes without waiting for a human callback. For emergency calls — a caller mentioning flooding, a gas smell, or structural damage — the AI sends an immediate priority alert to the plumber's mobile with the caller's name, number, and issue summary. The plumber can call back within seconds rather than discovering the missed call hours later.
                </p>
                <p>
                  Boltcall provides exactly this capability for plumbing companies. The setup connects to the main business phone line and takes over unanswered calls — or all calls, if the owner prefers. Every lead is captured with a full transcript, the caller's contact details, and the nature of the request. No call goes unlogged, no emergency goes unescalated, and no booking is lost to voicemail.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">How does AI know the difference between a plumbing emergency and a routine call?</h3>
                <p>
                  AI call answering systems like Boltcall are configured with escalation triggers specific to the plumbing trade. Keywords and phrases — "flooding," "burst pipe," "water everywhere," "no hot water," "gas smell," "won't stop leaking" — trigger emergency protocols. The AI can also ask clarifying questions to assess urgency: "Is the water still running?" or "Is this affecting your ability to use the property?" Based on the answers, it routes the call appropriately, books or escalates, and notifies the owner in real time.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <div className="text-xs font-bold uppercase text-red-600 mb-3 tracking-widest">Without AI</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Emergency call hits voicemail at 7pm',
                        'Customer hangs up within 10 seconds',
                        'Calls competitor — job booked in 3 minutes',
                        'Plumber discovers missed call next morning',
                        '$500 job and $3,000 lifetime value lost',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <div className="text-xs font-bold uppercase text-green-600 mb-3 tracking-widest">With Boltcall AI</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Emergency call answered within one ring at 7pm',
                        'AI identifies emergency, captures caller details',
                        'Priority alert sent to plumber\'s mobile instantly',
                        'Plumber calls back within 60 seconds',
                        'Job won — customer becomes a long-term client',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Metrics */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Track These</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                4 Metrics Every Plumber Should Track for Call Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Phone className="w-5 h-5 text-blue-600" />,
                    metric: 'Call Answer Rate',
                    benchmark: '98%+',
                    desc: 'Percentage of inbound calls answered without going to voicemail. A rate below 90% is a significant revenue leak for any plumbing business.',
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-blue-600" />,
                    metric: 'Emergency Escalation Time',
                    benchmark: '< 60 sec',
                    desc: 'Time from emergency call received to plumber notified. Every minute of delay increases the chance the customer has already called someone else.',
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
                    metric: 'After-Hours Answer Rate',
                    benchmark: '100%',
                    desc: 'Calls received outside business hours that get a live response. This is where most plumbing businesses lose the highest-value emergency jobs.',
                  },
                  {
                    icon: <DollarSign className="w-5 h-5 text-blue-600" />,
                    metric: 'Revenue Per Recovered Call',
                    benchmark: '$400–$700',
                    desc: 'Average job value attributed to calls that previously would have gone to voicemail. Track this monthly to quantify the direct ROI of AI call answering.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{item.metric}</div>
                        <div className="text-blue-600 text-lg font-bold">{item.benchmark}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                    q: 'What happens when a plumber misses a customer call for an emergency?',
                    a: 'The customer immediately calls the next plumber on their list. Over 80% of people who reach voicemail on an emergency call do not leave a message — they hang up and dial the next result. The original plumber loses the job without ever knowing the call came in.',
                  },
                  {
                    q: 'How much revenue does a plumber lose from one missed emergency call?',
                    a: 'A single missed plumbing emergency is worth $300–$800 in immediate revenue, plus $2,000–$5,000 in potential lifetime value from repeat calls and referrals. A plumber missing 5 emergency calls per week loses over $100,000 per year.',
                  },
                  {
                    q: 'Why do plumbers miss calls even when they try not to?',
                    a: 'Plumbers miss calls because field work makes answering impossible — a technician under a sink cannot safely stop to take a call. After-hours calls and peak-season volume surges also overwhelm any human-staffed answering system.',
                  },
                  {
                    q: 'Can AI answer plumbing emergency calls and book appointments?',
                    a: 'Yes. An AI receptionist answers every call within one ring, identifies emergencies, and either books an immediate slot or sends a priority text alert to the owner. Routine calls get booked automatically; emergency calls get escalated immediately.',
                  },
                  {
                    q: 'How does Boltcall help plumbers recover missed calls?',
                    a: "Boltcall connects to a plumbing company's main phone line and answers every missed call instantly with an AI that books appointments and sends emergency alerts. No call goes unanswered — every lead gets a response before the customer can dial a competitor.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Closing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-16"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Bottom Line</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                <div className="w-1 self-stretch bg-blue-600 rounded-full flex-shrink-0"></div>
                Every Missed Call Is a Job Won by a Competitor
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The math is unambiguous. Emergency plumbing calls are the highest-value, highest-urgency leads in the trade — and they are exactly the calls most likely to go unanswered when a technician is in the field or the hour is late. Every call that reaches voicemail is a job that goes to a competitor who simply answered the phone.
                </p>
                <p>
                  Boltcall solves this by making sure every call is answered, every emergency is escalated in real time, and every routine booking is captured automatically. See <Link to="/pricing" className="text-blue-600 underline hover:text-blue-700">Boltcall pricing</Link> to find the right plan for your plumbing business, or start immediately at <Link to="/signup" className="text-blue-600 underline hover:text-blue-700">boltcall.org/signup</Link>. Your phone is ringing right now. Make sure it gets answered.
                </p>
              </div>
            </motion.section>

            {/* CTA Block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
                      <Calendar className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <h2 className="text-gray-900 font-medium mt-4 text-4xl">Never Miss an Emergency Call Again</h2>
                  <p className="text-base text-gray-600 mt-2 whitespace-pre-line">
                    Boltcall answers every call, escalates emergencies instantly, and books routine jobs automatically — 24/7.
                  </p>
                  <Link
                    to="/signup"
                    className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 shadow-sm active:shadow-none"
                  >
                    Start free with Boltcall
                  </Link>
                </div>
              </div>
            </motion.section>

          </article>

          {/* Table of Contents Sidebar */}
          <TableOfContents headings={headings} />
        </div>
      </div>

      {/* Related Reading */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Related Reading</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/blog/best-way-hvac-company-never-miss-service-call-customer" className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Best Way for HVAC Companies to Never Miss a Call</p>
            <p className="text-sm text-gray-500">The AI setup that eliminates missed field service calls.</p>
          </Link>
          <Link to="/blog/how-fast-local-service-business-respond-online-lead-inquiry" className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">How Fast Should a Local Business Respond to Leads?</p>
            <p className="text-sm text-gray-500">MIT research on the 60-second conversion window.</p>
          </Link>
          <Link to="/blog/why-local-service-businesses-lose-customers-not-answering-calls" className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Why Local Businesses Lose Customers to Slow Response</p>
            <p className="text-sm text-gray-500">The urgency math behind every missed local service lead.</p>
          </Link>
          <Link to="/blog/does-response-time-affect-whether-local-business-gets-job" className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-semibold text-gray-900 mb-1">Does Response Time Affect Whether You Get the Job?</p>
            <p className="text-sm text-gray-500">The 391% statistic every local service business owner needs.</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogWhatHappensPlumberMissesCall;
