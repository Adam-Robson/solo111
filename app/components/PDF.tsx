'use client'

import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import type { PDFTypeProps } from '@/lib/types';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { PiArrowLeftBold, PiArrowRightBold } from 'react-icons/pi';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/'
};

export default function PDF() {
  const [file, setFile] = useState<PDFTypeProps>('/pdf/resume.pdf')
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [renderNavButtons, setRenderNavButtons] = useState<Boolean>(false);

  const onSuccess = (sample: any) => {
    setPageNumber(1);
    setRenderNavButtons(true);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const previousPage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    changePage(-1);
  }

  const nextPage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    changePage(+1);
  }

  return (
    <div className="w-full h-full px-16">
      <div className="max-w-screen-sm mx-auto mb-6">
        <div className="document__container flex justify-center items-center max-w-xs mx-auto">
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setRenderNavButtons(true);
              onSuccess;
            }}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
         {renderNavButtons &&
        <div className="w-full max-w-screen-sm mx-auto flex justify-evenly pt-4">
            <button
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
            <PiArrowLeftBold />
          </button>
          {"  "}
            <button
              disabled={pageNumber >= (numPages ?? 2)}
              onClick={nextPage}
            >
            <PiArrowRightBold />
          </button>
        </div>}
      </div>
    </div>
  )
}
