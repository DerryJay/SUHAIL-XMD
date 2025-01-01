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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_35_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1VRHhONjlUWHJKdlZWNktZMlFwSGpFQ2NUTHFjTmxHV0lPUEhsZlpBUWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjM5NjM0MjI2MjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRTZENTQ4QTk4RDcwMzBGQUQwRTUwN0QzMzkyREU2OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU3NjM3MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mzk2MzQyMjYyMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNCOUZBQjEzMTU2NTgyNUNGMjBEN0YwQjVDNkFERjJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTc2MzczMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpMXhtVDE2dlQwaXh5QlpJVFdzY293XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiYTFhYmEyLWQwMGMtNGU5Ny05ODExLTRjY2M4ZGU4MWU5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAyOSxcbiAgICAgIDIwOSxcbiAgICAgIDIzOCxcbiAgICAgIDEzNSxcbiAgICAgIDg0LFxuICAgICAgMTA5LFxuICAgICAgMjM2LFxuICAgICAgMjM5LFxuICAgICAgMTEyLFxuICAgICAgODQsXG4gICAgICAxMTMsXG4gICAgICAxNDYsXG4gICAgICA2LFxuICAgICAgMjU1LFxuICAgICAgMzksXG4gICAgICA1MCxcbiAgICAgIDE5MCxcbiAgICAgIDIyLFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTY1LFxuICAgICAgMjEyLFxuICAgICAgMzYsXG4gICAgICAxMTAsXG4gICAgICA0MCxcbiAgICAgIDE1MSxcbiAgICAgIDE4OCxcbiAgICAgIDIwNyxcbiAgICAgIDUwLFxuICAgICAgMjE5LFxuICAgICAgMjgsXG4gICAgICAxMTQsXG4gICAgICAxNTQsXG4gICAgICAxMzMsXG4gICAgICAyMzUsXG4gICAgICA3NCxcbiAgICAgIDEwNCxcbiAgICAgIDIwNCxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMSk0xTUg5SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjM5NjM0MjI2MjM4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTM4MzAxMjU5OTU0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGl+GthOG0mC7JoitzYW1zb25cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ095TWdGRUk3TzFyc0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdYemtSYTdaeXk5b0Fnb0N0QVFUTmVNZ0NUMGJCOGxqSGdZa3kzRllHUnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOG5MSTNGOXRKWncvTWwxcENKUjhYTVlGem41eXpsMzNwRmU1bUxNL3dLMkpyZWp3dEx0NUxKYmZ4OHk1Yy9aWHlTMHV0OUE3a3hJYUhqMUNicWNmQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTRrcWNDeDdodTZreE9DaGJyVlVKMkxaZGdSM1FlV0hhbk1ZbHVnSDVqZWtNU1g0aGJsK0RqUEUydnBhUEh3RHJCeEpIRXlHUnBiRG5WTVN3QzNhQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjM5NjM0MjI2MjM4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU3NjM3MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVpdC5qc29uIjogIntcImtleURhdGFcIjpcInIzUDU5NVhaTk5IQ29VNGV5N1JZMWQydnFvbVlOTzhkZmhVUGVvT2xnQ0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5NDM1MzcxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MjgxMzUzMzc1XCJ9Igp9"  // PUT your SESSION_ID 


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
