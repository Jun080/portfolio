import React from 'react';

const IconButton = ({ label, icon, url }) => {
  const isCVButton = label === 'CV';

  return (
    <a href={isCVButton ? './img/cv.pdf' : url} 
    download={isCVButton ? 'cv.pdf' : undefined}
    target='_blank' 
    rel='noopener noreferrer' 
    className='my-3 p-6 w-96 h-5 flex items-center justify-center border bg-light-green rounded'>
      <div className='flex items-center w-24'>
        {icon()}
        <span className='ml-4'>{label}</span>
      </div>
    </a>
  );
};

export default IconButton;