function Menu(props){
    return(
        <div>
            --Menu
            <h1> This is Menu</h1>;

            --{props.abc}--
            --{props.qwe}--

            --
            Main
            Services
            Prices
            Contacts
        </div>
    );
}
export default Menu;