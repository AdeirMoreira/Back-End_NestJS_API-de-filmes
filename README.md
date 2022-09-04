<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API de Filmes 🎥🎬 

Essa API foi desenvolvida com a finaliade de praticar o framework [NestJS](https://nestjs.com/) e outras tecnologias Back-End. Trata-se de  uma API para cadastro de usuarios e de filmes. Além do [NodeJS](https://nodejs.org/pt-br/) e do [NestJS](https://nestjs.com/), foi ultilzado o banco de dados [PostgreSQL](https://www.postgresql.org/), o framework [typeORM](https://typeorm.io/) para realizar a manipulação do banco de dados. Por fim, o projeto desenvolvido utilizando containers [Docker](https://docs.docker.com/).

## Status 🚧🔨

- em construção

## Tecnologias e Técnicas 🛠
- [NodeJS](https://nodejs.org/pt-br/)
- [NestJS](https://nestjs.com/)
- [typeORM](https://typeorm.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [PostgreSQL](https://www.postgresql.org/)
- Autenticação Jwt
- POO
- S-O-L-I-D
- Conteinerização com Docker

## ✔️ Features

- [x] Cadastro de usuarios 
- [x] Login com autenticação JWT
- [x] Validação dos dados enviados nas requisições
- [x] Cadastro, consulta, edição e remoção dos filmes

## Modelagem do banco de dados 🎲

O banco de dadas é modelado com 2 entidades: Courses e Tags, cada uma tem sua respectiva tabela, além de uma tabela pivo auxiliar, pois a relacão entre cursos e tags é do tipo muito p/ muitos.


<p align="center">
  <img src="https://user-images.githubusercontent.com/98994187/188250644-3869a466-546b-449e-ba8f-0878ced0a5da.png" width="300" alt="Nest Logo" />
</p>

## Rodar e testar o case com o Docker 🐳

Caso tenha o docker em sua maquina, dê o sequinte comando, o servidor rodará na porta 3000.

Para iniciar o servidor
```
docker compose up
```

Após iniciar o servidor, é possivel testar todos os endpoints no arquivo api.http no qual estão configurados e prontos para uso, bastando substituir os ids nas requisições quando necessario. O arquivo se encotra na raiz do projeto. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/98994187/188251471-e9f8ff97-a5b6-42d6-acbb-0aab5f60ee1c.png" width="600" height="400" alt="Nest Logo" />
</p>

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br />   
</table>