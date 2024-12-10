import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    const { name, value, subject, message } = await request.json();

    try {
        const data = await prisma.contact.create({
            data: { name, value, subject, message },
        });
        return new Response(JSON.stringify(data), { status: 201 });
    } catch (error) {
        console.error("Error during POST request:", error);
        return new Response(
            JSON.stringify({ error: 'Error adding data', details: error.message }),
            { status: 500 }
        );
    }
}