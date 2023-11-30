'use client';

const steps = ['Initial Phase', 'Choose plan', 'Purchase', 'Receive Product'];

const Phases = ({ timeline }) => {
  return (
    <div className='flex items-center justify-center mt-2 my-10'>
      <ul className='steps steps-horizontal'>
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${index < timeline ? 'step-primary' : ''}`}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phases;
