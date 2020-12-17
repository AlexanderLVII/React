
function Contacts(props){
    let {contact} = props;


    return(
        <div>
            {contact.name}   {contact.age}

            <button onClick={() => props.sayHello(contact.name, contact.age)}>Say Age</button>
        </div>
    )

}
export default Contacts;


