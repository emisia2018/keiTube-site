import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <h1>
        <img src="/images/main-image.png" alt="Main Visual" style={{ width: '100%', height: 'auto' }} />
      </h1>
<section id="main">
      <p>{t('communicationText')}</p>

      <h2>{t('price')}</h2>
      <div>
        <p>{t('lessonDuration')}: 30分</p>
        <p>{t('lessonPrice')}: 10,000円</p>
      </div>

      {/* ご予約案内 */}
      <section style={{ marginTop: '50px' }}>
      <h2>{t('reservationTitle')}</h2>
<p>{t('reservationInstruction')}</p>

        {/* Google Calendar インライン埋め込み */}
        <div style={{ marginTop: '20px' }}>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1-nSVp21ZQnDhxB4rwivN7fUxCv7F9_eWC3KcdJ40yoZjVhga6DFVOrKI_aEuKFnw-iTeqkNuk?gv=true"
            style={{ border: 0, width: '100%', height: '600px' }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Googleカレンダー予約ボタンも改めて案内しておく */}
        <div class="resav"style={{ marginTop: '20px', textAlign: 'center' }}>
          <a href="https://calendar.app.google/mxqMLHGRzzkR5gaE9" target="_blank" rel="noopener noreferrer" >
         {t('reservationTitle')}
          </a>
        </div>
      </section>

      {/* 言語切り替えボタン */}
      <div className="language-switcher" style={{ marginTop: '50px' }}>
        <Link href="/" locale="ja" legacyBehavior><a className="language-button">{t('japanese')}</a></Link>
        <Link href="/" locale="en" legacyBehavior><a className="language-button">{t('english')}</a></Link>
        <Link href="/" locale="fr" legacyBehavior><a className="language-button">{t('french')}</a></Link>
        <Link href="/" locale="it" legacyBehavior><a className="language-button">{t('italian')}</a></Link>
        <Link href="/" locale="ar" legacyBehavior><a className="language-button">{t('arabic')}</a></Link>
        <Link href="/" locale="hi" legacyBehavior><a className="language-button">{t('hindi')}</a></Link>
        <Link href="/" locale="ko" legacyBehavior><a className="language-button">{t('korean')}</a></Link>
        <Link href="/" locale="zh" legacyBehavior><a className="language-button">{t('simplifiedChinese')}</a></Link>
        <Link href="/" locale="zh-TW" legacyBehavior><a className="language-button">{t('traditionalChinese')}</a></Link>
      </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
