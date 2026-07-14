"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CARD_PATTERN_SRC = "/images/persona/persona-pattern.svg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
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
        Persona
      </span>
    </motion.div>
  );
}

function InfoCard({ title, children }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[28px] border border-white/55 bg-gradient-to-br from-[#FFFFFF]/20 to-[#CBB1FF]/20 px-7 py-7 shadow-[0_16px_40px_rgba(123,109,255,0.10)] backdrop-blur-m"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={CARD_PATTERN_SRC}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-contain object-right-bottom opacity-15"
          />
        </div>
      </div>

      <div className="relative">
        <h3 className="text-[18px] font-bold tracking-tight text-zinc-900 sm:text-[20px]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] font-medium leading-[1.75] text-zinc-900 sm:text-[16px]">
          {children}
        </p>
      </div>
    </motion.div>
  );
}

export default function UserPersona() {
  return (
    <motion.section
      aria-label="User persona"
      className="relative w-full bg-[#F0F0FF] px-6 pt-0 sm:px-10 sm:pt-0 pb-10 sm:pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionLabel />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-7 sm:mt-14 lg:grid-cols-2 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-white/55 bg-white/30 shadow-[0_18px_44px_rgba(123,109,255,0.12)]"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="relative aspect-[473/592] w-full">
              <Image
                src="/images/persona/persona-photo.png"
                alt="Persona portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain"
                priority={false}
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-40 sm:gap-6">
            <InfoCard title="Goals & Motivation">
              Wants to manage monthly finances better, track spending habits, and
              save money for personal goals with more control.
            </InfoCard>
            <InfoCard title="Expectations">
              Wants a simple finance app to track transactions, manage budgets,
              and understand where money goes without complicated processes.
            </InfoCard>
          </div>

          <div className="lg:col-span-2">
            <InfoCard title="Pain Points">
              Often loses track of daily expenses, struggles to control small
              spending, and finds it difficult to maintain consistent budgeting
              habits.
            </InfoCard>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
