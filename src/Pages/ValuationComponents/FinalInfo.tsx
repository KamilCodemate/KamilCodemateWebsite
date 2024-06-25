import { sign } from 'crypto';
import React from 'react';

interface Props {
    name: string;
    email: string;
    telephone: string;
    agreed: boolean;
    handleFinalInfoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FinalInfo: React.FC<Props> = ({ name, email, telephone, agreed, handleFinalInfoChange}) => {
   

    return (
        <div className='final-info-container'>
            <h1 style={{fontSize: '20px'}}>Już prawie wszystko gotowe! Uzupełnij poniższe informacje, aby wysłać zapytanie:</h1>
           <form className='final-info-form'>
                <input type='text' name='name' placeholder='Imię' required value={name} onChange={(e) => handleFinalInfoChange(e)}/>
                <input type='email' name='email' placeholder='Adres e-mail' required value={email} onChange={(e) => handleFinalInfoChange(e)}/>
                <input type='tel' name='telephone' placeholder='Telefon (opcjonalnie)' value={telephone} onChange={(e) => handleFinalInfoChange(e)}/>
                <label>
                    <input type='checkbox' name='agreed' required checked = {agreed} onChange={(e) => handleFinalInfoChange(e)}/>
                    Wyrażam zgodę na warunki zawarte w polityce prywatności
                </label>
           </form>
        </div>
    );
};

export default FinalInfo;