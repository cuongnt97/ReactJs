import Button from './components/button/Button'
import Modal from './components/modal/Modal'
import TabsEx from './components/tabs/TabsEx'
import ToastsEx from './components/toasts/ToastsEx'
import OffcanvasEx from './components/offcanvas/OffcanvasEx'

function App() {

  return (
    <div className="App">
      {/* <Button value="Launch demo modal"/>
      <Modal /> */}

      <TabsEx />
      <br />
      <br />
      <ToastsEx />
      <br />
      <br />
      <OffcanvasEx/>
    </div>
  );
}

export default App
