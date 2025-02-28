import { Metadata } from "next";
import { getPost } from "./action";
import { GradientBackground } from "@molecules/gradient-background";
import { Container } from "@atoms/container";
import { Navbar } from "@molecules/navbar";
import Footer from "@organisms/footer";
import { Heading, Subheading } from "@atoms/text";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Post from "@molecules/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPost(slug);

  return post
    ? { title: post.metadata?.metaTitle, description: post.metadata?.metaDesc }
    : {};
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = (await getPost(slug)) || notFound();
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {format(post.createdAt, "dd, MMMM, yyyy")}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {post.title}
        </Heading>
        <Post post={post} />
      </Container>
      <Footer />
    </main>
  );
};
export default BlogPostPage;
