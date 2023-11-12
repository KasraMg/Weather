const Cities = () => {
    return (
        <main>
            <div className="flex justify-center md:flex-wrap sm-x3:gap-10 gap-20 mt-20">
                <section className="z-50 border-b city-card border-[#0984e3] border-solid  text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
                        <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/3d-fluency/94/sun.png" alt="sun" />
                    </div>
                    <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className="h-[150px] city-card-main">
                        <p>Londen 48°</p>
                        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                        <p className="mt-2">13 - 24 mph</p>
                        <p className="mt-3">sunrise: 6:50</p>
                        <p className="mt-2">sunset : 7:55</p>

                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solidz-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
                        <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/partly-cloudy-night.png" alt="cloudy-night" />
                    </div>
                    <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className="h-[150px] city-card-main">
                        <p>Londen 48°</p>
                        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                        <p className="mt-2">13 - 24 mph</p>
                        <p className="mt-3">sunrise: 6:50</p>
                        <p className="mt-2">sunset : 7:55</p>

                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
                        <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/cloud-lighting.png" alt="sun" />
                    </div>
                    <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className="h-[150px] city-card-main">
                        <p>Londen 48°</p>
                        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                        <p className="mt-2">13 - 24 mph</p>
                        <p className="mt-3">sunrise: 6:50</p>
                        <p className="mt-2">sunset : 7:55</p>

                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
                        <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/intense-rain.png" alt="sun" />
                    </div>
                    <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className="h-[150px] city-card-main">
                        <p>Londen 48°</p>
                        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                        <p className="mt-2">13 - 24 mph</p>
                        <p className="mt-3">sunrise: 6:50</p>
                        <p className="mt-2">sunset : 7:55</p>

                    </div>
                </section>
                <section className=" border-b city-card border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden" style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
                    <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
                        <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency/96/light-snow.png" alt="sun" />
                    </div>
                    <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className="h-[150px] city-card-main">
                        <p>Londen 48°</p>
                        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">Today</span>
                        <p className="mt-2">13 - 24 mph</p>
                        <p className="mt-3">sunrise: 6:50</p>
                        <p className="mt-2">sunset : 7:55</p>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Cities 