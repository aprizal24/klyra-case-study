'use client';

import { motion } from 'framer-motion';

export default function Thanks() {
  return (
    <section className="relative w-full bg-[#F0F0FF] px-6 pt-20 sm:px-10 sm:pt-24 pb-10 sm:pb-10">
      {/* Subtle glow behind text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C4D8FF]/20 blur-[180px] pointer-events-none -z-10" />

      <div className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 px-6 text-center md:px-12">
        {/* Large "Thanks" title */}
        <motion.h1
          className="font-black tracking-tight text-[clamp(5rem,15vw,11rem)] text-black"
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Thanks
        </motion.h1>

        {/* Credit text */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
        >
          <p className="uppercase tracking-[0.35em] text-xs font-medium text-gray-500">
            Designed by
          </p>
          <p className="text-2xl font-semibold text-black">
            Aprizal Triansyah
          </p>
        </motion.div>

        {/* Email */}
        <motion.p
          className="text-base text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          aprizaltriansyah24@gmail.com
        </motion.p>
      </div>
    </section>
  );
}
