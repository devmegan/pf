import FeedData from '../pages/feed.json';
import Article from './feed/Article';

export default function Feed() {
    return (
        <section id="feed" className='focus-within:ring-4 ring-teal-800 ring-opacity-50 p-2 -mt-4'>
            {FeedData.map((article, index) => (
                <Article key={index} article={article} />
            ))}
        </section>
    );
}
