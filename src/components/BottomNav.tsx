import { useNavigate, useLocation } from 'react-router-dom'
import './BottomNav.css'

const tabs = [
  { path: '/',          icon: '🏠', label: 'Главная' },
  { path: '/generate',  icon: '✨', label: 'Генерация' },
  { path: '/systems',   icon: '🎨', label: 'Системы' },
  { path: '/preview',   icon: '👁️', label: 'Превью' },
  { path: '/export',    icon: '📤', label: 'Экспорт' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <button
          key={tab.path}
          className={`nav-item ${location.pathname === tab.path ? 'active' : ''}`}
          onClick={() => navigate(tab.path)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
