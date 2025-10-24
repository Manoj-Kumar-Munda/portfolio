"use client";
import Image from "next/image";
import Container from "./container";
import Subheading from "./subheading";
import Link from "next/link";
import { ExperienceList, SocialPlatformIcons } from "@/constants";
import SkillButton from "./skill-button";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <Container>
      <Subheading>My professional journey in tech so far..</Subheading>

      <div className="p-4">
        <motion.ul className="space-y-4">
          {ExperienceList.map((experience, idx) => (
            <motion.li
              key={idx}
              initial={{ y: 20, filter: "blur(3px)", opacity: 0 }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: idx * 0.08,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
            >
              {/* header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={experience.company.logo}
                    width={48}
                    height={48}
                    alt={experience.company.name}
                    className="rounded-md"
                  />

                  <div className="flex flex-col">
                    <div className="flex items-end gap-2">
                      <h3 className="text-primary text-sm font-bold">
                        {experience.company.name}
                      </h3>

                      {/* socials */}
                      {experience.company.socials.length > 0 &&
                        experience.company.socials.map((social, idx) => (
                          <Link key={idx} href={social.url}>
                            {SocialPlatformIcons(
                              social.platform,
                              "h-4 w-4 text-secondary hover:text-primary transition-colors duration-300",
                            )}
                          </Link>
                        ))}
                    </div>
                    <p className="text-secondary text-xs font-medium">
                      {experience.role}
                    </p>
                  </div>
                </div>

                <div className="text-secondary flex flex-col text-xs font-medium">
                  <p>{experience.location}</p>
                  <p className="">{experience.duration}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4 px-4">
                <div className="space-y-1">
                  <h3 className="text-xs font-bold">Technologies & Tools</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <SkillButton key={idx} skill={tech} idx={idx} />
                    ))}
                  </div>
                </div>

                {/* responsibilities */}
                <ul className="list-disc space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>
                      <p className="text-secondary text-xs">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Container>
  );
};

export default Experience;
