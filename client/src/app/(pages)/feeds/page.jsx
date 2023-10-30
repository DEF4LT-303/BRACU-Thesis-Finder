import Card from '@/app/components/Card';

const feeds = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl ultricies nunc, vitae aliqua',
    createdAt: 'Mar 20, 2023',
    tags: ['Design', 'Accessibility'],
    author: {
      name: 'John Doe',
      avatar:
        'https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg'
    }
  }
];

const Feeds = () => {
  return (
    <div className='bg-base-100 min-h-full'>
      <div className='flex flex-col items-center py-10 px-4 md:px-10'>
        {feeds.map((feed) => (
          <Card feed={feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
