import React from 'react';
import Link from 'next/link';


const BecomeTeacher = () => {
    return (
        <div className="container mx-auto max-w-[1420px] h-44 rounded-lg bg-gradient-to-r from-[#17A2B8] via-[#2FABBF] to-[#17A2B8] md:mt-24 md:mb-24 md:flex">
        <div className="md:w-2/3 md:space-y-2">
            <h1 className="md:text-3xl font-bold text-white md:mx-16 md:mt-9">Become an Instructor!</h1>
            <p className="text-[#FAFDFD] md:mx-16">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
        </div>
        <div>
            <Link href='/TeacherApply'>
                <button className="border btn btn-wide text-[#F7C32E] hover:text-black bg-[#17A2B8] hover:bg-[#F7C32E] border-[#F7C32E] md:mx-36 md:mt-16">
                    Start Teaching Today
                </button>
            </Link>
        </div>
    </div>
    );
};

export default BecomeTeacher;