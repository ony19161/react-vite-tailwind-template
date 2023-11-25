import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody
} from "tw-elements-react";

function InfoModal(props: any) {    
    if (!props.showModal) return;
    return (
        <div>
        <TEModal show={true} style={{ zIndex: '1050' }}>
        <TEModalDialog style={{ width: '600px', margin: '50px auto' }}>
            <TEModalContent>
            <TEModalHeader>
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                {props.head}
                </h5>
                <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => props.hideModal()}
                aria-label="Close"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </TEModalHeader>
            <TEModalBody>{props.body}</TEModalBody>
            </TEModalContent>
        </TEModalDialog>
        </TEModal>
        </div>
    );
}

export default InfoModal;