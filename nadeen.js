const fs = require('fs'),
  path = require('path'),
  { File } = require('megajs'),
  AdmZip = require('adm-zip'),
  axios = require('axios'),
  db_repo = 'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data',
  ZIP_DIR = './'
async function downloadAndExtractZip() {
  try {
    const _0x3c8e6d = await axios.get(
        db_repo + '/refs/heads/main/footer/nadeen-md.json'
      ),
      _0x2a8d87 = _0x3c8e6d.data.megaurl,
      _0x8c41ee = File.fromURL(_0x2a8d87),
      _0x1aed25 = await _0x8c41ee.downloadBuffer(),
      _0x73a330 = path.join(__dirname, 'temp.zip')
    fs.writeFileSync(_0x73a330, _0x1aed25)
    const _0x504c75 = new AdmZip(_0x73a330)
    _0x504c75.extractAllTo(ZIP_DIR, true)
    fs.unlinkSync(_0x73a330)
    console.log('Main downloaded successfully \u2705')
  } catch (_0x8a1e4e) {
    console.error(
      '\u274C Error during download and extraction:',
      _0x8a1e4e.message
    )
    process.exit(1)
  }
}
const main = async () => {
  try {
    !fs.existsSync(
      __dirname + '/lib' || '/plugins' || '/nadeen.js' || '/config.js'
    )
      ? await downloadAndExtractZip()
      : console.log('\u23E9 Skip download main file')
    require('./nadeen.js')
  } catch (_0x562a56) {
    console.error('An error occurred:', _0x562a56.message)
  }
}
main()
