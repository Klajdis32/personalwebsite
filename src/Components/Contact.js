import './contact.css';
import React, { useState } from 'react';
import Logo from '../assets/imagelogo.png';
import Forma from './Forma';
import dots from '../assets/dots.gif';

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
            <div className='waveContact'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stop-color="#90ee90"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,75 C 56.48643077980074,47.643077980075574 112.97286155960148,20.286155960151156 186,39 C 259.0271384403985,57.713844039848844 348.59498454139475,122.49845413947097 420,154 C 491.40501545860525,185.50154586052903 544.6472002748196,183.720027481965 614,203 C 683.3527997251804,222.279972518035 768.8162143593268,262.62143593266916 846,293 C 923.1837856406732,323.37856406733084 992.0879422878736,343.79422878735835 1055,370 C 1117.9120577121264,396.20577121264165 1174.832016489179,428.20164891789756 1238,455 C 1301.167983510821,481.79835108210244 1370.5839917554104,503.39917554105125 1440,525 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stop-color="#90ee90"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,175 C 58.97629680522158,152.35623497080041 117.95259361044316,129.71246994160083 198,145 C 278.04740638955684,160.28753005839917 379.16592236344906,213.5063552043971 442,249 C 504.83407763655094,284.4936447956029 529.3837169357608,302.26210924081073 597,313 C 664.6162830642392,323.73789075918927 775.2992098935074,327.44520783236 850,365 C 924.7007901064926,402.55479216764 963.4194434902097,473.95705942974917 1028,511 C 1092.5805565097903,548.0429405702508 1183.0230161456543,550.7265544486431 1256,564 C 1328.9769838543457,577.2734455513569 1384.4884919271728,601.1367227756784 1440,625 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stop-color="#90ee90"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,275 C 56.98728959120578,251.02542081758844 113.97457918241156,227.05084163517688 173,246 C 232.02542081758844,264.9491583648231 293.0889728615596,326.82205427688086 374,356 C 454.9110271384404,385.17794572311914 555.66952937135,381.6609412572999 635,402 C 714.33047062865,422.3390587427001 772.2329096530403,466.53418069391967 828,487 C 883.7670903469597,507.46581930608033 937.3988320164892,504.20233596702167 1003,539 C 1068.6011679835108,573.7976640329783 1146.171762281003,646.6564754379938 1221,684 C 1295.828237718997,721.3435245620062 1367.9141188594986,723.1717622810031 1440,725 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>
            </div>
            <div className='sinomilia'>
                <div className="online">
                    <div className="left-item1">
                        <img src={Logo} alt="" className="tologoAC" />
                        <p><strong>Klajdi</strong></p>
                    </div>
                </div>
                <div className='toonline'>
                    <p className='right-item1'>• Online now</p>
                </div>
                <hr />
                <br />

                <div className="minima" id="mnm1">
                    <p>Hello 👋</p>
                    
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
                {/* {erVisible.er2 && 
                    <div onClick={() => toggleDivVisibility('div2')}> 
                        <div className="apathsh" id="ap2" tabIndex="0">
                            <p>Where else i can find you?</p>
                        </div>
                    </div>
                } 
                {erVisible.er3 && 
                <div onClick={() => toggleDivVisibility('div3')}> 
                    <div className="apathsh" id="ap3" tabIndex="0">
                        <p>How can i make a personal website like yours ?</p>
                    </div>
                </div>
                } */}
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
                            <p>If you don't know html, css and javascript, you can contact me otherwise if you know how to  programm οn your own you will find the code of the specific website on my github repository:</p>
                        </div>
                        <br />
                        <div className="minima"  id="mnm5">
                            <p><a href="https://github.com/Klajdis32/personalwebsite" target='_blanck' id="toa">https://github.com/Klajdis32/personalwebsite</a></p>
                        </div>
                        <br/>
                        <div className="apathsh" id="ap6" onClick={handleResetConversation}>
                                    <p>reset conversation!</p>
                        </div>
                    </div>   
                }

            </div>
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
  );
};

export default Contact;

