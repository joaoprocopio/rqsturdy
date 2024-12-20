import "~/assets/styles/tailwind.css"

import { QueryClientProvider } from "@tanstack/react-query"
import { ptBR } from "date-fns/locale/pt-BR"
import { setDefaultOptions } from "date-fns/setDefaultOptions"
import { startTransition } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import queryClient from "~/query/client"
import router from "~/router"

void (async () => {
  setDefaultOptions({
    locale: ptBR,
  })

  const rootEl = document.getElementById("__react")!
  const root = createRoot(rootEl)

  startTransition(() => {
    root.render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </QueryClientProvider>,
    )
  })
})()
