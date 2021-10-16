import Head from 'next/head'
import Link from 'next/link'
import getStack from "../lib/getStack"

export default function Name({ stack, name }) {
    return (<>
        <Head>
            <title>
                Tech-stack for {name}
            </title>
            <meta name='description' content={`Tech-stack based on the name ${name}`} />
            <link rel='icon' href='https://www.duncanritchie.co.uk/favicon.ico' />
        </Head>
        <main>
            <h1>
                Hey {name}, this is your stack!
            </h1>
            <ul>
                {stack.map((technology, index) => {
                    return <li key={index}>{technology}</li>
                })}
            </ul>
            <p>
                <Link href='/'>
                    <a>
                        Find another stack
                    </a>
                </Link>
            </p>
        </main>
    </>)
}

export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
    const { name } = params
    const stack = await getStack(name)
    return { props: { stack, name }}
}
