import styles from './styles.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adam Robson | Resume',
  description: 'Resume page of Portfolio by Adam Robson'
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.background}>{children}</section>
}
