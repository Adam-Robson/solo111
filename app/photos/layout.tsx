import styles from './styles.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adam Robson | Photos',
  description: 'Photos page of Portfolio by Adam Robson'
}
export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.background}>{children}</section>
}
