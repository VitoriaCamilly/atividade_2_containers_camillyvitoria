#a imagem a ser usada de base
FROM mysql
#informar o diretório padrão
WORKDIR /
#variáveis de ambiente durante build do dockerfile
ARG PORT=3000
#variável de ambiente da aplicação
ENV PORT=$PORT
#deixar a porta da máquina visível
EXPOSE $PORT
#copiar os arquivos do terminal que estamos para a imagem que estamos criando
COPY ./ .
#um comando em bash rodado para pré iniciar a aplicação
RUN npm install
#executa o comando para iniciar a aplicação
ENTRYPOINT npm start
