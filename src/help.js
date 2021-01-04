const help = (prefix) => {
	return ` ❉─────COMANDOS STICKER─────❉\n
╔════════════════════════════════════\n
║│➸comando : *${prefix}sticker* ou *${prefix}stiker*
║│➸desc : converter imagem / gif / vídeo em adesivo
║│➸uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
   ════════════════════════════════════\n
║│➸comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
║│➸desc : converter imagem em adesivo removendo o fundo
║│➸uso : responder imagem ou enviar imagem com legenda\n
   ════════════════════════════════════\n
║│➸comando : *${prefix}imagem*
║│➸desc : converter adesivo em imagem
║│➸uso : responder msg com o comando\n
   ════════════════════════════════════\n
║│➸comando : *${prefix}tsticker* ou *${prefix}tstiker*
║│➸desc : converter texto em adesivo
║│➸usage : *${prefix}tsticker texto aqui*\n
╚════════════════════════════════════\n

            ❉─────COMANDO MEMES─────❉\n
            
╔════════════════════════════════════\n 
║│➸command : *${prefix}meme*
║│➸desc : imagens aleatórias de meme [english]
║│➸usage : apenas envie o comando\n
   ════════════════════════════════════\n
║│➸command : *${prefix}memeindo*
║│➸desc : random meme images [indo]
║│➸usage : just send the command\n
╚═══════════════════════════════════\n

             ❉─────COMANDOS DIFERENTE─────❉\n
             
╔═══════════════════════════════════\n
║│➸command : *${prefix}gtts*
║│➸desc : converter texto em fala / áudio
║│➸usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
   ════════════════════════════════════\n
║│➸command : *${prefix}lolicon*
║│➸desc : imagens aleatórias de loli
║│➸usage : apenas envie o comando\n
   ════════════════════════════════════\n
║│➸command : *${prefix}nsfwloli*
║│➸desc : imagens aleatórias de nsfw loli
║│➸usage : apenas envie o comando\n
   ════════════════════════════════════\n
║│➸command : *${prefix}url2img*
║│➸desc : tirar screenshots da web
║│➸usage : *${prefix}url2img [tipo] [url]*\n
   ════════════════════════════════════\n
║│➸command : *${prefix}simi*
║│➸desc : sua mensagem será respondida por simi
║│➸usage : *${prefix}simi sua mensagem*\n
   ════════════════════════════════════\n
║│➸command : *${prefix}ocr*
║│➸desc : pegue o texto na foto
║│➸usage : responder imagem ou enviar imagem com legenda\n
   ════════════════════════════════════\n
║│➸command : *${prefix}wait*
║│➸desc : pesquisar anime com imagem [What Anime Is This / That]
║│➸usage : responder imagem ou enviar imagem com legenda\n
   ════════════════════════════════════\n
║│➸command : *${prefix}prefixo*
║│➸desc : substituir prefixo
║│➸usage : *${prefix}prefixo [texto|opcional]*\nexample : *${prefix}prefixo ?*
║│➸note : Este comando só pode ser usado pelo proprietário do bot\n
╚═══════════════════════════════════\n

              ❉─────COMANDOS PARA GRUPO─────❉\n
              
╔═══════════════════════════════════\n
║│➸command : *${prefix}add*
║│➸desc : adiciona membro ao grupo
║│➸usage : *${prefix}add 5511xxxxxx*\n
║│➸note : tornar o membro do grupo como administrador do grupo!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}kick*
║│➸desc : remover membros do grupo
║│➸usage : *${prefix}kick @tagmembro*\n
║│➸note : tornar o membro do grupo como administrador do grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}promover*
║│➸desc : tornar o membro do grupo como administrador do grupo
║│➸usage : *${prefix}promover @tagmembro*\n
║│➸note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}rebaixar*
║│➸desc :tornar o administrador do grupo como membro do grupo
║│➸usage : *${prefix}rebaixar @tagmembro*\n
║│➸note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}linkgrupo*
║│➸desc : pegue o link do grupo
║│➸usage : apenas envie o comando
║│➸note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}sair*
║│➸desc : Faça o bot sair do grupo
║│➸usage : apenas envie o comando
║│➸note : Só pode ser usado por administradores de grupo e proprietário do bot\n
   ════════════════════════════════════\n
║│➸command : *${prefix}chamada*
║│➸desc : marca todos os membros do grupo, incluindo administradores também
║│➸usage : apenas envie o comando
║│➸note : Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}chamada2*
║│➸desc : marca todos os membros do grupo, incluindo administradores também
║│➸usage : apenas envie o comando
║│➸note : Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}chamada3*
║│➸desc: marca todos os membros do grupo, incluindo administradores também
║│➸uso : apenas envie o comando
║│➸nota : Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}simih*
║│➸desc : ative o modo simi no grupo
║│➸uso : *${prefix}simih1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
║│➸nota : Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}adms*
║│➸desc : mostra todos os adms do grupo
║│➸uso : manda so o comando
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}bemvindo*
║│➸desc :usar o comando com 1 para ativar e 0 para desativar
║│➸uso : ${prefix}bemvindo 1 ou ${prefix}bemvindo 0
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}bloqueados*
║│➸desc : usar o comando para ver quantos contatos o bot bloqueou
║│➸uso : ${prefix}bloqueados 
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}clone*
║│➸desc : mandar o comando mais o @tag do membro
║│➸uso : ${prefix}clone @tag do membro
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}tiktok*
║│➸desc :mandar o comando mais a url do video
║│➸uso :${prefix}tiktok www.tiktok/xxxxxxxxxxxx\n
   ════════════════════════════════════\n
║│➸command : *${prefix}tiktokstalk*
║│➸desc : mandar o comando mais o username do tiktoker
║│➸uso :${prefix}tiktokstalk bianca_....\n
════════════════════════════════════\n
║│➸command : *${prefix}clearall*
║│➸desc : o dono do bot usa para limpar todo o chat
║│➸usage : ${prefix}clearall e so esperar\n
   ════════════════════════════════════\n

                   ❉─────DONO DA GIT─────❉\n

╔═══════════════════════════════════\n
║│➸DONO DO BOT: TIO PAIN\n
║│➸CRIADOR DO MENU: TIO PAIN XD\n
║│➸NUMERO DO DONO: wa.me/5511949545217\n
║│➸DIA DE CRIAÇÃO: 04/01/2021\n
╚═══════════════════════════════════\n`
}

exports.help = help
