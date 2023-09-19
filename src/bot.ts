import { artCMD } from "./commands/art";
import { requestCMD } from "./commands/request";
import { bot } from "./services/telegraf";

bot.start((ctx) => {
  ctx.reply("Seja bem-vindo ao Cloft!").then(() => {
    ctx.replyWithHTML(
      "O que você deseja fazer? \n <b>Para criar nova arte:</b> \n Envie-nos a arte marcando essa mensagem com um nome para a estampa na legenda \n <b>Para fazer pedido:</b> \n acesse o site para visualizar todos os modelos disponíveis e então \n /request {estampa} {cor} {tamanho}"
    );
  });
});

requestCMD(bot);
artCMD(bot);

export function runBot() {
  bot.launch();
}
