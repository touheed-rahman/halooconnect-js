import { useTranslation } from "react-i18next";
import { CheckCircle, Phone, MessageCircle, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import HeroForm from "./HeroForm";

// Client logos for social proof
import tataLogo from "@/assets/clients/tata.avif";
import swiggyLogo from "@/assets/clients/swiggy.avif";
import godrejLogo from "@/assets/clients/godrej.avif";
import boschLogo from "@/assets/clients/bosch.avif";

interface LocalizedHeroProps {
  country: string;
  countryCode: string;
  headline: string;
  subheadline: string;
  benefits: string[];
  stats: {
    users: string;
    clients: string;
    calls: string;
    countries: string;
  };
}

const LocalizedHeroSection = ({
  country,
  countryCode,
  headline,
  subheadline,
  benefits,
  stats,
}: LocalizedHeroProps) => {
  const { t } = useTranslation();

  const channels = [
    { icon: Phone, label: "Voice", color: "text-green-400" },
    { icon: MessageCircle, label: "WhatsApp", color: "text-emerald-400" },
    { icon: Mail, label: "Email", color: "text-blue-400" },
  ];

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover" 
          loading="eager" 
          fetchPriority="high" 
        />
        <div className="absolute inset-0 bg-secondary/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/90 to-secondary" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex-1 flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 mb-5 animate-fade-in-up">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                🔥 Trusted by 500+ Enterprises
              </span>
            </div>

            {/* Main Headline - Benefit focused with high visibility */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-5 animate-fade-in-up animation-delay-100">
              <span className="block text-white drop-shadow-lg">{headline}</span>
              <span className="block bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent drop-shadow-lg" style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.1)' }}>
                {country}
              </span>
            </h1>

            {/* Subheadline - Clear value with better visibility */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200 leading-relaxed">
              {subheadline}
            </p>

            {/* Channel Pills with visual appeal */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-up animation-delay-250 flex-wrap">
              {channels.map((channel, i) => (
                <div 
                  key={channel.label} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors cursor-default"
                >
                  <channel.icon className={`w-4 h-4 ${channel.color}`} />
                  <span className="text-sm font-medium text-white">{channel.label}</span>
                </div>
              ))}
              <div className="px-3 py-2 rounded-full bg-primary/30 border border-primary/40">
                <span className="text-sm font-bold text-primary">+5 more</span>
              </div>
            </div>

            {/* Benefits with metrics - Social proof through results */}
            <ul className="space-y-3 mb-6 animate-fade-in-up animation-delay-300">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-white justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-base font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Client Logos - Social Proof */}
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-3 text-center lg:text-left font-semibold">
                Trusted by industry leaders
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 opacity-80">
                {[tataLogo, swiggyLogo, godrejLogo, boschLogo].map((logo, i) => (
                  <img 
                    key={i} 
                    src={logo} 
                    alt="Client logo" 
                    className="h-6 sm:h-7 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-up">
            <HeroForm defaultCountryCode={countryCode} fixedCountryCode={true} />
          </div>
        </div>

        {/* Scroll Indicator - Desktop only */}
        <div 
          className="hidden md:flex justify-center pt-6 animate-fade-in-up animation-delay-500 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors group">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizedHeroSection;