import './contact.css';
import { useState } from "react";
import Logo from '../../assets/imagelogo.png';

const Contact = () => {
    const [showPGP, setShowPGP] = useState(false);

    const togglePGP = () => {
        setShowPGP(prev => !prev);
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

    const handleCopyPgb = () => {
        const pgb = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGeTcekBEADgeUSDEcqoG1K3vDJZOhvxHLPZWplT3MLguckeQL8/zW7Vrbxh
oMs/3jiGJfL+EbioQK9bWz5/SEyolD+pDQ9bV8cBZvvThROb1QvjusrhrCIXoEJn
0JuvFVRBPmN0Sge0QGivBOz/IwK5w5v1UcU3AMgFc/J6UKCl93/OUVcVm6EUItqH
wjcmkhZ7hF9eOqdRHOk67Bdoff3WxrdKFWeWysreVCLy7o2HsoCK94iMhsEat0Fq
C0A7N3WFEv55ffJlyPvjvGIWmIND4RAmS9q0NDnJvx4Y6RoAN6FRrIB5MdEKskag
vZjf8xpqqOWwBtewDrnQvIUgSjm2EhwSGs+3eddLhwCO+YBpXShSwTUORf2KH+p/
l6UZedzetlwz7//uFGDfPyaW4tyvFZPP1Jfo44rQQfxg+GjtkId199BCQkOMJ6ZD
ZdUkszRbku4KovRWNjo4J8DNYVujFWXSRmZO5fQLO5EcWa3Jm38wVdKPqwPilg9C
IxiYNYlXKLgvEeKuY1thHQok4jeHH12F7kMrIKyfRN5NVKZ+H1IejokTipItd23A
bggHPBrC+lOd1UFiaxRppYDjkXCOm+GM2Lx3SFlEIORgnGCVxMRQ2YJXz7pBO+oG
260eMPiy0dlG8R5i81NdaBAPyhz4Defc6HJNp8hxFLEIHPh9UBSbgcLc6wARAQAB
tAZrbGF1c3OJAlQEEwEIAD4WIQRbbIARxHAM3Y2eso2dV9OPSXCsUQUCZ5Nx6QIb
AwUJB4Ye8gULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRCdV9OPSXCsUWaLD/wL
C1Sf958LQrN/obcO9qexYb4hkCNDNsO+UBOTov14e6aINyKYYIArdgZKqAoIStHs
GLx1n+WQol8pH9GYsBdy3+JSmOs7Fa5XKfZw3ucdDIj6o4uPh1/ktpbUvy6Q+m28
r2T7fWnDZFcR8R+3Ws5oHjzd6p3YoKUj09zAnPLwn79wBIMvuO8CjnU7SuGPThng
UCVHstRUgg/dBtj5LwPRj0kOurUQeBUHGB4EC/tLsfLG3o1GKhPu3fl13+9qk315
Haz82wEfDoce7CI9z6pj8k6SylJtBnFfp6NfDz5fRb/yixFxmsp5C40ZYo2GMl2y
GkzURo3llltSAO8Lg2Nbv+G6arV0AfPltH3TGeoRSpSFx54IUvosFR+kzYI1Ejl9
k4+6sC8+OTvgWfsINwXEsgBUqTUj+tQv/C+mgzFT6b+/rSpBUBDlt49EMpKW8bsg
bDekZzE59W2yVNFYbnp2h9hCGXcaa7ZhTARPPCnGBA7A1wgLv6u3bKuoDJjBiQz0
s7FyxdEbF6JLhQS1mFuiI1yG4Eg0oh1N10Ig6rl9zBLV/W6ZiwUyl7aFdk6vM7SA
9sFXoc6SxKWhCtla3pW4iRvOGgXo33bJ1UhQcKeoTdon8lECIDdSrZhGNsB50l7T
PWfBdqY9HpTkbBzyez7MhY2wiLx9r1Yuc3I36J6HK7kCDQRnk3HpARAAy33RsYGv
/NzaNed0f0rH1SAiefspERamjIVmE75228jdO+SOfc/KKYE9Hey1ADA623gamp2h
5mKrJcIA3kRKlVcXt15e/qQmQ2Syf68Aw7dSC6v8+1thmvz2TEwaToZBwfjhYbUC
nyELvjoQ3Yq+Df8djfL/CsgIA0briK3waRtP6jv/A00eczm0py5Y0Yip3RF/PXwr
rElL5cNKWRMWmj1WEnjkM3i45s2mGFKS4CxjhYr4X3eOrzz9sgFWmxIpkrD7M/u/
egUQR4pICNRKL4kkNDckG9avaXnEx4x423UgY0OmLIbUUj0soD0B25OYIUNgZuIU
vrDIpTJ3sLOcYE6HpGq157ouuIquvdX4t0dfO8RncDYdD5cCD8RA/ywfpI0Ujf3l
502NK9st4Ty8HpIdrcQgYMvahZHiLImB3AZuDFZYakl1vVZyIzsSxRLwZZG08HYG
UAILAH2o56HEvrWQ20M0ahq5u2caHeQ3M3YPk9XzxHk3Ms+a7rbhsI+4Jv1/9+cS
rnKFxqUv/l4fcbeJOEeI/0N2s3+wXqyiZC2y3xGoh+K4O1sofMPO1H2vu11fOCOe
mTAuf9PHgT31s4c6vMVsQmL163tDP/FnYf7mZONZtxLE/nOT377Lh6ix3120v413
YvjtXsKXc+72MILAfzFzpAX6tyU2iUmpuS8AEQEAAYkCPAQYAQgAJhYhBFtsgBHE
cAzdjZ6yjZ1X049JcKxRBQJnk3HpAhsMBQkHhh7yAAoJEJ1X049JcKxRdEsP/RoI
0YZV8qPsbSmYC8Y5VuFv50oCvb/Xu8U6qAv8olmpe0dtuc8daVfFGKzLXBghX4kY
ne0gBK9ZaLL/GEpTtEyaYwudDaPeXfLFTXkumhpiaCC3BgMuOHOgf2X+aZRzZL0o
btYs+YqNFfe58h5Ji3zb5S4BIZIpcfwLfB0dV3g1vQGPQcksn+0Sqmbuv9DcscD4
C5IRuMwXxe3MCDQ8D7Iq1BHWIqGmksyldd6WLebwz+4/zL2H+hRcTYYExFcs4YtI
C2bwWSJ0p9d2j88BAlVAZ99BmmchhSX4SgUXswBN7lLZTrXt7SkOrIKllEUAtCxs
TjcB7itfq5K9vl/4Ns05XiBqPkYKHDqNO7q+sYKV9qASLMlQ9IeW8nDuY8ahf/fQ
yvSZM91AKLU90r16qLhw7ER52cqC5ZYyVp7bYPD3ALAfqZQ9rTo1pEiSkmm0MDS+
IvVuUHhRRbr4GqJwclFWsY+Qf6B78QGcMnFSMdtxkjeMyKxw0ZmWOMzyDI00wtIz
yfQO1vOO2AUXBPZZVfhWRvg39gPI7F4mIWnWKEp7e7ZIWqZ0SDuG/HTPDmGLMIOE
S1MW2HTyhc7jUeBRO+qugzr7HSO8FBRti+AVuYnAhaXtbzu8qPKF4fEqITco3bEH
H88/ipfuN6yjAkGimELuusKwuQeS+VR9GuZoYYxf
=GPoa
-----END PGP PUBLIC KEY BLOCK-----`;
        navigator.clipboard.writeText(pgb);
    
        const paragraph = document.getElementById('tocopyPgb');
        if (paragraph) {
            paragraph.textContent = 'Copied!';
            setTimeout(() => {
                paragraph.textContent = 'Copy PGP';
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
                    <div className="pgbDiv">
                        <a className="toPgbCopya" id="tocopyPgb" onClick={handleCopyPgb}>Copy PGP</a>
                    </div>
                    <div className="toshow">
                        <a onClick={togglePGP}>
                            {showPGP ? "Hide PGP" : "Show PGP"}
                        </a>
                    </div>

                    {showPGP && (
                    <div className="pgb">
                    <p>-----BEGIN PGP PUBLIC KEY BLOCK-----
                    <br/><br/>
                    mQINBGeTcekBEADgeUSDEcqoG1K3vDJZOhvxHLPZWplT3MLguckeQL8/zW7Vrbxh
                    oMs/3jiGJfL+EbioQK9bWz5/SEyolD+pDQ9bV8cBZvvThROb1QvjusrhrCIXoEJn
                    0JuvFVRBPmN0Sge0QGivBOz/IwK5w5v1UcU3AMgFc/J6UKCl93/OUVcVm6EUItqH
                    wjcmkhZ7hF9eOqdRHOk67Bdoff3WxrdKFWeWysreVCLy7o2HsoCK94iMhsEat0Fq
                    C0A7N3WFEv55ffJlyPvjvGIWmIND4RAmS9q0NDnJvx4Y6RoAN6FRrIB5MdEKskag
                    vZjf8xpqqOWwBtewDrnQvIUgSjm2EhwSGs+3eddLhwCO+YBpXShSwTUORf2KH+p/
                    l6UZedzetlwz7//uFGDfPyaW4tyvFZPP1Jfo44rQQfxg+GjtkId199BCQkOMJ6ZD
                    ZdUkszRbku4KovRWNjo4J8DNYVujFWXSRmZO5fQLO5EcWa3Jm38wVdKPqwPilg9C
                    IxiYNYlXKLgvEeKuY1thHQok4jeHH12F7kMrIKyfRN5NVKZ+H1IejokTipItd23A
                    bggHPBrC+lOd1UFiaxRppYDjkXCOm+GM2Lx3SFlEIORgnGCVxMRQ2YJXz7pBO+oG
                    260eMPiy0dlG8R5i81NdaBAPyhz4Defc6HJNp8hxFLEIHPh9UBSbgcLc6wARAQAB
                    tAZrbGF1c3OJAlQEEwEIAD4WIQRbbIARxHAM3Y2eso2dV9OPSXCsUQUCZ5Nx6QIb
                    AwUJB4Ye8gULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRCdV9OPSXCsUWaLD/wL
                    C1Sf958LQrN/obcO9qexYb4hkCNDNsO+UBOTov14e6aINyKYYIArdgZKqAoIStHs
                    GLx1n+WQol8pH9GYsBdy3+JSmOs7Fa5XKfZw3ucdDIj6o4uPh1/ktpbUvy6Q+m28
                    r2T7fWnDZFcR8R+3Ws5oHjzd6p3YoKUj09zAnPLwn79wBIMvuO8CjnU7SuGPThng
                    UCVHstRUgg/dBtj5LwPRj0kOurUQeBUHGB4EC/tLsfLG3o1GKhPu3fl13+9qk315
                    Haz82wEfDoce7CI9z6pj8k6SylJtBnFfp6NfDz5fRb/yixFxmsp5C40ZYo2GMl2y
                    GkzURo3llltSAO8Lg2Nbv+G6arV0AfPltH3TGeoRSpSFx54IUvosFR+kzYI1Ejl9
                    k4+6sC8+OTvgWfsINwXEsgBUqTUj+tQv/C+mgzFT6b+/rSpBUBDlt49EMpKW8bsg
                    bDekZzE59W2yVNFYbnp2h9hCGXcaa7ZhTARPPCnGBA7A1wgLv6u3bKuoDJjBiQz0
                    s7FyxdEbF6JLhQS1mFuiI1yG4Eg0oh1N10Ig6rl9zBLV/W6ZiwUyl7aFdk6vM7SA
                    9sFXoc6SxKWhCtla3pW4iRvOGgXo33bJ1UhQcKeoTdon8lECIDdSrZhGNsB50l7T
                    PWfBdqY9HpTkbBzyez7MhY2wiLx9r1Yuc3I36J6HK7kCDQRnk3HpARAAy33RsYGv
                    /NzaNed0f0rH1SAiefspERamjIVmE75228jdO+SOfc/KKYE9Hey1ADA623gamp2h
                    5mKrJcIA3kRKlVcXt15e/qQmQ2Syf68Aw7dSC6v8+1thmvz2TEwaToZBwfjhYbUC
                    nyELvjoQ3Yq+Df8djfL/CsgIA0briK3waRtP6jv/A00eczm0py5Y0Yip3RF/PXwr
                    rElL5cNKWRMWmj1WEnjkM3i45s2mGFKS4CxjhYr4X3eOrzz9sgFWmxIpkrD7M/u/
                    egUQR4pICNRKL4kkNDckG9avaXnEx4x423UgY0OmLIbUUj0soD0B25OYIUNgZuIU
                    vrDIpTJ3sLOcYE6HpGq157ouuIquvdX4t0dfO8RncDYdD5cCD8RA/ywfpI0Ujf3l
                    502NK9st4Ty8HpIdrcQgYMvahZHiLImB3AZuDFZYakl1vVZyIzsSxRLwZZG08HYG
                    UAILAH2o56HEvrWQ20M0ahq5u2caHeQ3M3YPk9XzxHk3Ms+a7rbhsI+4Jv1/9+cS
                    rnKFxqUv/l4fcbeJOEeI/0N2s3+wXqyiZC2y3xGoh+K4O1sofMPO1H2vu11fOCOe
                    mTAuf9PHgT31s4c6vMVsQmL163tDP/FnYf7mZONZtxLE/nOT377Lh6ix3120v413
                    YvjtXsKXc+72MILAfzFzpAX6tyU2iUmpuS8AEQEAAYkCPAQYAQgAJhYhBFtsgBHE
                    cAzdjZ6yjZ1X049JcKxRBQJnk3HpAhsMBQkHhh7yAAoJEJ1X049JcKxRdEsP/RoI
                    0YZV8qPsbSmYC8Y5VuFv50oCvb/Xu8U6qAv8olmpe0dtuc8daVfFGKzLXBghX4kY
                    ne0gBK9ZaLL/GEpTtEyaYwudDaPeXfLFTXkumhpiaCC3BgMuOHOgf2X+aZRzZL0o
                    btYs+YqNFfe58h5Ji3zb5S4BIZIpcfwLfB0dV3g1vQGPQcksn+0Sqmbuv9DcscD4
                    C5IRuMwXxe3MCDQ8D7Iq1BHWIqGmksyldd6WLebwz+4/zL2H+hRcTYYExFcs4YtI
                    C2bwWSJ0p9d2j88BAlVAZ99BmmchhSX4SgUXswBN7lLZTrXt7SkOrIKllEUAtCxs
                    TjcB7itfq5K9vl/4Ns05XiBqPkYKHDqNO7q+sYKV9qASLMlQ9IeW8nDuY8ahf/fQ
                    yvSZM91AKLU90r16qLhw7ER52cqC5ZYyVp7bYPD3ALAfqZQ9rTo1pEiSkmm0MDS+
                    IvVuUHhRRbr4GqJwclFWsY+Qf6B78QGcMnFSMdtxkjeMyKxw0ZmWOMzyDI00wtIz
                    yfQO1vOO2AUXBPZZVfhWRvg39gPI7F4mIWnWKEp7e7ZIWqZ0SDuG/HTPDmGLMIOE
                    S1MW2HTyhc7jUeBRO+qugzr7HSO8FBRti+AVuYnAhaXtbzu8qPKF4fEqITco3bEH
                    H88/ipfuN6yjAkGimELuusKwuQeS+VR9GuZoYYxf
                    =GPoa
                    <br/><br/>
                    -----END PGP PUBLIC KEY BLOCK-----
                    </p>
                    </div>
                    )}
                    <br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
