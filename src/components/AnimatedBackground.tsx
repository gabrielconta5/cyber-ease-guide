export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(220 20% 25% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 25% / 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80"></div>
    </div>
  );
};
