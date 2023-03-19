import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';

/**
 * Navbarが正しくレンダリングされるかテストする
 * 各ナビゲーションリンクが正しいテキストとhref属性を持っていることを確認
 * @jest-environment jsdom
 */
describe('Navbar', () => {
  it('renders the Navbar component with navigation links', () => {
    render(<Navbar />);

    const navLinks = [
      { name: 'ホーム', href: '/' },
      { name: 'ポートフォリオ', href: '/portfolio' },
      { name: 'スキルセット', href: '/skills' },
      { name: 'ブログ', href: '/blog' },
      { name: 'お問い合わせ', href: '/contact' },
    ];

    navLinks.forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });
});
