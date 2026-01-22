import { useEffect, useState } from "react";
import "./TournamentCard.css";

function Tournaments() {
  const [allTournaments, setAllTournaments] = useState([]);
  const [filteredTournaments, setFilteredTournaments] = useState([]);

  const [yearFilter, setYearFilter] = useState("All");
  const [resultFilter, setResultFilter] = useState("All");
  const [nameFilter, setNameFilter] = useState("All");

  useEffect(() => {
    fetch("/tourneys.json")
      .then(res => res.json())
      .then(data => {
        setAllTournaments(data);
        setFilteredTournaments(data);
      });
  }, []);

  useEffect(() => {
    let filtered = allTournaments;

    if (yearFilter !== "All") {
      filtered = filtered.filter(t => t.date.startsWith(yearFilter));
    }

    if (resultFilter !== "All") {
      filtered = filtered.filter(t => t.result === resultFilter);
    }

    if (nameFilter !== "All") {
      filtered = filtered.filter(t => t.tournament === nameFilter);
    }

    setFilteredTournaments(filtered);
  }, [yearFilter, resultFilter, nameFilter, allTournaments]);

  const years = ["Year", ...new Set(allTournaments.map(t => t.date.slice(0, 4)))];
  const tournamentNames = ["All Tournaments", ...new Set(allTournaments.map(t => t.tournament))];

  const resetFilters = () => {
    setYearFilter("All");
    setResultFilter("All");
    setNameFilter("All");
  };

  return (
    <div>
      {/* Filters */}
      <div className="filters">
        <select value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>

        <select value={resultFilter} onChange={e => setResultFilter(e.target.value)}>
          <option value="All">All Results</option>
          <option value="Win">Wins</option>
          <option value="Loss">Losses</option>
        </select>

        <select value={nameFilter} onChange={e => setNameFilter(e.target.value)}>
          {tournamentNames.map(name => <option key={name} value={name}>{name}</option>)}
        </select>

        <button onClick={resetFilters}>Reset All Filters</button>
      </div>

      {/* Tournament Cards */}
      <div className="tournament-grid">
        {filteredTournaments.map((tournament, index) => (
          <div key={index} className="tournament-card">
            <h3>{tournament.tournament}</h3>
            <p>{tournament.date}</p>
            <p>{tournament.location}</p>
            <p>{tournament.category}</p>
            <p className={tournament.result === "Win" ? "win" : "loss"}>{tournament.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;
