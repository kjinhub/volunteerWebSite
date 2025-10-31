import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "./assets/styles/index.css";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
// star-narae-react/
// ├── index.html
// ├── vite.config.js
// ├── package.json
// ├── public/
// │   └── img/
// │       ├── innerMain.jpeg
// │       ├── innerMain2.jpeg
// │       ├── ...
// │
// ├── src/
// │   ├── assets/
// │   │   └── styles/
// │   │       └── index.css
// │   │
// │   ├── components/
// │   │   ├── Header.jsx
// │   │   ├── Footer.jsx
// │   │   └── Map.jsx
// │   │
// │   ├── pages/
// │   │   ├── Home.jsx
// │   │   ├── StarHello.jsx
// │   │   ├── Inner.jsx
// │   │   ├── Program.jsx
// │   │   ├── Absence.jsx
// │   │   ├── Activity.jsx
// │   │   ├── MealSchedule.jsx
// │   │   ├── Etc.jsx
// │   │   ├── EnvirmentEdu.jsx
// │   │   ├── Membership.jsx
// │   │   ├── Way.jsx
// │   │   ├── SignUp.jsx
// │   │   └── Login.jsx
// │   │
// │   ├── routes/
// │   │   └── AppRouter.jsx
// │   │
// │   ├── App.jsx
// │   └── main.jsx         ← (Vite 진입점)
// │
// └── README.md
