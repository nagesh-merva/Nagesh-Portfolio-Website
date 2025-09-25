import React, { useState, useEffect, useRef } from "react"
import { Trash2, Plus, Upload, X, Image } from "lucide-react"

const DynamicSectionComponent = ({ section, data, fields }) => {
    const [items, setItems] = useState([])
    const [uploadingImages, setUploadingImages] = useState({}) // Track uploading state per field
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

    const handleImageUpload = async (file, itemIndex, fieldName) => {
        if (!file) return

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file')
            return
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB')
            return
        }

        const uploadKey = `${itemIndex}-${fieldName}`
        setUploadingImages(prev => ({ ...prev, [uploadKey]: true }))

        try {
            // Create FormData for the upload
            const formData = new FormData()
            formData.append('file', file)

            // Upload to your API endpoint that handles Vercel Blob
            const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Upload failed')
            }

            const result = await response.json()

            if (result.url) {
                // Update the item with the uploaded image URL
                handleLocalChange(itemIndex, fieldName, result.url)
                console.log('Image uploaded successfully:', result.url)
            } else {
                throw new Error('No URL returned from upload')
            }
        } catch (error) {
            console.error('Error uploading image:', error)
            alert('Failed to upload image. Please try again.')
        } finally {
            setUploadingImages(prev => ({ ...prev, [uploadKey]: false }))
        }
    }

    const handleRemoveImage = (itemIndex, fieldName) => {
        handleLocalChange(itemIndex, fieldName, '')
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

    const renderField = (field, item, index) => {
        const uploadKey = `${index}-${field.name}`
        const isUploading = uploadingImages[uploadKey]

        if (field.type === "img") {
            return (
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                        {field.placeholder}
                    </label>

                    {/* Current image preview */}
                    {item[field.name] && (
                        <div className="relative inline-block">
                            <img
                                src={item[field.name]}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-lg border"
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index, field.name)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    )}

                    {/* Upload area */}
                    <div className="flex items-center gap-3">
                        <label className="relative cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                        handleImageUpload(file, index, field.name)
                                    }
                                }}
                                className="hidden"
                                disabled={isUploading}
                            />
                            <div className={`flex items-center gap-2 px-4 py-2 border-2 border-dashed rounded-lg transition-colors ${isUploading
                                ? 'border-blue-300 bg-blue-50 cursor-not-allowed'
                                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                                }`}>
                                {isUploading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                                        <span className="text-sm text-blue-600">Uploading...</span>
                                    </>
                                ) : (
                                    <>
                                        <Upload size={16} />
                                        <span className="text-sm text-gray-600">
                                            {item[field.name] ? 'Change Image' : 'Upload Image'}
                                        </span>
                                    </>
                                )}
                            </div>
                        </label>

                        {/* Manual URL input as fallback */}
                        <div className="flex-1">
                            <input
                                type="url"
                                value={item[field.name] || ""}
                                onChange={(e) => handleLocalChange(index, field.name, e.target.value)}
                                className="w-full p-2 border rounded text-sm"
                                placeholder="Or paste image URL directly"
                            />
                        </div>
                    </div>

                    {/* Upload guidelines */}
                    <p className="text-xs text-gray-500">
                        Max size: 5MB. Supported formats: JPG, PNG, GIF, WebP
                    </p>
                </div>
            )
        }

        if (field.type === "textarea") {
            return (
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
            )
        }

        return (
            <input
                type="text"
                value={Array.isArray(item[field.name]) ? item[field.name].join(", ") : item[field.name] || ""}
                onChange={(e) =>
                    handleLocalChange(index, field.name, field.type === "array" ? e.target.value : e.target.value)
                }
                className="w-full p-2 border rounded"
                placeholder={field.placeholder}
            />
        )
    }

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    {fields.map((field) => (
                        <div key={field.name} className="mb-4">
                            {renderField(field, item, index)}
                        </div>
                    ))}
                    <div className="flex gap-3 pt-4 border-t">
                        <button
                            onClick={() => handleSaveItem(index)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => handleRemoveItem(index)}
                            className="flex items-center gap-2 text-red-600 hover:text-red-800 px-4 py-2 border border-red-300 rounded hover:bg-red-50 transition-colors"
                        >
                            <Trash2 size={16} />
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <button
                onClick={handleAddItem}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 px-4 py-2 border border-blue-300 rounded hover:bg-blue-50 transition-colors"
            >
                <Plus size={20} />
                Add {section}
            </button>
        </div>
    )
}

export default DynamicSectionComponent