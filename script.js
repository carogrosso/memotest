document.addEventListener("DOMContentLoaded", () =>{

// CREO UN ARREGLO CON TODAS LAS FICHAS X 2 QUE SE VAN A MOSTRAR EN EL TABLERO
const fichas = [
  {
    nombre: "queso",
    img: "fichas/1.png"
  },
  {
    nombre: "queso",
    img: "fichas/1.png"
  },
  {
    nombre: "pancho",
    img: "fichas/2.png"
  },
  {
    nombre: "pancho",
    img: "fichas/2.png"
  },
  {
    nombre: "pizza",
    img: "fichas/3.png"
  },
  {
    nombre: "pizza",
    img: "fichas/3.png"
  },
  {
    nombre: "dona",
    img: "fichas/4.png"
  },
  {
    nombre: "dona",
    img: "fichas/4.png"
  },
  {
    nombre: "manzana",
    img: "fichas/5.png"
  },
  {
    nombre: "manzana",
    img: "fichas/5.png"
  },
  {
    nombre: "morronrojo",
    img: "fichas/6.png"
  },
  {
    nombre: "morronrojo",
    img: "fichas/6.png"
  },
  {
    nombre: "morronamarillo",
    img: "fichas/7.png"
  },
  {
    nombre: "morronamarillo",
    img: "fichas/7.png"
  },
  {
    nombre: "sandwich",
    img: "fichas/8.png"
  },
  {
    nombre: "sandwich",
    img: "fichas/8.png"
  },
  {
    nombre: "palta",
    img: "fichas/9.png"
  },
  {
    nombre: "palta",
    img: "fichas/9.png"
  },
  {
    nombre: "naranja",
    img: "fichas/10.png"
  },
  {
    nombre: "naranja",
    img: "fichas/10.png"
  }
]

  fichas.sort(()=> 0.5 - Math.random())

  const grid = document.querySelector(".grid")
  const cantidad = document.getElementById("cantidad")
  const puntaje = document.getElementById("puntaje")
  const tuPartida = document.getElementById("tupartida")
  const tituloBienvenida = document.getElementById("titulobienvenida")
  const msjBienvenida = document.getElementById("msjbienvenida")
  const btnReiniciar = document.getElementById("reiniciar")
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []


  function crearTablero() {
    for (let i=0; i<fichas.length; i++){
      var ficha = document.createElement("img")
      ficha.setAttribute("src", "fichas/dorso.png")
      ficha.setAttribute('data-id', i)
      ficha.addEventListener("click", elegir)
      grid.appendChild(ficha)
    }
  }


  function jugar(){
    const mensaje = document.getElementById("mensaje")
    const resultado = document.getElementById("puntaje")
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    function actualizarTextos() {
      resultado.classList.remove("display-none");
      puntaje.classList.remove("display-none");
      tuPartida.classList.remove("display-none");
      tituloBienvenida.classList.add("display-none");
      msjBienvenida.classList.add("display-none");
    }
    

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'fichas/dorso.png')
      cards[optionTwoId].setAttribute('src', 'fichas/dorso.png')
      mensaje.innerHTML = "Misma carta, elegí otra!"
      actualizarTextos()
    }
    else if (cardsChosen[0] === cardsChosen[1]){
      mensaje.innerHTML  =  "Vas muy bien!"
      actualizarTextos()
      cards[optionOneId].setAttribute("src", "fichas/blanco.png")
      cards[optionTwoId].setAttribute("src", "fichas/blanco.png")
      cards[optionOneId].removeEventListener('click', elegir)
      cards[optionTwoId].removeEventListener('click', elegir)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute("src", "fichas/dorso.png")
      cards[optionTwoId].setAttribute("src", "fichas/dorso.png")
      mensaje.innerHTML  = "Segui intentando!"
      actualizarTextos()

    }
    cardsChosen = []
    cardsChosenId = []
    cantidad.textContent = cardsWon.length
    if (cardsWon.length === fichas.length/2){
      mensaje.textContent = "Fin del juego!"
      btnReiniciar.classList.remove("display-none")
    }
  }


  function elegir(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(fichas[cardId].nombre)
    cardsChosenId.push(cardId)
    this.setAttribute('src', fichas[cardId].img)
    if (cardsChosen.length === 2){
      setTimeout(jugar, 500)
    }
  }

  crearTablero()

  })


  function reiniciar(){
    window.location.reload()
  }

