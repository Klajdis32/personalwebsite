import './contact.css';
import React, { useState } from 'react';
import Logo from '../Assets/imagelogo.png';
import Forma from './Forma';

const Contact = () => {
    

    return (
        <div className="container1">
            <div className="online">
                <div className="left-item">
                    <img src={Logo} alt="" className="tologoA" />
                    <p><strong>Klajdi Cami</strong></p>
                </div>
                <div className="right-item">
                    <p ><strong className='online'>• Online now</strong></p>
                </div>
            </div>
            <hr />

            <br />

            <div className="minima" id="mnm1">
                <p>Hello 👋</p>
                <audio autoplay>
                    <source src="audio/messenger.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <br />
            <div className="minima" id="mnm2">
                <p>How can i help you?</p>
            </div>
            <br />
            <div id="hr1"><p >Choose what you want:</p><hr id="tohr" /><br /></div>
            <div className="apathsh" id="ap1">
                <p>I want to contact with you!</p>
            </div>
            <div id="br1"><br /><br /><br /></div>
            <div className="apathsh" id="ap2">
                <p>Where else i can find you?</p>
            </div>
            <div id="br2"><br /><br /><br /></div>
            <div className="apathsh" id="ap3">
                <p>How can i make a personal website like yours?</p>
            </div>
            <div id="tolodaing1"><img src="images/dots.gif" alt="" className="loading" /></div>
            <div id="apantisi1">
                <div className="minima" id="mnm3">
                    <p>You can communicate with me via email or by filling out a form. Which one do you prefer?</p>
                </div>
            </div>
            <div className="apathsh" id="ap4">
                <p>I want to contact via Email!</p>
            </div>
            <div id="tabr"><br /><br /><br /></div>
            <div className="apathsh" id="ap5">
                <p>I want to contact via filling out the Form!</p>
            </div>
            <div id="tabr2"><br /><br /><br /></div>
            <div id="tolodaing2"><img src="images/dots.gif" alt="" className="loading" /></div>
            <div id="apantisiapomena1">
                <div className="minima"  id="mnm4">
                    <p>You can contact with me with this email: <strong>ktsami@auth.gr</strong></p>
                </div>
                <br />
                <div className="minima"  id="mnm5">
                    <p><a id="tocopy">Click on this message to copy my email</a></p>
                </div>
                <br />
                <div className="minima"  id="mnm5">
                    <p>Or you can :</p>
                </div>
                <br />
                <div className="minima"  id="mnm6">
                    <p><a href="mailto:ktsami@auth.gr">Direct contact me from your email app!</a></p>
                </div>
            </div>
            <div id="tolodaing3"><br /><br /><img src="images/dots.gif" alt="" className="loading" /></div>
            <div id="apantisiapomena2">
                <br /><br />
                <div className="minima"  id="mnm4">
                    <p>Please fill out the form below: </p>
                </div>
                <div className="hforma">
                    <Forma />
                </div>
            </div>
            <div id="tolodaing4"><img src="images/dots.gif" alt="" className="loading" /></div>
            <div id="apantisiapomena3">
                <div className="minima"  id="mnm4">
                    <p>You can find me olso on:</p>
                </div>
                <br />
                <div className="minima"  id="mnm5">
                    <p>Github: <a href="https://github.com/Klajdis32" >Klajdis32</a></p>
                </div>
                <br />
                <div className="minima"  id="mnm6">
                    <p>Linkedin: <a href="https://www.linkedin.com/in/klajdi-cami-90a59b284/" >Klajdi Cami</a></p>
                </div>
            </div>
            <div id="tolodaing5"><img src="images/dots.gif" alt="" className="loading" /></div>
            <div id="apantisiapomena4">
                <div className="minima"  id="mnm4">
                    <p>If you don't know html, css and javascript, you can contact me otherwise if you know programming you will find the code of the specific website on my github:</p>
                </div>
                <br />
                <div className="minima"  id="mnm5">
                    <p><a href="https://github.com/Klajdis32/npw" >https://github.com/Klajdis32/npw</a></p>
                </div>
        
            </div>
            <div className="apathsh" id="ap6">
                <p>reset conversation!</p>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}
 
export default Contact; 