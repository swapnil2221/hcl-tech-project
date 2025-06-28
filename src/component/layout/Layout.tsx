// import eandFooter from "../../assets/icons/eandFooter.svg";
// import Header from "../ui/Header";
// import SideMenuBar from "../ui/SideMenuBar";
// import { ReactNode, useEffect, useRef, useState } from "react";

// type Props = {
//     pageName: string;
//     children: ReactNode;
//     logo: string;
// };
// export default function Layout({ pageName, children, logo }: Props) {
//     const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
//     const lgSlider = true;

//     const toggleSidebar = () => {
//         setExpandSidebar(prevState => !prevState);
//     };

//     useEffect(() => {
//     }, [])

//     const scrollRef = useRef<any>(null);

//     const [isVisible, setIsVisible] = useState(false);

//     const toggleVisibility = () => {

//       if (scrollRef.current.scrollTop > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };
//     useEffect(() => {
//         if(scrollRef.current){

//             const divElement = scrollRef.current;
//             divElement.addEventListener('scroll', toggleVisibility);
//             return () => {
//                 divElement.removeEventListener('scroll', toggleVisibility);
//             };
//         }
//     }, []);

//     const scrollToTop = () => {
//         scrollRef.current.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });
//       };
//     return (
//         <main className="h-screen overflow-hidden bg-cover w-full bg-ceqLogin flex-row ">
//             <Header toggleSidebar={toggleSidebar}  />
//             <div className="relative bg-[#F5F5F5] h-[77%]  flex flex-row rounded-[10px] border-[3px] grow mx-[24px] ">

//                 {expandSidebar? (<div className="absolute top-0 bg-white left-0 w-320  h-full shadow-lg  transform scale-100 opacity-100  z-10 2xl:relative">
//                     <SideMenuBar expandSidebar={expandSidebar}/>
//                 </div>):<div className="hidden xl:flex absolute top-0 bg-white left-0 w-320 h-full shadow-lg  transform scale-100 opacity-100  z-10 xl:relative">
//                     { <SideMenuBar expandSidebar={lgSlider} />}
//                 </div>}
//                 <div className="w-full h-full overflow-y-auto z-1">
//                     <div className="m-[24px] flex flex-row items-center">
//                         <img src={logo} alt="e&" className="w-[25px] h-[25px]" />
//                         <span className="font-bold lg:text-xl md:text-lg text-md  text-charcol-black ml-[5px]">{pageName}</span>
//                     </div>
//                     {children}

//                     <button
//                         type="button"
//                         onClick={scrollToTop}
//                         className={`fixed bottom-4 right-[4.8rem] bg-[#333333] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out ${isVisible ? 'block' : 'hidden'
//                             }`}
//                     >
//                         ↑
//                     </button>
//                 </div>

//             </div>
//             <footer className="flex justify-center py-8 bg-white">
//                 <img src={eandFooter} alt="e&" className="w-[153px] h-[23px]" />
//             </footer>

//         </main>
//     );
// }
