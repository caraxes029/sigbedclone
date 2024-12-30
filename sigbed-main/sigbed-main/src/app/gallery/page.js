import Image from 'next/image'

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-cover bg-right bg-fixed w-full bg-no-repeat bg-[url('https://live.staticflickr.com/65535/53413681654_14aa5eb9b3_k.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-8 mx-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">HERE IS A SNEAK PEEK INSIDE SIGBED</h1>
            <p className="mb-24 mx-5 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">Beyond organizing unprecedented events and groundbreaking projects, SIGBED is more than a chapter, it`s a closely bonded community. This showcase offers just a glimpse of the world SIGBED creates around itself!</p>
        </div>
      </section>

      <div className="grid bg-transparent bg-black grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
            <div>
                <img className="h-full max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415838785_028e7fe8f2_b.jpg" alt="" />
            </div>
            <div>
                            {/* ye photo kisi ne kbhi bhi htaai, ya location change ki toh bhot maar khayega - MJ Bhaiya (SIGBED vice chair 2022-23) */}
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53413732736_5996d99d37_h.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415758294_d5e67bf773_b.jpg" alt="" />
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415722229_286f5b5dc4_b.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415569383_5216ddfa55_b.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415834125_cfdb046471_b.jpg" alt="" />
            </div>
        </div>
        <div className="grid gap-4">
            <div>

                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415734459_4e8d68d8c9_c.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53413734361_397307abaa_b.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415896455_6e17bd8925_c.jpg" alt="" />
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53414479547_4d25eee817_b.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415822879_d625e6f70f_c.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://live.staticflickr.com/65535/53415736139_c3636fbe89_b.jpg" alt="" />
            </div>
        </div>
       </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2 ">
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center bg-blend-multiply brightness-75 block" src="https://images.unsplash.com/photo-1703104641715-b8f8ae7b4016?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/65535/53413791320_50d8979cde_k.jpg" />
                </div>
                <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://live.staticflickr.com/65535/53413885863_d5468c3edf_k.jpg" />
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://live.staticflickr.com/65535/53413790700_0060953b75_k.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full py-2 object-contain h-full object-center block" src="https://live.staticflickr.com/65535/53414063399_af4e51ed81_h.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-bottom h-full object-center block" src="https://live.staticflickr.com/65535/53413516708_c0add1869c_k.jpg" />
                </div>
            </div>
            </div>
        </div>
      </section>
      
    </main>
    </>
  )
}