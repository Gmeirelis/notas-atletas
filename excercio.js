

function sistema(atletas){
   /*percorre cada atleta da lista, do primeiro até o último */
    for( let i = 0; i < atletas.length; i++){

        const atleta = atletas[i];
        const notas = atleta.notas;

      /* ordenar as notas em ordem crescente*/
      const notasOrdenadas = notas.slice().sort(function(a,b){
        return a - b
      });
        /* retirar a maior e a menor nota*/
      const notasvalidas = notasOrdenadas.slice(1,4);
      
       /* soma as notas validas*/
      let soma = 0 
        notasvalidas.forEach(function(nota){
        soma += nota

       });
        /*  calculo da media dos atletas*/
       const media = soma / notasvalidas.length

       console.log("atleta:"  +  atleta.nome)
       console.log("notas obtida:"  +  notas.join(","))
       console.log("media valida:"  +  media )
       console.log( "                 ")
    }

}

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

console.log(sistema(atletas))

