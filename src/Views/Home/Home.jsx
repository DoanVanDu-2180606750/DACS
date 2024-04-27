import React from "react";
import './Home.scss'
import ImageSlider from "../../Components/slidercpn/ImageSlider";
import Slider from "react-slick";


class Home extends React.Component{
    
    render(){
        return(
            
            <div className="slider">
                <ImageSlider></ImageSlider>
            </div>
            
        )
    }
}
export default Home