import React, {Component} from 'react';

class MegaMenuMobile extends Component {
    constructor() {
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount(){
        this.MegaMenu();
    }

    MegaMenu(){
        let acc = document.getElementsByClassName("accordionMobile");
        let accNum = acc.length;
        let i;
        for(i=0;i<accNum;i++){
            acc[i].addEventListener("click",function (){
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight = panel.scrollHeight+"px"
                }
            })
        }
    }


    render() {
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>



                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/8001/8001980.png" alt=""/> &nbsp;
                        Mens Clothing
                    </button>

                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 1</a></li>
                            <li><a href="#" className="accordionItem"> Man's Tshirt 2</a></li>

                        </ul>

                    </div>

                </div>

            </div>
        );
    }
}

export default MegaMenuMobile;
