import React from "react";

interface Props {}

const MigrationModal: React.FC<Props> = () => {

  // Modal stays open at all times; no key listeners to close it.

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/45"
        style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
      />

      {/* Modal Box */}
      <div
        className="relative z-10 max-w-xl w-full mx-4 p-6 rounded-lg shadow-lg"
        style={{ background: "#2A2320", border: "1px solid rgba(255,255,255,0.03)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="gaegu text-3xl text-[#D4C5B5] mb-3 text-center">
          We're migrating!
        </h2>

        <p className="gaegu text-center text-[#CDBFA8] mb-4">
          All rockies activities are on :
          <a
            className="ml-2 underline text-[#A68A6D]"
            href="https://rockyshead.vercel.app/"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://rockyshead.vercel.app/
          </a>
        </p>

        <div className="flex items-center justify-center mt-4">
          <a
            href="https://rockyshead.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md text-white font-semibold gaegu text-center"
            style={{
              background: "linear-gradient(180deg, #8B7355 0%, #A68A6D 100%)",
              boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.12)",
              textDecoration: "none",
            }}
          >
            enter in portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default MigrationModal;
