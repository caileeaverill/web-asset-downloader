export default function Loader() {
    return (
        <div className="absolute inset-0 bg-black opacity-60 z-10 rounded-md">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="flex justify-center items-center">
                    <div className="border-t-4 border-lime-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
}