import { Navbar, Home, Test, MovieList, Footer, End } from '.';
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
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <Footer />
        <End />
      </div>
    </>
  )
}

export default App
