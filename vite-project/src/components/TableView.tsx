import React, { useState, useEffect } from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  Globe,
  User,
  Ship,
  Target,
} from "lucide-react";

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
    id: "10",
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
    id: "11",
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
    id: "12",
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
];

const TableView: React.FC = () => {
  const [data, setData] = useState(exampleData);
  const [titleAsc, setTitleAsc] = useState(true);
  const [authorAsc, setAuthorAsc] = useState(true);
  const [numAsc, setNumAsc] = useState(true);
  const [dateAsc, setDateAsc] = useState(true);

  //   const sortById = () => {
  //     const sorted = [...prs].sort((a, b) =>
  //       numAsc ? a.number - b.number : b.number - a.number
  //     );
  //     setData(sorted);
  //     setNumAsc(!numAsc);
  //   };

  //   const sortByTitle = () => {
  //     const sorted = [...prs].sort((a, b) =>
  //       titleAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  //     );
  //     setData(sorted);
  //     setTitleAsc(!titleAsc);
  //   };

  //   const sortByAuthor = () => {
  //     const sorted = [...prs].sort((a, b) =>
  //       authorAsc
  //         ? a.author.username.localeCompare(b.author.username)
  //         : b.author.username.localeCompare(a.author.username)
  //     );
  //     setData(sorted);
  //     setAuthorAsc(!authorAsc);
  //   };

  //   const sortByDate = () => {
  //     const sorted = [...prs].sort((a, b) => {
  //       const dateA = new Date(a.createdAt).getTime();
  //       const dateB = new Date(b.createdAt).getTime();
  //       return dateAsc ? dateB - dateA : dateA - dateB;
  //     });
  //     setData(sorted);
  //     setDateAsc(!dateAsc);
  //   };

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
                // onClick={() => {
                //   sortById();
                // }}
              >
                Date Applied
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                // onClick={() => {
                //   sortByTitle();
                // }}
              >
                Year Joined
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                // onClick={() => {
                //   sortByAuthor();
                // }}
              >
                Gender
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                // onClick={() => {
                //   sortByDate();
                // }}
              >
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Voyage Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Solo Project Tier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Voyage Tier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Voyage
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {exampleData.map((person) => (
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
    </div>
  );
};

export default TableView;
