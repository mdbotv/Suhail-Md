const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪᴍᴜᴋᴛʜɪ ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94785205012";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/747a3b3359af2f6dc45bb.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_47_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqcUQwdFE3amRTYkJIcWwwVEo4VEtrWWtsTXBaYWVXemo3Z2szZjBQcGtvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4bFpDMHVRSFR4R3d5SVk5VC1xY09RXCIsXG4gIFwicGhvbmVJZFwiOiBcImMwMmZhMThjLTM0MDMtNDE3My04YmMxLWM5NWEyNWNjMTFiZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDIzNSxcbiAgICAgIDU3LFxuICAgICAgMTIwLFxuICAgICAgMTI1LFxuICAgICAgMjAzLFxuICAgICAgMjU1LFxuICAgICAgODMsXG4gICAgICAyMDQsXG4gICAgICA2OCxcbiAgICAgIDMwLFxuICAgICAgNDYsXG4gICAgICAyMTAsXG4gICAgICAxMDksXG4gICAgICAzLFxuICAgICAgNzYsXG4gICAgICAyNDksXG4gICAgICA4NixcbiAgICAgIDE5NixcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTkzLFxuICAgICAgOTMsXG4gICAgICA2NCxcbiAgICAgIDIzMSxcbiAgICAgIDExOSxcbiAgICAgIDE0LFxuICAgICAgMjIsXG4gICAgICAyNSxcbiAgICAgIDQ5LFxuICAgICAgMTIwLFxuICAgICAgMjA5LFxuICAgICAgMTY4LFxuICAgICAgMTM1LFxuICAgICAgOTUsXG4gICAgICA2OCxcbiAgICAgIDE4OSxcbiAgICAgIDE4NCxcbiAgICAgIDM2LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVRKR0tRWE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg1MjA1MDEyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY1MTgyNjA0Njk4NTk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hYL0h3UTFyaXF0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5S09HajE3U2F3QTV2LzUxaStnOEM1amdGM2VSSUsyeXRlMHRwV1pHMHpVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm8vMExZWHdpdGh4b1FWbXNKa0ZSOU5jeXZKRGN5azEzeDh0RU94UUZLeFJGRWtyTVFoYzhWRVgzWlFCV1ZnM2NkVDBpcmNnMnpHeDRVWHdFWVVEdkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVleTVjNkdBUWFwOFM0UGZ4dmF3anYyTHFUYk5LN2QwTEpCeitZaFprUUMxRGFTaHlWWWMrVjhXMVpvOGZwT1EzOHVGWTArRnFMV3RrUXp5OVFRZ2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg1MjA1MDEyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM2MDAyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNES1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0RLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnkwOW8yVFlML2w2eXFTYVZobURnWnpQTDF2SDdVRFdPbHNTaC8rdkJ1az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjIwODk2OTMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪᴍᴜᴋᴛʜɪ-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "VIMUKTHI",
  packname: process.env.PACK_NAME || "VIMUKTHI",
  botname : process.env.BOT_NAME  || "VIMUKTHI MD",
  ownername:process.env.OWNER_NAME|| "VIMUKTHI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
