export const Jokes = async (context:any) => {
    const jokesContent: readonly string[] = ["¿Sabes cual es la fruta que más rie?, La naranga-ga🤣","Sabes cual es el cafe más peligroso?, El Ex-Preso🤣","Sabes que le dijo Batman a Robin antes de Subir al coche?, Robin. Sube al Coche🤣"];

    const randomJoke = Math.round(Math.random()*3)
    let jokeBot:string = "Esto no se va a ver..."
    console.log(randomJoke)
    if(randomJoke == 0){
        jokeBot = jokesContent[0]
    } else if(randomJoke == 1){
        jokeBot = jokesContent[1]
    } else{
        jokeBot = jokesContent[2]
    }
    

    
    context.reply(`Te vas a tronchar🤣:
    
        ${jokeBot}
    `)
  };
  