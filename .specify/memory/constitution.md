<!--
Sync Impact Report:
- Version change: 1.0.0 → 2.0.0
- List of modified principles: All principles have been redefined based on the new project scope.
- Added sections: Standards, Technical Standards, Workflow Rules, Constraints, Success Criteria
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md (⚠ pending)
  - .specify/templates/spec-template.md (⚠ pending)
  - .specify/templates/tasks-template.md (⚠ pending)
- Follow-up TODOs: Review and update all templates to align with the new constitution.
-->
# AI/Spec-Driven Book Creation using Docusaurus + GitHub Pages Constitution

## Core Principles

### I. Spec-First Writing
All content MUST be generated from explicit, approved specifications. No content generation should occur without a corresponding spec file that defines its structure, scope, and requirements.

### II. Accuracy & Verifiability
Every technical or factual statement MUST be reliable, verifiable, and sourced from authoritative references. There shall be no unverified claims or speculative information.

### III. Clarity & Accessibility
Content MUST be written to be clearly understandable to an intermediate-to-advanced learning audience (approximating a Flesch-Kincaid Grade Level of 10-12). All concepts should be explained precisely and without ambiguity.

### IV. Reproducibility
All technical steps, commands, code examples, and repository structures MUST be repeatable from scratch by the target audience. The goal is a frictionless, error-free reader experience.

### V. Transparency & Integrity
There shall be no "hallucinated" or fabricated citations, commands, or configurations. All generated content must be traceable to real, verifiable sources. Plagiarism is a critical violation.

### VI. Consistency
A unified writing style, tone, formatting, and terminology MUST be maintained across the entire book to ensure a cohesive and professional final product.

## Standards

- All chapters MUST originate from specifications (e.g., created via `/sp.page`, `/sp.structure`, `/sp.section`).
- The tone MUST be clear, instructional, and educational.
- All code, commands, and configuration examples MUST be tested or logically correct and verifiable.
- Citations, when used, MUST be real, verifiable, and formatted in APA style.
- Diagrams, if used, MUST include proper captions and textual explanations.

## Technical Standards

- **Book Generator**: Docusaurus 3+
- **Deployment Target**: GitHub Pages (from the `main` or `gh-pages` branch).
- **Repository Structure**: The repository MUST include:
  - `/specs` folder with all specification files.
  - `/docs` folder for the book's chapter content.
  - `/static` folder for images and other static assets.
  - A correctly configured `docusaurus.config.js`.
- **Build Integrity**: The `npm run build` command MUST execute without errors.
- **Reference Integrity**: All internal links and references MUST resolve correctly in the final build.

## Workflow Rules

- Content is to be written ONLY after its corresponding specification has been approved.
- The AI agent (e.g., Gemini) is to be used for generation, revision, and refinement, guided by the specs.
- Each chapter MUST follow a consistent template:
  - Title & Description
  - Learning Objectives
  - Main Content Sections
  - Summary
  - References (if required)
- Every contribution or update MUST be checked against this constitution before being merged.

## Constraints

- **Book Size**: The book should be coherent and substantial, with a recommended minimum of 8-10 chapters.
- **Content Safety**: All examples and content must be safe for beginners and free from sensitive or harmful material.
- **Automation**: All core processes (build, test, deploy) MUST be fully automatable to ensure CI/CD compatibility.

## Success Criteria

- The book MUST successfully build in Docusaurus with zero errors.
- The book MUST deploy to GitHub Pages and load correctly in a web browser.
- All chapters MUST be verifiably generated from specs and exhibit consistent quality and structure.
- All explanations MUST be clear, accurate, and reproducible.
- The repository MUST have a clean, readable structure that follows documented best practices.
- This constitution MUST be adhered to throughout the entire project lifecycle.

## Governance

This Constitution is the authoritative guide for this project. Amendments require a formal proposal, review, and justification, documented in the project's history. All contributions and reviews MUST validate compliance with these principles.

**Version**: 2.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
