import React from 'react';
import './PageStyles/MainPage.scss';
import LaptopImage from '../images/hero-laptop.jpg';
import CurvedArrowImaqe from '../images/curved-arrow.png';
import { MdWeb } from 'react-icons/md';
import ServiceCard from '../Components/ServiceCard';
import MainNavbar from '../Components/MainNavbar';
import { ImNewTab } from 'react-icons/im';
import { IoPodiumOutline } from 'react-icons/io5';
import { GoShieldCheck } from 'react-icons/go';
import { FaChartLine } from 'react-icons/fa6';
import { DiStreamline } from 'react-icons/di';
import { GrContactInfo } from 'react-icons/gr';
import { GoProjectSymlink } from 'react-icons/go';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import Footer from '../Components/Footer';
const MainPage: React.FC = () => {
  return (
    <div className='container'>
      <MainNavbar />
      <div className='hero'>
        <div id='hero-left-col'>
          <div id='hero-left-col-main-content'>
            <span id='hero-title'>Profesjonalne witryny i serwisy internetowe</span>
            <div id='hero-button'>
              <button>Zamów darmową wycenę</button>
            </div>
          </div>
        </div>
        <div id='hero-right-col'>
          <img src={LaptopImage} alt='laptop' />
        </div>
        M
      </div>
      <div id='services'>
        <div className='section-title'>
          <span className='first-section-title blacked'>Nasze usługi</span>
          <span className='second-section-title blacked'>Zobacz, z czym możemy Ci pomóc</span>
        </div>
        <div id='services-cards'>
          <div className='service-row service-first-row'>
            <ServiceCard
              title='Tworzenie witryn od podstaw'
              description='Zbudujemy dla Ciebie witrynę od podstaw, zgodną z Twoimi oczekiwaniami.'
              icon={MdWeb}
            />
            <ServiceCard
              title='Aktualizacja starych witryn'
              description='Jeżeli masz już witrynę i pragniesz ją unowocześnić, dobrze trafiłeś.'
              icon={ImNewTab}
            />
            <ServiceCard title='Pozycjonowanie' description='Zadbamy o to, aby Twoja witryna była powszechnie odwiedzana.' icon={IoPodiumOutline} />
          </div>

          <div className='service-row service-second-row'>
            <ServiceCard
              title='Stała opieka nad stroną'
              description='Będziemy pod ręką, kiedy będziesz chciał zaktualizować swoją witrynę.'
              icon={GoShieldCheck}
            />
            <ServiceCard title='Kampanie Google Ads' description='W efektywny sposób rozreklamujemy Twoją witrynę.' icon={FaChartLine} />{' '}
            <ServiceCard
              title='Systemy back-end'
              description='Sklepy internetowe, panele użytkownika, blogi. Zajmiemy się tym.'
              icon={DiStreamline}
            />{' '}
          </div>
        </div>
      </div>
      <div id='how-it-works'>
        <div className='section-title'>
          <span className='first-section-title whitened'>Jak to działa?</span>
          <span className='second-section-title whitened'>Zobacz, jak wyglądać będzie nasza współpraca</span>
        </div>
        <div className='steps-root'>
          <div className='steps'>
            <div className='step'>
              <div className='step-icon'>
                <GrContactInfo size={120} color={'white'} />
              </div>
              <div className='step-title'>Ustalenie kryteriów</div>
              <div className='step-description'>
                Ustalimy dokładnie, czego potrzebuje Twoja witryna. Możesz określić swoje preferencje wizualne lub zostawić to nam. W ciągu kilku dni
                przygotujemy projekt graficzny strony, aby mieć pewność, że Twoja witryna Cię zadowoli.
              </div>
            </div>
            <div className='arrow'>
              {' '}
              <div className='image-arrow'>
                <img src={CurvedArrowImaqe} alt='arrow' />
              </div>
            </div>
            <div className='step'>
              <div className='step-icon'>
                <GoProjectSymlink size={120} color={'white'} />
              </div>
              <div className='step-title'>Budowa Witryny</div>
              <div className='step-description'>
                Po dostosowaniu projektu wizualnego, przechodzimy do budowy strony. Umieścimy witrynę pod tymaczasowym linkiem, dzięki czemu będziesz
                mógł widzieć ją w oryginalnej postaci. Cały czas możesz poprosić o zmodyfikowanie rzeczy, które Ci nie odpowiadają.
              </div>
            </div>
            <div className='arrow'>
              <div className='image-arrow'>
                <img src={CurvedArrowImaqe} alt='arrow' />
              </div>
            </div>
            <div className='step'>
              {' '}
              <div className='step-icon'>
                <IoCloudUploadOutline size={120} color={'white'} />
              </div>
              <div className='step-title'>Umieszczenie strony na hostingu</div>
              <div className='step-description'>
                Otrzymasz spersonalizowane porównanie hostingów, które będą najlepiej dopasowane do Twojej witryny. Zakupimy domenę i umieścimy stronę
                w sieci. Zajmiemy się ewentualną kampanią reklamową. To wszystko!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='price-list'>
        <div className='section-title'>
          <span className='first-section-title blacked'>Cennik</span>
          <span className='second-section-title blacked'>Zobacz orientacyjne ceny dla Twojej witryny</span>
        </div>
        <div className='pricing-cols'>
          <div className='pricing-first-col'>
            <div className='about-product-title'>O tym, co kupujesz</div>
            <div className='about-product-desc'>
              Zamawiając u nas witrynę, otrzymujesz gwarancję niezawodności i jakości. Dla każdego zamówienia otrzymasz bezpłatny pakiet opieki nad
              Twoją witryną przez 6 miesięcy. Chcesz coś zmienić? - my to wykonujemy.
            </div>
            <div className='accessories'>
              <div className='accessories-title'>Dla dowolnej witryny: </div>
              <div className='accessories-content'>
                <ul className='first-accessories-col'>
                  <li>
                    <IoMdCheckmarkCircle />
                    Profesjonalny projekt graficzny
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Nieograniczona liczba podstron
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Dopasowane zdjęcia
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Opracowane teksty
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Pełna responsywność
                  </li>
                </ul>
                <ul className='second-accessories-col'>
                  <li>
                    <IoMdCheckmarkCircle />
                    Formularz kontaktowy
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Opieka nad witryną
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Gwarancja na okres 24 miesięcy
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    RODO i ciasteczka
                  </li>
                  <li>
                    <IoMdCheckmarkCircle />
                    Zaprojektowanie logo
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='pricing-second-col'>
            <div className='page-pricing'>
              <div className='page-pricing-title-desc'>
                {' '}
                <div className='page-pricing-title'>Landing Page</div>
                <div className='page-pricing-desc'>
                  Pokaż się od najlepszej strony dzięki nowoczesnej stronie "wizytówce" z formularzem kontaktowym.
                </div>
              </div>
              <div className='page-pricing-price'>
                <div className='page-price'>
                  <span>
                    <sub>Od</sub>850<sup>pln</sup>
                  </span>
                </div>
                <div className='page-qmark'>
                  <HiQuestionMarkCircle />
                </div>
              </div>
            </div>
            <div className='page-pricing'>
              <div className='page-pricing-title-desc'>
                {' '}
                <div className='page-pricing-title'>Strona z blogiem</div>
                <div className='page-pricing-desc'>Zamów stronę z systemami back-end - np. własnym blogiem, komentarzami, etc.</div>
              </div>
              <div className='page-pricing-price'>
                <div className='page-price'>
                  <span>
                    <sub>Od</sub>1550<sup>pln</sup>
                  </span>
                </div>
                <div className='page-qmark'>
                  <HiQuestionMarkCircle />
                </div>
              </div>
            </div>
            <div className='page-pricing'>
              <div className='page-pricing-title-desc'>
                {' '}
                <div className='page-pricing-title'>Sklep internetowy</div>
                <div className='page-pricing-desc'>Rozpocznij swój biznes z własnym sklepem internetowym dostosowanym do Twoich potrzeb.</div>
              </div>
              <div className='page-pricing-price'>
                <div className='page-price'>
                  <span>
                    <sub>Od</sub>5500<sup>pln</sup>
                  </span>
                </div>
                <div className='page-qmark'>
                  <HiQuestionMarkCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='contact'>
        <div className='section-title'>
          <span className='first-section-title blacked'>Kontakt</span>
          <span className='second-section-title blacked'>Masz jakieś wątpliwości lub pytania? Napisz do nas</span>
        </div>
        <div className='contact-cols'>
          <div className='contact-left-col'>
            <div className='main-desc'>
              Zadaj pytanie, a odpowiemy najszyciej jak możemy na podany przez Ciebie w formularzu adres e-mail. Jeżeli szukasz bezpłatnej wyceny
              swojej witryny zrób to przez osobny FORMULARZ WYCENY.
            </div>
            <div className='contact-info'>
              <div className='contact-info-title'>Dane kontaktowe:</div>
              <div className='contact-info-content'>
                E-mail: kamil.codemate@gmail.com <br />
                Telefon: 123 456 789
              </div>
            </div>
            <div className='faq'>
              <div className='faq-title'>Najczęściej zadawane pytania:</div>
              <div className='faq-content'>
                <ul>
                  <li>Czym jest hosting?</li>
                  <li>Czym jest back-end?</li>
                  <li>Co oznacza responsywność strony?</li>
                  <li>Kiedy poznam ostateczną cenę za swoją witrynę?</li>
                  <li>Co ma wpływ na cenę za wykonanie witryny?</li>
                  <li>Czy wystawiacie faktury VAT?</li>
                  <li>Jakie usługi są świadczone w ramach "opieki nad stroną"?</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='contact-right-col'>
            <div className='contact-form-title'>Formularz kontaktowy</div>
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
                    <span>Treść wiadomości:</span>
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
                <div className='contact-form-fifth-row'>
                  <div className='send-btn'>
                    {' '}
                    <input type='button' value='Wyślij' />{' '}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
