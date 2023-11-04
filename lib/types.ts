export type ProjectType = {
  id: number;
  title: string;
  description: string;
  githubLink: string | '';
  liveLink: string | '';
}

export type PDFTypeProps = string | File | null
