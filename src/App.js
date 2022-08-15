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
    <div className={cn({ 'pen-item': true, [className]: !!className })}>
      <div className='header'>
        <div className='title'>{title}</div>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href={`https://codepen.io/ryasan86/pen/${ id }`}
        >
          <svg focusable='false' viewBox='0 0 512 512' aria-hidden='true'>
            <g>
              <path
                fill='currentColor'
                id='XMLID_11_'
                d='M504.6,162L265.3,2.8c-5.6-3.7-13-3.7-18.6,0L7.4,162c-4.7,2.8-7.4,8.4-7.4,14v159.2c0,5.6,2.8,11.2,7.4,14
                   l239.2,160.1c2.8,1.9,6.5,2.8,9.3,2.8c3.7,0,6.5-0.9,9.3-2.8L504.6,350c4.7-2.8,7.4-8.4,7.4-14V175.9
                   C512,170.4,509.2,165.7,504.6,162L504.6,162z M256,314.6L167.6,256l88.4-59.6l88.4,59.6L256,314.6z M272.8,167.6V49.3l190.8,127.5
                   l-88.4,59.6L272.8,167.6L272.8,167.6z M239.2,167.6l-102.4,68l-88.4-59.6L239.2,48.4V167.6L239.2,167.6z M106.1,256l-71.7,47.5v-95
                   L106.1,256z M136.8,276.5l102.4,68v118.2L47.5,336.1L136.8,276.5L136.8,276.5z M272.8,344.4l102.4-68l88.4,59.6L272.8,462.7V344.4
                   L272.8,344.4z M405.9,256l71.7-47.5v95.9L405.9,256z'
              />
            </g>
          </svg>
        </a>
      </div>
      {isLoading && <div className='loader' />}
      <div className='iframe-container'>
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
        </iframe>
      </div>
      <div className='footer' />
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
            <img className='banner-image' src={CodeImage} alt='code' />
          </div>
        </header>
        <main className='content'>
          <ul className='progress-list'>
            {pens.map((submission, index) => (
              <li
                key={index}
                className={cn({
                  active: activePen && submission?.id === activePen?.id,
                  completed: submission,
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
            <button onClick={() => setActivePen(null)}>Reset Filter</button>
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
