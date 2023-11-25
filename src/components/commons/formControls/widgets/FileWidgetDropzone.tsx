import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


interface Props {
  setFiles: (files: any) => void;
  isMultiFile: boolean,
  showSelectedFileInfo: boolean,
  name: string
}


export default function FileWidgetDropzone({ name, setFiles, isMultiFile, showSelectedFileInfo }: Props) {

    

    const dzStyles = {
        borderColor: '#eee'
    }
    
    const dzActive = {
        borderColor: 'green'
    }

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive
  } = useDropzone({ onDrop, multiple: isMultiFile, accept: {
    'image/jpeg': [],
    'image/png': []
  } })
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);
  var acceptedFileItems = null;
  if (showSelectedFileInfo) {
    acceptedFileItems = acceptedFiles.map((file: File, index: number) => (
      <li key={index}>
        {file.name} - {file.size} bytes
      </li>
    ));
  }
  return (
    <>
    <div {...getRootProps()} style={style}>
        <input name={name} {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop file here, or click to select file</p>
      }
      </div>
      { showSelectedFileInfo && 
        <aside>
          {acceptedFileItems && acceptedFileItems.length > 0 &&
            <>
              <h4>Selected file</h4>
              <ul>{acceptedFileItems}</ul>
            </>
          }
        
        </aside>
      }
    </>
  )
    
}