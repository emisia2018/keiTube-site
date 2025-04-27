// next.config.js
const { i18n } = require('./next-i18next.config');
module.exports = {
  i18n: {
    locales: ['en', 'ja', 'fr','it','ar','hi','ko','zh', 'zh-TW'], // 対応する言語を指定
    defaultLocale: 'en', // 初期表示言語を日本語に設定
  },
};
