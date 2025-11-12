const fetchdata = async () =>{
    const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
    // await => la app corre en paralelo
    const response =  await fetch(API_URL);
    const data = await response.json()
    return data;

}

let button : HTMLButtonElement = document.querySelector(".btnInfo") as HTMLButtonElement;
let parrafo : HTMLParagraphElement = document.querySelector(".info") as HTMLParagraphElement;

button.addEventListener("click", async () =>{
    const data = await fetchdata()
    parrafo.innerHTML = JSON.stringify(data);
})


// generar compilacion mediante ==> tsc -c tsconfig.json