const Cities = () => {
    return (
        <main>
            <div className="flex justify-center md:flex-wrap sm-x3:gap-10 gap-20 mt-20">
                <section className="z-50 border-b city-card border-[#0984e3] border-solid  text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px]">
                    <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/3d-fluency/94/sun.png" alt="sun" />
                    </div>
                    <div id="#kir">
                    <p>Londen 48°</p>
                    <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                    <p className="mt-2">13 - 24 mph</p>
                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solidz-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px]">
                    <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/partly-cloudy-night.png" alt="cloudy-night" />
                    </div>
                    <div id="#kir">
                    <p>Londen 48°</p>
                    <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                    <p className="mt-2">13 - 24 mph</p>
                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px]">
                    <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/cloud-lighting.png" alt="sun" />
                    </div>
                    <div id="#kir">
                    <p>Londen 48°</p>
                    <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                    <p className="mt-2">13 - 24 mph</p>
                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px]">
                    <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/intense-rain.png" alt="sun" />
                    </div>
                    <div id="#kir">
                    <p>Londen 48°</p>
                    <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                    <p className="mt-2">13 - 24 mph</p>
                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px]">
                    <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/light-snow.png" alt="sun" />
                    </div>
                    <div id="#kir">
                    <p>Londen 48°</p>
                    <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                    <p className="mt-2">13 - 24 mph</p>
                    </div>
                </section>
                {/* <section> 
                <article className="card">
                    <div className="thumb"></div>
                    <div className="infos">
                        <h2 className="title">new york city<span className="flag"></span></h2>
                        <h3 className="date">november 2 - 4</h3>
                        <h3 className="seats">seats remaining: 2</h3>
                        <p className="txt">
                            Join us for our Live Infinity Session in
                            beautiful New York City. This is a 3 day
                            intensive workshop where you'll learn
                            how to become a better version of...
                        </p>
                        <h3 className="details">event details</h3>
                    </div>
                </article>
                </section>
                 */}
            </div>
        </main>
    )
}

export default Cities 