import './App.css';
import { Header, CuttingEdge , Features, OurMotto, OurSecret,WhatPeopleSay , TheProcess , ThePeople , TheSupport, OurTech, OurProducts , Products, Footer , RecentWork, NavBar} from './containers/index'

function App() {
    return (
       <div className = "App" >
            <NavBar/>
        <Header / >
        <CuttingEdge / >
            <Features/>
            <OurMotto/>
            <OurSecret/>
            <TheProcess/>
            <ThePeople/>
            <TheSupport/>
            <OurTech/>
            <OurProducts/>
            <RecentWork/>
            <WhatPeopleSay/>
            <Footer/>
           
           
           
         
        </div>
    );
}

export default App;