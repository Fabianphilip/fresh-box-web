"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse fresh groceries from trusted vendors and farmers, add your preferred items to your cart, and proceed to checkout. Choose your delivery address, complete your payment, and we'll handle the rest.",
  },
  {
    question: "Can I order from multiple vendors at once?",
    answer:
      "Yes. FreshBox lets you shop from multiple verified vendors in a single order, making it easy to get everything you need without visiting different stores.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on your location and vendor availability. Most orders within our service areas are delivered quickly, and you'll receive real-time updates on your order status through the app.",
  },
  {
    question: "How do you ensure the freshness of your products?",
    answer:
      "We partner with trusted farmers and verified vendors who supply fresh produce daily. Our quality checks help ensure your groceries arrive fresh and in excellent condition.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Once your order is confirmed, you can track its progress in real time—from preparation to dispatch and delivery.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "FreshBox supports secure payment options including debit cards, bank transfers, and other available digital payment methods.",
  },
  {
    question: "Can I become a FreshBox vendor or farmer?",
    answer:
      "Absolutely. We welcome grocery vendors and farmers who want to reach more customers. Simply complete our onboarding process and we'll guide you through verification.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes. Our support team is available to assist with orders, payments, delivery issues, and any questions you may have.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center mb-14">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            FAQs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Stop the Guesswork.
            <br />
            We've Got You Covered.
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Navigate with confidence through our comprehensive FAQ. We've
            answered the most common questions to make your FreshBox experience
            as smooth as possible.
          </p>

          <p className="mt-2 font-medium text-green-600">
            Here are some questions we've answered for you.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 py-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
