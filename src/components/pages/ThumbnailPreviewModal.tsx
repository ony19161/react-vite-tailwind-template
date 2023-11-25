import { observer } from 'mobx-react-lite';



const ThumbnailPreviewModal = (props: any) => {
  return (
    <>
     <div className="py-20 content-center bg-transparent transition duration-150 ease-in-out z-10" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <button onClick={props.closeFunction}  className="cursor-pointer absolute top-0 right-0 mt-2 mr-3 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                            <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                                    <img
                                        src={props.imageSource}
                                        className="w-full h-auto"
                                        alt="Some video title"
                                    />
                    </div>
                </div>
            </div>
    </>
    );
};

export default observer(ThumbnailPreviewModal);