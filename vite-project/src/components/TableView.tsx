import React, { useState, useEffect, useMemo } from "react";
import {
  // MapPin,
  Briefcase,
  Calendar,
  Globe,
  User,
  Ship,
  Target,
} from "lucide-react";
import { Pagination } from "./Pagination";

interface SignupEntry {
  Timestamp: string;
  Gender: string;
  "Country Code": string;
  Timezone: string;
  Goal: string;
  "Goal-Other": string;
  Source: string;
  "Source-Other": string;
  "Country name (from Country)": string;
  "Solo Project Tier": string;
  "Role Type": string;
  "Voyage Role": string;
  "Voyage (from Voyage Signups)": string;
  "Voyage Tier": string;
}

const TableView: React.FC = () => {
  const [data, setData] = useState<SignupEntry[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/entries")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const [countryAsc, setCountryAsc] = useState(true);
  const [soloVoyageAsc, setSoloVoyageAsc] = useState(true);
  const [voyageTierAsc, setVoyageTierAsc] = useState(true);
  const [voyageAsc, setVoyageAsc] = useState(true);
  const [numAsc, setNumAsc] = useState(true);
  const [dateAsc, setDateAsc] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 16;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [currentPage, data]);

  const getYear = (timestamp: string): number => {
    return new Date(timestamp).getFullYear();
  };

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateA = new Date(a.Timestamp).getTime();
      const dateB = new Date(b.Timestamp).getTime();
      return dateAsc ? dateB - dateA : dateA - dateB;
    });
    setData(sorted);
    setDateAsc(!dateAsc);
  };

  const sortByYear = () => {
    const sorted = [...data].sort((a, b) => {
      const dateA = new Date(a.Timestamp).getFullYear();
      const dateB = new Date(b.Timestamp).getFullYear();
      return dateAsc ? dateB - dateA : dateA - dateB;
    });
    setData(sorted);
    setNumAsc(!dateAsc);
  };

  // const sortByYear = () => {
  //   const sorted = [...data].sort((a, b) =>
  //     numAsc ? a.getYear(Timestamp) - b.getYear(Timestamp) : b.yearJoined - a.yearJoined
  //   );
  //   setData(sorted);
  //   setNumAsc(!numAsc);
  // };

  const sortByCountry = () => {
    const sorted = [...data].sort((a, b) =>
      countryAsc
        ? a["Country name (from Country)"].localeCompare(
            b["Country name (from Country)"]
          )
        : b["Country name (from Country)"].localeCompare(
            a["Country name (from Country)"]
          )
    );
    setData(sorted);
    setCountryAsc(!countryAsc);
  };

  const sortBySoloVoyage = () => {
    const sorted = [...data].sort((a, b) =>
      soloVoyageAsc
        ? a["Solo Project Tier"].localeCompare(b["Solo Project Tier"])
        : b["Solo Project Tier"].localeCompare(a["Solo Project Tier"])
    );
    setData(sorted);
    setSoloVoyageAsc(!voyageAsc);
  };

  const sortByVoyageTier = () => {
    const sorted = [...data].sort((a, b) =>
      voyageTierAsc
        ? a["Voyage Tier"].localeCompare(b["Voyage Tier"])
        : b["Voyage Tier"].localeCompare(a["Voyage Tier"])
    );
    setData(sorted);
    setVoyageTierAsc(!voyageAsc);
  };

  const sortByVoyage = () => {
    const sorted = [...data].sort((a, b) =>
      voyageAsc
        ? a["Voyage (from Voyage Signups)"].localeCompare(
            b["Voyage (from Voyage Signups)"]
          )
        : b["Voyage (from Voyage Signups)"].localeCompare(
            a["Voyage (from Voyage Signups)"]
          )
    );
    setData(sorted);
    setVoyageAsc(!voyageAsc);
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
      case "tier 3":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "tier 2":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "tier 1":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#f5f5f4]">
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-md bg-white mt-6">
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-70">
                  <div className="flex items-center text-start gap-2 text-slate-700">
                    <Calendar className="size-4 text-slate-400" />
                    <div className="flex flex-col">
                      <p>{formatDate(person.Timestamp)}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 w-36">
                  {getYear(person.Timestamp)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-36">
                  <div className="gap-1 flex items-center px-1.5">
                    <User className="size-3" />
                    {person["Gender"]
                      ? person["Gender"].charAt(0) +
                        person["Gender"].slice(1).toLowerCase()
                      : "unknown"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-64">
                  <div className="gap-1 flex items-center px-1.5">
                    <Globe className="size-3" />
                    {person["Country name (from Country)"]}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 w-34">
                  <div className="flex items-center text-start gap-2 text-slate-700">
                    <Briefcase className="size-4 text-slate-400" />
                    <p
                      className={`${
                        !person["Role Type"]?.trim() ? "italic" : ""
                      }`}
                    >
                      {person["Role Type"]?.trim() || "unknown"}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 w-40">
                  {person["Voyage Role"]}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 w-50">
                  <div className="flex items-center gap-1">
                    <Target className="size-3 text-slate-500" />

                    <div
                      className={`text-xs p-1 rounded-md ${getTierColor(
                        person["Solo Project Tier"]
                      )} ${
                        !person["Solo Project Tier"] ? "italic bg-white" : ""
                      }`}
                    >
                      {person["Solo Project Tier"] || "unknown"}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center gap-1">
                    <Ship className="size-3 text-slate-500" />

                    <div
                      className={`text-xs p-1 rounded-md ${getTierColor(
                        person["Voyage Tier"]
                      )} ${!person["Voyage Tier"] ? "italic bg-white" : ""}`}
                    >
                      {person["Voyage Tier"] || "unknown"}
                    </div>
                  </div>
                </td>
                <td
                  className={`px-6 py-4 text-sm text-gray-900  ${
                    !person["Role Type"] ? "italic text-sm" : ""
                  }`}
                >
                  {person["Voyage (from Voyage Signups)"] || "unknown"}
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
