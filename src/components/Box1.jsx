import React from 'react'

const boxStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: '#91c49f',
  color: 'white',

  // 가운데 정렬 3종세트
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function Box1() {
  console.log('Box1이 렌더링되었습니다.')
  return <div style={boxStyle}>Box1</div>
}

export default React.memo(Box1)
