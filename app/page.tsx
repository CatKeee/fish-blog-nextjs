import { BlogPosts } from "app/components/posts";

const welcome = {
  title: "Hello 👋",
  description: "Welcome to my blog.",
  heroImg: "/images/hero.jpg",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-normal">
        {welcome.title}
      </h1>
      <p className="mb-4">{welcome.description}</p>

      <p>
        <img
          className="rounded-xl"
          src={welcome.heroImg}
          alt={welcome.heroImg}
        />
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
