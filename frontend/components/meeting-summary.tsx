"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

function MeetingSummary() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stickyFlag, setStickyFlag] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null); // Added type for ref

  const handleScroll = () => {
    if (stickyRef.current) {
      const offset = stickyRef.current.getBoundingClientRect().top;
      const isStuck = window.scrollY > offset + 50;

      setIsScrolled(isStuck);
      if (offset == 0) {
        setStickyFlag(isStuck);
      } else {
        setStickyFlag(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="relative">
      <div
        ref={stickyRef}
        className={`sticky top-0 z-10 transition-all duration-300 ease-in-out scroll-bar ${
          isScrolled ? "scroll-active bg-white" : ""
        } ${stickyFlag ? "p-4" : ""}`}
      >
        <Link href={"/meetingSummaries"}>
          <div className="flex items-center justify-between">
            <div className="w-full flex justify-between items-center">
              {stickyFlag ? (
                <>
                  <h4 className="meeting-summary-section-heading line-height-22">
                    Meeting Summary (12)
                  </h4>
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
                </>
              ) : (
                <>
                  <h4 className="meeting-summary-section-heading line-height-22">
                    Meeting Summary
                  </h4>
                  <h4 className="meeting-summary-section-count line-height-22 text-span-gradient">
                    12
                  </h4>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-2 px-4">
        {tags.map((tag) => (
          <div key={tag}>
            <Link href={`meetingInfo/${tag}`}>
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
            </Link>

            <Link href={`meetingInfo/${tag}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetingSummary;
