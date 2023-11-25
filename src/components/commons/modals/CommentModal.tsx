import { useState } from "react";
import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
  TERipple
} from "tw-elements-react";

function CommentModal(props: any) {
    const [comment, setComment] = useState<string>('');

    function isNullOrWhitespace(input: any) {
      return !input || input.trim() === '';
    }

    const handleSubmit = () => 
    {
      if(isNullOrWhitespace(comment)) {
        const warningMessage = document.getElementById("remarks-message");
        if(warningMessage !== null)
        {
            warningMessage.style.display = "block";

            setTimeout(() => {
                warningMessage.style.display = "none";
            }, 2000);
        }
    }
    else
    {
      props.handleSubmit(comment)
    }
    };

    if (!props.showModal) return;
    return (
        <div>
        <TEModal show={true} style={{ zIndex: '1050' }}>
        <TEModalDialog style={{ width: '600px', margin: '50px auto' }}>
            <TEModalContent>
            <TEModalHeader>
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                {props.header}
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
            <TEModalBody>
              {props.children}
              <h1 className="text-gray-800 font-lg tracking-normal leading-tight mb-4">{props.commentBoxLabel}</h1>
              <textarea onChange={(e) => setComment(e.target.value)} rows={5} maxLength={250} className="mt-2 resize-none text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center pl-3 text-sm border-gray-300 rounded border" style={{ paddingTop: '10px' }} autoFocus></textarea>
              <h2 id="remarks-message" className="warning-message px-1 py-1 text-red-700 dark:bg-gray-800">Remarks is a required field!</h2>
            </TEModalBody>
            <TEModalFooter> 
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => props.hideModal()}
                  style={{ marginLeft: '5px' }}
                >
                  Cancel
                </button>
              </TERipple>
            </TEModalFooter>
            </TEModalContent>
        </TEModalDialog>
        </TEModal>
        </div>
    );
}

export default CommentModal;