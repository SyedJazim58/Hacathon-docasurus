import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Module 1: ROS 2',
      link: {
        type: 'generated-index',
        title: 'Module 1: ROS 2',
        description: 'Grasping Core Robotics Middleware',
        slug: '/module1-ros2',
      },
      items: [
        'module1-ros2/chapter1',
        'module1-ros2/chapter2',
        'module1-ros2/chapter3',
        'module1-ros2/chapter4',
        'module1-ros2/chapter5',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin',
      link: {
        type: 'generated-index',
        title: 'Module 2: Digital Twin',
        description: 'Simulating Humanoid Robots',
        slug: '/module2-digital-twin',
      },
      items: [
        'module2-digital-twin/chapter1',
        'module2-digital-twin/chapter2',
        'module2-digital-twin/chapter3',
        'module2-digital-twin/chapter4',
        'module2-digital-twin/chapter5',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac',
      link: {
        type: 'generated-index',
        title: 'Module 3: NVIDIA Isaac',
        description: 'Developing AI Robot Brains',
        slug: '/module3-nvidia-isaac',
      },
      items: [
        'module3-nvidia-isaac/chapter1',
        'module3-nvidia-isaac/chapter2',
        'module3-nvidia-isaac/chapter3',
        'module3-nvidia-isaac/chapter4',
        'module3-nvidia-isaac/chapter5',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: VLA',
      link: {
        type: 'generated-index',
        title: 'Module 4: VLA',
        description: 'Integrating Vision-Language-Action (VLA)',
        slug: '/module4-vla',
      },
      items: [
        'module4-vla/chapter1',
        'module4-vla/chapter2',
        'module4-vla/chapter3',
        'module4-vla/chapter4',
      ],
    },
  ],};

export default sidebars;
