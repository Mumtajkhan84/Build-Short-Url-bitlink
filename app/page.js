import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-3.5 items-center justify-center">
          <p className="text-2xl font-bold ">
            The best Url shortener int the market
          </p>
          <p className="px-40">
            We are the most straightforward URL shortener in the world. Most of the url
            shorteners will tract you or ask you give your details for login. we 
            undestand your needs and hence we have created this URL shortener
          </p>
           <div className='flex gap-2.5 text-white items-center'>
                   <Link href="/shorten"> <button className='bg-purple-500 shadod-lg p-1 font-bold rounded-lg'>Try Now</button></Link>
                    <Link href="/Github"><button className='bg-purple-500 shadod-lg p-1 font-bold rounded-lg'>Github</button></Link>
                </div>
        </div>
        <div className=" flex justify-start relative">
         <Image className="mix-blend-darken" src={"/vector.jpg"} alt="Vector illustration" fill={true} />
        </div>
      </section>
    </main>
  );
}
