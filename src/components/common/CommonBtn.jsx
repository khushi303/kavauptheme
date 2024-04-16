export default function CommonBtn(props) {
    return (
        <>
            <button className="sm:py-5 sm:px-11 px-8 py-4 bg-linearbtn text-btntext rounded-full text-sm font-medium leading-xsm text-center">{props.btnname}</button>
        </>
    )
}