import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet, useNavigation } from 'react-router-dom'
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Home() {
  const navigation=useNavigation()
  return (
    <div>
      <Header></Header> 
      {
        navigation.state==="loading"?<LoadingSpinner></LoadingSpinner>:<Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  )
}
