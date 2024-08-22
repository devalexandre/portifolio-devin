import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./banner-image.png', () => 'mocked-banner-image.png');

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders header with correct name, title, and banner image', () => {
    expect(screen.getByText('Alexandre Ferreira')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer | Microservices Specialist')).toBeInTheDocument();
    const bannerImage = screen.getByAltText('Banner');
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute('src', 'mocked-banner-image.png');
  });

  test('renders expertise section with three areas', () => {
    expect(screen.getByText('Expertise')).toBeInTheDocument();
    expect(screen.getByText('Microservices')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Golang')).toBeInTheDocument();
  });

  test('renders featured projects section with correct number of projects', () => {
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    const githubLinks = screen.getAllByText('View on GitHub');
    expect(githubLinks).toHaveLength(6);
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('renders YouTube videos section with correct number of videos', () => {
    expect(screen.getByText('YouTube Videos')).toBeInTheDocument();
    const youtubeLinks = screen.getAllByText('Watch on YouTube');
    expect(youtubeLinks).toHaveLength(7);
    youtubeLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('renders Medium articles section with correct number of articles', () => {
    expect(screen.getByText('Medium Articles')).toBeInTheDocument();
    const mediumLinks = screen.getAllByText('Read on Medium');
    expect(mediumLinks).toHaveLength(10);
    mediumLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('fade-in effect on expertise section', async () => {
    const expertiseSection = screen.getByText('Expertise').closest('section');
    expect(expertiseSection).toHaveClass('opacity-0');

    // Simulate scrolling to trigger the fade-in effect
    await waitFor(() => {
      expect(expertiseSection).toHaveClass('opacity-100');
    });
  });

  test('hover effects on header', async () => {
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-blue-600');

    userEvent.hover(header);
    await waitFor(() => {
      expect(header).toHaveClass('bg-blue-700');
    });

    userEvent.unhover(header);
    await waitFor(() => {
      expect(header).toHaveClass('bg-blue-600');
    });
  });

  test('accessibility - all links have accessible names', () => {
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAccessibleName();
    });
  });

  test('responsive design - grid layout changes based on screen size', () => {
    const expertiseGrid = screen.getByText('Expertise').nextElementSibling;
    expect(expertiseGrid).toHaveClass('grid-cols-1', 'md:grid-cols-3');
  });
});
