import React, { useRef, useState } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccordionSection() {
  const [activeId, setActiveId] = useState(null);
  const refs = useRef({}); 

  const toggleAccordion = (id) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What services does SquareUp provide?',
      answer:
        'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
    },
    {
      id: 2,
      question: 'How can SquareUp help my business?',
      answer: 'We provide tailored solutions to meet your business goals efficiently.',
    },
    {
      id: 3,
      question: 'What industries does SquareUp work with?',
      answer: 'We serve various industries including fintech, e-commerce, healthcare, and more.',
    },
    {
      id: 4,
      question: 'How long does it take to complete a project with SquareUp?',
      answer: 'Timeline varies by project scope. Typically 2-8 weeks.',
    },
    {
      id: 5,
      question: 'What is the process for working with SquareUp?',
      answer: 'We follow a structured process including discovery, design, development, and launch.',
    },
    {
      id: 6,
      question: 'What is the average cost of a project with SquareUp?',
      answer: 'Cost varies by project scope. We provide a detailed estimate upfront.',
    },
    {
      id: 7,
      question: 'How do I get started with SquareUp?',
      answer: 'Contact us to discuss your project and get a quote.',
    },
    {
      id: 8,
     question: 'where can I find more information about SquareUp?',
     answer: 'Visit our website or social media channels for more information.',
    }
  ];

  return (
    <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-4 w-full items-center  !px-4 !py-10">
      {faqData.map((item) => {
        const isActive = activeId === item.id;

        
        if (!refs.current[item.id]) {
          refs.current[item.id] = React.createRef();
        }

        const currentRef = refs.current[item.id];
        const scrollHeight = currentRef.current?.scrollHeight ?? 0;

        return (
          <div
            key={item.id}
            className="  border border-[#312f2f40] !p-4 transition-all duration-300"
          >
            <div
              className="flex items-start justify-between cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex items-start gap-4">
                <div className="relative rounded-xl w-[58px] h-[58px] flex items-center justify-center bg-[#1e1e1e] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b6bbab] via-[#666863] to-[#87997c] opacity-25 z-0" />
                  <span className={`relative z-10 ${isActive ? 'text-[#99FF00]' : 'text-white'} text-lg md:text-xl font-extrabold`}>
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className={`text-sm md:text-base font-semibold text-left ${
                    isActive ? 'text-[#99FF00]' : 'text-white'
                  }`}
                >
                  {item.question}
                </h3>
              </div>
              <div className="text-[#99FF00] !mt-1">
                <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
              </div>
            </div>

            <div
              ref={currentRef}
              style={{
                maxHeight: isActive ? `${scrollHeight}px` : '0px',
                transition: 'max-height 0.4s ease',
              }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 text-sm !mt-2">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionSection;
