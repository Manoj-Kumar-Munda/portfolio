import Image from "next/image";
import Container from "./container";
import Subheading from "./subheading";
import Link from "next/link";
import { ExperienceList, SocialPlatformIcons } from "@/constants";

const Experience = () => {
  return (
    <Container>
      <Subheading>My professional journey in tech so far..</Subheading>

      <div className="p-4">
        <ul className="space-y-4">
          {ExperienceList.map((experience, idx) => (
            <li key={idx}>
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

              <div className="mt-4 pr-4 pl-8">
                <ul className="list-disc space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>
                      <p className="text-secondary text-xs">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
