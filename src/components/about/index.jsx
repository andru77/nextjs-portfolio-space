import React from 'react';
import {clsx} from "clsx";

const ItemLayout= ({children, className}) => {
    return <div className={clsx('custom-bg rounded-xl flex items-center flex-col justify-center p-6 space-y-6', className)}>
        {
            children
        }
    </div>
}


const AboutDetails = () => {
    return (
        <section className={'py-20 w-full'}>
            <div className={'grid grid-cols-12 gap-5 w-full'}>
                <ItemLayout className={'col-span-8 row-span-2'}>
                    <h2 className={'text-2xl text-left w-full capitalize'}>Senior front end developer</h2>
                    <p>
                        As a highly skilled Full Stack Developer with over 6+ years of experience, I am deeply passionate about creating innovative and impactful web solutions for a variety of industries. My expertise in designing, developing, and testing web-based applications is backed by a diverse range of technologies, including NextJs, React, Angular, React-native, Capacitor, Ionic, NodeJs, Express, and Strapi.
                    </p>
                    <p>
                        My commitment to excellence is reflected in my ability to seamlessly integrate cutting-edge technologies and develop intuitive, user-friendly interfaces. With a broad background and a strong technical skillset, I am eager to leverage my expertise in software development to drive success for your organization. Whether you're seeking to optimize existing systems or create new, industry-leading solutions, I have the skills and passion to bring your vision to life.
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className={'text-6xl font-semibold text-left w-full'}>
                        25+
                        <span className={'font-semibold text-base text-white'}>
                           {' '}  Projects
                        </span>
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className={'text-6xl font-semibold text-left w-full'}>
                        6+
                        <span className={'font-semibold text-base text-white'}>
                          {' '}  Years of experience
                        </span>
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 p-0'}>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=andru77&show_icons=true&theme=transparent&hide_border=true&text_color=FFFFFF&title_color=caf0f8
                               "
                         alt="github stats"
                         loading={"lazy"}
                    />
                </ItemLayout>
                <ItemLayout className={'col-span-8 p-0'}>
                    <img src="https://github-readme-stats.vercel.app/api?username=andru77&show_icons=true&theme=transparent&hide_border=true&text_color=FFFFFF&title_color=caf0f8
                               "
                         alt="github stats"
                         loading={"lazy"}
                    />
                </ItemLayout>
                <ItemLayout className={'col-span-full'}>
                    <img src="https://skillicons.dev/icons?i=js,ts,react,redux,angular,nextjs,nodejs,html,css,sass,less,bash,bootstrap,tailwind,cpp,cypress,jest,sentry,figma,git,gitlab,vercel,vite,npm,yarn,graphql,webstorm"
                         alt="github stats"
                         loading={"lazy"}
                    />
                </ItemLayout>
            </div>
        </section>
    );
};

export default AboutDetails;
