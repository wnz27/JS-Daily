/* export default () => <div>Welcome to next.js!</div> */
import Head from 'next/head'
export default () =>
  <div>
    <Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    Hello world
    <p>scoped!</p>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
    <img src="/static/my-image.png" alt="my image" />
  </div>

