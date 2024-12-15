const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349019406102";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019406102";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_11_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSVnRjMkNtRUR5czBaYi9xbHk5WWpKMUZLVllIL3JvdWRCUjNrRTVPMHVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKUjVfTGloelIwLVFMeDZZY1lPT1FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3M2MxZWM2LWY0ZmEtNGEwNS1iNGFmLWFlZDMwNDM1MWI1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDE2NixcbiAgICAgIDY5LFxuICAgICAgMjA3LFxuICAgICAgMjMsXG4gICAgICA0NCxcbiAgICAgIDE4LFxuICAgICAgNjUsXG4gICAgICA2OSxcbiAgICAgIDE1NSxcbiAgICAgIDE3OCxcbiAgICAgIDE2NCxcbiAgICAgIDI0LFxuICAgICAgMTY5LFxuICAgICAgMjM3LFxuICAgICAgNyxcbiAgICAgIDEyOSxcbiAgICAgIDE1OSxcbiAgICAgIDEzLFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAyMSxcbiAgICAgIDI1LFxuICAgICAgNTAsXG4gICAgICA4NyxcbiAgICAgIDk5LFxuICAgICAgMTkzLFxuICAgICAgMjAsXG4gICAgICA4MyxcbiAgICAgIDE5NyxcbiAgICAgIDQwLFxuICAgICAgMjExLFxuICAgICAgNDYsXG4gICAgICAxNzAsXG4gICAgICAxNyxcbiAgICAgIDIyNixcbiAgICAgIDIzMyxcbiAgICAgIDksXG4gICAgICAxMzUsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDU3S1RaUjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzgxOTU3ODA6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUZXN0aW1vbnlcIixcbiAgICBcImxpZFwiOiBcIjE1NTQ5MTE3MDgxNjE0NjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdTdoUDRDRU5EVC9Mb0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNaNVBkNUxDM250WE1BZjZTVmtOQlRPL3QzQ1luNitlM043OUNYUEE3bmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ3FxWDhoeUNxRXBoVW9PVmlISkpEelIwNDdTUFBhYVN2a21ZOE9VZkh3K3NGS3dNRlRnUmIrN3lxVU04YVJSbnpLL1RZRkUrbjJaZldzbXEzRVJ6Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQTA1MnBaN1Z1d29Zcmt6bUFUbXJMNEdCL05TSk1sdGJrL096S2ZqRmo2TmlCbHpZQVFEcmJOTWdMUXRxRjljbHgyU2ErSGM3WW9DekVPQzRzSkhnZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzODE5NTc4MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Mjg5ODc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnZGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCWU9pcXg1Z1k3WjB3VWVLNHR0L0haVGxOazgxdzUzanBOQjhmZzVXZ3E4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMTE4NTI1OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAwMjM2ODQ2OTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "JAY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
