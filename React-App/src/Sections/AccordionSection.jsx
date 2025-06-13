import React from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AccordionSection() {

 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
];


  return (
    <div className="grid md:grid-cols-2 gap-4 !px-4 !py-10">
      {faqData.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={item.id}
            className={`bg-[#1C1C1C] rounded-lg !p-4 transition-all duration-300 ${
              isActive ? 'shadow-[0_0_15px_#99ff00aa]' : 'shadow-md'
            }`}
          >
            <div
              className="flex items-start justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#1a1a1a] 
                shadow-[0_0_10px_#99ff00] 
                text-[#99FF00] min-w-[35px] 
                min-h-[35px] flex items-center 
                justify-center font-bold rounded-md">
                  {String(item.id).padStart(2, '0')}
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
                {isActive ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isActive ? 'max-h-[500px] !mt-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-400 text-sm">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionSection;