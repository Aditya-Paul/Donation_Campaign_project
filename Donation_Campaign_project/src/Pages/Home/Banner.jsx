

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/87gWHxd/download.jpg)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div >
                    <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="mt-10 ">
                        <input className="w-96 p-2 h-10 rounded-l-md" type="text" name="" id="" placeholder="Search Here" />
                        <button className=" w-20 h-10 rounded-r-md  bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;