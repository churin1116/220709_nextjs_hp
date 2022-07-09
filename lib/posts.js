import fetch from 'node-fetch';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// 1 データを丸ごと取得
export async function getAllPostsData() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json(); // json化
    return posts;
}

// 2-1 Idをすべて取得
export async function getAllPostIds() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();

    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
                // 送るもの2: a,
                // 送るもの3: b,
                // 送るもの4: c,
            }
        }
    })
}

// 2-2 Idに応じてデータを取得
export async function getPostData(id) {
    const res = await fetch(new URL(`${apiUrl}/${id}/`));
    const post = await res.json();
    
    return post;
}