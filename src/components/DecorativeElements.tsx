const DecorativeElements = () => {
  return (
    <>
      {/* Top left dot pattern */}
      <div className="fixed top-20 left-4 w-12 h-12 dot-pattern opacity-30 pointer-events-none" />
      
      {/* Top right dot pattern */}
      <div className="fixed top-32 right-8 w-16 h-16 dot-pattern opacity-30 pointer-events-none" />
      
      {/* Bottom left squares */}
      <div className="fixed bottom-20 left-8 pointer-events-none opacity-30">
        <div className="w-20 h-20 border-2 border-primary/30 relative">
          <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-primary/20" />
        </div>
      </div>
      
      {/* Bottom right dot pattern */}
      <div className="fixed bottom-32 right-12 w-20 h-20 dot-pattern opacity-30 pointer-events-none" />
      
      {/* Middle decorative squares */}
      <div className="fixed top-1/2 right-4 pointer-events-none opacity-20">
        <div className="w-24 h-24 border border-primary/20 relative">
          <div className="absolute top-4 left-4 w-16 h-16 border border-primary/30" />
        </div>
      </div>
    </>
  );
};

export default DecorativeElements;
