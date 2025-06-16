"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 z-50 flex justify-center",
        className
      )}
    >
      <div className="bg-white border border-gray-200 rounded-full shadow-md px-6 sm:px-12 md:px-20 lg:px-32 xl:px-44 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
        <Menu setActive={setActive}>
          {/* Home Tab */}
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="p-4">
              <HoveredLink href="/">Go to Home</HoveredLink>
            </div>
          </MenuItem>

          {/* Our Courses Tab */}
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-2 p-4">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Advanced Composition</HoveredLink>
              <HoveredLink href="/branding">SongWriting</HoveredLink>
              <HoveredLink href="/branding">Music Production</HoveredLink>
            </div>
          </MenuItem>

          {/* Contact Tab */}
          <MenuItem setActive={setActive} active={active} item="Contact us">
            <div className="p-4">
              <HoveredLink href="/contact">Contact us</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
