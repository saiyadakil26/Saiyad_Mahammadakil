import Head from "./Header"
export default function Navbar(){
    let c=0;
    const sh=()=>{
        let el=document.getElementById('menu').className;
        if (c==0) {
            document.getElementById('menu').className=el.replace('hidden','block');
            c++;  
        }else{
            document.getElementById('menu').className=el.replace('block','hidden');
            c--;
        }
        
    }
    return(
        <>
        <Head/>
        <div className=" sticky top-0 bg-black p-2 w-[100%]">
        <div className="flex flex-grow bg-black">
        <div>
            <img src="./Fevicon.jpg" className="w-[5rem]"/>
        </div>
        <div className="flex flex-grow justify-end text-3xl mr-2" onClick={sh}>
        <i className="fa-solid fa-bars"></i>
        </div>
        
        </div>
        <div className="hidden m-2 space-y-1 mt-3 bg-black" id="menu">
            <div className="border-2 p-2 hover:bg-red-500">Home</div>
            <div className="border-2 p-2 hover:bg-red-500">About</div>
            <div className="border-2 p-2 hover:bg-red-500">Education</div>
            <div className="border-2 p-2 hover:bg-red-500">Profile</div>
            <div className="border-2 p-2 hover:bg-red-500">Project</div>
            <div className="border-2 p-2 hover:bg-red-500">Gallery</div>
            <div className="border-2 p-2 hover:bg-red-500">Contact Me</div>
        </div>
        </div>
        </>
    )
}