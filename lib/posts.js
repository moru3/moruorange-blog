import { parseISO } from 'date-fns'

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

// 全ての投稿を取得する。
// TODO API経由で取得するように変更する
// export function getPosts() {
//     return (
//         [
//             {
//                 id: 1,
//                 title: "これはタイトルですこれはタイトルですこれはタイトルですこれはタイトルですこれはタイトルですこれはタイトルです",
//                 body: "ボディです。ながいです。ながいです。ながいです。\nながいです。ながいです。ながいです。ながいです。ながいです。\nながいです。ながいです。ながいです。ながいです。ながいです。\nながいです。ながいです。ながいです。ながいです。ながいです。\n",
//                 created_at: "2021-07-13 12:23:34",
//                 categories: [
//                     { id: 1, name: "HOGE" }
//                 ]
//             },
//             {
//                 id: 2,
//                 title: "これはタイトルです222222",
//                 body: "# ボディです。\n **ながいです。ほげほげ**\n2222222222222222222",
//                 created_at: "2021-07-13 12:23:35",
//                 categories: [
//                     { id: 1, name: "HOGE" }
//                 ]
//             },
//             {
//                 id: 3,
//                 title: "これはタイトルです33333",
//                 body: "ボディです。ながいです。33333333333333333333333333333",
//                 created_at: "2021-07-13 12:23:36",
//                 categories: [
//                     { id: 2, name: "FUGA" }
//                 ]
//             }
//         ]
//     )
// }

export async function getPosts() {
    const res = await fetch(`http://localhost:3333/posts`)
    // const res = await fetch(`http://localhost:1337/articles`)
    const data = await res.json()
    // 日付降順ソート
    data.sort(compare)
    return data
}

function compare(a, b) {
    var r = 0;
    const createDateA = parseISO(a.createdDate).getTime()
    const createDateB = parseISO(b.createdDate).getTime()
    if (createDateA >= createDateB) { r = -1; }
    else if (createDateA < createDateB) { r = 1; }
    return r;
}

export async function getPostsWithHtml() {
    const posts = await getPosts()
    const withHtml = await Promise.all(posts.map(post => {
        return postWithHtml(post)
    }))
    return withHtml
}

async function postWithHtml(post) {
    // const processedContent = await remark()
    //     .use(html)
    //     .process(post.body)
    // const contentHtml = processedContent.toString()

    console.log(post)
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(post.body);
    const contentHtml = processedContent.value.toString()
    // console.warn(contentHtml)
    return {
        ...post, contentHtml
    }
}

// IDを指定して対象のPOSTを取得する
// markdown記述のbodyからhtmlを作成してくっ付ける
export async function getPostById(id) {
    const posts = await getPostsWithHtml()
    const post = posts.filter(post => post.id == id)[0]
    return post
}

// カテゴリーを指定して対象のPOSTsを取得する
export async function getPostsByCategoryName(name) {
    const posts = await getPostsWithHtml()
    const categoryPosts = posts.filter(post => post.categories != null).filter(
        post => post.categories.filter(category => category.name == name).length >= 1)
    return categoryPosts
}

// 動的ページ用
export async function getAllPostsIds() {
    const posts = await getPosts()
    return posts.map(post => {
        return {
            params: {
                id: String(post.id)
            }
        }
    })
}
