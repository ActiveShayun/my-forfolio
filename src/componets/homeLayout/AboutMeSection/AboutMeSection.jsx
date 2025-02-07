import SectionTitle from "../../shared/SectionTitle/SectionTitle";


const AboutMeSection = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="mt-10"
        >
            <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <SectionTitle heading={'About Me'} />
                <h2 class="text-3xl font-bold text-gray-800 text-center mb-4">Hello, I'm Apu Roy</h2>

                <div class="text-lg text-gray-700 mb-6">
                    <p class="mb-4">I'm a passionate  web developer specializing in building responsive, user-friendly web applications. With a focus on front-end and back-end development, I love creating dynamic solutions that deliver a seamless experience.</p>

                    <p class="mb-4">Technologies I work with:</p>
                    <ul class="list-disc pl-6">
                        <li><strong>Front-End:</strong> React, Tailwind CSS</li>
                        <li><strong>Back-End:</strong> Node.js, Express.js</li>
                        <li><strong>Database:</strong> MongoDB</li>
                    </ul>
                </div>

                <div class="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-3">My programming journey.</h2>
                    <p>I have been interested in tech related work since my school life. After collage i am decided i will work in this sector. Then i started searching on the internet about the skill that are in demand in this sector. After scoring the internet i found that the demand for graphics design, wev development, and digital marketing in this sector is fairly good. Then i started exploring a bit. Then i realized i like coding more, Then i thought i should be a good programer. Then i started giving different tutorials on youtube. And later i do some courses thus my entry in to programming world.</p>

                    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 mt-6">
                        <div className="bg-white p-3 rounded-md">
                            <h2 class="text-2xl font-semibold text-gray-800 mt-3 mb-2">That's why i enjoy working in this sector.</h2>
                            <p className="">I prefer to develop and design modern wev applications as this sector is on regular updates. So developers need to be updated all time . And then flame has to be emphasized. I like this very much. That's why i don’t find it boring to work in this sector.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                            <h2 class="text-2xl font-semibold text-gray-800 mt-3 mb-2">interests outside of programming</h2>
                            <p className="">I like many things outside of programming. Especially  sports i like to play football, cricket, badminton. Especially i play football very well. </p>
                        </div>

                    </div>

                </div>

                <div class="text-lg text-gray-700">
                    <p class="mb-4">I’m always looking to collaborate on new projects and continue learning from the community. Feel free to explore my work, and don’t hesitate to reach out!</p>
                </div>
            </div>

        </div>
    );
};

export default AboutMeSection;