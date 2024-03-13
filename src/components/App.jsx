import { Navbar, Home, Test } from '.';
import './styles.css';
import { countries } from './Data';
function App() {

  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='carousel'>
            <Test images={countries} />
        </div>
      </div>
    </>
  )
}

export default App
