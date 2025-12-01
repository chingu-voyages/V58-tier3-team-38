import React from 'react';
import image1 from '../assets/chinguPicture.png';
import SearchFilter from './SearchFilter';
import type { FilterCriteria } from '@/types/filter';

const Home: React.FC = () => {

 

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Welcome to Chingu member Demographic Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This platform provides comprehensive demographic insights and geographic distribution 
            data for analysis and research purposes.
          </p>
          
          
            <div className="flex justify-center mb-12">
              <img className="max-w-xs md:max-w-sm lg:max-w-md mx-auto rounded-lg shadow-md" src={image1} alt='this is the logo image' />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Map View</h3>
                <p className="text-gray-600 mb-4">
                  Visualize member distribution geographically with interactive maps. 
                  Explore demographic patterns across different regions and countries.
                </p>
                <button className="bg-blue-500 text-black px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                  Explore Map
                </button>
              </div>
            
                      
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Table View</h3>
                <p className="text-gray-600 mb-4">
                  Access detailed member information in a structured table format. 
                  Filter, sort, and analyze comprehensive demographic data.
                </p>
                <button className="bg-green-500 text-black px-6 py-2 rounded hover:bg-green-600 transition-colors">
                  View Table
                </button>
              </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;