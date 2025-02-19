export default defineNuxtConfig({
  css: ["@/assets/main.css"],
  app: {
    head: {
      title: "Minha Aplicação",
      meta: [
        { name: "description", content: "Meu site incrível" },
      ],
    },
  },
});
