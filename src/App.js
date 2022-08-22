import { useState } from 'react';

import CodeImage from './assets/code-image.png';
import IFrame from './components/iframe';
import cn from './utils/cn';
import completedPens from './fixtures/data';
import './styles/app.css';

const pens = Array.from({ length: 100 }, function (_, index) {
  const key = (index + 1).toString();
  const pen = completedPens[key];

  if (!pen) return null;

  return {
    id: pen.id,
    title: `${ '0'.repeat(3 - (key).toString().length) }${ key } ${ pen.title }`,
  };
});

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
            {pens.map((pen, index) => (
              <li
                key={index}
                className={cn({
                  'active': activePen && pen?.id === activePen?.id,
                  'completed': !!pen,
                  'progress-item': true
                })}
                onClick={() => pen && setActivePen(pen)}
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
              {...activePen}
            />
          ) : (
            <ul className='pen-list'>
              {pens.filter(Boolean).map(pen => (
                <li key={pen.id}>
                  <IFrame {...pen} />
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div >
  );
}

export default App;
