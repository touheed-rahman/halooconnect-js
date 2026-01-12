import { CheckCircle, Phone, MessageCircle, Mail, Sparkles, Play, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.png";
import HeroForm from "./HeroForm";

// Client logos for social proof
import tataLogo from "@/assets/clients/tata.avif";
import swiggyLogo from "@/assets/clients/swiggy.avif";
import godrejLogo from "@/assets/clients/godrej.avif";
import boschLogo from "@/assets/clients/bosch.avif";

const HeroSection = () => {
  const { t } = useTranslation();
  
  const benefits = [
    { text: "Reduce call handling time by 40%", highlight: "40%" },
    { text: "Boost customer satisfaction to 95%", highlight: "95%" },
    { text: "Cut operational costs by 60%", highlight: "60%" },
  ];
  
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

            {/* Main Headline - Benefit focused */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-secondary-foreground leading-[1.1] mb-5 animate-fade-in-up animation-delay-100">
              <span className="block">Transform Your</span>
              <span className="block text-gradient bg-gradient-to-r from-primary via-primary to-rose-400 bg-clip-text text-transparent">
                Contact Center
              </span>
              <span className="block">With AI Power</span>
            </h1>

            {/* Subheadline - Clear value */}
            <p className="text-lg sm:text-xl text-secondary-foreground/80 mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200 leading-relaxed">
              Connect 6.0 unifies Voice, WhatsApp, Email & SMS in one platform.
              <span className="text-primary font-semibold"> Setup in 30 minutes.</span>
            </p>

            {/* Channel Pills with visual appeal */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-up animation-delay-250 flex-wrap">
              {channels.map((channel, i) => (
                <div 
                  key={channel.label} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
                >
                  <channel.icon className={`w-4 h-4 ${channel.color}`} />
                  <span className="text-sm font-medium text-secondary-foreground">{channel.label}</span>
                </div>
              ))}
              <div className="px-3 py-2 rounded-full bg-primary/20 border border-primary/30">
                <span className="text-sm font-bold text-primary">+5 more</span>
              </div>
            </div>

            {/* Benefits with metrics - Social proof through results */}
            <ul className="space-y-3 mb-6 animate-fade-in-up animation-delay-300">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-secondary-foreground/90 justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-base">
                    {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-primary">{benefit.highlight}</span>
                        )}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>

            {/* Client Logos - Social Proof */}
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-xs text-secondary-foreground/50 uppercase tracking-wider mb-3 text-center lg:text-left">
                Trusted by industry leaders
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 opacity-70">
                {[tataLogo, swiggyLogo, godrejLogo, boschLogo].map((logo, i) => (
                  <img 
                    key={i} 
                    src={logo} 
                    alt="Client logo" 
                    className="h-6 sm:h-7 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-up">
            <HeroForm />
          </div>
        </div>

        {/* Scroll Indicator - Desktop only */}
        <div 
          className="hidden md:flex justify-center pt-6 animate-fade-in-up animation-delay-500 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center gap-2 text-secondary-foreground/40 hover:text-secondary-foreground/60 transition-colors group">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
