import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import { BsPuzzleFill } from "react-icons/bs";

const Values = () => {
    return (
        <>
            <div className="bg-cover bg-center min-h-[650px] relatives" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/modern-bright-interior-room-with-computer-bookshelf-chair-lamp_1015980-612016.jpg?ga=GA1.1.692097156.1721291571&semt=sph')" }}>
                <div className="flex justify-center items-center">
                    <h1 className="py-32 text-4xl text-[#fff]  font-bold">Values</h1>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    <div className="bg-[#fff] p-4 flex flex-col justify-center items-center rounded-md">
                        <h1><FaBuromobelexperte className="text-4xl" /></h1>
                        <p className="text-xl font-semibold mt-2">Integrity</p>
                        <p className="mt-2 text-center">We leverage our knowledge and skills to deliver all customized solutions that are always tailored to meet the unique needs of each our client.</p>
                    </div>

                    <div className="bg-[#fff] p-4 flex flex-col justify-center items-center rounded-md">
                        <h1><MdOutlineSecurity className="text-6xl" /></h1>
                        <p className="text-xl font-semibold mt-2">Quality</p>
                        <p className="mt-2 text-center">Our focus on innovation enables us to provide customized solutions that address our clients' specific needs and drive business success always.</p>
                    </div>

                    <div className="bg-[#fff] p-4 flex flex-col justify-center items-center rounded-md">
                        <h1><SiGotomeeting className="text-4xl" /></h1>
                        <p className="text-xl font-semibold mt-2">Collaborator</p>
                        <p className="mt-2 text-center">We help our clients achieve maximum efficiency in their operations by optimizing their technology and information systems.</p>
                    </div>

                    <div className="bg-[#fff] p-4 flex flex-col justify-center items-center rounded-md">
                        <h1><BsPuzzleFill className="text-4xl" /></h1>
                        <p className="text-xl font-semibold mt-2">Commitment</p>
                        <p className="mt-2 text-center">With years of experience in the industry, we have helped numerous clients upgrade their IT infrastructure to keep up with the ever-evolving demands of the digital age.</p>
                    </div>
                </div>
            </div>



        </>
    )
};

export default Values;