import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Title({ isSmall }) {
    return (
        <div>
            {isSmall ? (
                <Link href={`/`}><a><h1 className={styles.title}>MORU&apos;S ORANGE BLOG</h1></a></Link>
            ) : (
                <Link href={`/`}><a><h1 className={styles.title}>MORU&apos;S ORANGE BLOG</h1></a></Link>
            )
            }
        </div>
    )
}