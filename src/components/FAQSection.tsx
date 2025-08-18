import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "最小撮影点数はありますか？",
    answer: "1点から対応可能です。コスト面では複数点のご依頼をおすすめしています。"
  },
  {
    question: "モデルの手配もお願いできますか？",
    answer: "可能です。ブランドイメージに合わせたキャスティングを相場より抑えた価格でご提案します。"
  },
  {
    question: "納期はどのくらいですか？",
    answer: "内容により異なりますが、静止画は最短24時間での納品実績があります。"
  },
  {
    question: "ECサイト構築も依頼できますか？",
    answer: "はい。撮影と合わせてEC構築や運用設計までワンストップで対応します。"
  },
  {
    question: "料金の目安を知りたいです",
    answer: "撮影は1カット¥1,000〜、20カットパック¥20,000など。詳細は料金セクションをご覧ください。"
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      

      <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お客様からよくいただくご質問をまとめました
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded px-6 transition-all duration-300 hover:scale-[1.02]"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-gray-700 py-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded bg-gray-900 text-white text-sm font-bold">Q</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-0 pb-6">
                  <div className="mt-4 rounded-lg glass-light p-6">
                    <div className="flex gap-4">
                      <span className="inline-flex w-8 h-8 items-center justify-center rounded bg-gray-100 text-gray-700 text-sm font-bold flex-shrink-0">A</span>
                      <span className="text-gray-700">{faq.answer}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};