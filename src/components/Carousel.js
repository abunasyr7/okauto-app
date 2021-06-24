const React = require('react');
const ReactDOM = require('react-dom');
const Carousel = require('react-responsive-carousel');

const Slider = () => {
   return (
       <Carousel>
           <div className={banner}></div>
           <div className={banner}></div>
       </Carousel>
   )
}

ReactDOM.render(<Slider />, document.querySelector(".banner"))

export default Slider