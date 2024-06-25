import React from 'react';

interface UpdateWebsiteAddressProps {
  content: string;
  handleContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UpdateWebsiteAddress: React.FC<UpdateWebsiteAddressProps> = ({content, handleContentChange}) => {
    

    return (
        <div className='website-address-container'>
            <h1 style={{fontSize: '20px'}}>Podaj link do Twojej witryny:</h1>
          <input type="text" className='step-address-input' onChange={(e) => handleContentChange(e)} value={content}/> 
        </div>
    );
};

export default UpdateWebsiteAddress;