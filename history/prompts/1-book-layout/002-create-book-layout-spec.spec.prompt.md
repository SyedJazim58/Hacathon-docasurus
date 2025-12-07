---
id: 002
title: Create book layout spec
stage: spec
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: 1-book-layout
branch: 1-book-layout
user: unknown
command: /sp.specify
labels: [spec, book-layout]
links:
  spec: specs/1-book-layout/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/1-book-layout/spec.md
- specs/1-book-layout/checklists/requirements.md
tests:
- N/A
---

## Prompt

Physical AI & Humanoid Robotics – High-Level Book Layout (Iteration 1)

Goal:
Define the complete, high-level structure for the Physical AI & Humanoid Robotics book. This specification establishes modules, chapters, narrative flow, and the pedagogical arc—without writing detailed content yet. This is Iteration 1.

Target Audience:
Students learning AI, robotics, and embodied intelligence; educators building robotics curricula; engineers entering humanoid robotics, simulation, and ROS 2 systems.

Book Purpose:
Introduce Physical AI—AI systems that work in the real world. The book teaches students how to control humanoid robots using ROS 2, Gazebo, Unity, and NVIDIA Isaac, and finally integrate Vision-Language-Action (VLA) systems.

Scope of This Specification:
- Define 4 required modules (per course)
- Outline chapters within each module (high-level only)
- Specify the learning flow from fundamentals → robotics middleware → simulation → advanced AI → VLA
- Include engineering reasoning + code + environment setup

Success Criteria:
- Only 4 modules (ROS 2, Digital Twin, NVIDIA Isaac, VLA)
- Each module contains 3–5 high-level chapters
- Structure matches the instructional sequence described in the course
- Prepares for Iteration 2 detailed chapter specifications
- Compatible with Docusaurus book layout
- No broken example or missing dependencies

Constraints:
- detailed technical steps, code, or parameters
- use diagram only if essential (explain in text)
- Must follow course requirements exactly
- Hardware guidance and weekly breakdown content will be added later (not in this iteration)

2. Teaching Style Requirements:
For every chapter:

Conceptual Understanding:
- Explain like an academic instructor
- Use precise technical language
- Assume audience: Computer Science, AI, or Robotics students
- No fluff, no generic statements
- No unexplained terminology

Practical Implementation:
- Provide step-by-step setup
- Use commands that run directly in Ubuntu 22.04
- Include configuration files when needed
- Include environment and dependency notes
- Include troubleshooting steps

Example Code
- All code must be:
  - Tested
  - Runnable
  - ROS 2 Humble/Iron compatible as applicable
  - Isaac Sim compatible as applicable
- Explain what the code does

---

3. Content Boundaries:
Do NOT include:
- Unverified claims
- Unsupported opinions
- Speculative future predictions
- Plagiarized descriptions

DO include:
- Verified facts
- Proper citations
- Clear explanations of robotics principles

---

4. Allowed Sources:
Strongly preferred:
- Official ROS 2 documentation
- Official Gazebo documentation
- Unity docs
- NVIDIA Isaac Sim SDK docs
- Peer-reviewed robotics / AI research
- Academic textbooks

Not allowed:
- Blogs unless they belong to official SDK vendors
- Content with unclear authorship

-----------------------------------------------------
BOOK LAYOUT (HIGH-LEVEL MODULES + CHAPTERS)
-----------------------------------------------------

Module 1: The Robotic Nervous System (ROS 2)
Focus: Core middleware for robot control.

Chapters (High-Level Description Only):
1. Introduction to ROS 2
   - Why robots need a nervous system; ROS 2 architecture overview.

2. Nodes, Topics, Services, and Actions
   - High-level communication patterns in humanoid robotics.

3. ROS 2 Packages with Python (rclpy)
   - Conceptual overview of building Python-based control agents.

4. Robot Description with URDF
   - Structure of humanoid robots at a high level.

5. Launch Files & Parameterization
   - How ROS 2 orchestrates complex multi-node systems.

---

Module 2: The Digital Twin (Gazebo & Unity)
Focus: Physics simulation and virtual humanoid environments.

Chapters:
1. Why Digital Twins Matter
   - Concept of simulation → training → real-world deployment.

2. Gazebo for Physics Simulation
   - Gravity, collisions, joints, surfaces (high-level).

3. Robot Models: URDF and SDF
   - High-level structure of humanoid digital bodies.

4. Sensor Simulation
   - LiDAR, Depth Cameras, IMUs (conceptual roles and limitations).

5. Unity for Human-Robot Interaction
   - Using high-fidelity environments to model social/physical interactions.

---

Module 3: The AI-Robot Brain (NVIDIA Isaac)
Focus: Perception, navigation, planning, and synthetic data generation.

Chapters:
1. Overview of NVIDIA Isaac SDK & Isaac Sim
   - Where Isaac fits in the robotics stack.

2. AI-Powered Perception
   - VSLAM, depth perception, object detection (high-level).

3. Navigation and Path Planning
   - Nav2, locomotion planning for humanoids (conceptual).

4. Synthetic Data & Photorealistic Simulation
   - How Isaac Sim accelerates training.

5. Sim-to-Real Transfer Concepts
   - Why models trained in simulation need adaptation.

---

Module 4: Vision-Language-Action (VLA)
Focus: Robotics enhanced by LLMs, multimodal reasoning, and voice control.

Chapters:
1. Whisper for Voice-to-Action
   - Voice → command pipeline.

2. Cognitive Planning with LLMs
   - “Clean the room” → ROS 2 action sequence (high-level flow).

3. Multi-Modal Perception
   - Combining vision, language, and robot state.

4. Capstone: The Autonomous Humanoid
   - System architecture overview (high-level).
   - Voice → plan → navigate → identify → grasp.

# 8. Checklist Before Output
Before producing any output, verify:

- [ ] Structure follows module → chapter → sections
- [ ] All claims are cited
- [ ] All code is runnable
- [ ] Steps are reproducible
- [ ] No plagiarism
- [ ] Markdown is Docusaurus compatible

## Response snapshot

I have successfully created the feature specification for "Physical AI & Humanoid Robotics – High-Level Book Layout (Iteration 1)" at `specs/1-book-layout/spec.md`. The spec defines the book's modules, chapters, learning flow, and requirements based on your input. All content quality and requirement completeness checks have passed, and a `requirements.md` checklist has been generated in `specs/1-book-layout/checklists/`.

A new branch `1-book-layout` has been created and checked out. This specification is now ready for the planning phase.

## Outcome

- ✅ Impact: The high-level book layout specification for "Physical AI & Humanoid Robotics" (Iteration 1) has been successfully created.
- 🧪 Tests: N/A
- 📁 Files: `specs/1-book-layout/spec.md` and `specs/1-book-layout/checklists/requirements.md` were created/modified.
- 🔁 Next prompts: The next step is to proceed with `/sp.plan` to design the implementation plan for creating the book content based on this spec.
- 🧠 Reflection: The script failure for `create-new-feature.ps1` was handled by manually creating the spec directory, files, and branch.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-new-feature.ps1` script failed to run due to `pwsh` not being found. This required manual creation of the feature branch and spec files.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
