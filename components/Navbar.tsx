import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/" passHref>
          サイト名 / ロゴ
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/" passHref>
            ホーム
          </Link>
        </li>
        <li>
          <Link href="/portfolio" passHref>
            ポートフォリオ
          </Link>
        </li>
        <li>
          <Link href="/skills" passHref>
            スキルセット
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            ブログ
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
