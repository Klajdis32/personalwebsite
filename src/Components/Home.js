import './home.css';
import Logo from '../assets/imagelogo.png';
import React, { useState, useEffect } from "react";
import imgreact from "../assets/react.png";

const Home = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

    useEffect(() => {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    }, []);
  
    useEffect(() => {
      if (selectedLanguage === "en") {
                document.getElementById("en").style.display = "block";
                document.getElementById("gr").style.display = "none";
                document.getElementById("ge").style.display = "none";
                document.getElementById("grname").style.display = "none";
                document.getElementById("enname").style.display = "block";
      } else if (selectedLanguage === "gr") {
                document.getElementById("en").style.display = "none";
                document.getElementById("gr").style.display = "block";
                document.getElementById("ge").style.display = "none";
                document.getElementById("grname").style.display = "block";
                document.getElementById("enname").style.display = "none";
      } else if (selectedLanguage === "ge") {
                document.getElementById("en").style.display = "none";
                document.getElementById("gr").style.display = "none";
                document.getElementById("ge").style.display = "block";
                document.getElementById("grname").style.display = "none";
                document.getElementById("enname").style.display = "block";
      }
    }, [selectedLanguage]);

    return (
    <div className="container">
        <div className="divlogo">
            <img src={Logo} alt="" className="tologo" /><br />
            <h3 id="enname">Klajdi Cami</h3>
            <h3 id="grname">Κλάιντι Τσάμη</h3>
        </div>

        <div className="divkeimeno" id="en"> 
            <p>🎓 Physicist at Aristotle University Of Thessaloniki, 2022 - current (2024) </p>

            <strong>Future subject of employment :</strong>
            <p>I can't choose yet physics has many beautiful paths 🗺️.</p>

            <strong>🧠 Knowledge :</strong>
            <p>I possess an insatiable passion for learning and am always eager to acquire new knowledge. Alongside the fundamental concepts taught in school, I have actively pursued my interests in astronomy 🚀 and computer programming 💻.<br /><br /> In 2021, I participated in the free online astronomy courses offered by the Patras astronomical company Orion and even qualified for the first stage of the Panhellenic Astronomy and Astrophysics Student Competition. I also took part in two other competitions organized by the Greek Physicist Association.
            <br /><br />Furthermore with the help of my brother 🫂 &#40; <a href="https://tsami.gr/" className="toatoykeimenoy">Kristi Cami</a> &#41;, who is studying computer science 👨‍💻 at the same university, and through online resources like Github and videos from YouTube, I have learned the basics of computer languages such as C, Python, Php and JavaScript, and I am also proficient in HTML and CSS. This knowledge has been instrumental in helping me create this webpage.
            <br /><br />
            <div className='ligopiodeksia'>Incidentally from now &#40;04/05/2024&#41; and on, this website has been made with react js <img src={imgreact} alt="reactimg" className="toreact"  /> . You can find the new code on my github repository &#40; <a href='https://github.com/Klajdis32/personalwebsite' target='_blanck' className="toatoykeimenoy" >personal website</a> &#41;.</div>
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
            <p>Δεν μπορώ να διαλέξω ακόμα η φυσική έχει πολλά όμορφα μονοπάτια 🗺️.</p>

            <strong>🧠 Γνώσεις :</strong>
            <p>Διαθέτω ένα ακόρεστο πάθος για μάθηση και είμαι πάντα πρόθυμος να αποκτήσω νέες γνώσεις. Παράλληλα με τις θεμελιώδεις έννοιες που διδάσκονται στο σχολείο, έχω επιδιώξει ενεργά τα ενδιαφέροντά μου στην αστρονομία 🚀 και τον προγραμματισμό υπολογιστών 💻. 
                <br /><br />Το 2021 συμμετείχα στα δωρεάν διαδικτυακά μαθήματα αστρονομίας που προσφέρει η Αστρονομική Εταιρεία Πάτρας Orion και μάλιστα προκρίθηκα στο πρώτο στάδιο του Πανελληνίου Μαθητικού Διαγωνισμού Αστρονομίας και Αστροφυσικής. Πήρα επίσης μέρος σε δύο άλλους διαγωνισμούς που διοργάνωσε η ΄Ενωση Ελλήνων Φυσικών. 
                <br /><br />Επιπλέον, με τη βοήθεια του αδερφού μου 🫂 &#40; <a href="https://tsami.gr/" className="toatoykeimenoy">Kristi Cami</a> &#41;, που σπουδάζει πληροφορική 👨‍💻 στο ίδιο πανεπιστήμιο, και μέσω διαδικτυακών πόρων όπως το Github και μέσω του YouTube, έμαθα τα βασικά των γλωσσών προγραμματισμού όπως C, Python, Php και JavaScript. Γνωρίζω ακόμη Html και Css, αυτή η γνώση με βοήθησε πολύ στο να δημιουργήσω τη συγκεκριμένη ιστοσελίδα. 
                <br /><br />
                <div className='ligopiodeksia'>Παρεμπιπτόντως από σήμερα &#40;04/05/2024&#41; και στο εξής, η συγκεκριμένη σελίδα έχει αναδημιουργηθεί χρησιμοποιώντας react js <img src={imgreact} alt="reactimg" className="toreact"  /> . Μπορείτε να βρείτε τον κώδικα στο github μου και συγκεκριμένα στο repository &#40; <a href='https://github.com/Klajdis32/personalwebsite' target='_blanck' className="toatoykeimenoy" >personal website</a> &#41;.</div>
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
            <p>Ich kann mich noch nicht entscheiden, die Physik hat viele schöne Wege 🗺️.</p>

            <strong>🧠 Wissen :</strong>
            <p>Ich besitze eine unstillbare Leidenschaft für das Lernen und bin stets bestrebt, mir neues Wissen anzueignen. Neben den in der Schule gelehrten Grundkonzepten habe ich mein Interesse an Astronomie 🚀 und Computerprogrammierung 💻 aktiv verfolgt. 
            <br /><br />Im Jahr 2021 nahm ich an den kostenlosen Online-Astronomiekursen teil, die vom patrasischen Astronomieunternehmen Orion angeboten wurden und qualifizierte sich sogar für die erste Stufe des Panhellenischen Studentenwettbewerbs für Astronomie und Astrophysik. Ich habe auch an zwei weiteren Wettbewerben teilgenommen, die von der Griechischen Physikervereinigung organisiert wurden.
            <br /><br />Außerdem mit Hilfe meiner Bruder 🫂 &#40; <a href="https://tsami.gr/" className="toatoykeimenoy">Kristi Cami</a> &#41;, der an derselben Universität Informatik studiert 👨‍💻, und über Online-Ressourcen wie Github und Videos von YouTube, Ich habe die Grundlagen von Computersprachen wie C, Python, Php und JavaScript erlernt und beherrsche außerdem HTML und CSS. Dieses Wissen wurde Er hat mir maßgeblich bei der Erstellung dieser Webseite geholfen.
            <br /><br />
            <div className='ligopiodeksia'>Übrigens ab heute &#40;04.05.2024&#41; und von nun an wurde diese Seite mit React js <img src={imgreact} alt="reactimg" className="toreact" /> neu erstellt. Sie finden den Code auf meinem Github speziell im Repository &#40; <a href='https://github.com/Klajdis32/personalwebsite' target='_blanck' className="toatoykeimenoy" >personal website</a> &#41;.</div>
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
    );

}
 
export default Home; 