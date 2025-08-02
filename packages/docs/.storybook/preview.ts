import type { Preview } from "@storybook/react-vite";
import { ensure, themes } from "storybook/theming";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
    docs: {
      theme: themes.dark, // The replacement theme to use
    },
  },
};

export default preview;
