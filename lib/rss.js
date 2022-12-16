// こちらのサイトを参考にさせていただきました。ありがとうございます。 -> https://fwywd.com/tech/next-feed-rss-atom
import fs from 'fs';
import { Feed } from 'feed';
import {getPostsWithHtml} from './posts'
import { parseISO } from 'date-fns'

export async function generatedRssFeed() {
  const baseUrl = 'https://blog.moruorange.com';
  const date = new Date();
  const author = {
    name: 'IwaKen',
    link: 'https://blog.moruorange.com',
  };

  const feed = new Feed({
    title: "MORU'S ORANGE BLOG",
    description: '色々書いていきます。Tech系、ゲーム、映画、Youtubeなど多岐にわたって触れていきます。',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author: author,
  });

  const posts = await getPostsWithHtml();
  posts.forEach((post) => {
    const url = `${baseUrl}/posts/${post.id}`;
    feed.addItem({
      title: post.title,
      description: post.description,
      id: url,
      link: url,
      content: post.contentHtml.slice(0, 250),
      date: parseISO(post.createdDate),
    });
  });
  
  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
}
