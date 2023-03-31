import '../App.css';

function Faqs() {

    return (
        <div className='flex flex-col md:flex-row gap-5 md:justify-between px-5 md:px-10 my-10' >
            <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                FAQS
            </div>
            <div className="max-w-2xl flex flex-col md:flex-row gap-5">
                <h2 className="text-xl font-bold tracking-tight text-gray-400 sm:text-xl">Why An FAQ Resource?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    1. Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">2. Next, one of the most significant opportunities for impactful brand visibility within the search engine result pages (in-SERP) is targeting audience questions, wants, needs, and pain points.</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">3. The FAQ page is one of the best ways to help people visit your site and get snippets of answers in front of users before they click any results within the search pages.</p>
            </div>
        </div>
    );
}

export default Faqs;
