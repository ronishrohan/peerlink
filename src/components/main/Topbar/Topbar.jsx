import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, User2, UserCircle2 } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='border-b border-border h-16 shrink-0 top-0 sticky bg-background/20 backdrop-blur-sm  w-full p-4 flex items-center'>
        <div className='text-xl font-sans font-bold text-primary'>Home</div>
        <div className='flex gap-2 ml-auto items-stretch' >
            <div className='relative group'>
                <Search size={14} className='absolute pointer-events-none transition-all left-3 group-focus-within:text-primary top-1/2 transform -translate-y-1/2 text-gray-500 z-10' />
            <Input className={"min-w-[300px] pl-8"}  placeholder="Search for hackathons" />
            </div>
            <Button  ><User2 /></Button>
        </div>
    </div>
  )
}

export default Topbar