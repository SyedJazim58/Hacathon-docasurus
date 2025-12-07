# Data Model

This document defines the data model for the "Physical AI & Humanoid Robotics" book. The model represents the hierarchical structure of the book's content.

## Entities

### Book

The root entity representing the entire book.

- **Attributes:**
    - `title`: The title of the book.
    - `version`: The version of the book.

### Module

A top-level section of the book, representing a major topic.

- **Attributes:**
    - `title`: The title of the module.
    - `number`: The number of the module (1-4).
- **Relationships:**
    - Has many `Chapters`.

### Chapter

A chapter within a module.

- **Attributes:**
    - `title`: The title of the chapter.
    - `number`: The number of the chapter within the module.
- **Relationships:**
    - Belongs to a `Module`.
    - Has many `Sections`.

### Section

A section within a chapter, representing a specific sub-topic.

- **Attributes:**
    - `title`: The title of the section (e.g., "Conceptual Understanding", "Practical Implementation").
    - `content`: The Markdown content of the section.
- **Relationships:**
    - Belongs to a `Chapter`.