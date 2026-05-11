import { useState } from 'react'
import './Generate.css'

const styles = ['Минимализм', 'Glassmorphism', 'Неоморфизм', 'Киберпанк', 'Природа', 'Ретро']
const moods  = ['Профессиональный', 'Игривый', 'Элегантный', 'Дерзкий', 'Спокойный']

export default function Generate() {
  const [selectedStyle, setSelectedStyle] = useState('')
  const [selectedMood,  setSelectedMood]  = useState('')
  const [prompt,        setPrompt]        = useState('')
  const [loading,       setLoading]       = useState(false)
  const [done,          setDone]          = useState(false)

  const handleGenerate = () => {
    if (!selectedStyle && !prompt) return
    setLoading(true)
    setDone(false)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 2000)
  }

  return (
    <div className="generate fade-in-up">
      <div className="page-header">
        <h2 className="page-title">✨ Генерация</h2>
        <p className="page-sub">Опиши свой проект — ИИ создаст систему</p>
      </div>

      <div className="section-card">
        <label className="section-label">Стиль</label>
        <div className="chips-wrap">
          {styles.map(s => (
            <button
              key={s}
              className={`chip ${selectedStyle === s ? 'active' : ''}`}
              onClick={() => setSelectedStyle(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="section-card">
        <label className="section-label">Настроение</label>
        <div className="chips-wrap">
          {moods.map(m => (
            <button
              key={m}
              className={`chip ${selectedMood === m ? 'active' : ''}`}
              onClick={() => setSelectedMood(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="section-card">
        <label className="section-label">Описание проекта</label>
        <textarea
          className="prompt-input"
          placeholder="Например: мобильное приложение для медитации в тёмных тонах..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={4}
        />
      </div>

      <button
        className={`btn-generate ${loading ? 'loading' : ''} ${done ? 'done' : ''}`}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? (
          <span className="spinner">⟳ Генерирую...</span>
        ) : done ? (
          '✅ Готово! Смотри в Системах'
        ) : (
          '✨ Сгенерировать систему'
        )}
      </button>

      {done && (
        <div className="success-card fade-in-up">
          <div className="success-icon">🎉</div>
          <h3>Дизайн-система создана!</h3>
          <p>Перейди во вкладку <strong>Системы</strong> чтобы посмотреть результат</p>
        </div>
      )}
    </div>
  )
}
