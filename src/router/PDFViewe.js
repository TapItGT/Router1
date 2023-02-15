import React from 'react'

export default function PDFViewer({ url }) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        src={url}
        title="PDF viewer"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}

