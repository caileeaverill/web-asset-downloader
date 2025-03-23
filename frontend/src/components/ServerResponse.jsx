import React from 'react';
import DownloadAll from './DownloadAll';
import Loader from './Loader';

export default function ServerResponse({ response, loading, error, classNames }) {

    const {
        numOfScrappedElements,
        numOfUniqueElements,
        dataWithoutDuplicates,
    } = response || {};


    if (response) {
        console.log(response);
    }

    return (
        <div className={classNames}>
            <h2 className='text-lg font-bold'>Server Response</h2>
            <div className="flex flex-wrap gap-4">
                {loading && (
                    <Loader />
                )}

                {!loading && error && (
                    <p className="text-red-500">There was an error fetching the data.</p>
                )}

                {/* No Data Available */}
                {!loading && (!response || response.length === 0) && !error && (
                    <p>No data available.</p>
                )}

                {/* Render Data */}
                {
                    !loading && response && (
                        <>
                            <p>{numOfScrappedElements - numOfUniqueElements} duplicates found - display {numOfUniqueElements} unique results</p>
                            <>
                                {
                                    Object.keys(dataWithoutDuplicates).map((key, index) => (
                                        <div key={key} className='flex '>
                                            <span className='mr-2'>{`${index + 1}. `}</span>
                                            <p key={key}>
                                                <a href={dataWithoutDuplicates[key]}>{dataWithoutDuplicates[key]}</a>
                                            </p>
                                        </div>
                                    ))
                                }
                            </>
                            <DownloadAll
                                classNames={'bg-pink-500 p-8 w-64'}
                                dataToDownload={dataWithoutDuplicates}
                            />
                        </>
                    )
                }
            </div>
        </div>
    );
}