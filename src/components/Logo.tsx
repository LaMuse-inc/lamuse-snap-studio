interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isWhite?: boolean;
}

export const Logo = ({ className = "", size = 'md', isWhite = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/サービスのロゴ.png" 
        alt="Fashion Partners" 
        className={`${sizeClasses[size]} w-auto object-contain ${isWhite ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};