var comics = {
    comic1 : {
        "month": "7", 
        "num": 614, 
        "link": "", 
        "year": "2009", 
        "news": "", 
        "safe_title": "Woodpecker", 
        "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}", 
        "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?", 
        "img": "https://imgs.xkcd.com/comics/woodpecker.png", 
        "title": "Woodpecker", 
        "day": "24",
        "score":0
    },
    comic2 : {
        "month": "1", 
        "num": 2103, 
        "link": "", 
        "year": "2019", 
        "news": "", 
        "safe_title": "Midcontinent Rift System", 
        "transcript": "", 
        "alt": "The best wedge issue is an actual wedge.", 
        "img": "https://imgs.xkcd.com/comics/midcontinent_rift_system.png", 
        "title": "Midcontinent Rift System", 
        "day": "25",
        "score":0
    }
}

var com;

function comic(){
    num = Math.random()*(3-1)+1
    num = Math.floor(num)
    if (num==1){
        com = comics.comic1
    }else if (num == 2){
        com = comics.comic2
    }
}

function imprimiendo(){

    comic()

    var padre = document.getElementById('titulo')
    
    while(padre.hasChildNodes()){
        padre.removeChild(padre.lastChild)
    }

    var hijo = document.createElement('h1')
    var texto = document.createTextNode(com.title)
    hijo.appendChild(texto)
    padre.appendChild(hijo)

    var padre = document.getElementById('imagen')

    var eliminar = document.getElementById('imagendiv')
    padre.removeChild(eliminar)

    var hijo = document.createElement('img')
    hijo.setAttribute('id','imagendiv')
    hijo.setAttribute("src",com.img)
    padre.appendChild(hijo)
}

function puntuacion(){
    var calificacion = parseInt(document.getElementById('score').value)
    if(validarPuntuacion(calificacion)){
        if (com.score == 0){
            com.score = calificacion
        }else{
            com.score = Math.floor((com.score + calificacion)/2)
        }
        console.log(com.score)
        mostrarPuntuacion()
    }
}

function mostrarPuntuacion(){
    var padre = document.getElementById('puntuaciones')
    
    hijo = document.getElementById('comic1')
    padre.removeChild(hijo)
    hijo = document.getElementById('comic2')
    padre.removeChild(hijo)

    var texto = document.createElement('t')
    texto.setAttribute('id','comic1')
    var interno = document.createTextNode(comics.comic1.title+' : ' + comics.comic1.score )
    texto.appendChild(interno)
    padre.appendChild(texto)
    var texto = document.createElement('t')
    var interno = document.createTextNode(comics.comic2.title+' : ' + comics.comic2.score)
    texto.setAttribute('id','comic2')
    texto.appendChild(interno)
    padre.appendChild(texto)
}

function validarPuntuacion(ingreso){
    valido = true
    if (ingreso>100 || ingreso <0){
        valido = false
        alert('la puntuación ingresada debe estar entre 0 y 100')
    }
    return valido
}