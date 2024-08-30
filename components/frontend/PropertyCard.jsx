'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, MapPin, Bed, Bath, Move } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

const PropertyCard = ({ title, slug, salePrice, rentPrice, address, beds, baths, size, imageUrl, propertyId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const checkFavoriteStatus = useCallback(async () => {
    if (session) {
      try {
        const response = await fetch(`/api/favourites?userId=${session.user.id}&propertyId=${propertyId}`);
        if (response.ok) {
          const data = await response.json();
          setIsFavorite(data.length > 0);
        }
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    }
  }, [session, propertyId]);

  useEffect(() => {
    if (session && propertyId) {
      checkFavoriteStatus();
    }
  }, [session, propertyId, checkFavoriteStatus]);

  const handleFavoriteClick = async () => {
    if (!session) {
      toast.error('Please log in to add to favorites');
      router.push('/login');
      return;
    }

    try {
      const method = isFavorite ? 'DELETE' : 'POST';
      const response = await fetch('/api/favourites', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session.user.id,
          propertyId,
        }),
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
        toast.success(isFavorite ? 'Property removed from favorites' : 'Property added to favorites');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to update favorites');
      }
    } catch (error) {
      console.error('Error handling favorite:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="box-dream border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
 
      <div className="relative">
        <Link href={`/properties/${slug}`}>
          <div className="h-64 bg-gray-300">
            <Image height={500} width={500} src={imageUrl} alt="" className="w-full h-64 object-cover" />
          </div>
        </Link>
      </div>
      <div className="content mt-4">
        <div className="head flex justify-between items-center">
          <Link href={`/properties/${slug}`}>
            <div className="title font-semibold text-md text-gray-700">{title}</div>
          </Link>
          <p className="text-sm font-semibold text-green-900">
            $
            {rentPrice 
              ? `${rentPrice.toLocaleString()}/month`
              : salePrice
                ? salePrice.toLocaleString()
                : "Price not available"}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="location mt-2 flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-gray-800" />
            <p>{address}</p>
          </div>
          <div onClick={handleFavoriteClick} className="cursor-pointer">
            <Heart className={isFavorite ? "text-red-500 w-6 h-6" : "text-gray-500 w-6 h-6"} />
          </div>
        </div>
        <div className="icon-box mt-4 flex justify-between text-gray-500">
          <div className="item flex items-center">
            <Bed className="w-4 h-4 mr-2 text-gray-800" />
            <p>{beds} Beds</p>
          </div>
          <div className="item flex items-center">
            <Bath className="w-4 h-4 mr-2 text-gray-800" />
            <p>{baths} Baths</p>
          </div>
          <div className="item flex items-center">
            <Move className="w-4 h-4 mr-2 text-gray-800" />
            <p>{size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
