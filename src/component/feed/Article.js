import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import linkRenderer from "../../renderer/linkRenderer";
import Icon from "./article/Icon";
import Tag from "./article/Tag";
import Header from "./article/Header";

export default function Article({ article }) {
    return (
        <article className='mb-6 flex hover:bg-stone-100 rounded-md p-3 pl-2'>
            <Icon />
            <div>
                <Header date={article.date} />
                <Tag emoji={article.emoji} tag={article.tag} />
                <ReactMarkdown components={{a: linkRenderer }}>{article.text}</ReactMarkdown>
                {article.img && <img src={article.img} alt={article.alt} loading="lazy" className="bg-stone-300" />}
                {article.video && <iframe src={article.video} className="aspect-video rounded-md w-full" title={article.title}></iframe>}
            </div>
        </article>
    );
}
