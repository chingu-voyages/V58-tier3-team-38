import React, { useState, useEffect, useMemo } from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  Globe,
  User,
  Ship,
  Target,
} from "lucide-react";
import { Pagination } from "./Pagination";

export interface Person {
  id: string;
  name: string;
  timestamp: string;
  gender: string;
  countryCode: string;
  countryName: string;
  yearJoined: number;
  roleType: string;
  role: string;
  soloProjectTier: string;
  currentVoyageTier: string;
  currentVoyage: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  imageUrl: string;
}

export const exampleData: Person[] = [
  {
    id: "1",
    name: "Anonymous Chingu",
    timestamp: "2022-01-15T10:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2022,
    roleType: "Developer",
    role: "Frontend Developer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier2-team-24",
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "2",
    name: "Anonymous Chingu",
    timestamp: "2023-02-20T11:00:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2023,
    roleType: "Manager",
    role: "Product Owner",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Beginner",
    currentVoyage: "V58-tier1-team-20",
    location: {
      city: "New York",
      state: "NY",
      country: "USA",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "3",
    name: "Anonymous Chingu",
    timestamp: "2021-03-25T12:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2021,
    roleType: "Manager",
    role: "Scrum Master",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-32",
    location: {
      city: "Austin",
      state: "TX",
      country: "USA",
      coordinates: { lat: 30.2672, lng: -97.7431 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "4",
    name: "Anonymous Chingu",
    timestamp: "2021-04-30T13:00:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2021,
    roleType: "Developer",
    role: "Backend Developer",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier2-team-26",
    location: {
      city: "Seattle",
      state: "WA",
      country: "USA",
      coordinates: { lat: 47.6062, lng: -122.3321 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "5",
    name: "Anonymous Chingu",
    timestamp: "2024-05-05T14:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2024,
    roleType: "Designer",
    role: "UX Designer",
    soloProjectTier: "Beginner",
    currentVoyageTier: "Beginner",
    currentVoyage: "V58-tier1-team-21",
    location: {
      city: "Boston",
      state: "MA",
      country: "USA",
      coordinates: { lat: 42.3601, lng: -71.0589 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "6",
    name: "Anonymous Chingu",
    timestamp: "2025-06-10T15:00:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2025,
    roleType: "Developer",
    role: "Fullstack Developer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-31",
    location: {
      city: "Chicago",
      state: "IL",
      country: "USA",
      coordinates: { lat: 41.8781, lng: -87.6298 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "7",
    name: "Anonymous Chingu",
    timestamp: "2022-07-15T16:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2022,
    roleType: "Manager",
    role: "Voyage Guide",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier2-team-28",
    location: {
      city: "Denver",
      state: "CO",
      country: "USA",
      coordinates: { lat: 39.7392, lng: -104.9903 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "8",
    name: "Anonymous Chingu",
    timestamp: "2025-08-20T17:00:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2025,
    roleType: "Designer",
    role: "UX Designer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Miami",
      state: "FL",
      country: "USA",
      coordinates: { lat: 25.7617, lng: -80.1918 },
    },
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  },
  {
    id: "9",
    name: "Amanda Foster",
    timestamp: "2023-09-12T09:30:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2021,
    roleType: "Developer",
    role: "Frontend Developer",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Beginner",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Portland",
      state: "OR",
      country: "USA",
      coordinates: { lat: 45.5152, lng: -122.6784 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
  },
  {
    id: "10",
    name: "Carlos Hernandez",
    timestamp: "2023-10-05T14:45:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2019,
    roleType: "Developer",
    role: "Backend Developer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400",
  },
  {
    id: "11",
    name: "Jessica Lee",
    timestamp: "2023-11-18T11:20:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2022,
    roleType: "Manager",
    role: "Scrum Master",
    soloProjectTier: "Beginner",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      coordinates: { lat: 33.4484, lng: -112.074 },
    },
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  },
  {
    id: "12",
    name: "Nathan Brooks",
    timestamp: "2023-12-02T08:15:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2020,
    roleType: "Designer",
    role: "UX Designer",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      coordinates: { lat: 33.749, lng: -84.388 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
  },
  {
    id: "13",
    name: "Olivia Thompson",
    timestamp: "2024-01-14T13:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2018,
    roleType: "Manager",
    role: "Product Owner",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Dallas",
      state: "TX",
      country: "USA",
      coordinates: { lat: 32.7767, lng: -96.797 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  },
  {
    id: "14",
    name: "Daniel Wong",
    timestamp: "2024-02-08T10:30:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2021,
    roleType: "Developer",
    role: "Full Stack Developer",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "San Diego",
      state: "CA",
      country: "USA",
      coordinates: { lat: 32.7157, lng: -117.1611 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  },
  {
    id: "15",
    name: "Sophia Garcia",
    timestamp: "2024-03-22T15:45:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2023,
    roleType: "Developer",
    role: "Backend Developer",
    soloProjectTier: "Beginner",
    currentVoyageTier: "Beginner",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Minneapolis",
      state: "MN",
      country: "USA",
      coordinates: { lat: 44.9778, lng: -93.265 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
  },
  {
    id: "16",
    name: "Ryan Mitchell",
    timestamp: "2024-04-17T09:00:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2017,
    roleType: "Designer",
    role: "UX Designer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Philadelphia",
      state: "PA",
      country: "USA",
      coordinates: { lat: 39.9526, lng: -75.1652 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=400",
  },
  {
    id: "17",
    name: "Isabella Santos",
    timestamp: "2024-05-29T12:15:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2022,
    roleType: "Designer",
    role: "UX Designer",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Beginner",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Nashville",
      state: "TN",
      country: "USA",
      coordinates: { lat: 36.1627, lng: -86.7816 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
  },
  {
    id: "18",
    name: "Kevin O'Brien",
    timestamp: "2024-06-11T16:30:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2019,
    roleType: "Developer",
    role: "Frontend Developer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Columbus",
      state: "OH",
      country: "USA",
      coordinates: { lat: 39.9612, lng: -82.9988 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=400",
  },
  {
    id: "19",
    name: "Maya Nguyen",
    timestamp: "2024-07-25T14:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2020,
    roleType: "Manager",
    role: "Product Owner",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Detroit",
      state: "MI",
      country: "USA",
      coordinates: { lat: 42.3314, lng: -83.0458 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400",
  },
  {
    id: "20",
    name: "Eric Davis",
    timestamp: "2024-08-19T11:45:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2021,
    roleType: "Manager",
    role: "Scrum Master",
    soloProjectTier: "Beginner",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Charlotte",
      state: "NC",
      country: "USA",
      coordinates: { lat: 35.2271, lng: -80.8431 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400",
  },
  {
    id: "21",
    name: "Rachel Cohen",
    timestamp: "2024-09-03T08:30:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2023,
    roleType: "Developer",
    role: "Backend Developer",
    soloProjectTier: "Beginner",
    currentVoyageTier: "Beginner",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Salt Lake City",
      state: "UT",
      country: "USA",
      coordinates: { lat: 40.7608, lng: -111.891 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
  },
  {
    id: "22",
    name: "Marcus Taylor",
    timestamp: "2024-10-16T13:20:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2018,
    roleType: "Developer",
    role: "Frontend Developer",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Raleigh",
      state: "NC",
      country: "USA",
      coordinates: { lat: 35.7796, lng: -78.6382 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },
  {
    id: "23",
    name: "Victoria Barnes",
    timestamp: "2024-11-08T10:00:00Z",
    gender: "Female",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2022,
    roleType: "Designer",
    role: "UX Designer",
    soloProjectTier: "Intermediate",
    currentVoyageTier: "Intermediate",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "Tampa",
      state: "FL",
      country: "USA",
      coordinates: { lat: 27.9506, lng: -82.4572 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400",
  },
  {
    id: "24",
    name: "Tyler Jackson",
    timestamp: "2024-12-01T15:10:00Z",
    gender: "Male",
    countryCode: "US",
    countryName: "USA",
    yearJoined: 2020,
    roleType: "Manager",
    role: "Scrum Master",
    soloProjectTier: "Advanced",
    currentVoyageTier: "Advanced",
    currentVoyage: "V58-tier3-team-35",
    location: {
      city: "San Jose",
      state: "CA",
      country: "USA",
      coordinates: { lat: 37.3382, lng: -121.8863 },
    },
    imageUrl:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400",
  },
];

const TableView: React.FC = () => {
  const [data, setData] = useState(exampleData);
  const [countryAsc, setCountryAsc] = useState(true);
  const [soloVoyageAsc, setSoloVoyageAsc] = useState(true);
  const [voyageTierAsc, setVoyageTierAsc] = useState(true);
  const [voyageAsc, setVoyageAsc] = useState(true);
  const [numAsc, setNumAsc] = useState(true);
  const [dateAsc, setDateAsc] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [currentPage, data]);

  const sortByYear = () => {
    const sorted = [...exampleData].sort((a, b) =>
      numAsc ? a.yearJoined - b.yearJoined : b.yearJoined - a.yearJoined
    );
    setData(sorted);
    setNumAsc(!numAsc);
  };

  const sortByCountry = () => {
    const sorted = [...exampleData].sort((a, b) =>
      countryAsc
        ? a.countryName.localeCompare(b.countryName)
        : b.countryName.localeCompare(a.countryName)
    );
    setData(sorted);
    setCountryAsc(!countryAsc);
  };

  const sortBySoloVoyage = () => {
    const sorted = [...exampleData].sort((a, b) =>
      soloVoyageAsc
        ? a.soloProjectTier.localeCompare(b.soloProjectTier)
        : b.soloProjectTier.localeCompare(a.soloProjectTier)
    );
    setData(sorted);
    setSoloVoyageAsc(!voyageAsc);
  };

  const sortByVoyageTier = () => {
    const sorted = [...exampleData].sort((a, b) =>
      voyageTierAsc
        ? a.currentVoyageTier.localeCompare(b.currentVoyageTier)
        : b.currentVoyageTier.localeCompare(a.currentVoyageTier)
    );
    setData(sorted);
    setVoyageTierAsc(!voyageAsc);
  };

  const sortByVoyage = () => {
    const sorted = [...exampleData].sort((a, b) =>
      voyageAsc
        ? a.currentVoyage.localeCompare(b.currentVoyage)
        : b.currentVoyage.localeCompare(a.currentVoyage)
    );
    setData(sorted);
    setVoyageAsc(!voyageAsc);
  };

  const sortByDate = () => {
    const sorted = [...exampleData].sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return dateAsc ? dateB - dateA : dateA - dateB;
    });
    setData(sorted);
    setDateAsc(!dateAsc);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case "advanced":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#f5f5f4]">
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-md bg-white w-full mt-6">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  sortByDate();
                }}
              >
                Date Applied
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  sortByYear();
                }}
              >
                Year Joined
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  sortByCountry();
                }}
              >
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Voyage Role
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  sortBySoloVoyage();
                }}
              >
                Solo Project Tier
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  sortByVoyageTier();
                }}
              >
                Voyage Tier
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  sortByVoyage();
                }}
              >
                Voyage
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((person) => (
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center text-start gap-2 text-slate-700">
                    <Calendar className="size-4 text-slate-400" />
                    <div className="flex flex-col">
                      <p>{formatDate(person.timestamp)}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {person.yearJoined}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="gap-1 flex items-center px-1.5 border-1 rounded-md border-gray-200">
                    <User className="size-3" />
                    {person.gender}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="gap-1 flex items-center px-1.5 border-1 rounded-md border-gray-200">
                    <Globe className="size-3" />
                    {person.countryName}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center text-start gap-2 text-slate-700">
                    <Briefcase className="size-4 text-slate-400" />
                    <p className="">{person.roleType}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {person.role}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center gap-1">
                    <Target className="size-3 text-slate-500" />

                    <div
                      className={`text-xs p-1 rounded-md ${getTierColor(
                        person.soloProjectTier
                      )}`}
                    >
                      {person.soloProjectTier}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center gap-1">
                    <Ship className="size-3 text-slate-500" />

                    <div
                      className={`text-xs p-1 rounded-md ${getTierColor(
                        person.currentVoyageTier
                      )}`}
                    >
                      {person.currentVoyageTier}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {person.currentVoyage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableView;
