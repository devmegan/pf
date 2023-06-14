import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import Markdown from '../pages/weeks.md';
import linkRenderer from '../renderer/linkRenderer';

export default function Weeks() {
  const [markdown, setMarkdown] = useState('');

  const loadMarkdownContent = async () => {
      const response = await fetch(Markdown);
      const text = await response.text();
      return text;
  };

  useEffect(() => {
    loadMarkdownContent().then((text) => {
      setMarkdown(text);
    });
  }, []);

    return (
        <section id="weeks">
            <ReactMarkdown components={{a: linkRenderer}}>{markdown}</ReactMarkdown>
        </section>
    );
}