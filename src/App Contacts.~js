import Contacts from './Contacts';
function App() {

    const contacts = [
        { id: 1, name: "Aaaa", age: 123},
        { id: 2, name: "Bbbb", age: 124},
        { id: 3, name: "Cccc", age: 126},
        { id: 4, name: "Dddd", age: 129},
        ];
    const sayHello = (name, age) =>{
        console.log(`Dear ${name}, you are ${age} years old!`);
    }

    return (
        <div>
            {contacts.map(contact => <Contacts key ={contact.id} contact={contact} sayHello={sayHello}/>)}
        </div>
    );

}
export default App
