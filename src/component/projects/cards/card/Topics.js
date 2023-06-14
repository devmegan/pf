export default function Topics({ topics }) {
    return (
        <div className='flex flex-wrap-reverse gap-x-1 gap-y-2 text-sm mt-3'>
            {topics.map((topic, index) => (
                <span
                    className="py-1 px-2 rounded-full border-stone-800 block bg-stone-200 text-stone-800"
                    key={index}
                >
                    {topic}
                </span>
            ))}
        </div>
    );
}
