"use client";
import GoBack from "@/components/ui/go-back";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function RealtimeTranscription() {
  const [meetingType, setMeetingType] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <div className="w-full flex items-center">
          <GoBack />
          <h4 className="meeting-page-heading">Meeting 1</h4>
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="flex w-full max-w-sm items-center gap-2 mt-8 mb-4">
          <Label htmlFor="type">Type :</Label>
          <Select onValueChange={setMeetingType}>
            <SelectTrigger
              className={`w-[180px] ${
                meetingType === "" ? "bg-transparent" : "bg-slate-200"
              } select-type-value border-slate-200 outline-none`}
            >
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="conference 1">Conference 1</SelectItem>
              <SelectItem value="conference 2">Conference 2</SelectItem>
              <SelectItem value="conference 3">Conference 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="max-w-md text-center pb-5">
          <CardHeader>
            <img
              src="/assets/images/Audio-Transcription-in-process.svg"
              alt="Audio Transcription in process"
            />
          </CardHeader>
          <CardContent>
            <p className="audio-transcription-recording">
              Card Content <br />
              <span className="text-span-gradient-duration">00:45:12</span>
            </p>

            <div className="mt-4 flex justify-center items-center gap-4 py-5">
              <button className="bg-slate-100 hover:bg-slate-200 rounded-3xl px-3">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="22" y="16" width="6" height="32" fill="black" />
                  <rect x="36" y="16" width="6" height="32" fill="black" />
                </svg>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-3xl px-3">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 32L30 38L42 26"
                    stroke="white"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="footer pb-5 px-4 pt-4">
        <p className="flex items-center audio-transcription-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon-bell"
            width={24}
            height={24}
          >
            <path d="M12 22s1.5 0 1.5-1.5h-3c0 1.5 1.5 1.5 1.5 1.5z"></path>
            <path d="M8 15h8m2-2V9a6 6 0 00-12 0v4m14 4H4"></path>
            <circle cx="12" cy="9" r="0.5" />
          </svg>
          Tips
        </p>
        <p className="audio-transcription-footer-text">
          Due to browser restrictions, keep your device screen on when using a
          handheld device.
        </p>
        <p className="audio-transcription-footer-tagline">How to set up?</p>
      </footer>
    </div>
  );
}

export default RealtimeTranscription;
