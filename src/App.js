import "./styles.css";
//Write array below
export default function App() {
  let people = [
    { FirstName: "Omari", LastName: "Prass" },
    { FirstName: "Melody", LastName: "Suero" },
    { FirstName: "Keturah", LastName: "Allen" },
    { FirstName: "Aldo", LastName: "Terrana" },
    { FirstName: "Reginea", LastName: "Walker" },
    { FirstName: "Amori", LastName: "Steele" },
    { FirstName: "Laurent", LastName: "Benjamin" },
    { FirstName: "Ye", LastName: "Paing" },
    { FirstName: "Matt", LastName: "Schupack" },
    { FirstName: "Judy", LastName: "Truong" },
    { FirstName: "Sami", LastName: "Lieberman" },
    { FirstName: "Maxwell", LastName: "Williams" },
    { FirstName: "Groana", LastName: "Melendez" },
    { FirstName: "Aland", LastName: "Kuang" },
    { FirstName: "Jean", LastName: "Saldarriaga" },
    { FirstName: "Lorena", LastName: "Castillo" }
  ];

  return (
    <div className="App">
      <table>
        <tr>
          {" "}
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {people.map(function (person) {
          return (
            <tr>
              <td>{person.FirstName}</td>
              <td>{person.LastName}</td>
            </tr>
          );
        })}
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
