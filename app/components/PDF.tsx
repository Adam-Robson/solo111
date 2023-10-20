'use client'
import React from 'react'
import {
  Document,
  Page,
  pdfjs
} from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resumeFile = '../../public/pdf/resume.pdf'

export default function PDF() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6">
      <Document file={resumeFile} options={options}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
