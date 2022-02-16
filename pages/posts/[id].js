import React, { useEffect } from 'react';

import Date from '../../components/date'
import styles from '../../styles/Post.module.css'

import { getPosts, getPostById, getAllPostsIds } from '../../lib/posts'
import Layout from '../../components/layout'
import { getCategories } from '../../lib/categories'
import { CategoryLinks } from '../../components/categories'
import PostContents from '../../components/post'
import Head from 'next/head'


export async function getStaticPaths() {
    const paths = await getAllPostsIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const posts = await getPosts()
    const post = await getPostById(params.id)
    const categories = await getCategories()
    return {
        props: {
            post,
            categories,
            posts
        }
    }
}

export default function Post({ post, categories, posts }) {
    useEffect(()=>{
        // scriptを読み込み
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        document.body.appendChild(script);
        // アンマウント時に一応scriptタグを消しておく
        return () => {
          document.body.removeChild(script);
        }
     }, [])
    return (
        <div>
            <Layout isList={false} categories={categories} posts={posts}>
                <Head>
                    <title>{post.title} - MORU&apos;S ORANGE BLOG</title>
                    <meta name="twitter:card" content="summary"></meta>
                    <meta name="twitter:creator" content="@moru3"></meta>
                    <meta property="og:title" content="`{post.title} - MORU&apos;S ORANGE BLOG`"/>
                    <meta property="og:description" content={post.contentHtml.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 50) + "...."}/>
                    <meta property="og:image" content="/apple-touch-icon.png" />
                </Head>
                <div className={styles.main}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.attributes}>
                        <div className={styles.date}><Date dateString={post.created_at} /></div>
                        <div className={styles.categories}><CategoryLinks categories={post.categories} /></div>
                    </div>
                    <div><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" data-text={post.title}>Tweet</a></div>
                    <blockquote className="twitter-tweet"></blockquote>
                    <PostContents contentHtml={post.contentHtml} />
                </div>
            </Layout>
        </div>
    )
}
