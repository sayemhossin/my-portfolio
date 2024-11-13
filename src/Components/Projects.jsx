import React from 'react';


const Projects = () => {
    return (
        <div id='Projects' className='mx-6 md:mx-12 pb-10'>
            <h1 className='md:text-5xl text-4xl lg:text-7xl underline text-gray-300 text-center mt-8 pb-5 lg:pb-24 md:pb-8'>My Projects</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>

                {/* 1 no */}
                <div className=' p-4 space-y-6 border-2  border-[#E5B80B]'>
                    <h1 className='text-3xl md:text-4xl text-[#ffcc00]'><span className='text-gray-300'>Name:</span> Expense Edge</h1>
                    <h1 className='text-xl md:text-2xl text-gray-300'>Type: <span className='text-[#ffcc00]'>Full Stack Project (Group Project)</span></h1>

                    <p className='text-[#eec10e] md:text-xl'>Expense Edge is a comprehensive financial management platform developed by our team of five using the MERN stack (MongoDB, Express.js, React.js, Node.js). It is designed to help businesses efficiently track income, manage expenses, and analyze financial data.
                        Technology: React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Daisy UI.</p>
                    <p className='md:text-xl'>In this Projects As part of the development team, I worked on several key features that significantly enhanced the platform’s functionality and user experience.
                        Navbar and Dashboard Layout: Designed the navbar and dashboard layout to ensure smooth navigation.
                        Company Management Features: Developed features for users to search for and request to join a company, with access granted upon admin approval. I also built the Company Overview Page, where approved users can manage financial entries.
                        Admin Dashboard: Implemented the Admin Dashboard for managing users and companies, along with full CRUD functionality and route protection to secure access for authenticated users and admins.</p>

                    


                    <h1 className='text-2xl md:text-3xl text-gray-300'>Technology Used:</h1>

                    <div className='flex flex-col md:flex-row justify-around pb-10'>
                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>FrontEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>HTML</li>
                                <li className='ml-4'>Tailwind CSS</li>
                                <li className='ml-4'>React.Js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>BackEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Node.js</li>
                                <li className='ml-4'>Express.js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>Authentication</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Firebase</li>
                            </ol>

                        </div>
                        <div >
                            <h2 className='text-xl md:text-2xl text-gray-300'>Database</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Mongodb</li>
                            </ol>
                        </div>
                    </div>
                    <div className=' flex md:flex-row md:mr-20 flex-col md:justify-end  justify-center items-center'>

                        <a target='_blank' href="https://expense-edge.netlify.app/"> <button className='btn btn-link text-[#008cff] text-xl '>Live Link </button></a>
                        <a target='_blank' href="https://github.com/Developer-Nur/ExpenseEdge-client"> <button className='btn btn-link text-[#008cff] text-xl l'>Github  Client</button></a>
                        <a target='_blank' href="https://github.com/Developer-Nur/ExpenseEdge-server"> <button className='btn btn-link text-[#008cff] text-xl '>Github  Server</button></a>

                    </div>



                    {/* 2 no */}




                </div>
                {/* 2 no */}
                <div className=' p-4 space-y-6 border-2  border-[#E5B80B]'>
                    <h1 className='text-3xl md:text-4xl text-[#ffcc00]'><span className='text-gray-300'>Name:</span> ProdPeek</h1>
                    <h1 className='text-xl md:text-2xl text-gray-300'>Type: <span className='text-[#ffcc00]'>Full Stack Project</span></h1>

                    <p className='text-[#eec10e] md:text-xl'>The ProdPeek Website, built with the MERN stack, lets users discover, submit, upvote, and review tech products. Featuring user roles (normal, moderator, admin), responsive design, custom styling, and an integrated payment system, it offers a clean, organized platform for managing and exploring innovative web and mobile applications.</p>

                    <div>
                        <h1 className='text-2xl md:text-3xl text-gray-300'>Features:</h1>
                        <p className='text-[#ffcc00] md:text-xl'>
                            <span className='text-gray-300'>1. User Authentication and Roles:</span> Supports normal users, moderators, and admins with distinct permissions and responsibilities, including submitting products, reviewing, and managing site activities.</p>

                        <p className='text-[#ffcc00] md:text-xl'><span className='text-gray-300' >2. Product Management:</span> Users can submit, upvote, review, and report products, while moderators approve or reject submissions and handle reported content.</p>

                        <p className='text-[#ffcc00] md:text-xl'><span className='text-gray-300'>3. Responsive Design:</span> The website is fully responsive, ensuring a seamless user experience across mobile, tablet, and desktop devices.</p>

                        <p className='text-[#ffcc00] md:text-xl'><span className='text-gray-300'>4. Integrated Payment System:</span> Users can unlock premium features and remove product submission limits through a subscription-based payment system.</p>
                    </div>


                    <h1 className='text-2xl md:text-3xl text-gray-300'>Technology Used:</h1>

                    <div className='flex flex-col md:flex-row justify-around'>
                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>FrontEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>HTML</li>
                                <li className='ml-4'>Tailwind CSS</li>
                                <li className='ml-4'>React.Js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>BackEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Node.js</li>
                                <li className='ml-4'>Express.js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>Authentication</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Firebase</li>
                            </ol>

                        </div>
                        <div >
                            <h2 className='text-xl md:text-2xl text-gray-300'>Database</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Mongodb</li>
                            </ol>
                        </div>
                    </div>
                    <div className=' flex md:flex-row md:mr-20 flex-col md:justify-end  justify-center items-center'>

                        <a target='_blank' href="https://prodpeek-5820d.web.app/"> <button className='btn btn-link text-[#008cff] text-xl '>Live Link </button></a>
                        <a target='_blank' href="https://github.com/sayemhossin/ProdPeek-client-12"> <button className='btn btn-link text-[#008cff] text-xl l'>Github  Client</button></a>
                        <a target='_blank' href="https://github.com/sayemhossin/ProdPeek-server-12"> <button className='btn btn-link text-[#008cff] text-xl '>Github  Server</button></a>

                    </div>



                    {/* 2 no */}




                </div>

                {/* 3 no */}
                <div className='relative h-[1070px] md:h-[700px] lg:h-full p-4 space-y-6 border-2  border-[#E5B80B]'>
                    <h1 className='text-3xl md:text-4xl text-[#ffcc00]'><span className='text-gray-300'>Name:</span> ProAlter</h1>


                    <p className='text-[#eec10e] md:text-xl'>The ProAlter is a comprehensive online platform offering detailed information on alternative products. From reviews to comparisons, users can explore a wide range of alternatives to popular items, ensuring informed choices. Whether seeking eco-friendly options or innovative substitutes, ProAlter guides users towards sustainable and suitable alternatives effortlessly.</p>

                    <div>
                        <h1 className='text-2xl md:text-3xl text-gray-300'>Features:</h1>
                        <p className='text-[#ffcc00] md:text-xl'>
                            1. Users can find many alternative product and also he/she can add alternative product</p>

                        <p className='text-[#ffcc00] md:text-xl'>2. If users want any products alternative he/she can post his product easily in this website</p>


                    </div>


                    <h1 className='text-2xl md:text-3xl text-gray-300'>Technology Used:</h1>

                    <div className='flex flex-col md:flex-row justify-around'>
                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>FrontEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>HTML</li>
                                <li className='ml-4'>Tailwind CSS</li>
                                <li className='ml-4'>React.Js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>BackEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Node.js</li>
                                <li className='ml-4'>Express.js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>Authentication</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Firebase</li>
                            </ol>

                        </div>
                        <div >
                            <h2 className='text-xl md:text-2xl text-gray-300'>Database</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Mongodb</li>
                            </ol>
                        </div>
                    </div>
                    <div className='absolute bottom-4 md:right-8 right-16 flex md:flex-row md:mr-20 flex-col md:justify-end  justify-center items-center'>

                        <a target='_blank' href="https://pro-alter.web.app"> <button className='btn btn-link text-[#008cff] text-xl'>Live Link </button></a>
                        <a target='_blank' href="https://github.com/sayemhossin/ProAlter-client-11"> <button className='btn btn-link text-[#008cff] text-xl'>Github  client</button></a>
                        <a target='_blank' href="https://github.com/sayemhossin/ProAlter-server-11"> <button className='btn btn-link text-[#008cff] text-xl'>Github  Server</button></a>

                    </div>

                </div>

                {/* 4 no */}
                <div className='relative h-[1030px] md:h-[700px] lg:h-[794.2px] p-4 space-y-6 border-2  border-[#E5B80B]'>
                    <h1 className='text-3xl md:text-4xl text-[#ffcc00]'><span className='text-gray-300'>Name: </span>
                        ArtisticVista</h1>


                    <p className='text-[#eec10e] md:text-xl'>ArtisticVista is an Internet-based avenue for the promotion and sale of all of the best crafts that showcase painting and drawing among other means of expression. Be amazed by the amazing paintings from the paintings of a specific scenery to the fascinating portraits. Our collection gives the art lovers all they want.</p>

                    <div>
                        <h1 className='text-2xl md:text-3xl text-gray-300'>Features:</h1>
                        <p className='text-[#ffcc00] md:text-xl'>
                            1. In this website a user can easily added his product</p>

                        <p className='text-[#ffcc00] md:text-xl'>2. Also he can edit and delete his product anytime</p>


                    </div>


                    <h1 className='text-2xl md:text-3xl text-gray-300'>Technology Used:</h1>

                    <div className='flex flex-col md:flex-row justify-around'>
                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>FrontEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>HTML</li>
                                <li className='ml-4'>Tailwind CSS</li>
                                <li className='ml-4'>React.Js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>BackEnd</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Node.js</li>
                                <li className='ml-4'>Express.js</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='text-xl md:text-2xl text-gray-300'>Authentication</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Firebase</li>
                            </ol>

                        </div>
                        <div >
                            <h2 className='text-xl md:text-2xl text-gray-300'>Database</h2>
                            <ol className='md:text-xl text-[#ffcc00] list-disc'>
                                <li className='ml-4'>Mongodb</li>
                            </ol>
                        </div>
                    </div>
                    <div className='absolute bottom-4 md:right-8 right-16 flex md:flex-row md:mr-20 flex-col md:justify-end  justify-center items-center'>

                        <a target='_blank' href=" https://assignment-ten-3d34f.web.app"> <button className='btn btn-link text-[#008cff] text-xl '>Live Link </button></a>
                        <a target='_blank' href="https://github.com/sayemhossin/-ArtisticVista-client-10"> <button className='btn btn-link text-[#008cff] text-xl '>Github client</button></a>
                        <a target='_blank' href="https://github.com/sayemhossin/ArtisticVista-server-10"> <button className='btn btn-link text-[#008cff] text-xl '>Github server</button></a>

                    </div>

                </div>

            </div>








        </div>
    );
};

export default Projects;