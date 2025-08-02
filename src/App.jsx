import { BrowserRouter, Route, Routes } from "react-router";
import { StickyNote } from "./pages/sticky-note";
import { MainLayout } from "./layouts/main-layout";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<h1 className="h-screen" />} />
          <Route path="/sticky-note" element={<StickyNote />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
