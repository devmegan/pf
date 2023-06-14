export default function linkRenderer ({ href, children }) {
    return (
      <a href={href} className="groovy-link" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
};
