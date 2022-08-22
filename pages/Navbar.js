import Head from "./Header"
export default function Navbar(){
    return(
        <>
        <Head/>
        <div className="flex flex-grow">
        <div>
            <img src="./Fevicon.jpg" className="w-[5rem]"/>
        </div>
        <div className="flex flex-grow justify-end text-3xl mr-2">
        <i className="fa-solid fa-bars"></i>
        </div>
        
        </div>
        <div className="hidden">
            <div>Home</div>
            <div>About</div>
            <div>Education</div>
            <div>Profile</div>
            <div>Project</div>
            <div>Gallery</div>
            <div>Contact Me</div>
        </div>
        </>
    )
}