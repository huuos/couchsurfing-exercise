import Link from "next/link";
import User from "./User";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  post: Post
  user: User
}

const Post: React.FC<PostProps> = ({post, user}) => {
  return (
    <div className="min-w-full">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-10">     
            <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                <p className="mb-2">Posted by: <b>{user.username}</b></p>
                <Link className="text-blue-500" href={`/posts/${post.id}`}>View Blog</Link>
            </div>
        </div>
    </div>
  )
}


export default Post;