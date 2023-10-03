import React, { Component } from "react";

// Component exports the Home page structure to be rendered in the 'App' function
export class Business extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <>
                <br />
            <div class="font-a31 text-center fs-1 w3-animate-left"> Business </div>
            <hr/>
            {/* welcome container */}
                <div class="container bg15">
                <div class="container">
                        <div>
                            <div class="container-fluid">
                                <div class="row " >
                                    <div class="col-1 text-right "></div>
                                    <div class="col-10 left font-a21 w3-animate-right">
                                    <p>Are you looking for funding?  Let our skilled professionals assist you with your search.</p>
                                    </div>
                                    <div class="col-1 text-right"></div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            <hr/> 

            <div class="row " >
                    <div class="col-3 text-right ">
                    <div class="font-a11 w3-animate-left">Who are we?</div>
                </div>

            <div class="col-9 left font-a33 w3-animate-right">
                    <p>SandPiper Solutions Inc. is a diversified corporation that assist corporations small or larger businesses with thier dreams to expand or start up.
                    </p>
                    </div>
                    
                   </div>       

                   <div class="row " >
                    <div class="col-3 text-right ">
                    <div class="font-a11 w3-animate-left">What do we do?</div>
                </div>

            <div class="col-9 left font-a33 w3-animate-right">
                    <p>Our administrative and brokerage team are here to help you along the way.  We will search our database of thousands of financial personnel from angel investors, banks and other sources.
                    </p>
                    </div>
                   </div>   

                   <div class="font-a31 text-center fs-1 w3-animate-left"> Our services </div>    
                   <p className="font-a33 w-animate-right mt-2">
                   For a low administrative fee we will set up your file, collect your data and research and search our database that best matches your dreams. When funded, we will take a commission. All funds are in Canadian dollars. Got an idea?  Let us help you, get off the ground.
                   </p>
            </>
        )      
    }
}