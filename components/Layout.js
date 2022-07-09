import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// children export先の中身全部, title はhtmlと同じtitle
export default function Layout({ children, title = "HP by Next.js" }) { 
    return (
    <div className={styles.contents}>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <nav className={styles.nav}>
                <div className={styles.inner}>
                    <div className={styles.inner2}>
                        <Link href='/'>
                            <a className={styles.nav_link}>Home</a>
                        </Link>
                        <Link href='/blog-page'>
                            <a className={styles.nav_link}>Blog</a>
                        </Link>
                        <Link href='/contact-page'>
                            <a className={styles.nav_link}>Contact</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
    </div>
    )
}