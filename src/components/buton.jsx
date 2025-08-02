export const Button =({btnName, bgColor})=>{
    return(
        <button className={`border-2 border-gray-800 rounded-sm px-2 py-1 m-1 font-semibold cursor-pointer hover:bg-gray-800 hover:text-gray-200`}>{btnName}</button>
    )
}