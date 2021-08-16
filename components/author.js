import Image from 'next/image'
import twitterIcon from '../public/twitter-icon-circle.gif'
import twitterMark from '../public/twitter.png'
import youtubeMark from '../public/youtube.png'

import styles from '../styles/Author.module.css'

export default function Author() {
    return (
        <div>
            <div className={styles.iconImage}><a href="https://twitter.com/moru3" target="_blank" rel="noreferrer"><Image src={twitterIcon} width={60} height={60} alt={"author icon"} loading="lazy"></Image></a></div>
            <div className={styles.explain}>
                <li className={styles.name}>IwaKen (moru3)</li>
                <li className={styles.explainBody}>札幌在住Webエンジニア。色々書いていきます。Tech系、ゲーム、映画、Youtubeなど多岐にわたって触れていきます。</li>
            </div>
            <div className={styles.socialImages}>
                <li className={styles.socialImage}><a href="https://twitter.com/moru3" target="_blank" rel="noreferrer"><Image src={twitterMark} width={20} height={16} alt={"twitter mark"} loading="lazy"></Image></a></li>
                <li className={styles.socialImage}><a href="https://www.youtube.com/channel/UCK_oaTkd_YxkWt1FLgIVf0Q" target="_blank" rel="noreferrer"><Image src={youtubeMark} width={20} height={16} alt={"youtube mark"} loading="lazy"></Image></a></li>
            </div>
        </div>
    )
}