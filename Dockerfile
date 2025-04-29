FROM alpine:latest

# Descarga PocketBase
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.4/pocketbase_0.22.4_linux_amd64.zip \
    && unzip pocketbase_0.22.4_linux_amd64.zip \
    && rm pocketbase_0.22.4_linux_amd64.zip

# Expone el puerto y define el comando de inicio
EXPOSE 8080
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]