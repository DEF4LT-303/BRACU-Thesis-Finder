import Card from '@/app/components/Card';

// TODO - Initial post is public [Phase 1]
// TODO - On required users, post become private after creating GC [Move to phase 2]
// TODO - Author can finalize physical meeting date by clicking the next button [Move to phase 3]
// TODO - Author can click finalize button after meeting to complete the post [Move to phase 4]
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
        },
        {
          name: 'Jane Doe',
          avatar: 'default.jpg'
        }
      ]
    }
  }
];

const Feeds = () => {
  return (
    <div className='bg-base-100 min-h-full'>
      <h2 className='text-3xl font-bold text-center my-5'>Feeds</h2>
      <div className='flex flex-col items-center md:px-10'>
        {feeds.map((feed) => (
          <Card feed={feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
