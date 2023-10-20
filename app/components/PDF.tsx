'use client'
import React, { useState } from 'react'
import {
  Document,
  Page,
  pdfjs
} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

type PDFFile = string | File | null

const resumeFile = '/pdf/resume.pdf'

export default function PDF() {
  const [file, setFile] = useState<PDFFile>(resumeFile)
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6">
      <Document file={file} options={options}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
