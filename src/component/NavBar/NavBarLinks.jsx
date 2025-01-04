
function NavbarLinks(props) {
    return(
        <>
        <div className='flex px-2 py-2'>
            <div className="py-1.5"> { props.icon } </div>
            <h1 className="text-xl p-1 font-bold px-1 text-real">{ props.to }</h1>  
        </div>
        </>
    );
}

export default NavbarLinks