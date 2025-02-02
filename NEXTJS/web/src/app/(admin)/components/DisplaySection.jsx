import React, { useState, useEffect, useRef } from "react"
import { Trash2, Plus } from "lucide-react"

const DynamicSectionComponent = ({ section, data, fields }) => {
    const [items, setItems] = useState([])
    const textareaRef = useRef(null)

    useEffect(() => {
        if (data) {
            setItems([...data])
        }
    }, [data])

    const handleLocalChange = (index, field, value) => {
        const updatedItems = [...items]
        updatedItems[index][field] = value
        setItems(updatedItems)
    }

    const handleSaveItem = async (index) => {
        const method = items[index].id ? "PUT" : "POST"

        try {
            const response = await fetch("/api/admin/update", {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    section: section,
                    updatedItem: items[index],
                }),
            })

            const result = await response.json()

            if (response.ok) {
                console.log(`${section} saved successfully:`, result)
                alert(`${section} saved successfully!`)
                if (!items[index].id) {
                    items[index].id = result.id
                    setItems([...items])
                }
            } else {
                console.error("Save failed:", result.error)
                alert(`Failed to save ${section}!`)
            }
        } catch (error) {
            console.error(`Error saving ${section}:`, error)
            alert(`An error occurred while saving ${section}!`)
        }
    }

    const handleRemoveItem = async (index) => {
        const updatedItems = items.filter((_, i) => i !== index)

        try {
            const response = await fetch("/api/admin/update", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    section: section,
                    id: items[index].id,
                }),
            })

            const result = await response.json()

            if (response.ok) {
                console.log(`${section} deleted successfully:`, result)
                setItems(updatedItems)
                alert(`${section} deleted successfully!`)
            } else {
                console.error("Delete failed:", result.error)
                alert(`Failed to delete ${section}!`)
            }
        } catch (error) {
            console.error(`Error deleting ${section}:`, error)
            alert(`An error occurred while deleting ${section}!`)
        }
    }

    const handleAddItem = async () => {
        const newItem = {};
        fields.forEach((field) => (newItem[field.name] = field.default || ""))
        setItems([...items, newItem])
    }

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight()
    }, [])

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    {fields.map((field) => (
                        <div key={field.name} className="mb-2">
                            {field.type === "textarea" ? (
                                <textarea
                                    ref={textareaRef}
                                    value={item[field.name] || ""}
                                    onChange={(e) => {
                                        handleLocalChange(index, field.name, e.target.value)
                                        adjustTextareaHeight()
                                    }}
                                    onFocus={adjustTextareaHeight}
                                    className="w-full p-2 border rounded"
                                    placeholder={field.placeholder}
                                    style={{ resize: "none" }}
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={Array.isArray(item[field.name]) ? item[field.name].join(", ") : item[field.name] || ""}
                                    onChange={(e) =>
                                        handleLocalChange(index, field.name, field.type === "array" ? e.target.value : e.target.value)
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={field.placeholder}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        onClick={() => handleSaveItem(index)}
                        className="text-green-600 hover:text-green-800 px-4 py-1 border rounded mt-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-600 hover:text-red-800 ml-4"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            ))}
            <button
                onClick={handleAddItem}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
                <Plus size={20} />
                Add {section}
            </button>
        </div>
    )
}

export default DynamicSectionComponent
