import './home.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/imagelogo.png';
import Logo1 from '../assets/logo1.png';
import React, { useState, useEffect } from "react";
import imgreact from "../assets/react.png";
import contact from "../assets/new-email.png";
import github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme') || 'light');

    useEffect(() => {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      const storedTheme = localStorage.getItem('selectedTheme');

      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }

      if (storedTheme) {
        setSelectedLanguage(storedTheme);
      }
    }, []);
  
    useEffect(() => {
      if (selectedLanguage === "en") {
                document.getElementById("en").style.display = "block";
                document.getElementById("gr").style.display = "none";
                document.getElementById("ge").style.display = "none";
                document.getElementById("grname").style.display = "none";
                document.getElementById("enname").style.display = "block";
                document.getElementById("grcont").style.display = "none";
                document.getElementById("encont").style.display = "block";
      } else if (selectedLanguage === "gr") {
                document.getElementById("en").style.display = "none";
                document.getElementById("gr").style.display = "block";
                document.getElementById("ge").style.display = "none";
                document.getElementById("grname").style.display = "block";
                document.getElementById("enname").style.display = "none";
                document.getElementById("grcont").style.display = "block";
                document.getElementById("encont").style.display = "none";
      } else if (selectedLanguage === "ge") {
                document.getElementById("en").style.display = "none";
                document.getElementById("gr").style.display = "none";
                document.getElementById("ge").style.display = "block";
                document.getElementById("grname").style.display = "none";
                document.getElementById("enname").style.display = "block";
                document.getElementById("grcont").style.display = "none";
                document.getElementById("encont").style.display = "block";
      }

      if (selectedTheme === "light") {
            document.getElementById("logo").style.display = "block";
            document.getElementById("logo1").style.display = "none";
      } else if (selectedTheme === "dark") {
            document.getElementById("logo").style.display = "none";
            document.getElementById("logo1").style.display = "block";
      }

    }, [selectedLanguage]);

    return (
        <div className='toolo'>
        <div className='tawaves'>
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="29%" y1="95%" x2="71%" y2="5%"><stop offset="5%" stop-color="#abb8c3"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,600 L 0,112 C 48.02679491583649,131.9395396770869 96.05358983167298,151.87907935417383 175,153 C 253.94641016832702,154.12092064582617 363.81243558914457,136.42322226039158 442,149 C 520.1875644108554,161.57677773960842 566.6966678117485,204.42803160425973 625,255 C 683.3033321882515,305.57196839574027 753.4008931638613,363.8646513225695 815,385 C 876.5991068361387,406.1353486774305 929.6997595328064,390.1133631054621 1000,407 C 1070.3002404671936,423.8866368945379 1157.8000687049123,473.6818962555823 1234,505 C 1310.1999312950877,536.3181037444177 1375.0999656475437,549.1590518722089 1440,562 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="29%" y1="95%" x2="71%" y2="5%"><stop offset="5%" stop-color="#abb8c3"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,600 L 0,262 C 64.71315699072483,240.31879079354172 129.42631398144965,218.63758158708345 201,244 C 272.57368601855035,269.36241841291655 351.00790106492616,341.7684644452078 411,379 C 470.99209893507384,416.2315355547922 512.5420817588457,418.2885606320852 585,436 C 657.4579182411543,453.7114393679148 760.823771899691,487.07729302645134 832,519 C 903.176228100309,550.9227069735487 942.1628306423911,581.4022672621093 1009,589 C 1075.837169357609,596.5977327378907 1170.5249055307454,581.3136379251116 1247,598 C 1323.4750944692546,614.6863620748884 1381.7375472346273,663.3431810374442 1440,712 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="29%" y1="95%" x2="71%" y2="5%"><stop offset="5%" stop-color="#abb8c3"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,600 L 0,412 C 67.5396770869117,382.02885606320854 135.0793541738234,352.05771212641713 212,373 C 288.9206458261766,393.94228787358287 375.2222603916181,465.79800755754025 444,515 C 512.7777396083819,564.2019924424598 564.0316042597047,590.7502576434216 624,602 C 683.9683957402953,613.2497423565784 752.6513225695637,609.2009618687737 822,623 C 891.3486774304363,636.7990381312263 961.3631054620405,668.445894881484 1023,686 C 1084.6368945379595,703.554105118516 1137.896255582274,707.0154586052903 1206,734 C 1274.103744417726,760.9845413947097 1357.051872208863,811.4922706973548 1440,862 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 300)"></path></svg>
        </div>
        <div className="container">
            <div className="divlogo">
                <div className='left-item9'>
                    <img src={Logo} alt="" className="tologo" id='logo' />
                    <img src={Logo1} alt="" className="tologo" id='logo1' /><br />
                    <h3 id="enname">Klajdi Cami</h3>
                    <h3 id="grname">Κλάιντι Τσάμη</h3>
                </div>
                <div className='todivdeksia'>
                    <Link to="/contact" className='tolink'>
                        <div className='todivdeksia1'>
                            <img src={contact} alt="" id='ligomegalhtero'/><br />
                            <span id="encont">Contact</span>
                            <span id="grcont">Επικοινωνία</span>
                        </div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/klajdi-cami-90a59b284/" target="_blank" className='tolink'>
                    <div className='todivdeksia1' id='oxideksia1'>
                        <img src={Linkedin} alt="" /><br />
                        <span>Linkedin</span>
                    </div>
                    </Link><div id='monokin'><br/><br/></div>
                    <Link to="https://github.com/Klajdis32" target="_blank" className='tolink'>
                    <div className='todivdeksia1' id='oxideksia'>
                        <img src={github} alt="" /><br />
                        <span>Github</span>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="divkeimeno" id="en"> 
                <p>🎓 Physicist at Aristotle University Of Thessaloniki, 2022 - current (2024) </p>

                <strong>Future subject of employment :</strong>
                <p>I can't choose yet physics has many beautiful paths.</p>

                <strong>Knowledge :</strong>
                <p>I possess an insatiable passion for learning and am always eager to acquire new knowledge. Alongside the fundamental concepts taught in school, I have actively pursued my interests in astronomy 🚀 and computer programming 💻.<br /><br /> In 2021, I participated in the free online astronomy courses offered by the Patras astronomical company Orion and even qualified for the first stage of the Panhellenic Astronomy and Astrophysics Student Competition. I also took part in two other competitions organized by the Greek Physicist Association.
                <br /><br />Furthermore with the help of my brother 🫂 &#40; <a href="https://tsami.gr/" className="toatoykeimenoy">Kristi Cami</a> &#41;, who is studying computer science 👨‍💻 at the same university, and through online resources like Github and videos from YouTube, I have learned the basics of computer languages such as C, Python, Php and JavaScript, and I am also proficient in HTML and CSS. This knowledge has been instrumental in helping me create this webpage. Βy the way from now &#40;04/05/2024&#41; and on, this website has been recreated with react js <img src={imgreact} alt="reactimg" className="toreact"  /> . You can find the new code on my <a href='https://github.com/Klajdis32' target='_blanck' className="toatoykeimenoy" >github</a> repository: <a href='https://github.com/Klajdis32/personalwebsite' target='_blanck' className="toatoykeimenoy" >personal website</a>.
                <br />
                <br />Moreover, I enjoy reading books 📚 on a wide range of subjects including physics, economics, science fiction and philosophy.</p>

                <strong>Outside of learning, I enjoy :</strong>
                <p>
                    - 💪 Exercising.<br />
                    - 🛩️ Traveling.<br />
                    - 👥 Spend time with friends.<br />
                </p>

            </div>

            <div className="divkeimeno" id="gr"> 
                <p>🎓 Φυσικός στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, 2022 - σήμερα (2024)</p>

                <strong>Μελλοντικό αντικείμενο απασχόλησης :</strong>
                <p>Δεν μπορώ να διαλέξω ακόμα η φυσική έχει πολλά όμορφα μονοπάτια.</p>

                <strong>Γνώσεις :</strong>
                <p>Διαθέτω ένα ακόρεστο πάθος για μάθηση και είμαι πάντα πρόθυμος να αποκτήσω νέες γνώσεις. Παράλληλα με τις θεμελιώδεις έννοιες που διδάσκονται στο σχολείο, έχω επιδιώξει ενεργά τα ενδιαφέροντά μου στην αστρονομία 🚀 και τον προγραμματισμό υπολογιστών 💻. 
                    <br /><br />Το 2021 συμμετείχα στα δωρεάν διαδικτυακά μαθήματα αστρονομίας που προσφέρει η Αστρονομική Εταιρεία Πάτρας Orion και μάλιστα προκρίθηκα στο πρώτο στάδιο του Πανελληνίου Μαθητικού Διαγωνισμού Αστρονομίας και Αστροφυσικής. Πήρα επίσης μέρος σε δύο άλλους διαγωνισμούς που διοργάνωσε η ΄Ενωση Ελλήνων Φυσικών. 
                    <br /><br />Επιπλέον, με τη βοήθεια του αδερφού μου 🫂 &#40; <a href="https://tsami.gr/" className="toatoykeimenoy">Kristi Cami</a> &#41;, που σπουδάζει πληροφορική 👨‍💻 στο ίδιο πανεπιστήμιο, και μέσω διαδικτυακών πόρων όπως το Github και μέσω του YouTube, έμαθα τα βασικά των γλωσσών προγραμματισμού όπως C, Python, Php και JavaScript. Γνωρίζω ακόμη Html και Css, αυτή η γνώση με βοήθησε πολύ στο να δημιουργήσω τη συγκεκριμένη ιστοσελίδα. Παρεμπιπτόντως από σήμερα &#40;04/05/2024&#41; και στο εξής, η συγκεκριμένη ιστοσελίδα έχει αναδημιουργηθεί χρησιμοποιώντας react js <img src={imgreact} alt="reactimg" className="toreact"  /> . Μπορείτε να βρείτε τον κώδικα στο <a href='https://github.com/Klajdis32' target='_blanck' className="toatoykeimenoy" >github</a> μου και συγκεκριμένα στο repository: <a href='https://github.com/Klajdis32/personalwebsite' target='_blanck' className="toatoykeimenoy" >personal website</a>.
                    <br />
                    <br />Επιπλέον, μου αρέσει να διαβάζω βιβλία 📚 για ένα ευρύ φάσμα θεμάτων, όπως η φυσική, τα οικονομικά, η επιστημονική φαντασία και η φιλοσοφία.
                </p>

                <strong>Εκτός μάθησης, μου αρέσει :</strong>
                <p>
                    - 💪 Η γυμναστική.<br />
                    - 🛩️ Τα ταξίδια.<br />
                    - 👥 Να περνάω χρόνο με φίλους.<br />
                </p>
            </div>

            <div className="divkeimeno" id="ge"> 
                <p>🎓 Physiker an der Aristoteles-Universität Thessaloniki, 2022 – aktuell (2024)</p>

                <strong>Zukünftiges Beschäftigungsthema :</strong>
                <p>Ich kann mich noch nicht entscheiden, die Physik hat viele schöne Wege.</p>

                <strong>Wissen :</strong>
                <p>Ich besitze eine unstillbare Leidenschaft für das Lernen und bin stets bestrebt, mir neues Wissen anzueignen. Neben den in der Schule gelehrten Grundkonzepten habe ich mein Interesse an Astronomie 🚀 und Computerprogrammierung 💻 aktiv verfolgt. 
                <br /><br />Im Jahr 2021 nahm ich an den kostenlosen Online-Astronomiekursen teil, die vom patrasischen Astronomieunternehmen Orion angeboten wurden und qualifizierte sich sogar für die erste Stufe des Panhellenischen Studentenwettbewerbs für Astronomie und Astrophysik. Ich habe auch an zwei weiteren Wettbewerben teilgenommen, die von der Griechischen Physikervereinigung organisiert wurden.
                <br /><br />Außerdem mit Hilfe meiner Bruder 🫂 &#40; <a href="https://tsami.gr/" className="toatoykeimenoy">Kristi Cami</a> &#41;, der an derselben Universität Informatik studiert 👨‍💻, und über Online-Ressourcen wie Github und Videos von YouTube, Ich habe die Grundlagen von Computersprachen wie C, Python, Php und JavaScript erlernt und beherrsche außerdem HTML und CSS. Dieses Wissen wurde Er hat mir maßgeblich bei der Erstellung dieser Webseite geholfen. Übrigens ab heute &#40;04.05.2024&#41; und von nun an wurde diese Seite mit React js <img src={imgreact} alt="reactimg" className="toreact" /> neu erstellt. Sie finden den Code auf meinem <a href='https://github.com/Klajdis32' target='_blanck' className="toatoykeimenoy" >github</a> speziell im Repository: <a href='https://github.com/Klajdis32/personalwebsite' target='_blanck' className="toatoykeimenoy" >personal website</a>.
                <br />
                <br />Außerdem lese ich gerne Bücher zu einem breiten Themenspektrum darunter Physik, Wirtschaftswissenschaften, Science-Fiction und Philosophie.</p>

                <strong>Außerhalb des Lernens macht mir Folgendes Spaß :</strong>
                <p>
                    - 💪 Training.<br />
                    - 🛩️ Reisen.<br />
                    - 👥 Verbringen Sie Zeit mit Freunden.<br />
                </p>
            </div>
            
            <br/><br/><br/><br/>
        </div>
    </div>
    );
}
 
export default Home; 