// import { NavLink } from "react-router-dom";
// import { useContext, useState, Fragment, useEffect } from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";

// import Layout from "../components/layout/Layout";
// import AuditCard from "../components/consumer/Card";
// import AuthContext from "../contexts/AuthContext";
// import { ConsumerAuditModalGet, getAuditList, AuditListData } from "../api/consumerAudit";
// import FilterForm from "../components/consumer/FilterForm";
// import SideModal from "../components/ui/SideModal";
// import NotificationDialog from "@/components/ui/DialogPopup";
// import { Menu, Transition } from "@headlessui/react";
// import { getCookie } from "../lib/cookies";

// import consumerAudit from "../assets/icons/consumerAudit.svg";
// import addIcon from "../assets/icons/addIcon.svg";
// import arrowRight from "../assets/icons/arrow_right.svg";
// import arrowLeft from "../assets/icons/arrow_left.svg";
// import progressActivity from "../assets/icons/progress_activity.svg";
// import download from "../assets/icons/download.svg";
// import upload from "../assets/icons/upload.svg";
// import chevronIcon from "../assets/icons/chevron.svg";
// import { useMatomo } from "@jonkoops/matomo-tracker-react";

// export default function ConsumerAudits() {
//     const authCtx = useContext(AuthContext);
//   const { trackPageView, pushInstruction } = useMatomo();
//     const queryClient = useQueryClient();
//     const [searchFilters, setSearchFilters] = useState({
//         region: "",
//         status: "",
//         page: "1"
//         , start_date: "", end_date: "", sr_number: ""
//     });
//     const [pageId, setPageId] = useState("1");
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [alertpopup, setalert] = useState<boolean>(false);
//     //   const [isLoading, setLoading2] = useState<boolean>(false);
//     //   const [consumerAuditData , setconsumerAuditData] = useState<any>()

//     // const [searchText, setSearchText] = useState<string>("");

//     queryClient.invalidateQueries({ queryKey: ["auditList"] });

//     const { data: consumerAuditData, isLoading, error } = useQuery<AuditListData, Error>({
//         queryKey: ["auditList", searchFilters],
//         queryFn: () => getAuditList(searchFilters),
//     });
//     if (error) {
//         if (consumerAuditData) {
//             consumerAuditData.audits = [],
//                 consumerAuditData.current_page = ""
//             consumerAuditData.total_pages = ""
//         }
//     };

//     // React.useEffect(() => {
//     //     setLoading2(true)
//     //     getAuditList(searchFilters).then((quarterData) => {
//     //       setLoading2(false)
//     //       if (quarterData) {
//     //         setconsumerAuditData(quarterData)
//     //       }
//     //     }).catch(() => setLoading2(false))
//     //   }, [searchFilters])

//     const { audits, total_pages } = consumerAuditData || { audits: [], total_pages: "" };

//     const showModal = () => {
//         setIsModalOpen(true);
//     };

//     const handleClose = () => {
//         setIsModalOpen(false);
//     };

//     const handleSerach = () => {
//         setPageId("1");
//     };

//     const handlePageClick = (pageNumber: number) => {
//         setSearchFilters({ ...searchFilters, page: pageNumber.toString() });
//         setPageId(pageNumber.toString());
//     };
//     const totalPages = parseInt(total_pages);
//     const url = `https://ossdev.etisalat.ae:8437/ceq/consumer/export_csv?start_date=${searchFilters?.start_date ? searchFilters?.start_date : ""}&end_date=${searchFilters?.end_date ? searchFilters?.end_date : ""}&region=${searchFilters?.region ? searchFilters?.region : ""}&status=${searchFilters?.status ? searchFilters?.status : ""}&sr_number=${searchFilters?.sr_number ? searchFilters?.sr_number : ""}`;
//     //   console.log(url);
//     function downloadFile(url: string) {
//         const accessToken = getCookie("ceqToken");
//         fetch(url, { headers: { Authorization: accessToken ? `Bearer ${accessToken}` : "" } })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.blob();
//             })
//             .then(blob => {
//                 // Create a temporary anchor element to initiate the download
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement('a');
//                 a.style.display = 'none';
//                 a.href = url;
//                 // Set the filename, you can customize this
//                 a.download = 'ConsumerAudits.csv'; // Replace 'filename.ext' with your desired filename
//                 document.body.appendChild(a);
//                 a.click();
//                 window.URL.revokeObjectURL(url);
//                 document.body.removeChild(a);
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//                 // alert('Failed to download the file.');
//                 setalert(true);
//             });
//     }
//     //   const handlesearch = (e:any) =>{

//     //     setSearchText(e.target.value);
//     //     const searchAudits = audits.filter(fil => fil.sr_number === e.target.value);
//     //   }

//     useEffect(() => {
//         if (authCtx && authCtx?.user) {
//             pushInstruction("setUserId", authCtx?.user?.username);
//             trackPageView({
//                 documentTitle: "Consumer Audits",
//                 customDimensions: [{ id: 1, value: "Consumer Audits" }],
//             });
//     }
//     }, [trackPageView, pushInstruction, authCtx]);

//     return (
//         <Layout pageName="Consumer Audits" logo={consumerAudit}>
//             <div className=" m-[24px] bg-white rounded-[10px] flex flex-col">
//                 <div className="flex flex-row m-[1%] ml-[32px] mr-[42px]">
//                     <div className=" items-center justify-start md:w-[50%] w-[0%] ">
//                         <div className="hidden md:flex flex-row justify-start font-medium text-[#333333] text-[24px]">Audits</div>
//                     </div>
//                     {/* <div className=" items-center justify-start w-[50%] ">
//                         <div className="flex flex-row justify-start w-[145px] md:w-[255px] 5xl:w-[535px] border-[#E1E1E1] border-[1px] rounded-[10px] bg-[#F5F5F5]">
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 value={searchText}
//                                 onChange={handlesearch}
//                                 className="outline-none m-2 ml-5 text-start text-grey-shade bg-[#F5F5F5] w-full pl-0   font-normal text-[16px]"
//                             />
//                             <img src={searchIcon} alt="User Name" className="mx-5"></img>
//                         </div>
//                     </div> */}
//                     <div className="text-[10px] md:text-[14px] lg:text-[16px] flex flex-row items-center justify-center md:justify-end md:w-[50%] w-[100%]">
//                         {(authCtx.user?.role.toLowerCase() == "auditor" || authCtx.user?.role.toLowerCase() == "admin") && (
//                             <NavLink
//                                 to={authCtx.user?.role.toLowerCase() != "supervisor" ? "/consumer-audits/new-audit" : "#"}
//                                 className=" mt-1 mr-1 text-center lg:rounded-[10px] md:rounded-[3px] rounded-[3px] flex items-center  lg:w-[144px] lg:h-[50px] md:h-[30px] md:w-[90px] h-[30px] w-[120px] outline-none font-normal lg:text-[16px] md:text-[10px] text-[10px] bg-blood-red shadow-cm text-white"
//                             >
//                                 <img src={addIcon} alt="User Name" className="ml-5 lg:inline md:hidden hidden md:flex" />
//                                 <span className="m-auto">New Audits</span>
//                             </NavLink>
//                         )}

//                         {/* <NavLink
//                             to="/consumer-audits/consumer-auditlist"
//                             className=" mt-1 mr-1 text-center lg:rounded-[10px] md:rounded-[3px] rounded-[3px] flex items-center  lg:w-[144px] lg:h-[50px] md:h-[30px] md:w-[90px] h-[30px] w-[120px] outline-none font-normal lg:text-[16px] md:text-[10px] text-[10px] bg-blood-red shadow-cm text-white"
//                         >
//                             <span className="m-auto">Audit List</span>
//                         </NavLink> */}

//                         {(authCtx.user?.role.toLowerCase() == "supervisor" || authCtx.user?.role.toLowerCase() == "admin") && (

//                             <NavLink
//                                 to="/consumer-audits/consumer-upload-audits"
//                                 className=" mt-1 text-center  lg:rounded-[10px] md:rounded-[3px] rounded-[3px] flex items-center justify-center lg:w-[60px] lg:h-[50px] md:h-[30px] md:w-[50px] h-[30px] w-[100px] outline-none font-normal lg:text-[16px] md:text-[10px] text-[10px] bg-blood-red shadow-cm text-white"
//                             >
//                                 <img src={upload} alt="User Name" className="md:flex" />
//                             </NavLink>
//                         )}
//                         {!isLoading && audits?.length > 0 ? <button
//                             type="button"
//                             onClick={() => downloadFile(url)}
//                             className=" mt-1 md:mt-0 text-center  lg:rounded-[10px] md:rounded-[3px] rounded-[3px] ml-[5px] flex items-center justify-center lg:w-[60px] lg:h-[50px] md:h-[30px] md:w-[50px] h-[30px] w-[100px] outline-none font-normal lg:text-[16px] md:text-[10px] text-[10px] outline-none font-normal  bg-[#333333] shadow-cm text-white"
//                         >

//                             <img src={download} alt="User Name" className="  md:flex" />
//                         </button> : null}
//                         <button
//                             type="button"
//                             onClick={showModal}
//                             className=" mt-1 md:mt-0 text-center  lg:rounded-[10px] md:rounded-[5px] rounded-[3px] ml-[5px] flex items-center justify-center lg:w-[144px] lg:h-[50px] md:h-[30px] md:w-[90px] h-[30px] w-[120px] outline-none font-normal lg:text-[16px] md:text-[10px] text-[10px] bg-[#333333] shadow-cm text-white"
//                         >
//                             Filter
//                         </button>

//                         <Menu as="div" className="relative inline-block">
//                             <Menu.Button className="flex items-center justify-center bg-blood-red w-10 h-10 rounded-[10px] ml-3 border  border-opacity-20 h-[50px]">
//                                 <img src={chevronIcon} alt="Arrow" className="w-3 h-2" />
//                             </Menu.Button>
//                             <Transition
//                                 as={Fragment}
//                                 enter="transition ease-out "
//                                 enterFrom="transform opacity-0 scale-50"
//                                 enterTo="transform opacity-100 scale-100"
//                                 leave="transition ease-in duration-50"
//                                 leaveFrom="transform opacity-100 scale-100"
//                                 leaveTo="transform opacity-0 scale-95"
//                             >
//                                 <Menu.Items className="absolute right-0 mt-2 z-50 w-[110px] origin-top-right divide-y divide-white/10 rounded-full  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                     <div className="z-50">
//                                         <Menu.Item >
//                                             <NavLink
//                                                 to="/consumer-audits/consumer-auditlist"
//                                                 className="w-full h-[42px] flex items-center justify-center gap-x-4 font-medium text-white text-sm bg-blood-red rounded-full "
//                                             > View List
//                                             </NavLink>
//                                         </Menu.Item>
//                                     </div>
//                                 </Menu.Items>
//                             </Transition>
//                         </Menu>
//                     </div>
//                 </div>
//                 <div className="mx-[20px] mt-[5px] mb-[10px]">
//                     <div className="mx-[20px] mt-[5px] mb-[10px]">
//                         {!isLoading ? (
//                             audits && audits.length > 0 ? (
//                                 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 5xl:grid-cols-3 gap-5 justify-items-center">
//                                     {audits.map((item: ConsumerAuditModalGet, index: number) => (
//                                         <AuditCard consumerAuditTileDt={item} key={index} />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div className="flex flex-row item-center justify-center ">
//                                     <p className="text-center text-gray-500 text-lg mb-[20px] p-4">No audits to display</p>
//                                 </div>
//                             )
//                         ) : (
//                             <div className="flex justify-center items-center">
//                                 <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
//                                     <img src={progressActivity} alt="User Name" className="animate-spin h-14 w-14 " />
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {!isLoading && audits?.length && audits?.length > 0 ? (
//                     <div className="flex justify-center lg:gap-4 md:gap-4 gap-1 mb-3">
//                         <button
//                             className="flex items-center  gap-2 lg:px-6 md:px-6 px-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             type="button"
//                             onClick={() => {
//                                 const pageNumber = parseInt(pageId, 10);
//                                 if (pageNumber > 1) {
//                                     handlePageClick(pageNumber - 1);
//                                 }
//                             }}
//                             disabled={parseInt(pageId, 10) === 1}
//                         >
//                             <img src={arrowLeft} alt="User Name" className="w-4 h-4" />
//                             Previous
//                         </button>
//                         <div className="flex items-center gap-2">
//                             {Array.from({ length: totalPages }).map((_, index) => {
//                                 const currentPageNumber = parseInt(pageId, 10);
//                                 if (
//                                     totalPages <= 5 ||
//                                     index === 0 ||
//                                     index === totalPages - 1 ||
//                                     (totalPages >= 5 && Math.abs(currentPageNumber - (index + 1)) <= 1)
//                                 ) {
//                                     return (
//                                         <button
//                                             key={index}
//                                             className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${index + 1 === currentPageNumber ? "bg-gray-900/10" : ""
//                                                 }`}
//                                             onClick={() => handlePageClick(index + 1)}
//                                         >
//                                             <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                                                 {index + 1}
//                                             </span>
//                                         </button>
//                                     );
//                                 } else if (index === 1 || index === totalPages - 2) {
//                                     return (
//                                         <button
//                                             key={index}
//                                             className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                                             onClick={() => { }}
//                                         >
//                                             <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                                                 ...
//                                             </span>
//                                         </button>
//                                     );
//                                 }
//                                 return null;
//                             })}
//                         </div>
//                         <button
//                             className="flex items-center gap-2 lg:px-6 md:px-6 px-3 py-1 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             type="button"
//                             onClick={() => {
//                                 const pageNumber = parseInt(pageId, 10);
//                                 if (pageNumber < totalPages) {
//                                     handlePageClick(pageNumber + 1);
//                                 }
//                             }}
//                             disabled={parseInt(pageId, 10) === totalPages}
//                         >
//                             Next
//                             <img src={arrowRight} alt="User Name" className="w-4 h-4" />
//                         </button>
//                     </div>
//                 ) : null}
//                 <SideModal title="Advanced Filter" open={isModalOpen} onClose={handleClose}>
//                     <div className="mt-6">
//                         <FilterForm handleSerach={handleSerach} searchFilters={searchFilters} setSearchFilters={setSearchFilters} />
//                     </div>
//                 </SideModal>
//                 <NotificationDialog open={alertpopup} handleOpen={() => setalert(false)} message="Failed To Download The File" />

//             </div>
//         </Layout>
//     );
// }
