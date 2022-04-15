import './App.css'
import BannerImage from './assets/code.png'
import submissions from './data'

function IFrame({title, id}) {
  return (
    <li className="project-item">
      <div className="project-item-title">{title}</div>
      <iframe
        className="project-item-iframe"
        scrolling="no"
        title={`100 Days CSS - ${title}`}
        src={`https://codepen.io/ryasan86/embed/${id}?default-tab=result&theme-id=dark`}
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true">
        See the Pen <a href={`https://codepen.io/ryasan86/pen/${id}`}>100 Days CSS - 001 Title</a>
        by Ryan Santos (<a href="https://codepen.io/ryasan86">@ryasan86</a>) on
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </li>
  )
}

function App() {
  return (
    <div className="app">
      <div className="inner">
        <header className="header">
          <div className="header-column">
            <h1 className="header-title">100 Days of CSS</h1>
            <p className="header-subtitle">
              Tracking my progress through the
              <a href="https://100dayscss.com/">"100 Days of CSS" challenge</a>. A fun set of
              exercises designed to level up you UI building game!
            </p>
          </div>
          <div className="header-column">
            <img className="header-image" src={BannerImage} alt="code" />
          </div>
        </header>
        <main className="main">
          <ul className="progress-list">
            {submissions.map((submission, index) => (
              <li className={`progress-item ${submission && 'completed'.trim()}`} key={index}>
                {index + 1}
              </li>
            ))}
          </ul>

          <ul className="project-list">
            {submissions.filter(Boolean).map((s, index) => (
              <IFrame key={index} title={s.title} id={s.id} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}

export default App
