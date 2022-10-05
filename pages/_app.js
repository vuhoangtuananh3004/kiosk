import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <div className=''>
        {getLayout(<Component {...pageProps} />)}
    </div>

  )

}

export default MyApp
