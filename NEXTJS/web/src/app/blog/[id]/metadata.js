import clientPromise from "@/helpers/lib/db"

export async function generateMetadata({ params }) {
    const { id } = params
    const client = await clientPromise
    const db = client.db("Portfolio")
    const blog = await db.collection('blogs').findOne({ id: id })

    if (!blog) {
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.'
        }
    }

    return {
        title: blog.title,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                }
            ],
            type: 'article',
            publishedTime: blog.date,
        },
    }
}