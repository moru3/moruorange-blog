// 全てのカテゴリーを取得する。
// export function getCategories() {
//     return (
//         [
//             {
//                 id: 1,
//                 name: "HOGE"
//             },
//             {
//                 id: 2,
//                 name: "FUGA"
//             }
//         ]
//     )
// }

export async function getCategories() {
    const res = await fetch(`http://localhost:1337/categories`)
    const data = await res.json()
    return data
}

// 動的ページ用
export async function getAllCategoryIds() {
    const catetories = await getCategories()
    return catetories.map(category => {
        return {
            params: {
                id: String(category.id)
            }
        }
    })
}
