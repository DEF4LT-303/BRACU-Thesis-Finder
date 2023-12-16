'use client';

const steps = ['Initial Phase', 'Discussion', 'Finalize Meeting', 'Completed'];

const Phases = ({ timeline }) => {
  return (
    <div>
      <h2 className='text-center text-2xl mt-2 font-bold text-neutral-700 dark:text-neutral-200'>
        Timeline
      </h2>
      <div className='flex items-center justify-center mt-2 my-10'>
        <ul className='steps steps-horizontal text-neutral-700 dark:text-neutral-200 '>
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step ${
                index < timeline ? 'step-primary' : ''
              } text-sm`}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Phases;
