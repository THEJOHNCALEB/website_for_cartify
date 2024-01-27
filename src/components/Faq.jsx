import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div
      className=' p-4 bg-amber-50 rounded-md border border-amber-300 cursor-pointer'
      onClick={toggle}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-amber-600'>{question}</h3>
        <span className='text-amber-500'>
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </span>
      </div>
      {isOpen && <p className='mt-2 text-gray-600 opacity-90'>{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Cartify?",
      answer:
        "Cartify is an innovative shopping list app designed to simplify and enhance your shopping experience. It helps you organize your lists, calculate prices, and make your shopping trips more efficient.",
      isOpen: false,
    },
    {
      question: "How do I download Cartify?",
      answer:
        'You can download Cartify from the App Store for iOS devices and Google Play Store for Android devices. Click on the respective "Download" buttons on our website to be redirected to the app stores.',
      isOpen: false,
    },
    {
      question: "Is Cartify free to use?",
      answer:
        "Yes, Cartify is free to download and use. Enjoy the core features without any cost. However, there may be optional in-app purchases or premium features in future updates.",
      isOpen: false,
    },
    {
      question: "Are there plans for future updates and new features?",
      answer:
        " Absolutely! We are committed to continuously improving Cartify. Stay tuned for updates and exciting new features that will further enhance your shopping experience.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div id='faq' className='w-full pb-10 pt-10 bg-amber-100'>
      <div className=' sm:mx-20 mx-5'>
        <h2 className='text-3xl font-bold text-amber-800 text-center pb-5'>
          FAQs
        </h2>
        <div className='flex flex-col gap-7'>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
