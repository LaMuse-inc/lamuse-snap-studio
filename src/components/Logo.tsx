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
        src="/lamuse-logo.png"
        alt="LaMuse Studio"
        className={`${sizeClasses[size]} w-auto object-contain ${isWhite ? 'filter brightness-0 invert' : ''}`}
        onError={(e) => {
          // フォールバック：画像が見つからない場合はテキストロゴを表示
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="flex flex-col">
                <span class="font-black text-studio-charcoal ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-3xl'} leading-none ${isWhite ? 'text-white' : ''}">
                  LaMuse
                </span>
                <span class="font-medium text-studio-accent ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'} leading-none ${isWhite ? 'text-white' : ''}">
                  studio
                </span>
              </div>
            `;
          }
        }}
      />
    </div>
  );
};