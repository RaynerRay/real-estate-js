import  FavouritesPage  from '@/components/frontend/FavouritesPage'
import React from 'react'
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';

const page = async() => {
  const session = await getServerSession(authOptions);

  return (
    <div>
       <FavouritesPage session={session}/>
    </div>
  )
}

export default page