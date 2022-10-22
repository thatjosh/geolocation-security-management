export const feedArea = [
  {
    name: "Area 1",
    coordinates: { lat: 43.38, lng: -80.14 },
    area_id: 1,
  },
  {
    name: "Area 2",
    coordinates: { lat: 43.48, lng: -80.24 },
    area_id: 2,
  },
  {
    name: "Area 3",
    coordinates: { lat: 43.28, lng: -80.34 },
    area_id: 3,
  },
  {
    name: "Area 4",
    coordinates: { lat: 43.39, lng: -80.24 },
    area_id: 4,
  },
];

export const guard_coordinates = [
  { lat: 43.38, lng: -80.14 },
  { lat: 43.48, lng: -80.24 },
  { lat: 43.28, lng: -80.34 },
  { lat: 43.39, lng: -80.24 },
  { lat: 43.32, lng: -80.04 },
];

export const area_coordinates = [{}, {}, {}, {}];

export const personnel_list = [
  {
    id: 247739,
    name: "Mikael",
    status: "on duty",
    area: "3132A",
    region: "Sunway Malls",
    rank: "T3",
  },
  {
    id: 229740,
    name: "Sarah",
    status: "on duty",
    area: "3132A",
    region: "Sunway Malls",
    rank: "T2",
  },
  {
    id: 229741,
    name: "Anna",
    status: "on duty",
    area: "3132B",
    region: "Sunway Malls",
    rank: "T1",
  },
];

export const event_list = [
  {
    id: 784562,
    details:
      "Two burglars broke into the gadget warehouse and stole four tablets.",
    severity_level: "mid",
    status: "open",
    coordinate: { lat: 43.38, lng: -80.14 },
    personnels_notified: [247739, 229740, 229741],
  },
  {
    id: 475182,
    details: "Suspicious gang acvitity spotted.",
    severity_level: "mid",
    status: "resolved",
    coordinate: { lat: 43.48, lng: -80.24 },
    personnels_notified: [247739, 229741],
  },
  {
    id: 987654,
    details: "Armed robbery spotted; two injured victims.",
    severity_level: "high",
    status: "open",
    coordinate: { lat: 43.28, lng: -80.34 },
    personnels_notified: [],
  },
  {
    id: 327947,
    details: "Suspicious gang acvitity spotted.",
    severity_level: "low",
    status: "open",
    coordinate: { lat: 43.28, lng: -80.34 },
    personnels_notified: [],
  },
  {
    id: 327948,
    details: "Suspicious gang acvitity spotted.",
    severity_level: "low",
    status: "open",
    coordinate: { lat: 43.32, lng: -80.04 },
    personnels_notified: [],
  },
];
