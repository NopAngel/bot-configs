import { List } from './functions/list/list'
import { error } from "./functions/error/index"
import { songs } from "./functions/songs/index"
import express from "express";
import { Bot } from "grammy";
import { Jokes } from "./functions/jokes/index"
import { ALLOWED_COMMANDOS } from "./commands";
import { welcome } from "./functions/welcome";
import { youtubeConvert } from "./functions/youtube-convert";

const bot = new Bot("The Token Bot")

const app = express();

bot.command("start", async (ctx) => ctx.reply("¡Hola, buenas!, ¿En que te puedo ayudar?, ¡Sí necistas ayuda escribe /help!"));

bot.on("message", async (ctx) => {
  const { text } = ctx.message;
/*
  if (text === ALLOWED_COMMANDOS.WELCOME) {
    welcome(ctx);
  }

  if (text === ALLOWED_COMMANDOS.CONVERTYT) {
    youtubeConvert(ctx);
  }*/

  if(text === ALLOWED_COMMANDOS.WELCOME) welcome(ctx)
  else if(text === ALLOWED_COMMANDOS.MUSICS) songs(ctx)
  else if(text === ALLOWED_COMMANDOS.CONVERTYT) youtubeConvert(ctx)
  else if(text === ALLOWED_COMMANDOS.JOKES) Jokes(ctx);
  else if(text === ALLOWED_COMMANDOS.LIST) List(ctx);
  else error(ctx)
  
});

bot.start();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
