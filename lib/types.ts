export type ProjectTypes = {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}


export type ProjectListPropsType = {
  project: ProjectTypes[];
}
