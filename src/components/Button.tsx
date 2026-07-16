import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ children, href, onClick, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent';
  const styles = variant === 'primary'
    ? 'bg-accent text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20'
    : 'border border-slate-300 bg-white/80 text-slate-800 hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100';

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
