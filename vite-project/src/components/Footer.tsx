import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-[#172556] py-4">
      <div className="flex flex-wrap flex-col justify-center text-center m-auto space-x-8 sm:flex sm:justify-evenly">
        <div className="flex items-center justify-center text-center mt-4 mb-4">
          <a
            href="https://github.com/chingu-voyages/V58-tier3-team-38"
            className="text-gray-100! hover:text-gray-300! cursor-pointer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-wrap flex-col justify-center text-left m-auto space-x-8 sm:flex sm:justify-evenly ml-10 sm:ml-0 mr-10 sm:mr-20">
            <h1 className="text-gray-100! underline text-sm mb-2">
              Agile Leadership
            </h1>
            <div className="flex mb-2">
              <p className="text-white">Alex Thomas</p>
              <a
                href="https://github.com/bageltime"
                target="_blank"
                className="sm:ml-4 ml-2 text-gray-100! hover:text-gray-300!"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/ajt11176/"
                target="_blank"
                className="ml-2 text-gray-100! hover:text-gray-300!"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="flex">
              <p className="text-white">Yangchen Dema</p>
              <a
                href="https://github.com/dema66"
                target="_blank"
                className="sm:ml-4 ml-2 text-gray-100! hover:text-gray-300!"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap flex-col justify-center text-left m-auto space-x-8 sm:flex sm:justify-evenly mt-2 ml-10 sm:ml-20">
            <h1 className="text-gray-100! underline text-sm mb-2">
              Developers
            </h1>
            {/* <a
              href="https://github.com/TheDrakl"
              target="_blank"
              className="text-gray-100! hover:text-gray-300!"
            >
              Denys
            </a> */}
            <div className="flex">
              <p className="text-white mb-2">Drame Mohamed</p>
              <a
                href="https://github.com/LMgit91"
                target="_blank"
                className="sm:ml-4 ml-2 text-gray-100! hover:text-gray-300!"
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="flex">
              <p className="text-white">Matthew Neie</p>
              <a
                href="https://github.com/MatthewNeie"
                target="_blank"
                className="sm:ml-4 ml-2 text-gray-100! hover:text-gray-300!"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-neie/"
                target="_blank"
                className="ml-2 text-gray-100! hover:text-gray-300!"
              >
                <LinkedInIcon />
              </a>
            </div>
            {/* <a
              href="https://github.com/devimalka"
              target="_blank"
              className="text-gray-100! hover:text-gray-300!"
            >
              Devim
            </a> */}
          </div>
        </div>
        <p className="text-white italic mt-4 text-xs">December 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
