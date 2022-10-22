export interface IPersonnel {
  id: number;
  name: string;
  status: string;
  area: string;
  region: string;
  rank: string;
}

export interface GMapsCoordinates {
  lat: number;
  lng: number;
}

export interface IEvent {
  id: number;
  details: string;
  severity_level: string;
  status: string;
  coordinate: GMapsCoordinates;
  personnels_notified: number[];
}
