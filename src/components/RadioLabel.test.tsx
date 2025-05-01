import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RadioLabel } from './RadioLabel';

describe('RadioLabel component', () => {
  it('renders with the correct content', () => {
    // Using the component as a function since we're not using JSX in this test
    render(RadioLabel({ htmlFor: "test-id", content: "Test Content" }));
    
    // Check if the content is rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    
    // Check if the label has the correct htmlFor attribute
    const label = screen.getByText('Test Content');
    expect(label.getAttribute('for')).toBe('test-id');
  });
});