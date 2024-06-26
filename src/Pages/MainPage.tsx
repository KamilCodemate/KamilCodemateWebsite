import React, { useState, useEffect, useRef } from "react";

import "./PageStyles/MainPage.scss";
import "./PageStyles/MediaQueries/MainPageMediaQuery.scss";

import LaptopImage from "../images/hero-laptop.jpg";
import CurvedArrowImage from "../images/curved-arrow.png";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ContactForm from "../Components/ContactForm";
import ServiceCard from "../Components/ServiceCard";
import MainNavbar from "../Components/MainNavbar";

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

  const [isMenuActive, activeMenu] = useState(false);
  const [isInitialized, setInitialized] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      window.scrollTo(0, 0);
  }, 100)
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      setInitialized(false);
      
    }, 3000);
    setTimeout(() => {
      window.scrollTo(0, 0);
      clearInterval(interval);
    }, 4000);

    
  }, []);


  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
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
    <div className="container" style={{backgroundColor: 'black'}}>
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
            <img src={LaptopImage} alt="laptop" />
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
                delay: index * 0.25
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
                ref = {arrowAnimation.ref}
                variants={AnimationVariants}
                transition={{
                  ...AnimationTransition,
                  delay: (index * 0.25) + 0.5
                }}
              >
                <div className="image-arrow">
                  <img src={CurvedArrowImage} alt="arrow" />
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
            title="Cennik"
            description="Zobacz orientacyjne ceny dla Twojej witryny"
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
            <div className="pricing-first-col">
              <div className="about-product-title">O tym, co kupujesz</div>
              <div className="about-product-desc">
                Zamawiając u nas witrynę, otrzymujesz gwarancję niezawodności i
                jakości. Dla każdego zamówienia otrzymasz bezpłatny pakiet
                opieki nad Twoją witryną przez 6 miesięcy. Chcesz coś zmienić? -
                my to wykonujemy.
              </div>
              <div className="accessories">
                <div className="accessories-title">Dla dowolnej witryny: </div>
                <div className="accessories-content">
                  <ul className="first-accessories-col">
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
                  <ul className="second-accessories-col">
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
            <div className="pricing-second-col">
              <motion.div
                className="page-pricing"
                ref={pagePricingAnimation.ref}
                initial="hidden"
                animate={pagePricingAnimation.controls}
                variants={AnimationVariants}
                transition={AnimationTransition}
              >
                <div className="page-pricing-title-desc">
                  <div className="page-pricing-title">Landing Page</div>
                  <div className="page-pricing-desc">
                    Pokaż się od najlepszej strony dzięki nowoczesnej stronie
                    "wizytówce" z formularzem kontaktowym.
                  </div>
                </div>
                <div className="page-pricing-price">
                  <div className="page-price">
                    <span>
                      <sub>Od</sub>850<sup>pln</sup>
                    </span>
                  </div>
                  <div className="page-qmark">
                    <HiQuestionMarkCircle />
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
                <div className="page-pricing-title-desc">
                  <div className="page-pricing-title">Strona z blogiem</div>
                  <div className="page-pricing-desc">
                    Zamów stronę z systemami back-end - np. własnym blogiem,
                    komentarzami, etc.
                  </div>
                </div>
                <div className="page-pricing-price">
                  <div className="page-price">
                    <span>
                      <sub>Od</sub>1550<sup>pln</sup>
                    </span>
                  </div>
                  <div className="page-qmark">
                    <HiQuestionMarkCircle />
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
                <div className="page-pricing-title-desc">
                  <div className="page-pricing-title">Sklep internetowy</div>
                  <div className="page-pricing-desc">
                    Rozpocznij swój biznes z własnym sklepem internetowym
                    dostosowanym do Twoich potrzeb.
                  </div>
                </div>
                <div className="page-pricing-price">
                  <div className="page-price">
                    <span>
                      <sub>Od</sub>5500<sup>pln</sup>
                    </span>
                  </div>
                  <div className="page-qmark">
                    <HiQuestionMarkCircle />
                  </div>
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
                Zadaj pytanie, a odpowiemy najszyciej jak możemy na podany przez
                Ciebie w formularzu adres e-mail. Jeżeli szukasz bezpłatnej
                wyceny swojej witryny zrób to przez osobny FORMULARZ WYCENY.
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
