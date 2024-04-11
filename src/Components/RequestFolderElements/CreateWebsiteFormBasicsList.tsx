import React from 'react';
import '../ComponentStyles/RequestFolderElements/FormList.scss';
const CreateWebsiteFormBasicsList = () => {
  return (
    <div className='form-list'>
      <ul>
        <li>Jaki typ witryny Cię interesuje (np. strona wizytówka, sklep internetowy etc.)?</li>
        <li>Jaką ilość podstron (wliczając stronę główną) chciałbyś, żeby znalazły się na Twojej witrynie?</li>
        <li>Jakie charakterystyczne elementy chciałbyś, żeby znalazły się na Twojej witrynie (np. blog, mapa, etc.)?</li>
        <li>Czy masz jakieś materiały, które chciałbyś, żeby zostały użyte na tej stronie?</li>
        <li>
          Czy masz własną koncepcję na wygląd witryny? Jeżeli tak spróbuj ją opisać. Jeżeli odzwierciedla ją jakiś motyw lub zdjęcie, prześlij je w
          formularzu.
        </li>
        <li>Czy jesteś zainteresowany przeprowadzeniem kampanii reklamowej dla Twojej witryny lub zaprojektowaniem loga?</li>
        <li>Inne informacje na które warto zwrócić uwagę, jeżeli takie są.</li>
      </ul>
    </div>
  );
};

export default CreateWebsiteFormBasicsList;
