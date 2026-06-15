import type { ScreenshotAsset } from '../../types/marketplaceCaseStudy';

export function ScreenshotGallery({ screenshots }: { screenshots: readonly ScreenshotAsset[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {screenshots.map((screenshot) => (
        <figure key={screenshot.src} className="surface-muted overflow-hidden">
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="p-4 text-sm leading-6 text-slate-300">
            {screenshot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
