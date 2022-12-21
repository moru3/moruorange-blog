import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function BlogHeader({ title, contentHtml }) {
    const [siteTitle, setSiteTitle] = useState();

    useEffect(() => {
        if (title === undefined) {
            setSiteTitle("MORU'S ORANGE BLOG - もるみかんBLOG")
        } else {
            setSiteTitle(title + " - MORU'S ORANGE BLOG")
        }
    }, [title])

    return (
        <Head>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `
            }}/>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes" />
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:creator" content="@moru3"></meta>
            <link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" title="RSS2.0" />
            <link rel="alternate" type="application/atom+xml" href="/rss/atom.xml" title="Atom" />
            {title && <meta property="og:title" content={title + "- MORU&apos;S ORANGE BLOG"} />}
            {contentHtml && <meta property="og:description" content={contentHtml.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 50) + "...."} />}
        </Head>
    )
}