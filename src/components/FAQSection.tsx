import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "最小撮影点数はありますか？",
    answer: "特に最小撮影点数の制限はございません。1点からでも承っておりますが、コストパフォーマンスの観点から、複数点での撮影をおすすめしております。"
  },
  {
    question: "モデルは自社で用意する必要がありますか？",
    answer: "モデルのキャスティングも当スタジオで承っております。ブランドイメージに合ったモデルを、相場より30-40%安価でご提案可能です。もちろん、お客様ご指定のモデルでの撮影も可能です。"
  },
  {
    question: "撮影場所は選べますか？",
    answer: "基本的には当スタジオでの撮影となりますが、ロケーション撮影も承っております。ロケーション撮影の場合は別途ご相談させていただきます。"
  },
  {
    question: "納品データの形式は？",
    answer: "JPEG形式での納品が基本となります。WEB用（1200px程度）と印刷用（300dpi）の2サイズでの納品が可能です。RAWデータをご希望の場合は別途ご相談ください。"
  },
  {
    question: "キャンセル料はかかりますか？",
    answer: "撮影日の1週間前までのキャンセルは無料です。それ以降のキャンセルについては、撮影料の30%のキャンセル料を頂戴いたします。"
  },
  {
    question: "撮影データの著作権は？",
    answer: "撮影データの使用権はお客様に帰属いたします。商用利用、SNS投稿など自由にご利用いただけます。"
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            よくある質問
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            お客様からよくいただくご質問をまとめました
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};