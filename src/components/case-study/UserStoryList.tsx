import type { UserStory } from '../../types/marketplaceCaseStudy';

export function UserStoryList({ stories }: { stories: readonly UserStory[] }) {
  return (
    <ul className="grid gap-3">
      {stories.map((story) => (
        <li key={story.id} className="surface-muted p-4">
          <p className="text-sm font-semibold text-cyan-200">As a {story.asA}</p>
          <p className="mt-2 text-slate-200">I want {story.iWant}</p>
          <p className="mt-2 text-slate-300">So that {story.soThat}.</p>
        </li>
      ))}
    </ul>
  );
}
