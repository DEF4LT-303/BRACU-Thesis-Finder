import Link from 'next/link';
import Phases from './Phases';

const Card = ({ feed }) => {
  const loading = false;

  if (loading) {
    return (
      <div className='py-4 rounded shadow-md w-full h-80 animate-pulse dark:bg-gray-800 mb-8'>
        <div className='flex p-4 space-x-4 sm:px-8'>
          <div className='flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700'></div>
          <div className='flex-1 py-2 space-y-4'>
            <div className='w-full h-3 rounded dark:bg-gray-700'></div>
            <div className='w-5/6 h-3 rounded dark:bg-gray-700'></div>
          </div>
        </div>
        <div className='p-4 space-y-4 sm:px-8'>
          <div className='w-full h-4 rounded dark:bg-gray-700'></div>
          <div className='w-full h-4 rounded dark:bg-gray-700'></div>
          <div className='w-3/4 h-4 rounded dark:bg-gray-700'></div>
        </div>
      </div>
    );
  }

  if (!feed) {
    return (
      <div className='py-4 rounded shadow-md w-full h-80 animate-pulse dark:bg-gray-800 mb-8'>
        <div className='flex p-4 space-x-4 sm:px-8'>
          <div className='flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700'></div>
          <div className='flex-1 py-2 space-y-4'>
            <div className='w-full h-3 rounded dark:bg-gray-700'></div>
            <div className='w-5/6 h-3 rounded dark:bg-gray-700'></div>
          </div>
        </div>
        <div className='p-4 space-y-4 sm:px-8'>
          <div className='w-full h-4 rounded dark:bg-gray-700'></div>
          <div className='w-full h-4 rounded dark:bg-gray-700'></div>
          <div className='w-3/4 h-4 rounded dark:bg-gray-700'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <Link href={`/feeds/${feed._id}`}>
        <div
          key={feed._id}
          className='my-5 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800'
        >
          <div className='flex items-center justify-between flex-col sm:flex-row gap-3'>
            <span className='text-sm font-light text-gray-600 dark:text-gray-400'>
              {new Date(feed.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <div className='flex flex-wrap justify-center gap-2'>
              {feed.tags.map((tag) => (
                <a
                  key={tag}
                  className='px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
                  tabIndex='0'
                  role='button'
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          <Phases timeline={feed.phase} />

          <div className='mt-2'>
            <a
              href='#'
              className='text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
              tabIndex='0'
              role='link'
            >
              {feed.title}
            </a>
            <p className='mt-2 text-gray-600 dark:text-gray-300'>
              {feed.description}
            </p>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <a
              href='#'
              className='text-blue-600 dark:text-blue-400 hover:underline'
              tabIndex='0'
              role='link'
            >
              Read more
            </a>

            <div className='flex items-center'>
              <img
                className='object-cover w-10 h-10 mx-4 rounded-full hidden lg:block md:block'
                src={feed.author?.photo || '/default.jpg'}
                alt='avatar'
              />
              <a
                className='font-bold text-gray-700 cursor-pointer dark:text-gray-200'
                tabIndex='0'
                role='link'
              >
                {feed.author?.firstName} {feed.author?.lastName}
              </a>
            </div>
          </div>
          <div className='flex justify-center sm:justify-start items-center gap-2 mt-3'>
            <h2 className='text-xl font-bold '>Applied:</h2>
            <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
              {[...Array(4)].map((_, index) => (
                <div key={index} className='avatar'>
                  <div className='w-10'>
                    {feed.applied.users && feed.applied.users[index] ? (
                      <img
                        src={feed.applied.users[index].avatar}
                        alt={`Avatar ${index + 1}`}
                      />
                    ) : (
                      <img
                        src='/default.jpg'
                        alt={`Default Avatar ${index + 1}`}
                        className='opacity-50'
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
