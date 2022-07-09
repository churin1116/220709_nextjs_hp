import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Post = ({ post }) => {
    return (
        <div>
            <span>{post.id}</span>
            {' : '}
            <Link href={`/posts/${post.id}`}>
                <span className={styles.posts}>{post.title}</span>
            </Link>
        </div>
    );
}

export default Post;
