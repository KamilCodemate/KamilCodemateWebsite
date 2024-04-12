import React, { useState } from 'react';
import './ComponentStyles/ContactForm.scss';
import { MdDeleteForever } from 'react-icons/md';
type Props = {
  MessageTitle: string;
  FormType: 'contact' | 'request';
};
const ContactForm: React.FC<Props> = ({ MessageTitle, FormType }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles: File[] = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleFileRemove = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className='contact-form'>
      <form>
        <div className='contact-form-first-row'>
          <div className='name-surname'>
            <span>Imię i nazwisko:</span>
            <input type='text' required />
          </div>{' '}
          <div className='email'>
            <span>Adres e-mail:</span>
            <input type='email' required />
          </div>
        </div>
        <div className='contact-form-second-row'>
          <div className='phone-number'>
            <span>Numer telefonu (opcjonalne):</span>
            <input type='tel' />
          </div>
        </div>
        <div className='contact-form-third-row'>
          <div className='message-content'>
            {' '}
            <span>{MessageTitle}</span>
            <textarea></textarea>
          </div>
        </div>
        <div className='contact-form-fourth-row'>
          <div className='consent'>
            {' '}
            <input type='checkbox' />{' '}
            <span>
              Zapoznałem się i akceptuję postanowienia <u>polityki prywatności</u>
            </span>
          </div>
        </div>
        {FormType === 'request' && (
          <div className='file-upload-root'>
            <div className='files-display'>
              {files.map((file, index) => (
                <div key={index} className='file-item'>
                  <span>{file.name}</span>
                  <span className='remove-file' onClick={() => handleFileRemove(index)}>
                    <MdDeleteForever size={30} />
                  </span>
                </div>
              ))}
            </div>
            <div className='add-file'>
              <label>
                Dodaj plik
                <input type='file' multiple onChange={handleFileChange} />
              </label>
            </div>
          </div>
        )}
        <div className='contact-form-fifth-row'>
          <div className='send-btn'>
            {' '}
            <input type='button' value='Wyślij' />{' '}
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
