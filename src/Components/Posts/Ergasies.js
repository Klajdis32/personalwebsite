import Plank from "../../Components/Posts/pdfs/Planck.pdf";
import oscilloscope from "../../Components/Posts/pdfs/oscilloscope.pdf";
import SimulationOfLinearMotion from "../../Components/Posts/pdfs/SimulationOfLinearMotion.pdf";
import SpecificHeatOfMaterials from "../../Components/Posts/pdfs/SpecificHeatOfMaterials.pdf";
import Ultrasound from "../../Components/Posts/pdfs/Ultrasound.pdf";
import UsefulElectricalCircuits from "../../Components/Posts/pdfs/UsefulElectricalCircuits.pdf";
import Thermioniki from "../../Components/Posts/pdfs/Θερμιονική Εκπομπή Ηλεκτρονίων.pdf";
import Thevenin_Norton from "../../Components/Posts/pdfs/Θεώρημα Thevenin - Norton.pdf";
import MegistiMetaforaIsxyos from "../../Components/Posts/pdfs/Θεώρημα Μέγιστης Μεταφοράς Ισχύος .pdf";
import MetasxhmatismosDseY from "../../Components/Posts/pdfs/Κύκλωμα Γέφυρας – Μετασχηματισμοί Δ ↔ Υ.pdf";
import Logose_m from "../../Components/Posts/pdfs/Λόγος e πρός m.pdf";
import Palmografos from "../../Components/Posts/pdfs/Μέτρηση Τάσεων Mε Παλμογράφο.pdf";
import Kirchhoff_dierethsTashs from "../../Components/Posts/pdfs/Νόμοι Kirchhoff - Διαιρέτης Τάσης.pdf";
import Perithlasi_e from "../../Components/Posts/pdfs/Περίθλαση Ηλεκτρονίων.pdf";
import Sintonismos from "../../Components/Posts/pdfs/Συντονισμός Σειράς – Παράλληλος.pdf";
import SixnotikhApokrisi from "../../Components/Posts/pdfs/Συχνοτική Απόκριση Φίλτρων.pdf";
import KiklomaDiaforisis from "../../Components/Posts/pdfs/Τετράπολα - Κυκλώματα Διαφόρισης .pdf";
import HlektrAsk1 from "../../Components/Posts/pdfs/Lab1Exercise_InGreek.pdf";
import HlektrAsk2 from "../../Components/Posts/pdfs/Lab2Exercise_InGreek.pdf";
import HlektrAsk3 from "../../Components/Posts/pdfs/Lab3Exercise_InGreek.pdf";
import HlektrAsk4 from "../../Components/Posts/pdfs/Lab4Exercise_InGreek.pdf";
import HlektrAsk5 from "../../Components/Posts/pdfs/Lab5Exercise_InGreek.pdf";
import HlektrProso1 from "../../Components/Posts/pdfs/Lab1Simulation_InGreek.pdf";
import HlektrProso2 from "../../Components/Posts/pdfs/Lab2Simulation_InGreek.pdf";
import HlektrProso3 from "../../Components/Posts/pdfs/Lab3Simulation_InGreek.pdf";
import HlektrProso4 from "../../Components/Posts/pdfs/Lab4Simulation_InGreek.pdf";
import HlektrProso5 from "../../Components/Posts/pdfs/Lab5Simulation_InGreek.pdf";
import WiresharkAndNmap from "../../Components/Posts/pdfs/WiresharkAndNmap_En.pdf";
import LinuxMachineCommunication from "../../Components/Posts/pdfs/LinuxMachineCommunication.pdf";
import malware from "../../Components/Posts/pdfs/malware5thExercise.pdf"
import Firewalls from "../../Components/Posts/pdfs/FirewallsExercise.pdf";
import scp from "../../Components/Posts/pdfs/SCP.pdf";
import windowsUsersAndPerm from "../../Components/Posts/pdfs/WindowsUsers.pdf"
import Polarization_Greek from "../../Components/Posts/pdfs/Πόλωση.pdf";
import Dispersion from "../../Components/Posts/pdfs/Διασκεδασμός.pdf";
import Diffraction from "../../Components/Posts/pdfs/Περίθλαση.pdf";
import Interference from "../../Components/Posts/pdfs/Συμβολή.pdf";
import geometricOptics from "../../Components/Posts/pdfs/ΓΟ.pdf";

const Ergasies = [
  {
    Onoma: "Google.org Cybersecurity Seminars",
    pdfs: [
      { name: "Users and Permissions on Windows Machines", src: windowsUsersAndPerm },
      { name: "Passwordless SSH Connections Between Linux machines", src: scp },
      { name: "Firewall on a Linux system", src: Firewalls },
      { name: "Malware and antivirus systems", src: malware },
      { name: "Linux Machine Communication", src: LinuxMachineCommunication },
      { name: "Wireshark and Nmap", src: WiresharkAndNmap },
    ],
    files: ""
  },
  {
    Onoma: "Εργαστήριο οπτικής (Optics laboratory)",
    pdfs: [
      { name: "Πόλωση", src: Polarization_Greek },
      { name: "Διασκεδασμός", src: Dispersion },
      { name: "Περίθλαση", src: Diffraction },
      { name: "Συμβολή", src: Interference },
      { name: "Γεωμετρική Οπτική", src: geometricOptics },
    ],
    files: ""
  },
  {
    Onoma: "Εργαστήριο ηλεκτρονικής (Electronics laboratory)",
    pdfs: [
      { name: "Αναφορά 5ης Εργαστηριακής Άσκησης", src: HlektrAsk5 },
      { name: "Αναφορά προσομοίωσης 5ης Άσκησης", src: HlektrProso5 },
      { name: "Αναφορά 4ης Εργαστηριακής Άσκησης", src: HlektrAsk4 },
      { name: "Αναφορά προσομοίωσης 4ης Άσκησης", src: HlektrProso4 },
      { name: "Αναφορά 3ης Εργαστηριακής Άσκησης", src: HlektrAsk3 },
      { name: "Αναφορά προσομοίωσης 3ης Άσκησης", src: HlektrProso3 },
      { name: "Αναφορά 2ης Εργαστηριακής Άσκησης", src: HlektrAsk2 },
      { name: "Αναφορά προσομοίωσης 2ης Άσκησης", src: HlektrProso2 },
      { name: "Αναφορά 1ης Εργαστηριακής Άσκησης", src: HlektrAsk1 },
      { name: "Αναφορά προσομοίωσης 1ης Άσκησης", src: HlektrProso1 },
    ],
    files: ""
  },
{
    Onoma: "Εργαστήριο ηλεκτρικών κυκλωμάτων (Electrical Circuits Laboratory)",
    pdfs: [
      { name: "Τετράπολα - Κυκλώματα Διαφόρισης", src: KiklomaDiaforisis },
      { name: "Συχνοτική Απόκριση Φίλτρων", src: SixnotikhApokrisi },
      { name: "Συντονισμός Σειράς – Παράλληλος", src: Sintonismos },
      { name: "Νόμοι Kirchhoff - Διαιρέτης Τάσης", src: Kirchhoff_dierethsTashs },
      { name: "Κύκλωμα Γέφυρας – Μετασχηματισμοί Δ σε Υ", src: MetasxhmatismosDseY },
      { name: "Θεώρημα Μέγιστης Μεταφοράς Ισχύος και Επαλληλίας", src: MegistiMetaforaIsxyos },
      { name: "Θεώρημα Thevenin - Norton", src: Thevenin_Norton },
      { name: "Μέτρηση Τάσεων Mε Παλμογράφο", src: Palmografos },
    ],
    files: ""
  },
  {
    Onoma: "Εργαστήριο Aτομικής Φυσικής (Atomic Physics Laboratory)",
    pdfs: [
      { name: "Περίθλαση Ηλεκτρονίων", src: Perithlasi_e },
      { name: "Μέτρηση του λόγου e/m του ηλεκτρονίου", src: Logose_m },
      { name: "Μέτρηση της σταθεράς του Planck", src: Plank },
      { name: "Θερμιονική Εκπομπή Ηλεκτρονίων", src: Thermioniki },
    ],
    files: ""
  },
  {
    Onoma: "Εργαστηριακές Ασκήσεις Γενικής Φυσικής (General Physics Laboratory Exercises)",
    pdfs: [
      { name: "Εργασία 6 - Αεροδιάδρομος", src: SimulationOfLinearMotion },
      { name: "Εργασία 7 - Ηλεκτρικά", src: UsefulElectricalCircuits },
      { name: "Εργασία 8 - Θερμοδυναμική", src: SpecificHeatOfMaterials },
      { name: "Εργασία 9 – Παλμογράφος", src: oscilloscope },
      { name: "Εργασία 10 – Υπέρηχοι", src: Ultrasound },
    ],
    files: ""
  },
];


export default Ergasies;