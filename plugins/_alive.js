import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `

┴│👋 Hey there, ${conn.getName(m.sender)}!     
•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•

ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ 

•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•

*ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт* 

*Cʀєαтєԃ вყ : 💝 Dinuwa Official²⁰²³ 💝*

💝Whatsapp : wa.me/94740804536 

💝Support: https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S

*Type .menu for my command list.*

`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
