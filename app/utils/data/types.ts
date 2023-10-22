import { StaticImageData } from "next/image";

export type PDFTypeProps = string | File | null

export type PhotoTypeProps = {
  id: number;
  url: StaticImageData;
  caption: string;
}

export type PhotoListTypeProps = {
  photos: PhotoTypeProps[];
}

export type ProjectTypeProps = {
  title: string;
  description: string;
  link: string;
}
