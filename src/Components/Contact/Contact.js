import './contact.css';
import React from 'react';
import Logo from '../../assets/imagelogo.png';

const Contact = () => {

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

    return (
        <div className="toolocont">
            <div className="waveContact">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stopColor="#90ee90"></stop><stop offset="95%" stopColor="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,75 C 56.48643077980074,47.643077980075574 112.97286155960148,20.286155960151156 186,39 C 259.0271384403985,57.713844039848844 348.59498454139475,122.49845413947097 420,154 C 491.40501545860525,185.50154586052903 544.6472002748196,183.720027481965 614,203 C 683.3527997251804,222.279972518035 768.8162143593268,262.62143593266916 846,293 C 923.1837856406732,323.37856406733084 992.0879422878736,343.79422878735835 1055,370 C 1117.9120577121264,396.20577121264165 1174.832016489179,428.20164891789756 1238,455 C 1301.167983510821,481.79835108210244 1370.5839917554104,503.39917554105125 1440,525 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stopColor="#90ee90"></stop><stop offset="95%" stopColor="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,175 C 58.97629680522158,152.35623497080041 117.95259361044316,129.71246994160083 198,145 C 278.04740638955684,160.28753005839917 379.16592236344906,213.5063552043971 442,249 C 504.83407763655094,284.4936447956029 529.3837169357608,302.26210924081073 597,313 C 664.6162830642392,323.73789075918927 775.2992098935074,327.44520783236 850,365 C 924.7007901064926,402.55479216764 963.4194434902097,473.95705942974917 1028,511 C 1092.5805565097903,548.0429405702508 1183.0230161456543,550.7265544486431 1256,564 C 1328.9769838543457,577.2734455513569 1384.4884919271728,601.1367227756784 1440,625 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stopColor="#90ee90"></stop><stop offset="95%" stopColor="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,275 C 56.98728959120578,251.02542081758844 113.97457918241156,227.05084163517688 173,246 C 232.02542081758844,264.9491583648231 293.0889728615596,326.82205427688086 374,356 C 454.9110271384404,385.17794572311914 555.66952937135,381.6609412572999 635,402 C 714.33047062865,422.3390587427001 772.2329096530403,466.53418069391967 828,487 C 883.7670903469597,507.46581930608033 937.3988320164892,504.20233596702167 1003,539 C 1068.6011679835108,573.7976640329783 1146.171762281003,646.6564754379938 1221,684 C 1295.828237718997,721.3435245620062 1367.9141188594986,723.1717622810031 1440,725 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>
            </div>
            <div className="container1">
                <div className="sinomilia">
                    <div className="online">
                        <div className="left-item1">
                            <img src={Logo} alt="Logo" className="tologoAC" />
                            <p>Klajdi</p>
                        </div>
                        <div className="toonline">
                            <p className="right-item1">• Online now</p>
                        </div>
                    </div>
                    <hr />
                    <div className="minima">
                        <p>Hello 👋</p>
                    </div>
                    <div id="hr1">
                        <p className="tochoose">Email</p>
                        <hr id="tohr" />
                    </div>
                    <br/>
                    <div className="minima">
                        <p>My email address is: <strong id='tostrong'>ktsami@auth.gr</strong></p>
                    </div>
                    <br/>
                    <div className="minima" onClick={handleCopyEmail}>
                        <p><a id="tocopy">"Click on this message to copy my email"</a></p>
                    </div>
                    <br/>
                    <div className="minima">
                        <p>Or you can:</p>
                    </div>
                    <br/>
                    <div className="minima">
                        <p><a href="mailto:test@test.com">Directly contact me from your email app!</a></p>
                    </div>
                    <br/>
                    <div id="hr1">
                        <p className="tochoose">Form</p>
                        <hr id="tohr" />
                    </div>
                    <br/>
                    <div className="minima">
                        <p>You can also get in touch by filling out the form below:</p>
                    </div>
                    <br/>
                    <div className="minima">
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd6LOszquAAok0-Lx6nGSRkwJhHvKL77HBuwIyHdkJ3juaj6Q/viewform?embedded=true">https://docs.google.com/forms/....</a></p>
                    </div>
                    <div id="hr1">
                        <p className="tochoose">Encrypted messaging apps</p>
                        <hr id="tohr" />
                    </div>
                    <br/>
                    <div className="minima">
                        <p>You can send me encrypted messages on Signal with username <strong id='tostrong'>klas.40</strong></p>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
