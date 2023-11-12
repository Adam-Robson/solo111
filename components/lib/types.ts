export type ProjectType = {
  id: number;
  title: string;
  description: string;
  githubLink: string | '';
  liveLink: string | '';
}

export interface ProjectListProps {
  projects: ProjectType[];
}

export type PDFTypeProps = string | File | null

export interface WritingType {
  id: number;
  title: string;
  body: string;
}

export interface WritingListProps {
  writings: WritingType[];
}
