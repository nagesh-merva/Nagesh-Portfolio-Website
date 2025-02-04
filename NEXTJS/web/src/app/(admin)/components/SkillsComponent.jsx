import React, { useState, useEffect } from "react"
import { Trash2, Plus } from "lucide-react"

const SkillsComponent = ({ data }) => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        if (data) {
            setSkills(data)
        }
    }, [data])

    const handleSkillUpdate = (categoryIndex, skillIndex, field, value) => {
        const updatedSkills = [...skills]
        if (field === "name") {
            updatedSkills[categoryIndex].skills[skillIndex].name = value
        } else if (field === "skill_level") {
            updatedSkills[categoryIndex].skills[skillIndex].skill_level = value
        } else if (field === "confidence") {
            updatedSkills[categoryIndex].skills[skillIndex].confidence = value
        }
        setSkills(updatedSkills)
    }

    const handleAddSkill = async (categoryIndex) => {
        const updatedSkills = [...skills]
        updatedSkills[categoryIndex].skills.push({ name: "", skill_level: 0, confidence: 0 })

        setSkills(updatedSkills)
    }

    const handleRemoveSkill = async (categoryIndex, skillIndex) => {
        const updatedSkills = [...skills]
        updatedSkills[categoryIndex].skills.splice(skillIndex, 1)

        setSkills(updatedSkills)

        try {
            const response = await fetch("/api/admin/update", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    section: "skills",
                    updatedItem: updatedSkills[categoryIndex],
                }),
            })

            const result = await response.json()

            if (response.ok) {
                console.log("Skill deleted successfully:", result)
                alert("Skill deleted successfully!")
            } else {
                console.error("Delete skill failed:", result.error)
                alert("Failed to delete skill!");
            }
        } catch (error) {
            console.error("Error deleting skill:", error)
            alert("An error occurred while deleting skill!")
        }
    }

    const handleSaveItem = async (categoryIndex) => {
        const method = skills[categoryIndex].id ? "PUT" : "POST"
        try {
            const response = await fetch("/api/admin/update", {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    section: "skills",
                    updatedItem: skills[categoryIndex],
                }),
            })

            const result = await response.json()

            if (response.ok) {
                console.log("Skill updated successfully:", result)
                alert("Skill updated successfully!")
            } else {
                console.error("Update skill failed:", result.error)
                alert("Failed to update skill!")
            }
        } catch (error) {
            console.error("Error updating skill:", error)
            alert("An error occurred while updating skill!")
        }
    }

    const handleDeleteCategory = async (categoryIndex) => {
        const updatedSkills = [...skills]
        const removedCategory = updatedSkills.splice(categoryIndex, 1)

        setSkills(updatedSkills)

        try {
            const response = await fetch("/api/admin/update", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    section: "skills",
                    id: removedCategory[0].id,
                }),
            })

            const result = await response.json()

            if (response.ok) {
                console.log(`${removedCategory[0].title} deleted successfully:`, result)
                alert(`${removedCategory[0].title} deleted successfully!`)
            } else {
                console.error("Delete category failed:", result.error)
                alert("Failed to delete category!")
            }
        } catch (error) {
            console.error("Error deleting category:", error)
            alert("An error occurred while deleting category!")
        }
    }

    return (
        <div className="space-y-6">
            {skills.map((category, categoryIndex) => (
                <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <button
                            onClick={() => handleDeleteCategory(categoryIndex)}
                            className="text-red-600 hover:text-red-800"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex gap-4 items-center">
                                <input
                                    type="text"
                                    value={skill.name}
                                    onChange={(e) =>
                                        handleSkillUpdate(categoryIndex, skillIndex, "name", e.target.value)
                                    }
                                    className="flex-1 p-2 border rounded"
                                    placeholder="Skill name"
                                />
                                <input
                                    type="number"
                                    value={skill.skill_level}
                                    onChange={(e) =>
                                        handleSkillUpdate(
                                            categoryIndex,
                                            skillIndex,
                                            "skill_level",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    className="w-24 p-2 border rounded"
                                    placeholder="Level"
                                    min="0"
                                    max="100"
                                />
                                <input
                                    type="number"
                                    value={skill.confidence}
                                    onChange={(e) =>
                                        handleSkillUpdate(
                                            categoryIndex,
                                            skillIndex,
                                            "confidence",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    className="w-24 p-2 border rounded"
                                    placeholder="confidence"
                                    min="0"
                                    max="100"
                                />
                                <button
                                    onClick={() => handleSaveItem(categoryIndex, skillIndex)}
                                    className="text-green-600 hover:text-green-800"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => handleRemoveSkill(categoryIndex, skillIndex)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => handleAddSkill(categoryIndex)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-4"
                    >
                        <Plus size={20} />
                        Add Skill
                    </button>
                </div>
            ))}
        </div>
    )
}

export default SkillsComponent
