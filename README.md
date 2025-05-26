# Contentful MovieDB Project

## Overview
Welcome to the Contentful MovieDB Project! This project is a home assignment designed to prepare you for your upcoming technical interview. You will work on identifying and fixing bugs in an existing implementation that allows users to browse and save their favorite films.

The application integrates with the Open Movie Database API and provides three different search pages:
- **Home Page:** Search for all movies and series.
- **Movies Page:** Search for movies only.
- **Series Page:** Search for series only.

Each search displays the top 10 results. Clicking on a result card opens a detailed view with additional information and the option to add/remove the item from a favorites list. The favorites list is accessible via the navigation bar and can be managed from any page.

## Requirements
- **Bug Fixing & Improvements:** Identify and resolve issues in the current implementation.
- **Performance & Accessibility:** Ensure the service provides quick data presentation while maintaining efficient API usage.
- **User Experience:** While design skills are not a primary focus, the application should be user-friendly and responsive.

## Technical Stack
- **State Management:** React Context
- **HTTP Client:** Axios
- **Language:** TypeScript
- **Styling:** CSS Modules
- **UI Components:** Forma36 (company-provided component library)
    - Custom elements/styles may be added if needed
- **Authentication:** No authentication required
- **Additional Dependencies:** Can be installed as needed

## Getting Started
### Prerequisites
Make sure you have the following installed on your system:
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd contentful-moviedb
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   Copy the `.env.example` file to `.env` and add your Open Movie Database API key. You can obtain an API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

### Running the Application
To start the development server:
```sh
npm run dev
# or
yarn dev
```
This will launch the application, and you can access it in your browser at `http://localhost:3000`.

### API Integration
The application fetches movie data from the [Open Movie Database API](https://www.omdbapi.com/). Ensure you have an API key set up in your environment variables:
```sh
VITE_API_TOKEN=<your_api_key>
```

## Development Guidelines
- Ensure the application is accessible and responsive.
- Optimize API calls to prevent unnecessary requests.
- Maintain clean and modular TypeScript code.
- Follow best practices for state management with React Context.

## Testing
While automated testing isn't required, you are encouraged to add unit and integration tests using tools like Jest and React Testing Library.

## Submitting Your Work
- Push your code to a public repository (e.g., GitHub, GitLab, or Bitbucket).
- Share the repository link before your interview.

If you have any questions, feel free to reach out for clarification.

Good luck with your interview!

