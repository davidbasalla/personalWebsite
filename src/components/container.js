import React from 'react'

export default ({ children }) => (
  <div
    style={{
      maxWidth: 1280,
      margin: '0 auto',
      background: '#1a202c',
      minHeight: '100vh',
    }}
  >
    {children}
  </div>
)
