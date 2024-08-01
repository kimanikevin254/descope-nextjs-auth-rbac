'use client'

import Tiptap from "@/components/Tiptap"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Page(){
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const savePost = async () => {
        try {
            const { data } = await axios.post('/api/posts/create', {
                title,
                content,
                descopeUserId: user?.userId
            })

            if(data.error) {
                alert('Something went wrong')
            } else {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
            alert('Something went wrong')
        }
    }

    return (
        <div className='space-y-4'>
            <h2 className='text-center font-semibold text-2xl'>Write a Post</h2>
            <div>
                <Label htmlFor="email">Title</Label>
                <Input type="text" id="title" placeholder="Title" className='focus-visible:ring-0' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className=''>
                <Label htmlFor="body">Body</Label>
                <Tiptap setContent={setContent} />
            </div>

            <div className='flex items-center justify-end'>
                <Button variant="default" className='px-6 disabled:bg-gray-400 disabled:text-black' disabled={title === '' || content === ''} onClick={() => savePost()}>Submit for Approval</Button>
            </div>
        </div>
    )
}