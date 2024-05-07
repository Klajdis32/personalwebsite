import './contact.css';
import React, { useState } from 'react';
import Logo from '../assets/imagelogo.png';
import Forma from './Forma';

const Contact = () => {
    const [divsVisible, setDivsVisible] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false
      });

      const [divsClicked, setDivsClicked] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false
      });
    
      const [erVisible, setErVisible] = useState({
        er1: true,
        er2: true,
        er3: true,
        er4: true,
        er5: true
      });

      
      const toggleDivVisibility = (divId) => {
        if (divId === 'div4') {
            setDivsVisible(prevState => ({
                ...prevState,
                div4: !prevState.div4,
                div5: false
            }));
            setErVisible(prevState => ({
                er4: divId !== 'div5',
                er1: divId === 'div4'
            }));
        } else if (divId === 'div5') {
            setDivsVisible(prevState => ({
                ...prevState,
                div4: false,
                div5: !prevState.div5
            }));
            setErVisible(prevState => ({
                er5: divId !== 'div4',
                er1: divId === 'div5'
            }));
        } else {
            setDivsVisible(prevState => ({
                div1: divId === 'div1',
                div2: divId === 'div2',
                div3: divId === 'div3',
                div4: prevState.div4,
                div5: prevState.div5
            }));

            setErVisible(prevState => ({
                er1: divId !== 'div2' && divId !== 'div3',
                er2: divId !== 'div1' && divId !== 'div3',
                er3: divId !== 'div1' && divId !== 'div2',
                er4: divId === 'div1',
                er5: divId === 'div1'
            }));
        }
      };

      const handleCopyEmail = () => {
        const email = 'ktsami@auth.gr';
        navigator.clipboard.writeText(email);

        const paragraph = document.getElementById('tocopy');
        if (paragraph) {
            paragraph.textContent = 'Copied!';
          
            setTimeout(() => {
              paragraph.textContent = 'Click on this message to copy my email';
            }, 2000);
          }
      };

      const handleResetConversation = () => {
        window.location.reload();
      };

      return (
        <div className="container1">
            <div className="online">
                <div className="left-item1">
                    <img src={Logo} alt="" className="tologoAC" />
                    <p><strong>Klajdi Cami</strong></p>
                </div>
                
                <p className='right-item1'right-item1>• Online now</p>
            </div>
            <hr />
            <br />

            <div className="minima" id="mnm1">
                <p>Hello 👋</p>
                <audio autoPlay>
                    <source src="audio/messenger.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <br />
            <div className="minima" id="mnm2">
                <p>How can i help you?</p>
            </div>
            <br />
            <div id="hr1"><p >Choose what you want:</p><hr id="tohr" /><br /></div>
            {erVisible.er1 &&  <div onClick={() => toggleDivVisibility('div1')}> 
                <div className="apathsh" id="ap1" tabIndex="0">
                    <p>I want to contact with you!</p>
                </div>
            
            </div>
            }
            {erVisible.er2 && 
                <div onClick={() => toggleDivVisibility('div2')}> 
                    <div className="apathsh" id="ap2" tabIndex="0">
                        <p>Where else i can find you?</p>
                    </div>
                </div>
            } 
            {erVisible.er3 && 
            <div onClick={() => toggleDivVisibility('div3')}> 
                <div className="apathsh" id="ap3" tabIndex="0">
                    <p>How can i make a personal website like yours personal website like yours?</p>
                </div>
            </div>
            }
            {divsVisible.div1 && 
                <div>
                    <br/><br/><br/>
                    <div id="apantisi1">
                        <div className="minima" id="mnm3">
                            <p>You can communicate with me via email or by filling out a form. Which one do you prefer?</p>
                        </div>
                    </div>
                    <div id="hr1"><p >Choose what you want:</p><hr id="tohr" /><br /></div>
                    {erVisible.er4 &&
                        <div onClick={() => toggleDivVisibility('div4')}>
                            <div className="apathsh" id="ap4" tabIndex="0">
                                <p>I want to contact via Email!</p>
                            </div>
                        </div>
                    }
                  
                    {erVisible.er5 &&
                    <div onClick={() => toggleDivVisibility('div5')}>
                        <div className="apathsh" id="ap5" tabIndex="0">
                            <p>I want to contact via filling out the Form!</p>
                        </div>
                    </div>
                    }
                    {divsVisible.div4 && 
                         <div id="apantisiapomena1">
                            <br /><br /><br />
                            <div className="minima"  id="mnm4">
                                <p>You can contact with me with this email: <strong>ktsami@auth.gr</strong></p>
                            </div>
                            <br/>
                            <div className="minima"  id="mnm5" onClick={handleCopyEmail}>
                                <p><a id="tocopy">Click on this message to copy my email</a></p>
                            </div>
                            <br/>
                            <div className="minima"  id="mnm5">
                                <p>Or you can :</p>
                            </div>
                            <br/>
                            <div className="minima"  id="mnm6">
                                <p><a href="mailto:ktsami@auth.gr" id="toa">Direct contact me from your email app!</a></p>
                            </div>
                            <br/>
                            <div className="apathsh" id="ap6" onClick={handleResetConversation}>
                                <p>reset conversation!</p>
                            </div>
                        </div>
                    }

                    {divsVisible.div5 && 
                        <div id="apantisiapomena2">
                            <br/><br/>
                            <div className="minima"  id="mnm4">
                                <p>Please fill out the form below: </p>
                            </div>
                            <div className="hforma">
                                <Forma />
                            </div>
                   
                            <div className="apathsh" id="ap6" onClick={handleResetConversation}>
                                <p>reset conversation!</p>
                            </div>
                        </div>
                    }

                </div>
            }
        
            {divsVisible.div2 && 
                <div id="apantisiapomena3">
                    <br /><br /><br />
                    <div className="minima"  id="mnm4">
                        <p>You can find me olso on:</p>
                    </div>
                    <br />
                    <div className="minima"  id="mnm5">
                        <p>Github: <a href="https://github.com/Klajdis32" target='_blanck'  id="toa">Klajdis32</a></p>
                    </div>
                    <br />
                    <div className="minima"  id="mnm6">
                        <p>Linkedin: <a href="https://www.linkedin.com/in/klajdi-cami-90a59b284/" target='_blanck'  id="toa">Klajdi Cami</a></p>
                    </div>
                    <br />
                    <div className="apathsh" id="ap6" onClick={handleResetConversation}>
                                <p>reset conversation!</p>
                    </div>
                </div>
            }

            {divsVisible.div3 && 
                <div id="apantisiapomena4">
                    <br/><br/><br/>
                    <div className="minima"  id="mnm4">
                        <p>If you don't know html, css and javascript, you can contact me otherwise if you know programming you will find the code of the specific website on my github:</p>
                    </div>
                    <br />
                    <div className="minima"  id="mnm5">
                        <p><a href="https://github.com/Klajdis32/personalwebsite" target='_blanck' id="toa">https://github.com/Klajdis32/npw</a></p>
                    </div>
                    <br/>
                    <div className="apathsh" id="ap6" onClick={handleResetConversation}>
                                <p>reset conversation!</p>
                    </div>
                </div>   
            }


            
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
  );
};

export default Contact;

