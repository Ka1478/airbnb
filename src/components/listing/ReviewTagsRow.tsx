interface ReviewTagsRowProps {
  tags: Array<{ label: string; count: number }>;
}

export default function ReviewTagsRow({ tags }: ReviewTagsRowProps) {
  return (
    <ul
      className="mb-8 flex gap-3 overflow-x-auto pb-2"
      aria-label="Frequently mentioned in reviews"
    >
      {tags.map((tag) => (
        <li key={tag.label}>
          <span className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 text-sm text-charcoal">
            {tag.label}
            <span className="text-gray-400">{tag.count}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
