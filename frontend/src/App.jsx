import { useState } from 'react'
import Loader from './components/Loader'
import LoginPage from './pages/Login'
import GradientBarsPreview from './components/mvpblocks/gradient-bars-preview';
import { GradientBars } from './components/GradientBars';

function App() {

  const [loading, setLoading] = useState(true);

  useState(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <div className='h-screen flex justify-center items-center border-8'>
        {/* <LoginPage/> */}
        <Loader />
      </div>
    ) : (
      <div className="relative h-screen">
        
        {/* LoginPage as foreground content */}
        <div className="relative z-10">
          <LoginPage />
        </div>
      </div>
    )
  )
}

export default App
