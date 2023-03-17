import { render, screen } from '@testing-library/react';
import IndexPage from '../index';

describe('Index Page', () => {
  it('renders the page without errors', () => {
    render(<IndexPage />);

    const heading = screen.getByRole('heading', { name: /Hello Next\.js/i });
    expect(heading).toBeInTheDocument();

    const links = screen.getAllByRole('link', { name: /About/i });
    const aboutLink = links.find(
      (link) => link.getAttribute('href') === '/about',
    );
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
