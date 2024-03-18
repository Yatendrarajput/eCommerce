import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {Toaster} from 'react-hot-toast';
const layout = ({children}) => {
  return (
    <div>
   <Header/>
   <main style={{minHeight:"70vh"}}>{children}
    <Toaster/>
   </main>
   <Footer/>
    </div>
  )
}

export default layout