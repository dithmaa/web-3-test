import { FC, ReactNode } from "react";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export const Dialog: FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
      onClick={() => onOpenChange(false)}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "90%",
          padding: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export const DialogContent: FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);

export const DialogHeader: FC<{ children: ReactNode }> = ({ children }) => (
  <div style={{ marginBottom: "16px" }}>{children}</div>
);

export const DialogTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>{children}</h2>
);
