const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  sharp = require('sharp'),
  download = require('../lib/yts'),
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
  } = require('../lib/functions'),
  fetch = (..._0x528df7) =>
    import('node-fetch').then(({ default: _0x1863f6 }) =>
      _0x1863f6(..._0x528df7)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log,
  cinesubz_tv = require('sadasytsearch'),
  {
    cinesubz_info,
    cinesubz_tv_firstdl,
    cinesubz_tvshow_info,
  } = require('../lib/cineall')
cmd(
  {
    pattern: 'cine',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['cinesubz'],
    desc: 'cinesubz.net movie search',
    use: '.cine 2025',
    filename: __filename,
  },
  async (
    _0x1b40d2,
    _0x24bf2a,
    _0x566a33,
    {
      from: _0x1199e4,
      q: _0x55c527,
      prefix: _0x2c2a78,
      isPre: _0x1dc1d7,
      isSudo: _0x173281,
      isOwner: _0x58e236,
      sender: _0x273e6d,
      isMe: _0x2c2664,
      reply: _0x10a3f0,
    }
  ) => {
    try {
      const buyer = (
          await axios.get(
            'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
          )
        ).data,
        _0x1efc8f = buyer.mvfree === 'true'
      if (!_0x1efc8f && !_0x2c2664 && !_0x1dc1d7) {
        return (
          await _0x10a3f0.sendMessage(_0x1199e4, {
            react: {
              text: '\u274C',
              key: _0x24bf2a.key,
            },
          }),
          await _0x10a3f0.sendMessage(
            _0x1199e4,
            {
              text: '*`You are not a premium user\u26A0️`*\n\n*💸 Please contact us and purchase the movie download facility for Lifetime premium \uD83C\uDF89.*\n\n*\uD83D\uDC68‍\uD83D\uDCBBContact : wa.me/94711451319?text=botz+Premire*',
            },
            { quoted: _0x24bf2a }
          )
        )
      }
      if (config.XNXX_BLOCK == 'true' && !_0x2c2664 && !_0x173281 && !_0x58e236) {
              return (
                await _0x10a3f0.sendMessage(_0x1199e4, {
                  react: {
                    text: '\u274C',
                    key: _0x24bf2a.key,
                  },
                }),
                await _0x10a3f0.sendMessage(
                  _0x1199e4,
                  {
                    text: '*THIS COMMAND ONLY OWNER*',
                  },
                  { quoted: _0x24bf2a }
                )
              )
            }
      if (!_0x55c527) {
        return await _0x10a3f0('*please give me text !..*')
      }
      const _0x3f1031 = await cinesubz_tv(_0x55c527)
      if (!_0x3f1031 || !_0x3f1031.data || _0x3f1031.data.length === 0) {
        return (
          await _0x1b40d2.sendMessage(_0x1199e4, {
            react: {
              text: '\u274C',
              key: _0x566a33.key,
            },
          }),
          await _0x1b40d2.sendMessage(
            _0x1199e4,
            { text: '*No results found \u274C*' },
            { quoted: _0x566a33 }
          )
        )
      }
      var _0x552b8d = []
      for (var _0x1d7aa5 = 0; _0x1d7aa5 < _0x3f1031.data.length; _0x1d7aa5++) {
        _0x552b8d.push({
          title: (_0x3f1031.data[_0x1d7aa5].title || 'No result')
            .replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ', '')
            .replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ', ''),
          description: '',
          rowId: _0x2c2a78 + 'cinedl2 ' + _0x3f1031.data[_0x1d7aa5].link,
        })
      }
      const _0x2912a8 = [
          {
            title: '[cinesubz.net results]',
            rows: _0x552b8d,
          },
        ],
        _0x58929c = {
          text:
            '*cinesubz.net MOVIE SYSTEM \uD83C\uDFAC*_\n\n*`🎪Input :`* ' +
            _0x55c527,
          footer: config.FOOTER,
          title: '[cinesubz.net results]',
          buttonText: '*Reply Below Number ⤵*',
          sections: _0x2912a8,
        }
      await _0x1b40d2.listMessage(_0x1199e4, _0x58929c, _0x566a33)
    } catch (_0x5f792) {
      console.log(_0x5f792)
      await _0x1b40d2.sendMessage(
        _0x1199e4,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x566a33 }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinedl2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x5c4ef0,
    _0x509e28,
    _0x382d88,
    {
      from: _0x1847b5,
      q: _0x1d2459,
      isMe: _0x222e97,
      prefix: _0x1ea4c1,
      reply: _0x4398c8,
    }
  ) => {
    try {
      if (!_0x1d2459 || !_0x1d2459.includes('https://cinesubz.net/movies/')) {
        return (
          console.log('Invalid input:', _0x1d2459),
          await _0x4398c8(
            '*\u2757 This is a TV series, please use .cinetv command.*'
          )
        )
      }
      let _0x282f52 = await cinesubz_info(_0x1d2459)
      console.log(cinesubz_info)
      let _0x854958 =
        '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
        (_0x282f52.data.title || 'N/A') +
        '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
        (_0x282f52.data.date || 'N/A') +
        '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
        (_0x282f52.data.country || 'N/A') +
        '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (_0x282f52.data.imdb || 'N/A') +
        '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
        (_0x282f52.data.runtime || 'N/A') +
        '_\n*\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
        (_0x282f52.data.subtitle_author || 'N/A') +
        '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
        (_0x282f52.data.genres.join(', ') || 'N/A') +
        '\n'
      if (_0x282f52.length < 1) {
        return await _0x5c4ef0.sendMessage(
          _0x1847b5,
          { text: 'erro !' },
          { quoted: _0x382d88 }
        )
      }
      var _0x249f63 = []
      _0x249f63.push({
        buttonId: _0x1ea4c1 + 'ctdetails2 ' + _0x1d2459,
        buttonText: { displayText: 'Details Card\n' },
        type: 1,
      })
      _0x282f52.dl_links.map((_0x3d5174) => {
        _0x249f63.push({
          buttonId:
            _0x1ea4c1 +
            ('paka2 ' +
              _0x282f52.data.image +
              '\xB1' +
              _0x3d5174.link +
              '\xB1' +
              _0x282f52.data.title +
              '\n\t\n\t*`[ ' +
              _0x3d5174.quality +
              ' ]`*'),
          buttonText: {
            displayText: (_0x3d5174.size + '  (' + _0x3d5174.quality + ' )')
              .replace('WEBDL', '')
              .replace('WEB DL', '')
              .replace('BluRay HD', '')
              .replace('BluRay SD', '')
              .replace('BluRay FHD', '')
              .replace('Telegram BluRay SD', '')
              .replace('Telegram BluRay HD', '')
              .replace('Direct BluRay SD', '')
              .replace('Direct BluRay HD', '')
              .replace('Direct BluRay FHD', '')
              .replace('FHD', '')
              .replace('HD', '')
              .replace('SD', '')
              .replace('Telegram BluRay FHD', ''),
          },
          type: 1,
        })
      })
      const _0x40c8c8 = {
        image: { url: _0x282f52.data.image.replace('-200x300', '') },
        caption: _0x854958,
        footer: config.FOOTER,
        buttons: _0x249f63,
        headerType: 4,
      }
      return await _0x5c4ef0.buttonMessage(_0x1847b5, _0x40c8c8, _0x382d88)
    } catch (_0x31ecff) {
      console.log(_0x31ecff)
      await _0x5c4ef0.sendMessage(
        _0x1847b5,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x382d88 }
      )
    }
  }
)
let isUploading = false
cmd(
  {
    pattern: 'paka2',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x5bc57c,
    _0x4d9deb,
    _0x1af384,
    { from: _0x123512, q: _0xa81b74, isMe: _0x5065c9, reply: _0x448dbe }
  ) => {
    if (!_0xa81b74) {
      return await _0x448dbe('*Please provide a direct URL!*')
    }
    if (isUploading) {
      return await _0x5bc57c.sendMessage(_0x123512, {
        text: '*චිත්‍රපටියක් දැනටමත් Download වෙමින් පවතී.කරුණාකර එය download වීමෙන් පසුව ඔබගේ චිත්‍රපටය Download කරගන්න.* \u23F3',
        quoted: _0x4d9deb,
      })
    }
    let _0x582833 = 0
    isUploading = true
    while (_0x582833 < 3) {
      try {
        const _0x376a40 = _0xa81b74.split('\xB1')[0],
          _0x2bd2a9 = _0xa81b74.split('\xB1')[1],
          _0x58a70c = _0xa81b74.split('\xB1')[2],
          _0x26ea66 = await download(_0x2bd2a9)
        if (!_0x26ea66) {
          throw new Error('No direct download link found. Try again...')
        }
        console.log(_0x26ea66)
        const _0x1766e7 = _0x26ea66.result.direct.trim(),
          _0x1d3917 = _0x376a40
        await _0x5bc57c.sendMessage(_0x123512, {
          react: {
            text: '\u2B06️',
            key: _0x4d9deb.key,
          },
        })
        const _0x1b714e = await _0x5bc57c.sendMessage(_0x123512, {
          text: '*Uploading your movie..\u2B06️*',
        })
        await _0x5bc57c.sendMessage(config.JID, {
          document: { url: _0x1766e7 },
          caption: _0x58a70c + 
           '\n\n' + 
           config.NAME +
          '\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          jpegThumbnail: await (await fetch(_0x1d3917)).buffer(),
          fileName: '🎬NADEEN-MD🎬'+ _0x58a70c + '.mp4',
        })
        await _0x5bc57c.sendMessage(_0x123512, { delete: _0x1b714e.key })
        await _0x5bc57c.sendMessage(_0x123512, {
          react: {
            text: '\u2714️',
            key: _0x4d9deb.key,
          },
        })
         break
      } catch (_0x4499a1) {
        _0x582833++
        console.error(
          'Attempt ' + _0x582833 + ': Error:',
          _0x4499a1
        )
      }
    }
    _0x582833 >= 3 &&
      (await _0x5bc57c.sendMessage(
        _0x123512,
        { text: '*🤕 Error Uplloading this file. Please try again later \u2757*' },
        { quoted: _0x4d9deb }
      ))
    isUploading = false
  }
)
cmd(
  {
    pattern: 'ctdetails2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x22c949,
    _0x58a64f,
    _0x38232c,
    { from: _0x51bc8a, q: _0x5e9312, isMe: _0x3d4b97, reply: _0xeed5bb }
  ) => {
    try {
      if (!_0x5e9312) {
        return await _0xeed5bb('*please give me word !..*')
      }
      let _0x321f9a = await cinesubz_info(_0x5e9312)
      const _0x14e42c = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
        )
      ).data
      let _0xd4d140 =
        '*▫️\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ ➠\x20' +
        (_0x321f9a.data.title || 'N/A') +
        '*\n\n*▫️️\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➠\x20' +
        (_0x321f9a.data.date || 'N/A') +
        '*\n*▫️️\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ ➠ ' +
        (_0x321f9a.data.country || 'N/A') +
        '*\n*▫️⭐ \uD835\uDDE5ᴀᴛɪɴɢ ➠ ' +
        (_0x321f9a.data.imdb || 'N/A') +
        '*\n*▫️️\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ ➠ ' +
        (_0x321f9a.data.runtime || 'N/A') +
        '*\n*▫️️\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ ➠ ' +
        (_0x321f9a.data.subtitle_author || 'N/A') +
        '*\n*▫️️\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ ➠' +
        (_0x321f9a.data.genres.join(', ') || 'N/A') +
        '*\n\n*★━━━━━━━━━━━━━━━━★*\n*🎯 Follow us* :\x20*' +
        _0x14e42c.chlink + '*\n*★━━━━━━━━━━━━━━━━★*'
      await _0x22c949.sendMessage(config.JID, {
        image: { url: _0x321f9a.data.image.replace('-200x300', '') },
        caption: _0xd4d140,
      })
      await _0x22c949.sendMessage(_0x51bc8a, {
        react: {
          text: '\u2714️',
          key: _0x38232c.key,
        },
      })
    } catch (_0x286082) {
      console.error('Error fetching or sending', _0x286082)
      await _0x22c949.sendMessage(_0x51bc8a, '*Error fetching or sending *', {
        quoted: _0x38232c,
      })
    }
  }
)
cmd(
  {
    pattern: 'cinetv',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['ctv'],
    desc: 'cinesubz.net tv shows search',
    use: '.cinetv  2025',
    filename: __filename,
  },
  async (
    _0x1287f8,
    _0x5d9b17,
    _0x348006,
    {
      from: _0xdcbdb5,
      q: _0x1507b1,
      prefix: _0xe17772,
      isMe: _0x247929,
      reply: _0x503ca4,
    }
  ) => {
    try {
      if (!_0x1507b1) {
        return await _0x503ca4('*please give me text !..*')
      }
      let _0x141582 = await fetchJson(
        'https://darksadas-yt-cinesubz-tv-search.vercel.app/?query=' + _0x1507b1
      )
      if (!_0x141582 || !_0x141582.data || _0x141582.data.length === 0) {
        return (
          await _0x1287f8.sendMessage(_0xdcbdb5, {
            react: {
              text: '\u274C',
              key: _0x348006.key,
            },
          }),
          await _0x1287f8.sendMessage(
            _0xdcbdb5,
            { text: '*No results found \u274C*' },
            { quoted: _0x348006 }
          )
        )
      }
      var _0x4ed5a1 = []
      for (var _0x42f2e8 = 0; _0x42f2e8 < _0x141582.data.length; _0x42f2e8++) {
        _0x4ed5a1.push({
          title:
            _0x141582.data[_0x42f2e8].title
              .replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ', '')
              .replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ', '') ||
            'Result not found',
          description: '',
          rowId: _0xe17772 + 'cinetvdl ' + _0x141582.data[_0x42f2e8].link,
        })
      }
      const _0x1aed7d = [
          {
            title: '[cinesubz.net results]',
            rows: _0x4ed5a1,
          },
        ],
        _0x7f4d5e = {
          text:
            '*CINESUBZ TV SHOWS RESULTS \uD83D\uDCFA*\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x1507b1,
          footer: config.FOOTER,
          title: '[cinesubz.net results]',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x1aed7d,
        }
      await _0x1287f8.listMessage(_0xdcbdb5, _0x7f4d5e, _0x348006)
    } catch (_0x97ea1d) {
      console.log(_0x97ea1d)
      await _0x1287f8.sendMessage(
        _0xdcbdb5,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x348006 }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinetvdl',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x332b3c,
    _0x426a14,
    _0x1180b8,
    {
      from: _0xb02647,
      q: _0x230fab,
      isMe: _0x3c4855,
      prefix: _0x465d64,
      reply: _0x23aa73,
    }
  ) => {
    try {
      if (!_0x230fab || !_0x230fab.includes('https://cinesubz.net/tvshows')) {
        return (
          console.log('Invalid input:', _0x230fab),
          await _0x23aa73('*\u2757 This is a movie, please use .mv command.*')
        )
      }
      let _0x21b852 = await fetchJson(
          'https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=' +
            _0x230fab +
            '&apikey=pramashi'
        ),
        _0x1da3d6 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
          (_0x21b852.data.title || 'N/A') +
          '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
          (_0x21b852.data.date || 'N/A') +
          '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
          (_0x21b852.data.country || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
          (_0x21b852.data.imdb || 'N/A') +
          '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
          (_0x21b852.data.runtime || 'N/A') +
          '_\n*\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
          (_0x21b852.data.subtitle_author || 'N/A') +
          '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
          (_0x21b852.data.genres.join(', ') || 'N/A') +
          '\n'
      var _0x3b2963 = []
      _0x3b2963.push(
        {
          buttonId: _0x465d64 + 'ctdetailss ' + _0x230fab,
          buttonText: { displayText: 'Details Card' },
          type: 1,
        },
        {
          buttonId: _0x465d64 + 'dlc ' + _0x230fab,
          buttonText: { displayText: 'All Epishodes Send\n' },
          type: 1,
        }
      )
      _0x21b852.data.episodes.map((_0x234af3) => {
        _0x3b2963.push({
          buttonId:
            _0x465d64 +
            ('dlcc2 ' +
              _0x21b852.data.image +
              '\xB1' +
              _0x234af3.episode_link +
              '\xB1' +
              _0x21b852.data.title +
              ' *`' +
              _0x234af3.title +
              '`*'),
          buttonText: { displayText: '' + _0x234af3.title },
          type: 1,
        })
      })
      const _0x1278d5 = {
        image: { url: _0x21b852.data.image.replace('-200x300', '') },
        caption: _0x1da3d6,
        footer: config.FOOTER,
        buttons: _0x3b2963,
        headerType: 4,
      }
      return await _0x332b3c.buttonMessage(_0xb02647, _0x1278d5, _0x1180b8)
    } catch (_0x24c299) {
      console.log(_0x24c299)
      await _0x332b3c.sendMessage(
        _0xb02647,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x1180b8 }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinefirstdl',
    react: '\uD83C\uDFAC',
    alias: ['tv'],
    desc: 'Moive downloader',
    filename: __filename,
  },
  async (
    _0x41afc4,
    _0x3d5ce2,
    _0x11df25,
    {
      from: _0x43d8db,
      q: _0x29a7d6,
      prefix: _0x42fd38,
      isMe: _0x2a12ff,
      reply: _0x563f89,
    }
  ) => {
    try {
      if (!_0x29a7d6) {
        return await _0x563f89('*please give me text !..*')
      }
      const _0x39ba0f = _0x29a7d6.split('\xB1')[0],
        _0x134469 = _0x29a7d6.split('\xB1')[1],
        _0xb5ded2 = _0x29a7d6.split('\xB1')[2]
      let _0x4e0ab2 = await fetchJson(
        'https://darksadas-yt-cineszub-tv-shows-firstdl.vercel.app/?url=' +
          _0x134469 +
          '&apikey=pramashi'
      )
      if (_0x4e0ab2.length < 1) {
        return await _0x41afc4.sendMessage(
          _0x43d8db,
          { text: N_FOUND },
          { quoted: _0x11df25 }
        )
      }
      var _0x2c2b78 = []
      for (var _0xcf1142 = 0; _0xcf1142 < _0x4e0ab2.data.length; _0xcf1142++) {
        _0x2c2b78.push({
          title:
            _0x4e0ab2.data[_0xcf1142].quality +
            '  ' +
            _0x4e0ab2.data[_0xcf1142].size,
          description: '',
          rowId:
            _0x42fd38 +
            ('dlc ' +
              _0x4e0ab2.data[_0xcf1142].link +
              '\xB1' +
              _0x39ba0f +
              '\xB1' +
              _0xb5ded2 +
              '\n\t\n\t*`' +
              _0x4e0ab2.data[_0xcf1142].quality +
              '`*'),
        })
      }
      const _0x471998 = [
          {
            title: '_[Select quaility \uD83C\uDFAC]_',
            rows: _0x2c2b78,
          },
        ],
        _0x50b13a = {
          text: '*\uD83C\uDFACSelect quaility \uD83C\uDFAC*',
          footer: config.FOOTER,
          title: '_[cinesubz.net results \uD83C\uDFAC]_',
          buttonText: '*`Reply Below Number \uD83D\uDD22`*\n',
          sections: _0x471998,
        }
      await _0x41afc4.listMessage(_0x43d8db, _0x50b13a, _0x11df25)
    } catch (_0x51a52c) {
      console.log(_0x51a52c)
      await _0x41afc4.sendMessage(
        _0x43d8db,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x11df25 }
      )
    }
  }
)
cmd(
  {
    pattern: 'dlc',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x22712c,
    _0x269a9b,
    _0x140030,
    { from: _0x1e565d, q: _0x1045a9, isMe: _0x2c122c, reply: _0x50a86c }
  ) => {
    if (!_0x1045a9) {
      return await _0x50a86c('*Please provide a direct URL!*')
    }
    try {
      let _0x7c4a79 = await cinesubz_tvshow_info(_0x1045a9)
      console.log('API Response:', JSON.stringify(_0x7c4a79, null, 2))
      if (
        !_0x7c4a79.data ||
        !Array.isArray(_0x7c4a79.data.episodes) ||
        _0x7c4a79.data.episodes.length === 0
      ) {
        return await _0x22712c.sendMessage(
          _0x1e565d,
          { text: 'No episodes found in the provided URL.' },
          { quoted: _0x269a9b }
        )
      }
      await _0x22712c.sendMessage(
        _0x1e565d,
        { text: '*Epishodes Uploading started...\uD83D\uDD02*' },
        { quoted: _0x269a9b }
      )
      let _0xa917ff = _0x7c4a79.data.episodes
        .map((_0x69358c) => _0x69358c.link)
        .filter(
          (_0x2a412a) =>
            typeof _0x2a412a === 'string' && _0x2a412a.trim() !== ''
        )
      if (_0xa917ff.length === 0) {
        return await _0x22712c.sendMessage(
          _0x1e565d,
          { text: 'No valid episode links found.' },
          { quoted: _0x269a9b }
        )
      }
      const _0x1e6c04 = _0x7c4a79.data.title || 'Unknown_Show',
        _0x368cfc =
          _0x7c4a79.data.mainImage ||
          'https://files.catbox.moe/3mvn78.png'
      fetchEpisodesWithRetry(
        _0xa917ff,
        _0x22712c,
        _0x269a9b,
        _0x1e565d,
        _0x50a86c,
        _0x1e6c04,
        _0x368cfc
      )
    } catch (_0x257e81) {
      console.error('Error fetching or sending:', _0x257e81)
      await _0x22712c.sendMessage(
        _0x1e565d,
        { text: '*Error fetching or sending*' },
        { quoted: _0x269a9b }
      )
    }
  }
)
async function fetchEpisodesWithRetry(
  _0x3d70ae,
  _0x98cca9,
  _0x4ee43b,
  _0x46d838,
  _0x217240,
  _0xacc982,
  _0x516702,
  _0x4f1ff0 = 3
) {
  let _0x1cf60b = 0
  async function _0xababeb(_0x37a5c9 = 1) {
    if (_0x1cf60b >= _0x3d70ae.length) {
      await _0x98cca9.sendMessage(
        _0x46d838,
        { text: '*All episodes sent successfully \u2611️*' },
        { quoted: _0x4ee43b }
      )
      return
    }
    let _0x45b96d = _0x3d70ae[_0x1cf60b]
    try {
      let _0x37da27 = await cinesubz_tv_firstdl(_0x45b96d)
      console.log(_0x37da27)
      if (
        !_0x37da27 ||
        !_0x37da27.dl_links ||
        _0x37da27.dl_links.length === 0
      ) {
        throw new Error(
          'Episode ' + (_0x1cf60b + 1) + ': No valid download link found.'
        )
      }
      const _0x22c0b7 = _0x37da27.dl_links[0],
        _0x2a136a = _0x22c0b7.link,
        _0x3b980e = await download(_0x2a136a)
      if (!_0x3b980e || !_0x3b980e.result || !_0x3b980e.result.direct) {
        throw new Error(
          'Episode ' + (_0x1cf60b + 1) + ': No direct download link found.'
        )
      }
      const _0x2e4774 = _0x3b980e.result.direct
      if (!_0x2e4774.startsWith('http')) {
        throw new Error('Invalid download URL: ' + _0x2e4774)
      }
      const _0x1d673f = await axios.get(_0x2e4774, {
        responseType: 'arraybuffer',
      })
      if (!_0x1d673f.data) {
        throw new Error('Failed to fetch episode data.')
      }
      const _0x2ad2de = Buffer.from(_0x1d673f.data, 'binary'),
        _0x40c979 = _0xacc982 + '_Episode_' + (_0x1cf60b + 1) + '.mp4'
      await _0x98cca9.sendMessage(config.JID, {
        document: _0x2ad2de,
        caption:
          '*\uD83D\uDCFA Episode ' +
          (_0x1cf60b + 1) +
          ' - ' +
          _0xacc982 +
          '*\n\n> *\uD83C\uDFACNADEEN MD\uD83C\uDFAC*',
        jpegThumbnail: await (await fetch(_0x516702)).buffer(),
        mimetype: 'video/mp4',
        fileName: '🎬NADEEN-MD🎬'+ _0x40c979,
      })
    } catch (_0x492c72) {
      console.error(
        'Error fetching Episode ' +
          (_0x1cf60b + 1) +
          ', Attempt ' +
          _0x37a5c9 +
          ':',
        _0x492c72
      )
      if (_0x37a5c9 < _0x4f1ff0) {
        return (
          console.log(
            'Retrying Episode ' +
              (_0x1cf60b + 1) +
              ' (Attempt ' +
              (_0x37a5c9 + 1) +
              ')...'
          ),
          setTimeout(() => _0xababeb(_0x37a5c9 + 1), 5000)
        )
      } else {
        await _0x98cca9.sendMessage(
          _0x46d838,
          {
            text:
              '*\u26A0️ Failed to fetch Episode ' +
              (_0x1cf60b + 1) +
              ' after ' +
              _0x4f1ff0 +
              ' attempts.*',
          },
          { quoted: _0x4ee43b }
        )
      }
    }
    _0x1cf60b++
    setTimeout(() => _0xababeb(), 5000)
  }
  _0xababeb()
}
cmd(
  {
    pattern: 'dlcc2',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x11a335,
    _0x2d6a75,
    _0x58f953,
    { from: _0x50017e, q: _0x174977, isMe: _0x22e78e, reply: _0x17f9fc }
  ) => {
    if (!_0x174977) {
      return await _0x17f9fc('*Please provide a direct URL!*')
    }
    try {
      const _0x24920b = _0x174977.split('\xB1')[0],
        _0x46fd1a = _0x174977.split('\xB1')[1],
        _0x49e584 = _0x174977.split('\xB1')[2]
      let _0x2b76d7 = await cinesubz_tv_firstdl(_0x46fd1a)
      if (_0x2b76d7.length < 1) {
        return await _0x11a335.sendMessage(
          _0x50017e,
          { text: 'Not Found' },
          { quoted: _0x2d6a75 }
        )
      }
      const _0x4c5fcf = _0x2b76d7.dl_links[0],
        _0x5f4aed = '' + _0x4c5fcf.link,
        _0xa9c241 = await download(_0x5f4aed)
      if (!_0xa9c241) {
        throw new Error('No direct download link found. Try again...')
      }
      const _0x3c4ef9 = '' + _0xa9c241.result.direct,
        _0x3ce09b = await axios.get(_0x3c4ef9, { responseType: 'arraybuffer' }),
        _0x3b92ee = Buffer.from(_0x3ce09b.data, 'binary'),
        _0x146a97 = '' + _0x24920b
      await _0x11a335.sendMessage(_0x50017e, {
        react: {
          text: '\u2B06️',
          key: _0x2d6a75.key,
        },
      })
      await _0x11a335.sendMessage(
        _0x50017e,
        { text: '*Uploading your movie..\u2B06️*' },
        { quoted: _0x2d6a75 }
      )
      await _0x11a335.sendMessage(config.JID, {
        document: { url: _0x3c4ef9 },
        caption:
          _0x49e584 +
          '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
        mimetype: 'video/mp4',
        jpegThumbnail: await (await fetch(_0x146a97)).buffer(),
        fileName: '📺NADEEN-MD📺' + _0x49e584 + '.mp4',
      })
      await _0x11a335.sendMessage(_0x50017e, {
        react: {
          text: '\u2714️',
          key: _0x2d6a75.key,
        },
      })
      await _0x11a335.sendMessage(
        _0x50017e,
        { text: '*Movie downloaded✅' },
        { quoted: _0x2d6a75 }
      )
    } catch (_0x3274de) {
      console.error('Error fetching or sending', _0x3274de)
      await _0x11a335.sendMessage(_0x50017e, '*Error fetching or sending *', {
        quoted: _0x2d6a75,
      })
    }
  }
)
cmd(
  {
    pattern: 'ctdetailss',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x216740,
    _0x3b8ba7,
    _0x45e796,
    { from: _0x58fa80, q: _0xc6a750, isMe: _0x3a23d5, reply: _0x58945e }
  ) => {
    try {
      if (!_0xc6a750) {
        return await _0x58945e('*please give me text !..*')
      }
      let _0x4be87d = await fetchJson(
        'https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=' +
          _0xc6a750 +
          '&apikey=pramashi'
      )
      const _0x3a37ae = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
        )
      ).data
      let _0x3796d5 =
        '▫️️ *\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE* *' +
        (_0x4be87d.data.title || 'N/A') +
        '️*\n\n*▫️️ \uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* ' +
        (_0x4be87d.data.date || 'N/A') +
        '\n*▫️️ \uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* ' +
        (_0x4be87d.data.country || 'N/A') +
        '\n*▫️️ \uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* ' +
        (_0x4be87d.data.imdb || 'N/A') +
        '\n*▫️️\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* ' +
        (_0x4be87d.data.runtime || 'N/A') +
        '\n*▫️️ \uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* ' +
        (_0x4be87d.data.subtitle_author || 'N/A') +
        '\n*▫️️ \uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
        (_0x4be87d.data.genres.join(', ') || 'N/A') +
        '\n\n> 🍁 Follow us : *' +
        _0x3a37ae.chlink 
      await _0x216740.sendMessage(config.JID, {
        image: { url: _0x4be87d.data.image.replace('-200x300', '') },
        caption: _0x3796d5,
      })
      await _0x216740.sendMessage(_0x58fa80, {
        react: {
          text: '\u2714️',
          key: _0x45e796.key,
        },
      })
    } catch (_0x1c568c) {
      console.error('Error fetching or sending', _0x1c568c)
      await _0x216740.sendMessage(_0x58fa80, '*Error fetching or sending *', {
        quoted: _0x45e796,
      })
    }
  }
)
