"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      aria-label="About"
      className="relative w-full bg-[#F0F0FF] px-6 pt-20 sm:px-10 sm:pt-24 pb-0 sm:pb-0"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <span className="h-6 w-1.5 rounded-full bg-[#7b6dff]" />
          <span className="text-sm font-medium tracking-wide text-zinc-900">
            About
          </span>
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-[64ch] text-left text-[clamp(22px,3.6vw,40px)] font-medium leading-[1.35] text-zinc-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
        >
          Klyra is a personal finance app that helps you{" "}
          <span className="text-[#7B6BC3]/90">track</span>{" "}
          <span className="text-[#7B6BC3]/90">
            expenses, manage budgets, and achieve your financial goals easily.
          </span>{" "}
          It’s your way to take control of your money and build better financial
          habits with confidence.
        </motion.p>
      </div>
    </motion.section>
  );
}
