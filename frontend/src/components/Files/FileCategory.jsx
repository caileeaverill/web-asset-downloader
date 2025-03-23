import FileExtensions from "./FileExtensions"

export default function FileCategory({ category, checked, extension, onChange }) {
    return (
        <>
            <p className='capitalize'>
                <input
                    className='mr-2'
                    type="checkbox"
                    name={category}
                    value={category}
                    checked={checked}
                    onChange={(e) => onChange(e)}
                />
                {category.replace('_', ' ')}
            </p>
        </>
    );
}
