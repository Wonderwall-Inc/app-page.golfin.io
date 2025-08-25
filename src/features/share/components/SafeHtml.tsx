import React, { type JSX } from 'react';

interface SafeHtmlProps {
  html: string;
  className?: string;
  element?: keyof JSX.IntrinsicElements
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ html, className, element = 'div' }) => {
  return React.createElement(
    element,
    {
      className,
      dangerouslySetInnerHTML: { __html: html }
    }
  );
};

export default SafeHtml; 