export const MainLayout =({children})=>{
    return(
        <div className="absolute top-0 z-[-2] gap-10 p-10 min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <h1 className="text-red-500 font-extrabold">this is headings</h1>
            {children}
            <h1 className="text-red-500 font-extrabold">this is footer</h1>
        </div>
    )
}