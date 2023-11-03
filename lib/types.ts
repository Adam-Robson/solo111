export type ProjectType = {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

export interface FloatingCardProps {
  project: ProjectType | null;
  onClose: () => void;
}
