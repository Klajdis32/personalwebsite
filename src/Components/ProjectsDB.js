import Plank from "../attachments/pdfs/Planck.pdf";
import MaPass from "../attachments/pdfs/MaPass.pdf";
import oscilloscope from "../attachments/pdfs/oscilloscope.pdf";
import SimulationOfLinearMotion from "../attachments/pdfs/SimulationOfLinearMotion.pdf";
import SpecificHeatOfMaterials from "../attachments/pdfs/SpecificHeatOfMaterials.pdf";
import Ultrasound from "../attachments/pdfs/Ultrasound.pdf";
import UsefulElectricalCircuits from "../attachments/pdfs/UsefulElectricalCircuits.pdf";
import Thermioniki from "../attachments/pdfs/Θερμιονική Εκπομπή Ηλεκτρονίων.pdf";
import Thevenin_Norton from "../attachments/pdfs/Θεώρημα Thevenin - Norton.pdf";
import MegistiMetaforaIsxyos from "../attachments/pdfs/Θεώρημα Μέγιστης Μεταφοράς Ισχύος .pdf";
import MetasxhmatismosDseY from "../attachments/pdfs/Κύκλωμα Γέφυρας – Μετασχηματισμοί Δ ↔ Υ.pdf";
import Logose_m from "../attachments/pdfs/Λόγος e πρός m.pdf";
import Palmografos from "../attachments/pdfs/Μέτρηση Τάσεων Mε Παλμογράφο.pdf";
import Kirchhoff_dierethsTashs from "../attachments/pdfs/Νόμοι Kirchhoff - Διαιρέτης Τάσης.pdf";
import Perithlasi_e from "../attachments/pdfs/Περίθλαση Ηλεκτρονίων.pdf";
import Sintonismos from "../attachments/pdfs/Συντονισμός Σειράς – Παράλληλος.pdf";
import SixnotikhApokrisi from "../attachments/pdfs/Συχνοτική Απόκριση Φίλτρων.pdf";
import KiklomaDiaforisis from "../attachments/pdfs/Τετράπολα - Κυκλώματα Διαφόρισης .pdf";
import VideoMaPass from "../attachments/videos/Mapass.mp4";
import VideoAthlisoy from "../attachments/videos/athlisoy.mp4";
import Aluzip from "../attachments/files/ALU.zip";

const posts = [
    // {
    //     Ergastirio: "",
    //     image: "", 
    //     Titlos: "", 
    //     Sigrafeas: "", 
    //     Linksigrafea: "",  
    //     Date: "",
    //     Katigoria: "", 
    //     Keimeno: "",
    //     Link: "" ,
    //     pdf: "",
    //     file: "",
    //     video: ""
    // },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Athlisoy App, Kotlin", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "09/05/2024",
        Katigoria: "Programming", 
        Keimeno: "Η εφαρμογή Athlisoy είναι ένας πλήρως ενοποιημένος και εξελιγμένος κατάλογος για όσους αγαπούν τη φυσική δραστηριότητα και την υγιεινή ζωή, σχεδιασμένη και αναπτυγμένη με τη χρήση της γλώσσας προγραμματισμού Kotlin. Μέσα από την εφαρμογή, οι χρήστες μπορούν να ανακαλύψουν μια ποικιλία ασκήσεων, από βασικές μέχρι προχωρημένες, συνοδευόμενες από εξειδικευμένα βίντεο και επεξηγήσεις για να διευκολύνουν την κατανόηση και τη σωστή εκτέλεσή τους. Επιπλέον, η εφαρμογή παρέχει προσαρμοσμένες συμβουλές διατροφής και σχεδίων διατροφής, προσφέροντας έναν ολοκληρωμένο οδηγό για την επίτευξη των ατομικών φυσικών στόχων. Επίσης, σημειώνεται ότι η εφαρμογή δεν έχει ακόμη ανέβει σε κάποια πλατφόρμα και δεν είναι διαθέσιμη για λήψη. Ωστόσο, μπορείτε να βρείτε ένα απόσπασμα βίντεο από την εφαρμογή παρακάτω.",
        Link: "" ,
        pdf: "",
        file: "",
        video: VideoAthlisoy
    },
    {
        Ergastirio: "Εργαστήριο Ατομικής Φυσικής",
        image: "", 
        Titlos: "Μέτρηση σταθεράς του Planck", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "25/04/2024",
        Katigoria: "Physics", 
        Keimeno: "Η εργαστηριακή άσκηση που ακολουθεί πραγματοποιήθηκε με απώτερο σκοπό τον προσδιορισμό της σταθεράς του Plank χρησιμοποιώντας ως μέθοδο προσδιορισμού το φωτοηλεκτρικό φαινόμενο. Το φωτοηλεκτρικό φαινόμενο είναι ένα φυσικό φαινόμενο όπου η έκθεση μιας επιφάνειας ενός υλικού (συνήθως μετάλλου) σε φως προκαλεί την εκπομπή ηλεκτρονίων από την επιφάνεια του. Ουσιαστικά, όταν ένα φωτόνιο (κβάντο) χτυπά ένα υλικό, μπορεί να μεταδώσει αρκετή ενέργεια στα ηλεκτρόνια του υλικού, ώστε να τα απελευθερώσει από την επιφάνεια. Μελετώντας το φαινόμενο αυτό μέσω μιας κατάλληλης πειραματικής διάταξης και έχοντας κάνει την μαθηματική ανάλυση του φαινομένου και έχοντας αντλήσει τα κατάλληλα πειραματικα δεδομένα θα μπορέσουμε τελικά να προσδιορίσουμε την σταθερά αυτή με μεγάλη ακρίβεια. Χρειάζεται να τονιστεί ότι η σταθερά του Plank υπεισέρχεται σε πολλούς τύπους στην κβαντική φυσική γι’ αυτό και ο προσδιορισμός της είναι μεγάλης σημασίας.",
        Link: "" ,
        pdf: Plank,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ατομικής Φυσικής",
        image: "", 
        Titlos: "Θερμιονική Εκπομπή Ηλεκτρονίων", 
        Sigrafeas: "Me", 
        Linksigrafea: "",   
        Date: "18/04/2024",
        Katigoria: "Physics", 
        Keimeno: "Η εργαστηριακή άσκηση που ακολουθεί πραγματοποιήθηκε με απώτερο σκοπό την μελέτη του φαινομένου της θερμιονικής εκπομπής, δηλαδή της εκπομπής ηλεκτρονίων από τα μέταλλα όταν αυτά θερμαίνονται σε υψηλές θερμοκρασίες. Πρακτικά αυτό που θα επιχειρήσουμε να κάνουμε είναι έχοντας θερμάνει ένα μέταλλο να παρατηρήσουμε πόσα ηλεκτρόνια διαφεύγουν από αυτό (μέσω της ανίχνευσης ηλεκτρικού ρεύματος) και έπειτα θα προσπαθήσουμε να βρούμε σύμφωνα με τα πειραματικα δεδομένα την σχέση που συνδέει το ρεύμα συνάρτηση της θερμοκρασίας ώστε να διαβεβαιώσουμε η να διαψεύσουμε αν η σχέση αυτή είναι ίδια με αυτή της βιβλιογραφίας. Η κατανόηση αυτού του φαινομένου μας εισάγει στην κβαντομηχανική και τη θεωρία των στερεών, ενώ έχει εφαρμογές σε πολλούς τομείς, από την ηλεκτρονική έως την ενεργειακή βιοχημεία. Συνεπώς, η εργαστηριακή αυτή άσκηση αποτελεί ένα σημαντικό βήμα προς την κατανόηση των φυσικών αρχών που διέπουν τη συμπεριφορά των μετάλλων και τη χρήση τους σε πρακτικές εφαρμογές.",
        Link: "" ,
        pdf: Thermioniki,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ατομικής Φυσικής",
        image: "", 
        Titlos: "Μέτρηση μάζας ηλεκτρόνιου", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "11/04/2024",
        Katigoria: "Physics", 
        Keimeno: "Η εργαστηριακή άσκηση που ακολουθεί αποτελεί μια σημαντική προσπάθεια να υπολογίσουμε πειραματικα την μάζα του ηλεκτρονίου. Επειδή δεν είναι δυνατό να υπολογιστεί απευθείας μέσω πειραματικών μεθόδων και διατάξεων λόγο της τάξης μεγέθους της ( 10^−31 ), και καθώς γνωρίζουμε το φορτίο του ηλεκτρονίου από προηγούμενα πειράματα, προβαίνουμε στον υπολογισμό του λόγου e/m ο οποίος είναι δυνατόν να μετρηθεί μέσω μιας ιδικής πειραματικής διάταξης. Τελικά με τη βοήθεια αυτού του λόγου και γνωρίζοντας το φορτίο μπορούμε να υπολογίσουμε με μεγάλη ακρίβεια και τη μάζα του ηλεκτρονίου. Η μελέτη του ηλεκτρονίου αποτελεί έναν θεμελιώδη πυλώνα στον τομέα της φυσικής και της επιστήμης γενικότερα. Το ηλεκτρόνιο αποτελεί ένα σημαντικό σωματίδιο, το οποίο διαφοροποιείται από άλλα, όπως το πρωτόνιο και το νετρόνιο, καθώς δεν αποτελείται από άλλα υποσωματίδια. Η μελέτη του ηλεκτρονίου είναι βασική για την κατανόηση των ιδιοτήτων των στοιχειωδών σωματιδίων και της συμπεριφοράς τους σε διάφορες συνθήκες. Επομένως, η μελέτη του ηλεκτρονίου είναι ζωτικής σημασίας για την επιστημονική μας πρόοδο και την κατανόηση του κόσμου που μας περιβάλλει.",
        Link: "" ,
        pdf: Logose_m,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ατομικής Φυσικής",
        image: "", 
        Titlos: "Απόδειξη της κυματικής φύσης των ηλεκτρόνιων", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "04/04/2024",
        Katigoria: "Physics", 
        Keimeno: "Η εργαστηριακή άσκηση που ακολουθεί αποτελεί μια σημαντική προσπάθεια να διερευνήσουμε την κυματική φύση του ηλεκτρονίου, επικεντρώνοντας την προσοχή μας στο κυματικό φαινόμενο της περίθλασης και τη χρήση του ως εργαλείο για την απόδειξη της φύσης αυτής. Θα προσπαθήσουμε δηλαδή να κατανοήσουμε πώς το ηλεκτρόνιο συμπεριφέρεται ως μια κυματική οντότητα και πώς αυτή η κυματική φύση επηρεάζει την αλληλεπίδρασή του με το περιβάλλον. Μέσα από αυτήν την προσέγγιση, έχουμε την ευκαιρία να διεισδύσουμε στα βαθύτερα επίπεδα της φυσικής πραγματικότητας και να ανακαλύψουμε τα μυστικά που κρύβονται πίσω από τη μικροσκοπική και εκπληκτικά σύνθετη κατασκευή του κόσμου μας.",
        Link: "" ,
        pdf: Perithlasi_e,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Συντονισμός Σειράς – Παράλληλος", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "30/12/2023",
        Katigoria: "Electronics", 
        Keimeno: "Η εργαστηριακή άσκηση αυτή αποτελεί ένα σημαντικό βήμα προς την πρακτική εξοικείωση και κατανόηση των βασικών αρχών συντονισμού ηλεκτρικών κυκλωμάτων. Μέσα από την εφαρμογή της θεωρίας σε πραγματικά πειραματικά σενάρια, εξετάσαμε τον τρόπο λειτουργίας ενός κυκλώματος RLC κατά τη διάρκεια του συντονισμού. Τα αποτελέσματα επιβεβαιώνουν τη σημασία της συνδυασμένης προσέγγισης θεωρητικής γνώσης και πρακτικής εφαρμογής, παρέχοντας μια ολοκληρωμένη προσέγγιση για την αντιμετώπιση πρακτικών προβλημάτων στον τομέα της ηλεκτρονικής. Με αυτό τον τρόπο, η εργασία αυτή συμβάλλει στην εμβάθυνση της κατανόησης του συντονισμού σε κυκλώματα RLC, ενισχύοντας παράλληλα τις δεξιότητές μας στον ευρύτερο τομέα της ηλεκτρονικής.",
        Link: "" ,
        pdf: Sintonismos,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Συχνοτική Απόκριση Φίλτρων", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "21/12/2023",
        Katigoria: "Electronics", 
        Keimeno: "Η εργαστηριακή άσκηση αυτή αποτελεί μια σημαντική διαδικασία που ενισχύει την κατανόηση των βασικών αρχών φίλτρων αποκοπής συχνοτήτων. Μέσω της πρακτικής εφαρμογής της θεωρίας σε πειραματικό πλαίσιο, ερευνήσαμε τις λειτουργίες του υψηλοπερατού και χαμηλοπερατού φίλτρου, καθιστώντας σαφές πώς επηρεάζουν τη διαμόρφωση σημάτων. Η επιτυχημένη ολοκλήρωση αυτής της άσκησης ενδυναμώνει τις γνώσεις μας και μας παρασύρει σε ένα επίπεδο εξει δίκευσης, εφοδιάζοντάς μας με τα απαραίτητα εφόδια για την καλύτερη κατανόηση και εφαρμογή των αρχών της ηλεκτρονικής στον τομέα των επικοινωνιών.",
        Link: "" ,
        pdf: SixnotikhApokrisi,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Τετράπολα Κυκλώματα Διαφόρισης", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "16/12/2023",
        Katigoria: "Electronics", 
        Keimeno: "Η εργαστηριακή άσκηση αυτή αποτελεί μια σημαντική διαδικασία που ενισχύει την κατανόηση των βασικών αρχών δύο ουσιαστικών θεωρημάτων: των τετραπόλων και των κυκλωμάτων διαφόρισης . Μέσω της πρακτικής εφαρμογής της θεωρίας σε πειραματικό πλαίσιο, χρησιμοποιώντας συγκεκριμένα δεδομένα που αντλήθηκαν από τη δική μας έρευνα, προωθούμε την κατανόηση των αρχών πίσω από αυτά τα δύο θεμελιώδη θεωρήματα. Η επιτυχημένη ολοκλήρωση αυτής της ά σκησης ενδυναμώνει τις γνώσεις μας και μας παρασύρει σε ένα επίπεδο εξειδίκευσ ης, εφοδιάζοντάς μας με τα απαραίτητα εφόδια για αντιμετώπιση προχωρημένων ζητημάτων που αφορούν αυτούς τους σημαντικούς τομείς της ηλεκτρολογίας.",
        Link: "" ,
        pdf: KiklomaDiaforisis,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Θεώρημα Μέγιστης Μεταφοράς Ισχύος και Επαλληλίας", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "06/12/2023",
        Katigoria: "Electronics", 
        Keimeno: "Η εργαστηριακή άσκηση αυτή αποτελεί μια σημαντική διαδικασία που ενισχύει την κατανόηση των βασικών αρχών της μέγιστης μεταφοράς ισχύος στον τομέα της ηλεκτρολογίας και της ενέργειας. Κατά τη διάρκεια αυτής της άσκησης , εφαρμόσαμε τη θεωρία που μελετήσαμε σε ένα πρακτικό πλαίσιο, χρησιμοποιώντας διαγράμματα και πειραματικές μετρήσεις. Αυτό μας επέτρεψε να επαληθεύσουμε την ακρίβεια της θεωρίας και να εξοικειωθούμε με τη διαδικασία ανάλυσης και επίλυσης πραγματικών προβλημάτων στον τομέα αυτόν. Η επιτυχής ολοκλήρωση αυτής της άσκησης ενίσχυσε τις γνώσεις μας και τις δεξιότητές μας, προετοιμάζοντάς μας για πιο προηγμένες εφαρμογές και μελλοντικές προκλήσεις στον χώρο της ηλεκτρολογίας και της ενέργειας.",
        Link: "" ,
        pdf: MegistiMetaforaIsxyos,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Θεώρημα Thevenin - Norton", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "30/11/2023",
        Katigoria: "Electronics", 
        Keimeno: "Η παρούσα εργασία αφορά την εφαρμογή και την αξιολόγηση των θεωρημάτων των Thevenin και Norton στην ανάλυση ηλεκτρικών κυκλωμάτων. Με σκοπό την πληρέστερη κατανόηση της λειτουργίας και την ευκολότερη ανάλυση περίπλοκων κυκλωμάτων, υιοθετήθηκε μια προσέγγιση όπου αναλύθηκαν διάφορα κυκλώματα μέσω της απλοποίησης σε ισοδύναμες πηγές. Η μεθοδολογία περιλάμβανε τόσο θεωρητικούς υπολογισμούς όσο και πρακτική εφαρμογή σε εργαστηριακό περιβάλλον, με τα αποτελέσματα να αντανακλούν υψηλή συσχέτιση μεταξύ θεωρίας και πράξης. Η εργασία επιβεβαιώνει την πρακτική χρησιμότητα των θεωρημάτων στην αποδοτική ανάλυση και σχεδίαση ηλεκτρικών κυκλωμάτων.",
        Link: "" ,
        pdf: Thevenin_Norton,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Μέτρηση Τάσεων Mε Παλμογράφο", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "07/11/2023",
        Katigoria: "Electronics", 
        Keimeno: "Στην παρακάτω εργαστηριακή άσκηση εστιάσαμε στην εμβάθυνση των γνώσεων μας σχετικά με το εναλλασσόμενο ρεύμα. Μέσα από πολλαπλά πειράματα, επικεντρωθήκαμε στις θεωρητικές αρχές που διέπουν το εναλλασσόμενο ρεύμα και προχωρήσαμε σε ακριβείς μετρήσεις, συμπεριλαμβανομένων των μετρήσεων σε εναλλασσόμενα κυκλώματα. Ο στόχος μας ήταν η πλήρης κατανόηση των πρακτικών και θεωρητικών πτυχών του θέματος, βελτιώνοντας έτσι τις γνώσεις μας και τις δεξιότητές μας στον τομέα του εναλλασσόμενου ρεύματος.",
        Link: "" ,
        pdf: Palmografos,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Κύκλωμα Γέφυρας - Μετασχηματισμοί Δ σε Υ", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "23/10/2023",
        Katigoria: "Electronics", 
        Keimeno: "Η εργαστηριακή άσκηση αυτή επικεντρώθηκε κυρίως στην θεωρητική αλλά και πειραματική εισαγωγή στοκύκλωμα γέφυρας (γνωστό ως γέφυρα Wheatstone ), με στόχο τη μελέτη του συγκεκριμένου κυκλώματος. Κατά τη διάρκεια της άσκησης , πραγματοποιήθηκαν πειραματικές μετρήσεις πάνω στο κύκλωμα αυτό. Οιπειραματικές τιμές που καταγράφηκαν συγκρίθηκαν με τις θεωρητικές τιμές που υπολογίστηκαν, αναδεικνύοντας την απόκλιση μεταξύ τους. Ενδιαφέρον παρουσιάζει το γεγονός ότι οι πειραματικές και θεωρητικές τιμές εμφάνισαν εξαιρετικά μικρή απόκλιση μεταξύ τους, καθιστώντας την μελέτη αυτή αξιόπιστη και ακριβή. Αυτή η σύγκριση αποτελεί σημαντικό εύρημα, αποδεικνύοντας την ακρίβεια των πειραματικών αποτελεσμάτων και ενισχύοντας την κατανόησή μας για τη λειτουργία της γέφυρας Wheatstone.",
        Link: "" ,
        pdf: MetasxhmatismosDseY,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστήριο Ηλεκτρικών Κυκλωμάτων",
        image: "", 
        Titlos: "Νόμοι Kirchhoff - Διαιρέτης Τάσης", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "08/10/2023",
        Katigoria: "Electronics", 
        Keimeno: "Στην εργαστηριακή άσκηση αυτή, ερευνήσαμε ένα κύκλωμα διαίρεσης τάσης με στόχο ναεξετάσουμε τα φαινόμενα που επηρεάζουν τις πειραματικές μας μετρήσεις. Αναλύσαμε την επίδραση του φαινομένου επίδρασης φορτιού στις πειραματικές μέτρησης και εξετάσαμε τη σημασία της ακρίβειας στις πειραματικές διαδικασίες. Με τη σύγκριση των μετρήσεων σε διάφορες συνθήκες, ανακαλύψαμε πώς οι ανθρώπινες παρεμβάσεις επηρεάζουν επίσης τα αποτελέσματα. Αυτή η εμπειρία μας βοήθησε να κατανοήσουμε βαθύτερα τη σύνθετη σχέση μεταξύ των εξωτερικών παραγόντων και των πειραματικών αποτελεσμάτων μας, ενισχύοντας τη δεξιότητά μας στην ανάλυση και τη βελτίωση των μετρήσεών μας στο μέλλον.",
        Link: "" ,
        pdf: Kirchhoff_dierethsTashs,
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Rocket Game With Python", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "24/07/2023",
        Katigoria: "Programming", 
        Keimeno: "Rocket Game is an exciting space-themed game that puts players in control of a rocket traveling through the cosmos. The objective is to navigate the rocket through a challenging environment, avoiding obstacles and destroying enemies to score points and progress through different levels.",
        Link: "https://github.com/Klajdis32/RocketGameWithPython.git" ,
        pdf: "",
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Skyline Problem Algorithm With Java", 
        Sigrafeas: "<a href='https://tsami.gr/' style='color: green;'>Kristi Cami</a>", 
        Linksigrafea: "https://tsami.gr/", 
        Date: "17/07/2023",
        Katigoria: "Programming", 
        Keimeno: "In this project, we aimed to develop a code that calculates the skyline of a set of points. The skyline represents the upper boundaries of a region, where each point is visible and not covered by any other point. Overall, this java code implements an algorithm that efficiently computes the skyline of a set of points, ensuring that only the visible and non-overlapping points are included.",
        Link: "https://github.com/Klajdis32/SkylineProblemAlgorithm" ,
        pdf: "",
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Android App Manage Passwords (MaPass)", 
        Sigrafeas: "<a href='https://tsami.gr/' style='color: green;'>Kristi Cami</a>", 
        Linksigrafea: "https://tsami.gr/", 
        Date: "13/07/2023",
        Katigoria: "Programming", 
        Keimeno: "In this project, our aim was to create a password management application for Android called MaPass. In today's digital world, the need for strong passwords is essential to protect our personal and sensitive information. However, managing these passwords can be quite challenging. MaPass is an innovative password management application that we have developed specifically for Android, combining security and convenience into one functional tool. With MaPass, you can securely store and organize all your passwords in one place, ensuring easy access whenever you need them.",
        Link: "https://github.com/KristiCami/PasswordManager" ,
        pdf: MaPass,
        file: "",
        video: VideoMaPass
    },
    {
        Ergastirio: "Εργαστηριακές Ασκήσεις Φυσικής",
        image: "", 
        Titlos: "Ultrasound", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "14/06/2023",
        Katigoria: "Physics", 
        Keimeno: "This project delves into the fundamental acoustic phenomena of wave propagation and reflection, aiming to determine the frequency and wavelength of sound waves through the use of an appropriate ultrasound setup. Through extensive experimentation, this study explores the behavior of sound waves and their interaction , with a specific focus on reflection phenomena. By designing and implementing a well-suited ultrasound arrangement, we conducted experiments to accurately measure and analyze the frequency and wavelength of these waves.",
        Link: "" ,
        pdf: Ultrasound,
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστηριακές Ασκήσεις Φυσικής",
        image: "", 
        Titlos: "Oscilloscope", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "01/06/2023",
        Katigoria: "Physics", 
        Keimeno: "The proposed project consists of three distinct experiments aimed at precisely measuring the amplitude, frequency, and phase of sinusoidal signals. The equipment used to implement this project includes a dual-beam oscilloscope and a frequency generator. In simple terms, through the frequency generator, which we connect to the oscilloscope using a cable, we send various signals of specific or unknown frequency towards the oscilloscope. We study each of these signals via the screen contained in the oscilloscope, with the aim of obtaining experimental data. This experimental data, through mathematical analysis, will lead us to the unknown values of amplitude, frequency, and phase of the sinusoidal signals that we aim to measure in each experiment. This methodical approach provides a hands-on experience of the fundamental principles of signal processing and waveform analysis, offering significant insights into the nature of sinusoidal signals.",
        Link: "" ,
        pdf: oscilloscope,
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Arithmetic logic unit (Alu)", 
        Sigrafeas: "<a href='https://tsami.gr/' style='color: green;'>Kristi Cami</a>", 
        Linksigrafea: "https://tsami.gr/", 
        Date: "16/05/2023",
        Katigoria: "Electronics", 
        Keimeno: "In this project, our objective was to design and implement an Arithmetic Logic Unit (ALU) using Logisim, a digital logic simulator. The ALU served as a crucial component responsible for performing arithmetic and logical operations. We started by designing the ALU's architecture, considering the necessary subunits such as adders, multipliers, dividers, and logic gates. Through careful interconnection of these subunits, we created a functional ALU. We conducted extensive simulations to test its accuracy and reliability, verifying that it produced correct results for various test cases. Throughout the project, we encountered challenges and developed problem-solving skills while gaining a deeper understanding of digital logic and circuit design. To further demonstrate our work, we have made the ALU design file available for review and testing. You can download and run it on Logisim to see our ALU in action.",
        Link: "" ,
        pdf: "",
        file:  Aluzip,
        video: ""
    },
    {
        Ergastirio: "Εργαστηριακές Ασκήσεις Φυσικής",
        image: "", 
        Titlos: "Specific heat of materials", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "13/05/2023",
        Katigoria: "Physics", 
        Keimeno: "This project explores the fascinating field of thermodynamics through a series of experiments, aiming to determine the heat capacities of various substances such as distilled water, glycerin, and lead. By combining practical experimentation with mathematical analysis, we are delving into the fundamental principles that govern the transfer of heat energy. Our experiments involve heating these substances under controlled conditions and carefully measuring the amount of heat absorbed. Through the application of mathematical concepts, we can then calculate their specific heat capacities. This project provides invaluable insights into the complex interplay of heat, energy, and matter, offering a hands-on understanding of the principles of thermodynamics.",
        Link: "" ,
        pdf: SpecificHeatOfMaterials,
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Rotated Cube", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "13/05/2023",
        Katigoria: "Programming", 
        Keimeno: "This project is about how we can display a rotating cube through the c programming language. The code of this project is uploaded to the github, the first code with a name SizeReduction refers only to the rotation of the cube around itself and the reduction of its size, while in the second one with name RotatedCube we also add the rotation.",
        Link: "https://github.com/Klajdis32/RotatedCube" ,
        pdf: "",
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστηριακές Ασκήσεις Φυσικής",
        image: "", 
        Titlos: "Useful electrical circuits", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "07/05/2023",
        Katigoria: "Electronics", 
        Keimeno: "The electrical circuits presented in this project are very useful, specifically the internal resistance of an ammeter and a voltmeter is measured, a procedure that can be followed by anyone who wants to measure the internal resistance of the ammeter or voltmeter used in their circuit. Furthermore, through a new circuit, we extend the measurement range of an ammeter, while at the end we show how an unknown resistance can be measured.",
        Link: "" ,
        pdf: UsefulElectricalCircuits,
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Pentagonal Fractal With C", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "06/05/2023",
        Katigoria: "Programming", 
        Keimeno: "In this project, through the c programming language, we display a pentagonal fractal in a graphical viewer. By pressing the right mouse button on the window, a pop-up menu with various functions is displayed, the first two functions define the points and the color of the fractal, the third and fourth define whether the fractal will appear as a pentagon or a hexagon , while the last terminates the program. In order for the code of this project to work you have to connect Visual Studio with OpenGL, see the corresponding readme file and the code of this project on github.",
        Link: "https://github.com/Klajdis32/PentagonalFractalWithC" ,
        pdf: "",
        file: "",
        video: ""
    },
    {
        Ergastirio: "Εργαστηριακές Ασκήσεις Φυσικής",
        image: "", 
        Titlos: "Simulation of linear motion", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "15/04/2023",
        Katigoria: "Physics", 
        Keimeno: "This project delves into the realm of physics, exploring the experimental representation of linear, smooth, and accelerated body motion. Our aim is to corroborate the mathematical equations that describe these motions through real-world experimentation. The process utilizes a unique setup - the layout of an air route, supported by a computer for data recording and analysis. The mathematical validity is ensured by employing the method of Ordinary Least Squares.",
        Link: "" ,
        pdf: SimulationOfLinearMotion,
        file: "",
        video: ""
    },
    {
        Ergastirio: "",
        image: "", 
        Titlos: "Simple Arduino Project", 
        Sigrafeas: "Me", 
        Linksigrafea: "",  
        Date: "13/04/2023",
        Katigoria: "Electronics", 
        Keimeno: "In this project I had to connect a potentiometer to a servo and thus determine through it the angle that the servo will move without putting the angle in the c++ code. The led is connected to a 150 Ω resistor and simply when the angles I determine through the potentiometer are small, it flashes very quickly, while when the angle increases, its frequency decreases.",
        Link: "https://www.tinkercad.com/things/kSZySV6dCZB?sharecode=ktuk_1gy83ruaVoYp3rV64uu0xQLY0x-EDiKvdFDQIs",
        pdf: "",
        file: "",
        video: ""
    },
];

export default posts;