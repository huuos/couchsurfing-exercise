import Post from "@/components/Post";
import User from "@/components/User";

//Using generateStaticParams to demonstrate static generated routes
export async function generateStaticParams() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`).then((res) => res.json())
 
  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }))
}

const getPost = async (id: number): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

const getUser = async (id: number): Promise<User> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
}

export default async function PostDetails({params: { id }}: {params: { id: number }}) {
  const post = await getPost(id);
  const user = await getUser(post.userId);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-2">     
            <div className="p-5">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
              <p className="mb-2">Posted by: <b>{user.username}</b></p>
              <p>{post.body}</p>
            </div>
        </div>
    </div>
  );
}
