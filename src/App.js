import "./styles.css";
//Write array below
export default function App() {
  let names = ["Omari","Melody","Keturah","Aldo","Reginea","Amori","Laurent","Ye","Matt","Judy","Sami","Maxwell","Groana","Aland","Jean","Lorena"];

  return (
    <div className="App">
      <table>
        <th>First Name</th>
        { names.map(function(name){
          return()
        })
        <tr>
          <td>{names[0]}</td>
        </tr>
        }
       
      </table>
    </div>
  );
}
