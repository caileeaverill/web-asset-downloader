import { useState, useCallback } from "react";
import { fileTypes } from '../constants/data';
import InputUrl from "./InputUrl";
import FileCategory from './Files/FileCategory';
import SendData from "./SendData";
import ServerResponse from "./ServerResponse";
import useUrlCheckboxState from '../hooks/useUrlCheckboxState';

export default function Interface() {
    const [data, setData] = useState(null);
    // const [url, getUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [invalidUrl, setInvalidUrl] = useState(false);


    // const [url, getUrl] = useState('https://www.gutenberg.org/files/12148/12148-pdf/');
    const [url, getUrl] = useState('https://archive.org/details/ellibrodesancipr00surf');

    const { checked, handleSelectAllOrDeselectAll, handleCheckboxChange } = useUrlCheckboxState();

    const handleSelectAll = useCallback(() => handleSelectAllOrDeselectAll(true), [handleSelectAllOrDeselectAll]);
    const handleDeselectAll = useCallback(() => handleSelectAllOrDeselectAll(false), [handleSelectAllOrDeselectAll]);

    return (
        <div className="flex flex-wrap gap-8 text-white h-full">
            <div className='flex flex-col gap-4 bg-zinc-900 rounded-md p-8 w-full'>
                <InputUrl url={url} getUrl={getUrl} />
                <div>
                    {Object.keys(fileTypes).map((key) => (
                        <FileCategory
                            key={key}
                            category={key}
                            extension={fileTypes[key]}
                            checked={checked[key] || false}
                            onChange={handleCheckboxChange}
                            defaultChecked={true}
                        />
                    ))}
                </div>
                <div className="flex gap-4">
                    <button className="bg-purple-500" onClick={handleSelectAll}>
                        Select All
                    </button>
                    <button className="bg-gray-500" onClick={handleDeselectAll}>
                        Deselect All
                    </button>
                </div>
                <div className='flex gap-4 w-full'>
                    <SendData
                        url={url}
                        checked={checked}
                        setData={setData}
                        setLoading={setLoading}
                        setInvalidUrl={setInvalidUrl} />
                </div>
            </div>
            <ServerResponse classNames={'bg-zinc-900 p-8 rounded-md relative w-full'} response={data} loading={loading} />
        </div>
    );
}