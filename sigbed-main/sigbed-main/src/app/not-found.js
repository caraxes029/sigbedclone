import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global">
      <section className="bg-cover bg-fixed w-full bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-16 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">This page is under construction</h1>
            <p className="mb-8  text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Stay tuned for updates :)</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Home Page
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>   
            </div>
        </div>
      </section>
    </div>
  );
}