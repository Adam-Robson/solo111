'use client'
import React, { useState } from 'react'
import {
  Document,
  Page,
  pdfjs
} from 'react-pdf'
import type { PDFTypeProps } from '../utils/data/types';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

/**
 * below the options object being made brings
 * in the work done in '../services.ts' and
 * it is a key prop passed to the Document
 * component from react-pdf
 */
const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

export default function PDF() {
  const [file, setFile] = useState<PDFTypeProps>('/pdf/resume.pdf')
  return (
    <div className="min-w-full max-w-6xl min-h-screen">
      <div className="max-w-xl mx-auto mt-8">
        <Document file={file} options={options}>
          <Page
            pageNumber={1}
            scale={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
        </div>
    </div>
  )
}
