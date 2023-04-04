import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import './styleDropzone.scss'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
}

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
}

function Accept() {
  const [files, setFiles] = useState([])
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      // disabled: true,
      accept: 'image/jpeg, image/png',
      maxFiles: 1,
      onDrop: acceptedFiles => {
        setFiles(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        )
      }
    })

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //     <ul>
  //       {errors.map(e => (
  //         <li key={e.code}>{e.message}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ))


  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code} className={e.code === 'too-many-files' ? 'error-message-red' : 'error-message'}>
            {e.code === 'too-many-files' ? 'Permitido 1 imagem' : e.message}
          </li>
        ))}
      </ul>
    </li>
  ));



  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => URL.revokeObjectURL(file.preview)}
        />
      </div>
    </div>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [files])

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div>
          <p>
            Arraste e solte, ou clique para adicionar a imagem
          </p>
          <button type="button" className='btn-images'>Adicionar imagem</button>
        </div>
      </div>
      <em>(Apenas formato *.jpeg e *.png)</em>
      <p>(Permitido apenas 1 imagem)</p>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <aside >
        <h4 className='aside-class'>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4 className='aside-class'>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  )
}

export default Accept
