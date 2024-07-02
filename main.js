
/// Biblioteca de animação 




/// Método trim para reomver os espaços antes e após uma string - .trim()

///////////// Variáveis que armazenam a classe e o id que estão no HTML
let containerSelect = document.querySelector('#container')
var containerElemento = document.querySelector('.cards')
var novaPostagemElemento = document.querySelector('#novaPostagem')

///////////// variaveis para armazenar os dados do input
let inputBanner = document.querySelector('#banner')
let inputGithub = document.querySelector('#github')
let inputNome = document.querySelector('#nome')
let inputOcupacao = document.querySelector('#ocupacao')
let inputTelefone = document.querySelector('#telefone')
let inputEmail = document.querySelector('#email')
let inputPortifolio = document.querySelector('#portifolio')
let inputCidade = document.querySelector('#cidade')
let inputInstagram = document.querySelector('#instagram')
let inputLinkedin = document.querySelector('#linkedin')

///////Inserindo posts principais que serão carregados na página ao ser acessada
let postsPrincipais = [
  {
    campoBanner:"https://media4.giphy.com/media/mWeDPFbZvTc2303gHC/200w.webp?cid=ecf05e47p0o2otg4ospo90gy3g5qfmr2ikm9d8kzt26lnag0&rid=200w.webp&ct=g",
    campoGithubFoto:"https://avatars.githubusercontent.com/u/102038474?v=4",
    campoNome:"Wiston Thiago",
    campoOcupacao:"Analista de Redes e Infraestrutura",
    campoTelefone:" (86)-9xxxx-xxxx",
    campoEmail:"	wiston.wtss@gmail.com",
    campoPortifolio:"https://github.com/WistonThiago",
    campoCidade:"Teresina",
    campoGithub:"https://github.com/WistonThiago",
    campoInstagram:"https://www.instagram.com/wistonthiago",
    campoLinkedin:"https://br.linkedin.com/in/wistonthiago"
  },
  {
    campoBanner:"https://media2.giphy.com/media/20XFN3vWiU79fBQgBc/200w.webp?cid=ecf05e47tzaj7pc9hfo92cekjl3fdf4ftjdahnw1zps76g0m&rid=200w.webp&ct=g",
    campoGithubFoto:"https://avatars.githubusercontent.com/u/62851597?v=4",
    campoNome:"Ivanaldo Santos",
    campoOcupacao:"Estudante de Tecnologia",
    campoTelefone:" (11)-9xxxx-xxxx",
    campoEmail:"ivanaldo594@gmail.com",
    campoPortifolio:"https://www.linkedin.com/in/ivanaldo-silva-3482926a/",
    campoCidade:"São Paulo",
    campoGithub:"https://github.com/IVANALDOSANTOS",
    campoInstagram:"@...",
    campoLinkedin:"https://www.linkedin.com/in/ivanaldo-silva-3482926a/"
  },


]
for(var postPrincipal of postsPrincipais){
  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${postPrincipal.campoBanner}');"></div>

    <div class="img-github">
      <img src="${postPrincipal.campoGithubFoto}" alt="" />
    </div>

    <div class="apresentacao">
      <h2>${postPrincipal.campoNome} </h2>
      <h3>${postPrincipal.campoOcupacao}</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span>${postPrincipal.campoEmail}</span></i>
      <i class="fa-solid fa-phone-flip"> <span>+55${postPrincipal.campoTelefone}</span></i>
      <i class="fa-solid fa-globe"> <span><a href="${postPrincipal.campoPortifolio}" target ="blanc_">Site / Portifólio</a> </span></i>
      <i class="fa-solid fa-location-dot"> <span>${postPrincipal.campoCidade}</span></i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="${postPrincipal.campoGithub}" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="${postPrincipal.campoInstagram}" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="${postPrincipal.campoLinkedin}" target="_blank"></a>
    </div>
  </div>
        `

}



///////////// Inserindo um novo post depois de preencher o formulário
// Utilizando o event listenner para adicionar. E nessa caso, foi removido o onclick do botao lá no html

novaPostagemElemento.addEventListener('click', event => {
  // Para evitar o recarregamento da página no momento em que o botão de dentro do formulário é clicado.
  event.preventDefault()



  if(inputBanner.value == ''){ inputBanner.value = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHE5enBrOG0wMGFoMmZhbHRidHFmczM3cWZrcmM0a3Q2NTlsOGE1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0DgHlni6c1iHjGYo6/giphy.webp' }
  if(inputGithub.value == ''){ inputGithub.value = 'jfdoppler' }
  if(inputNome.value == ''){ inputNome.value = 'Visitante - Brasil Tour' }
  if(inputOcupacao.value == ''){ inputOcupacao.value = 'DEV Assembly Sênior' }
  if(inputEmail.value == ''){ inputEmail.value = 'teumelhoremail@email.com' }
  if(inputTelefone.value == ''){ inputTelefone.value = ' (12) 91234-5678' }
  if(inputPortifolio.value == ''){ inputPortifolio.value = 'https://www.github.com/' }
  if(inputCidade.value == ''){ inputCidade.value = 'Planeta Terra - Brasil' }
  if(inputInstagram.value == ''){ inputInstagram.value = 'https://www.instagram.com/' }
  if(inputInstagram.value == ''){ inputInstagram.value = 'https://www.linkedin.com/' }
  


  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${inputBanner.value}');"></div>

    <div class="img-github">
      <img src="https://www.github.com/${inputGithub.value}.png" alt="" />
    </div>

    <div class="apresentacao">
      <h2>${inputNome.value} </h2>
      <h3>${inputOcupacao.value}</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span>${inputEmail.value}</span></i>
      <i class="fa-solid fa-phone-flip"> <span>+55${inputTelefone.value}</span></i>
      <i class="fa-solid fa-globe"> <span><a href="${inputPortifolio.value}" target ="blanc_">Site / Portifólio </a> </span></i>
      <i class="fa-solid fa-location-dot"> <span>${inputCidade.value}</span></i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="https://www.github.com/${inputGithub.value}" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="https://www.instagram.com/${inputInstagram.value}" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="https://www.linkedin.com/in/${inputLinkedin.value}" target="_blank"></a>
    </div>
  </div>
        `

  //////////// Para limpar os campos de inout depois de enviar

  inputBanner.value = ""
  inputGithub.value = ""
  inputNome.value = ""
  inputOcupacao.value = ""
  inputTelefone.value = ""
  inputEmail.value = ""
  inputPortifolio.value = ""
  inputCidade.value = ""
  inputInstagram.value = ""
  inputLinkedin.value = ""
})