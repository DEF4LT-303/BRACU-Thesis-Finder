'use client';

import { deletePost, getPosts, updatePost } from '@/api/redux/apiCalls';
import CreatePostModal from '@/app/components/CreatePostModal';
import Phases from '@/app/components/Phases';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FeedPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];
  const feed = useSelector((state) =>
    state.posts.posts.find((post) => post._id === id)
  );
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const router = useRouter();

  const { isFetching, error } = useSelector((state) => state.posts);
  const [openModal, setOpenModal] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    getPosts(dispatch);
    setIsApplied(
      feed.applied.some((appliedUser) => appliedUser._id === user?._id)
    );
  }, []);

  const handleDelete = async () => {
    await deletePost(feed._id, dispatch);
    router.push('/feeds');
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleApply = async () => {
    try {
      if (isApplied) {
        const updatedPost = {
          ...feed,
          applied: feed.applied.filter(
            (appliedUser) => appliedUser._id.toString() !== user?._id
          )
        };
        await updatePost(feed._id, updatedPost, dispatch);
      } else {
        const updatedPost = {
          ...feed,
          applied: [...feed.applied, user]
        };
        await updatePost(feed._id, updatedPost, dispatch);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isFetching) {
    return (
      <div className='mx-10'>
        <div className='rounded shadow-md h-96 animate-pulse dark:bg-gray-800 mb-8 mx-5 my-5 py-4'>
          <div className='flex p-4 space-x-4 sm:px-8'>
            <div className='flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700'></div>
            <div className='flex-1 py-2 space-y-4'>
              <div className='w-full h-3 rounded dark:bg-gray-700'></div>
              <div className='w-5/6 h-3 rounded dark:bg-gray-700'></div>
            </div>
          </div>
          <div className='my-7 p-4 space-y-4 sm:px-8'>
            <div className='w-full h-4 rounded dark:bg-gray-700'></div>
            <div className='w-full h-4 rounded dark:bg-gray-700'></div>
            <div className='w-3/4 h-4 rounded dark:bg-gray-700'></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className='flex justify-center text-center'>Error</div>;
  }

  return (
    <div className='w-full px-5'>
      {openModal && (
        <CreatePostModal
          isOpen={openModal}
          onClose={handleCloseModal}
          data={feed}
        />
      )}
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
          <div className='flex flex-col sm:flex-row flex-wrap items-center justify-end gap-3'>
            <div className='flex flex-wrap justify-center gap-2'>
              {feed.tags &&
                feed.tags.map((tag) => (
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

            {user && user._id == feed?.author._id && (
              <div className='dropdown dropdown-left'>
                <button>
                  <svg
                    className='w-6 h-6 text-gray-800 dark:text-white pt-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 16 3'
                  >
                    <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
                  </svg>
                  <ul
                    tabIndex={0}
                    className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52'
                  >
                    <li>
                      <a onClick={handleOpenModal}>Edit</a>
                    </li>
                    <li>
                      <a
                        className='text-red-500 hover:text-red-500'
                        onClick={handleDelete}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </button>
              </div>
            )}
          </div>
        </div>

        <Phases timeline={feed.phase} />

        <div className='mt-2'>
          <div className='text-3xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 '>
            {feed.title}
          </div>
          <p className='mt-2 text-gray-600 dark:text-gray-300'>
            {feed.description}
          </p>
        </div>

        <div className='divider divider-primar'></div>

        <div className='flex flex-col sm:flex-row items-center justify-between mt-4'>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 mt-3'>
            <h2 className='text-xl font-bold '>Applied:</h2>
            <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
              {[...Array(4)].map((_, index) => (
                <div key={index} className='avatar'>
                  <div className='w-10'>
                    {feed.applied.length > 0 && feed.applied[index] ? (
                      <img
                        src={feed.applied[0].photo}
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
            {user && (
              <button
                onClick={handleApply}
                className='btn btn-sm btn-success my-6 sm:my-0'
                disabled={user?._id === feed.author._id ? true : false}
              >
                {feed.applied.some(
                  (appliedUser) => appliedUser._id === user?._id
                )
                  ? 'Leave'
                  : 'Apply'}
              </button>
            )}
          </div>

          <div className='flex items-center'>
            <img
              className='object-cover w-10 h-10 mx-4 rounded-full hidden  md:block'
              src={feed.author?.photo || '/default.jpg'}
              alt='avatar'
            />
            <a
              className='font-bold text-gray-700 cursor-pointer dark:text-gray-200'
              tabIndex='0'
              role='link'
            >
              {feed.author.firstName} {feed.author.lastName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
