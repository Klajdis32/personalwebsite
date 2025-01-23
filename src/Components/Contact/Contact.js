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

    const handleCopyPgb = () => {
        const pgb = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=OjaR
-----END PGP PUBLIC KEY BLOCK-----
        `;
        navigator.clipboard.writeText(pgb);
    
        const paragraph = document.getElementById('tocopyPgb');
        if (paragraph) {
            paragraph.textContent = 'Copied!';
            setTimeout(() => {
                paragraph.textContent = 'Copy';
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
                        <p><a href="mailto:ktsami@auth.gr">Directly contact me from your email app!</a></p>
                    </div>
                    <br/> <br/>
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
                    <br/> <br/>
                    <div id="hr1">
                        <p className="tochoose">PGP PUBLIC KEY</p>
                        <hr id="tohr" />
                    </div>
                    <br/>
                    <div className="pgb">

                        <div className="pgbDiv" onClick={handleCopyPgb}>
                                <a className="toPgbCopya" id="tocopyPgb">Copy</a>
                        </div>

                    <p>-----BEGIN PGP PUBLIC KEY BLOCK-----
                    <br/><br/>
                    mQINBGeSk/wBEACshHgHJgot3QHGccEmZ8tUiiaQ6N4dyZg4PV3ugxL4Us29oz0P
                    saHs3ADTrfrMk21DTSgtVLM4kMrQF3ETkqAQ7ETxzDisjnor4rM9FvJIcM7skIZw
                    ZQSqZ2HCOicBtY0mPX2O/6O8vdE/PsC6RJ4lhmPlfj/IacKX02VyNvm0hkfUzBvC
                    8GmzzGyN/p7BW8CuCg32FaBV19vjbX9tUNjYGwqAi++0Jd3kij3nLfdcLTVprw20
                    DlkVFR4TXq15tB9WOn2Q/B5WJ2ALE8HoRxamLTsvbBWM/KjBJEY7nDm3X1hB2/ru
                    bm/5eX5ZmHsWsNTG6flpkouGNRFPo+qDPsXAr3ChPOG6Pt2Kg2YpBvg6V3irKSyG
                    Gdi4Ahr6K3foPmYX9Rc5Y0XJFnkmxvK3NZpn5Wgl3OZobMbkO9vd5BPI3QP4YDwy
                    Fm7c4H2Mb4Z89XR6oukRxjFI0JH/JqM9DhjvxorzjdzOMKfnYShrw1A+S7oonl3K
                    3oOT61I0tgjyGz/jbxM6sSS4XJaXsBhGvh3pESWfATp0ReTGuc8mIIGyXoAAlDIQ
                    xaEIjFtJXjx8bqfIuWydzE4b/J45NNMLUz/mNJtnw/K/v6TvRLirZslpBK0mdGSg
                    hwuSBy28+7CAAYtcyQwRZTVd1O/lA80rR/lgQ3+QyuVrVkbEaLWAP5F5bwARAQAB
                    tAhmdWt1bW9zZYkCVAQTAQgAPhYhBGAdZ0KAI5xOj7CsgHPal7mv6vPCBQJnkpP8
                    AhsDBQkHhh4+BQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEHPal7mv6vPCmNYP
                    /3fibn1qAhO/Is5mfD/zeBSY63/KvrbgIavHSdKN3IBClJ+aeFN6yT6r+tI5f1Nr
                    Td4HeZeUnBwYU1mlNljgkBlAVHM3Gmzqj7JqczG8Y+9hBhKE7gvef/Qdu5JUWrlI
                    4NQEomLi9cQDgAmE9qwr+bzq74TYHlV1P5zz2GlORbAg/u2ACGzT0Q2ktlBCH6+M
                    0SVyp7/yei1oUUv6mt9P7QdsTqfT/0e/LDtt/Fp2qLzO/2hD0IGgRtqHbm3U6EIw
                    bEdZFbAOKgJEexpxy3XLZLSbA5ofMurF3Ey9gXR1KREL2kEVHp/gjVBdfQNLm/KZ
                    AYy7T6RcVXMjbC1ijw5wmCVD3jcNkZAy+TyZUSi9L8RibEHt8R9G/YIxA51G4Aze
                    FKM0ysLyfaRAB29VVtp++azd1FTwRPipy4O4/qlCJLSXjGxi32O3AWFG5BbQTnoH
                    QwN7XEXu2w61hCvUjYKjVhHH5yEtkZtvjTwCTF3ahdih8LwaEoqJLRJRRCwm2XVM
                    2//eFyKfxnUE5U8V/Z5dIwhTe8MC21Y5sVHdF2pvtc/S7WzwbESo5XI9U7CBguha
                    ll2k9znjdC9lskbCorDk1zMy5WV5rQKtVD5N+o7IW7JeYPjriK+p8pHJovm/+Ryy
                    xrpXq6OrXCT1Tnq6NWvkKXeQAmutqMHyFA45Q8rJFEh0uQINBGeSk/wBEACxwUCi
                    3B3GAUwpgInKyjzFMYzm7dGatN17q1zQuzWg64+Z+PnvQlkBkfvqigsqxYvCDpDS
                    3AXH3dn+1zfYzZ33yMplkxbfBTVDOzO80aNlU+uIHsXOomvLs+MjPaysoUkLsFr/
                    HK5naFhwdBjcSqSZFrCK29b3Gex86AExb3lHiO9Hcoanu0Z7QBuMYJ8X9Gx9xxjz
                    l3zi25DcJXFcyMk1hSUOhjZMq18qEzDm8l56CxzKr6q8lkPX+dCoG5QS9PJG0Mts
                    4sIDBVEFJfHQA8wmeVAvJtJtQTYAgSwJvgWq9mTDRRAxIAU2rrva8hdhwAdkAypG
                    QYdUffyM/I4W8NGKpc+1qEGSV15QPbAzmTJsvu8Scr46CN0z3yk6qFssz8FGedCQ
                    y5mPxke0Ds2XLA4ChqfjvUHVYaRNzH0ZYEgTt7U3U1YFIYgmEUT9RcK2vEOPqV2P
                    xgRtm8Rpccg8FWrBIkkOm7t8PbP8KMcIddfu0Byr4I9VlXFBCobwGgclT1L5jUNc
                    qinQrYAyB4AUKjnMcHJUWox9xYPJrw8duQxlaCi6JwJYNWSoUhkcxVKzgwSUX7OV
                    bd+mp68dPbRSTkx5+pPMqMTdQ9xIQrftMsnkinuzCDSHW8rlYkqjFe9w/jSDsoM8
                    HhtLz2BfSTF+zGtKPeCBih5Z/Fi4iGrNWq2NvQARAQABiQI8BBgBCAAmFiEEYB1n
                    QoAjnE6PsKyAc9qXua/q88IFAmeSk/wCGwwFCQeGHj4ACgkQc9qXua/q88K4wQ//
                    QGMSqp2pAVqeV84BSn+oOdG5D+0L4Ufk33cLrtXJRCnKruJvZ05sfgtN1rBNojZz
                    xas28JFsaOm9OoBux9yME3Lhi1qKvSTWKOLOwiLYbcl7KO2/FHag3CHC1PFiZtZ3
                    1p5U/YtAxQhnd1YDluql4CsksNbWdLELbornztfIz8xlSoylvegEAIQyptV2Qpts
                    OQ5X9Ow/mMYTuNddf2M2izlM7R9JnHJiost4+ny+loFwNSRnMWdEYRj2l7jRJjLq
                    fR/aoVAHu0KUuyL0prUNIo8mf4cULnpYGLNYu17jTBTw6ZNns7pWcbcsWdS5Ceqm
                    ummEYImJTYrBgl/HuincgG3GBcATHJaonKx+pfPxxq2btKf+VzdmR+u/TaSKCxDU
                    pL3ZG4Uqr0dL0eLmESvC8biO3PYGim8f8Uvc2swrg4v9HMague7MQtzcpf6nufQd
                    asmNY1n4PhRB4Heu60i9UZxM3U87lZi0vDoOoFM+23lDD8uDdE2W5LLrkBR9R6Rw
                    JPtF+syjIOz6suBQ7hvENRAWOmPSV3962OhsgffXvQ3ZtoAcl58QMPfxbWzZgFWL
                    LhZgD9MnZY52YgDzAHWvPdgPwHyJn587oiKgWUBgqOBZZVThLZTcWu2C1wAac0/D
                    FnDT+NF3TQoKDFhWYskGDLFmnh/tVdEMLkL9FGG2h84=
                    =OjaR
                    <br/><br/>
                    -----END PGP PUBLIC KEY BLOCK-----
                    </p>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
