import lunarLogo from "@/assets/lunar-logo.png";

const LunarLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={lunarLogo} 
        alt="LunarAI Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default LunarLogo;
