import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <section className="py-32 mx-auto">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 mx-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              About Me
              <ArrowDown className="ml-2 size-4" />
            </Badge>
            <motion.h1
              className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
              initial={{ x: -400, scale: 0.5 }}
              animate={{ x: 0, transition: { duration: 1 }, scale: 1 }}
            >
              Johnny Wong
            </motion.h1>
            <motion.div
              className="my-4 max-w-xl text-muted-foreground flex flex-col gap-y-3"
              initial={{ x: -600, scale: 0.5 }}
              animate={{ x: 0, transition: { duration: 2 }, scale: 1 }}
            >
              <p>
                I am a developer passionate about crafting robust tools that
                contribute to the public's well-being. My favorite kinds of work
                provide both utility and ease of use with a focus on
                scalability.
              </p>
              <p>
                Currently, I am a Full Stack Software Engineer at{" "}
                <a
                  href="https://xonar.com/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  Xonar
                </a>
                , working on several products across the company to improve
                monitoring, analytics, and automation. I lead the development of
                two customer facing web applications which differentiate the
                firm's platform from its competitors.
              </p>
              <p>
                In the past, I have had the pleasure of working at previous{" "}
                <a
                  href="https://teamcode-x.com/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  startups
                </a>{" "}
                and{" "}
                <a
                  href="https://www.ubs.com/us/en.html"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  large corporations
                </a>
                , where I have gained a better understanding of the software
                development life cycle, cloud technologies, and the utility of
                automation.
              </p>
              <p>
                In my free time, I enjoy going on runs, going to the beach,
                playing ultimate frisbee, exploring new places with my camera,
                and cooking new recipes.
              </p>
            </motion.div>
          </div>
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
