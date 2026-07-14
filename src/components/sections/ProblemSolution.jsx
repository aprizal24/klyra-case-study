"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionTransition = { duration: 0.85, ease: "easeOut" };

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
        Problem & Solution
      </span>
    </motion.div>
  );
}

function LetterCard({ letter }) {
  return (
    <motion.div
      className="flex aspect-square w-full max-w-[148px] items-center justify-center rounded-[28px] border border-white/55 bg-[radial-gradient(circle_at_30%_25%,rgba(123,109,255,0.18),rgba(255,255,255,0.35)_58%,rgba(255,255,255,0.26)_100%)] shadow-[0_18px_44px_rgba(123,109,255,0.14)] backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      <span className="text-[54px] font-bold tracking-tight text-zinc-900 sm:text-[64px]">
        {letter}
      </span>
    </motion.div>
  );
}

function InfoCard({ children, from }) {
  const initial =
    from === "left"
      ? { opacity: 0, x: -18, y: 8 }
      : { opacity: 0, x: 18, y: 8 };

  return (
    <motion.div
      className="rounded-[28px] border border-white/55 bg-gradient-to-br from-[#FFFFFF] to-[#CBB1FF]/30 px-7 py-7 shadow-[0_18px_44px_rgba(123,109,255,0.12)] backdrop-blur-md"
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
      whileHover={{ y: -5 }}
    >
      <p className="text-[15px] font-medium leading-[1.75] text-zinc-900 sm:text-[16px]">
        {children}
      </p>
    </motion.div>
  );
}

function Connector({ variant, direction }) {
  const flip = direction === "rtl";
  const src =
    variant === "bottom"
      ? "/images/problem-solution/connector-bottom.svg"
      : "/images/problem-solution/connector-top.svg";

  return (
    <div
      aria-hidden="true"
      className="hidden items-center justify-center sm:flex invisible md:visible"
    >
      <div className={flip ? "relative h-[130px] w-[170px] scale-x-[-1]" : "relative h-[130px] w-[170px]"}>
        <motion.div
          className="h-full overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="relative h-full w-full">
            <Image src={src} alt="" fill sizes="170px" className="object-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <motion.section
      aria-label="Problem and solution"
      className="relative w-full bg-[#F0F0FF] px-6 pt-20 sm:px-10 sm:pt-24 pb-10 sm:pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionLabel />

        <div className="mt-12 space-y-8 sm:mt-14 sm:space-y-24">
          <div className="hidden sm:grid sm:grid-cols-[160px_170px_1fr] sm:items-center sm:gap-8">
            <LetterCard letter="P" />
            <Connector variant="top" direction="ltr" />
            <InfoCard from="right">
              Managing personal finances can be challenging when users lack a clear picture of their spending patterns, thereby hindering efforts to control costs, create budgets, and achieve financial goals.
            </InfoCard>
          </div>

          <div className="hidden sm:grid sm:grid-cols-[1fr_170px_160px] sm:items-center sm:gap-8">
            <InfoCard from="left">
              Klyra is a personal finance solution that helps users understand
              their financial habits through expense tracking, budget management,
              and saving goals in one simple experience.
            </InfoCard>
            <Connector variant="bottom" direction="ltr" />
            <LetterCard letter="S" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:hidden">
            <div className="flex justify-center">
              <LetterCard letter="P" />
            </div>
            <InfoCard from="right">
              Mengelola keuangan pribadi bisa menjadi tantangan ketika pengguna
              kurang memiliki visibilitas terhadap pola pengeluaran mereka,
              sehingga menyulitkan untuk mengendalikan pengeluaran, merencanakan
              anggaran, dan mencapai tujuan keuangan.
            </InfoCard>
            <InfoCard from="left">
              Klyra is a personal finance solution that helps users understand
              their financial habits through expense tracking, budget management,
              and saving goals in one simple experience.
            </InfoCard>
            <div className="flex justify-center">
              <LetterCard letter="S" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
