# 🌤️ Projeto de Clima

Este é um aplicativo de previsão do tempo desenvolvido em **React** e **TypeScript**, utilizando a API do **OpenWeather** para obter informações meteorológicas em tempo real.

## 🚀 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📦 Instalação

1. Clone este repositório:

   ```sh
   git clone https://github.com/pvss-dev/weather-app.git
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do OpenWeather:

   ```env
   VITE_OPEN_WEATHER_KEY=SUA_CHAVE_AQUI
   ```

## ▶️ Como Rodar o Projeto

Após instalar as dependências, execute o projeto com o seguinte comando:

```sh
npm run dev
```

A aplicação estará disponível em `http://localhost:5173/`.

## 📌 Funcionalidades

- Busca a previsão do tempo por cidade
- Exibe temperatura, umidade, previsões etc.
- Ícones representando as condições climáticas
- Atualização em tempo real ao pesquisar novas cidades

## 📸 Captura de Tela

### 🔍 Tela de Pesquisa
![Tela de Pesquisa](./src/assets/search_screen.png)

### 🌤️ Tela de Previsão do Tempo
![Tela de Clima](./src/assets/weather_screen.png)
