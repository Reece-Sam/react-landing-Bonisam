// import { useState } from "react"
// import Header from "./Header"
// import Hero from "./Hero"
// import '../Styles/Components.css'
// import Commerce from "./Commerce"


// const Components = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const menuItems = [
//         { label: "Why Shopify", link: "#" },
//         { label: "Products", link: "#" },
//         { label: "Pricing", link: "#" },
//         { label: "Enterprise", link: "#" },
//     ];

//     return(
//         <div className="drop">
//             <button className="drop-down"
//             onClick={toggleDropdown}
//             onBlur={() => setTimeout(() => setIsOpen(false), 200)}>
//              Shopify
//             </button>

//             {isOpen && (
//             <div className="down">
//                 {menuItems.map((item, index) => (
//                     <a key={index}
//                     href={item.href}
//                     className="stuff">

//                         {item.label}

//                     </a>
//                 ))}
//                 </div> 
//             )}
//             </div>
//         );
//     }

//     export default Components;