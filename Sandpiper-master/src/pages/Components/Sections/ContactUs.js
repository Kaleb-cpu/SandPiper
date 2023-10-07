import MyForm from "./Form.js"
export default function ContactUs(){
        return (
            <>
            <div> 
{/* footer*/}
{/*logo section*/}
    <hr class="hr-a"></hr>
    <footer className="container ">
{/*address section*/}
    <div className="row justify-content-center">
       
        <div className="col-md-2 orderThird">
            <div class="font-a31 fs-3 text-center">Contact Us</div>
        </div>
        
    </div>

    <div className="row justify-content-center bg19">
        <div className="col-md-3 align-self-center orderThird ">
            {/* <img src="/media/logoMain.png" width={"200px"} alt="#"/> */}
        </div>
        <div className="col-sm-5 align-self-center orderFirst">
            <ul className="list-unstyled">
                <li className="mb-2">
                    <div class="font-a21">SandPiper Solutions Inc.</div>
                </li>
                <li className="mb-2 font-a33">
                    Suite 168, 315 -5155 – 130th Avenue S.E.
                </li>
                <li className="mb-2 font-a33">
                    Calgary, Alberta T2Z 0N3
                </li>
                <li className="mb-2 font-a33">Phone: 403-660-1720</li>
                <li className="mb-2 font-a33">
                    Email: solutions.sandpiper@gmail.com
                </li>
            </ul>
            
            <div class="container-fluid ">
                <div class="row " >
                    <div class="col-4 text-center ">
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/sand-piper-147898294/"><img src="/media/linkedin.png" class="img-thumbnail ms-2"  
                        width="40em" height="40em" alt="linkedin"/></a>

<a href="https://www.facebook.com/profile.php?id=61551952056607"><img src="/media/facebook.png" class="img-thumbnail ms-2"  
                        width="40em" height="40em" alt="linkedin"/></a>

<a href="https://www.instagram.com/sandpiper.solutions/"><img src="/media/instagram.png" class="img-thumbnail ms-2"  
                        width="40em" height="40em" alt="linkedin"/></a>
                    </div>
                    <div class="col-4 text-center">
                    </div>
                </div>
            </div>
            
        </div>
{/*Form section*/}
        <div className="col-sm-4 align-self-center orderSecond">
            <MyForm/>
        </div>
        </div>    
        <div>
        </div>
    </footer> 
    </div>
    </>
        );
    }
