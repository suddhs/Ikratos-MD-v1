import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `ɪɴɴᴏᴄᴇɴᴛ ᴍᴏʀᴇ ᴛʜᴀɴ ɢᴏᴏɢʟᴇ`, `ikratosofc@gmail.com`, `🇵🇰 Pakistan`, `🐙 https://github.com/xIKRATOSx`, `👑 ᴏᴡɴᴇʀ ɪᴋʀᴀᴛᴏs ʙᴏᴛ`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇵🇰 Pakistan`, `🐙 https://github.com/xIKRATOSx/Ikratos-MD-v1`, `🤖 ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ𝟷`]
  ], fkontak)
  await m.reply(`Hi cuddh mk itim @${m.sender.split('@')[0]}, මූ තමා මගේ owner, 😃\nඕන වුනොත් contact කරපන් වට්සැප්`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
