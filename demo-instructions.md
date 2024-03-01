# Responsive Price Calculator

This project is a responsive price calculator application that allows users to see pricing totals based on different page view numbers. It provides an optimal layout for various screen sizes and includes interactive elements with hover states.

## Features

- Use the slider see prices for different page view numbers.
- Use the toggle to switch between monthly and yearly billing plans and view the Total price.
- View the optimal layout for the app depending on their device's screen size.
- View an estimate of the price in CRO (rounded to the nearest integer).

## Page View and Pricing Totals

The different page view ranges and the corresponding monthly price totals are as follows:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount will be applied to total price.

## Usage

To use the application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to view the application.
6. Adjust the slider to select the desired number of page views.
7. Toggle between monthly and yearly billing to see the discounted prices.
8. Hover over interactive elements to see their states.

## Testing

To run tests, run the command `npm test`

## Design Assets

The designs for this project are provided in JPG static format.

## Technologies Used

- HTML
- CSS
- TypeScript (React)
- Styled-components for styling
- Jest for testing
- RecoilJS for state management
- React Query for data-fetching
