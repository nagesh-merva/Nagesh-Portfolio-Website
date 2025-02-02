import React from 'react'
import { Save } from 'lucide-react'
import DynamicSectionComponent from './DisplaySection'
import SkillsComponent from './SkillsComponent'

export default function ContentEditor({ section, data }) {
  const renderForm = () => {
    switch (section) {
      case 'work':
        return <DynamicSectionComponent
          section="workItems"
          data={data.workItems}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "img", type: "text", placeholder: "Image URL" },
            { name: "description", type: "textarea", placeholder: "Description" },
            { name: "github", type: "text", placeholder: "GitHub URL" },
            { name: "demo", type: "text", placeholder: "Demo URL" },
          ]}
        />
      case 'events':
        return <DynamicSectionComponent
          section="events"
          data={data.events}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "image", type: "text", placeholder: "Image URL" }
          ]}
        />
      case 'projects':
        return <DynamicSectionComponent
          section="projects"
          data={data.projects}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "description", type: "textarea", placeholder: "Description" },
            { name: "tags", type: "array", placeholder: "Tags (comma-separated)" },
            { name: "github", type: "text", placeholder: "GitHub URL" },
            { name: "demo", type: "text", placeholder: "Demo URL" }
          ]}
        />
      case 'experience':
        return <DynamicSectionComponent
          section="experiences"
          data={data.experiences}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "company", type: "text", placeholder: "Company" },
            { name: "period", type: "text", placeholder: "Period" },
            { name: "description", type: "textarea", placeholder: "Description" },
            { name: "skills", type: "array", placeholder: "Skills (comma-separated)" }
          ]}
        />
      case 'skills':
        return <SkillsComponent data={data.skills} />
      case 'testimonials':
        return <DynamicSectionComponent
          section="testimonials"
          data={data.testimonials}
          fields={[
            { name: "name", type: "text", placeholder: "Name" },
            { name: "role", type: "text", placeholder: "Role" },
            { name: "company", type: "text", placeholder: "Company" },
            { name: "text", type: "textarea", placeholder: "Testimonial" },
            { name: "image", type: "text", placeholder: "Image URL" }
          ]}
        />
      case 'communities':
        return <DynamicSectionComponent
          section="communities"
          data={data.communities}
          fields={[
            { name: "role", type: "text", placeholder: "Role" },
            { name: "organization", type: "text", placeholder: "Organization" },
            { name: "period", type: "text", placeholder: "Period" },
            { name: "achievements", type: "array", placeholder: "Achievements (one per line)" },
            { name: "link", type: "text", placeholder: "Link" }
          ]}
        />
      case 'certifications':
        return <DynamicSectionComponent
          section="certifications"
          data={data.certifications}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "issuer", type: "text", placeholder: "Issuer" },
            { name: "date", type: "text", placeholder: "Date" }
          ]}
        />
      case 'achievements':
        return <DynamicSectionComponent
          section="achievements"
          data={data.achievements}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "description", type: "textarea", placeholder: "Description" }
          ]}
        />
      case 'volunteering':
        return <DynamicSectionComponent
          section="volunteering"
          data={data.volunteering}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "description", type: "textarea", placeholder: "Description" }
          ]}
        />
      case 'blogs':
        return <DynamicSectionComponent
          section="blogs"
          data={data.blogs}
          fields={[
            { name: "title", type: "text", placeholder: "Title" },
            { name: "excerpt", type: "textarea", placeholder: "Excerpt" },
            { name: "date", type: "text", placeholder: "Date (YYYY-MM-DD)" },
            { name: "readTime", type: "text", placeholder: "Read Time" },
            { name: "image", type: "text", placeholder: "Image URL" },
            { name: "category", type: "text", placeholder: "Category" },
            { name: "content", type: "textarea", placeholder: "Content" }
          ]}
        />
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Welcome to the Portfolio Admin Dashboard</h2>
            <p className="mt-2 text-gray-600">Select a section from the sidebar to start editing your portfolio content.</p>
          </div>
        )
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold capitalize">{section} Editor</h2>
        <button
          onClick={() => console.log('Save changes', data)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Save size={20} />
          Save Changes
        </button>
      </div>
      {renderForm()}
    </div>
  )
}
