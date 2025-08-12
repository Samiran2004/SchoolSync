import { useState } from 'react'
import Loader from './components/Loader'
import LoginPage from './pages/Login'
import GradientBarsPreview from './components/mvpblocks/gradient-bars-preview';
import { GradientBars } from './components/GradientBars';
import StudentSignup from './pages/auth/SignupStudent';
import CircularText from './components/CircularText';

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
        {/* <CircularText/> */}
      </div>
    ) : (
      <div className="flex h-screen items-center justify-center bg-white">
        <CircularText
          text="SchoolSync • "
          spinDuration={20}
          onHover="speedUp"
          className="text-black"
        />
      </div>
    )
  )
}

export default App;
