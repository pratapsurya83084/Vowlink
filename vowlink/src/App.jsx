

import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
//import all component and make route in this coponent
import Home from './components/home/Home'
import About  from './components/about/About'
import Contact from './components/contact/Contact'
import Frachise from './components/franchise/Franchise'
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/franchise' element={<Frachise/>}/>
      </Routes>
    </Router>
  )
}

export default App
