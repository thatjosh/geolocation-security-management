import { IEvent, INewPersonnel, IPersonnel } from "../interface/interface";

export const new_feed_area = [
  {
    name: "Bandar Sunway",
    coordinates: {
      lat: 3.069219,
      lng: 101.602711,
    },
    area_id: 1,
  },
  {
    name: "Sunway Geo",
    coordinates: {
      lat: 3.064741,
      lng: 101.608827,
    },
    area_id: 2,
  },
  {
    name: "Sunway Pyramid",
    coordinates: {
      lat: 3.072519,
      lng: 101.606874,
    },
    area_id: 3,
  },
  {
    name: "Sunway Lagoon",
    coordinates: {
      lat: 3.071126,
      lng: 101.605758,
    },
    area_id: 4,
  },
  {
    name: "Sunway South Quay",
    coordinates: {
      lat: 3.062595,
      lng: 101.610077,
    },
    area_id: 5,
  },
];

export const new_event_list: IEvent[] = [
  {
    id: 456819,
    details:
      "Two burglars broke into the gadget warehouse and stole four tablets.",
    severity_level: "mid",
    status: "open",
    coordinate: {
      lat: 3.06722,
      lng: 101.59659,
    },
    region: "Bandar Sunway",
    personnels_notified: [229742],
  },
  {
    id: 456820,
    details: "Suspicious gang acvitity spotted.",
    severity_level: "mid",
    status: "resolved",
    coordinate: {
      lat: 3.06542,
      lng: 101.597212,
    },
    region: "Bandar Sunway",
    personnels_notified: [229745, 229747, 229748],
  },
  {
    id: 456821,
    details: "Armed robbery spotted; two injured victims.",
    severity_level: "high",
    status: "personnels dispatched",
    coordinate: {
      lat: 3.066084,
      lng: 101.595667,
    },
    region: "Bandar Sunway",
    personnels_notified: [229761, 229763, 229747, 229748, 229763],
  },
  {
    id: 456822,
    details: "Suspicious gang acvitity spotted.",
    severity_level: "mid",
    status: "open",
    coordinate: {
      lat: 3.064734,
      lng: 101.606696,
    },
    region: "Sunway Geo",
    personnels_notified: [229751, 229741],
  },
  {
    id: 456823,
    details: "Suspicious gang acvitity spotted.",
    severity_level: "mid",
    status: "open",
    coordinate: {
      lat: 3.072133,
      lng: 101.609761,
    },
    region: "Sunway Pyramid",
    personnels_notified: [247739, 229741],
  },
  {
    id: 456824,
    details: "Snatch theft reported",
    severity_level: "mid",
    status: "personnels dispatched",
    coordinate: {
      lat: 3.068585,
      lng: 101.601194,
    },
    region: "Bandar Sunway",
    personnels_notified: [229748, 229763],
  },
  {
    id: 456825,
    details: "Theft reported",
    severity_level: "low",
    status: "open",
    coordinate: {
      lat: 3.066224,
      lng: 101.602542,
    },
    region: "Sunway Pyramid",
    personnels_notified: [229756],
  },
  {
    id: 456826,
    details: "Snatch theft reported",
    severity_level: "mid",
    status: "resolved",
    coordinate: {
      lat: 3.06683,
      lng: 101.602406,
    },
    region: "Bandar Sunway",
    personnels_notified: [229742, 229744],
  },
  {
    id: 456827,
    details: "Theft reported",
    severity_level: "low",
    status: "open",
    coordinate: {
      lat: 3.063314,
      lng: 101.608053,
    },
    region: "Sunway Geo",
    personnels_notified: [229751, 229741],
  },
];

export const new_personnel_list: INewPersonnel[] = [
  {
    id: 247739,
    first_name: "Mikael",
    last_name_initial: "A",
    status: "on duty",
    area: "3132A",
    region: "Bandar Sunway",
    rank: "T3",
    coordinate: {
      lat: 3.072688,
      lng: 101.597817,
    },
  },
  {
    id: 229740,
    first_name: "Sarah",
    last_name_initial: "B",
    status: "on duty",
    area: "3182C",
    region: "Sunway Geo",
    rank: "T2",
    coordinate: {
      lat: 3.064721,
      lng: 101.608982,
    },
  },
  {
    id: 229741,
    first_name: "Anna",
    last_name_initial: "D",
    status: "on duty",
    area: "3132B",
    region: "Sunway Pyramid",
    rank: "T1",
    coordinate: {
      lat: 3.073221,
      lng: 101.606744,
    },
  },
  {
    id: 229742,
    first_name: "Amir",
    last_name_initial: "K",
    status: "standby",
    area: "3140A",
    region: "Bandar Sunway",
    rank: "T2",
    coordinate: {
      lat: 3.068625,
      lng: 101.602056,
    },
  },
  {
    id: 229743,
    first_name: "Siti",
    last_name_initial: "D",
    status: "standby",
    area: "3182B",
    region: "Sunway Geo",
    rank: "T2",
    coordinate: {
      lat: 3.063273,
      lng: 101.608559,
    },
  },
  {
    id: 229744,
    first_name: "Emma",
    last_name_initial: "J",
    status: "off duty",
    area: "3141A",
    region: "Bandar Sunway",
    rank: "T3",
    coordinate: {
      lat: 3.066364,
      lng: 101.600016,
    },
  },
  {
    id: 229745,
    first_name: "Noah",
    last_name_initial: "E",
    status: "on duty",
    area: "3140A",
    region: "Bandar Sunway",
    rank: "T2",
    coordinate: {
      lat: 3.068936,
      lng: 101.599653,
    },
  },
  {
    id: 229746,
    first_name: "Amela",
    last_name_initial: "R",
    status: "on duty",
    area: "3132A",
    region: "Sunway Pyramid",
    rank: "T1",
    coordinate: {
      lat: 3.072858,
      lng: 101.607835,
    },
  },
  {
    id: 229747,
    first_name: "Hafiz",
    last_name_initial: "H",
    status: "off duty",
    area: "3142A",
    region: "Bandar Sunway",
    rank: "T2",
    coordinate: {
      lat: 3.066679,
      lng: 101.602644,
    },
  },
  {
    id: 229748,
    first_name: "Adam",
    last_name_initial: "C",
    status: "on duty",
    area: "3142B",
    region: "Bandar Sunway",
    rank: "T1",
    coordinate: {
      lat: 3.067678,
      lng: 101.60194,
    },
  },
  {
    id: 229749,
    first_name: "Lucas",
    last_name_initial: "D",
    status: "on duty",
    area: "3120A",
    region: "Sunway Lagoon",
    rank: "T3",
    coordinate: {
      lat: 3.071013,
      lng: 101.609161,
    },
  },
  {
    id: 229750,
    first_name: "Sophia",
    last_name_initial: "W",
    status: "off duty",
    area: "3132C",
    region: "Sunway Pyramid",
    rank: "T2",
    coordinate: {
      lat: 3.073173,
      lng: 101.605628,
    },
  },
  {
    id: 229751,
    first_name: "Charlotte",
    last_name_initial: "S",
    status: "on duty",
    area: "3182A",
    region: "Sunway Geo",
    rank: "T1",
    coordinate: {
      lat: 3.064042,
      lng: 101.609741,
    },
  },
  {
    id: 229752,
    first_name: "Nathan",
    last_name_initial: "A",
    status: "on duty",
    area: "3321A",
    region: "Sunway South Quay",
    rank: "T2",
    coordinate: {
      lat: 3.062242,
      lng: 101.609906,
    },
  },
  {
    id: 229753,
    first_name: "Mia",
    last_name_initial: "U",
    status: "standby",
    area: "3122C",
    region: "Sunway Lagoon",
    rank: "T2",
    coordinate: {
      lat: 3.071213,
      lng: 101.605815,
    },
  },
  {
    id: 229754,
    first_name: "Asher",
    last_name_initial: "Z",
    status: "on duty",
    area: "3121B",
    region: "Sunway Lagoon",
    rank: "T1",
    coordinate: {
      lat: 3.071202,
      lng: 101.606953,
    },
  },
  {
    id: 229755,
    first_name: "Byran",
    last_name_initial: "E",
    status: "on duty",
    area: "3321A",
    region: "Sunway South Quay",
    rank: "T2",
    coordinate: {
      lat: 3.062252,
      lng: 101.610217,
    },
  },
  {
    id: 229756,
    first_name: "Isabella",
    last_name_initial: "A",
    status: "on duty",
    area: "3132A",
    region: "Sunway Pyramid",
    rank: "T3",
    coordinate: {
      lat: 3.070872,
      lng: 101.605919,
    },
  },
  {
    id: 229757,
    first_name: "Ahmad",
    last_name_initial: "S",
    status: "standby",
    area: "3321B",
    region: "Bandar Sunway",
    rank: "T2",
    coordinate: {
      lat: 3.076576,
      lng: 101.596572,
    },
  },
  {
    id: 229758,
    first_name: "James",
    last_name_initial: "U",
    status: "off duty",
    area: "3121C",
    region: "Bandar Sunway",
    rank: "T1",
    coordinate: {
      lat: 3.064641,
      lng: 101.601319,
    },
  },
  {
    id: 229759,
    first_name: "Raja",
    last_name_initial: "I",
    status: "off duty",
    area: "3321B",
    region: "Bandar Sunway",
    rank: "T3",
    coordinate: {
      lat: 3.076535,
      lng: 101.599911,
    },
  },
  {
    id: 229760,
    first_name: "Gianna",
    last_name_initial: "F",
    status: "on duty",
    area: "3120B",
    region: "Bandar Sunway",
    rank: "T2",
    coordinate: {
      lat: 3.064906,
      lng: 101.59678,
    },
  },
  {
    id: 229761,
    first_name: "Ethan",
    last_name_initial: "D",
    status: "on duty",
    area: "3141C",
    region: "Bandar Sunway",
    rank: "T3",
    coordinate: {
      lat: 3.06844,
      lng: 101.601423,
    },
  },
  {
    id: 229762,
    first_name: "Siti",
    last_name_initial: "H",
    status: "on duty",
    area: "3132B",
    region: "Sunway Pyramid",
    rank: "T1",
    coordinate: {
      lat: 3.070315,
      lng: 101.608781,
    },
  },
  {
    id: 229763,
    first_name: "Ella",
    last_name_initial: "S",
    status: "standby",
    area: "3141B",
    region: "Bandar Sunway",
    rank: "T3",
    coordinate: {
      lat: 3.070762,
      lng: 101.601759,
    },
  },
];
