import { expect, test } from '@playwright/test';

test('homepage navigation reaches key sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Colin Chapman', exact: true })).toBeVisible();

  const navigation = page.getByRole('navigation', { name: 'Primary navigation' });

  await navigation.getByRole('link', { name: 'Portfolio' }).click();
  await expect(page.getByRole('heading', { name: 'Portfolio', exact: true })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'ServiceFlow Construction', exact: true }),
  ).toBeVisible();

  await navigation.getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Contact', exact: true })).toBeVisible();
});
