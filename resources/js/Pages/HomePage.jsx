import { useState } from "react";
import Image from "../components/Image";
import MainLayout from "../Layouts/MainLayout";
import { Link } from "@inertiajs/react";

const Homepage = ({ news }) => {
    const [offset, setOffset] = useState(0);
    const cardsToShow = 4;
    const cardWidth = 280;
    const gap = 20;

    const newsData = news || []; // Ensure news is always an array

    const handlePrev = () => {
        if (offset > 0) {
            setOffset(offset - 1);
        }
    };

    const handleNext = () => {
        if (offset < newsData.length - cardsToShow) {
            setOffset(offset + 1);
        }
    };

    return (
        <div className="w-full min-h-screen p-5 md:p-10 bg-gray-100 font-sans">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-blue-900 font-montserrat">
                Membaca, Menjelajah, Menginspirasi
            </h1>

            <p className="text-sm md:text-md italic text-center mb-10 text-gray-700 font-montserrat">
                Welcome! This is an official library website of SMAN 2 Bandung
            </p>

            <div className="mb-8 mt-20">
                <div className="flex flex-col md:flex-row md:gap-28 items-center">
                    <div className="md:w-1/2 px-8 ml-20">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 font-plusjakarta">
                            About Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify font-plusjakarta">
                            Perpustakaan SMA Negeri 2 Bandung adalah pusat
                            literasi dan sumber belajar yang mendukung
                            pengembangan akademik serta budaya baca di
                            lingkungan sekolah. Terletak di lantai atas dekat
                            laboratorium kimia, perpustakaan ini menawarkan
                            suasana yang nyaman, luas, dan kondusif untuk
                            belajar. Dilengkapi dengan koleksi buku yang beragam
                            serta sistem digital untuk peminjaman dan
                            pengelolaan buku, perpustakaan ini berkomitmen untuk
                            memberikan akses informasi yang mudah dan modern
                            bagi seluruh siswa dan tenaga pendidik.
                        </p>
                    </div>
                    <div className="w-full md:max-w-[600px] aspect-w-4 aspect-h-3">
                        <Image
                            src="/images/about-us.png"
                            alt="About Us"
                            className="object-contain rounded-lg shadow-md w-full h-full"
                            w="800"
                        />
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-gray-300 my-12" />

            <div className="relative w-full">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    News
                </h2>
                <div className="relative overflow-hidden">
                    <div className="flex items-center">
                        <button
                            onClick={handlePrev}
                            className="z-10 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="w-full overflow-hidden px-4">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    width: `${
                                        newsData.length * (cardWidth + gap)
                                    }px`,
                                    transform: `translateX(-${
                                        offset * (cardWidth + gap)
                                    }px)`,
                                }}
                            >
                                {newsData.map((news, indexHome) => (
                                    <Link
                                        key={indexHome}
                                        href={`/news/${news.id}`} // Link to the single post page
                                        className="flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden"
                                        style={{
                                            width: `${cardWidth}px`,
                                            marginRight: `${
                                                indexHome < newsData.length - 1
                                                    ? gap
                                                    : 0
                                            }px`,
                                        }}
                                    >
                                        <Image
                                            src={news.cover}
                                            alt={news.title}
                                            className="rounded-2xl object-cover"
                                            w="735"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-md font-semibold mb-1 text-blue-800">
                                                {news.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {news.short_description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="z-10 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Homepage.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Homepage;
