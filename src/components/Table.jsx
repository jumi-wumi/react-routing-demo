// Visa en tabell med dynamiska columns och rows
// Props: columns: array av column-namn + data: array fylld med objekt med datan för våra rows

const Table = ({ columns, data }) => {
  return (
    <table>
      {/* tabellens header  */}
      <thead>
        {/* table row inuti loopa igeom column-namn-arrayn en table header för varje  */}
        {columns.map((column, index) => (
          <th key={index}>
            {/* visa column-namenet  */}
            {column}
          </th>
        ))}
      </thead>

      {/* table body  */}
      <tbody>
        {/* loopa igenom alla rader i data-arrayen  */}
        {data.map((row, rowIndex) => (
            <tr key={rowIndex}> {/* unikt key för varje rad */}
                {/* loopa igenom kolumnerna för att visa rätt värde i rätt cell  */}
                {columns.map((column, columnIndex) => ( 
                    <td key={columnIndex}> {/* unikt key för varje cell */}
                        {/* hämta värdet från row-objekt baserat på kolumn.  */}
                        {row[column]}
                    </td>
                ))}
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
