
const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.SESSION_ID = process.env.SESSION_ID || '' 

//new
global.botname = process.env.BOT_NAME ||'ANONYMOUS-XMD'//enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'256784670936' //ur owner number
global.ownername = 'Terrivez'//ur owner name
global.themeemoji = '🎭'
global.packname = process.env.PACK_NAME ||"Anonymous Xmd" //enter your stickers author name here
global.author = "Terrivez"
global.creator = "256784670936@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0
global.websitex = "https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y" 
global.wagc = "https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y" 
global.wm = "Terrivez"
global.botscript = 'https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y' 
//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '999' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
global.ytname = "YT: TERRIVEZ" 
global.socialm = "IG: @ANONYMOUS-MD" 
global.location = "Uganda"
const antilinkgc = process.env.ANTILINK_GC || 'TRUE';
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true
global.groupevent = process.env.GROUP_EVENT || 'false' //show update messages in group chat
//msg
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;

global.mess = {
    limit: 'Limit exceeded ⚠️',
    nsfw: 'NSFW disabled. Contact admin to enable 🔞',
    owner: 'Owner-only command ⚠️',
    admin: 'Bot requires admin privileges ⚠️',
    group: 'Group-exclusive feature ⚠️',
    done: 'Operation successful ✓',
    error: 'Execution failed ✗',
    success: 'Success ✓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
