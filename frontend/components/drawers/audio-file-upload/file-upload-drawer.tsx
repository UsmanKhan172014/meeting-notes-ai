"use client";
import React, { useState, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Folder, ChevronRight } from "lucide-react";

function FileUploadDrawer({ isOpen, closeDrawer }: any) {
  const fileInputRef: any = useRef(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    console.log("Selected audio files:", files);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setIsDragActive(false);
    const files = event.dataTransfer.files;
    console.log("Dropped audio files:", files);
  };

  return (
    <Drawer open={isOpen} onClose={closeDrawer}>
      <DrawerContent className="max-w-md min-h-[34rem] flex flex-col bg-white">
        <DrawerHeader>
          <DrawerTitle className="flex justify-between items-center">
            Upload Audio File
            <button onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DrawerTitle>
        </DrawerHeader>
        <main className="p-4 flex-grow">
          <div
            className={`flex w-full max-w-md items-center justify-between px-4 py-5 shadow-sm hover:shadow-lg transition-shadow cursor-pointer ${
              isDragActive ? "border-blue-500 bg-blue-50" : "bg-slate-200"
            }`}
            onClick={handleFileUpload}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex items-center gap-3">
              <img src="/assets/icons/Folder.svg" alt="Folder Icon" />
              <span className="text-base font-medium text-gray-800">
                {isDragActive ? "Drop your files here" : "Import from Local"}
              </span>
            </div>
            <ChevronRight className="text-gray-400 w-6 h-6" />
          </div>
        </main>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".mp3,.wav,.m4a,.aac,.3gp,.mp4,.mov,.avi,.mpeg"
          multiple
          onChange={handleFileChange}
        />
        <DrawerFooter>
          <p className="flex items-center upload-audio-footer-heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-bell"
              width={22}
              height={22}
            >
              <path d="M12 22s1.5 0 1.5-1.5h-3c0 1.5 1.5 1.5 1.5 1.5z"></path>
              <path d="M8 15h8m2-2V9a6 6 0 00-12 0v4m14 4H4"></path>
              <circle cx="12" cy="9" r="0.5" />
            </svg>
            Tips
          </p>
          <p className="upload-audio-footer-text">Supported file formats:</p>
          <p className="upload-audio-footer-text">
            MP3, WAV, M4A, AAC, 3GP, MP4, MOV, AVI, MPEG
          </p>
          <p className="upload-audio-footer-text">
            Each file must be less than 5 hours in duration and not exceed 1GB
            in size.
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default FileUploadDrawer;
