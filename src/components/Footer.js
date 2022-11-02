import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
  return (
    <div className='flex justify-center items-center py-10 gap-3 md:gap-11'>
        <p className='flex items-center'><AiOutlineCopyrightCircle /> 2022</p>
        <p>All rights reserved</p>
    </div>
  )
}

export default Footer