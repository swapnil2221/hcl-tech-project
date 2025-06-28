import userLogo from "../assets/icons/userNameLogo.svg";
import passwordLogo from "../assets/icons/password_Icon.svg";
import logoForLogin from "../assets/userName.svg";
import ceqRedLogo from "../assets/ceq_red.svg";
import doubleArrow from "../assets/icons/doubleArrow.svg";
export default function Login() {
    return (
        <>
            <main className="w-full bg-Login">
                <div className="w-full flex flex-col md:flex-row p-[100px]">
                    <div className="w-full flex flex-col p-20 ml-[100px]">
                        <div className="h-full p-10 align-middle">
                            <img src={logoForLogin} alt="e&" className="w-72 m-8" />
                        </div>

                        <div className="h-full text-center m-8 p-10 mt-[80px] font-roboto text-4xl font-semibold leading-1.5 tracking-wider text-center">
                            Portfolio Management
                            <br /> Portal <span className="text-red-600">Portal</span>
                        </div>
                    </div>
                    <div className="w-full p-10 ">
                        <form className="box-border flex flex-col items-center justify-center w-[608px] h-[602px]  bg-white border border-solid border-gray-300 shadow-lg rounded-lg p-[50px]">
                            <div>
                                <img src={ceqRedLogo} alt="Ceq Logo " className="m-[30px]"></img>
                                <h1 className="font-roboto font-bold text-26 leading-39 flex items-center justify-center text-center text-gray-700">
                                    Login
                                </h1>
                            </div>
                            <div className="grow w-full  pt-[30px]">
                                <div className="flex flex-row border-gray-300 border mb-6">
                                    <img src={userLogo} alt="User Name" className="p-5"></img>
                                    <input
                                        type="text"
                                        placeholder="User Name"
                                        className="border-l m-2 ml-0 border-gray-300 text-center w-full pl-0 h-[55px] px-8 outline-none font-normal text-sm bg-white shadow-cm text-[#474747] placeholder:text-[#474747]"
                                    />
                                </div>
                                <div className="flex flex-row border-gray-300 border mb-6">
                                    <img src={passwordLogo} alt="password" className="p-5"></img>
                                    <input
                                        type="text"
                                        placeholder="Password"
                                        className="border-l m-2 ml-0 text-center w-full h-[55px] pl-0 px-8 outline-none font-normal text-sm bg-white shadow-cm text-[#474747] placeholder:text-[#474747]"
                                    />
                                </div>
                                <div className="flex flex-row items-center justify-center">
                                    <button className="text-center flex items-center w-full h-[65px]  outline-none font-normal text-sm bg-[#464646] shadow-cm text-white">
                                        <span className="text-right w-[55%]">Login</span>
                                        <img src={doubleArrow} alt="User Name" className="ml-2"></img>{" "}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
