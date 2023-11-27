import { RotatingLines } from  'react-loader-spinner'


export default function Loader() {


    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
            }
        
        }>
    <RotatingLines
  strokeColor="grey"
  strokeWidth="3"
  animationDuration="0.75"
  width="80"
  
  visible={true}
    />
  </div>          
)
}

export  function LoaderDelete() {


    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
            }
        
        }>
    <RotatingLines
  strokeColor="grey"
  strokeWidth="3"
  animationDuration="0.75"
  width="18"
  
  visible={true}
    />
  </div>          
)
}