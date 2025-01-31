import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts;
};

const PostsPage = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
        Our Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map((post, idx) => (
          <Link href={`/posts/${post.id}`} key={idx}>
            <div
              className="border border-slate-800 px-6 py-4 rounded-2xl space-y-4 hover:shadow-3xl hover:cursor-pointer"
            >
              <h2 className="text-xl uppercase text-white font-semibold">
                {post.title.substring(0, 30)}
              </h2>
              <p className="text-base text-gray-200">
                {post.body.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
