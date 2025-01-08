"use client"

import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import ContentEditor from '../components/ContentEditor'

export default function Admin() {
    const [activeSection, setActiveSection] = useState('dashboard')
    const [portfolioData, setPortfolioData] = useState(initialData)

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-1">
                <div className="p-8">
                    <ContentEditor
                        section={activeSection}
                        data={portfolioData}
                        onUpdate={setPortfolioData}
                    />
                </div>
            </main>
        </div>
    )
}

const initialData = {
    workItems: [
        {
            title: "End to End Food delivery app",
            img: "/foodelivery.png",
            description: 'Full-stack Food order and live order tracking, with Admin Dashboard.',
            github: 'https://github.com/nagesh-merva/',
            demo: 'https://example.com'
        },
        {
            title: "SEO tool using Llama 3.2",
            img: "/scribz.png",
            description: 'A SEO tool powered by Llama 3.2, which generates blogs, rank your website seo, and help you optimize & organise your seo.',
            github: 'https://github.com/nagesh-merva/',
            demo: 'https://example.com'
        },
        {
            title: "Notification Marketing Campaign Analysis of Zomato",
            img: "/marketingzomato.webp",
            description: 'Interactive dashboard for visualizing complex Marketing Campaigns and Anaylsing data',
            github: 'https://github.com/nagesh-merva/',
            demo: 'https://example.com'
        }
    ],
    events: [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
            title: "Tech Conference 2023"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
            title: "Hackathon Winners"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop",
            title: "College Tech Fest"
        }
    ],
    projects: [
        {
            title: 'Marketing Analysis Dashboard',
            description: 'Interactive dashboard for visualizing complex Marketing Campaigns and Anaylsing data',
            tags: ['Python', 'Excel', 'Kaggle', 'Data Analysis'],
            github: 'https://github.com',
            demo: 'https://example.com'
        },
        {
            title: "SEO tool using Llama 3.2",
            description: 'A SEO tool powered by Llama 3.2, which generates blogs, rank your website seo, and help you optimize & organise your seo.',
            tags: ['TailwindcCss', 'ReactJS', 'MongoDB', 'GENAI'],
            github: 'https://github.com/nagesh-merva/scribz',
            demo: 'https://example.com'
        }
    ],
    experiences: [
        {
            title: 'Frontend Developer intern',
            company: 'ICS Engineers',
            period: 'Dec 2025 - Jan 2025',
            description: 'Built an Portfolio website for the company with Admin dashboard, Optimized frotend and developed clean-componentized React code.',
            skills: ['React', 'Python-Flask-SocketIo', 'MongoDB', 'Tailwindcss']
        },
        {
            title: 'Full Stack Developer',
            company: 'ClickBatemedia',
            period: 'July 2024 - Nov 2024',
            description: 'Built and maintained web application - Food order and Delivery app for the Agency Client which helped them increase revenue by 23% then Zomato.',
            skills: ['React', 'Python-Flask-SocketIo', 'MongoDB', 'Tailwindcss']
        }
    ],
    skills: {
        'Data Science': [
            { name: 'Python', level: 90 },
            { name: 'Data Visualisation', level: 85 },
            { name: 'Data Analysis', level: 88 },
            { name: 'SQL', level: 85 }
        ],
        'Web Development': [
            { name: 'React', level: 92 },
            { name: 'Flask', level: 88 },
            { name: 'TypeScript', level: 85 },
            { name: 'MongoDB', level: 82 }
        ],
        'Tools & Technologies': [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 35 },
            { name: 'Panda', level: 45 },
            { name: 'Scikit-learn', level: 55 }
        ]
    },
    testimonials: [
        {
            name: "Sarah Chen",
            role: "Senior Data Scientist at TechCorp",
            text: "One of the most dedicated and innovative developers I've worked with. Their ability to solve complex data problems is remarkable.",
            company: "TechCorp",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
        },
        {
            name: "Michael Rodriguez",
            role: "Engineering Manager",
            text: "Exceptional problem-solving skills and a great team player. Their contributions to our projects have been invaluable.",
            company: "Web Solutions Inc",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        }
    ],
    communities: [
        {
            role: "Web Dev Lead",
            organization: "Google Developer Student Club",
            period: "2024 - Present",
            achievements: [
                "Led a team of 30+ student developers",
                "Organized 10+ technical workshops",
                "Mentored 50+ students in web development"
            ],
            link: "https://developers.google.com/community/gdsc"
        },
        {
            role: "Technical Head",
            organization: "ECELL-GEC",
            period: "2024 - Present",
            achievements: [
                "Conducted workshops on Tech Startups",
                "Organized inter-college Entrepreneurship Event",
                "Created Network for 200+ members & Alumnis"
            ],
            link: "https://venturaecellgec.vercel.app/"
        }
    ],
    certifications: [
        {
            title: "Automation using Python ",
            issuer: "Coursera",
            date: "2023",
            icon: "Award"
        },
        {
            title: "Marketing Science Professional Certification",
            issuer: "Google",
            date: "2024",
            icon: "Award"
        }
    ],
    achievements: [
        {
            title: "Top 100 - Solutions Hackathon 2024",
            description: "Built an navigation assistance application for visually impaired people.",
            icon: "Trophy"
        },
        {
            title: "Tandav XIII Winners",
            description: "Inter department Cultural Festival 2023",
            icon: "Trophy"
        }
    ],
    volunteering: [
        {
            title: "Vibrant Goa Business Summit 2024",
            description: "Volunteered in organising a students startup promotion event 'VENUTRA' at the Global event hosting 200+ international Delegates and 5000+ Indian Delegates.",
            icon: "Medal"
        },
        {
            title: "Global First Robotics Festival",
            description: "Volunteered in Technical assistance for the global competetion held at Shyama Prasad Stadium.",
            icon: "Medal"
        }
    ],
    blogs: [
        {
            title: "The Next Wave of Business Analytics: What Industry Leaders Know",
            excerpt: "Exploring how data science is revolutionizing business decision-making and analytics...",
            date: "2024-03-15",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
            category: "Data Science"
        },
        {
            title: "Build Your First Scalable Web Application: From Zero to Production",
            excerpt: "Best practices and architecture patterns for creating scalable web applications...",
            date: "2024-03-10",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
            category: "Web Development"
        }
    ]
};