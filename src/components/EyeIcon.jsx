import {FaEye} from 'react-icons/fa'

function EyeIcon({handleSetShowPassword}) {
    return (
        <i className='eyeIcon'><FaEye onClick={()=>handleSetShowPassword()}  /></i>
    )
}

export default EyeIcon
