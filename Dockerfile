# Use uma imagem base do Node.js
FROM node:14

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do npm
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor Express está rodando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
