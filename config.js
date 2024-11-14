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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084644182";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_32_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDg2LFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlLbVM3YU1qcEpwZGloY3VJQXpsZmpsMFpLOXpjRFkwSzhwVmVadmcxVUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktMbzhya0s5UnNLaFhWdENGczFERlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk0N2U5ZWYtODg4OC00MTUxLTk3OWItYTEzYTI0N2U1NjUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDc1LFxuICAgICAgNjQsXG4gICAgICA3MyxcbiAgICAgIDM1LFxuICAgICAgMjksXG4gICAgICAxOTUsXG4gICAgICA0MCxcbiAgICAgIDIyLFxuICAgICAgMTMzLFxuICAgICAgMjM2LFxuICAgICAgMjA3LFxuICAgICAgNzIsXG4gICAgICAzMCxcbiAgICAgIDQyLFxuICAgICAgMTI4LFxuICAgICAgMTkyLFxuICAgICAgMjAzLFxuICAgICAgMTUzLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDExNixcbiAgICAgIDI0OSxcbiAgICAgIDM4LFxuICAgICAgMjAyLFxuICAgICAgMjUyLFxuICAgICAgMjQzLFxuICAgICAgMjE4LFxuICAgICAgNTQsXG4gICAgICAwLFxuICAgICAgOTQsXG4gICAgICAxNzUsXG4gICAgICAyOCxcbiAgICAgIDMxLFxuICAgICAgNTIsXG4gICAgICAyNTMsXG4gICAgICAxNTYsXG4gICAgICAxMzIsXG4gICAgICA1MyxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0V0ZFMkRSWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MTk3ODM1NzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIxNDY2NDkwMjAwMTE2OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BETDVvc0RFTG5qbDdrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjMyM29wVnJ2eWpvNE9zcGRlOThmKytSUTFteG5XMllCSmtaMFJvSEJVbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1UVFBWE16aDlXY2pyQXNCRXIwOE1hM3JhOFhBaURBTEtDU0ZJdXc1VnVxUFc3Rkl6TGVJbVBGVlRJd2lrV0FQOVVhL1FuMHI4NmZPeHY2OUtWKzJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqeVhONit6a05HQWNhdWpNZUpLRHpqZ1VZV2VsWHlpeGhRMGpzQ3c1d09wdGV2eDlGaGtaZStpSGM1OUh5UTFvZkNtZ05wR0RHalNIRXBXb2ZZVTdBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxOTc4MzU3OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1Mzk5NjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname : process.env.BOT_NAME  || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername:process.env.OWNER_NAME|| "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",


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
