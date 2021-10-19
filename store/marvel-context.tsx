import { ChangeEvent, createContext, FC, useReducer, useState } from "react";
import Avenger from "../model/web/Avanger";
import Series from "../model/web/Series";


type MarvelContextType = {
  series: Series[];
  avengers: Avenger[];
  setAvengers: (avengers: Avenger[]) => void;
  setSeries: (series: Series[]) => void;
};

const INITIAL_MARVEL_CONTEXT = {
  series: [],
  avengers: [],
  setAvengers: (avengers: Avenger[]) => {},
  setSeries: (series: Series[]) => {},
};

export const MarvelContextProvider: FC = ({ children }) => {
  const [avengers, setAvengers] = useState([] as Avenger[]);
  const [series, setSeries] = useState([] as Series[]);

  const avengersChangeHandler = (avengers: Avenger[]) => {
    setAvengers(avengers);
  };

  const seriesChangeHandler = (series: Series[]) => {
    setSeries(series);
  };

  const contextValue: MarvelContextType = {
    series: series,
    avengers: avengers,
    setAvengers: avengersChangeHandler,
    setSeries: seriesChangeHandler,
  };
  return <MarvelContext.Provider value={contextValue}> {children} </MarvelContext.Provider>;
};

const MarvelContext = createContext<MarvelContextType>({
  ...INITIAL_MARVEL_CONTEXT,
});

export default MarvelContext;
