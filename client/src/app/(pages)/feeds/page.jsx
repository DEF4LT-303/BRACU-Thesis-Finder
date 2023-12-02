import Card from '@/app/components/Card';
import feeds from '@/data';

// TODO - Initial post is public [Phase 1]
// TODO - On required users, post become private after creating GC [Move to phase 2]
// TODO - Author can finalize physical meeting date by clicking the next button [Move to phase 3]
// TODO - Author can click finalize button after meeting to complete the post [Move to phase 4]

const Feeds = () => {
  if (feeds.length === 0) {
    return (
      <div className='bg-base-100 min-h-full'>
        <h2 className='text-3xl font-bold text-center my-5'>Feeds</h2>
        <h3 className='text-xl font-bold text-center'>Nothing to show...</h3>
      </div>
    );
  }

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
