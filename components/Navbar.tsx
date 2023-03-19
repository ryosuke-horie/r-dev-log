import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-xl font-bold cursor-pointer">
            サイト名 / ロゴ
          </span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" passHref>
              <span className="hover:text-blue-300 cursor-pointer">ホーム</span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" passHref>
              <span className="hover:text-blue-300 cursor-pointer">
                ポートフォリオ
              </span>
            </Link>
          </li>
          <li>
            <Link href="/skills" passHref>
              <span className="hover:text-blue-300 cursor-pointer">
                スキルセット
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <span className="hover:text-blue-300 cursor-pointer">ブログ</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="hover:text-blue-300 cursor-pointer">
                お問い合わせ
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
