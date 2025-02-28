import { Container } from "@atoms/container";
import { getFeaturedPosts } from "../../app/blog/action";
import CardPost from "@molecules/card-post";

async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts(3);

  if (featuredPosts.length === 0) {
    return;
  }

  return (
    <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <CardPost key={post.slug} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default FeaturedPosts;
