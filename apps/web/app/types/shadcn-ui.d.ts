declare module 'shadcn/ui' {
  import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

  export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
  }

  export const Button: FC<ButtonProps>;
}
