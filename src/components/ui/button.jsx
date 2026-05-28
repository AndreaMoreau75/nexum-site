import React from 'react';
export function Button({ className='', variant, children, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium transition disabled:opacity-50';
  const outline = variant === 'outline' ? 'border bg-transparent hover:bg-black/5' : '';
  return <button className={`${base} ${outline} ${className}`} {...props}>{children}</button>;
}
