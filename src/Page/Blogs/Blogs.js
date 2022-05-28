import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-5xl text-center text-orange-600 pt-4 font-semibold">Blogs Here</h2>


            {/* qus 1 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 1: </span>
                    <span>How will you improve the performance of a React Application?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 1: </span>
                    <span>
                        I improve the performance of a React Application flowing:
                        <ul className="list-disc lg:ml-16 p-3">
                            <li>Keeping component state local where necessary</li>
                            <li>Memoizing React components to prevent unnecessary re-renders</li>
                            <li>Code-splitting in React using dynamic import()</li>
                            <li>Windowing or list virtualization in React</li>
                            <li>Avoid Large loading images in React</li>
                        </ul>
                    </span>
                </h3>
            </div>


            {/* qus 2 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 2: </span>
                    <span> What are the different ways to manage a state in a React application?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 2: </span>
                    <span>
                        There are four main types of state you need to properly manage in your React apps:
                        1. Local state. <br />
                        2. Global state. <br />
                        3. Server state. <br />
                        4. URL state. <br />
                    </span>
                </h3>
            </div>


            {/* qus 3 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 3: </span>
                    <span>How does prototypical inheritance work?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 3: </span>
                    <span>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects
                        Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                    </span>
                </h3>
            </div>

            {/* qus 4 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 4: </span>
                    <span>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 4: </span>
                    <span>
                        code image
                        <img src="https://i.ibb.co/fv0kdV3/Screenshot-13.png" alt="" />
                    </span>
                </h3>
            </div>

            {/* qus 5 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 5: </span>
                    <span> What is a unit test? Why should write unit tests?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 5: </span>
                    <span>
                        Unit testing is a software development process in which the smallest testable parts of an application, called units, Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced
                        are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.
                    </span>
                </h3>
            </div>

        </div>
    );
};

export default Blogs;