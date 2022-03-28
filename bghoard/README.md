# Board Game Hoard

## Project Generation

> npx create-nx-workspace bghoard

- Workspace: react-express
- Name: review
- Stylesheet: emotion

## Starting API

> nx serve api

## Create Library in Folder

> nx g @nrwl/react:lib --directory=review ui-tile

### Best Practice Naming

- ui-name : ui components
- data-access-name : data access components
- util-name : utility components
- feature-name: routing components
- service-name: service components
- store-name: store components

## E2E Testing: Cypress

> nx e2e review-e2e --watch

## Unit Testing: Jest

---

Date of creation: 3-22-2022
