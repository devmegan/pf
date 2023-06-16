import FeedData from '../pages/feed.json';
import Article from './feed/Article';

export default function Feed() {
    return (
        <section id="feed">
            <h2><span role="img" aria-hidden="true">💬 </span>2023</h2>
            {FeedData.map((article, index) => (
                <Article key={index} article={article} />
            ))}
        </section>
    );
}
