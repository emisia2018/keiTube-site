import { useTranslation } from 'next-i18next';

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div>
      <header></header>  {/* ヘッダータイトルを削除 */}
      <main>{children}</main>
      <footer>© emisia Co.,Ltd.</footer>  {/* フッターに著作権表示を変更 */}
    </div>
  );
};

export default Layout;
