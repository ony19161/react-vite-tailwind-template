import { Props } from "react-modal";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './styles/pageLayout.css';

interface CustomProps {
    mainContentLabel?: string | undefined,
    subContentLabel?: string | undefined,
    mainContentLabelLink: string,
    subContentLabelLink: string,
    isHidden?: boolean | undefined
}

type allProps = Props & CustomProps;

/*
{ children, isOpen, contentLabel } : Props, { } : CustomProps
*/

const PageLayout = (allProps: allProps) => {
    const { children, isOpen, contentLabel } = allProps as Props;
    const { mainContentLabel, subContentLabel, mainContentLabelLink, subContentLabelLink}  = allProps as CustomProps;
    if (!isOpen) return;
    return (
        <>
            <ToastContainer theme="colored" position="bottom-right"/>
            <div className="w-full p-4" style={{ display: allProps.isHidden ? 'none' : 'block' }}>
                <div className="bg-slate-200">
                    <div className="mx-auto max-w-8xl py-4 sm:px-4 lg:px-4">
                        <div className="bg-white p-4 shadow rounded-lg content-container">
                            <nav aria-label="breadcrumb"> 
                                <ol className="flex my-2" style={{paddingLeft: '0px'}}>
                                {
                                mainContentLabel === undefined || mainContentLabel === null || mainContentLabel === '' ?
                                <span></span>
                                : 
                                <li><Link to={mainContentLabelLink} className="after:content-['/'] after:mx-2 text-gray-600 hover:text-purple-700">{mainContentLabel}</Link></li>
                                }
                                {
                                subContentLabel === undefined || subContentLabel === null || subContentLabel === '' ?
                                <span></span>
                                : 
                                <li><Link to={subContentLabelLink} className="after:content-['/'] after:mx-2 text-gray-600 hover:text-purple-700">{subContentLabel}</Link></li>
                                }
                                    
                                <li className="text-black font-bold mr-2" aria-current="page">{contentLabel}</li> 
                                </ol>
                            </nav>
                            {/* <h2 className="text-gray-500 text-lg font-semibold pb-4">{contentLabel}</h2> */}
                            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                            {children}
                        </div>
                        {/* <div className="mx-auto max-w-7xl"> 
                            <div>                                
                                <div style={{ maxWidth: "1024px", margin: "auto" }}>
                                <div className="text-center">
                                    <h1 className="text-4xl font-black text-black dark:text-gray-200 mb-8">
                                        {contentLabel}
                                    </h1>
                                </div>
                                <div className="mx-4">
                                    {children}
                                </div>
                            </div>
                                
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default PageLayout;