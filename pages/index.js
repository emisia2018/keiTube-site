import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common'); // ←ここに 'common' を指定！

  return (
    <Layout>
      <h1>
        <img src="/images/main-image.png" alt="Main Visual" style={{ width: '100%', height: 'auto' }} />
      </h1>
      <p>{t('communicationText')}</p>

      <h2>{t('price')}</h2>

      <div>
        <p>{t('lessonDuration')}: 30分</p>
        <p>{t('lessonPrice')}: 10,000円</p>
        <a href="https://paypal.me/keiTube/10000?country.x=JP&locale.x=ja_JP" target="_blank" rel="noopener noreferrer">
          {t('payNow')}
        </a>
      </div>

      {/* 言語切り替えボタン */}
      <div className="language-switcher">
  <Link href="/" locale="ja" legacyBehavior><a className="language-button">{t('japanese')}</a></Link>
        <Link href="/" locale="en" legacyBehavior><a className="language-button">{t('english')}</a></Link>
        <Link href="/" locale="fr" legacyBehavior><a className="language-button">{t('french')}</a></Link>
        <Link href="/" locale="it" legacyBehavior><a className="language-button">{t('italian')}</a></Link>
        <Link href="/" locale="ar" legacyBehavior><a className="language-button">{t('arabic')}</a></Link>
        <Link href="/" locale="hi" legacyBehavior><a className="language-button">{t('hindi')}</a></Link>
        <Link href="/" locale="ko" legacyBehavior><a className="language-button">{t('korean')}</a></Link>
        <Link href="/" locale="zh" legacyBehavior><a className="language-button">{t('simplifiedChinese')}</a></Link> {/* 簡体字中国語 */}
        <Link href="/" locale="zh-TW" legacyBehavior><a className="language-button">{t('traditionalChinese')}</a></Link> {/* 繁体字中国語 */}
      </div>
    </Layout>
  );
}

// 必須：これで翻訳ファイルを読み込む
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
