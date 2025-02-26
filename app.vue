<template>
  <!-- Define o idioma da página -->
  <html lang="pt-br">
    <!-- head -->
    <head>
      <!-- Preâmbulo - instruções pro browser / sistemas de busca -->
      <meta charset="UTF-8" />
      <!-- Pacote de símbolos -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ana Paula Alvim</title>
      <!-- CSS é um recurso crítico para renderização -->
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    </head>
    <!-- head -->

    <body class="bg-pink-100">
      <!-- Header -->
      <figure class="p-6">
        <!-- Foto com borda arredondada e centralizada -->
        <img
          class="w-32 h-32 rounded-full mx-auto border-4 border-pink-500"
          src="/assets/profile.jpg"
          alt="profile picture"
          width="400"
          height="400"
        />
        <!-- Texto formatado -->
        <div class="pt-6 text-center space-y-4">
          <figcaption class="font-medium">
            <!-- Nome -->
            <div class="text-cyan-900 text-xl font-bold">Ana Paula Alvim</div>
          </figcaption>
          <blockquote>
            <!-- Descrição -->
            <p class="text-lg font-medium">Technology | Product Manager</p>
          </blockquote>
        </div>
      </figure>
      <!-- /Header -->

      <!-- Links com botões -->
      <main class="max-w-xs mx-auto">
        <!-- Botões -->
        <div class="pt-6 text-center space-y-4">
          <!-- GitHub -->
          <a
            href="https://github.com/apflalvim"
            target="_blank"
            class="flex rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
          >
            <p class="mr-3 h-6 w-6">👤</p>
            GitHub
            <div class="ml-auto mt-0.5 pl-4">
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/anapaulaalvim/"
            target="_blank"
            class="flex rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
          >
            <p class="mr-3 h-6 w-6">👤</p>
            LinkedIn
            <div class="ml-auto mt-0.5 pl-4">
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/ana.paula.alvim/"
            target="_blank"
            class="flex rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
          >
            <p class="mr-3 h-6 w-6">👤</p>
            Instagram
            <div class="ml-auto mt-0.5 pl-4">
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/+5511980817814"
            target="_blank"
            class="flex rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
          >
            <p class="mr-3 h-6 w-6">👤</p>
            WhatsApp
            <div class="ml-auto mt-0.5 pl-4">
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </a>

          <!-- Telegram -->
          <a
            href="https://t.me/aalvim"
            target="_blank"
            class="flex rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
          >
            <p class="mr-3 h-6 w-6">👤</p>
            Telegram
            <div class="ml-auto mt-0.5 pl-4">
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </a>
        </div>
      </main>
    </body>
    <!-- /Corpo da página -->
  </html>
</template>

<script setup>
/* Script vazio */
</script>