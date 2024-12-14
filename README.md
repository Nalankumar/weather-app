![GitHub License](https://img.shields.io/github/license/Nalankumar/weather-app)

## Weather app
The Weather App provides real-time weather updates for any location. It displays key data, including temperature, humidity, wind speed, and atmospheric pressure, in an intuitive interface. With accurate forecasts and easy navigation, users can stay informed about current conditions and plan their activities effectively, making it a reliable daily companion.

### Table of contents
-[Tech Stack](#tech-stack)
-[Installation](#installation)
-[Contributing](#contributing)
-[License](#license)

### Tech Stack
[![My Skills](https://skillicons.dev/icons?i=react,tailwind,vite)](https://skillicons.dev)

### Installation
Here’s a step-by-step guide to installing and running a React program that fetches data from an API and is hosted on GitHub:

#### 1. **Clone the Repository**
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to store the project.
   - Run the following command to clone the repository:
     ```bash
     git clone https://github.com/Nalankumar/weather-app.git
     ```

#### 2. **Navigate to the Project Directory**
   ```bash
   cd weather-app
   ```

#### 3. **Install Dependencies**
   - Ensure you have Node.js and npm installed. If not, download and install from [Node.js Official Site](https://nodejs.org/).
   - Install the required dependencies using npm or yarn:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn install
     ```

#### 4. **Set Up API Configuration**
   - This project requires an API key or configuration:
   - Visit [Weather api](https://www.weatherapi.com/)
   - Create an account in the weather api website an copy your api key
     - Check for a `.env.example` or similar file in the project.
     - Create a `.env` file in the root directory and add the necessary API keys or variables as instructed in the project README.
     - Type VITE_API_KEY='your_apikey'

#### 5. **Start the Development Server**
   - Run the following command to start the React app:
     ```bash
     npm start
     ```
     or
     ```bash
     yarn start
     ```

#### 6. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173` (or the specified port) to view the app.

#### 7. **Build for Production (Optional)**
   - To create a production-ready build, run:
     ```bash
     npm run build
     ```
     or
     ```bash
     yarn build
     ```

#### Troubleshooting
- If you encounter issues, consult the repository’s README file for specific instructions or dependencies. Ensure your internet connection is stable for API data fetching.

### Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

### License 
This project is licenced under [MIT License](LICENSE)