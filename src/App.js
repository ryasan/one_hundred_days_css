import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import CodeImage from './code-image.png';
import pens from './data';

const cn = (entries) =>
  Object.entries(entries)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(' ');

function IFrame ({ title, id, classNames }) {
  return (
    <li className={cn({ 'pen-item': true, ...classNames })}>
      <div className="pen-item-title">{title}</div>
      <iframe
        loading="lazy"
        scrolling="no"
        frameBorder="no"
        allowFullScreen={true}
        allowtransparency="true"
        className="pen-item-iframe"
        src={`https://codepen.io/ryasan86/embed/${ id }?default-tab=result&theme-id=dark`}
        title={`100 Days CSS - ${ title }`}>
        See the Pen <a href={`https://codepen.io/ryasan86/pen/${ id }`}>100 Days CSS - 001 Title</a>
        by Ryan Santos (<a href="https://codepen.io/ryasan86">@ryasan86</a>) on
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </li>
  );
}

IFrame.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  classNames: PropTypes.object,
};

function App () {
  const [activePen, setActivePen] = useState(null);

  return (
    <div className="app">
      <div className="inner">
        <header className="header">
          <div className="header-column">
            <h1 className="header-title">100 Days of <br /> CSS</h1>
            <p className="header-subtitle">
              Tracking my progress through the
              <a href="https://100dayscss.com/">"100 Days of CSS" challenge</a>. A fun set of
              exercises designed to level up you UI building game!
            </p>
          </div>
          <div className="header-column">
            <img className="header-image" src={CodeImage} alt="code" />
          </div>
        </header>
        <main className="main">
          <ul className="progress-list">
            {pens.map((submission, index) => (
              <li
                key={index}
                className={cn({
                  'active': activePen && submission?.id === activePen?.id,
                  'completed': submission,
                  'progress-item': true,
                })}
                onClick={() => {
                  if (submission) setActivePen(submission);
                }}>
                {index + 1}
              </li>
            ))}
          </ul>

          <div className="reset">
            <button className="reset-button" onClick={() => setActivePen(null)}>
              Reset Filter
            </button>
          </div>

          {activePen ? (
            <IFrame title={activePen.title} id={activePen.id} classNames={{ active: true }} />
          ) : (
            <ul className="pen-list">
              {pens.filter(Boolean).map((s, index) => (
                <IFrame key={index} title={s.title} id={s.id} />
              ))}
            </ul>
          )}
        </main>
      </div>
    </div >
  );
}

export default App;
