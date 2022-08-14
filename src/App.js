import { useState } from 'react';

import CodeImage from './code-image.png';
import pens from './data';
import './App.css';

const cn = entries =>
  Object.entries(entries)
    .filter(entry => entry[1])
    .map(entry => entry[0])
    .join(' ');

function IFrame ({ title, id, className }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn({ 'pen-item': true, [className]: true })}>
      <div className='title'>{title}</div>
      {isLoading && (
        <div className="loader" />
      )}
      <iframe
        loading='lazy'
        scrolling='no'
        frameBorder='no'
        allowtransparency='true'
        allowFullScreen={true}
        title={`100 Days CSS - ${ title }`}
        src={`https://codepen.io/ryasan86/embed/${ id }?default-tab=result&theme-id=dark`}
        onLoad={() => setIsLoading(false)}
      >
        See the Pen{' '}
        <a href={`https://codepen.io/ryasan86/pen/${ id }`}>
          100 Days CSS - {title}
        </a>
        by Ryan Santos (<a href='https://codepen.io/ryasan86'>@ryasan86</a>) on
        <a href='https://codepen.io'>
          CodePen
        </a>.
      </iframe>
    </div>
  );
}

function App () {
  const [activePen, setActivePen] = useState(null);

  return (
    <div className='app'>
      <div className='inner'>
        <header className='header'>
          <div className='hero'>
            <h1 className='title'>
              100 Days of <br /> CSS
            </h1>
            <p className='subtitle'>
              Tracking my progress through the
              <a href='https://100dayscss.com/'>"100 Days of CSS" challenge</a>.
              A fun set of exercises designed to level up you UI building game!
            </p>
          </div>
          <div className='hero'>
            <img className="banner-image" src={CodeImage} alt='code' />
          </div>
        </header>
        <main className='content'>
          <ul className='progress-list'>
            {pens.map((submission, index) => (
              <li
                key={index}
                className={cn({
                  'active': activePen && (submission?.id === activePen?.id),
                  'completed': submission,
                  'progress-item': true
                })}
                onClick={() => {
                  if (submission) setActivePen(submission);
                }}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <div className='reset'>
            <button onClick={() => setActivePen(null)}>
              Reset Filter
            </button>
          </div>
          {activePen ? (
            <IFrame
              className='active'
              title={activePen.title}
              id={activePen.id}
            />
          ) : (
            <ul className='pen-list'>
              {pens.filter(Boolean).map((s, index) => (
                <li key={index}>
                  <IFrame title={s.title} id={s.id} />
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
