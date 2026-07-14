"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const UI_CATEGORIES = [
  {
    title: "Authentication",
    description: "Secure and intuitive account registration and sign-in to help users access and manage their personal finances safely.",
    image: "/images/ui/authentication.png",
  },
  {
    title: "Dashboard",
    description: "Get a clear overview of balances, recent transactions, and financial activity from a centralized home dashboard.",
    image: "/images/ui/dashboard.png",
  },
  {
    title: "Transactions",
    description: "Record income and expenses effortlessly while keeping every transaction organized and easy to manage.",
    image: "/images/ui/transactions.png",
  },
  {
    title: "Budget Management",
    description: "Set spending limits, organize budgets by category, and monitor expenses to stay on track with financial goals.",
    image: "/images/ui/budget-management.png",
  },
  {
    title: "Financial Insights",
    description: "Visualize spending patterns and financial trends through clear analytics that support smarter decision-making.",
    image: "/images/ui/financial-insights.png",
  },
  {
    title: "Savings Goals",
    description: "Create savings goals, track progress, and build better financial habits with dedicated saving management.",
    image: "/images/ui/savings-goals.png",
  },
  {
    title: "Profile & Settings",
    description: "Personalize account preferences, manage security settings, and customize the overall app experience.",
    image: "/images/ui/profile-settings.png",
  },
];

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
        User Interface
      </span>
    </motion.div>
  );
}

function Connector({ position }) {
  return (
    <div className="flex items-center gap-0">
      {position === "right" && (
        <span className="h-3 w-3 rounded-full bg-[#7b6dff]" />
      )}
      <div className="h-px w-20 bg-[#7b6dff]/40" />
      {position === "left" && (
        <span className="h-3 w-3 rounded-full bg-[#7b6dff]" />
      )}
    </div>
  );
}

export default function UserInterface() {
  return (
    <section
      aria-label="User interface"
      className="relative w-full bg-[#F0F0FF] px-6 pt-20 sm:px-10 sm:pt-24 pb-10 sm:pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionLabel />

        <div className="mt-10 sm:mt-12">
          <motion.h2
            className="text-[32px] font-bold tracking-tight text-zinc-900 sm:text-[40px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            User Interface
          </motion.h2>
          <motion.p
            className="mt-4 text-[15px] leading-relaxed text-zinc-600 sm:text-[16px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          >
            Explore the main user experience across authentication, dashboard, transactions, budgeting, insights, savings, and profile management.
          </motion.p>
        </div>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
          {UI_CATEGORIES.map((category, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={category.title}
                className={`grid gap-8 items-center ${
                  isLeft
                    ? "grid-cols-1 sm:grid-cols-[1fr_auto_1fr]"
                    : "grid-cols-1 sm:grid-cols-[1fr_auto_1fr]"
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                {/* Left side */}
                {isLeft ? (
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[280px]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={560}
                        height={1120}
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 sm:items-end">
                    <h3 className="text-[20px] font-bold tracking-tight text-zinc-900 sm:text-[22px]">
                      {category.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-zinc-600 sm:text-[15px] sm:text-right">
                      {category.description}
                    </p>
                  </div>
                )}

                {/* Connector */}
                <div className="hidden sm:flex justify-center">
                  <Connector position={isLeft ? "left" : "right"} />
                </div>

                {/* Right side */}
                {isLeft ? (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[20px] font-bold tracking-tight text-zinc-900 sm:text-[22px]">
                      {category.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-zinc-600 sm:text-[15px]">
                      {category.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[280px]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={560}
                        height={1120}
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Mobile layout */}
                <div className="flex flex-col gap-6 sm:hidden">
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[280px]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={560}
                        height={1120}
                        sizes="280px"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[20px] font-bold tracking-tight text-zinc-900">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-center text-[14px] leading-relaxed text-zinc-600 sm:text-[15px]">
            Additional screens were designed to support a complete and seamless personal finance experience, covering every stage of the user's financial journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
