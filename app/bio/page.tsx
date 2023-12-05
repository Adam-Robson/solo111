import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

export default function BioPage() {
  return (
    <div className="box max-w-3xl mx-auto flex flex-col justify-center items-center p-2">
      <div className={styles.parent}>
        <div className={styles.div1}>
          <h1 className="text-center text-6xl sm:text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased mt-8 mb-4">
            bio
          </h1>
        </div>

        <div className={styles.div2}>
          <p className='mb-4 text-base md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            As a dedicated full-stack developer, I thrive on continuous learning. I specialize in technologies such as <Link href="https://www.postgresql.org/"><b>Postgres</b></Link>, <Link href="https://expressjs.com/"><b>Express</b></Link>, <Link href="https://react.dev/"><b>React</b></Link>, <Link href="https://www.typescriptlang.org/"><b>TypeScript</b></Link>, and <Link href="https://nodejs.org/en"><b>Node</b></Link>.
          </p>

          <p className='mb-4 text-base md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            With a decade-long background in the legal field, I made the pivotal decision to transition into the dynamic realm of software development in 2022.
          </p>
        </div>

        <div className={styles.div3}>
          <Image
            src={'/images/dev.png'}
            alt='dev img'
            width={300}
            height={300}
          />
        </div>

      </div>
    </div>
  )
}
