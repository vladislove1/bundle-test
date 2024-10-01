import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrivyProvider } from "@privy-io/react-auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Dashboard from "./Dashboard.jsx";
import "./index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID || ""}
      apiUrl={import.meta.env.VITE_PRIVY_AUTH_URL || ""}
      config={{
        loginMethods: ["email"],
        embeddedWallets: {
          createOnLogin: "users-without-wallets",

          noPromptOnSignature: false,
        },
      }}
    >
      <RouterProvider router={routes} />
    </PrivyProvider>
  </StrictMode>
);
