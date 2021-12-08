import "./styles.css";
//Write array below
export default function App() {
  let people = [
    { FirstName: "Omari", LastName: "" },
    "Melody",
    "Keturah",
    "Aldo",
    "Reginea",
    "Amori",
    "Laurent",
    "Ye",
    "Matt",
    "Judy",
    "Sami",
    "Maxwell",
    "Groana",
    "Aland",
    "Jean",
    "Lorena"
  ];

  return (
    <div className="App">
      <table>
        <tr>
          {" "}
          <th>First Name</th>{" "}
        </tr>
        {people.map(function (person) {
          return (
            <tr>
              <td>{person.FirstName}</td>
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
