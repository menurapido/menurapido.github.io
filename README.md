# menurapido.github.io

## Deploy

Deploy para o gh-pages, basicamente você irá dar o build, fazer todo o procedimento do git e adicionar a última linha que é para subir a pasta dist para a branch gh-pages

Tentei algumas formas de automatizar pelo actons do github mas sem sucesso

``` 
npm run build

git add .

git commit -m "deploy"

git push

git subtree push --prefix dist origin gh-pages

```

Ainda acontecem alguns problemas com o comando subtree e a branch gh-pages, devido a minha falta de conhecimento eu apago a branch e rodo o comando ```git subtree push --prefix dist origin gh-pages``` que ele cria uma nova branch e funciona, ainda irei aprender a fazer direito