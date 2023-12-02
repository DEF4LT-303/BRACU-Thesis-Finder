const feeds = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl ultricies nunc, vitae aliqua',
    createdAt: 'Mar 20, 2023',
    tags: ['Design', 'Accessibility', 'UI', 'Testing'],
    phase: 3,
    isPublic: true,
    author: {
      name: 'John Doe',
      avatar:
        'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
    },
    applied: {
      users: [
        {
          name: 'Jane Doe',
          avatar:
            'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
        },
        {
          name: 'Jane Doe',
          avatar:
            'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl ultricies nunc, vitae aliqua',
    createdAt: 'Mar 20, 2023',
    tags: ['Design', 'Accessibility'],
    phase: 2,
    isPublic: true,
    author: {
      name: 'Jane Doe',
      avatar:
        'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
    },
    applied: {
      users: [
        {
          name: 'Jane Doe',
          avatar:
            'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
        },
        {
          name: 'Jane Doe',
          avatar:
            'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
        },
        {
          name: 'Jane Doe',
          avatar: '/default.jpg'
        }
      ]
    }
  }
];

export default feeds;
