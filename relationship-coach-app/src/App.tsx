import './styles/main.scss';
import Banner from './components/Banner';
import Video from './components/Video';
import Benifit from './components/Benifit';
import Clifton from './components/Clifton';
import CliftonAlter from './components/CliftonAlter';
import UploadDoc from './components/UploadDoc';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Banner />
      <Video />
      <Benifit />
      <Clifton className="my-custom-class"/>
      <CliftonAlter/>
      <UploadDoc/>
      <Footer/>
    </>
  );
}

export default App;
