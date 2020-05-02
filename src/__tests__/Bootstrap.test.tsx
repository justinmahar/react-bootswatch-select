import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Bootstrap, BootstrapProps } from '../components/Bootstrap';

function renderComponent(props: BootstrapProps, children: React.ReactNode = undefined): RenderResult {
  return render(<Bootstrap {...props}>{children}</Bootstrap>);
}

describe('Bootstrap', () => {
  test('should render without crashing', async () => {
    const props: BootstrapProps = { version: '4.4.1' };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
