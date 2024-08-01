'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [post, setPost] = useState(null)

    const editor = useEditor({
        extensions: [StarterKit],
        content: '',

        editorProps: {
            attributes: {
                class: cn(
                    'prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc',
                    'min-h-96 p-3 rounded border border-input hover:outline-none'
                ),
            },
            editable: () => false
        },
    })

    const fetchPostDetails = async () => {
        try {
            const { data } = await axios.get(`/api/posts/${params.postId}`)
            setPost(data.data)
        } catch (error) {
            alert('Something went wrong')
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPostDetails()
    }, [])

    useEffect(() => {
        if (post && editor) {
            editor.commands.setContent(post.content)
        }
    }, [post, editor])

    const togglePublishedStatus = async () => {
        try {
            const { data } = await axios.put('/api/posts/toggleStatus', { postId: params.postId })

            setPost(data.data)
        } catch (error) {
            alert('Something went wrong')     
            console.log(error);   
        }
    }

    return (
        post && (
            <div>
                <h2 className="font-semibold text-xl text-center">Review Post</h2>

                <div className="mt-8">
                    <p>Created by: {post.author.name}</p>
                    <p>Created on: {new Date(post.createdAt).toLocaleString()}</p>
                </div>

                <p className="mt-4">Title: {post.title}</p>

                <div className="mt-4">
                    <h3>Content:</h3>
                    <EditorContent editor={editor} />
                </div>

                <Button variant="default" className='px-6 mt-6' onClick={() => togglePublishedStatus()}>{ post.published ? 'Unpublish' : 'Publish' }</Button>
            </div>
        )
    )
}
