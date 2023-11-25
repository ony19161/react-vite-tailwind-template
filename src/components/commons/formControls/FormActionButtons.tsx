
interface Props {
    isSubmitting: boolean,
    submitButtonText: string,
    cancelButtonText: string,
    onCancel: (e: any) => void
}

export default function FormActionButtons(props: Props) {


    return (
        <>
            <div className="mt-6 flex items-center justify-end gap-x-6">                
                <button
                    type="submit"
                    disabled={props.isSubmitting}
                    className="w-40 bg-blue-950 px-3 py-4 text-white rounded-md hover:bg-blue-800 my-4"
                    style={{ cursor: props.isSubmitting ? 'not-allowed' : 'pointer', backgroundColor: '#008B8B'}}
                >
                    {props.isSubmitting ? "Submitting..." : props.submitButtonText}
                </button>
                <button
                    type="button" onClick={props.onCancel}
                    className="w-40 bg-red-950 px-3 py-4 text-white rounded-md hover:bg-red-800"
                    style={{ backgroundColor: 'red' }}
                >
                    {props.cancelButtonText}
                </button>
            </div>
        </>
    );
}