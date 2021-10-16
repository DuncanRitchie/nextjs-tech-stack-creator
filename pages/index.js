import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  
  const redirect = async (event) => {
    event.preventDefault()
    const name = event.target.name.value
    router.push(name)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Get a tech-stack based on your name!</title>
        <meta name="description" content="Duncan Ritchie’s take on a tutorial by daily-dev-tips.com" />
        <link rel="icon" href="https://www.duncanritchie.co.uk/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Get a tech-stack based on your name!
        </h1>

        <p className={styles.description}>
          You’ve got a name? Let’s find your stack!
        </p>

        <form onSubmit={redirect}>
          <input name='name' required autoComplete='name' />
          <button>Get tech-stack</button>
        </form>
      </main>
    </div>
  )
}
