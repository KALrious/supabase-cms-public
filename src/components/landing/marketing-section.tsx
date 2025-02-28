"use client";
import { Container } from "@/atoms/container";
import { Heading, Lead } from "@/atoms/text";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsData = [
  {
    id: 1,
    name: "Nextjs 14",
    description:
      "A framework for React that enables server-side rendering and effortless deployment.",
    image: "https://nextjs.org/favicon.ico",
    url: "https://nextjs.org/",
  },
  {
    id: 2,
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that enhances code maintainability and scalability.",
    image: "https://utfs.io/f/5b51351d-218b-4931-a296-0a9275030aaf-8myeez.png",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for building custom designs with ease.",
    image: "https://utfs.io/f/666774c0-dc3a-4d5a-84b7-cc96e682db61-bhgw4o.png",
    url: "https://tailwindui.com/",
  },
  {
    id: 4,
    name: "Shadcn UI",
    description: "Beautifully designed components by Shadcn.",
    image: "https://utfs.io/f/bc4c7cdb-dc42-452c-8744-0ad2c3232e7f-exyul9.png",
    imageDark:
      "https://utfs.io/f/f9ae4f1b-76a1-4505-afc0-dfcbea05012d-62drog.png",
    url: "https://ui.shadcn.com",
  },
  {
    id: 5,
    name: "Supabase (PostgreSQL)",
    description:
      "PostgreSQL-based open-source database with Supabase for building scalable applications.",
    image: "https://utfs.io/f/c62a5d13-91e4-476f-9d36-786d9995c97f-rqpuxo.png",
    url: "https://supabase.com/",
  },
  {
    id: 6,
    name: "Prisma ORM",
    description:
      "Modern database toolkit for TypeScript and Node.js, simplifying database interactions.",
    image: "https://utfs.io/f/c3933696-cd5c-4de7-a24e-1822df8c4215-g7gclc.png",
    url: "https://prisma.io/",
  },
];

const MarketingSection = () => {
  return (
    <div className="mx-2 mt-2 rounded-3xl bg-gray-900 py-32">
      <Container>
        <Heading dark className="mb-4">
          The Ultimate Tech Stack for a Next-Gen CMS
        </Heading>
        <Lead dark>
          Your customers deserve a product built with the best technologies in
          our Nextjs Starter Kit
        </Lead>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ProjectsData.map((project) => {
            return (
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.7,
                }}
                key={project.id}
                className="mt-5 text-left border p-6 rounded-md dark:bg-black"
              >
                <Link
                  href={project?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      project?.imageDark ? project?.imageDark : project.image
                    }
                    width={40}
                    height={30}
                    className="mb-3 rounded "
                    alt={project.name}
                  />
                  <div className="mb-1 text-sm font-medium text-white">
                    {project.name}
                  </div>
                  <div className="max-w-[250px] text-sm font-normal text-gray-400">
                    {project.description}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default MarketingSection;
