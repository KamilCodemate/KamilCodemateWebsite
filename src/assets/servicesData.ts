import { MdWeb } from 'react-icons/md';
import { ImNewTab } from 'react-icons/im';
import { IoPodiumOutline } from 'react-icons/io5';
import { GoShieldCheck } from 'react-icons/go';
import { FaChartLine } from 'react-icons/fa';
import { DiStreamline } from 'react-icons/di';

const services = [
  {
    title: "Tworzenie witryn od podstaw",
    description: "Zbudujemy dla Ciebie witrynę od podstaw, zgodną z Twoimi oczekiwaniami.",
    icon: MdWeb
  },
  {
    title: "Aktualizacja starych witryn",
    description: "Jeżeli masz już witrynę i pragniesz ją unowocześnić, dobrze trafiłeś.",
    icon: ImNewTab
  },
  {
    title: "Pozycjonowanie",
    description: "Zadbamy o to, aby Twoja witryna była powszechnie odwiedzana.",
    icon: IoPodiumOutline
  },
  {
    title: "Stała opieka nad stroną",
    description: "Będziemy pod ręką, kiedy będziesz chciał zaktualizować swoją witrynę.",
    icon: GoShieldCheck
  },
  {
    title: "Kampanie Google Ads",
    description: "W efektywny sposób rozreklamujemy Twoją witrynę.",
    icon: FaChartLine
  },
  {
    title: "Systemy back-end",
    description: "Sklepy internetowe, panele użytkownika, blogi. Zajmiemy się tym.",
    icon: DiStreamline
  }
];

export default services;
