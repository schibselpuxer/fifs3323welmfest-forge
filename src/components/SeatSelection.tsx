import { useState } from "react";
import { cn } from "@/lib/utils";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const SEATS_PER_ROW = 12;

type SeatState = "available" | "taken" | "selected";

const generateSeats = (): Record<string, SeatState> => {
  const seats: Record<string, SeatState> = {};
  ROWS.forEach((row) => {
    for (let i = 1; i <= SEATS_PER_ROW; i++) {
      const id = `${row}${i}`;
      seats[id] = Math.random() < 0.25 ? "taken" : "available";
    }
  });
  return seats;
};

interface SeatSelectionProps {
  showtime: string;
}

const SeatSelection = ({ showtime }: SeatSelectionProps) => {
  const [seats, setSeats] = useState<Record<string, SeatState>>(() => generateSeats());

  const toggleSeat = (id: string) => {
    setSeats((prev) => {
      if (prev[id] === "taken") return prev;
      return {
        ...prev,
        [id]: prev[id] === "selected" ? "available" : "selected",
      };
    });
  };

  const selectedCount = Object.values(seats).filter((s) => s === "selected").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">
          Sitzplatzauswahl – <span className="text-primary">{showtime} Uhr</span>
        </h3>
        {selectedCount > 0 && (
          <span className="text-sm text-muted-foreground">
            {selectedCount} {selectedCount === 1 ? "Platz" : "Plätze"} gewählt
          </span>
        )}
      </div>

      {/* Screen */}
      <div className="mb-8 text-center">
        <div className="mx-auto w-3/4 h-2 rounded-t-full gradient-gold opacity-60" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Leinwand</p>
      </div>

      {/* Seats grid */}
      <div className="flex flex-col items-center gap-1.5">
        {ROWS.map((row) => (
          <div key={row} className="flex items-center gap-1">
            <span className="w-5 text-[10px] text-muted-foreground font-medium text-right mr-1">
              {row}
            </span>
            {Array.from({ length: SEATS_PER_ROW }, (_, i) => {
              const id = `${row}${i + 1}`;
              const state = seats[id];
              return (
                <button
                  key={id}
                  onClick={() => toggleSeat(id)}
                  disabled={state === "taken"}
                  aria-label={`Reihe ${row} Platz ${i + 1}`}
                  className={cn(
                    "w-6 h-6 md:w-7 md:h-7 rounded-t-md text-[9px] font-medium transition-colors",
                    state === "available" && "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
                    state === "taken" && "bg-muted/40 text-muted-foreground/30 cursor-not-allowed",
                    state === "selected" && "bg-primary text-primary-foreground"
                  )}
                >
                  {i + 1}
                </button>
              );
            })}
            <span className="w-5 text-[10px] text-muted-foreground font-medium ml-1">
              {row}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-t-sm bg-secondary inline-block" /> Frei
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-t-sm bg-primary inline-block" /> Gewählt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-t-sm bg-muted/40 inline-block" /> Belegt
        </span>
      </div>

      {/* Book button */}
      {selectedCount > 0 && (
        <div className="mt-8 text-center">
          <button className="gradient-gold text-primary-foreground font-bold px-8 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
            {selectedCount} {selectedCount === 1 ? "Ticket" : "Tickets"} reservieren – {(selectedCount * 12.5).toFixed(2).replace(".", ",")} €
          </button>
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
