import type { Preview } from "@storybook/react";

import "../app/globals.css" //precisamos importar para dentro do storybook para funcionar as estilizações do tailwind

//arquivo cuida de toda pagina visual do storybook
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
