import fs from 'fs'
import path from 'path'

const cMapsDirectory = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps')
fs.cpSync(cMapsDirectory, 'dist/cmaps/', { recursive: true })

const standardFontsDirectory = path.join(path.dirname(require.resolve('pdfjs-dist/package.son')), 'standard_fonts')
fs.cpSync(standardFontsDirectory, 'dist/standard_fonts/', { recursive: true })

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'))
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js')

fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js')
