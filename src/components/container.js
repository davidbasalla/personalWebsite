import React from 'react'

export default ({ children }) => (
  <div
    style={{
      maxWidth: 1280,
      margin: '0 auto',
      background: 'white',
      'min-height': '100vh',
    }}
  >
    {children}
  </div>
)
