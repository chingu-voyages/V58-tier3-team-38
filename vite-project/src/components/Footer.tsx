import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-[#172556] py-4">
      <div className="flex flex-wrap flex-row justify-center text-center m-auto space-x-8 sm:flex sm:justify-evenly">
        <div className="flex items-center justify-center text-center mr-40">
          <a
            href="https://github.com/chingu-voyages/V58-tier3-team-38"
            className="text-gray-100! hover:text-gray-300! cursor-pointer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="flex flex-wrap flex-col justify-center text-left m-auto space-x-8 sm:flex sm:justify-evenly mr-20">
          <h1 className="text-gray-100! underline text-sm">Scrum Master</h1>
          <div>
            <a
              href="https://github.com/bageltime"
              target="_blank"
              className="text-gray-100! hover:text-gray-300!"
            >
              Alex
            </a>
          </div>
          <h1 className="text-gray-100! underline mt-4 text-sm">
            Shadow Scrum Master
          </h1>
          <a
            href="https://github.com/dema66"
            target="_blank"
            className="text-gray-100! hover:text-gray-300!"
          >
            Yangchen
          </a>
        </div>
        <div className="flex flex-wrap flex-col justify-center text-left m-auto space-x-8 sm:flex sm:justify-evenly mt-2">
          <h1 className="text-gray-100! underline text-sm">Developers</h1>
          <a
            href="https://github.com/TheDrakl"
            target="_blank"
            className="text-gray-100! hover:text-gray-300!"
          >
            Denys
          </a>
          <a
            href="https://github.com/LMgit91"
            target="_blank"
            className="text-gray-100! hover:text-gray-300!"
          >
            Mohamed
          </a>
          <a
            href="https://github.com/MatthewNeie"
            target="_blank"
            className="text-gray-100! hover:text-gray-300!"
          >
            Matthew
          </a>
          <a
            href="https://github.com/devimalka"
            target="_blank"
            className="text-gray-100! hover:text-gray-300!"
          >
            Devim
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
