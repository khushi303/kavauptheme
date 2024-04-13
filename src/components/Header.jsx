export default function Header() {
    return (
        <div className='h-screen grid place-items-center bg-primary'>
            <div>
                <button className='py-2 px-8 bg-primary text-typography m-2'>Default</button>
                <button className='py-2 px-8 bg-primary text-typography m-2'>theme 1</button>
                <button className='py-2 px-8 bg-primary text-typography m-2'>theme 2</button>
                <button className='py-2 px-8 bg-primary text-typography m-2'>theme 3</button>
            </div>
        </div>
    )
}