const completed = {
  1: {
    id: 'rEgzmB',
    title: '001 Title',
  },
  2: {
    id: 'agxrqY',
    title: '002 Menu Icon',
  },
  4: {
    id: 'zVgXzy',
    title: '004 Loading',
  },
  6: {
    id: 'pMzMOa',
    title: '006 Profile',
  },
  7: {
    id: 'MNwwgO',
    title: '007 Notifications, Search, and Menu',
  },
  10: {
    id: 'abqNERB',
    title: '010 Watch',
  },
  41: {
    id: 'MWOBgzN',
    title: '041 Error Modal',
  },
  60: {
    id: 'OJzPKvo',
    title: '060 Blurry Overlay',
  },
  61: {
    id: 'OJzVvJV',
    title: '061 CSS Gradient Transition',
  },
  84: {
    id: 'vqMOYQ',
    title: '084 Book Cover',
  },
  14: {
    id: 'zYRBoEw',
    title: '014 Byciclopter'
  },
  44: {
    id: 'MWVPmgQ',
    title: '044 Twisted Pyramid'
  }
};

export default Array.from({ length: 100 }, (_, index) => completed[index + 1] || null);
