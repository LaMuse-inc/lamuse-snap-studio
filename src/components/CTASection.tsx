import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd_nL-lUgCxbF10DIfLDzxm3b4LZIJJcVOcVNv6Ag6B8Y550w/viewform?embedded=true";
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      

      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-gray-200/20 to-gray-100/20 rounded blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Embedded Google Form */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">お問い合わせフォーム</h3>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <iframe
              title="Fashion Partners問い合わせフォーム"
              src={formUrl}
              className="w-full h-[1200px]"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};