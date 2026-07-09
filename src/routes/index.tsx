import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { submitEnquiry } from "@/lib/enquiry.functions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Home,
  Briefcase,
  UserCheck,
  RefreshCw,
  Compass,
  ListChecks,
  HeartHandshake,
  Award,
  FileCheck2,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  School,
  ClipboardList,
  TrendingUp,
  ShieldCheck,
  X,
  Send,
} from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import aboutImg from "@/assets/about-education.jpg";
import logoUrl from "@/assets/niya-logo.jpg";
import { SITE, waLink } from "@/lib/site";

const PAGE_X = "w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20";

const TRUST_POINTS = [
  {
    value: "4 Board Options",
    label:
      "NIOS, BOSSE, NWAC, and APOSS guidance explained in simple parent-friendly language.",
  },
  {
    value: "1-to-1 Counseling",
    label:
      "Student and parent counseling before choosing the class, board, and subjects.",
  },
  {
    value: "Flexible Study",
    label:
      "Home study, academy support, and WhatsApp guidance for different learning needs.",
  },
  {
    value: "Exam Support",
    label:
      "Step-by-step guidance from enquiry and admission planning to exam preparation.",
  },
];

const BOARD_COMPARISON = [
  {
    board: "NIOS",
    bestFor: "Flexible open schooling for 10th and 12th learners.",
    flexibility: "High",
    support: "Subject choice, study planning, and exam preparation guidance.",
  },
  {
    board: "BOSSE",
    bestFor: "Students exploring alternative board pathways.",
    flexibility: "High",
    support: "Eligibility clarity, board selection, and academic support.",
  },
  {
    board: "NWAC",
    bestFor: "Learners planning future education with guided pathway support.",
    flexibility: "Guided",
    support: "Course suitability, documentation clarity, and next-step advice.",
  },
  {
    board: "APOSS",
    bestFor: "Students looking for open school study options.",
    flexibility: "Open",
    support: "Study mode selection, subject guidance, and exam preparation.",
  },
];

const TESTIMONIALS = [
  {
    name: "Lakshmi Priya",
    role: "Parent of 10th learner",
    quote:
      "NIYA explained every board option clearly and helped us choose a practical 10th study plan without pressure.",
  },
  {
    name: "Arun Kumar",
    role: "12th student",
    quote:
      "I had stopped studying for a while. The counseling and subject planning gave me confidence to restart my 12th.",
  },
  {
    name: "Meenakshi Sundaram",
    role: "Home-study learner",
    quote:
      "The WhatsApp guidance and regular follow-up made it easy for me to continue preparation from home.",
  },
  {
    name: "Karthikeyan Raj",
    role: "Parent",
    quote:
      "The parent counseling was very useful. We understood eligibility, study mode, and exam preparation before deciding.",
  },
  {
    name: "Divya Bharathi",
    role: "Private student",
    quote:
      "The team helped me compare NIOS, BOSSE, NWAC, and APOSS and select the path that matched my future plans.",
  },
  {
    name: "Prakash Murugan",
    role: "12th learner",
    quote:
      "NIYA kept the process simple: documents, subjects, study support, and exam preparation were all explained step by step.",
  },
];

const FAQ_ITEMS = [
  [
    "Can students who need another opportunity join NIYA Education Academy?",
    "Yes, students who need support in 10th or 12th can get guidance to continue and complete their education.",
  ],
  [
    "Can I study from home?",
    "Yes, students can study with flexible guidance, study support, and exam preparation assistance.",
  ],
  [
    "Which classes are available?",
    "NIYA Education Academy provides guidance for 10th and 12th education.",
  ],
  [
    "Which boards are available?",
    "Guidance is available for NIOS, BOSSE, NWAC, and APOSS.",
  ],
  [
    "How do I know which board is suitable?",
    "Our counseling team reviews the student's background, goals, study comfort, and subject needs before suggesting suitable options.",
  ],
  [
    "Do you help with subject selection?",
    "Yes, subject selection guidance is available for students and parents based on future study plans and learning confidence.",
  ],
  [
    "Do you help with admission and exams?",
    "Yes, we support students with admission guidance, subject selection, study preparation, and exam-related guidance.",
  ],
  [
    "Can students with discontinued schooling continue their education?",
    "Yes, students who discontinued school can receive guidance to restart their education journey.",
  ],
  [
    "Do parents get counseling?",
    "Yes, parents can receive counseling about study options, board selection, admission process, and academic support.",
  ],
  [
    "How fast will NIYA contact me after enquiry?",
    "The academy team will contact you as soon as possible by phone or WhatsApp during working hours.",
  ],
];

const NIOS_SUBJECT_GROUPS = [
  {
    id: "10th-school",
    label: "NIOS 10th School Group",
    note: "Any 5 Subjects",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Business Studies",
      "Physical Education",
      "Second Lang (optional)",
    ],
  },
  {
    id: "10th-nonschool",
    label: "NIOS 10th Non-school Group",
    note: "Any 5 Subjects",
    subjects: [
      "English",
      "Business Studies",
      "Home Science",
      "Painting",
      "Physical Education",
      "Second Lang / DEO (optional)",
    ],
  },
  {
    id: "plus2-science",
    label: "NIOS +2 Science Group",
    note: "Any 5 Subjects",
    subjects: [
      "English",
      "Physics / Chemistry",
      "Mathematics",
      "Biology",
      "DEO (Data Entry Operations)",
      "Second Lang (optional)",
    ],
  },
  {
    id: "plus2-commerce",
    label: "NIOS +2 Commerce Group",
    note: "Any 5 Subjects",
    subjects: [
      "English",
      "Accountancy",
      "Economics",
      "Business Studies",
      "Mathematics",
      "Second Lang / DEO (optional)",
    ],
  },
  {
    id: "plus2-arts",
    label: "NIOS +2 Arts Group",
    note: null,
    subjects: [
      "DEO",
      "Painting",
      "Home Science",
      "Business Studies",
      "Second Lang (optional)",
    ],
  },
  {
    id: "obe-c",
    label: "NIOS OBE 'C' Level",
    note: null,
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social",
      "Pre-vocational subjects",
    ],
  },
  {
    id: "obe-a",
    label: "NIOS OBE 'A' Level Admission (equivalent to 3rd)",
    note: null,
    subjects: [
      "English",
      "EVS",
      "Mathematics",
      "Pre-vocational subjects like health care and products, art and craft",
    ],
  },
  {
    id: "iti-entry",
    label: "NIOS ITI Entry Details (10th / 12th)",
    note: "Any 2 Subjects",
    subjects: ["English", "Commerce / DEO", "Home Science"],
  },
  {
    id: "on-demand-pilot",
    label: "NIOS On Demand Pilot Entry",
    note: null,
    subjects: ["Physics", "Mathematics"],
  },
  {
    id: "unsuccessful-learner",
    label: "NIOS Unsuccessful Learner on Demand Entry",
    note: "Only who has fail certificates for last 5 years — Any 2 Subjects taken from Old Merit Sheet",
    subjects: [],
  },
  {
    id: "neet-biology",
    label: "NIOS On Demand NEET Biology Alone Entry",
    note: null,
    subjects: ["Biology"],
  },
  {
    id: "improvement",
    label: "Improvement Certification",
    note: "Maximum 4 Subjects",
    subjects: [],
  },
];

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      name: SITE.name,
      description:
        "10th and 12th admission guidance, board selection counseling, parent counseling, study support, and exam preparation guidance.",
      telephone: SITE.phone,
      email: SITE.email,
      address: SITE.address,
      areaServed: SITE.city,
      openingHours: SITE.openingHours,
      url: "/",
      image: heroImg,
      sameAs: [waLink()],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          contactType: "admission counseling",
          areaServed: SITE.city,
          availableLanguage: ["English", "Hindi", "Malayalam"],
        },
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Free Education Counseling",
          category: "Education Guidance",
        },
        {
          "@type": "Offer",
          name: "10th and 12th Admission Guidance",
          category: "Academic Support",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "NIYA Education Academy — 10th & 12th Admission Guidance | NIOS, BOSSE, NWAC, APOSS",
      },
      {
        name: "description",
        content:
          "Complete your 10th & 12th with NIYA Education Academy. Trusted guidance through NIOS, BOSSE, NWAC & APOSS for second-chance, discontinued, private and home-study learners.",
      },
      {
        property: "og:title",
        content: "NIYA Education Academy — Learn • Grow • Succeed",
      },
      {
        property: "og:description",
        content:
          "Restart, continue and complete your 10th & 12th education with proper guidance, study support and free counseling.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

/* ---------- Reusable bits ---------- */

function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div
      className={
        center ? "mx-auto max-w-4xl text-center" : "max-w-4xl text-left"
      }
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy ${
            center ? "" : ""
          }`}
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold text-navy md:text-4xl">{title}</h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
}

function PrimaryBtn({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-navy-deep"
    >
      {children}
    </a>
  );
}

function GoldBtn({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95"
    >
      {children}
    </a>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof GraduationCap;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-gold">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition group-hover:bg-gold/15 group-hover:text-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}

function NiosGroupCard({
  group,
}: {
  group: {
    id: string;
    label: string;
    note: string | null;
    subjects: string[];
  };
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Uniform clickable tile — same height for every card */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-left shadow-[var(--shadow-card)] transition hover:border-gold hover:shadow-md"
      >
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 shrink-0 rounded-full bg-gold" />
          <span className="text-sm font-semibold text-navy">{group.label}</span>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-gold opacity-0 transition group-hover:opacity-100" />
      </button>

      {/* Modal popup */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/40 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                <h3 className="text-base font-bold text-navy">{group.label}</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-navy transition hover:border-gold"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {group.subjects.length > 0 && (
              <ul className="mt-5 space-y-2">
                {group.subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-navy">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
            {group.note && (
              <p className={`text-xs font-medium leading-relaxed text-muted-foreground ${group.subjects.length > 0 ? "mt-4" : "mt-2"}`}>
                {group.note}
              </p>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-full bg-navy py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-navy-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Page ---------- */

function HomePage() {
  const [quickEnquiryOpen, setQuickEnquiryOpen] = useState(false);

  return (
    <div id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.76 0.13 80 / 0.35), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.76 0.13 80 / 0.2), transparent 50%)",
          }}
          aria-hidden
        />

        <div
          className={`grid items-center gap-10 py-12 sm:py-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:py-16 xl:grid-cols-[minmax(0,1.05fr)_minmax(480px,0.95fr)] ${PAGE_X}`}
        >
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
              <Star className="h-3.5 w-3.5" />
              Learn • Grow • Succeed
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
              Complete Your <span className="text-gold">10th & 12th</span>{" "}
              Education with NIYA Education Academy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              A trusted learning academy for students who want to continue,
              restart, or complete their education through NIOS, BOSSE, NWAC,
              and APOSS.
            </p>
            <p className="mt-3 text-sm font-medium text-gold-soft">
              Special support for second-chance, discontinued, private, and
              home-study learners.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <GoldBtn href="#contact">
                Enquire Now <ArrowRight className="h-4 w-4" />
              </GoldBtn>
              <a
                href="#counseling"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Get Admission Guidance
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Book Free Counseling
              </a>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Guidance for <span className="text-gold-soft">10th learners</span>
              , <span className="text-gold-soft">12th learners</span>, students
              with discontinued schooling, private students, and home learners.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-3xl bg-gold/20 blur-2xl"
              aria-hidden
            />
            <img
              src={heroImg}
              alt="Students studying at NIYA Education Academy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gold/15 p-2 text-gold">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Trusted by
                  </div>
                  <div className="text-sm font-bold text-navy">
                    Students & Parents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* restart banner */}
        <div className="border-t border-white/10 bg-white/5 py-4 text-center text-sm text-white backdrop-blur">
          <span className="font-semibold text-gold">
            Need another chance in 10th or 12th?
          </span>{" "}
          Don't stop your education. We help you restart, study again, and
          succeed.
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-background py-14">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Why Parents Trust NIYA"
            title="Guidance Families Can Understand and Act On"
            desc="Parents get clear counseling, students get flexible study support, and every learner receives practical guidance before choosing a board or subject plan."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {TRUST_POINTS.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gold/15 p-3 text-gold">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{item.value}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-background py-20">
        <div
          className={`grid items-start gap-10 lg:grid-cols-[minmax(360px,0.85fr)_minmax(0,1.15fr)] xl:gap-14 ${PAGE_X}`}
        >
          <div>
            <img
              src={aboutImg}
              alt="Education resources at NIYA"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="About NIYA Education Academy"
              center={false}
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              NIYA Education Academy is dedicated to helping students achieve
              academic success through flexible and supportive education
              pathways. We guide students who want to complete 10th or 12th,
              including students who could not pass earlier, discontinued
              regular schooling, or are looking for a flexible study option.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our goal is to make education simple, accessible, and achievable
              for every learner. With proper guidance, subject support, study
              preparation, and parent communication, we help students move
              forward with confidence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We understand that every student's journey is different. Some
              need a second chance after a difficult result, others have
              discontinued schooling due to personal or family reasons, and
              many simply need a more flexible way to learn. Whatever the
              situation, NIYA Education Academy is here to provide a clear
              path forward.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Flexible learning support",
                "Second chance learning guidance",
                "Parent counseling",
                "Step-by-step academic help",
                "NIOS, BOSSE, NWAC & APOSS guidance",
                "WhatsApp & phone support",
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COUNSELING */}
      <section id="counseling" className="bg-secondary/60 py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Free Counseling"
            title="Free Education Counseling for Students & Parents"
            desc="Not sure which board or course is right for you? Our counseling team explains eligibility, subject selection, study process, exam preparation, and future education options — free of cost."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
            <FeatureCard
              icon={Compass}
              title="Board Selection Guidance"
              desc="Helping students choose between NIOS, BOSSE, NWAC, and APOSS."
            />
            <FeatureCard
              icon={ListChecks}
              title="Subject Selection Support"
              desc="Guidance for selecting suitable subjects based on student ability and future goals."
            />
            <FeatureCard
              icon={RefreshCw}
              title="Second Chance Guidance"
              desc="Support for students who need another opportunity in 10th or 12th and want to restart with confidence."
            />
            <FeatureCard
              icon={HeartHandshake}
              title="Parent Counseling"
              desc="Clear explanation for parents about admission, study process, and exam support."
            />
          </div>
          <div className="mt-10 flex justify-center">
            <GoldBtn href={waLink()} external>
              <MessageCircle className="h-4 w-4" /> Book Free Counseling
            </GoldBtn>
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="bg-background py-20">
        <div className={PAGE_X}>
          <SectionHeading title="Who Can Join NIYA Education Academy?" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {[
              {
                icon: RefreshCw,
                title: "10th Second Chance Learners",
                desc: "Students who need another opportunity in 10th can continue their studies with proper academic guidance.",
              },
              {
                icon: TrendingUp,
                title: "12th Second Chance Learners",
                desc: "Students who need another opportunity in 12th can restart, prepare, and complete their education.",
              },
              {
                icon: School,
                title: "Students with Discontinued Schooling",
                desc: "Students who discontinued school can resume their academic journey.",
              },
              {
                icon: UserCheck,
                title: "Private Students",
                desc: "Students who want to study privately can receive guidance and support.",
              },
              {
                icon: Briefcase,
                title: "Working Students",
                desc: "Students who cannot attend regular school can study with flexible learning support.",
              },
              {
                icon: Home,
                title: "Home-Study Students",
                desc: "Study from home with academy guidance, study material, and exam preparation support.",
              },
            ].map((c) => (
              <FeatureCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="bg-cream/60 py-20"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Programs"
            title="Our 10th & 12th Education Programs"
            desc="Flexible academic pathways with full support from admission to exam preparation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 2xl:grid-cols-2">
            {[
              {
                tag: "10th Standard",
                title: "10th Standard Program",
                desc: "For students who want to complete secondary education through flexible learning, open schooling, or alternative education pathways.",
                points: [
                  "10th admission guidance",
                  "Subject selection support",
                  "Study material guidance",
                  "Exam preparation support",
                  "Support for second-chance and discontinued learners",
                ],
              },
              {
                tag: "12th Standard",
                title: "12th Standard Program",
                desc: "For students who want to complete senior secondary education and move forward to college, career, diploma courses, competitive exams, or job opportunities.",
                points: [
                  "12th admission guidance",
                  "Stream and subject selection support",
                  "Exam preparation guidance",
                  "Support for second-chance learners",
                  "Career and higher education guidance",
                ],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/15 blur-2xl" />
                <span className="inline-flex items-center gap-1 rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  <GraduationCap className="h-3.5 w-3.5" /> {p.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-navy"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{" "}
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARDS */}
      <section id="boards" className="bg-secondary/60 py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Boards"
            title="Boards & Compare Options"
            desc="We help students and parents understand NIOS, BOSSE, NWAC, and APOSS in one place, then choose the suitable pathway based on eligibility, academic background, subject needs, flexibility, and future goals."
          />

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            {/* Desktop table */}
            <table className="hidden w-full table-fixed border-collapse md:table">
              <colgroup>
                <col className="w-[14%]" />
                <col className="w-[34%]" />
                <col className="w-[16%]" />
                <col className="w-[36%]" />
              </colgroup>
              <thead>
                <tr className="bg-navy">
                  {["Board", "Best Suited For", "Flexibility", "NIYA Support"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-primary-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BOARD_COMPARISON.map((row, i) => (
                  <tr
                    key={row.board}
                    className={i !== 0 ? "border-t border-border" : ""}
                  >
                    <td className="px-5 py-5 align-middle">
                      <span className="inline-flex rounded-xl bg-gold/15 px-3 py-2 text-sm font-extrabold tracking-wider text-navy">
                        {row.board}
                      </span>
                    </td>
                    <td className="px-5 py-5 align-middle text-sm leading-relaxed text-navy">
                      {row.bestFor}
                    </td>
                    <td className="px-5 py-5 align-middle text-sm font-semibold text-gold">
                      {row.flexibility}
                    </td>
                    <td className="px-5 py-5 align-middle text-sm leading-relaxed text-muted-foreground">
                      {row.support}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile stacked cards */}
            <div className="divide-y divide-border md:hidden">
              {BOARD_COMPARISON.map((row) => (
                <div key={row.board} className="px-5 py-5">
                  <span className="inline-flex rounded-xl bg-gold/15 px-3 py-2 text-sm font-extrabold tracking-wider text-navy">
                    {row.board}
                  </span>
                  <div className="mt-3 space-y-2">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Best Suited For</span>
                      <p className="mt-0.5 text-sm text-navy">{row.bestFor}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Flexibility</span>
                      <p className="mt-0.5 text-sm font-semibold text-gold">{row.flexibility}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">NIYA Support</span>
                      <p className="mt-0.5 text-sm text-muted-foreground">{row.support}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NIOS SUBJECT GROUPS */}
      <section className="bg-background py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="NIOS Subject Guide"
            title="NIOS Subject Groups & Entry Options"
            desc="A complete reference of all NIOS subject combinations for 10th, +2, OBE, ITI, and On Demand entries. Click any group to see the subjects."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NIOS_SUBJECT_GROUPS.map((group) => (
              <NiosGroupCard key={group.id} group={group} />
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 px-6 py-4 text-center text-sm font-medium text-navy">
            Not sure which group suits you?{" "}
            <a href="#contact" className="font-semibold text-gold underline underline-offset-2">
              Contact our counselors
            </a>{" "}
            — we'll guide you to the right subject combination.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/60 py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Services"
            title="Our Student Support Services"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {[
              {
                icon: ClipboardList,
                title: "Admission Guidance",
                desc: "Helping students understand admission options and choose the right education pathway.",
              },
              {
                icon: BookOpen,
                title: "Subject Selection Support",
                desc: "Guidance for selecting suitable subjects for 10th or 12th.",
              },
              {
                icon: BookOpen,
                title: "Study Materials",
                desc: "Support with easy-to-understand study materials and preparation resources.",
              },
              {
                icon: Award,
                title: "Exam Preparation",
                desc: "Guidance for assignments, practicals, theory exams, and revision planning.",
              },
              {
                icon: Users,
                title: "Student Support",
                desc: "Regular support for students during their learning journey.",
              },
              {
                icon: HeartHandshake,
                title: "Parent Communication",
                desc: "Clear updates and guidance for parents about the student's academic process.",
              },
              {
                icon: FileCheck2,
                title: "Result & Certificate Guidance",
                desc: "Assistance after exams for result and certificate-related steps.",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Process",
                desc: "Reliable step-by-step support from enquiry to exam completion.",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Support",
                desc: "Quick replies and guidance whenever you need help.",
              },
              {
                icon: Phone,
                title: "Phone Enquiry Support",
                desc: "Direct phone support for students and parents with quick answers to all queries.",
              },
            ].map((s) => (
              <FeatureCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section
        className="bg-cream py-20"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div
          className={`grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] xl:gap-14 ${PAGE_X}`}
        >
          <div>
            <SectionHeading
              eyebrow="For Parents"
              title="Support for Parents"
              center={false}
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Parents often worry when students need another academic
              opportunity, discontinue school, or lose interest in studies. NIYA
              Education Academy provides clear guidance to parents about
              available education options, admission process, study planning,
              subject selection, and exam preparation.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Our goal is to make the student's education journey stress-free
              for both students and parents.
            </p>
            <div className="mt-6">
              <PrimaryBtn href="#contact">
                Talk to a Counselor <ArrowRight className="h-4 w-4" />
              </PrimaryBtn>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Clear explanation of study options",
              "Guidance for second-chance learners",
              "Admission planning support",
              "Subject and board selection guidance",
              "Regular academic updates",
              "Motivation and confidence-building",
            ].map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="h-6 w-6 text-gold" />
                <p className="mt-3 text-sm font-medium text-navy">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER AFTER */}
      <section className="bg-background py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Your Future"
            title="What Can You Do After Completing 10th or 12th?"
            desc="Completing 10th or 12th opens the door to higher studies, skill development, career opportunities, and personal confidence."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                tag: "After 10th",
                items: [
                  "11th standard",
                  "Diploma courses",
                  "Vocational courses",
                  "Skill training programs",
                  "Open schooling continuation",
                  "Career foundation courses",
                ],
              },
              {
                tag: "After 12th",
                items: [
                  "Degree courses",
                  "Diploma programs",
                  "Professional courses",
                  "Competitive exam preparation",
                  "Government exam preparation",
                  "Job opportunities",
                  "Skill-based career programs",
                ],
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-8 shadow-[var(--shadow-card)]"
              >
                <h3 className="text-2xl font-bold text-navy">{c.tag}</h3>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm text-navy"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{" "}
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base font-semibold text-navy">
            Your future does not stop because of one difficult result. With the
            right guidance, you can continue your education and move forward.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-secondary/60 py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Why Us"
            title="Why Choose NIYA Education Academy?"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {[
              "Guidance for second-chance learners",
              "Flexible learning support",
              "10th and 12th admission assistance",
              "NIOS, BOSSE, NWAC & APOSS guidance",
              "Subject selection help",
              "Study material support",
              "Exam preparation guidance",
              "Parent counseling available",
              "WhatsApp support available",
              "Step-by-step academic guidance",
              "Student-friendly learning environment",
              "Support for discontinued and private students",
            ].map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-navy shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{" "}
                {w}
              </div>
            ))}
          </div>
          <p
            className="mt-8 rounded-2xl px-6 py-5 text-center text-base font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            We believe every student deserves a second chance to complete
            education and build a better future.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-20">
        <div className={PAGE_X}>
          <SectionHeading eyebrow="Process" title="Simple Admission Process" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {[
              {
                n: "01",
                title: "Contact Us",
                desc: "Student or parent contacts NIYA Education Academy.",
              },
              {
                n: "02",
                title: "Free Counseling",
                desc: "Our team understands the student's education background and goals.",
              },
              {
                n: "03",
                title: "Choose Board & Subjects",
                desc: "We guide the student to choose a suitable board and subjects.",
              },
              {
                n: "04",
                title: "Confirm Admission Plan",
                desc: "We help the student finalize the suitable pathway, board, and subjects.",
              },
              {
                n: "05",
                title: "Start Learning",
                desc: "Student begins preparation with guidance and study support.",
              },
              {
                n: "06",
                title: "Exam Preparation",
                desc: "We support the student with exam preparation and academic guidance.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="absolute -top-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-navy-deep shadow">
                  {s.n}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTIVATIONAL BANNER */}
      <section
        className="relative overflow-hidden py-20 text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, oklch(0.76 0.13 80 / 0.4), transparent 50%)",
          }}
        />
        <div className={`relative text-center ${PAGE_X}`}>
          <Sparkles className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            One difficult result does not mean your education is over.
          </h2>
          <p className="mt-4 text-lg text-white/85">
            At NIYA Education Academy, we help you{" "}
            <span className="text-gold">
              restart, study again, and succeed.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GoldBtn href="#contact">
              Start Your Education Again <ArrowRight className="h-4 w-4" />
            </GoldBtn>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-secondary/60 py-20">
        <div className={`text-center ${PAGE_X}`}>
          <SectionHeading
            eyebrow="Near You"
            title="10th & 12th Admission Guidance Near You"
          />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            NIYA Education Academy provides 10th and 12th open schooling
            guidance, second-chance admission support, distance education
            guidance, private study support, and flexible education options for
            students who want to continue their studies.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Students searching for 10th admission support, 12th admission
            support, NIOS admission guidance, BOSSE guidance, NWAC support,
            APOSS guidance, open schooling support, or study from home options
            can contact NIYA Education Academy for proper counseling and
            academic support.
          </p>
          <p className="mt-4 text-base font-semibold text-navy">
            NIYA Education Academy offers education guidance for students and
            parents in <span className="text-gold">Nagercoil</span>.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-background py-20">
        <div className={PAGE_X}>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Students & Parents Say"
            desc="Short, practical feedback from learners and families who value clear guidance, flexible planning, and responsive support."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-1 text-gold" aria-hidden>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-navy">
                  "{item.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      {item.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/60 py-20">
        <div className={PAGE_X}>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <Accordion
            type="single"
            collapsible
            className="mt-10 rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-card)]"
          >
            {FAQ_ITEMS.map(([q, a], i) => (
              <AccordionItem
                key={q}
                value={`item-${i}`}
                className="border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-navy">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-background py-20">
        <div
          className={`grid gap-10 lg:grid-cols-[minmax(360px,0.85fr)_minmax(0,1.15fr)] xl:gap-14 ${PAGE_X}`}
        >
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Contact NIYA Education Academy"
              desc="Fill the form or reach us directly — we'll guide you through the next steps."
              center={false}
            />
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-gold"
              >
                <div className="rounded-xl bg-navy p-3 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Call Now
                  </div>
                  <div className="text-base font-semibold text-navy">
                    {SITE.phone}
                  </div>
                </div>
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-gold"
              >
                <div className="rounded-xl bg-[#25D366] p-3 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Chat on WhatsApp
                  </div>
                  <div className="text-base font-semibold text-navy">
                    {SITE.phone}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-gold"
              >
                <div className="rounded-xl bg-gold p-3 text-navy-deep">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Book Free Counseling
                  </div>
                  <div className="text-base font-semibold text-navy">
                    {SITE.email}
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary/60 p-4">
              <img src={logoUrl} alt="" className="h-12 w-12 rounded-md" />
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-navy">
                  NIYA Education Academy
                </div>
                {SITE.address}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <FloatingCounselingMiniForm
        open={quickEnquiryOpen}
        onClose={() => setQuickEnquiryOpen(false)}
      />
      <StickyMobileCta onEnquire={() => setQuickEnquiryOpen(true)} />
    </div>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const submit = useServerFn(submitEnquiry);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (submitting) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        const payload = {
          name: String(fd.get("name") || "").trim(),
          phone: String(fd.get("phone") || "").trim(),
          studentType: String(fd.get("studentType") || ""),
          classRequired: String(fd.get("classReq") || ""),
          board: String(fd.get("board") || ""),
          studyMode: String(fd.get("mode") || ""),
          callbackTime: String(fd.get("callbackTime") || ""),
          location: String(fd.get("location") || "").trim(),
          whatsappConsent: fd.get("whatsappConsent") === "on",
          message: String(fd.get("message") || ""),
          website: String(fd.get("website") || ""),
          company: String(fd.get("company") || ""),
        };

        const validPhone = normalizeIndianMobile(payload.phone);
        if (!validPhone) {
          toast.error("Please enter a valid 10-digit Indian mobile number.");
          return;
        }
        payload.phone = validPhone;

        setSubmitting(true);
        try {
          const result = await submit({ data: payload });
          if (result.emailSent) {
            toast.success(
              "Thank you! Your enquiry was sent successfully. Our team will contact you shortly.",
            );
          } else {
            toast.warning(
              "Your enquiry was submitted, but the email was not sent. Please check SMTP settings.",
            );
          }
          setDone(true);
          form.reset();
        } catch (err) {
          console.error(err);
          toast.error(
            "Couldn't submit your enquiry. Please call or WhatsApp us directly.",
          );
        } finally {
          setSubmitting(false);
        }
      }}
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] md:p-8"
    >
      <h3 className="text-xl font-bold text-navy">Request a Call Back</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        We'll reach out with admission and counseling guidance.
      </p>

      <SpamTrapFields />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Full name" />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          placeholder="+91 ..."
        />
        <SelectField
          label="Student Type"
          name="studentType"
          options={[
            "10th Second Chance Learner",
            "12th Second Chance Learner",
            "Discontinued Schooling",
            "Private Student",
            "Other",
          ]}
        />
        <SelectField
          label="Class Required"
          name="classReq"
          options={["10th", "12th"]}
        />
        <SelectField
          label="Board Interested"
          name="board"
          options={["NIOS", "BOSSE", "NWAC", "APOSS", "Not Sure"]}
        />
        <SelectField
          label="Preferred Study Mode"
          name="mode"
          options={[
            "Home Study",
            "Academy Support",
            "Hybrid Support",
            "Not Sure",
          ]}
        />
        <SelectField
          label="Preferred Callback Time"
          name="callbackTime"
          options={["Morning", "Afternoon", "Evening", "Any Time"]}
        />
        <Field
          label="Student Location"
          name="location"
          placeholder="City / area"
        />
      </div>
      <div className="mt-4">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your education background..."
          className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>
      <label className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm text-muted-foreground">
        <input
          name="whatsappConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-input accent-[var(--gold)]"
        />
        <span>
          I agree to receive admission guidance and callback updates from NIYA
          Education Academy by phone or WhatsApp.
        </span>
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-navy-deep disabled:opacity-60"
      >
        {submitting
          ? "Sending..."
          : done
            ? "Sent — send another?"
            : "Request a Call Back"}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your details are sent securely to the academy by email.
      </p>
    </form>
  );
}

function FloatingCounselingMiniForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const submit = useServerFn(submitEnquiry);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-navy-deep/35 px-4 py-5 backdrop-blur-sm sm:flex sm:items-end sm:justify-end">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (submitting) return;
          const form = e.currentTarget;
          const fd = new FormData(form);
          const payload = {
            name: String(fd.get("name") || "").trim(),
            phone: String(fd.get("phone") || "").trim(),
            studentType: "Free Counseling Request",
            classRequired: String(fd.get("classReq") || ""),
            board: String(fd.get("board") || ""),
            studyMode: "Counselor to advise",
            callbackTime: String(fd.get("callbackTime") || ""),
            location: String(fd.get("location") || "").trim(),
            whatsappConsent: fd.get("whatsappConsent") === "on",
            message: "Book free counseling mini form enquiry.",
            website: String(fd.get("website") || ""),
            company: String(fd.get("company") || ""),
          };

          const validPhone = normalizeIndianMobile(payload.phone);
          if (!validPhone) {
            toast.error("Please enter a valid 10-digit Indian mobile number.");
            return;
          }
          payload.phone = validPhone;

          setSubmitting(true);
          try {
            const result = await submit({ data: payload });
            if (result.emailSent) {
              toast.success(
                "Thank you! Your counseling request was sent successfully.",
              );
            } else {
              toast.warning(
                "Your request was submitted, but the email was not sent. Please check SMTP settings.",
              );
            }
            form.reset();
            onClose();
          } catch (err) {
            console.error(err);
            toast.error("Please call or WhatsApp us directly.");
          } finally {
            setSubmitting(false);
          }
        }}
        className="ml-auto w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              <Send className="h-3.5 w-3.5 text-gold" />
              Free Counseling
            </div>
            <h3 className="mt-3 text-xl font-bold text-navy">
              Book a Quick Counseling Call
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Share a few details and our team will guide you on the suitable
              class and board option.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-navy transition hover:border-gold"
            aria-label="Close counseling form"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <SpamTrapFields />

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Full name" />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 ..."
          />
          <SelectField
            label="Class"
            name="classReq"
            options={["10th", "12th", "Not Sure"]}
          />
          <SelectField
            label="Board"
            name="board"
            options={["NIOS", "BOSSE", "NWAC", "APOSS", "Not Sure"]}
          />
          <SelectField
            label="Callback Time"
            name="callbackTime"
            options={["Morning", "Afternoon", "Evening", "Any Time"]}
          />
          <Field label="Location" name="location" placeholder="City / area" />
        </div>
        <label className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground">
          <input
            name="whatsappConsent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-input accent-[var(--gold)]"
          />
          <span>I agree to receive guidance by phone or WhatsApp.</span>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-navy-deep disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Counseling Request"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

function StickyMobileCta({ onEnquire }: { onEnquire: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 px-3 py-2 shadow-[0_-12px_30px_-22px_oklch(0.2_0.08_268)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-navy text-xs font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-xs font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={onEnquire}
          className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-gold text-xs font-semibold text-navy-deep"
        >
          <ClipboardList className="h-4 w-4" />
          Enquire
        </button>
      </div>
    </div>
  );
}

function SpamTrapFields() {
  return (
    <div
      aria-hidden="true"
      className="hidden"
      style={{ display: "none" }}
    >
      <label>Website</label>
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
      <label>Company</label>
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

function normalizeIndianMobile(phone: string) {
  let digits = phone.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (!/^[6-9]\d{9}$/.test(digits)) {
    return "";
  }

  return digits;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}