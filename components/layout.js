import styles from '../styles/Layout.module.css'
import Head from 'next/head'

import Title from './title'
import Author from './author'
import Categories from './categories'
import LatestPosts from './latestPosts'
import BlogHeader from './header'

export default function Layout({ children, categories, posts, isList }) {
    return (
        <div className={styles.layout}>
            <BlogHeader/>
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
                        <LatestPosts posts={posts} />
                    </div>
                    <div className={styles.categories}>
                        <Categories categories={categories} />
                    </div>
                </div>
            </div>
        </div>
    )
}