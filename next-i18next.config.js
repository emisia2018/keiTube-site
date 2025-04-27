module.exports = {
  i18n: {
    locales: ['en', 'ja', 'fr', 'it', 'ar', 'hi', 'ko', 'zh','zh-TW'],  // 対応する言語を指定
    defaultLocale: 'en',  // 初期表示言語を設定
    localeDetection: true,
    ns: ['common'], // 使用する名前空間（common.jsonを使う）
 defaultNS: 'common', // デフォルトの名前空間
  },
  reloadOnPrerender: true,  // ビルド時のキャッシュ再読み込み
};
