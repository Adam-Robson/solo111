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

  const onResize = useCallback<ResizeObserverCallback>((entries) => {

    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  const resizeObserverOptions = {}
  const maxWidth = 700

  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  return (
    <div className="w-full h-full">
      <div className="max-w-sm md:max-w-md mx-auto mb-6">
        <div className="document__container" ref={(ref) => setContainerRef(ref)}>
          <Document file={file} options={options}>
            <Page
              pageNumber={1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={containerWidth
                ? Math.min(containerWidth, maxWidth)
                : maxWidth}
            />
          </Document>
        </div>
      </div>
    </div>
  )
}
