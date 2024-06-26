import { GrContactInfo } from 'react-icons/gr';
import { GoProjectSymlink } from 'react-icons/go';
import { IoCloudUploadOutline } from 'react-icons/io5';

export interface Step {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: GrContactInfo,
    title: "Ustalenie kryteriów",
    description: "Ustalimy dokładnie, czego potrzebuje Twoja witryna. Możesz określić swoje preferencje wizualne lub zostawić to nam. W ciągu kilku dni przygotujemy projekt graficzny strony, aby mieć pewność, że Twoja witryna Cię zadowoli."
  },
  {
    icon: GoProjectSymlink,
    title: "Budowa Witryny",
    description: "Po dostosowaniu projektu wizualnego, przechodzimy do budowy strony. Umieścimy witrynę pod tymaczasowym linkiem, dzięki czemu będziesz mógł widzieć ją w oryginalnej postaci. Cały czas możesz poprosić o zmodyfikowanie rzeczy, które Ci nie odpowiadają."
  },
  {
    icon: IoCloudUploadOutline,
    title: "Umieszczenie strony na hostingu",
    description: "Otrzymasz spersonalizowane porównanie hostingów, które będą najlepiej dopasowane do Twojej witryny. Zakupimy domenę i umieścimy stronę w sieci. Zajmiemy się ewentualną kampanią reklamową. To wszystko!"
  }
];

export default steps;
