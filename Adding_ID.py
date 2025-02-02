import uuid
from pymongo import MongoClient

# MongoDB connection string
connection_string = "mongodb+srv://nagesh:nagesh2245@mywebsites.btvk61i.mongodb.net/"

# Connect to MongoDB
client = MongoClient(connection_string)

# Access the 'portfolio' database
db = client['Portfolio']

# List of collections to update
collections = [
    "workItems",
    "volunteering",
    "testimonials",
    "skills",
    "projects",
    "experiences",
    "events",
    "communities",
    "certifications",
    "blogs",
    "achievements"
]

# Function to add/override 'id' field in all documents
def add_or_override_id():
    for collection_name in collections:
        collection = db[collection_name]
        
        # Update all documents to add or override the 'id' field
        for document in collection.find():
            # Create a unique UUID
            unique_id = str(uuid.uuid4())
            
            # Add or override the 'id' field
            collection.update_one(
                {'_id': document['_id']},  # Find document by its original '_id'
                {'$set': {'id': unique_id}}  # Set the new 'id' field
            )
            print(f"Added/Updated 'id' for document with _id: {document['_id']} in collection: {collection_name}")

if __name__ == "__main__":
    add_or_override_id()
