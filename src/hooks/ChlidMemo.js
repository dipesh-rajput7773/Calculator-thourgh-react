import React, { memo } from 'react'


function ChlidMemo(props) {
    console.log("Chlid component render",props.newCount);
  return (
    <div>ChlidMemo :{props.newCount}</div>
  )
}

export default memo(ChlidMemo) 