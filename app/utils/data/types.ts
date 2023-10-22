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

export type ProjectTypeProps = {
  title: string;
  description: string;
  link: string;
  features: object[]
}

export type IconTypeProps = {
  name: string;
  icon: IconType;
}
