import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { MailPlus } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="relative overflow-hidden py-24 lg:py-32 mx-auto">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-blue-200 to-blue-300 blur-3xl w-[35rem] h-[44rem] rotate-[-30deg] transform translate-x-[5rem]" />
          <div className="bg-gradient-to-tr blur-3xl w-[100rem] h-[55rem] rounded-full origin-top-left -rotate-12 -translate-x-[5rem] from-blue-200 via-blue-300 to-blue-400" />
        </div>

        <motion.div
          className="relative z-10"
          initial={{ y: -100, scale: 0.5 }}
          animate={{ y: 0, transition: { duration: 1.5 }, scale: 1 }}
        >
          <div className="container py-10 lg:py-16 mx-auto">
            <div className="max-w-2xl text-center mx-auto">
              <p className="text-lg text-slate-700">
                Full Stack Software Engineer
              </p>
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Johnny Wong
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-slate-600 text-pretty">
                  I build user friendly end-to-end experiences with a focus on
                  backend development.
                </p>
              </div>
              {/* Button Group */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button asChild size={"lg"}>
                  <Link href="/about">Learn more</Link>
                </Button>
                <Button size={"lg"}>Get in touch</Button>
              </div>
              {/* Social Media */}
              <div className="mt-8 gap-6 flex justify-center">
                <a href="https://github.com/johnnywong30" target="_blank">
                  <SiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/johnnywong30"
                  target="_blank"
                >
                  <SiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
