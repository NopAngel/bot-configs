export const List = async (context:any) => {
    context.reply(
      `
      Settings

      Estas son algunas Settings del Bot:

        /page - Ver la página oficial de OmniBot.

        /welcome - Dar una Bienvenida al Usuario.

        /convertyt - Convertidor de Youtube.

        /songs - Las mejores Musicas del 2024.

        /settings - Para ver esta Lista de Configuraciones.

        /jokes - Decir algunos Chistes.
      `
    )
  };
  