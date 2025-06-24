const config = require('../config'),
  os = require('os'),
  axios = require('axios'),
  mimeTypes = require('mime-types'),
  fs = require('fs'),
  path = require('path'),
  {
    generateWAMessageContent,
    generateWAMessageFromContent,
  } = require('darksadas-new-baliyes'),
  { cmd, commands } = require('../command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions')
cmd(
  {
    pattern: 'joinsupport',
    desc: 'Join support group',
    react: '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB',
    category: 'main',
    use: '.joinsupport',
  },
  async (
    _0x4cc2d7,
    _0x188499,
    _0x288edd,
    {
      from: _0x270564,
      reply: _0x402849,
      isOwner: _0x29800c,
      isSachintha: _0x133883,
      isSavi: _0x8db3f4,
      isDev: _0x25b0d6,
      isMani: _0x5bc8e0,
      isMe: _0x16a278,
    }
  ) => {
    if (
      !_0x29800c &&
      !_0x133883 &&
      !_0x8db3f4 &&
      !_0x25b0d6 &&
      !_0x5bc8e0 &&
      !_0x16a278
    ) {
      return
    }
    try {
      const _0xa35c69 = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
        )
      ).data
      let _0x2bd83b = '' + _0xa35c69.supglink,
        _0x1a3b55 = _0x2bd83b
          .split(' ')[0]
          .split('https://chat.whatsapp.com/')[1]
      await _0x4cc2d7
        .groupAcceptInvite(_0x1a3b55)
        .then(() => _0x402849('\u2705 Successfully joined the support group!'))
        .catch(() => _0x402849('\u274C Could not join the group.'))
    } catch (_0x215fcd) {
      console.log(_0x215fcd)
      _0x402849('\uD83D\uDEA9 Error occurred while trying to join the group.')
    }
  }
)
cmd(
  {
    pattern: 'update',
    react: 'ℹ️',
    desc: 'Update your bot to the latest version',
    use: '.update',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x181c2d,
    _0x4ac5bc,
    _0x2a5c84,
    {
      reply: _0x3b1e25,
      isOwner: _0xca7062,
      isSachintha: _0x843cd1,
      isSudo: _0x3449a0,
      isSadas: _0xed1d1c,
      isMani: _0x2d3f96,
      isMe: _0x29f01b,
    }
  ) => {
    if (
      !_0xca7062 &&
      !_0x843cd1 &&
      !_0x3449a0 &&
      !_0xed1d1c &&
      !_0x2d3f96 &&
      !_0x29f01b
    ) {
      return
    }
    try {
      const { exec: _0x251115 } = require('child_process')
      await _0x3b1e25(
        '\uD83D\uDD04 *NADEEN-MD NEW Update in Progress...*  \n\uD83D\uDCE6 *Updating latest code & restarting services...*'
      )
      setTimeout(() => {
        _0x251115('pm2 restart all', (_0x5d28e8, _0x46f579, _0x30f926) => {
          _0x5d28e8 &&
            (console.error(_0x5d28e8),
            _0x3b1e25('\u274C *Update failed during restart!*'))
        })
      }, 3000)
    } catch (_0x4942e7) {
      console.error(_0x4942e7)
      _0x3b1e25('\uD83D\uDEA8 *An unexpected error occurred during update.*')
    }
  }
)
cmd(
  {
    pattern: 'follow',
    react: 'ℹ️',
    alias: ['fl'],
    desc: 'Follow chanals',
    category: 'main',
    use: '.follow',
    filename: __filename,
  },
  async (
    _0x1722e0,
    _0x1ec2d8,
    _0x42234f,
    {
      from: _0x1337a5,
      l: _0x4f4f85,
      quoted: _0x5f1011,
      isSudo: _0xd5c2aa,
      body: _0x1e792d,
      isCmd: _0x16ea22,
      msr: _0x5178e4,
      command: _0x38d999,
      args: _0xdf17b6,
      q: _0x3ead57,
      isGroup: _0x140f8a,
      sender: _0x4f3c49,
      senderNumber: _0x4c765a,
      botNumber2: _0x2f144d,
      botNumber: _0x40ef73,
      pushname: _0x27cc55,
      isMe: _0x4fc33c,
      groupMetadata: _0x579003,
      groupName: _0x17ffab,
      participants: _0x43faf7,
      groupAdmins: _0x277a4f,
      isBotAdmins: _0x455729,
      isCreator: _0x25cdc2,
      isDev: _0x21faa8,
      isOwner: _0x5cb8be,
      isAdmins: _0x9c2c13,
      reply: _0x7f0160,
    }
  ) => {
    try {
      if (!_0x4fc33c && !_0x5cb8be && !_0xd5c2aa) {
        return await _0x7f0160('*\uD83D\uDCDB OWNER COMMAND*')
      }
      if (!_0x3ead57) {
        return await _0x7f0160(
          '\u2757 Please provide a newsletter ID to follow.'
        )
      }
      await _0x1722e0.newsletterFollow(_0x3ead57)
      _0x7f0160(
        '*\u2705 Successfully followed newsletter:* *' + _0x3ead57 + '*'
      )
    } catch (_0x35a56f) {
      console.error(_0x35a56f)
      _0x7f0160(
        '\u274C *Error occurred!*\n\n' + (_0x35a56f.message || _0x35a56f)
      )
    }
  }
)
cmd(
  {
    pattern: 'channelreact',
    alias: ['chr'],
    react: '\uD83D\uDCD5',
    use: '.channelreact *<link>,<emoji>*',
    desc: 'React to a message in a WhatsApp Channel.',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x1ef1b3,
    _0x4ffa35,
    _0x5e5372,
    {
      q: _0x5249ea,
      isSudo: _0x34ce80,
      isOwner: _0x5b647d,
      isMe: _0x57ab3c,
      reply: _0x5225c9,
    }
  ) => {
    try {
      if (!_0x57ab3c && !_0x5b647d && !_0x34ce80) {
        return await _0x5225c9('*\uD83D\uDCDBOWNER COMMAND*')
      }
      if (
        !_0x5249ea ||
        typeof _0x5249ea !== 'string' ||
        !_0x5249ea.includes(',')
      ) {
        return _0x5225c9(
          '\u274C Invalid format. Use: .channelreact <link>,<emoji>'
        )
      }
      let [_0x2a98e0, _0x2e84b5] = _0x5249ea.split(',')
      if (!_0x2a98e0 || !_0x2e84b5) {
        return _0x5225c9('\u274C Missing link or emoji.')
      }
      if (!_0x2a98e0.startsWith('https://whatsapp.com/channel/')) {
        return _0x5225c9('\u274C Invalid channel link.')
      }
      const _0x56f453 = _0x2a98e0.split('/'),
        _0x5d30ce = _0x56f453[4],
        _0x264e8b = _0x56f453[5],
        _0x34b4ef = await _0x1ef1b3.newsletterMetadata('invite', _0x5d30ce)
      await _0x1ef1b3.newsletterReactMessage(
        _0x34b4ef.id,
        _0x264e8b,
        _0x2e84b5.trim()
      )
      _0x5225c9('\u2705 Reacted with ' + _0x2e84b5.trim() + ' to the message.')
    } catch (_0xf47e2) {
      console.log(_0xf47e2)
      _0x5225c9('\u274C Error: ' + _0xf47e2.message)
    }
  }
)
