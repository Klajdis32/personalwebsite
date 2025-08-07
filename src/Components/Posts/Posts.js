import LunarLander from '../../Assets/LunarLander.png';
import TempMeter from "../../Assets/TempMeter.png";
import MysqlExReact from "../../Assets/MysqlExReact.jpg";
import llamachat from "../../Assets/llamachat.png";
import LM35 from "../Md/LM35.md";

const posts = [
    {
        id: 4,
        imageEksw: TempMeter, 
        Titlos: "LM35 Temperature Meter – Arduino Uno", 
        Sigrafeas: "", 
        Linksigrafea: "",  
        Date: "13 apr 2025",
        Katigoria: "", 
        Keimeno: "This project uses an LM35 analog temperature sensor connected to an Arduino Uno to measure ambient temperature in real time. The temperature readings are displayedon a 16x2 LCD screen. The LM35 sensor outputs a voltage that is linearly proportional to the temperature in degrees Celsius (10 mV per °C). The Arduino reads this analog voltage through pin A0, calculates the temperature, and updates the LCD display every 500 milliseconds. The LCD screen is connected directly to the Arduino using digital pins (RS, EN, D4–D7), and shows the current temperature with one decimal precision, e.g., “Temp: 24.7°C”. This project is a simple and effective way to monitor temperature using basic components and is ideal for beginners learning how to interface sensors and displays with Arduino.",
        Link: "",
        htmlPdf: "",
        pdf: "",
        file: "",
        video: "",
        md: LM35
    },
    {
        id: 3,
        imageEksw: MysqlExReact, 
        Titlos: "React-Express.js-MySQL Authentication System", 
        Sigrafeas: "", 
        Linksigrafea: "",  
        Date: "1 feb 2025",
        Katigoria: "", 
        Keimeno: "This project is about a web application with a robust authentication system built using React for the frontend, Express.js for the backend, and MySQL as the database. User interaction with the backend is handled via cookies for authentication and session management. The application follows modern security best practices, including password hashing, token expiration handling, and CSRF protection. It also supports role-based access control (RBAC) to differentiate between user permissions, ensuring that only authorized users can access specific resources. Additionally, the frontend is designed with a responsive UI, providing a seamless experience across different devices. The backend API is structured using RESTful principles, making it scalable and easy to integrate with other services. ",
        Link: "",
        htmlPdf: "",
        pdf: "",
        file: "",
        video: "",
        md: ""
    },
    {
        id: 2,
        imageEksw: LunarLander, 
        Titlos: "Lunar Lander Ai Agent", 
        Sigrafeas: "", 
        Linksigrafea: "",  
        Date: "17 dec 2024",
        Katigoria: "", 
        Keimeno: "This project focuses on training an agent to successfully land a lunar module on the flattest possible surface to avoid damage. The agent is trained using Reinforcement Learning (RL) techniques, specifically with the Proximal Policy Optimization (PPO) algorithm implemented in Ray RLlib. In the video generated, you can see the top 3 landings of the lunar module using the trained model. These landings demonstrate the agent's ability to control the lander effectively and achieve safe touchdowns.",
        Link: "",
        htmlPdf: "",
        pdf: "",
        file: "",
        video: "",
        md: ""
    },
    {
        id: 1,
        imageEksw: llamachat, 
        Titlos: "Chat Interface for Llama LLM", 
        Sigrafeas: "", 
        Linksigrafea: "",  
        Date: "9 dec 2024",
        Katigoria: "", 
        Keimeno: "This project involves my attempt to create a web-based AI chat interface utilizing Meta's Llama-3.3-70B-Versatile model. Leveraging my knowledge of React, I developed a user-friendly platform offering natural and intelligent interaction, utilizing the advanced capabilities of this AI model.",
        Link: "",
        htmlPdf: "",
        pdf: "",
        file: "",
        video: "",
        md: ""
    },
    ];

export default posts;