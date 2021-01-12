# DSDelivery
 <p>Aplicação feita durante o Semana Dev Superior 2.0 04/01/2021 - 10/01/2021. O projeto simula um sistema de entregas de comida por meio de aplicativos web e mobile. Além de construir esses projetos, durante esse evento foram feitos deploys do backend no Heroku e frontend web no Netlify. O backend da aplicação foi feito em Java com Spring Boot e conexão com banco de dados PostgreSQL.</p>

 <p>Na aplicação Web, o usuário pode selecionar os componentes do seu pedido e escolher o local da entrega por meio de um mapa(Leaflet). As sugestões de locais que aparecem no mapa são feitas por requisições utilizando api do Mapbox em plano gratuito</p>

 <p>No apicativo mobile, o entregador pode verificar a lista de pedidos pendentes e selecionar um deles para fazer a entrega. Ao selecionar a opção "Iniciar Navegação", o entregador será redirecionado por meio de deep linking ao aplicativo de GPS nativo mostrando a menor rota da localização atual até o local de entrega.</p>

# Web
<p align="center">
  <p><img align="center" src=".github/DS Delivery Home.png" alt="Landing Web" width="800" border="0"></p>
  <p><img align="center" src=".github/DS Delivery Order 1.png" alt="Mapa Web" width="800" border="0"></p>
  <p><img align="center" src=".github/DS Delivery Order 2.png" alt="Cadastro Web" width="800" border="0"></p>
</p>

# Mobile
<p align="center">
  <img align="center" src=".github/DS Delivery Mobile Home.png" alt="Detalhes Mobile" width="275" border="0">
  <img align="center" src=".github/DS Delivery Mobile Orders.png" alt="Mapa Mobile" width="275" border="0">
  <img align="center" src=".github/DS Delivery Mobile Detail.png" alt="Selecionar posição Mobile" width="275" border="0">
</p>
<p align="center">
  <img align="center" src=".github/DS Delivery Mobile Route.png" alt="Cadastro Mobile" width="275" border="0">
</p>

# Funcionalidades
## Web
 - Cadastro de pedidos

## Mobile
 - Listagem de pedidos pendentes
 - Navegação direta para aplicativo de GPS
 - Exibição de menor rota entre localização atual e ponto de entrega

# Principais Tecnologias
 - Spring Boot
 - ReactJS
 - React Native
 - Expo
 - PostgreSQL
 - Axios
 - Mapbox