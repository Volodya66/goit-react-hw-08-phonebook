


import css from './Modal.module.css'


export default function Modals({onClose ,children})  {

// useEffect(()=> {
//   const handleKeyDown= (e) => {
//   if (e.code === 'Escape') {
//     onClose();
// };
// };

//   window.addEventListener('keydown', handleKeyDown);
//   document.body.style.overflow = 'hidden';

// return ()=>{
  
//   window.removeEventListener('keydown', handleKeyDown);
//   document.body.style.overflow = 'auto';
// }
  
// },[onClose]);




const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      alert('Хиии, потицяй трошки пальчиками, я лінива телефонна книга');

    };
  };

return(
  <div className={css.Overlay} onClick={closeModal} >
        <div className={css.Modal}>
            <h1 className={css.text} >Add new contact</h1>
        {children }
      </div>
  </div>
)

};