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