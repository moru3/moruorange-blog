import styles from '../styles/Layout.module.css'
import Head from 'next/head'

import Title from './title'
import Author from './author'
import Categories from './categories'
import LatestPosts from './latestPosts'

export default function Layout({ children, categories, posts, isList }) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>MORU&apos;S ORANGE BLOG - もるみかんBLOG</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"/>
                <link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" title="RSS2.0" />
                <link rel="alternate" type="application/atom+xml" href="/rss/atom.xml" title="Atom" />
            </Head>
            <div className={styles.title}>
                <Title isSmall={!isList} />
            </div>
            <div className={styles.body}>
                <main className={styles.main}>{children}</main>
                <div className={styles.sideBar}>
                    <div className={styles.author}>
                        <Author />
                    </div>
                    <div>
                        <LatestPosts posts={posts}/>
                    </div>
                    <div className={styles.categories}>
                        <Categories categories={categories}/>
                    </div>
                </div>
            </div>
        </div>
    )
}