import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { FontAwesome, FontAwesomeProps } from '../components/FontAwesome';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: FontAwesomeProps, children: React.ReactNode = undefined): RenderResult {
  return render(<FontAwesome {...props}>{children}</FontAwesome>);
}

describe('FontAwesome', () => {
  test('should render without crashing', async () => {
    const props: FontAwesomeProps = { version: '4.7.0' };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
