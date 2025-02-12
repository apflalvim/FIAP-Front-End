export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-br", // Define o idioma da página
      },
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "Página de portfólio de Ana Paula Alvim" },
      ],
      title: "Ana Paula Alvim", // Título da página
    },
  },

  // Certifique-se de incluir o seu CSS global, se necessário
  css: ["@/assets/main.css"],

  // Plugin FontAwesome para ícones
  plugins: ["@/plugins/fontawesome"],

  compatibilityDate: "2025-02-12"
});