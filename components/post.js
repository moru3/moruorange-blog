import React, { useEffect } from 'react';
import styles from '../styles/PostContents.module.css'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";
import Image from 'next/image'

export default function PostContents({ contentHtml }) {
    useEffect(() => {
        Prism.highlightAll()
      });
    return (
        <div>
            <div className={`${styles.html}`} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}