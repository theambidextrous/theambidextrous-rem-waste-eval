# WeWantWaste UI Interview

## Design Approach
- ⁠Since all items look the same the grid view is not necessary, opted to use single item view with option seletion dropdown.
- For the provided dataset, only Skip size has unique values. Hire period is all the same, so the hire period is by default selected.
- Assuming that the format of the data set provided is final, we may remove the hire period dropdown entirely.
- I have added a few tests - production app should have 95% + test coverage.

## Build with
- React + Vite

## Setup.
- clone repo
- navigate to root and install deps `npm i`
- access page at : [http://localhost:5173/theambidextrous-rem-waste-eval/](http://localhost:5173/theambidextrous-rem-waste-eval/)

## Deployment
Send this out to github pages
- run `npm run deploy` command
- access page at: [https://theambidextrous.github.io/theambidextrous-rem-waste-eval/](https://theambidextrous.github.io/theambidextrous-rem-waste-eval/)

## Testing
To run the tests in the project
- run `npm run test` to execute test suites
- run `npm run test:coverage` to execute tests with coverage
