export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}