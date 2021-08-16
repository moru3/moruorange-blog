import styles from '../styles/Article.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function ArticleList({ posts }) {
    return (
        <main className={styles.main}>
          <div>
            {posts.map(({ id, title, created_at, contentHtml }) => (
              <li className={styles.article} key={id}>
                <div className={styles.title}><Link href={`/posts/${id}`}><a>{title}</a></Link></div>
                <div className={styles.date}><Date dateString={created_at} /></div>
                <div>{contentHtml.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 200)}</div>
              </li>
            )
            )}
          </div>
        </main>
    )
  }