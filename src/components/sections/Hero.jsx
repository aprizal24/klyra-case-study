"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function BackgroundText() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
    >
      <p className="absolute left-1/2 top-1/2 -translate-x-[132%] -translate-y-[128%] text-[clamp(32px,24vw,164px)] font-extrabold leading-[0.86] tracking-tight text-[#7b6dff]/60 blur-[5px] sm:-translate-x-[94%] sm:-translate-y-[264%]">
        Manage
      </p>
      <p className="absolute left-1/2 top-1/2 -translate-x-[132%] -translate-y-[24%] text-[clamp(32px,24vw,164px)] font-extrabold leading-[0.86] tracking-tight text-[#7b6dff]/60 blur-[5px] sm:-translate-x-[164%] sm:-translate-y-[84%]">
        Your
      </p>
      <p className="absolute left-1/2 top-1/2 translate-x-[36%] -translate-y-[24%] text-[clamp(32px,24vw,154px)] font-extrabold leading-[0.86] tracking-tight text-[#7b6dff]/60 blur-[5px] sm:translate-x-[25%] sm:-translate-y-[64%]">
        Money
      </p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <motion.section
      className="relative isolate flex min-h-[100asvh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] to-[#9793FF]/60  px-10 py-20 sm:px-0"
    >
      <BackgroundText />

      <motion.div
        className="relative z-10 w-[min(560px,88vw)] drop-shadow-[0_30px_70px_rgba(44,33,98,0.22)]"
        initial={{ opacity: 0, y: 10, rotate: -7 }}
        animate={{ opacity: 1, y: 0, rotate: -7 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 7.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="will-change-transform"
        >
          <Image
            src="/images/hero/phone-mockup.png"
            alt="Klyra hero artwork"
            width={705}
            height={808}
            priority
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 560px"
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
