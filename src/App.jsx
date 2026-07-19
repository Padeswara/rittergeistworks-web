import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer'
import Hero from './components/Section/Hero'

function App() {
    return (
        <div className='w-full h-min-screen bg-teal-900'>
            <Navbar />
            <Hero />
            {/* <Footer /> */}
        </div>
    )
}

export default App;