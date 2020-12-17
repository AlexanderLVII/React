import Contact from './Contact';
import ContactsData from './ContactsData';
import Menu from './Menu';
import Comp01 from './Comp01';
import Comp02 from './Comp02';
function App() {
  const name = 'SuperSite';
  const contacts = ContactsData.map(El => <El name={El.name} phone={El.phone} email={{El.email}} />;
/*      [
      {name:'Alice', phone: '123456789', email: 'vasyu@pupkin.net'},
      {name:'Bob'  , phone: '234567890', email: 'vasyu@pupkin.net'},
      {name:'Marta', phone: '345678901', email: 'vasyu@pupkin.net'},
      {name:'Paul' , phone: '456789012', email: 'vasyu@pupkin.net'},
      {name:'Jeck' , phone: '567890123', email: 'vasyu@pupkin.net'},
      {name:'Swen' , phone: '678901234', email: 'vasyu@pupkin.net'},
      {name:'Kevin', phone: '789012345', email: 'vasyu@pupkin.net'},
  ]
  */

  return (

    <div className= "App" >
        --App





       <Contact name={contacts.name} phone={contacts.phone} email={contacts.email} />



        <Contact name={name} phone={'123'} email={'wer#234.fd'}/>

        <Menu abc={'Bob '} qwe={666666}/>
        <Menu abc={'Mary'} qwe={777777}/>

        {name}

        <Menu/>
        <Comp01/>
        <Comp02/>
    </div>
  );
}

export default App;
