import Cards from "./component/Cards/Cards";

function HomePage(){
    return(
        <>
        <div className="grid grid-cols-5 gap-3">
            <Cards title="Hai" channel="Halosemua"/>
            <Cards title="How to Train Your Dragon" channel="Halosemua"/>
            <Cards title="Hai" channel="Halosemua"/>
            <Cards title="How to create React App" channel="Halosemua"/>
            <Cards title="Hai" channel="Halosemua"/>
        </div>
        </>
    );
};

export default HomePage;