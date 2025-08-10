import { useState } from 'react'
import Loader from './components/Loader'
import LoginPage from './pages/Login'

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
      <LoginPage />
    )
  )
}

export default App
