import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import Home from './pages/Home'
import Generate from './pages/Generate'
import DesignSystems from './pages/DesignSystems'
import Preview from './pages/Preview'
import Export from './pages/Export'
import BottomNav from './components/BottomNav'
import './styles/app.css'

export default function App() {
  useEffect(() => {
    WebApp.ready()
    WebApp.expand()
    WebApp.setHeaderColor('#0A0E1A')
    WebApp.setBackgroundColor('#0A0E1A')
  }, [])

  return (
    <div className="app">
      <div className="bg-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/systems" element={<DesignSystems />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}
