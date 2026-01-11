let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularNotas(objAtletas){
    let mediaAtletas = [];
    for (let i = 0; i < objAtletas.length; i++) {
        let notasOrdenadas = objAtletas[i].notas.sort((a, b) => a - b).slice(1, 4);
        mediaAtletas.push(notasOrdenadas.reduce((total, nota) => total = total + nota, 0)/ notasOrdenadas.length);
        console.log("Atleta: " + objAtletas[i].nome);
        console.log("Notas obtidas: " + objAtletas[i].notas);
        console.log("Média Válida: " + mediaAtletas[i] + "\n")
    }
}
calcularNotas(atletas);