"use client";

import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const ToastWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const theme = "light";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnFocusLoss
          pauseOnHover={false}
          theme={theme}
          transition={Bounce}
        />
      )}
      {children}
    </>
  );
};

export default ToastWrapper;
