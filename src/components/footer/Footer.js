import email from "../../assets/email.svg";
import cancer from "../../assets/cancer-footer.svg";
import Button from "../Button";
import { Link } from "react-router-dom";

const Footer = ({ paddingTop, formTop }) => {
	return (
		<div className={`${paddingTop} p-3 bg-[#FBDCE4] relative`}>
			<div
				className={`${formTop} w-[97%] absolute left-0 right-0 top-0 mx-auto flex flex-col min-h-[471px] bg-[#ED0566] rounded-b-[50px]`}>
				<div className="min-h-[341px] mx-auto lg:flex gap-5 md:items-center md:justify-between p-3 py-[35px] lg:px-[50px] w-full">
					<div className="max-w-[590px] w-full md:min-h-[341px] flex flex-col">
						<p className="text-[48px] leading-[50px] font-semibold text-white">
							Give us feedback on how we can serve you better
						</p>
						<p className="mt-5 lg:mt-auto text-white text-[22px]">Be heard!</p>
					</div>
					<form className="w-full max-w-[600px] flex flex-col" onSubmit={(e) => e.preventDefault()}>
						<input className="w-full bg-inherit p-0.5 mt-2 text-white border-white border-b-[2px] placeholder:text-white outline-none" placeholder="First Name"/>
						<input className="w-full bg-inherit p-0.5 mt-6 text-white border-white border-b-[2px] placeholder:text-white outline-none" placeholder="Feedback"/>
						<Button
						content="Submit"
						textSize="text-[15px] mt-8 ms-auto"
						textColor="text-[#2E2F35] hover:text-white"
						border="border-[#EF1B73] border-[2px]"
						maxWidth="max-w-[107px]"
						minHeight="min-h-[51px]"
						color="bg-white"
					/>
					</form>
				</div>
				<div className="h-[80px] w-full bg-gradient-to-b from-[#ED0566] to-[#FBDCE4] mt-auto rounded-b-[45px]"></div>
			</div>
			<footer className="footer w-full p-10 px-3 text-black mt-3">
				<nav className="mx-auto">
					<header className="footer-title opacity-100 text-[14px] text-black">
						Company
					</header>
					<Link to="/about" className="link link-hover text-[14px] font-medium list-none text-black">
						About Us
					</Link>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Partner Program
					</li>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Carrer
					</li>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Privacy Policy
					</li>
				</nav>
				<nav className="mx-auto">
					<header className="footer-title opacity-100 text-[14px] text-black">
						OTHERS
					</header>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Reviews
					</li>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Direct Mail Academy
					</li>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Success Stories
					</li>
					<li className="link link-hover text-[14px] font-medium list-none text-black">
						Terms & Conditions
					</li>
				</nav>
				<nav className="mx-auto">
					<header className="footer-title opacity-100 text-[14px] text-black">
						CONTACT
					</header>
					<header className="footer-title normal-case">
						<img
							src={email}
							alt="email"
							className="inline-flex"
						/>{" "}
						support@bcds.com
					</header>
					<div className="text-[17px] font-medium text-[#58595D] mt-6">
						{" "}
						<p>Created & Designed by</p>
						<div className="flex items-center justify-between gap-x-5">
							<p>ODUYOMI OLUWADAMILARE E.</p>
							<p>190591178</p>
						</div>
						<div className="flex items-center justify-between gap-x-5">
							<p>AFOLABI TOBILOLA BLESSING</p>
							<p>190591033</p>
						</div>
						<div className="flex items-center justify-between gap-x-5">
							<p>OLAKULEHIN IMISIOLUWA</p>
							<p>1905911214</p>
						</div>
					</div>
				</nav>
			</footer>
			<div className="lg:px-[110px] px-3 max-w-[1328px] mx-auto md:flex items-center md:justify-between">
				<div>
					<div className="flex items-center">
						<p className="text-[26px] font-black">B C</p>
						<img
							src={cancer}
							alt=""
						/>
						<p className="text-[26px] font-black">D S</p>
					</div>
					<p className="text-[11px]">Breast Cancer Diagnosis Cancer</p>
					<p className="text-13px] text-black">
						© 2023 Breast Cancer Diagnosis System. All rights reserved.
					</p>
				</div>
				<div className="w-full max-w-[297px]">
					<Link to="/login"><Button
						content="Login"
						textSize="text-[15px]"
						textColor="text-[#2E2F35] hover:text-white"
						border="border-[#EF1B73] border-[2px]"
						maxWidth="max-w-[107px]"
						minHeight="min-h-[51px]"
						color="bg-white"
					/></Link>
					<Button
						content="Sign up for free"
						textSize="text-[15px] ms-2"
						maxWidth="max-w-[174px]"
						minHeight="min-h-[51px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
