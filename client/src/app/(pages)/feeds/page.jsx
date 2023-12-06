'use client';

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
      <div class='fixed bottom-5 right-5'>
        <button class='p-0 w-16 h-16 bg-primary rounded-full hover:bg-blue-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
          <svg
            viewBox='0 0 20 20'
            enable-background='new 0 0 20 20'
            class='w-6 h-6 inline-block'
          >
            <path
              fill='#FFFFFF'
              d='M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Feeds;
