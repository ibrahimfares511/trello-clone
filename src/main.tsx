import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 1. إنشاء instance من QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 2. إحاطة التطبيق بـ QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* 3. إضافة أدوات المطورين (اختياري لكن موصى به بشدة) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
