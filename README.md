
# API that solves geolocation problems

This API receives two or more address and return the distance between them, using the Euclidean Function

## References

 - [Geolocation documentation](https://developers.google.com/maps/documentation/geocoding/start)
 - [Axios documentation](https://axios-http.com/ptbr/docs/intro) 
 - [Euclidean Function](https://pt.wikipedia.org/wiki/Dist%C3%A2ncia_euclidiana)
## API Documentation

#### Return all addresses registered

```http
  GET /route
```

#### Retun all addresses registered and the distance between them

```http
  GET /result
```

#### Add Address

```http
  POST /route
```

Receives the address to be able to use geolocation.

| Param         | Type     | Description                                   |
| :----------   | :--------| :------------------------------------------ |
| `number`      | `number` | **Obrigatório**. The number of address (Ex: 305) |
| `street`      | `string` | **Obrigatório**. The name of street (Ex:Av Roma)|
| `city`        | `string` | **Obrigatório**. The name of city (Ex:Rio de Janeiro)|
| `state`       | `string` | **Obrigatório**. The name of state (Ex: RJ) |





## Instalação

Install my project with npm

```bash
  npm install 
  cd geolocation
```
Install my project with yarn

```bash
  yarn install 
  cd geolocation
```
## Euclidean Function

The Function is: √(xLongitude - xLatitude )²+(yLongitude - yLatitude )²


## Techs

<div style="display: inline_block"><br>
  <img align="center" alt="Juan-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Juan-NodeJS" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Juan-NodeJS" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg">
  <img align="center" alt="Juan-VsCode" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg">
  <img align="center" alt="Juan-VsCode" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg">
  <img align="center" alt="Juan-VsCode" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/yarn/yarn-original.svg">

</div>

## Autores

- [Juan Cassiano](https://www.github.com/juancassiano)

