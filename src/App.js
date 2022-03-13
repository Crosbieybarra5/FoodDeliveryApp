import "./App.css";

import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import {MenuItems, Items} from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";


function App() {
  const [isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'buger01')
  )
  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive(){
      menuLi.forEach(n => n.classList.remove("active"));
      this.classList.add("active")
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive));

    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard')
    function setMenuCardActive(){
      menuCards.forEach(n => n.classList.remove("active"));
      this.classList.add("active")
    }
    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  }, [isMainData])

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
    (Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      {/* Header section */}
      <Header />

      {/* bottom menu */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
      <main>
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
            <BannerName name={"crosbie"} discount={"20"} link={"#"} />
            <img src="https://imgur.com/sDMcR94.png" alt="" className="deliveryPic" />
          </div>

          

            {/* Dish Container  */}
            <div className="dishContainer">
              <div className="menuCard">
                  <SubMenuContainer name={"Menu Options"}/>
                </div>  
              <div className="rowContainer">

                {
                  MenuItems && MenuItems.map(data => (
                    <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard 
                    imgSrc={data.imgSrc} 
                    name={data.name}
                    isActive = {data.id === '1' ? true : false}
                    />
                    </div>
                  ))
                }

                </div>
              <div className="dishItemContainer">
                {
                  isMainData && isMainData.map(data => (
                    <ItemCard
                    key={data.id}
                    itemId = {data.id}
                     imgSrc={data.imgSrc} name={data.name} ratings={data.ratings} price={data.price}/>
                  ))}
                </div>
              </div>
            </div>
            <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

            <div className="cartCheckoutContainer">
            <SubMenuContainer name={"Carts Items"}/>
              <div className="cartContainer">
              <div className="cartItems">
                <CartItem name={"Burger"}
                imgSrc={"https://imgur.com/qgZ5Teo.png"}
                qty={'4'}
                price={'7.95'}
                />
                </div>
              </div>  

              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ 40.00</span>
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div>
        </div>
        
      </main>
      
    </div>
  );
}

export default App;
