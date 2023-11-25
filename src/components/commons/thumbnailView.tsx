import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../../stores/store';
import "./thumbnailView.css";
import Modal from 'react-modal';
import ThumbnailPreviewModal from '../pages/ThumbnailPreviewModal';
import LoaderView from './LoaderView';


Modal.setAppElement('#root');

interface Props {imageSource : string, lunchDate: any}

const ThumbnailView = ({imageSource, lunchDate}: Props) => {

    const { commonStore } = useStore();

    const [modalIsOpen, setIsOpen] = useState(false); 
    const openModal  = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false); 
        
    const navigate = useNavigate();

    useEffect(() => {
        
        if (!commonStore.token) {
          navigate('/login');
        }
    }, [navigate]);

    const showPreview = () => {
        openModal()
    } 

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" className="py-20 bg-transparent transition duration-150 ease-in-out z-10"> 
        <ThumbnailPreviewModal closeFunction={closeModal} imageSource={imageSource}></ThumbnailPreviewModal>
      </Modal>
      { commonStore.isLoading && <LoaderView />}
    <section>
                    <div
                        className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
                        <div className="w-full flex flex-col cardStyle">
                            <div className="relative">
                                <Link to="#">
                                    <img
                                        src={imageSource}
                                        className="cursor-auto w-full h-auto"
                                        alt="We are trying to load image"
                                    />
                                </Link>

                                <p
                                    className="cursor-pointer absolute right-2 top-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                    onClick={() => showPreview()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                </p>
                            </div>

                            <div className="flex flex-row mt-2 gap-2 thumbnailInfo">
                                <div className="flex flex-col">
                                    <Link to="#">
                                        <p className="cursor-auto text-slate-900 text-sm font-semibold">
                                            Lunch # {lunchDate}
                                        </p>
                                    </Link>
                                    <Link
                                        className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                        to="#">
                                    
                                    </Link>
                                    <p className="text-gray-400 text-xs mt-1">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>
   </>
  );
};

export default observer(ThumbnailView);
