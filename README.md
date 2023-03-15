# Geolocation Security Management Web App

![web_app](https://raw.githubusercontent.com/thatjosh/z-public-images/main/webapp_image.png)

<br>

## About this project

The purpose of this project is to develop a security management system with `real time geolocation tracking`. The webapp allows the security management team to:

1. track personnels on the ground,
2. add events to the map as soon as an incident is observed on closed-circuit television,
3. and dispatch active personnels to mitgate crises.

<br>

## To get started

1. Before cloning the repository, make sure you have `npm v6` and `node v14` installed.
2. Run `npm i` to install the packages used in this codebase.
3. Add a `.env` file and insert the environment variables.
4. Run `npm run dev` to run the codebase locally.

<br>

## Environment variables

Google Maps API
| https://console.cloud.google.com/google/maps-apis/credentials

- VITE_GOOGLE_API

Firebase Database URL
| https://firebase.google.com/docs/database

- VITE_FIREBASE_CORE_SERVICE_URL

Firebase Credentials | https://firebase.google.com/docs/cloud-messaging/js/receive

- VITE_apiKey
- VITE_authDomain
- VITE_databaseURL
- VITE_projectId
- VITE_storageBucket
- VITE_messagingSenderId
- VITE_appId

<br>

## Seed Data

Two seed data files are available at the `/src/data/` directory: `events-seed-json.json` and `personnel-seed-json.json`.

<br>

## Tech stack

- React
- Firebase
- Google Maps API
- ChakraUI
- Vite

<br>

## Structure

```
.
└── main.tsx/
    └── App.tsx/
        └── HomePage.tsx/
            └── component/
                ├── event/
                │   ├── EventSection.tsx
                │   ├── EventModal.tsx
                │   ├── EventCard.tsx
                │   └── EventSectionSkeleton.tsx (render when event data is unavailable)
                ├── profile/
                │   ├── ProfileSection.tsx
                │   ├── ProfileModal.tsx
                │   └── ProfileSectionSkeleton.tsx (render when event data is unavailable)
                └── feed/
                    ├── events/
                    │   └── EventsTable.tsx
                    ├── map-visualiser/
                    │   └── GMaps.tsx
                    ├── personnels/
                    │   ├── NearbyPersonnelModal.tsx
                    │   └── PersonnelTable.tsx
                    ├── Feed.tsx
                    ├── FeedProfileCard.tsx
                    ├── FeedSkeleton.tsx (render when feed data is unavailable)
                    ├── InsertNewEventForm.tsx
                    └── NewEventButton.tsx
```
