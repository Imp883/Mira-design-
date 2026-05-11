import './Systems.css'

const systems = [
  {
    id: 1,
    name: 'Telegram Fusion',
    style: 'Glassmorphism',
    colors: ['#2AABEE', '#7B61FF', '#00D4FF'],
    date: 'Сегодня',
  },
  {
    id: 2,
    name: 'Dark Minimal',
    style: 'Минимализм',
    colors: ['#FFFFFF', '#888888', '#333333'],
    date: 'Вчера',
  },
  {
    id: 3,
    name: 'Cyber Neon',
    style: 'Киберпанк',
    colors: ['#FF0080', '#00FF88', '#FFD700'],
    date: '10 мая',
  },
]

export default function Systems() {
  return (
    <div className="systems fade-in-up">
      <div className="page-header">
        <h2 className="page-title">🎨 Системы</h2>
        <p className="page-sub">Твои сохранённые дизайн-системы</p>
      </div>

      <div className="systems-list">
        {systems.map((sys, i) => (
          <div
            className="system-card"
            key={sys.id}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="system-colors">
              {sys.colors.map((c, j) => (
                <div
                  key={j}
                  className="color-dot"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="system-info">
              <h3 className="system-name">{sys.name}</h3>
              <p className="system-style">{sys.style}</p>
            </div>
            <div className="system-meta">
              <span className="system-date">{sys.date}</span>
              <button className="system-btn">→</button>
            </div>
          </div>
        ))}
      </div>

      <div className="empty-hint">
        <p>✨ Генерируй новые системы во вкладке <strong>Генерация</strong></p>
      </div>
    </div>
  )
}
