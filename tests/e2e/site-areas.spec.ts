import { test, expect } from '@playwright/test';

test('site-area switcher reaches all three independent public areas', async ({ page }) => {
  await page.goto('/');
  const areas = page.getByRole('navigation', { name: 'Site areas' });

  await expect(areas.getByRole('link', { name: 'Living CV' })).toHaveAttribute('aria-current', 'page');
  await areas.getByRole('link', { name: 'EBW' }).click();
  await expect(page).toHaveURL(/\/ebw$/);
  await expect(page.getByRole('heading', { name: /a new platform for british wrestling/i })).toBeVisible();

  await areas.getByRole('link', { name: 'Cheer Up Goth' }).click();
  await expect(page).toHaveURL(/\/cheer-up-goth$/);
  await expect(page.getByRole('heading', { name: /because weekends are for the living/i })).toBeVisible();
  await expect(page.getByText('No live show dates or tickets are announced here.')).toBeVisible();

  await areas.getByRole('link', { name: 'Living CV' }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: /colin chapman/i })).toBeVisible();
});

test('all three area links remain visible on a narrow mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const areas = page.getByRole('navigation', { name: 'Site areas' });
  for (const label of ['Living CV', 'EBW', 'Cheer Up Goth']) {
    await expect(areas.getByRole('link', { name: label })).toBeVisible();
  }
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
});
