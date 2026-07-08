import { useState, useEffect } from 'react';

import CodeImage from './assets/code-image.png';
import IFrame from './components/iframe';
import cn from './utils/cn';
import completedPens from './fixtures/data';
import './styles/app.css';

const CHALLENGE_TITLES = {
  1: 'Title',
  2: 'Menu Icon',
  3: 'The Pyramid',
  4: 'Loading',
  5: 'Statistics',
  6: 'Profile',
  7: 'Notifications, Search, and Menu',
  8: 'Metaballs',
  9: 'Rainy Night',
  10: 'Watch',
  11: 'Walk with Me',
  12: 'Vocab',
  13: 'Byciclopter',
  14: 'Byciclopter',
  15: 'Upload',
  16: 'Blobby',
  17: 'Shy Penrose',
  18: 'Flexie',
  19: 'Color Slider',
  20: 'Mail It',
  21: 'Pac-Man',
  22: 'Fitness Tracker',
  23: 'Animated Typography',
  24: 'Button',
  25: 'Map Marker',
  26: 'Motivational Modal',
  27: 'CheckList',
  28: 'RingaRing',
  29: 'Search Field',
  30: 'Random Line',
  31: 'Pendulum Wave',
  32: 'Counter',
  33: 'Sunny Day',
  34: 'Hello',
  35: 'Loading Circle',
  36: 'Tabs',
  37: 'Carousel',
  38: 'Logo Transition',
  39: 'Menu Toggle',
  40: 'Gallery',
  41: 'Error Modal',
  42: 'Stars',
  43: 'Lightbulb',
  44: 'Twisted Pyramid',
  45: 'Hover Me',
  46: 'Iris Circles',
  47: 'Pixel Art',
  48: "3D Rubik's Cube",
  49: 'CSS Follow',
  50: 'Easter Egg',
  51: 'CSS Counter',
  52: 'Dot Wave',
  53: 'Range Slider',
  54: 'Waves',
  55: 'Thermostat',
  56: 'Flower',
  57: 'Icosahedron',
  58: '3D Sphere',
  59: 'Slice Transition',
  60: 'Blurry Overlay',
  61: 'CSS Gradient Transition',
  62: 'Price Table',
  63: 'Hypnotic Ring',
  64: 'Button',
  65: 'Ellipses Animation',
  66: 'Sparkle Checkbox',
  67: '3D Parasol',
  68: 'Recording',
  69: 'Eye',
  70: 'Calendar Days',
  71: 'Morse Code Keyboard',
  72: 'The Rings',
  73: 'Word Carousel',
  74: 'Pagination',
  75: 'Spinning Discs',
  76: 'Reveal Key',
  77: 'Motion Blur',
  78: 'Hover Shadow',
  79: 'Lines Animation',
  80: 'Flexbox Accordion',
  81: 'Jumping Ball',
  82: 'Action Button',
  83: 'Warp Drive',
  84: 'Book Cover',
  85: "It's something",
  86: "Newton's Cradle",
  87: 'Ruby',
  88: 'Candle',
  89: 'Animated Pattern',
  90: 'Mouse Trap',
  91: 'Cube Loader',
  92: 'Dancing Points',
  93: 'Padlock',
  94: 'Tree',
  95: 'Pig',
  96: 'Jumping Square',
  97: 'Puppet',
  98: 'Plopp',
  99: 'Circle-Square',
  100: 'Neon Lights'
};

function App () {
  const [activePenIds, setActivePenIds] = useState([]);
  const [pens, setPens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchPens = async () => {
      try {
        const response = await fetch('https://100dayscss.com/api/users/get.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: 'ryasan86' }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          if (data && data.ok && data.user && Array.isArray(data.user.pens)) {
            const apiPens = data.user.pens;
            const pensMap = {};
            apiPens.forEach(pen => {
              let dayNumber = pen.dayIndex + 1;
              // Special override for vqMOYQ (Book Cover) to map it to Day 84 instead of Day 8
              if (pen.penId === 'vqMOYQ') {
                dayNumber = 84;
              }
              pensMap[dayNumber] = {
                id: pen.penId,
                title: CHALLENGE_TITLES[dayNumber] || `Day ${dayNumber}`
              };
            });

            const formattedPens = Array.from({ length: 100 }, function (_, index) {
              const key = index + 1;
              const pen = pensMap[key];

              if (!pen) return null;

              return {
                id: pen.id,
                title: `${ '0'.repeat(3 - key.toString().length) }${ key } ${ pen.title }`,
              };
            });

            setPens(formattedPens);
          } else {
            throw new Error('Invalid API response format');
          }
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to fetch pens from API, falling back to local data:', err);
        if (isMounted) {
          // Fallback to local data
          const localPens = Array.from({ length: 100 }, function (_, index) {
            const key = (index + 1).toString();
            const pen = completedPens[key];

            if (!pen) return null;

            return {
              id: pen.id,
              title: `${ '0'.repeat(3 - key.length) }${ key } ${ pen.title }`,
            };
          });
          setPens(localPens);
          setLoading(false);
        }
      }
    };

    fetchPens();

    return () => {
      isMounted = false;
    };
  }, []);

  const activePens = pens.filter(Boolean).filter(pen => activePenIds.includes(pen.id));

  const handlePenClick = (pen) => {
    setActivePenIds(prev => {
      if (prev.includes(pen.id)) {
        return prev.filter(id => id !== pen.id);
      } else {
        return [...prev, pen.id];
      }
    });
  };

  return (
    <div className='app'>
      <div className='inner'>
        <header className='header'>
          <div className='hero'>
            <h1 className='title'>
              100 Days of <br /> CSS
            </h1>
            <p className='subtitle'>
              Tracking my progress through the&nbsp;
              <a href='https://100dayscss.com/'>"100 Days of CSS" challenge</a>,
              A fun set of exercises designed to level up your CSS skills!
            </p>
          </div>
          <div className='hero'>
            <img className='banner-image' src={CodeImage} alt='code' />
          </div>
        </header>
        <main className='content'>
          {loading ? (
            <div style={{ position: 'relative', minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='loader' />
            </div>
          ) : (
            <>
              <ul className='progress-list'>
                {pens.map((pen, index) => (
                  <li
                    key={index}
                    className={cn({
                      'active': pen && activePenIds.includes(pen.id),
                      'completed': !!pen,
                      'progress-item': true
                    })}
                    onClick={() => pen && handlePenClick(pen)}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
              <div className='reset'>
                <button onClick={() => setActivePenIds([])}>Clear All</button>
              </div>
              {activePens.length === 1 ? (
                <IFrame
                  className='active'
                  {...activePens[0]}
                />
              ) : (
                <ul className='pen-list'>
                  {(activePens.length > 0 ? activePens : pens.filter(Boolean)).map(pen => (
                    <li key={pen.id}>
                      <IFrame {...pen} />
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </main>
      </div>
    </div >
  );
}

export default App;
