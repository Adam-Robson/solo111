'use client'

import React, { useState, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { useResizeObserver } from '@wojtekmaj/react-hooks';

import type { PDFTypeProps } from '@/lib/types';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

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
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(300)
  const [numPages, setNumPages] = useState<number | null>(2)

  const onResize = useCallback<ResizeObserverCallback>((entries) => {

    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  const resizeObserverOptions = {}

  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  return (
    <div className="w-full h-full px-16">
      <div className="max-w-xs mx-auto mb-6">
        <div className="document__container flex justify-center items-center max-w-96 mx-auto" ref={(ref) => setContainerRef(ref)}>
          <Document file={file} options={options} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page, i) => <Page key={i} pageNumber={page} />)}
          </Document>
        </div>
      </div>
    </div>
  )
}
