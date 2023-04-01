import React from 'react'
import QRCode from 'react-qr-code'
const App = () => {
  return (
    <div style={{ background: 'white', padding: '16px' }}>
 <QRCode
    size={100}
    style={{ height: "200px", maxWidth: "100%", width: "200px" }}
    value="TMH"
    // viewBox={`0 0 256 256`}
    />
</div>
  )
}

export default App
