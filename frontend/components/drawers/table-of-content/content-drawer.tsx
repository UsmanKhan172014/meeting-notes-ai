"use client";
import React, { useState, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ContentDrawer({ isOpen, closeDrawer }: any) {
  return (
    <Drawer open={isOpen} onClose={() => closeDrawer("contentDrawer")}>
      <DrawerContent className="max-w-md min-h-[34rem] max-h-[40rem] flex flex-col">
        <DrawerHeader className="px-4 py-0">
          <DrawerTitle className="flex justify-between items-center drawer-title">
            Table of Content
            <button onClick={() => closeDrawer("contentDrawer")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
        <main className="px-4 flex-grow max-h-[40rem] overflow-y-auto scrollbar-hide">
          <Accordion
            type="single"
            collapsible
            className="border-none border-transparent"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger py-2">
                <h4 className="meeting-info-accordion-heading flex items-center gap-3">
                  <svg
                    fill="none"
                    viewBox="-1.2 -1.2 26.40 26.40"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                    className="accordion-icon w-7 h-7 transition-transform duration-300"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538Z"
                        fill="#5C657E"
                        stroke="none"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                      ></path>
                      <path
                        d="M10,14.865V9.135L13.438,12Z"
                        fill="#5C657E"
                        stroke="none"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                      ></path>
                    </g>
                  </svg>
                  The Dawn of Innovation
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content ps-10">
                A world driven by technology, every small idea has the potential
                to spark monumental change. From the humblest of beginnings,
                great innovations are born, shaping industries and redefining
                how we live.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="border-none border-transparent"
          >
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger py-2">
                <h4 className="meeting-info-accordion-heading flex items-center gap-3">
                  <svg
                    fill="none"
                    viewBox="-1.2 -1.2 26.40 26.40"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                    className="accordion-icon w-7 h-7 transition-transform duration-300"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538Z"
                        fill="#5C657E"
                        stroke="none"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                      ></path>
                      <path
                        d="M10,14.865V9.135L13.438,12Z"
                        fill="#5C657E"
                        stroke="none"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                      ></path>
                    </g>
                  </svg>
                  From the beginning
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content pb-0">
                {/* Inner Item 1 */}
                <Accordion
                  type="single"
                  collapsible
                  className="border-none border-transparent ms-1"
                >
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="meeting-info-accordion-trigger py-2">
                      <h4 className="meeting-info-child-accordion-heading flex items-center gap-3">
                        <svg
                          fill="none"
                          viewBox="-1.2 -1.2 26.40 26.40"
                          xmlns="http://www.w3.org/2000/svg"
                          transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                          className="accordion-icon w-5 h-5 transition-transform duration-300"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538Z"
                              fill="#898e9b"
                              stroke="none"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                            ></path>
                            <path
                              d="M10,14.865V9.135L13.438,12Z"
                              fill="#898e9b"
                              stroke="none"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                            ></path>
                          </g>
                        </svg>
                        Explores the journey from concept to creation
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="meeting-info-accordion-content ps-8">
                      <ol className="meeting-info-child-accordion-list list-decimal list-outside pl-5">
                        <li>
                          From the humblest of beginnings, great innovations are
                          born.
                        </li>
                        <li>
                          From the humblest of beginnings, great innovations are
                          born, shaping ...
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Inner item 2 */}
                <Accordion
                  type="single"
                  collapsible
                  className="border-none border-transparent ms-1"
                >
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="meeting-info-accordion-trigger py-2">
                      <h4 className="meeting-info-child-accordion-heading flex items-center gap-3">
                        <svg
                          fill="none"
                          viewBox="-1.2 -1.2 26.40 26.40"
                          xmlns="http://www.w3.org/2000/svg"
                          transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                          className="accordion-icon w-5 h-5 transition-transform duration-300"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538Z"
                              fill="#898e9b"
                              stroke="none"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                            ></path>
                            <path
                              d="M10,14.865V9.135L13.438,12Z"
                              fill="#898e9b"
                              stroke="none"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                            ></path>
                          </g>
                        </svg>
                        Explores the journey from concept to creation
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="meeting-info-accordion-content ps-8">
                      <ol className="meeting-info-child-accordion-list list-decimal list-outside pl-5">
                        <li>
                          From the humblest of beginnings, great innovations are
                          born.
                        </li>
                        <li>
                          From the humblest of beginnings, great innovations are
                          born, shaping ...
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="border-none border-transparent"
          >
            <AccordionItem value="item-5" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger py-2">
                <h4 className="meeting-info-accordion-heading flex items-center gap-3">
                  <svg
                    fill="none"
                    viewBox="-1.2 -1.2 26.40 26.40"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                    className="accordion-icon w-7 h-7 transition-transform duration-300"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538Z"
                        fill="#5C657E"
                        stroke="none"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                      ></path>
                      <path
                        d="M10,14.865V9.135L13.438,12Z"
                        fill="#5C657E"
                        stroke="none"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                      ></path>
                    </g>
                  </svg>
                  End
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content ps-10">
                A world driven by technology, every small idea has the potential
                to spark monumental change. From the humblest of beginnings,
                great innovations are born, shaping industries and redefining
                how we live.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </main>
      </DrawerContent>
    </Drawer>
  );
}

export default ContentDrawer;
