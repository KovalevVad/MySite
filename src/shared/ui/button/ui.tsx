import { clsx } from 'clsx';

import { MouseEventHandler, ReactNode } from 'react';

import './index.css'

interface buttonProps {
  type: 'full' | 'incomplete'
  children: ReactNode;
  classes?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  sizeText?: '14' | '16' | '24';
  linkGit?: string;
  linkSite?: string;
 }

export const Button = ({
  children,
  type,
  classes,
  onClick,
  sizeText,
  linkGit,
  linkSite,
}: buttonProps) => {

  return (
    <button
    onClick={onClick}
    className={clsx("button",
      classes,
      type === 'full' ? 'full' : 'incomplete',
      sizeText && `text-size-${sizeText}`)}
    >
    {linkGit ? <a href={linkGit} target='_blank'></a> : <a href={linkSite} target='_blank'></a>}
    {children}
    </button>
  )
}