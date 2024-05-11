
export const songs = async (context:any) => {
    const songs: readonly string[] = ["Gata Only - Cris MJ","Barbietúricos - Metrika","Ready Tesher","Luna de Colores - Oscar Barrul","Santa - Rvssian","Buzón - Palermo"]
    let song1:string = "hola";
    let song2:string = "hola";
    const numberRandom = Math.round(Math.random()*1+2)
    const numberRandom2 = Math.round(Math.random()*4+5)

    console.log(numberRandom)
    if(numberRandom == 1){
        song1 = songs[0]
    } else if(numberRandom == 2){
        song1 = songs[1]
    } else {
        song1 = songs[2]
    }

    if(numberRandom2 == 4){
        song2 = songs[3]
    } else if(numberRandom2 == 5){
        song2 = songs[4]
    } else {
        song2 = songs[5]
    }

    context.reply(`La mejor musica, y las que te recomiendos son:
    
    ${song1}
    ${song2}`)
  };
  