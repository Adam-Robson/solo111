export type ProjectType = {
  id: number;
  title: string;
  description: string;
  githubLink: string | '';
  liveLink: string | '';
  selectedProject: boolean;
  onClose: () => void
}
