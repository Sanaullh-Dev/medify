import React from "react";
import { ButtonVariants } from "../constant/defaultValues";

const styles = {
  uiButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "7px 20px",
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
};

export const UIButton = ({
  variant = ButtonVariants.PRIMARY,
  children,
  onClick,
  className,
}: UIButtonProps) => {
  return (
    <button
      className={className}
      style={{ ...styles.uiButton, ...(styles[variant] || {}) }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
