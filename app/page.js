'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useUser } from "@descope/nextjs-sdk/client";

export default function Home() {

  const [posts, setPosts] = useState([])
  const { user } = useUser();

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get('/api/posts/retrieve')
      
      if(data.error) {
        alert('Something went wrong')
      } else {
        setPosts(data.data)
      }

    } catch (error) {
      console.log(error);
      alert('Something went wrong')
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-semibold'>Next.js Descope Auth & RBAC</h2>
        {
          user?.roleNames?.includes("editor") && (
              <Link
                  href={"/write"}
                  className="px-4 py-1 border rounded-lg bg-black text-white"
              >
                  Start Writing
              </Link>
          )
        }
      </div>

      <h2 className='mt-8 text-xl font-semibold text-center'>Available Posts</h2>

      <div className='mt-8 flex gap-6 flex-wrap'>
        {
          posts?.length < 1 ?
          <p className='text-center italic mt-12'>No posts available</p> :
          (
            posts.map(post => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <Card className='w-80'>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>Author: {post.author.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                  <p>Created At: {new Date(post.createdAt).toDateString()}</p>
                  <p>Published: {post.published ? 'True' : 'False'}</p>
                  </CardContent>
                </Card>
              </Link>
            ))
          )
        }
      </div>
    </div>
  )
}
