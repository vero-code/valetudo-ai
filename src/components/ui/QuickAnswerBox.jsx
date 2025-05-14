import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import TooltipCitation from './TooltipCitation';

/**
 * Component for displaying AI response.
 * @param {Object} props
 * @param {string} props.title - title
 * @param {string} props.quickAnswer - markdown text
 * @param {string[]} [props.citations] - array of source URLs
 * @param {boolean} showFull
 * @param {(val: boolean) => void} setShowFull
 */
export default function QuickAnswerBox({ title, quickAnswer, citations = [], showFull, setShowFull }) {
  const contentToRender = showFull
    ? enhanceCitations(quickAnswer, citations)
    : enhanceCitations(quickAnswer.split("\n").slice(0, 3).join("\n"), citations);

  return (
    <div
      className={`mt-6 bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-md text-left text-[#272D45] ${
        showFull ? "max-h-96 overflow-y-auto" : ""
      }`}
    >
      {title && <h2 className="text-blue-600 font-semibold mb-2">{title}</h2>}

      <div className="prose prose-sm max-w-none body-text space-y-4">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            'tooltip-citation': ({ node, ...props }) => {
              const domain = props['data-domain'];
              const index = props['data-index'];
              const url = props['data-url'];
              return <TooltipCitation domain={domain} url={url} index={index} />;
            }
          }}
        >
          {contentToRender}
        </ReactMarkdown>
      </div>

      {!showFull && quickAnswer.split("\n").length > 1 && (
        <button
          onClick={() => setShowFull(true)}
          className="mt-2 text-blue-600 text-sm hover:underline"
        >
          Show full answer →
        </button>
      )}

      {citations.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="subheading mb-2">Sources:</h4>
          <ol className="list-decimal list-inside space-y-1 body-text">
            {citations.map((url, idx) => {
              const shortLabel = new URL(url).hostname + new URL(url).pathname.slice(0, 40) + '...';
              return (
                <li key={idx}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-words"
                    title={url}
                  >
                    {shortLabel}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}

function enhanceCitations(markdown, citations) {
  return markdown.replace(/\[(\d+)]/g, (match, index) => {
    const i = parseInt(index) - 1;
    const url = citations?.[i];
    if (!url) return match;

    const domain = new URL(url).hostname;
    return `<tooltip-citation data-index="${index}" data-domain="${domain}" data-url="${url}">[${index}]</tooltip-citation>`;
  });
}