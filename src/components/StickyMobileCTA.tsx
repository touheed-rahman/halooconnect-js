import { MessageSquare } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import { trackDemoClick } from "@/lib/gtag";

interface StickyMobileCTAProps {
  onFormClick: () => void;
}

const StickyMobileCTA = ({ onFormClick }: StickyMobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-elevated">
        



















        
        
        {/* Safe area padding for devices with home indicator */}
        <div className="h-safe-area-inset-bottom bg-card/95" />
      </div>
    </div>);

};

export default StickyMobileCTA;