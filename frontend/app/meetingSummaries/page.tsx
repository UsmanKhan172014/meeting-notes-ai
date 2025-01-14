"use client";
import GoBack from "@/components/ui/go-back";
import React from "react";

function MeetingSummaries() {
  const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="relative">
      <div
        className={`sticky top-0 z-10 transition-all duration-300 ease-in-out scroll-bar bg-white p-4`}
      >
        <div className="flex items-center justify-between">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center">
              <GoBack />
              <h4 className="meeting-summary-section-heading line-height-22">
                Meeting Summary (12)
              </h4>
            </div>
            <div className="flex gap-2">
              <button>
                <img
                  src="/assets/icons/Chat_Dots.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </button>
              <button>
                <img
                  src="/assets/icons/Folder_Upload.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 bg-white max-w-md mx-3">
        {tags.map((tag) => (
          <div key={tag}>
            <div className="p-2 flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src="/assets/icons/transcription.svg"
                  alt="Transcription"
                />
                <div>
                  <h6 className="summary-title">{tag}</h6>
                  <p className="summary-discription text-summary-text">
                    How you doing ?
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div key={tag} className="p-2 flex justify-between items-center">
              <div className="flex gap-4">
                <img src="/assets/icons/audio.svg" alt="Transcription" />
                <div>
                  <h6 className="summary-title">{tag}</h6>
                  <p className="summary-discription text-summary-text">
                    How you doing ?
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetingSummaries;
