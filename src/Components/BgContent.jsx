import React from "react";

const BgContent = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <div className="bg-cover bg-center h-64 relative" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?ga=GA1.1.692097156.1721291571&semt=sph')" }}>
                    <div className="flex justify-center items-center">
                        <h1 className="py-32 text-4xl text-[#fff] font-thin">CONTENT</h1>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 p-4">
                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>01</h1>
                        <p>About Us</p>
                    </div>

                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>02</h1>
                        <p>Our Team</p>
                    </div>

                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>03</h1>
                        <p>Our Mission</p>
                    </div>
                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>04</h1>
                        <p>Our Services</p>
                    </div>
                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>05</h1>
                        <p>Experiences</p>
                    </div>
                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>06</h1>
                        <p>Quarter</p>
                    </div>
                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>07</h1>
                        <p>Next Project</p>
                    </div>
                    <div className=" p-4 flex flex-col justify-center items-center">
                        <h1>08</h1>
                        <p>Strategy</p>
                    </div>






                </div>
                
            </div>
        </>
    )
};

export default BgContent;