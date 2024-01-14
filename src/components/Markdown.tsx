import ReactMarkdown from "react-markdown";

interface IMarkdownProps {
  children: string;
}

export default function MarkDown({ children }: IMarkdownProps) {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-pink-700 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
