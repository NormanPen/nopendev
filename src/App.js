import {Route, Routes} from 'react-router-dom';

import Home from './sites/Home';
import Social from './components/Social';
import Header from './components/Header';
import Footer from './components/Footer';
import Imprint from './sites/Imprint';

function App() {
    return (
        <div className='dark:bg-black bg-nope-flieder '>
            <div className='max-w-screen-md mx-auto'>
                <Header />
                <div className='px-6 bg-nope-flieder-dark dark:bg-nope-grey-dark pt-6 '>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/impressum' element={<Imprint />} />
                        <Route path='/imprint' element={<Imprint />} />
                    </Routes>
                    <Social />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
