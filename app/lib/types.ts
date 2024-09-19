import { StaticImageData } from 'next/image';

export type NavigationLink = { name: string; path: string; title: string };

export type Project = {
  id: number;
  title: string;
  description: string;
  icon: string;
  url: string;
  github: string;
};

export type Me = string;
