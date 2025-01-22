import React from 'react';

const AboutDetails = () => {
    return (
        <section className={'py-20 w-full'}>
            <div className={'grid grid-cols-12 gap-5 w-full'}>
                <div className={'col-span-8 row-span-2 custom-bg rounded-xl flex items-center flex-col justify-center p-6'}>
                    <p>
                        As a highly skilled Full Stack Developer with over 6+ years of experience, I am deeply passionate about creating innovative and impactful web solutions for a variety of industries. My expertise in designing, developing, and testing web-based applications is backed by a diverse range of technologies, including NextJs, React, Angular, React-native, Capacitor, Ionic, NodeJs, Express, and Strapi.
                    </p>
                    <br/>
                    <p>
                        My commitment to excellence is reflected in my ability to seamlessly integrate cutting-edge technologies and develop intuitive, user-friendly interfaces. With a broad background and a strong technical skillset, I am eager to leverage my expertise in software development to drive success for your organization. Whether you're seeking to optimize existing systems or create new, industry-leading solutions, I have the skills and passion to bring your vision to life.
                    </p>
                </div>
                <div className={'col-span-4 h-[80px] custom-bg rounded-xl flex items-center justify-center'}>
                    25+ clients
                </div>
                <div className={'col-span-4  h-[80px] custom-bg rounded-xl flex items-center justify-center'}>
                    6+ years of experience
                </div>
            </div>
        </section>
    );
};

export default AboutDetails;
