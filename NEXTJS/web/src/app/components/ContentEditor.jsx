import React from 'react'
import { Plus, Trash2, Save } from 'lucide-react'

export default function ContentEditor({ section, data, onUpdate }) {
  const handleUpdate = (sectionName, index, field, value) => {
    const updatedItems = [...data[sectionName]]
    updatedItems[index] = { ...updatedItems[index], [field]: value }
    onUpdate({ ...data, [sectionName]: updatedItems });
  }

  const handleSkillUpdate = (category, skillIndex, field, value) => {
    const updatedSkills = { ...data.skills };
    updatedSkills[category][skillIndex] = {
      ...updatedSkills[category][skillIndex],
      [field]: value
    }
    onUpdate({ ...data, skills: updatedSkills })
  }

  const handleAddItem = (sectionName, template = {}) => {
    onUpdate({
      ...data,
      [sectionName]: [...data[sectionName], template]
    })
  }

  const handleRemoveItem = (sectionName, index) => {
    const updatedItems = [...data[sectionName]]
    updatedItems.splice(index, 1);
    onUpdate({ ...data, [sectionName]: updatedItems })
  }

  const renderWorkItems = () => (
    <div className="space-y-4">
      {data.workItems.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleUpdate('workItems', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <input
            type="text"
            value={item.img}
            onChange={(e) => handleUpdate('workItems', index, 'img', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Image URL"
          />
          <textarea
            value={item.description}
            onChange={(e) => handleUpdate('workItems', index, 'description', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Description"
          />
          <input
            type="text"
            value={item.github}
            onChange={(e) => handleUpdate('workItems', index, 'github', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="GitHub URL"
          />
          <input
            type="text"
            value={item.demo}
            onChange={(e) => handleUpdate('workItems', index, 'demo', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Demo URL"
          />
          <button
            onClick={() => handleRemoveItem('workItems', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('workItems', {
          title: '',
          img: '',
          description: '',
          github: '',
          demo: ''
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Work Item
      </button>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-4">
      {data.events.map((event, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={event.title}
            onChange={(e) => handleUpdate('events', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <input
            type="text"
            value={event.image}
            onChange={(e) => handleUpdate('events', index, 'image', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Image URL"
          />
          <button
            onClick={() => handleRemoveItem('events', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('events', {
          id: Date.now(),
          title: '',
          image: ''
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Event
      </button>
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-4">
      {data.projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={project.title}
            onChange={(e) => handleUpdate('projects', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <textarea
            value={project.description}
            onChange={(e) => handleUpdate('projects', index, 'description', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Description"
          />
          <div className="mb-2">
            <input
              type="text"
              value={project.tags.join(', ')}
              onChange={(e) => handleUpdate('projects', index, 'tags', e.target.value.split(', '))}
              className="w-full p-2 border rounded"
              placeholder="Tags (comma-separated)"
            />
          </div>
          <input
            type="text"
            value={project.github}
            onChange={(e) => handleUpdate('projects', index, 'github', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="GitHub URL"
          />
          <input
            type="text"
            value={project.demo}
            onChange={(e) => handleUpdate('projects', index, 'demo', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Demo URL"
          />
          <button
            onClick={() => handleRemoveItem('projects', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('projects', {
          title: '',
          description: '',
          tags: [],
          github: '',
          demo: ''
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Project
      </button>
    </div>
  )

  const renderExperiences = () => (
    <div className="space-y-4">
      {data.experiences.map((exp, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={exp.title}
            onChange={(e) => handleUpdate('experiences', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleUpdate('experiences', index, 'company', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Company"
          />
          <input
            type="text"
            value={exp.period}
            onChange={(e) => handleUpdate('experiences', index, 'period', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Period"
          />
          <textarea
            value={exp.description}
            onChange={(e) => handleUpdate('experiences', index, 'description', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Description"
          />
          <div className="mb-2">
            <input
              type="text"
              value={exp.skills.join(', ')}
              onChange={(e) => handleUpdate('experiences', index, 'skills', e.target.value.split(', '))}
              className="w-full p-2 border rounded"
              placeholder="Skills (comma-separated)"
            />
          </div>
          <button
            onClick={() => handleRemoveItem('experiences', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('experiences', {
          title: '',
          company: '',
          period: '',
          description: '',
          skills: []
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Experience
      </button>
    </div>
  )

  const renderSkills = () => (
    <div className="space-y-6">
      {Object.entries(data.skills).map(([category, skills]) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex gap-4 items-center">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleSkillUpdate(category, index, 'name', e.target.value)}
                  className="flex-1 p-2 border rounded"
                  placeholder="Skill name"
                />
                <input
                  type="number"
                  value={skill.level}
                  onChange={(e) => handleSkillUpdate(category, index, 'level', parseInt(e.target.value))}
                  className="w-24 p-2 border rounded"
                  placeholder="Level"
                  min="0"
                  max="100"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const renderTestimonials = () => (
    <div className="space-y-4">
      {data.testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={testimonial.name}
            onChange={(e) => handleUpdate('testimonials', index, 'name', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Name"
          />
          <input
            type="text"
            value={testimonial.role}
            onChange={(e) => handleUpdate('testimonials', index, 'role', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Role"
          />
          <input
            type="text"
            value={testimonial.company}
            onChange={(e) => handleUpdate('testimonials', index, 'company', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Company"
          />
          <textarea
            value={testimonial.text}
            onChange={(e) => handleUpdate('testimonials', index, 'text', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Testimonial"
          />
          <input
            type="text"
            value={testimonial.image}
            onChange={(e) => handleUpdate('testimonials', index, 'image', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Image URL"
          />
          <button
            onClick={() => handleRemoveItem('testimonials', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('testimonials', {
          name: '',
          role: '',
          text: '',
          company: '',
          image: ''
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Testimonial
      </button>
    </div>
  )

  const renderCommunities = () => (
    <div className="space-y-4">
      {data.communities.map((community, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={community.role}
            onChange={(e) => handleUpdate('communities', index, 'role', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Role"
          />
          <input
            type="text"
            value={community.organization}
            onChange={(e) => handleUpdate('communities', index, 'organization', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Organization"
          />
          <input
            type="text"
            value={community.period}
            onChange={(e) => handleUpdate('communities', index, 'period', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Period"
          />
          <div className="mb-2">
            <textarea
              value={community.achievements.join('\n')}
              onChange={(e) => handleUpdate('communities', index, 'achievements', e.target.value.split('\n'))}
              className="w-full p-2 border rounded h-24"
              placeholder="Achievements (one per line)"
            />
          </div>
          <input
            type="text"
            value={community.link}
            onChange={(e) => handleUpdate('communities', index, 'link', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Link"
          />
          <button
            onClick={() => handleRemoveItem('communities', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('communities', {
          role: '',
          organization: '',
          period: '',
          achievements: [],
          link: ''
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Community
      </button>
    </div>
  )

  const renderCertifications = () => (
    <div className="space-y-4">
      {data.certifications.map((cert, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={cert.title}
            onChange={(e) => handleUpdate('certifications', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <input
            type="text"
            value={cert.issuer}
            onChange={(e) => handleUpdate('certifications', index, 'issuer', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Issuer"
          />
          <input
            type="text"
            value={cert.date}
            onChange={(e) => handleUpdate('certifications', index, 'date', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Date"
          />
          <button
            onClick={() => handleRemoveItem('certifications', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('certifications', {
          title: '',
          issuer: '',
          date: '',
          icon: 'Award'
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Certification
      </button>
    </div>
  )

  const renderAchievements = () => (
    <div className="space-y-4">
      {data.achievements.map((achievement, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={achievement.title}
            onChange={(e) => handleUpdate('achievements', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <textarea
            value={achievement.description}
            onChange={(e) => handleUpdate('achievements', index, 'description', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Description"
          />
          <button
            onClick={() => handleRemoveItem('achievements', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('achievements', {
          title: '',
          description: '',
          icon: 'Trophy'
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Achievement
      </button>
    </div>
  )

  const renderVolunteering = () => (
    <div className="space-y-4">
      {data.volunteering.map((vol, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={vol.title}
            onChange={(e) => handleUpdate('volunteering', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <textarea
            value={vol.description}
            onChange={(e) => handleUpdate('volunteering', index, 'description', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Description"
          />
          <button
            onClick={() => handleRemoveItem('volunteering', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('volunteering', {
          title: '',
          description: '',
          icon: 'Medal'
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Volunteering
      </button>
    </div>
  )

  const renderBlogs = () => (
    <div className="space-y-4">
      {data.blogs.map((blog, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={blog.title}
            onChange={(e) => handleUpdate('blogs', index, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
          />
          <textarea
            value={blog.excerpt}
            onChange={(e) => handleUpdate('blogs', index, 'excerpt', e.target.value)}
            className="w-full mb-2 p-2 border rounded h-24"
            placeholder="Excerpt"
          />
          <input
            type="text"
            value={blog.date}
            onChange={(e) => handleUpdate('blogs', index, 'date', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Date (YYYY-MM-DD)"
          />
          <input
            type="text"
            value={blog.readTime}
            onChange={(e) => handleUpdate('blogs', index, 'readTime', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Read Time"
          />
          <input
            type="text"
            value={blog.image}
            onChange={(e) => handleUpdate('blogs', index, 'image', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Image URL"
          />
          <input
            type="text"
            value={blog.category}
            onChange={(e) => handleUpdate('blogs', index, 'category', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Category"
          />
          <button
            onClick={() => handleRemoveItem('blogs', index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAddItem('blogs', {
          title: '',
          excerpt: '',
          date: '',
          readTime: '',
          image: '',
          category: ''
        })}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={20} />
        Add Blog
      </button>
    </div>
  )

  const renderForm = () => {
    switch (section) {
      case 'work':
        return renderWorkItems()
      case 'events':
        return renderEvents()
      case 'projects':
        return renderProjects()
      case 'experience':
        return renderExperiences()
      case 'skills':
        return renderSkills()
      case 'testimonials':
        return renderTestimonials()
      case 'communities':
        return renderCommunities()
      case 'certifications':
        return renderCertifications()
      case 'achievements':
        return renderAchievements()
      case 'volunteering':
        return renderVolunteering()
      case 'blogs':
        return renderBlogs()
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
