import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 active:scale-95',
      secondary: 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg active:scale-95',
      outline: 'border border-white/10 bg-transparent hover:bg-white/5 text-white active:scale-95',
      ghost: 'bg-transparent hover:bg-white/5 text-slate-400 hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs font-bold uppercase tracking-widest',
      md: 'px-6 py-3 text-sm font-bold uppercase tracking-widest',
      lg: 'px-10 py-4 text-base font-bold uppercase tracking-widest',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
