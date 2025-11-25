import { PersonCard } from "./PersonCard";

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
];

const ListView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exampleData.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;
