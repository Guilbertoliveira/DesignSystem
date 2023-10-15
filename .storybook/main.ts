import type { StorybookConfig } from "@storybook/nextjs";

//esse arquivo é focado em configurar roteamento de todos os arquivos que serão utilziados para a documentação interativa
const config: StorybookConfig = {
  stories: [  //todos os caminhos aonde serão procurados as documentações
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag", //configura documentação autogerada
  },
};
export default config;
