import Header from './Header'
import Subnav from './Subnav'
import Sidenav from './Sidenav';
import Main from './Main';
function App(){
  return (
   <>
   <Header />
   <Subnav />
   <div className="for-wrapping">
   <Sidenav />
   <Main />
   </div>
   </>
  );
}

export default App;
