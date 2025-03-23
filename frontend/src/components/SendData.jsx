
export default function SendData({ url, checked, setLoading, setData, setInvalidUrl }) {
    function sendDataToBackend() {

        if (!url) {
            setInvalidUrl(true);

            return;
        }

        const endpoint = 'http://localhost:3000/scrape-data';
        setLoading(true);

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url, checked }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((response) => {
                if (response) {
                    setData(response);
                    console.log(response);
                } else if (response.error) {
                    console.error(response.error);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    }
    return (
        <>
            <button
                className="bg-lime-500"
                onClick={sendDataToBackend}>
                Submit
            </button>
        </>
    )
}
