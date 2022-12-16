import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/LatestPosts.module.css'

export default function LatestPosts({ posts }) {
    const [filteredPosts, setFilteredPosts] = useState()

    useEffect(() => {
        if (posts != null) {
            setFilteredPosts(posts.slice(0, 5))
        }
    }, [posts])
    if (filteredPosts === undefined) {
        return <div></div>
    }
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