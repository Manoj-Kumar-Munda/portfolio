import Image from "next/image";
import Container from "./container";
import Subheading from "./subheading";
import FutyLogo from "@/app/assets/futy.jpeg";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

const Experience = () => {
  return (
    <Container>
      <Subheading>My professional journey in tech so far..</Subheading>

      <div className="p-4">
        <ul>
          <li>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={FutyLogo}
                  width={48}
                  height={48}
                  alt="futy"
                  className="rounded-md"
                />

                <div className="flex flex-col">
                  <div className="flex items-end gap-2">
                    <h3 className="text-primary text-sm font-bold">Futy</h3>

                    {/* socials */}
                    <Link href="https://www.linkedin.com/company/futyyyuk/about/">
                      <IconBrandLinkedin className="size-4" />
                    </Link>
                  </div>
                  <p className="text-secondary text-xs font-medium">
                    Software Engineer-Frontend
                  </p>
                </div>
              </div>

              <div className="text-secondary flex flex-col text-xs font-medium">
                <p>UK (Remote)</p>
                <p className="">July 2024 - July 2025</p>
              </div>
            </div>

            <div className="mt-4 pr-4 pl-8">
              <ul className="list-disc space-y-2">
                <li>
                  <p className="text-secondary text-xs">
                    Collaborated with cross-functional teams including designers
                    and backend developers to implement user-friendly features
                    and ensure seamless integration with APIs.
                  </p>
                </li>
                <li>
                  <p className="text-secondary text-xs">
                    Engineered a scalable Telegram mini-game platform supporting
                    fantasy and quiz game modes, leveraging React, TypeScript,
                    React Query and Tailwind CSS with ShadCN UI for consistent
                    design system.
                  </p>
                </li>
                <li>
                  <p className="text-secondary text-xs">
                    Implemented modular CMS panels for diverse game types using
                    Formik and Yup, driving efficient admin workflows for
                    real-time quiz management, match configuration, and dynamic
                    content editing.
                  </p>
                </li>
                <li>
                  <p className="text-secondary text-xs">
                    Built an interactive analytics dashboard with Recharts and
                    TanStack Table, enabling data-driven insights through
                    visualization of user engagement KPIs.
                  </p>
                </li>

                <li>
                  <p className="text-secondary text-xs">
                    Improved FUTY’s landing page by implementing responsiveness
                    and integrating Framer Motion animations to enhance user
                    experience.
                  </p>
                </li>
                <li>
                  <p className="text-secondary text-xs">
                    Contributed to UI development of the FUTY mobile app using
                    React Native, with a focus on component reusability,
                    performance optimization, and consistent cross-platform
                    interface design
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
