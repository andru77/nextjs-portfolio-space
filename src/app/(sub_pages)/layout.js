import "../globals.css";
import HomeButton from "@components/HomeBtn";

export default function SubPagesLayout({ children }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-20 px-6 xs:px-12 lg:px-32">
            <HomeButton />
            {
                children
            }
        </main>
    );
}
