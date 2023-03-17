import React from 'react';
import { render, screen } from '@testing-library/react';
import MyCard from '../components/UI/card/MyCard';

describe('MyCard', () => {
  it('render MyCard component', () => {
    render(<MyCard key="1" cardId="1" />);
    screen.debug();
  });
});