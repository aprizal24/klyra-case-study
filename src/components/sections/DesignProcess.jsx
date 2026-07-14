"use client";

import { motion } from "framer-motion";

const STAGES = [
  { title: "Strategy", duration: "2 days" },
  { title: "Research", duration: "4 days" },
  { title: "UX Process", duration: "5 days" },
  { title: "UI Design", duration: "8 days" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel() {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
    >
      <span className="h-6 w-1.5 rounded-full bg-[#7b6dff]" />
      <span className="text-sm font-medium tracking-wide text-zinc-900">
        Design process
      </span>
    </motion.div>
  );
}

function TimelinePath() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 sm:block">
      <div className="relative mx-auto w-full max-w-[1100px] px-6 sm:px-10">
        <svg
          className="h-[220px] w-full"
          viewBox="0 0 1000 220"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M 90 128 C 210 38, 290 38, 410 128 S 610 218, 730 128 S 850 38, 950 128"
            stroke="rgba(123,109,255,0.55)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  );
}

function ProcessCard({ title, duration }) {
  return (
    <motion.li
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative z-10"
    >
      <div className="flex h-full min-h-[180px] flex-col justify-between rounded-[28px] border border-white/55 bg-white/35 px-7 py-7 shadow-[0_18px_44px_rgba(123,109,255,0.18)] backdrop-blur-md">
        <h3 className="text-[22px] font-bold tracking-tight text-zinc-900 sm:text-[24px]">
          {title}
        </h3>
        <p className="self-end text-sm font-medium text-[#7b6dff]">
          {duration}
        </p>
      </div>
    </motion.li>
  );
}

export default function DesignProcess() {
  return (
    <motion.section
      aria-label="Design process"
      className="relative w-full bg-[#F0F0FF] px-6 pt-20 sm:px-10 sm:pt-24 pb-10 sm:pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionLabel />

        <div className="relative mt-12 sm:mt-14">
          <TimelinePath />

          <motion.ol
            className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {STAGES.map((stage) => (
              <ProcessCard
                key={stage.title}
                title={stage.title}
                duration={stage.duration}
              />
            ))}
          </motion.ol>

          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#7b6dff]/30 sm:hidden" />
        </div>
      </div>
    </motion.section>
  );
}
