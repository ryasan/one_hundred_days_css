import { useState } from 'react'

import CodePenIcon from './codepen-icon';
import cn from '../utils/cn';

export default function IFrame ({ title, id, className }) {
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
          <CodePenIcon />
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
