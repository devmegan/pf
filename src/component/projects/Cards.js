import Card from "./cards/Card";

export default function Cards({ data, filter }) {
    return (
        <div>
            {data
                .filter(item => filter.length === 0 || item.topics.some(topic => filter.includes(topic.toLowerCase())))
                .map((item, index) => (
                    <Card repo={item} key={index} />
                ))
            }
        </div>
    );
}
