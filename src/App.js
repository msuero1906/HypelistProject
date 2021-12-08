import "./styles.css";
//Write array below
export default function App() {
  let names = ["Omari","Melody","Keturah","Aldo","Reginea","Amori","Laurent","Ye","Matt","Judy","Sami","Maxwell","Groana","Aland","Jean","Lorena"];

  return (
    <div className="App">
      <table>
       <tr> <th>First Name</th> </tr>
        { names.map(function(name){
          return(<td>{name}</td>)
        })} 
        <tr>
          <td>{names[0]}</td>
        </tr>
        
       
      </table>
    </div>
  );
}
