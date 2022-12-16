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
            <span className={styles.categoryArea}>
            {categories.map(({ name }) => (
                <div className={styles.category} key={name}>
                    <Link href={`/categories/${name}`}><a>{name}</a></Link>
                </div>
            )
            )}
            </span>
        </div>
    )
}