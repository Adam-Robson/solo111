import React from 'react'
import type { PDFTypeProps } from '../utils/data/types';
import {
  Document,
  Page
} from 'react-pdf'

const PDF: React.FC<PDFTypeProps> = ({ pdfUrl }) => {
  return (
    <div className="h-full">
      <Document file={pdfUrl}>
        <Page />
      </Document>
    </div>
  )
}

export default PDF
