import { v4 as uuidv4 } from 'uuid';
import SystemInternalImg from '../images/SystemInternalImg.png';
import CovidTrackerImg from '../images/CovidTrackerImg.jpg';
import BumCoinsImg from '../images/BumCoinsImg.jpg';
import BumCoinTrackerImg from '../images/BumCoinTrackerImg.jpg';
import ColleaguesImg from '../images/ColleaguesImg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Covid Tracker',
    desc:
      'An application to track Covid. I developed the website and the mobile app',
    img: CovidTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Bum Coins',
    desc:
      'An app to help people to get modernize the payment transactions of any purchase',
    img: BumCoinsImg,
  },
  {
    id: uuidv4(),
    name: 'Bum Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: BumCoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Colleague's Portfolio",
    desc:
      'A portfolio for one of my colleagues relatives. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: ColleaguesImg,
  },
  {
    id: uuidv4(),
    name: 'System Internal Tracker',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: SystemInternalImg,
  },
];

export default projects;
