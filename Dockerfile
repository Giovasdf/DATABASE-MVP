FROM alpine:3.18

# Instala dependencias mínimas
RUN apk add --no-cache ca-certificates curl

# Descarga la versión exacta de PocketBase
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.26.6/pocketbase_0.26.6_linux_amd64.zip -o pb.zip \
 && unzip pb.zip \
 && rm pb.zip

# Copia tu backup (carpeta pb_data) al contenedor
COPY pb_data /pb_data

# Expone el puerto de la app
EXPOSE 8080

# Ejecuta PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
