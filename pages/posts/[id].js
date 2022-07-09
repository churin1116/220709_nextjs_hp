import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout';
import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

export default function Post({ post }) {
    console.log('log2 : ',post);
    if (!post) {
        return <div>Not found!</div>;
    }
    return (
        <Layout title={post.title}>
            <p className={styles.blog}>{'ID : '}{post.id}</p>
            <p className={styles.blog_title}>{post.title}</p>
            <p className={styles.blog_body}>{post.body}</p>

            <Link href='/blog-page'>
                <div className={styles.blog_back}>
                    <FontAwesomeIcon icon={faRss} />
                    <span>一覧に戻る</span>
                </div>
            </Link>
        </Layout>
    );
}

// getStaticPaths ：動的ルートのページで事前レンダリング（静的サイト生成）をする場合、静的ルート一覧を先に取得しておく　→それに合わせて静的サイト生成
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

export async function getStaticPaths() { // １，ID一覧を取得
    const paths = await getAllPostIds();

    return {
        paths,
        fallback: false, // id150番など、存在しなかった場合は404を返す
    };
}

export async function getStaticProps({params}) { // ２，Idの数だけ静的サイト生成　→　３，↑のPostがhtmlとして事前に（リクエスト毎/ビルド時）プレレンダリングされる
    //const res = await fetch(new URL(`${apiUrl}/${id}/`));
    //const post = await res.json();
    const post = await getPostData(params.id);

    return {
        props: {
            post,
            // 送るもの2,
            // 送るもの3,
            // 送るもの4,
        },
    };
}
