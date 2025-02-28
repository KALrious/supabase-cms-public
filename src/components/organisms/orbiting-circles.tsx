import OrbitingCircles from "@molecules/orbiting-circles";
import Image from "next/image";

export function OrbitingCirclesComponent() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        The CMS
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.typescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.prisma />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Icons.supabase />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  typescript: () => (
    <Image
      src="https://utfs.io/f/5b51351d-218b-4931-a296-0a9275030aaf-8myeez.png"
      alt="Ts icon"
      width={100}
      height={100}
    />
  ),
  prisma: () => (
    <Image
      src="https://utfs.io/f/c3933696-cd5c-4de7-a24e-1822df8c4215-g7gclc.png"
      alt="Prisma icon"
      width={100}
      height={100}
      // className="bg-black p-2 rounded"
    />
  ),
  supabase: () => (
    <Image
      src="https://utfs.io/f/c62a5d13-91e4-476f-9d36-786d9995c97f-rqpuxo.png"
      alt="Supabase icon"
      width={100}
      height={100}
      // className="bg-black p-2 rounded"
    />
  ),
  nextjs: () => (
    <Image
      src="https://utfs.io/f/a8df6965-e6df-417a-ab0b-b3ad33d701d7-hcfblw.png"
      alt="Nextjs icon"
      width={100}
      height={100}
      className="bg-white p-1 rounded"
    />
  ),
};
