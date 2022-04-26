import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonColor = 'primary' | 'secondary' | 'danger';
type ButtonVariant = 'contained' | 'outlined';
type ButtonIcon = true | false;

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    size?: ButtonSize;
    color?: ButtonColor;
    variant?: ButtonVariant;
    icon?: ButtonIcon;
}
