"use client";

import Header from "@/components/layout/header";
import MeetingSummary from "@/components/meeting-summary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import * as React from "react";
import FileUploadDrawer from "@/components/audio-file-upload/file-upload-drawer";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl relative isolate px-6 lg:px-8">
        <div className="max-w-2xl py-5 sm:py-5 lg:py-8">
          <div className="relative">
            <h1 className="text-balance font-semibold tracking-tight text-gray-900">
              New Era of Meeting{" "}
              <span className="text-span-gradient">AI</span>
            </h1>
            <img
              src="/assets/vectors/hero-heading.svg"
              alt=""
              className="absolute top-0 left-40"
            />
          </div>
          <p className="mt-3 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Accurate Speech Recognition
          </p>
          <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Real-Time Structured Transcription
          </p>
          <div className="mt-5">
            <button className="px-3.5 py-2.5 bg-button-gradient hover:bg-gradient-to-r from-pink-100 to-blue-200 text-sm font-semibold shadow-sm">
              <span className="bg-clip-text text-transparent bg-text-gradient hover:bg-gradient-to-r from-purple-500 to-blue-600 font-semibold text-sm">
                Free to Try Twice
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-16 mx-auto text-center">
          <Link href={"/realtimeTranscription"}>
            <Card className="w-full max-w-screen-md flex flex-col relative py-5 bg-card-gradient-purple border-none shadow-cards-custom-shadow cursor-pointer">
              <CardHeader className="px-4">
                <CardTitle className="cards-title-custom line-height-22">
                  Real-Time Transcription
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <img
                  src="/assets/icons/real-time-transcription.svg"
                  alt=""
                  className="absolute top-5.5"
                />
                <div>
                  <p className="card-paragraph line-height-22">
                    Live Notes Conversion
                  </p>
                  <p className="card-paragraph line-height-22">
                    Smart Summarization
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card
            className="w-full max-w-screen-md flex flex-col relative py-5 bg-card-gradient-blue border-none shadow-cards-custom-shadow cursor-pointer"
            onClick={openDrawer}
          >
            <CardHeader className="px-4">
              <CardTitle className="cards-title-custom line-height-22">
                Upload
                Audio File
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <img
                src="/assets/icons/upload-audio-file.svg"
                alt=""
                className="absolute top-5.5"
              />
              <div>
                <p className="card-paragraph line-height-22">Audio-to-Text</p>
                <p className="card-paragraph line-height-22">
                  Speaker Identification
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 mx-auto bg-white rounded-lg py-6 px-4 sm:px-6 lg:px-8">
          <MeetingSummary />
        </div>
      </div>

      <FileUploadDrawer isOpen={isOpen} closeDrawer={closeDrawer} />
    </>
  );
}
