import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

const Blog = ({ posts }) => {
    return (
    <Layout title='Blog'>
      <ul className={styles.blog}>
        {posts && posts.map((post)=> <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
    );
};
export default Blog;

// pages内のみで使用可能な関数
// npm run dev -> リクエスト毎に実行される
// npm run build -> ビルド時に実行される
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: {
      posts,
      // 2,
      // 3,
      // 4,
    },
  };
}