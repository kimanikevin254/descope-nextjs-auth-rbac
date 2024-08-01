import { prismaClient } from "@/lib/prisma";

export async function PUT(request){
    try {
        const data = await request.json();

        // Make sure the user has the admin role
        const userRoles = descopeSdk.getJwtRoles(data.sessionToken);

        if (!userRoles?.includes("admin")) {
            throw new Error("User is not an admin");
        }

        const postExists = await prismaClient.post.findUnique({
            where: { id: Number(data.postId) }
        })

        if(!postExists) throw new Error('Post does not exists')

        const updatedPost = await prismaClient.post.update({
            where: { id: postExists.id },
            data: { published: !postExists.published },
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
            data: updatedPost
        })
    } catch (error) {
        console.log(error);
        return Response.json({
            error: true,
            data: null
        })
    }
}