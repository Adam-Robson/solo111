export type PDFTypeProps = string | File | null

export interface PhotoType {
  id: number;
  url: string;
  caption: string;
}

export interface PropsTypes {
  photos: PhotoType[];
}
