import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type PDFTypeProps = string | File | null

export type PhotoTypeProps = {
  id: number;
  url: StaticImageData;
  caption: string;
}

export type PhotoListTypeProps = {
  photos: PhotoTypeProps[];
}

export type ProjectTypes = {
  title: string;
  url: string;
  description: string;
}
