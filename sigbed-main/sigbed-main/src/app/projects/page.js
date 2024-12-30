import Image from 'next/image'

export default function Home() {
  return (<>
    <main className="flex h-full flex-col items-center justify-between">
      <section className="bg-cover w-full brightness-150 bg-[url('https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-36 lg:py-36">
            <h1 className="mb-8 mx-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">PROJECTS</h1>
        </div>
      </section>
      <section className="grid py-4 px-3 grid-cols-2 md:grid-cols-3 gap-3">
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53420797170_a34aa7d830_z.jpg" alt="" />

        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quadcopter</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A versatile aerial drone, the Quadcopter serves multiple applications with its agility and maneuverability. From aerial photography to surveillance, this project explores the potential of unmanned aerial vehicles in various fields.
            </p>
           
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53428135523_a5116006b7_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">3D Printed Planes</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fusing technology and education, this project utilizes 3D printing to create miniature planes. Beyond being a fascinating hands-on activity, it offers insights into aerodynamics and the principles of flight, making it an engaging educational tool.</p>
            
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg py-auto" src="https://live.staticflickr.com/65535/53420373396_d858a23434_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bluetooth Car Using Arduino</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Integrating Arduino and Bluetooth technology, this project results in a remote-controlled car. Beyond the fun aspect, it serves as a practical application of embedded systems and wireless communication in robotics.
</p>
            
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53415719634_e824abd906_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Omnidirectional Car</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Redefining mobility, the Omnidirectional Car incorporates wheels that can move in any direction. This innovative design enhances maneuverability, making it suitable for applications where precise and versatile movement is essential.</p>
            
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53419285102_4e2556ece4_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gesture Controlled Car</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Redefining human-machine interaction, this project enables car control through gesture recognition. By harnessing computer vision, it adds a layer of intuitive control to vehicle navigation, exploring the potential of gesture-based interfaces.</p>
            
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53420638400_fd7a6e5319_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RFID Door Lock/Unlock System</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Elevating security, this project implements RFID technology for door access control. Offering convenience and enhanced security, it showcases the integration of advanced technologies in everyday applications.</p>
            
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53420527394_4030781740_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Radar</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Exploring radar technology, this project has applications in object detection and tracking. From security systems to autonomous vehicles, radar plays a crucial role in sensing and understanding the environment.</p>
            
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53420378066_4b35868d0d_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">5DoF Robotic Arm</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With five degrees of freedom, this robotic arm is designed for precise and controlled movements. It finds applications in various fields, including manufacturing, research, and automation, showcasing the versatility of robotic technologies.</p>
           
    </div>
        </div>
        <div className="max-w-sm mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg" src="https://live.staticflickr.com/65535/53415896455_6e17bd8925_z.jpg" alt="" />

        <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FPV Racing Drone</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Delivering an immersive flying experience, the FPV Racing Drone combines speed and technology. It opens up possibilities for recreational and competitive drone racing, showcasing the excitement and potential of drone technology.</p>
            
    </div>
        </div>

      </section>
    </main>
    </>
  )
}