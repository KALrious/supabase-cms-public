import {
  BanknotesIcon,
  BoltIcon,
  BriefcaseIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";
import { OrbitingCirclesComponent } from "../organisms/orbiting-circles";
import SectionContainer from "@atoms/section-container";
import { Heading, Lead } from "@atoms/text";

const features = [
  {
    name: "Build faster.",
    description:
      "Get up and running in no time with pre-configured settings and best practices. Say goodbye to setup and focus on what truly matters - building your application.",
    icon: BoltIcon,
  },
  {
    name: "Focus on business logic.",
    description:
      "Concentrate on solving business problems instead of dealing with the repetitive setup.",
    icon: BriefcaseIcon,
  },
  {
    name: "Ready for scale.",
    description:
      "Prepare for growth from day one. With built-in optimizations and scalable architecture, your application will be ready to handle increased traffic and complexity.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Cut Costs",
    description:
      "Save money by using this open-source CMS. No need to pay for expensive CMS solutions. Deploy your own CMS at no costs.",
    icon: BanknotesIcon,
  },
];

export default function InfoSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row">
        <div>
          <Heading className="mb-4">Why use Supabase CMS ?</Heading>
          <Lead>
            Accelerate your development with this powerful Nextjs Supabase CMS
          </Lead>
          <dl className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <OrbitingCirclesComponent />
      </div>
    </SectionContainer>
  );
}
