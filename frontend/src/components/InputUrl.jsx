export default function InputUrl({ url, getUrl }) {
    return (
        <>
            <h2 className='text-lg font-bold'>Enter a URL:</h2>
            <input
                className='w-full p-2 bg-white text-slate-950'
                type="text"
                value={url}
                onInput={(event) => getUrl(event.target.value)}
                placeholder="https://example.com"
            />
        </>
    )
}
