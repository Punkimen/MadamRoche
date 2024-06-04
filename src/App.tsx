import Header from "./components/Header/Header.tsx";
import Welcome from "@/components/Welcome/Welcome.tsx";
import TitleRed from "@/components/TitleRed/TitleRed.tsx";
import Content from "@/components/Content/Content.tsx";
import HomeInterier from "@/components/HomeInterier/HomeInterier.tsx";
import Menu from "@/components/Menu/Menu.tsx";
import Footer from "@/components/Footer/Footer.tsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <TitleRed />
        <Content />
        <HomeInterier />
        <Menu />
      </main>
      <Footer />
    </>
  );
}

export default App;
