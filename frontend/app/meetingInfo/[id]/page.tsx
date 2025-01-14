"use client";
import GoBack from "@/components/ui/go-back";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";

function Summary() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <div className="flex justify-between items-center w-full">
          <div className="w-full flex items-center">
            <GoBack />
            <h4 className="meeting-page-heading">Info</h4>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <img src="/assets/icons/Search.svg" alt="Search" />
            </button>

            <button>
              <img src="/assets/icons/Export.svg" alt="" />
            </button>

            <button>
              <img src="/assets/icons/Logout.svg" alt="" />
            </button>

            <button>
              <img src="/assets/icons/More.svg" alt="" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 bg-white">
        <div className="hero-section">
          <h5 className="meeting-info-hero-heading">Design Review Meeting</h5>
          <div className="flex gap-4">
            <p className="meeting-info-hero-timeline flex gap-3 items-center">
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5c657e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <line x1="7" y1="14" x2="7" y2="14"></line>
                <line x1="12" y1="14" x2="12" y2="14"></line>
                <line x1="17" y1="14" x2="17" y2="14"></line>
                <line x1="7" y1="18" x2="7" y2="18"></line>
                <line x1="12" y1="18" x2="12" y2="18"></line>
                <line x1="17" y1="18" x2="17" y2="18"></line>
              </svg>
              2024.11.10 10:32
            </p>

            <p className="meeting-info-hero-timeline flex gap-3 items-center">
              1.5 hours
            </p>
          </div>
          <div className="flex gap-2 my-4">
            <span className="meeting-info-hero-tags px-3 rounded-t-lg">
              Design Definition
            </span>
            <span className="meeting-info-hero-tags px-3 rounded-t-lg">
              Aesthetics
            </span>
            <span className="meeting-info-hero-tags px-3 rounded-t-lg">
              Reference Styles
            </span>
          </div>
        </div>

        <div className="mt-5">
          <Card className="w-full max-w-screen-md flex flex-col relative py-5 bg-space-gray border-none">
            <CardHeader className="px-4 py-0">
              <CardTitle>
                <h4 className="meeting-info-summary-heading relative">
                  Summary
                  <img
                    src="/assets/vectors/hero-heading.svg"
                    alt=""
                    className="absolute top-1 left-4.8"
                    width={12}
                    height={12}
                  />
                </h4>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <ol className="meeting-info-summary-list list-decimal list-outside pl-5">
                <li>First Review of the Design for Meeting Assistant.</li>
                <li>
                  Design Style Needs to Shift to International Minimalism.
                </li>
                <li>Login Page Details Require Optimization.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="w-full max-w-screen-md flex flex-col relative py-5 bg-space-gray border-none mt-3">
            <CardHeader className="px-4 py-0">
              <CardTitle>
                <h4 className="meeting-info-summary-heading relative">
                  To-Do List
                  <img
                    src="/assets/vectors/hero-heading.svg"
                    alt=""
                    className="absolute top-1 left-5.3"
                    width={12}
                    height={12}
                  />
                </h4>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <ol className="meeting-info-summary-list list-decimal list-outside pl-5">
                <li>First Review of the Design for Meeting Assistant.</li>
                <li>
                  Design Style Needs to Shift to International Minimalism.
                </li>
                <li>Login Page Details Require Optimization.</li>
              </ol>
            </CardContent>
          </Card>

          <Accordion
            type="single"
            collapsible
            className="border-none border-transparent relative"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger">
                <h4 className="meeting-info-accordion-heading flex gap-3">
                  The Dawn of Innovation
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content">
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
            className="border-none border-transparent relative"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger">
                <h4 className="meeting-info-accordion-heading flex gap-3">
                  Explores the journey from concept to creation
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <p className="meeting-info-accordion-content">
                  <span className="meeting-info-accordion-author-name">
                    Jared
                  </span>{" "}
                  suggested creating an interactive game to boost user
                  engagement. He said:
                </p>
                <div className="border-l-[#8099FF] border-l-2 meeting-info-accordion-saying p-4 mt-3">
                  A world driven by technology, every small idea has the
                  potential to spark monumental change.
                </div>

                <ol className="meeting-info-accordion-list list-decimal list-outside pl-5 mt-4">
                  <li>
                    From the humblest of beginnings, great innovations are born.
                  </li>
                  <li>
                    From the humblest of beginnings, great innovations are born,
                    shaping industries and redefining how we live.
                    <ul className="meeting-info-accordion-list list-disc list-inside mt-2">
                      <li>Style adjustment.</li>
                      <li>Refine login page details.</li>
                      <li>First Review of the design for meeting assistant.</li>
                    </ul>
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="border-none border-transparent relative"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger">
                <h4 className="meeting-info-accordion-heading flex gap-3">
                  The Dawn of Innovation
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content">
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
            className="border-none border-transparent relative"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger">
                <h4 className="meeting-info-accordion-heading flex gap-3">
                  The Dawn of Innovation
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content">
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
            className="border-none border-transparent relative"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="meeting-info-accordion-trigger">
                <h4 className="meeting-info-accordion-heading flex gap-3">
                  The Dawn of Innovation
                </h4>
              </AccordionTrigger>
              <AccordionContent className="meeting-info-accordion-content">
                A world driven by technology, every small idea has the potential
                to spark monumental change. From the humblest of beginnings,
                great innovations are born, shaping industries and redefining
                how we live.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  );
}

export default Summary;
