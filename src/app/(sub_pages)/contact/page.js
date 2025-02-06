
import Image from "next/image";
import spaceBackground from "@public/background/space-background-without-planets.png";
import Form from "@components/contact/Form";
export default function ContactPage() {
    return (
        <>
            <Image src={spaceBackground}
                   alt={'space background image'}
                   className=" fixed w-full top-0 left-0 h-full object-cover object-center opacity-15 -z-10"
            />
            <article className="relative w-full flex flex-col items-center justify-center px-1 md:px-4 space-y-8 mb-10">
                <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
                    <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                        Let&#39;s start our space adventure
                    </h1>
                    <p className={'text-sm md:text-base max-w-xl'}>
                        We&#39;re thrilled to connect with fellow space enthusiasts. Whether you have a question, a suggestion, or just want to share your cosmic thoughts, please fill out the form below.
                        Our team of interstellar experts will get back to you as soon as possible.
                    </p>
                </div>
            </article>
            <Form/>
        </>
);
}
