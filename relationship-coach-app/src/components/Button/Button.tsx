import React from 'react';
import Arrow from '../../assets/img/arrow.svg';

interface ButtonProps {
  text: string;
  className?: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  showIcon?: boolean; // ✅ make sure this is in the interface
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  color = 'primary',
  onClick,
  type = 'button',
  showIcon = false, // ✅ destructure here
}) => {
  return (
    <button
      type={type}
      color={color}
      className={className}
      onClick={onClick}
    >
      {text}
      {showIcon && (
        <span className="arrow">
          <img src={Arrow} alt="Arrow icon" />
        </span>
      )}
    </button>
  );
};

export default Button;
