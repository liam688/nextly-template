import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "AI-Powered Business Automation",
  desc: "Transform your business operations with our cutting-edge AI solutions. We seamlessly integrate artificial intelligence into your existing workflows to drive efficiency, reduce costs, and boost productivity.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Smart Process Automation",
      desc: "Automate routine tasks and workflows with AI-driven solutions that learn and adapt to your business needs.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Data-Driven Insights",
      desc: "Make informed decisions with advanced analytics and AI-powered business intelligence tools.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Operational Excellence",
      desc: "Optimize resource allocation and streamline operations with intelligent automation systems.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Enterprise Integration Solutions",
  desc: "Our comprehensive AI integration services ensure seamless implementation while maximizing your return on investment. We transform your existing systems into intelligent, automated powerhouses.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Seamless Integration",
      desc: "Integrate AI solutions with your existing systems and workflows without disrupting operations.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Customized Solutions",
      desc: "Tailored AI implementations that address your specific business challenges and objectives.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Scalable Architecture",
      desc: "Future-proof solutions that grow with your business and adapt to changing needs.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
