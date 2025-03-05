import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { underdogFoundersTheme } from './src/underdogFoundersTheme'

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], 
      },
    },
  },
  plugins: [
    typography,
    skeleton({
      themes: {
        custom: [underdogFoundersTheme],
      },
    }),
  ],
} satisfies Config;
