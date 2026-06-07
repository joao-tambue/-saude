import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { Toaster } from "react-hot-toast"
import { router } from "./router"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#0057b8",
          color: "#fff",
        },
        error: {
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fff",
          },
        },
      }}
    />
  </StrictMode>,
)
