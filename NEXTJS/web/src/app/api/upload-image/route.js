import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            )
        }

        if (!file.type.startsWith('image/')) {
            return NextResponse.json(
                { error: 'File must be an image' },
                { status: 400 }
            );
        }

        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'File size must be less than 5MB' },
                { status: 400 }
            )
        }
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2);
        const fileExtension = file.name.split('.').pop();
        const filename = `portfolio-${timestamp}-${randomString}.${fileExtension}`;

        const blob = await put(filename, file, {
            access: 'public',
            metadata: {
                uploadedAt: new Date().toISOString(),
                originalName: file.name,
                size: file.size.toString(),
            }
        });

        return NextResponse.json({
            url: blob.url,
            filename: filename,
            size: file.size
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        );
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }

        if (!file.type.startsWith('image/')) {
            return res.status(400).json({ error: 'File must be an image' });
        }

        if (file.size > 5 * 1024 * 1024) {
            return res.status(400).json({ error: 'File size must be less than 5MB' });
        }

        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2);
        const fileExtension = file.name.split('.').pop();
        const filename = `portfolio-${timestamp}-${randomString}.${fileExtension}`;

        const blob = await put(filename, file, {
            access: 'public',
            metadata: {
                uploadedAt: new Date().toISOString(),
                originalName: file.name,
                size: file.size.toString(),
            }
        });

        res.status(200).json({
            url: blob.url,
            filename: filename,
            size: file.size
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};