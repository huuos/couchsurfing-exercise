
import User from "@/components/User";

const getUser = async (): Promise<User> => {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  return userResponse.json();
}

export default async function Profile() {
  const user = await getUser();

  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <div className="min-w-full">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-10">     
                <User user={user}/>
            </div>
        </div>
      </div>
    </div>
  );
}



