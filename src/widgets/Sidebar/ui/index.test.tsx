import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '.';
import { componentRender } from '$shared';

describe('Sidebar', () => {
  test('test render', async () => {
    await componentRender({ component: <Sidebar /> });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', async () => {
    await componentRender({ component: <Sidebar /> });
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
