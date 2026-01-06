"use client";
import { motion, Variants } from "framer-motion";
import ScrollSvg from "../../components/ScrollSvg";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  const children: Variants = {
    hidden: ({ offset, blur }: { offset?: number; blur?: number } = {}) => ({
      opacity: 0,
      y: offset || 20,
      filter: `blur(${blur ?? 0}px)`,
    }),
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-12 md:px-20 pt-12 md:pt-20 pb-[156px] md:pb-[156px] overflow-hidden">
      {/* SVGs */}
      <ScrollSvg
        path="M378.868 183C403.619 75.9264 332.349 3 266.62 3C200.892 3 207.923 101.204 128.621 81C50.1211 61 -11.379 91.5 5.9372 183"
        viewBox="0 0 387 184"
        color="var(--accent)"
        strokeWidth={4}
        range={[0.2, 0.8]}
        className="absolute md:fixed z-20 bottom-0 right-0 pointer-events-none w-full max-w-[600px] -mr-24 md:-mr-12 -mb-24 md:-mb-28"
      />

      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 md:gap-20 items-start max-w-4xl w-full">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1.0],
          }}
          className="flex justify-center md:justify-end md:pt-8"
        >
          <div className="w-full aspect-[4/5] bg-[var(--secondary)]/10 overflow-hidden">
            <img
              src="/api/placeholder/600/750"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 md:gap-4"
        >
          <motion.section className="flex flex-col gap-4">
            <motion.div variants={children} className="flex flex-col gap-2">
              <span
                style={{ fontFamily: "var(--heading-font)" }}
                className="text-[0.875rem] font-medium block"
              >
                Hi! I'm
              </span>

              <span
                style={{ fontFamily: "var(--heading-font)" }}
                className="text-[var(--accent)] text-[1.375rem] font-medium block"
              >
                Natalie Wei.
              </span>
            </motion.div>

            <motion.section
              custom={{ offset: 12, blur: 2 }}
              variants={children}
              className="flex flex-col gap-4"
            >
              <span className="text-[0.875rem] block">
                I’m a developer based in the SF Bay Area. I currently study
                Computer Science at UC Berkeley with a concentration in
                Computational Media.
              </span>

              <span className="text-[0.875rem] block">
                I'm broadly passionate about democratizing technology through
                meaningful product work. Drawing on my interdisciplinary
                background, I'm also fascinated by the potential of code as a
                medium for creative expression.
              </span>

              <span className="text-[0.875rem] block">
                On the side, I enjoy dabbling in digital art, reading
                speculative fiction, and try-harding the NYT mini crossword (my
                personal record: 10 seconds).
              </span>

              <span className="text-[0.875rem] block">
                Feel free to email me at{" "}
                <a
                  href="mailto:nataliewei@berkeley.edu"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  nataliewei at berkeley dot edu
                </a>{" "}
                with any inquiries.
              </span>
            </motion.section>
          </motion.section>

          <motion.section variants={children} className="flex flex-col gap-4">
            <span
              style={{ fontFamily: "var(--heading-font)" }}
              className="text-[0.875rem] font-medium block"
            >
              Previously, I:
            </span>
          </motion.section>

          <motion.section
            custom={{ offset: 12, blur: 2 }}
            variants={children}
            className="flex flex-col gap-4"
          >
            <span className="text-[0.875rem] list-disc ml-4 space-y-2 block">
              <li>
                built back-end infrastructure supporting new features for{" "}
                <a
                  href="https://stripe.com/"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  Stripe
                </a>{" "}
                users
              </li>
              <li>
                taught upper division{" "}
                <a
                  href="https://cs184.eecs.berkeley.edu/su25/"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  Computer Graphics
                </a>{" "}
                and{" "}
                <a
                  href="https://cal-cs180.github.io/fa25/"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  Computer Vision
                </a>
              </li>
              <li>
                developed data and technology-driven tools for{" "}
                <a
                  href="https://www.bluebonnetdata.org/"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  progressive campaigns
                </a>
              </li>
              <li>
                made it easier for students to{" "}
                <a
                  href="https://codeology.studentorg.berkeley.edu/"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  explore the software space
                </a>
              </li>
              <li>
                designed for the{" "}
                <a
                  href="https://www.calhacks.io/"
                  target="_blank"
                  className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
                >
                  world’s largest collegiate hackathon
                </a>
              </li>
            </span>
            <span className="text-[0.875rem] block">
              Other places where you can find me:{" "}
              <a
                href="https://www.linkedin.com/in/natalie-wei/"
                target="_blank"
                className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://github.com/weinatalie"
                target="_blank"
                className="text-[var(--alt-accent)] animate-underline underline underline-offset-4 decoration-[1.5px] hover:no-underline"
              >
                Github
              </a>
              .
            </span>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
