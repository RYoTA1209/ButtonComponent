import clsx from 'clsx';
import React from 'react';

const variants = {
  default: 'shadow-md disabled:bg-[#E0E0E0] disabled:text-[#9E9E9E]',
  outline:
    'border disabled:border-[#E0E0E0] disabled:bg-transparent disabled:text-[#9E9E9E]',
  text: 'disabled:bg-transparent disabled:text-[#9E9E9E]',
};

const sizes = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-2.5',
};

const colors = {
  default: {
    default:
      'bg-[#E0E0E0] text-[#3F3F3F] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]',
    outline: 'border border-[#E0E0E0] text-[#3F3F3F] hover:bg-[#E0E0E0]/10',
    text: 'text-[#3F3F3F] hover:bg-[#E0E0E0]/10',
  },
  primary: {
    default: 'bg-[#2962FF] hover:bg-[#0039CB] focus:bg-[#0039CB] text-white',
    outline: 'border border-[#3D5AFE] text-[#3D5AFE] hover:bg-[#2962FF]/10',
    text: 'text-[#3D5AFE] hover:bg-[#2962FF]/10',
  },
  secondary: {
    default: 'bg-[#455A64] hover:bg-[#1C313A] focus:bg-[#1C313A] text-white',
    outline: 'border border-[#455A64] text-[#455A64] hover:bg-[#455A64]/10',
    text: 'text-[#455A64] hover:bg-[#455A64]/10',
  },
  danger: {
    default: 'bg-[#D32F2F] hover:bg-[#9A0007] focus:bg-[#9A0007] text-white',
    outline: 'border border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F]/10',
    text: 'text-[#D32F2F] hover:bg-[#D32F2F]/10',
  },
};

type IconProps =
  | {
      startIcon: (props: React.ComponentProps<'svg'>) => JSX.Element;
      endIcon?: never;
    }
  | {
      endIcon: (props: React.ComponentProps<'svg'>) => JSX.Element;
      startIcon?: never;
    }
  | { endIcon?: undefined; startIcon?: undefined };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  disableShadow?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      color = 'default',
      disableShadow = false,
      children,
      startIcon,
      endIcon,
      className,
      ...props
    },
    ref
  ) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-md box-border flex items-center',
          variants[variant],
          sizes[size],
          colors[color][variant],
          disableShadow && 'shadow-none',
          className
        )}
        {...props}
      >
        {StartIcon && (
          <span className='w-4 h-4 mr-1'>
            <StartIcon />
          </span>
        )}
        <span>{children}</span>
        {EndIcon && (
          <span className='w-4 h-4 ml-1'>
            <EndIcon />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
