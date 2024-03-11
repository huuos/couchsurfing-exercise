"use client" //Demonstrating usage of CSR and hooks

import Post from "@/components/Post";
import Tabs from "@/components/Tabs";
import User from "@/components/User";

import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [tab, setSelectedTab] = useState('all');

  const fetchPostsAndUsers = async () => {
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
      ]);

      const posts = await postsResponse.json();
      const users = await usersResponse.json();

      setPosts(posts);
      setUsers(users);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    fetchPostsAndUsers();
  }, []); 

  const friendsList = [
    {
      userId: 1,
      friends: [2, 3],
    },
    {
      userId: 2,
      friends: [1],
    },
    {
      userId: 3,
      friends: [1],
    },
  ];

  const getUser = (userId: number): User => {
    return users.find(user => user.id === userId)!;
  };

  const filteredPosts = tab === 'all' ? posts : posts.filter(post => {
    const isFriend = friendsList.find(friend => friend.userId === 1)?.friends.includes(post.userId);
    return isFriend;
  });

  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center bg-white shadow-md border border-gray-200 rounded-lg p-10">
        <Tabs tab={tab} setSelectedTab={setSelectedTab}/>
        {filteredPosts.map((post: Post) => {
          const user = getUser(post.userId);
          return (
            <Post key={post.id} post={post} user={user}/>
          )
        })}
      </div>
    </div>
  );
}
