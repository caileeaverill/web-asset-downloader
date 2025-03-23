# **Project Overview**

The **Web Asset Downloader** is a tool built with **React** for the frontend and **Express** for the backend. It allows users to download web assets from a provided URL, with various tools used to enhance functionality such as Axios for making requests, Cheerio for web scraping, and Tailwind for a modern and responsive UI.

This tool is specifically designed to help the content team efficiently batch download files of desired types. By automating the process of scraping and downloading multiple assets from URLs, it saves time and effort, ensuring the team can quickly gather and organize large quantities of content without manual intervention.

Live site: ###

### **Technologies Used:**

**Frontend:**

- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="15"/>  [React](https://reactjs.org/) – For building the user interface
- <img src="
https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" width="15"/>  [Tailwind CSS](https://tailwindcss.com/) – For styling the components and layout
- <img src="https://react-icons.github.io/react-icons/favicon.png" width="15"/>  [React Icons](https://react-icons.github.io/react-icons/) – For adding scalable vector icons to the app

**Backend:**

- <img src="
https://nodejs.org/static/images/favicons/favicon.png" width="15"/>  [Node.js](https://nodejs.org/) – JavaScript runtime used for building the backend
- <img src="https://expressjs.com/images/favicon.png" width="15"/>  [Express](https://expressjs.com/) – A Node.js web framework for handling the server-side functionality


**NPM Packages:**

- <img src="https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" width="15"/>  [Axios](https://axios-http.com/) – For making HTTP requests to fetch assets
- <img src="https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" width="15"/>   [Cheerio](https://cheerio.js.org/) – For parsing and manipulating the HTML data (web scraping)
- <img src="https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" width="15"/>   [Concurrently](https://www.npmjs.com/package/concurrently) – To run multiple npm scripts simultaneously
- <img src="https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" width="15"/>    [Nodemon](https://nodemon.io/) – For automatic server restarts during development

**Testing:**

- <img src="https://jestjs.io/img/jest.png" width="15"/>  [Jest](https://jestjs.io/) – For testing the app’s functionality to ensure everything works correctly

### **Installation**

#### Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js** (v12 or later) – [Download Node.js](https://nodejs.org/)
- **npm** (v6 or later) – npm comes with Node.js

#### Clone the Repository
Start by cloning the repository to your local machine:

```bash
git clone https://github.com/caileeaverill/web-asset-downloader.git
cd website-asset-downloader
```
Install dependencies
```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

### **Usage**
#### Running the App

For **development** (automatically starts both frontend and backend):
```bash
npm start
```

### **Roadmap**

**Image Handling Features**: Intergrate functionality to handle images, including features for **file conversion**, **compression**, and **bulk renaming**. For file conversion, users will be able to convert between various image formats (e.g., PNG to JPEG, BMP to TIFF, etc.). This feature will allow for batch conversion and support common image formats. Additionally, the tool will include **compression** features to reduce image file sizes without significant quality loss, and **bulk renaming** to rename multiple image files at once for easier organization.

**Image Handling Features**: Intergrate functionality to handle images, including features for **file conversion**, **compression**, and **bulk renaming**. This will allow users to convert images between formats (e.g., PNG to JPEG), compress images to reduce file size without losing quality, and rename multiple image files in bulk to improve organization and accessibility.

**AI for File Renaming**: Integrate AI to read and analyze files (such as DOC, PDFs, and PPTX) to scan and rename them with more descriptive, relevant names. The AI will extract text from these files, analyze the content, and generate new file names that are more descriptive, improving file organization and accessibility.

**Desktop App with Electron**: Package the app as a **desktop application** using **Electron**. This will allow users to run the tool on their local machines, providing a more seamless and integrated experience for batch downloading and file renaming, without the need for a browser. Electron will allow me to leverage web technologies like HTML, CSS, and JavaScript while packaging them as a native app for Windows, macOS, and Linux.

### **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
