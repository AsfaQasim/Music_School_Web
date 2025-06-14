"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 
              overflow-hidden h-[105%] max-w-sm"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-300 dark:text-neutral-100 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-black dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
