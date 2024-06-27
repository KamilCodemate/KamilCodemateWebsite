import React, { useState, useEffect, useRef } from "react";
import "./PageStyles/MainPage.scss";
import "./PageStyles/MediaQueries/MainPageMediaQuery.scss";

import LaptopImage from "../../public/images/hero-laptop.jpg"
import CurvedArrowImage from "../../public/images/curved-arrow.png";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ContactForm from "../Components/ContactForm";
import ServiceCard from "../Components/ServiceCard";
import MainNavbar from "../Components/MainNavbar";
import { IoMdCheckmark } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import ServicesData from "../assets/servicesData";
import StepsData from "../assets/stepsData";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

const MainPage: React.FC = () => {
  const AnimationVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimationTransition = {
    duration: 0.5,
    delay: 0.5,
  };

  const AnimationTransitionAdditionalDelay = {
    duration: 0.5,
    delay: 1,
  };

  const AnimationTransitionContainer = {
    duration: 1,
    delay: 4.5,
  };

  const ref = useRef(null);
  const [isMenuActive, setMenuActive] = useState(false);
  const [isInitialized, setInitialized] = useState(true);

  useEffect(() => {
    const preventScrolling = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", preventScrolling);
    window.scrollTo(0, 0);

    const initializationTimeout = setTimeout(() => {
      setInitialized(false);
    }, 3000);

    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
      window.removeEventListener("scroll", preventScrolling);
    }, 4000);

    return () => {
      clearTimeout(initializationTimeout);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", preventScrolling);
    };
  }, []);

  const slideButtonClicked = () => {
    setMenuActive(!isMenuActive);
  };

  const useAnimateOnView = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [inView, controls]);

    return { ref, controls };
  };

  const heroRightColAnimation = useAnimateOnView();
  const sectionTitleAnimation = useAnimateOnView();
  const cardAnimation = useAnimateOnView();
  const stepAnimation = useAnimateOnView();
  const arrowAnimation = useAnimateOnView();
  const pricingFirstColAnimation = useAnimateOnView();
  const pagePricingAnimation = useAnimateOnView();
  const contactLeftColAnimation = useAnimateOnView();
  const contactRightColAnimation = useAnimateOnView();

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <AnimatePresence>
        {isInitialized && (
          <motion.h1
            key={"initial-title"}
            style={{ display: "inline-block" }}
            className="initial-title"
            transition={{ duration: 1, delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
          >
            KamilCodemate
          </motion.h1>
        )}
      </AnimatePresence>

      <motion.div
        className="subcontainer"
        variants={AnimationVariants}
        initial="hidden"
        animate="visible"
        transition={AnimationTransitionContainer}
      >
        <MainNavbar isActive={isMenuActive} />

        <div
          id="hero"
          style={{ position: "relative", overflow: "hidden" }}
          ref={ref}
        >
          <div className="hero-left-col">
            <motion.div
              className="hero-left-col-main-content"
              variants={AnimationVariants}
              initial="hidden"
              animate="visible"
              transition={AnimationTransition}
            >
              <span className="hero-title">
                Profesjonalne witryny i serwisy internetowe
              </span>
              <div className="hero-button">
                <button>Zamów darmową wycenę</button>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-right-col"
            ref={heroRightColAnimation.ref}
            initial="hidden"
            animate={heroRightColAnimation.controls}
            variants={AnimationVariants}
            transition={AnimationTransitionAdditionalDelay}
          >
            <img src={LaptopImage.src} alt="laptop" />
          </motion.div>
        </div>

        <div id="services">
          <Header
            title="Nasze usługi"
            description="Zobacz, z czym możemy Ci pomóc"
            type="blacked"
          />
          <motion.div
            className="section-title"
            ref={sectionTitleAnimation.ref}
            initial="hidden"
            animate={sectionTitleAnimation.controls}
            variants={AnimationVariants}
            transition={AnimationTransition}
          >
            <div className="services-cards">
              <div className="service-row">
                {ServicesData.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="card"
                    ref={cardAnimation.ref}
                    initial="hidden"
                    animate={cardAnimation.controls}
                    variants={AnimationVariants}
                    transition={{ ...AnimationTransition, delay: index * 0.25 }}
                  >
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div id="how-it-works">
          <Header
            title="Jak to działa?"
            description="Zobacz, jak wyglądać będzie nasza współpraca"
            type="whitened"
          />
          <div className="steps-root">
            <div className="steps">
              {StepsData.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <React.Fragment key={index}>
                    <motion.div
                      className="step"
                      initial="hidden"
                      animate={stepAnimation.controls}
                      ref={stepAnimation.ref}
                      variants={AnimationVariants}
                      transition={{
                        ...AnimationTransition,
                        delay: index * 0.25,
                      }}
                    >
                      <div className="step-icon">
                        <IconComponent size={120} color={"white"} />
                      </div>
                      <div className="step-title">{step.title}</div>
                      <div className="step-description">{step.description}</div>
                    </motion.div>
                    {index < StepsData.length - 1 && (
                      <motion.div
                        className="arrow"
                        initial="hidden"
                        animate={arrowAnimation.controls}
                        ref={arrowAnimation.ref}
                        variants={AnimationVariants}
                        transition={{
                          ...AnimationTransition,
                          delay: index * 0.25 + 0.5,
                        }}
                      >
                        <div className="image-arrow">
                          <img src={CurvedArrowImage.src} alt="arrow" />
                        </div>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div id="price-list">
          <Header
            title="Nasze oferty"
            description="Przejrzyj nasze oferty i wybierz najlepszą dla Ciebie"
            type="blacked"
          />
          <motion.div
            className="pricing-cols"
            ref={pricingFirstColAnimation.ref}
            initial="hidden"
            animate={pricingFirstColAnimation.controls}
            variants={AnimationVariants}
            transition={AnimationTransition}
          >
            <div className="pricing-second-col"> 
              <motion.div
                className="page-pricing"
                ref={pagePricingAnimation.ref}
                initial="hidden"
                animate={pagePricingAnimation.controls}
                variants={AnimationVariants}
                transition={AnimationTransition}
              >
                <div className="pricing-subcontainer">
                <div className="page-pricing-title">Strona WordPress</div>

                <div className="page-pricing-desc">
                Zamów stronę WordPress opartą na wybranym przez Ciebie motywie.
                </div>
                <span className="price">Od 649 zł</span>
                </div>
              </motion.div>
              <motion.div
                className="page-pricing main-page-pricing"
                ref={pagePricingAnimation.ref}
                initial="hidden"
                animate={pagePricingAnimation.controls}
                variants={AnimationVariants}
                transition={AnimationTransition}
              >
                 <div className="pricing-subcontainer">
                <div className="page-pricing-title">Strona SPA pisana w kodzie</div>

                <div className="page-pricing-desc">
                 Strona Internetowa Nowej Generacji - niezwykle szybka, skalowalna, niezależna od motywu, z możliwością dalszej rozbudowy.
                </div>
                <div className="advantages">
               <span><IoMdCheckmark />Indywidualny Projekt graficzny <br /></span> 
               <span>  <IoMdCheckmark /> Pisana w nowoczesnych technologiach<br /></span>
               <span> <IoMdCheckmark /> Szybsza niż standardowa witryna WordPress <br /></span>
                <span><IoMdCheckmark /> Niezależność od motywu<br /></span>
                <span><IoMdCheckmark /> Mniejsze obiążenie serwera dzięki RestAPI <br /></span>
               <span><IoMdCheckmark /> Możliwość łatwej rozbudowy <br /></span>
               <span><IoMdCheckmark /> Kod źródłowy i dokumetacja<br /></span>
               </div>
               <div className="price">
               <span>Od</span>  1550zł
                </div>
                
                </div>
              </motion.div>
              <motion.div
                className="page-pricing"
                ref={pagePricingAnimation.ref}
                initial="hidden"
                animate={pagePricingAnimation.controls}
                variants={AnimationVariants}
                transition={AnimationTransition}
              >
                 <div className="pricing-subcontainer">
                <div className="page-pricing-title">Sklep Internetowy</div>

                <div className="page-pricing-desc">
                   Tworzymy każdy rodzaj aplikacji internetowej dla Ciebie - sklep, blog, serwis ze wszystkim, czego potrzebuje Twój biznes.
                </div>
               
                <span>Od 1550pln</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div id="contact">
          <Header
            title="Kontakt"
            description="Masz jakieś wątpliwości lub pytania? Napisz do nas"
            type="blacked"
          />
          <motion.div
            className="contact-cols"
            ref={contactLeftColAnimation.ref}
            initial="hidden"
            animate={contactLeftColAnimation.controls}
            variants={AnimationVariants}
            transition={AnimationTransition}
          >
            <div className="contact-left-col">
              <div className="main-desc">
                Zadaj pytanie, a odpowiemy najszybciej jak możemy na podany
                przez Ciebie w formularzu adres e-mail. Jeżeli szukasz
                bezpłatnej wyceny swojej witryny zrób to przez osobny FORMULARZ
                WYCENY.
              </div>
              <div className="contact-info">
                <div className="contact-info-title">Dane kontaktowe:</div>
                <div className="contact-info-content">
                  E-mail: kamil.codemate@gmail.com <br />
                  Telefon: 123 456 789
                </div>
              </div>
              <div className="faq">
                <div className="faq-title">Najczęściej zadawane pytania:</div>
                <div className="faq-content">
                  <ul>
                    <li>Czym jest hosting?</li>
                    <li>Czym jest back-end?</li>
                    <li>Co oznacza responsywność strony?</li>
                    <li>Kiedy poznam ostateczną cenę za swoją witrynę?</li>
                    <li>Co ma wpływ na cenę za wykonanie witryny?</li>
                    <li>Czy wystawiacie faktury VAT?</li>
                    <li>
                      Jakie usługi są świadczone w ramach "opieki nad stroną"?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contact-right-col">
              <div className="contact-form-title">Formularz kontaktowy</div>
              <ContactForm
                MessageTitle="Treść wiadomości: "
                FormType="contact"
              />
            </div>
          </motion.div>
        </div>

        <Footer />
        <IoMenu className="menu-slide-button" onClick={slideButtonClicked} />
      </motion.div>
    </div>
  );
};

export default MainPage;
