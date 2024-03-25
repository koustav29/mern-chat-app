import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-8 flex flex-col md:min-w-[400px]'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar






// STARTER CODE SNIPPET 
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-8 flex flex-col'>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Conversations/>
//         <LogoutButton/>
//     </div>
//   )
// }

// export default Sidebar