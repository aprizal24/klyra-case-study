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
        Wireframes
      </span>
    </motion.div>
  );
}

export default function Wireframe() {
  return (
    <motion.section
      aria-label="Wireframes"
      className="relative w-full bg-[#F0F0FF] px-6 pt-20 sm:px-10 sm:pt-24 pb-10 sm:pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionLabel />

        <motion.p
          className="mt-8 max-w-[64ch] text-left text-[clamp(18px,2vw,24px)] font-medium leading-[1.7] text-zinc-900"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
        >
          The wireframes define the core structure and user flow of Klyra,
          focusing on clear navigation, intuitive interactions, and a simple
          layout before moving into the final visual design.
        </motion.p>

        <motion.figure
          className="mx-auto mt-12 w-full max-w-[1100px] sm:mt-14"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/images/wireframes/wireframe-showcase.png"
            alt="Wireframe showcase for Klyra"
            width={1400}
            height={1392}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 92vw, 1100px"
            className="h-auto w-full"
          />
        </motion.figure>
      </div>
    </motion.section>
  );
}
