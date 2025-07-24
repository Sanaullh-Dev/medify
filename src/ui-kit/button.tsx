import React from "react";
import { ButtonVariants } from "../constant/defaultValues";

const styles = {
  uiButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "10px 25px",
  },
  primary: {
    background: "var(--primary-color)",
    color: "white",
    boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
  },
  secondary: {
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
  },
};

export type UIButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
};


export const UIButton = ({
  variant = ButtonVariants.PRIMARY,
  disabled = false,
  children,
  onClick,
  className,
  type = "button",
  id,
}: UIButtonProps) => {
  return (
    <button
      className={className}
      type={type}
      id={id}
      style={{
         ...styles.uiButton,
         ...(styles[variant] || {}),
         ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}),
       }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
