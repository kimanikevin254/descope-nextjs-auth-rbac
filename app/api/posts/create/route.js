import { prismaClient } from "@/lib/prisma";

export async function POST(request) {
    try {
        const data = await request.json();

        // Retrieve user
        const user = await prismaClient.user.findUnique({
            where: { descopeUserId: data.descopeUserId }
        })

        // Save the data to DB
        const newPost = await prismaClient.post.create({
            data: {
                title: data.title,
                content: data.content,
                authorId: user.id
            }
        });

        return Response.json({
            error: null,
            data: newPost
        })
    } catch (error) {
        console.error(error);
        return Response.json({
            error: true,
            data: null
        })
    }
}