import { useEffect, useState } from "react";
import s from "./performanceLocations.module.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import cn from "classnames";

const CITY_LIST = {
  NOVO_HAMBURGO: {
    name: "Novo Hamburgo",
    position: {
      lat: -29.6817548,
      lng: -51.13928,
    },
  },
  CAMPO_BOM: {
    name: "Campo Bom",
    position: {
      lat: -29.6743424,
      lng: -51.0647902,
    },
  },
  DOIS_IRMAOS: {
    name: "Dois Irmãos",
    position: {
      lat: -29.5878553,
      lng: -51.0935647,
    },
  },
  SAPIRANGA: {
    name: "Sapiranga",
    position: {
      lat: -29.6410401,
      lng: -51.0112616,
    },
  },
  NOVA_HARTZ: {
    name: "Nova Hartz",
    position: {
      lat: -29.5861963,
      lng: -50.9050266,
    },
  },
  ARARICA: {
    name: "Araricá",
    position: {
      lat: -29.6163407,
      lng: -50.9303819,
    },
  },
  PAROBE: {
    name: "Parobé",
    position: {
      lat: -29.6269048,
      lng: -50.8371754,
    },
  },
  TAQUARA: {
    name: "Taquara",
    position: {
      lat: -29.650172,
      lng: -50.7826088,
    },
  },
  IGREJINHA: {
    name: "Igrejinha",
    position: {
      lat: -29.5725846,
      lng: -50.7976248,
    },
  },
  TRES_COROAS: {
    name: "Três Coroas",
    position: {
      lat: -29.5136367,
      lng: -50.7872011,
    },
  },
  GRAMADO: {
    name: "Gramado",
    position: {
      lat: -29.3757576,
      lng: -50.8788054,
    },
  },
  ROLANTE: {
    name: "Rolante",
    position: {
      lat: -29.6505449,
      lng: -50.5801525,
    },
  },
  RIOZINHO: {
    name: "Riozinho",
    position: {
      lat: -29.640831,
      lng: -50.45961,
    },
  },
  SANTO_ANTONIO_DA_PATRULHA: {
    name: "Santo Antônio da Patrulha",
    position: {
      lat: -29.8311421,
      lng: -50.5259629,
    },
  },
  SAO_FRANCISCO_DE_PAULA: {
    name: "São Francisco de Paula",
    position: {
      lat: -29.446087,
      lng: -50.5855434,
    },
  },
};

function sortAlphabeticaly(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export function PerformanceLocations({ currentRef }) {
  const [selectedCity, setSelectedCity] = useState(CITY_LIST.NOVO_HAMBURGO);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  return (
    <div ref={currentRef} className={s.performanceLocationsWrapper}>
      <h1 className={s.title}>LOCAIS DE ATUAÇÃO</h1>
      <div className={s.citiesWrapper}>
        {Object.keys(CITY_LIST)
          .sort((a, b) => sortAlphabeticaly(CITY_LIST[a], CITY_LIST[b]))
          .map((city) => (
            <p
              onClick={() => setSelectedCity(CITY_LIST[city])}
              className={cn(s.cityName, {
                [s.isSelectedCity]: selectedCity.name === CITY_LIST[city].name,
              })}
            >
              {CITY_LIST[city].name}
            </p>
          ))}
      </div>

      <div className={s.mapWrapper}>
        {isLoaded ? (
          <GoogleMap
            center={selectedCity.position}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            zoom={13}
          />
        ) : null}
      </div>
    </div>
  );
}
