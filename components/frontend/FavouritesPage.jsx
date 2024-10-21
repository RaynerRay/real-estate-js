'use client'
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import Loading from '@/app/loading';
import { Heart } from 'lucide-react';
import Link from 'next/link';

const FavoritesPage = ({session}) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (session) {
        try {
          const response = await fetch('/api/favourites');
          if (response.ok) {
            const data = await response.json();
            setFavorites(data);
          } else {
            console.error('Failed to fetch favorites');
          }
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      }
      setIsLoading(false);
    };

    fetchFavorites();
  }, [session]);

  if (isLoading) {
    return <div><Loading /></div>;
  }

  if (!session) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-700 mb-10">Please log in to view your favorites.</p>
        <Link href="/login" className="text-sky-500 font-semibold rounded-md border border-sky-500 py-3 px-2 hover:bg-sky-600 hover:text-white">
          Click here to Login 
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Your Favorite Properties
          </h1>
          <p className="text-lg text-gray-600">
            Discover your curated collection of dream homes
          </p>
        </header>

        {favorites.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <Heart className="mx-auto text-pink-500 mb-4" size={48} />
            <p className="text-xl text-gray-700">
              You have no properties in your favorites yet.
            </p>
            <p className="mt-2 text-gray-500">
              Start exploring and save the homes that catch your eye!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((favorite) => (
              <div key={favorite.propertyId} className="transform hover:scale-105 transition-transform duration-300">
                <PropertyCard
                  title={favorite.properties.title}
                  slug={favorite.properties.slug}
                  salePrice={favorite.properties.salePrice}
                  rentPrice={favorite.properties.rentPrice}
                  address={favorite.properties.address}
                  beds={favorite.properties.beds}
                  baths={favorite.properties.baths}
                  size={favorite.properties.size}
                  imageUrl={favorite.properties.imageUrl}
                  propertyId={favorite.propertyId}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;