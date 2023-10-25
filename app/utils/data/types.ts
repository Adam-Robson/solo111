import { StaticImageData } from "next/image";
import { ReactEventHandler } from "react";
import { IconType } from "react-icons";

export type PDFTypeProps = string | File | null

export type PhotoTypeProps = {
  id: number;
  url: string;
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

export type WritingTypeProps = {
  id: string;
  alias: string;
  body: string[];
}
