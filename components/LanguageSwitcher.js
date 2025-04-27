import Link from 'next/link';

const LanguageSwitcher = () => {
  return (
    <div>
      {/* 日本語 */}
      <Link href="/" locale="ja">
        日本語
      </Link>

      {/* 英語 */}
      <Link href="/" locale="en">
        English
      </Link>

      {/* フランス語 */}
      <Link href="/" locale="fr">
        Français
      </Link>

      {/* イタリア語 */}
      <Link href="/" locale="it">
        Italiano
      </Link>

      {/* アラビア語 */}
      <Link href="/" locale="ar">
        العربية
      </Link>

      {/* ヒンディー語 */}
      <Link href="/" locale="hi">
        हिंदी
      </Link>

      {/* 韓国語 */}
      <Link href="/" locale="ko">
        한국어
      </Link>

      {/* 中国語（簡体字） */}
      <Link href="/" locale="zh">
        中文（简体）
      </Link>

      {/* 中国語（繁体字） */}
      <Link href="/" locale="zh-TW">
        中文（繁体）
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
