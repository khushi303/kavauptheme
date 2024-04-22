export default function CommonBtn(props) {
    return (
        <>
            <button className="sm:py-5 sm:px-11 px-8 py-4 bg-linearbtn text-btntext rounded-full text-sm font-medium leading-xsm text-center after:transition-all after:duration-300 after:ease-linear after:absolute after:top-0.5 after:left-0.5 after:bottom-0.5 after:right-0.5 after:rounded-full after:bg-white relative group hover:after:opacity-100 after:opacity-0 after:z-[2] transition-all duration-300 ease-linear"><span className="group-hover:bg-clip-text group-hover:bg-linearbtn text-btntext inline-block group-hover:text-transparent transition-all duration-300 ease-linear relative z-10">{props.btnname}</span></button>
        </>
    )
}