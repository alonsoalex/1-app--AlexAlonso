import React from 'react'


function ItemCount () {

const  [val, setValue] =  React.useState(0)


    return (
    <div>
<button onClick ={ ()=> setValue(val + 1)}> +</button>


<button onClick ={ ()=> setValue(val - 1)}> -</button>
<h2>{val}</h2>



    </div>
  )
}
export default ItemCount