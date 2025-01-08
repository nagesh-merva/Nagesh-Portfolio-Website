import React from 'react'
import { Menu, Home, Briefcase, Calendar, Award, Users, Book, Layout, Star, Medal, Trophy } from 'lucide-react'

export default function AdminSidebar({ activeSection, setActiveSection }) {
  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'work', label: 'Latest Work', icon: Briefcase },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'projects', label: 'Projects', icon: Layout },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'volunteering', label: 'Volunteering', icon: Medal },
    { id: 'blogs', label: 'Blogs', icon: Book }
  ]

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Menu className="text-white" size={24} />
        <h1 className="text-white text-xl font-bold">Admin Panel</h1>
      </div>
      <nav>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg mb-1 ${activeSection === section.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              <Icon size={20} />
              <span>{section.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  )
}