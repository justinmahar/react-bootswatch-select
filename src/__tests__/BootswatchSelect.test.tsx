import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { BootswatchSelect, BootswatchSelectProps } from '../components/BootswatchSelect';

function renderComponent(props: BootswatchSelectProps, children: React.ReactNode = undefined): RenderResult {
  return render(<BootswatchSelect {...props}>{children}</BootswatchSelect>);
}

describe('BootswatchSelect', () => {
  test('should render without crashing', async () => {
    const props: BootswatchSelectProps = { version: '4.4.1' };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
