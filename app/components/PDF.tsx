'use client'
import React from 'react'
import type { PDFTypeProps } from '../utils/data/types';
import {
  Document,
  Page
} from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function PDF({ pdfUrl }: PDFTypeProps) {
    return (
    <div className="h-full">
      <Document file={pdfUrl}>
        <Page />
      </Document>
    </div>
  )
}
