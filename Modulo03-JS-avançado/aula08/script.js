let listElement = document.getElementById("app");

let posts = [];

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response) => response.json())
    .then((json) => {
        posts = json;

        posts.map((item) => {
            let liElement = document.createElement("li");
            let titleElement = document.createElement("h1");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("p");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.append(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.append(descriptionElement);

            listElement.appendChild(liElement)
        })
    })
    .catch(() => {
        console.log('ALGO DEU ERRADO');
    })
}

nutriApp();