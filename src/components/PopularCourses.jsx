"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import Chip from "./Chip";
import coursesData from "@/data/courses.json";

const tabs = ["All", "Web Design", "Development", "Graphic Design", "Marketing", "Finance"];

const PopularCourses = () => {
    const [selected, setSelected] = useState(tabs[0]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        if (selected === "All") {
            setFilteredCourses(coursesData);
        } else {
            const filtered = coursesData.filter((course) => course.category === selected);
            setFilteredCourses(filtered);
        }
    }, [selected]);

    return (
        <div className="container mx-auto w-full mt-24 mb-24 space-y-5">
            <div className="space-y-3">
                <h3 className="text-center text-5xl font-bold">Most Popular Courses</h3>
                <p className="text-center">Choose from hundreds of courses from specialist organizations</p>
            </div>
            <div className="px-4 py-4 bg-[#E6F0F9] flex items-center flex-wrap gap-2 justify-center">
                {tabs.map((tab) => (
                    <Chip
                        text={tab}
                        selected={selected === tab}
                        setSelected={setSelected}
                        key={tab}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
