import Title from "@/atoms/title";
import Typography from "@/atoms/typography";
import ButtonLink from "@atoms/button-link";
import { Container } from "@atoms/container";
import { Gradient } from "@molecules/gradient-background";
import { Navbar } from "@molecules/navbar";

const HeroSection = () => {
  return (
    <section className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-3xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <Title htmlTag="h1">Supabase CMS</Title>
          <Typography className="mt-8 max-w-lg" htmlTag="p">
            The open-source CMS powered by Supabase. Build and manage your
            content with ease, security, and scalability.
          </Typography>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <ButtonLink href="/signup" size="lg">
              Get started
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HeroSection;
