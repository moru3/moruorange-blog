import Link from 'next/link'
import styles from '../styles/Categories.module.css'

export default function Categories({ categories }) {
    return (
        <div>
            <div className={styles.title}>Categories</div>
            <div className={styles.list}>
                <CategoryLinks categories={categories} />
            </div>
        </div>
    )
}

export function CategoryLinks({categories}) {
    return (
        <div className={styles.list}>
            <p className={styles.categoryArea}>
            {categories.map(({ id, name }) => (
                <div className={styles.category} key={id}>
                    <Link href={`/categories/${id}`}><a>{name}</a></Link>
                </div>
            )
            )}
            </p>
        </div>
    )
}