import Card from "./cards/Card";

export default function Cards({ data, filter }) {
    return (
        <div className='focus-within:ring-4 ring-teal-800 ring-opacity-50 pl-2 p-4'>
            {data
                .filter(item => filter.length === 0 || item.topics.some(topic => filter.includes(topic.toLowerCase())))
                .map((item, index) => (
                    <Card repo={item} key={index} />
                ))
            }
        </div>
    );
}
