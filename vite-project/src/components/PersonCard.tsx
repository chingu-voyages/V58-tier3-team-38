// import { Person } from "./ListView";
import {
  MapPin,
  Briefcase,
  Calendar,
  Globe,
  User,
  Ship,
  Target,
} from "lucide-react";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
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
    <div className="overflow-hidden transition-shadow hover:shadow-lg p-4 bg-white rounded-lg">
      <div className="pb-4">
        <div className="flex items-start gap-4">
          <div className="size-16">
            <img
              className="aspect-square rounded-full"
              src={person.imageUrl}
              alt={person.name}
            />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 flex items-center">{person.name}</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <div className="gap-1 flex items-center px-1.5 border-1 rounded-md border-gray-200">
                <User className="size-3" />
                {person.gender}
              </div>
              <div className="gap-1 flex items-center px-1.5 border-1 rounded-md border-gray-200">
                <Globe className="size-3" />
                {person.countryCode}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center text-start gap-2 text-slate-700">
            <Calendar className="size-4 text-slate-400" />
            <div className="flex flex-col">
              <p className="text-xs text-slate-500">Applied</p>
              <p>{formatDate(person.timestamp)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-700 ml-8">
            <Calendar className="size-4 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Joined</p>
              <p className="">{person.yearJoined}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-gray-200">
          <div className="flex items-center text-start gap-2 text-slate-700">
            <Briefcase className="size-4 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Role</p>
              <p className="">
                {person.roleType} - {person.role}
              </p>
            </div>
          </div>

          <div className="flex items-center text-start gap-2 text-slate-700">
            <MapPin className="size-4 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p>
                {person.location.city}, {person.location.state}
              </p>
            </div>
          </div>

          <div className="flex items-center text-start gap-2 text-slate-700">
            <Ship className="size-4 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Current Voyage</p>
              <p>{person.currentVoyage}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <div className="flex items-center gap-1">
            <Target className="size-3 text-slate-500" />
            <span className="text-xs text-slate-600">Solo:</span>
            <div
              className={`text-xs p-1 rounded-md ${getTierColor(
                person.soloProjectTier
              )}`}
            >
              {person.soloProjectTier}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Ship className="size-3 text-slate-500" />
            <span className="text-xs text-slate-600">Voyage:</span>
            <div
              className={`text-xs p-1 rounded-md ${getTierColor(
                person.currentVoyageTier
              )}`}
            >
              {person.currentVoyageTier}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
