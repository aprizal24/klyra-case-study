"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        User Flow
      </span>
    </motion.div>
  );
}

export default function UserFlow() {
  return (
    <motion.section
      aria-label="User flow"
      className="relative w-full bg-[#F0F0FF] px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionLabel />

        <motion.figure
          className="mx-auto mt-12 w-full max-w-[964px] sm:mt-14"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/images/user-flow/user-flow.png"
            alt="User Flow diagram for Klyra"
            width={964}
            height={626}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 92vw, 964px"
            className="h-auto w-full"
          />
        </motion.figure>
      </div>
    </motion.section>
  );
}
