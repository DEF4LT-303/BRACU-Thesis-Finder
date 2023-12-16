'use client';

import { updateUser } from '@/api/redux/apiCalls';
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

const EditProfileModal = ({ isOpen, handleCloseModal, data }) => {
  const [newSkill, setNewSkill] = useState('');
  const [technicalSkills, setTechnicalSkills] = useState(
    data?.technicalSkills || []
  );
  const [firstName, setFirstName] = useState(data?.firstName || '');
  const [lastName, setLastName] = useState(data?.lastName || '');
  const [about, setAbout] = useState(data?.about || '');
  const [github, setGithub] = useState(data?.github || '');
  const [linkedin, setLinkedin] = useState(data?.linkedin || '');
  const [photo, setPhoto] = useState(data?.photo || '');

  const dispatch = useDispatch();

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== '') {
      setTechnicalSkills([...technicalSkills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...technicalSkills];
    updatedSkills.splice(index, 1);
    setTechnicalSkills(updatedSkills);
  };

  const handleClick = async () => {
    try {
      const updatedUser = {
        firstName: firstName,
        lastName: lastName,
        about: about,
        photo: photo,
        githubLink: github,
        linkedInLink: linkedin,
        technicalSkills: technicalSkills,
        accessToken: data.accessToken
      };

      await updateUser(data._id, updatedUser, dispatch);
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        placement='center'
        isDismissable={false}
        classNames={{
          backdrop: 'backdrop-filter backdrop-blur-sm'
        }}
      >
        <ModalContent>
          <div className='bg-base-200 rounded-lg'>
            <ModalHeader className='flex flex-col gap-1 text-center text-2xl'>
              Edit profile
            </ModalHeader>
            <ModalBody>
              <form className=''>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-2'>
                    <div>
                      <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                        First Name
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        id='firstname'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='input input-bordered w-full'
                      />
                    </div>

                    <div>
                      <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='input input-bordered w-full'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Avatar
                    </label>
                    <input
                      type='text'
                      name='avatar'
                      id='avatar'
                      placeholder='Avatar'
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className='input input-bordered w-full'
                    />
                  </div>

                  <div>
                    <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      About
                    </label>
                    <textarea
                      className='textarea textarea-bordered w-full'
                      placeholder='About yourself'
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                  </div>

                  <div className='flex flex-row gap-2'>
                    <div>
                      <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                        GitHub
                      </label>
                      <input
                        type='text'
                        name='github'
                        id='github'
                        placeholder='GitHub URL'
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        className='input input-bordered w-full'
                      />
                    </div>

                    <div>
                      <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                        LinkedIn
                      </label>
                      <input
                        type='text'
                        name='linkedin'
                        id='linkedin'
                        placeholder='LinkedIn URL'
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className='input input-bordered w-full'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Skills
                    </label>
                    <input
                      type='text'
                      name='skills'
                      id='skills'
                      placeholder='Skills'
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSkill(e);
                        }
                      }}
                      className='input input-bordered w-full'
                    />
                    <div
                      className={`${
                        technicalSkills.length === 0 ? 'hidden' : ''
                      } border-solid border-2 border-gray-300 dark:border-gray-700 rounded-[8px] p-2 mt-3`}
                    >
                      <div className='flex flex-wrap gap-2 relative top-0 left-0 ml-2'>
                        {technicalSkills.map((tag, index) => (
                          <Chip
                            key={index}
                            onClose={() => handleRemoveSkill(index)}
                            className='bg-blue-500 text-white'
                          >
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <button
                className='btn btn-error btn-outline'
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button className='btn btn-primary' onClick={handleClick}>
                Save
              </button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
