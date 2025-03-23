export default function DownloadAll({ dataToDownload, classNames }) {

    console.log(dataToDownload);

    const handleDownloadAll = () => {
        Object.values(dataToDownload).forEach((url) => {
            const link = document.createElement('a');
            link.href = url;
            link.download = url.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <button className={classNames} onClick={handleDownloadAll}>Download All</button>
    );
}