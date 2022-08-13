const completed = {
  0: {
    id: 'rEgzmB',
    title: '001 Title',
  },
  1: {
    id: 'agxrqY',
    title: '002 Menu Icon',
  },
  3: {
    id: 'zVgXzy',
    title: '004 Loading',
  },
  5: {
    id: 'pMzMOa',
    title: '006 Profile',
  },
  6: {
    id: 'MNwwgO',
    title: '007 Notifications, Search, and Menu',
  },
  9: {
    id: 'abqNERB',
    title: '010 Watch',
  },
  40: {
    id: 'MWOBgzN',
    title: '041 Error Modal',
  },
  59: {
    id: 'OJzPKvo',
    title: '060 Blurry Overlay',
  },
  60: {
    id: 'OJzVvJV',
    title: '061 CSS Gradient Transition',
  },
  83: {
    id: 'vqMOYQ',
    title: '084 Book Cover',
  }
};

export default Array.from({ length: 100 }, (_, index) => completed[index] || null);
