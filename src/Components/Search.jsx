import React from 'react'

function Search(props) {
  return (
    <div className='flex flex-col items-start w-full px-[20px] my-[30px]'>
        <div>
            <p className='font-dm text-[16px] lg:text-[24px]'>Search</p>
        </div>
        <div className='w-full'>
            <input type="text"  className='w-full outline-none h-[38px] border border-[#000000] pl-[5px]'
            value={props.value}
            onChange={(e) => props.setSearchValue(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search