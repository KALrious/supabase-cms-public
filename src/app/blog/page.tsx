import { Navbar } from "@molecules/navbar";
import { Container } from "@atoms/container";
import { GradientBackground } from "@molecules/gradient-background";
import { Heading, Lead, Subheading } from "@atoms/text";
import Footer from "@organisms/footer";
import { Metadata } from "next";
import FeaturedPosts from "@organisms/featured-posts";
import { notFound } from "next/navigation";
import { Categories } from "@organisms/categories";
import { Posts } from "@organisms/posts";
import { Pagination } from "@organisms/pagination";

export const metadata: Metadata = {
  title: "Supabase CMS Blog | Supabase CMS Documentation",
  description:
    "Stay informed of tips and tools on how to create the best CMS at your company with Supabase.",
};

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchP = await searchParams;
  const page =
    "page" in searchP
      ? typeof searchP.page === "string" && parseInt(searchP.page) > 1
        ? parseInt(searchP.page)
        : notFound()
      : 1;

  const category =
    typeof searchP.category === "string" ? searchP.category : undefined;
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar isColor />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          What’s happening at Supabase CMS.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Stay informed with product updates, company news, and insights on how
          to create the best CMS at your company.
        </Lead>
        {page === 1 && !category && <FeaturedPosts />}
        <Container className="mt-16 pb-24">
          <Categories selected={category} />
          <Posts page={page} category={category} />
          <Pagination page={page} category={category} />
        </Container>
      </Container>
      <Footer isColor />
    </main>
  );
};
export default BlogPage;
