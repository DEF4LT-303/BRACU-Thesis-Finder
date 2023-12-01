import Phases from './Phases';

const Card = ({ feed }) => {
  const getDefaultAvatar = (index) => {
    return (
      <img
        src='default.jpg'
        alt={`Default Avatar ${index + 1}`}
        className='opacity-50 '
      />
    );
  };

  return (
    <div className='w-full'>
      <div
        key={feed.id}
        className='my-5 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800'
      >
        <div className='flex items-center justify-between flex-col sm:flex-row gap-3'>
          <span className='text-sm font-light text-gray-600 dark:text-gray-400'>
            {feed.createdAt}
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
          <p className='mt-2 text-gray-600 dark:text-gray-300'>{feed.desc}</p>
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
              src={feed.author.avatar}
              alt='avatar'
            />
            <a
              className='font-bold text-gray-700 cursor-pointer dark:text-gray-200'
              tabIndex='0'
              role='link'
            >
              {feed.author.name}
            </a>
          </div>
        </div>
        <div className='flex justify-center sm:justify-start items-center gap-2 mt-3'>
          <h2 className='text-xl font-bold '>Applied:</h2>
          <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
            {[...Array(4)].map((_, index) => (
              <div key={index} className='avatar'>
                <div className='w-10'>
                  {feed.applied.users[index] ? (
                    <img
                      src={feed.applied.users[index].avatar}
                      alt={`Avatar ${index + 1}`}
                    />
                  ) : (
                    getDefaultAvatar(index)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
