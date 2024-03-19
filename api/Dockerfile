# Define a imagem base
FROM node:20-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN yarn install
RUN prisma db push
RUN prisma generate

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 8080

# Comando para iniciar a aplicação
CMD [ "yarn", "start" ]
