FROM alpine:3.18

# Instala utilidades necesarias (incluye unzip)
RUN apk add --no-cache ca-certificates curl unzip

# Establece el directorio de trabajo
WORKDIR /app

# Descarga y descomprime PocketBase
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.26.6/pocketbase_0.26.6_linux_amd64.zip -o pb.zip \
 && unzip pb.zip \
 && rm pb.zip

# Copia datos persistentes (si existen)
COPY pb_data /app/pb_data

# Expón el puerto
EXPOSE 8080

# Ejecuta PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
