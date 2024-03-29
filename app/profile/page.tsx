
import Post from "@/components/Post";
import User from "@/components/User";

const getUser = async (): Promise<User> => {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  return userResponse.json();
}

const getUserPosts = async (): Promise<Post[]> => {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`);
  return userResponse.json();
}

export default async function Profile() {
  const user = await getUser();
  const userPosts = await getUserPosts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-4">     
          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">My Profile</h5>
            <User user={user} />
          </div>
      </div>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-4">     
          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">My Posts</h5>
            {userPosts.map((post: Post) => {
              return (
                <Post key={post.id} post={post} user={user}/>
              )
            })}
          </div>
      </div>
  </div>
  );
}



