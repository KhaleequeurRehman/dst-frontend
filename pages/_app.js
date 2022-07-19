import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { CommonFlagContext} from "../components/contexts/commonContext"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [flagVal, setFlag] = useState({
    flag: false,
    setFlagFunc: (newFlagVal) => {
      setFlag({...flagVal,flag: newFlagVal})
    },
  })
  return (
          <>
            <CommonFlagContext.Provider value={flagVal}>
              <Component {...pageProps} /> 
            </CommonFlagContext.Provider>
          </>
  )
}

export default MyApp
