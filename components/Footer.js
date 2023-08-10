import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col gap-5 py-5">
        <a href="mailto:leandra.carolina.rios92@hotmail.com" className="text-white text-center text-lg hover:scale-110">
            leandra.carolina.rios92@hotmail.com
        </a>
        <div className="flex gap-5 items-center justify-center">
                    <a href="https://www.linkedin.com/in/leandra-carolina-rios-431965151/" 
                        target='_blank'
                        className="bg-white p-3 rounded-full hover:scale-110">
                        <Image src="/images/Icons/linkedin.png" alt="linkedin" width={20} height={20}/>
                    </a>
                    <a href="https://github.com/CarolinaRios92" 
                        target='_blank'
                        className="bg-white p-3 rounded-full hover:scale-110">
                         <Image src="/images/Icons/github.png" alt="github" width={20} height={20}/>
                    </a>
                </div>
    </footer>  
  );
}
