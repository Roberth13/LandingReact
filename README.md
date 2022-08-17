Instalar Node JS

Instalar yarn ==> npm install --global yarn

git clone https://github.com/Roberth13/LandingReact.git

cd LandingReact

ejecutar yarn

yarn next-dev


----- Deploy to production

1. En la ruta /packages/landing ejecutar

<code>yarn next build</code>

2. Ejecutar el comando.

<code>yarn next export</code>

3. Esto genera un directorio out dentro del directorio /packages/landing/out, todos estos archivos se deben cargar dentro del directorio raiz del hosting.