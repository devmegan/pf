export default function Tag({ emoji, tag }) {
    return (
        <div className='rounded-full bg-stone-200 block px-3 py-1 text-sm font-medium inline-block mb-4'>
            <span aria-hidden="true" role="img" className='mr-2'>{emoji}</span>
            {tag}
        </div>
    );
}
