import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home fade-in-up">
      <div className="home-header">
        <div className="logo-wrap">
          <div className="logo-icon">✦</div>
          <div>
            <h1 className="logo-title">Mira Design</h1>
            <p className="logo-sub">AI Design System</p>
          </div>
        </div>
        <div className="version-badge">v1.0</div>
      </div>

      <div className="hero-card">
        <div className="hero-glow" />
        <h2 className="hero-title">Создавай дизайн-системы с помощью ИИ</h2>
        <p className="hero-desc">
          Генерируй цвета, типографику, компоненты и экспортируй готовый код за секунды
        </p>
        <button className="btn-primary" onClick={() => navigate('/generate')}>
          Начать генерацию ✨
        </button>
      </div>

      <div className="features-grid">
        {[
          { icon: '🎨', title: 'Цвета', desc: 'Умные палитры с учётом контраста' },
          { icon: '✍️', title: 'Типографика', desc: 'Шрифты и размеры под любой стиль' },
          { icon: '🧩', title: 'Компоненты', desc: 'Готовые UI-блоки с кодом' },
          { icon: '📤', title: 'Экспорт', desc: 'CSS, JSON, Figma-токены' },
        ].map((f, i) => (
          <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="stats-row">
        {[
          { value: '50+', label: 'стилей' },
          { value: '∞',   label: 'вариантов' },
          { value: '1с',  label: 'генерация' },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
