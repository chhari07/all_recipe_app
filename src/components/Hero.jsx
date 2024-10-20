export const Hero = () => {
    return (
        <section className="pt-24 bg-white relative">
            {/* Transparent background image */}
            <div
                className="absolute inset-0 bg-cover  bg-center opacity-100"
                
            ></div>

            {/* Content */}
            <div className="relative px-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span> Welcome to</span>{' '}
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                           ALL RECIPES
                        </span>{' '}
                        <span>around your product ?</span>
                    </h1>
                    <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                        
                    </p>
                   
                </div>
                <div className="w-full mx-auto mt-20 text-center md:w-10/12"></div>
            </div>
        </section>
    );
};
