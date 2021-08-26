import { svelte } from "@sveltejs/vite-plugin-svelte"
import { windi } from "svelte-windicss-preprocess"
import { defineConfig } from "vite"

const safelist = [
  "text-green-400", "text-yellow-400", "text-red-400", 
  "bg-green-400", "bg-yellow-400", "bg-red-400", "bg-gray-200",
  "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5", "grid-cols-6", 
  "hidden"
]

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        windi({
          preflights: true,
          safeList: safelist.join(' '),
        })
      ],
    }),
  ],
})