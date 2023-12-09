'use client';

import { createPost, updatePost } from '@/api/redux/apiCalls';
import {
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreatePostModal = ({ isOpen, onClose, data, action }) => {
  const [title, setTitle] = useState(data?.title || '');
  const [description, setDescription] = useState(data?.description || '');
  const [tags, setTags] = useState(data?.tags || []);
  const [newTags, setNewTags] = useState('');

  const dispatch = useDispatch();

  const handleAddTags = (e) => {
    e.preventDefault();
    if (newTags.trim() !== '') {
      setTags([...tags, newTags.trim()]);
      setNewTags('');
    }
  };

  const handleRemoveTags = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const handleClick = async () => {
    if (action === 'create') {
      const post = {
        title,
        description,
        tags
      };
      console.log(post);
      await createPost(post, dispatch);
      onClose();
    } else {
      const post = {
        title,
        description,
        tags
      };
      console.log(post);
      await updatePost(data._id, post, dispatch);
      onClose();
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement='center'
        isDismissable={false}
        classNames={{
          backdrop: 'backdrop-filter backdrop-blur-sm'
        }}
      >
        <ModalContent>
          <div className='bg-base-200 rounded-lg'>
            <ModalHeader className='flex flex-col gap-1 text-center text-2xl'>
              Create Post
            </ModalHeader>
            <ModalBody>
              <form className=''>
                <div className='flex flex-col gap-2'>
                  <div>
                    <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Title
                    </label>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      placeholder='Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className='input input-bordered w-full'
                    />
                  </div>

                  <div>
                    <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Description
                    </label>
                  </div>
                  <textarea
                    className='textarea textarea-bordered'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Tags
                  </label>
                  <input
                    type='text'
                    name='tags'
                    id='tags'
                    placeholder='Tags'
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTags(e);
                      }
                    }}
                    className='input input-bordered w-full'
                  />
                  <div
                    className={`${
                      tags.length === 0 ? 'hidden' : ''
                    } border-solid border-2 border-gray-300 dark:border-gray-700 rounded-[8px] p-2 mt-3`}
                  >
                    <div className='flex flex-wrap gap-2 relative top-0 left-0 ml-2'>
                      {tags.map((tag, index) => (
                        <Chip
                          key={index}
                          onClose={() => handleRemoveTags(index)}
                          className='bg-blue-500 text-white'
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <button className='btn btn-error btn-outline' onClick={onClose}>
                Close
              </button>
              <button className='btn btn-primary' onClick={handleClick}>
                Post
              </button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePostModal;
