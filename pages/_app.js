import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <footer>
      <ul>
        <li>
          Created by <a href="https://www.duncanritchie.co.uk" title="Duncan Ritchie’s website">Duncan Ritchie</a>
        </li>
        <li>
          Based on a tutorial from <a href="https://daily-dev-tips.com/posts/how-i-created-a-stack-guessing-tool-using-nextjs/">Chris Bongers</a>
        </li>
        <li>
          <a href="https://github.com/DuncanRitchie/nextjs-tech-stack-creator" title="Repo on GitHub">See the code</a>
        </li>
      </ul>
    </footer>
  </>)
}

export default MyApp
