import Head from 'next/head'
import Link from 'next/link'

export default function ErrorPage() {
	return (<>
		<Head>
			<title>Error on Duncan’s tech-stack generator</title>
			<meta name="description" content="Error page for Duncan Ritchie’s take on a tutorial by daily-dev-tips.com" />
			<link rel="icon" href="https://www.duncanritchie.co.uk/favicon.ico" />
		</Head>

		<main>
			<h1>
				Error
			</h1>

			<p>
				<Link href='/'>
					<a>
						Go to the homepage
					</a>
				</Link>
			</p>
		</main>
  </>)
}
