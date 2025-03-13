Input

The program type in city and country. AddCity screen show city name and country input field. Similarly, the AddCountry show country name and its currency input field. Once the user submits the form, the entered data is stored in the application's state for later retrieval and display.

Process

The program processes user inputs by saving them in the state using the useState hook (for functional components) or component state (for class-based components). The addCity and addCountry functions handle updating the respective lists. The Cities and Countries screens retrieve the stored data and display it dynamically. Navigation is managed using React Navigation, enabling users to switch between different screens.

Output

The application displays a list of saved cities and countries in the Cities and Countries tabs. Each entry consists of the city-country pair or country-currency pair, allowing users to view their submitted data in an organized format.