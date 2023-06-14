import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import Markdown from '../pages/about.md';
import linkRenderer from '../renderer/linkRenderer';

export default function About() {
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
    <section id="about">
      <ReactMarkdown components={{a: linkRenderer}}>{markdown}</ReactMarkdown>
    </section>
  );
}
