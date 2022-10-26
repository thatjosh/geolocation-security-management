import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import {
  GMapsCoordinates,
  IEvent,
  IPersonnel,
} from "../../../../../common/interface/interface";
import EventModal from "../../event/EventModal";

interface IProps {
  areaCoordinates: GMapsCoordinates;
  eventListData: IEvent[];
  personnelListData: IPersonnel[];
  setCurrentCoordinate: (currentCoordinate: GMapsCoordinates) => void;
  eventonOpen: any;
  newEvent: any;
  newEventonOpen: any;
  setEventID: any;
  setPersonnelID: any;
  personnelonOpen: any;
  // eventisOpen: any;
  // eventonClose: any;
  // eventID: any;
}
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const GMaps: React.FC<IProps> = ({
  areaCoordinates,
  eventListData,
  personnelListData,
  setCurrentCoordinate,
  eventonOpen,
  newEvent,
  newEventonOpen,
  setEventID,
  setPersonnelID,
  personnelonOpen,
}) => {
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const containerStyle = {
    width: "100%",
    height: "350px",
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={areaCoordinates}
      options={options}
      zoom={16}
      onClick={(_) => {
        if (newEvent) {
          console.log("here");
          setCurrentCoordinate(JSON.parse(JSON.stringify(_.latLng)));
          newEventonOpen();
        }
      }}
    >
      {eventListData.map((event, key) => (
        <MarkerF
          position={event.coordinate}
          onClick={(_) => {
            setEventID(key);
            eventonOpen();
          }}
          icon={{
            url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/red%20event.png",
            scaledSize: new google.maps.Size(28, 28),
          }}
        />
      ))}
      {personnelListData &&
        personnelListData.map((personnel, key) => (
          <MarkerF
            position={personnel.coordinate}
            onClick={(_) => {
              setPersonnelID(key);
              personnelonOpen();
            }}
            icon={{
              url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/personnel.png",
              scaledSize: new google.maps.Size(15, 15),
            }}
          />
        ))}
    </GoogleMap>
  );
};

export default GMaps;
