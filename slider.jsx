import React from 'react';


export default class Slider2 extends React.Component{
    componentDidMount(){
        setInterval(()=>this.nextSlide(),this.props.time);
    }
    onChildChange(newVal){
        var that=this.this;
        if(newVal=="向左"){
            that.previousSlide()
        }else if(newVal=="向右"){
            that.nextSlide()
        }
    }
    render(){
        var _this = this;
        var slides = this.props.slides;
        var slide=slides.map(function(slide, index, array){
            return(
                <Slide background={slide.background } active={index === _this.state.activeSlide} link={slide.link} key={index} change={_this.onChildChange} this={_this}/>
            )
        })
        return(
            <div className="slider">
                {slide}
                <div className="slider__next" onClick={ev=>{this.nextSlide()}}>
                    <i className="fa fa-4x fa-arrow-circle-right"></i>
                </div>
                <div className="slider__previous" onClick={ev=>{this.previousSlide()}}>
                    <i className="fa fa-4x fa-arrow-circle-left"></i>
                </div>
            </div>
        )
    }
}
export default class Slider extends React.Component {
    constructor(){
        super();
        this.state={
            activeSlide:0,
            this:this
        }
    }
    nextSlide(){
        var slide=this.state.activeSlide + 1 < this.props.slides.length ? this.state.activeSlide + 1 : 0;
        this.setState({
            activeSlide:slide
        });
    }
    prevSlide(){
        var slide=this.state.activeSlide - 1 < 0 ? this.props.slides.length - 1 : this.state.activeSlide - 1;
        this.setState({
            activeSlide:slide
        });
    }
    render() {
        return (
            <div>
                Hello World!!!<br />
                欢迎来到菜鸟教程学习！！！
            </div>
        );
    }
}

export default Slider;