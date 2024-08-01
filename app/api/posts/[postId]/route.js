import { prismaClient } from "@/lib/prisma";

export async function GET(request, { params }) {
    try {
        // Retrieve post
        const posts = await prismaClient.post.findUnique({
            where: { id: Number(params.postId) },
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                author: {
                    select: {
                        name: true
                    }
                },
                published: true
            }
        })

        return Response.json({
            error: null,
            data: posts
        })
    } catch (error) {
        console.error(error);
        return Response.json({
            error: true,
            data: null
        })
    }
}