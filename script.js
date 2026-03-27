// FILMES
let filmes = [

    {
    titulo: " A FORJA",
    imagem: "Imagens/Interstellar_Filme.png",
    descricao: "Narra a jornada de Isaiah Wright, um jovem de 19 anos sem rumo que, após pressão da mãe e mentoria cristã, transforma sua vida através da fé, oração e responsabilidade."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "The Chosen",
    imagem: "Imagens/StrangerThings_Filme.jpg",
    descricao: "é um drama histórico revolucionário que narra a vida de Jesus (Jonathan Roumie) na Judeia do século I, com foco nos seus relacionamentos e ensinamentos, visto pelos olhos daqueles que o conheceram."
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();