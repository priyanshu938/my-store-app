import React from "react";
import Header from "../src/components/Header";
import Items from "../src/components/Items";
import Footer from "../src/components/Footer";
import { useSelector } from "react-redux";
import { incrementOreo, decrementOreo,incrementFive,decrementFive,incrementDark,decrementDark } from "./actions/index";
import img1 from "../src/images/1.jpg"
import img2 from "../src/images/2.jpg"
import img3 from "../src/images/3.jpg"
export default function App() {
  const oreo = useSelector((state) => state.oreo);
  const five_star = useSelector((state) => state.five_star);
  const dark = useSelector((state) => state.dark);
  return (
    <div>
      <Header />

      <div class="container">
        <div class="row">
          <div class="col">
            <Items
           
              name="Oreo"
              img={img1}
              price="Rs 20"
              count={oreo}
              inc={incrementOreo}
              dec={decrementOreo}
            />
          </div>
          <div class="col">
            <Items
           
              name="5 Star Bites"
              img={img2}
              price="Rs 25"
              count={five_star}
              inc={incrementFive}
              dec={decrementFive}
            />
          </div>
          <div class="col">
            <Items
           
              name="Dark Fantasy"
              img={img3}
              price="Rs 30"
              count={dark}
              inc={incrementDark}
              dec={decrementDark}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
