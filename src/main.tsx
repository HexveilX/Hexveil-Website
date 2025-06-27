import React from "react";
import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

import App from "./App";
import "./index.css";

// رابط Convex من ملف .env.local
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

// تأكد إن فيه عنصر <div id="root"></div> في index.html
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

createRoot(container).render(
  <React.StrictMode>
    <ConvexAuthProvider client={convex}>
      <App />
    </ConvexAuthProvider>
  </React.StrictMode>
);
