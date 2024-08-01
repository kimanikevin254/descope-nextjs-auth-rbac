import { prismaClient } from "@/lib/prisma";

export async function POST(request) {
    try {
        const data = await request.json();

        // Save the data to DB
        const user = await prismaClient.user.create({
            data: {
                descopeUserId: data.descopeUserId,
                email: data.email,
                name: data.name
            }
        });

        return Response.json({
            error: null,
            data: user
        })
    } catch (error) {
        console.error(error);
        return Response.json({
            error: true,
            data: null
        })
    }
}
