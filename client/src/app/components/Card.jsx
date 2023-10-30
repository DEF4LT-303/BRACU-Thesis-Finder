const Card = ({ feed }) => {
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
          <div className='flex justify-end gap-2'>
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
      </div>
    </div>
  );
};

export default Card;
