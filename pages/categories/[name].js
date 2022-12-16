import { getAllCategoryIds, getCategories } from "../../lib/categories"
import { getPosts, getPostsByCategoryName } from "../../lib/posts"
import ArticleList from '../../components/home'
import Layout from '../../components/layout'

export async function getStaticPaths() {
    const paths = await getAllCategoryIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const allPosts = await getPosts()
    const posts = await getPostsByCategoryName(params.name)
    const categories = await getCategories()
    return {
        props: {
            posts,
            categories,
            allPosts
        }
    }
}

export default function Category({ posts, categories, allPosts }) {
    return (
        <Layout isList={true} posts={allPosts} categories={categories}>
            <ArticleList posts={posts} />
        </Layout>
    )
}
