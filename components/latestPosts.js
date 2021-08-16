import Link from 'next/link'
import styles from '../styles/LatestPosts.module.css'

export default function LatestPosts({ posts }) {
    const filteredPosts = posts.slice(0, 5)
    return (
        <div className={styles.latestPosts}>
            <div className={styles.title}>Latests</div>
            <div>
                {filteredPosts.map(({ id, title }) => (
                    <div className={styles.articles} key={id}><Link href={`/posts/${id}`}><a>{title}</a></Link></div>
                )
                )}
            </div>
        </div>
    )
}