import React from 'react'

export default ({ children }) => (
  <div
    style={{
      maxWidth: 1280,
      margin: '0 auto',
      background: '#1a202c',
      'min-height': '100vh',
    }}
  >
    {children}
  </div>
)
