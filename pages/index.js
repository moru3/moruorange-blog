import { getCategories } from '../lib/categories'
import { getPostsWithHtml } from '../lib/posts'
import { generatedRssFeed } from '../lib/rss'
import ArticleList from '../components/home'
import Layout from '../components/layout'

export async function getStaticProps() {
  const posts = await getPostsWithHtml()
  const categories = await getCategories()
  await generatedRssFeed()
  return {
    props: {
      posts,
      categories
    }
  }
}

export default function Home({ posts, categories }) {
  return (
    <Layout isList={true} posts={posts} categories={categories}>
      <ArticleList posts={posts}/>
    </Layout>
  )
}
