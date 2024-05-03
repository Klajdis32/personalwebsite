const books = [
    // {
    //     id: "30",
    //     Katigoria: "", 
    //     Titlos: "", 
    //     sxolio_simperasma: ""
    // },
    {
        id: "29",
        xeraki: true,
        Katigoria: "Personal Growth & Self improvement", 
        Titlos: "Algorithms to Live by, by Christian Brian and Griffiths Tom", 
        sxolio_simperasma: "Το βιβλίο Algorithms to Live By από τους Brian Christian και Tom Griffiths αναδεικνύει τον κόσμο των αλγορίθμων και την εφαρμογή τους στην καθημερινή ζωή. Οι συγγραφείς εξετάζουν πώς οι αλγόριθμοι της επιστήμης των υπολογιστών μπορούν να χρησιμοποιηθούν για να ληφθούν αποφάσεις σε διάφορους τομείς της ζωής, όπως η αναζήτηση εργασίας, η διαχείριση του χρόνου, η αναζήτηση συντρόφου και η οικονομική λήψη αποφάσεων"
    },
    {
        id: "28",
        Katigoria: "Autobiography", 
        Titlos: "Στον τρίτο βράχο από τον ήλιο, Νανόπουλος Δημήτρης", 
        sxolio_simperasma: "Στο βιβλίο αυτό, ο συγγραφέας Δημήτρης Nανόπουλος μας οδηγεί μέσα από ένα απίστευτο ταξίδι που ξεκινά από τα παιδικά του χρόνια και φτάνει μέχρι τη στιγμή που συνέβαλε στην ανακάλυψη του μποζονίου Higgs, ένα σωματίδιο που ευθύνεται για την ύπαρξη της μάζας στο σύμπαν μας. Μέσα από τον προσωπικό του λόγο, μοιράζεται με εμάς τις εμπειρίες, τις αναζητήσεις και τις ανακαλύψεις του, καθώς και τις σκέψεις και τις ανησυχίες του στον δρόμο προς την επιστημονική επιτυχία. Μέσα από αυτήν την αφήγηση, αναδεικνύεται η συναρπαστική πορεία του ανθρώπου πίσω από μια από τις σημαντικότερες επιστημονικές ανακαλύψεις της σύγχρονης εποχής."
    },
    {
        id: "27",
        Katigoria: "Astronomy - Astrophysics - Cosmology", 
        Titlos: "Cosmos, by Carl Sagan", 
        sxolio_simperasma: "Cosmos από τον Carl Sagan είναι ένα βιβλίο που εξερευνά το θαυμαστό και μυστηριώδες σύμπαν μας. Σε αυτό το έργο, ο Sagan μας οδηγεί σε ένα επιστημονικό ταξίδι μέσα από τον χρόνο και τον χώρο, από την αναγέννηση του ενδιαφέροντος για την αστρονομία και την αστροφυσική έως τις πιο πρόσφατες εξερευνήσεις του διαστήματος."
    },
    {
        id: "26",
        Katigoria: "Astronomy - Astrophysics - Cosmology", 
        Titlos: "Astrophysics, by Binney James", 
        sxolio_simperasma: "Αstrophysics από τον James Binney είναι ένα βιβλίο που παρουσιάζει τις βασικές έννοιες και τις αρχές της αστροφυσικής με έμφαση στη θεωρητική προσέγγιση. Ο Binney εξετάζει τη δομή του σύμπαντος, την εξέλιξη των αστέρων, τις γαλαξίες και τις κοσμικές διαδικασίες με βάση τις εξισώσεις της φυσικής."
    },
    {
        id: "24",
        Katigoria: "Personal Growth & Self improvement", 
        Titlos: "You are what you think, by James Allen", 
        sxolio_simperasma: "You Are What You Think by James Allen είναι ένα βιβλίο που εξερευνά τη δύναμη της σκέψης και του νου στη δημιουργία της πραγματικότητάς μας. Ο Allen αναλύει τον τρόπο με τον οποίο οι σκέψεις μας διαμορφώνουν τη ζωή μας, προσφέροντας συμβουλές για την ανάπτυξη μιας θετικής νοοτροπίας και την επίτευξη προσωπικής επιτυχίας. "
    },
    {
        id: "23",
        Katigoria: "Physics", 
        Titlos: "Six easy pieces, by Richard Phillips Feynman", 
        sxolio_simperasma: "Το Six Easy Pieces από τον Richard Phillips Feynman είναι μια συλλογή από έξι από τις πιο εμβληματικές διαλέξεις του Feynman, συνοδευόμενες από εξηγήσεις και σχόλια που καθιστούν τις έννοιες της φυσικής προσιτές σε αναγνώστες με διάφορα επίπεδα γνώσης. Με την αξεπέραστη δεξιότητά του στην απλή επεξήγηση περίπλοκων θεμάτων, ο Feynman καταφέρνει να μεταδώσει την απόλαυση και τον ενθουσιασμό του για τη φυσική σε κάθε αναγνώστη. Με την προσιτή προσέγγιση του, το βιβλίο απευθύνεται τόσο σε επαγγελματίες φυσικούς όσο και σε αυτοδίδακτους ενδιαφερόμενους, προσφέροντας μια εξαιρετική εισαγωγή στην αξιοσημείωτη σκέψη του Feynman και στις βασικές αρχές της φυσικής."
    },
    {
        id: "22",
        Katigoria: "Astronomy - Astrophysics - Cosmology", 
        Titlos: "Brief History Of Time, by Stephen Hawking", 
        sxolio_simperasma: "Το βιβλίο A Brief History of Time από τον Stephen Hawking είναι ένα από τα πιο διάσημα επιστημονικά βιβλία όλων των εποχών. Σε αυτό το έργο, ο Hawking παρουσιάζει μια συνοπτική ιστορία του σύμπαντος, εξερευνώντας θέματα όπως η θεωρία της σχετικότητας του Einstein, η κβαντική μηχανική, οι μαύρες τρύπες και η φύση του χρόνου."
    },
    {
        id: "21",
        Katigoria: "Physics", 
        Titlos: "The Character of Physical Law, by Richard Phillips Feynman", 
        sxolio_simperasma: "Μέσα από την ανάλυση των φυσικών νόμων, ο Feynman αναδεικνύει την ομορφιά και την απλότητα που κρύβονται πίσω από τις εξισώσεις της φυσικής. Το βιβλίο είναι εμπνευσμένο από την περιέργεια και την αγάπη του Feynman για την επιστήμη και προσφέρει μια εξαιρετική εισαγωγή στις βασικές έννοιες της φυσικής για αναγνώστες όλων των επιπέδων εμπειρίας."
    },
    {
        id: "20",
        Katigoria: "Astronomy - Astrophysics - Cosmology", 
        Titlos: "We Have No Idea: A Guide to the Unknown Universe, by Jorge Cham and Daniel Whiteson", 
        sxolio_simperasma: "Το βιβλίο We Have No Idea: A Guide to the Unknown Universe από τους Jorge Cham και Daniel Whiteson είναι μια παραστατική και ευχάριστη εξερεύνηση των μεγάλων αγνωστικών και μυστηρίων του σύμπαντος. Οι συγγραφείς, ένας κωμικός και ένας φυσικός αντίστοιχα, προσεγγίζουν τα βαθύτερα θέματα της φυσικής, όπως η σκοτεινή ενέργεια, η σκοτεινή ύλη, η κβαντική φυσική και η θεωρία των χορδών, με χιούμορ και κατανοητό τρόπο. Μέσα από εικονογραφημένες αναπαραστάσεις και απλές εξηγήσεις, το βιβλίο προσφέρει στους αναγνώστες μια ευκαιρία να κατανοήσουν τις βασικές έννοιες της σύγχρονης φυσικής και να εξερευνήσουν τα μεγάλα ανοιχτά ερωτήματα που παραμένουν αναπάντητα. Το βιβλίο αναδεικνύει την περιέργεια και τον ενθουσιασμό πίσω από την επιστήμη και προσφέρει μια διασκεδαστική εισαγωγή σε έναν κόσμο που είναι γεμάτος μυστήρια."
    },
    {
        id: "19",
        Katigoria: "Autobiography", 
        Titlos: "Steve Jobs, by Isaacson Walter", 
        sxolio_simperasma: "Το βιβλίο Steve Jobs του Isaacson Walter είναι μια εκ βαθέων βιογραφία που εξετάζει τη ζωή και την καριέρα του ιδρυτή της Apple, Steve Jobs. Ο συγγραφέας αναδεικνύει την πορεία του Jobs από τη νεανική του ηλικία μέχρι την ανάδειξή του ως έναν από τους πιο επιδραστικούς επιχειρηματίες της εποχής του. Μέσα από πληθώρα συνεντεύξεων και πηγών, ο Isaacson αναδεικνύει τις επιτυχίες, τις αποτυχίες και τις αντιφάσεις που διέπουν τη ζωή του Jobs, καθώς και την επίδρασή του στην τεχνολογία και την κοινωνία. Το βιβλίο προσφέρει μια συναρπαστική και λεπτομερή ματιά στο προφίλ ενός εκκεντρικού αλλά εξαιρετικά ταλαντούχου ατόμου που άφησε το στίγμα του στην ιστορία."
    },
    {
        id: "18",
        Katigoria: "Popular Science", 
        Titlos: "Brief Answers to the Big Questions, by Stephen Hawking", 
        sxolio_simperasma: "Το βιβλίο αυτό είναι μια συλλογή από ομιλίες, άρθρα και συνεντεύξεις του διάσημου φυσικού, που εξετάζει ορισμένες από τις μεγαλύτερες ερωτήσεις της ανθρώπινης αντίληψης και επιστήμης. Αναλύει ζητήματα όπως η προέλευση του σύμπαντος, η ύπαρξη εξωγήινης ζωής, η φύση του χρόνου και το μέλλον της ανθρωπότητας. Με τον χαρακτηριστικό του τρόπο, ο Hawking παρουσιάζει πολύπλοκες έννοιες της φυσικής και της κοσμολογίας με απλό τρόπο, καθιστώντας τις προσιτές στο ευρύ κοινό. Το βιβλίο προσφέρει μια σημαντική ευκαιρία για τους αναγνώστες να εξερευνήσουν τις μεγάλες ερωτήσεις του σύμπαντος μέσα από το πρίσμα της σκέψης του ισχυρού φυσικού."
    },
    {
        id: "16",
        Katigoria: "Economics", 
        Titlos: "The Richest Man in Babylon", 
        sxolio_simperasma: "Μέσα από το βιβλίο, ο Munger μοιράζεται τις απόψεις και τις στρατηγικές του για τη δημιουργία και τη διαχείριση πλούτου μέσω της επένδυσης. Αναλύει τις κύριες αρχές που οδηγούν σε επιτυχημένες επενδύσεις και προσφέρει πρακτικές συμβουλές για τους επενδυτές όλων των επιπέδων εμπειρίας."
    },
    {
        id: "15",
        Katigoria: "Economics", 
        Titlos: "The Perfect Investor, by Charlie Munger", 
        sxolio_simperasma: "Σε αυτό το βιβλίο, ο Munger μοιράζεται τις απόψεις του για το πώς να λάβετε έξυπνες αποφάσεις επένδυσης, ποια είναι τα κλειδιά για την επιτυχία στην αγορά, και πώς να αναγνωρίζετε και να αξιολογείτε ευκαιρίες επένδυσης. Μέσα από παραδείγματα από την προσωπική του εμπειρία και από την επιχειρηματική κόσμο, ο Munger προσφέρει συμβουλές για τη δημιουργία ενός συνετού επενδυτικού σχεδίου και την ανάπτυξη μιας επιτυχημένης επενδυτικής στρατηγικής. Είναι ένας οδηγός που μπορεί να εμπνεύσει και να καθοδηγήσει κάθε επενδυτή, ανεξαρτήτως επιπέδου εμπειρίας, στη διαδρομή του προς την επιτυχία στις χρηματοοικονομικές αγορές."
    },
    {
        id: "14",
        Katigoria: "Science fiction", 
        Titlos: "Life 3.0, by Tegmark Max", 
        sxolio_simperasma: "Το βιβλίο αυτό εξερευνά τις επιπτώσεις που θα έχει η τεχνητή νοημοσύνη στην ανθρώπινη ζωή στο μέλλον. Ο Tegmark διερευνά τις πιθανές εξελίξεις στην τεχνητή νοημοσύνη και τη σημασία τους για το μέλλον της ανθρωπότητας. Αναλύει ζητήματα όπως η δημιουργία ζωής σε τεχνητό περιβάλλον, η επέκταση της ανθρώπινης νοημοσύνης με τη βοήθεια της τεχνητής νοημοσύνης, και οι πιθανές επιπτώσεις στην κοινωνία και την ανθρωπότητα. Το βιβλίο προκαλεί τον αναγνώστη να σκεφτεί βαθιά για τις επιπτώσεις της τεχνητής νοημοσύνης στην ανθρώπινη ύπαρξη και να εξετάσει πιθανές ηθικές και φιλοσοφικές προκλήσεις που θα προκύψουν σε αυτό το πλαίσιο."
    },
    {
        id: "13",
        Katigoria: "Physics", 
        Titlos: "QED: The Strange Theory of Light and Matter, by Richard Phillips Feynman", 
        sxolio_simperasma: "Ένα βιβλίο του Richard Feynman, στο οποίο παρουσιάζει την κβαντομηχανική ηλεκτροδυναμική (Quantum Electrodynamics - QED) με έναν προσιτό και ενδιαφέροντα τρόπο. Ο Feynman περιγράφει πώς η φυσική της QED εξηγεί τη συμπεριφορά του φωτός και της ύλης σε επίπεδο κβαντικής μηχανικής. Μέσα από παραστατικά παραδείγματα και αναλύσεις, αναδεικνύει τις παράξενες και συχνά αντι-intuitive έννοιες που διέπουν τον κόσμο της κβαντικής φυσικής. Το βιβλίο είναι επίσης γνωστό για την ευφάνταστη γραφή του Feynman και τον τρόπο που καταφέρνει να εξηγήσει περίπλοκα θέματα με απλότητα και ευκολία κατανόησης."
    },
    {
        id: "12",
        Katigoria: "Personal Growth & Self improvement", 
        Titlos: "Thinking, Fast and Slow, by Kahneman Daniel", 
        sxolio_simperasma: "Thinking, Fast and Slow είναι ένα βιβλίο του Daniel Kahneman, το οποίο εξερευνά τις δύο κύριες λειτουργίες του ανθρώπινου μυαλού: το γρήγορο και έντονο σκέφτισμα (σύστημα 1) και το πιο αργό, πιο αναλυτικό σκέφτισμα (σύστημα 2). Μέσα από πειράματα και έρευνες, ο Kahneman αναδεικνύει πώς αυτά τα δύο συστήματα επηρεάζουν τις αποφάσεις μας, την αντίληψή μας και τη συμπεριφορά μας καθημερινά. Το βιβλίο προσφέρει επίσης πολύτιμες ενδείξεις για το πώς μπορούμε να αναγνωρίσουμε τις παγίδες σκέψης και τις αρνητικές συμβάσεις που μπορούν να επηρεάσουν τις αποφάσεις μας. Το Thinking, Fast and Slow παρέχει μια εμβληματική ματιά στην κοινή λογική και την απόφαση, προσφέροντας μια βαθιά κατανόηση για το πώς λειτουργεί ο ανθρώπινος νους."
    },
    {
        id: "11",
        Katigoria: "Personal Growth & Self improvement", 
        Titlos: "Talk Like TED, by Gallo Carmine", 
        sxolio_simperasma: "Βασιζόμενο σε έρευνα και ανάλυση επιτυχημένων TED Talks, το βιβλίο αποκαλύπτει τις τεχνικές και τα χαρακτηριστικά που χρησιμοποιούν οι κορυφαίοι ομιλητές για να καταφέρουν να κερδίσουν την προσοχή του κοινού τους, να τους εμπνεύσουν και να τους κινητοποιήσουν. Από τη δομή της ομιλίας μέχρι τον τρόπο παρουσίασης και την έμφαση στον προσωπικό αυθεντικό λόγο, το βιβλίο προσφέρει πολύτιμες συμβουλές για όσους επιθυμούν να βελτιώσουν τις δημόσιες τους ομιλίες και να κατακτήσουν το κοινό τους με αξέχαστο τρόπο."
    },
    {
        id: "10",
        Katigoria: "Economics", 
        Titlos: "The Lean Startup, by Eric Ries", 
        sxolio_simperasma: "Το βιβλίο The Lean Startup του Eric Ries είναι ένας οδηγός για το πώς να δημιουργήσετε και να εξελίξετε επιτυχημένες επιχειρήσεις με μια προσέγγιση που εστιάζει στην ευελιξία και την ανταποκρισιμότητα στην αγορά. Αντί να ακολουθείτε το παραδοσιακό μοντέλο επιχειρηματικότητας, το βιβλίο προτείνει μια μεθοδολογία Lean, η οποία επικεντρώνεται στην ελαχιστοποίηση των απωλειών και την αυξημένη επικοινωνία με τους πελάτες για να αναπτύξετε ένα προϊόν ή μια υπηρεσία που πραγματικά θέλουν."
    },
    {
        id: "9",
        Katigoria: "Personal Growth & Self improvement", 
        Titlos: "Be Obsessed or Be Average, by Grant Cardone", 
        sxolio_simperasma: "In a few words, in this book Grand Cardon tells us that if you are not passionate about what you do and do not work hard every day for many years to achieve it, then you will remain average."
    },
    {
        id: "8",
        Katigoria: "Personal Growth & Self improvement", 
        Titlos: "The 10X Rule, by Grant Cardone", 
        sxolio_simperasma: "The main idea of this book is that if you have a goal, you should work so hard that you try to achieve ten times that goal, this will make you sure that you have achieved your original goal and that you will look beyond, rather than trying hard to reach only the original goal."
    },
    {
        id: "7",
        Katigoria: "The Art of War, by Sun Tzu", 
        Titlos: "The Art of War, by Sun Tzu", 
        sxolio_simperasma: "A book written about 2,500 years ago about planning and conducting military operations in China. The ideas and suggestions written in the book are also applicable in the modern world in which competition prevails."
    },
    {
        id: "6",
        Katigoria: "Science fiction", 
        Titlos: "Brave New World, by Aldous Huxley", 
        sxolio_simperasma: "A science fiction book, it describes a future in which bioscience and genetics have reached such a level that they have replaced the natural evolution of the human species."
    },
    {
        id: "5",
        Katigoria: "Economics", 
        Titlos: "From zero to one, by Peter Thiel", 
        sxolio_simperasma: "The main idea of this book is that it is easier to take something that has already been made and evolve it (from n to ∞, n≥1) than to make something from scratch (from 0 to 1). I recommend this book to those who like to read financial and startup books."
    },
    {
        id: "4",
        Katigoria: "Astronomy - Astrophysics", 
        Titlos: "Our Mathematical Universe, by Max Tegmark", 
        sxolio_simperasma: "The first book I read on cosmology, it describes how mathematics can describe the universe and gives a description of what we know so far from our planetary system to the Big Bang."
    },
    {
        id: "3",
        Katigoria: "Autobiography - Science", 
        Titlos: "My Inventions: The Autobiography of Nikola Tesla", 
        sxolio_simperasma: "Autobiography of Nikola Tesla, about his fantastic and mysterious life and all his inventions, from alternating current to the radio and the first Remote controlled vehicle."
    },
    {
        id: "2",
        Katigoria: "Astronomy - Astrophysics", 
        Titlos: "Προς τ' άστρα (To the stars)", 
        sxolio_simperasma: "This book exists only in Greek and was written by Pavlos Kastanas, also known as astronio on social media. It is an introduction to the basic topics of astrophysics, from our humble solar system to the far reaches of the universe. Easy to read with lots of pictures, a perfect guide to the universe."
    },
    {
        id: "1",
        Katigoria: "Autobiography - Science", 
        Titlos: "Surely You're Joking, Mr. Feynman!, by Richard Phillips Feynman", 
        sxolio_simperasma: "This particular one is one of my favorite books by Feynman. It is not an academic book like most of his books, but in this one he talks more about things that he has experienced and not only. Feynman was an extraordinary scientist and a human being, I highly recommend this book."
    }
];

export default books;