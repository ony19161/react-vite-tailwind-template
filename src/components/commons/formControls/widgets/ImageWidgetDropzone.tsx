import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { generateFilePreview } from '../../../../utils/common';

interface Props {
    setFiles: (files: any) => void;
    isMultiFile: boolean
}

export default function ImageWidgetDropzone({setFiles, isMultiFile}: Props) {

    const dzStyles = {
        borderColor: '#eee'
    }
    
    const dzActive = {
        borderColor: 'green'
    }

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
        preview: generateFilePreview(file)
    })));
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, multiple: isMultiFile})

  return (
    <div {...getRootProps()} style={isDragActive ? {...dzActive} : dzStyles}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop file here, or click to select file</p>
      }
    </div>
  )
}