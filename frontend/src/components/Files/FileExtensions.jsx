import React from 'react';

export default function FileExtensions({ extension }) {
    return (
        <div className='flex gap-4 my-2 ml-4'>
            {extension.map((file, index) => (
                <p
                    className='text-sm'
                    key={index}>
                    <input
                        className='mr-2'
                        type="checkbox"
                        name={file.name}
                        value={file.name}
                    />
                    {file.extensions.join("/")}</p>
            ))}
        </div>
    );
}