import * as Tooltip from '@radix-ui/react-tooltip';

/**
 * TooltipCitation component for displaying citation tooltips.
 * @param {Object} props
 * @param {string} props.domain - The domain of the citation.
 * @param {string} props.url - The URL of the citation.
 * @param {number} props.index - The index of the citation.
 */
export default function TooltipCitation({ domain, url, index }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline cursor-pointer hover:bg-blue-50 px-[2px] rounded transition"
        >
          [{index}]
        </a>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          className="bg-white text-black border border-gray-300 text-sm rounded-lg px-3 py-2 shadow-lg z-50 max-w-xs"
        >
          {domain}
          <Tooltip.Arrow className="fill-gray-300" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
