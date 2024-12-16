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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_12_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm02NHoyVE1WR3VSanVhWEtYVlQyZnRmLzlZTjFBNVNZcGRncFBGbG5lNWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1zaWtlWHUwU1dDMkpudHI1T0QtandcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWQ1YTQ3NTctYThlZC00ODdlLTg4ZWItNmIyMDYwMWNmMmE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDIxMSxcbiAgICAgIDI0LFxuICAgICAgMTk0LFxuICAgICAgMTg2LFxuICAgICAgNjksXG4gICAgICAxNCxcbiAgICAgIDE2MCxcbiAgICAgIDIzLFxuICAgICAgNjMsXG4gICAgICAxNjAsXG4gICAgICAxLFxuICAgICAgMTkxLFxuICAgICAgNDcsXG4gICAgICA0NixcbiAgICAgIDMwLFxuICAgICAgNDQsXG4gICAgICAxNzYsXG4gICAgICAxNjQsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMDQsXG4gICAgICAxNjEsXG4gICAgICA1NyxcbiAgICAgIDIyMyxcbiAgICAgIDQ1LFxuICAgICAgNTAsXG4gICAgICA1OCxcbiAgICAgIDEwMSxcbiAgICAgIDE5NixcbiAgICAgIDI1MCxcbiAgICAgIDEzMCxcbiAgICAgIDI3LFxuICAgICAgMTI4LFxuICAgICAgMTk3LFxuICAgICAgMTUxLFxuICAgICAgNTgsXG4gICAgICAxNzksXG4gICAgICAxMTIsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMU5MM0hSNlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTk0MDYxMDI6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKQVlcIixcbiAgICBcImxpZFwiOiBcIjE1NzY4NTg0ODc2NDU1OTo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdXJpZDRCRU5ITGdyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlUyYTVZUE5nWVNlZGVFUXNLVjJpZjQrSGloRUVNRW5qTmdENWhFUEw5Z289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTStLTnZMMVdpblplYmVQSEFvZ3dlTnovV2lzVGVsK25zTkR6eHFzcUNpMkwzTWlxVXBaOTBZWTJCY1cyRlhGT0pYODRCU2xDWUNJY0RsSGgvZTRaQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUpld21JVEwvaUN1eXk0OEQ2aFpnVmhJeDdVN2IzWTZ1NXljV0JSR3FESVRyVFdTRlpnZ3RjajFmK2ZIeTd6U2J0L0t4eS9pV2dOaGFDVVlpMjN2aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxOTQwNjEwMjo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Mzg3MTU4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
