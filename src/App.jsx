import React, { useEffect, useState } from "react";

import router from "../Router/Router"
import { RouterProvider } from "react-router";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading (e.g., auth check or delay)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // 🌟 DaisyUI loading spinner on white background
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  return <RouterProvider router={router} ></RouterProvider>;
};

export default App;
