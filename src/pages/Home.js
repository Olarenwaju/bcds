import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import cancersign from "../assets/cancer-sign.png";
import ellipse from "../assets/ellipse-img.png";
import calendar from "../assets/calendar.png";
import pinkRibbon from "../assets/pink-ribbon.png";
import pinkRibbon2 from "../assets/pink-ribbon2.png";
import leftDesign1 from "../assets/left-design1.png";
import leftDesign2 from "../assets/left-design2.png";
import rightDesign1 from "../assets/right-design1.png";
import rightDesign2 from "../assets/right-design2.png";
import info from "../assets/info.svg";
import getHelp from "../assets/get-help.svg";
import reminders from "../assets/reminders.svg";
import diagnosis from "../assets/diagnosis-female.png";
import diagnosisBg from "../assets/diagnosis-bg.png";

import "../css/style.css";
import Button from "../components/Button";

const Home = () => {
	return (
		<div className="font-primary bg-[#FBDAE8]/60">
			<div className="hero-bg-img bg-cover bg-center">
				<Header />

				<section>
					<div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
						<div className="text-white font-bold text-7xl lg:flex-grow md:w-1/2 lg:pr-15 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
							When cancer is detected <br /> early, there is a 98% <br /> survival rate
						</div>

						<div class="lg:max-w-[400px] lg:w-full md:w-1/2 w-5/6">
							<img
								// className="object-cover object-center rounded"
								alt="hero"
								src={cancersign}
							/>
						</div>
					</div>
				</section>
			</div>

			<div className="min-h-[582px] p-2 relative bg-[#FBDAE8]/60">
				<div className="container bg-[#FBDAE8] px-3 py-6 flex lg:flex-row flex-col gap-14 justify-center items-center max-w-[1129px] min-h-[582px] left-0 right-0 mx-auto md:absolute z-50 top-[-60px]">
					<div>
						<div className="text-[23.6px] text-center md:text-left leading-[43.56px] p-2 max-w-[437px]">
							Breast cancer awareness is a global health campaign aimed at increasing
							public awareness about breast cancer, encouraging early detection, and
							fostering support for those affected by the disease
						</div>
						<Link
							to="diagnosis"
							className="mt-5">
							<Button
								content="Get a Diagnosis"
								maxWidth={"max-w-408px"}
							/>
						</Link>
					</div>

					<img
						src={ellipse}
						alt="img"
						className="max-w-[507.97px]"
					/>
				</div>
			</div>

			<section class="text-gray-600 body-font bg-[#FBDAE8]/60 relative pt-[200px] pt-0 z-0">
				<div class="container px-5 py-24 mx-auto z-50 relative">
					<div class="flex flex-wrap -m-4 px-5">
						<div class="p-4 lg:w-1/3">
							<div className="bg-white p-4 rounded-t-2xl">
								<h2 className="text-[32px] title-font font-semibold text-[#ED0566] mb-1 leading-[48px] text-center rounded-t-lg">
									Early Detection <br /> Saves Lives
								</h2>

								<p class="mb-3 text-[18px] leading-[27px] text-black text-center px-0.5">
									Emphasizing the significance of early detection through regular breast
									self-exams, clinical breast exams, and mammograms is a central theme.
									Detecting breast cancer in its early stages often leads to more
									effective treatment and improved outcomes.
								</p>
							</div>
							<img
								src={calendar}
								alt="early-detection"
								className="w-full"
							/>
						</div>

						<div class="p-4 lg:w-1/3">
							<div className="bg-white p-4 rounded-t-2xl">
								<h2 className="text-[32px] title-font font-semibold text-[#ED0566] mb-1 leading-[48px] text-center rounded-t-lg">
									Pink Ribbon <br /> Symbolism
								</h2>

								<p class="mb-3 text-[18px] leading-[27px] text-black text-center">
									The pink ribbon has become a universal symbol of breast cancer
									awareness. Wearing or displaying the pink ribbon during awareness
									campaigns signifies solidarity with those affected by breast cancer and
									shows support for the ongoing efforts to find a cure.
								</p>
							</div>
							<img
								src={pinkRibbon}
								alt="pink-ribbon-symbolism"
								className="w-full"
							/>
						</div>

						<div class="p-4 lg:w-1/3">
							<div className="bg-white p-4 rounded-t-2xl">
								<h2 className="text-[32px] title-font font-semibold text-[#ED0566] mb-1 leading-[48px] text-center rounded-t-lg">
									Get familiar with <br /> some Symptoms
								</h2>

								<p class="mb-3 text-[18px] leading-[27px] text-black text-center">
									Lump or Mass, Changes in Size or Shape, Skin Changes (redness,
									dimpling, or puckering), Nipple Changes, Discharge other than breast
									milk, Pain or Discomfort (unexplained tenderness or pain), Skin Color
									Changes, Swelling (distortion or swelling in part of the breast).
								</p>
							</div>
							<img
								src={pinkRibbon2}
								alt="symptoms"
								className="w-full"
							/>
						</div>
					</div>
				</div>
				<img
					src={leftDesign1}
					alt=""
					className="absolute left-0 top-[350px]"
				/>
				<img
					src={leftDesign2}
					alt=""
					className="absolute left-0 top-[500px]"
				/>
				<img
					src={rightDesign1}
					alt=""
					className="absolute right-0 top-[180px] z-0"
				/>
				<img
					src={rightDesign2}
					alt=""
					className="absolute right-0 top-[350px]"
				/>
			</section>

			<section className="py-8 bg-[#FBDAE8]/60">
				<h2 className="text-black text-[28px] md:text-[38px] font-semibold text-center">
					Breast Cancer Information
				</h2>
				<div className="">
					<div class="container px-5 py-24 mx-auto z-50 relative">
						<div class="flex flex-wrap -m-4 px-5 gap-5 md:justify-between mx-auto w-fit">
							<div className="p-4 mx-auto flex flex-col items-center gap-5">
								<div className="p-4 max-w-[351px] h-[351px] flex flex-col items-center justify-center rounded-full bg-[#FBDAE866] shadow-md">
									<img
										src={info}
										alt="information"
									/>
									<h3 className="text-black text-[28px] font-semibold leading-[42px] text-center">
										Do you need information
									</h3>
									<p className="text-[20px] text-black text-center">
										Information is power, and ignorance can be dangerous. Get all
										information you need from here.
									</p>
								</div>
								<Link to="/about"><Button
									content="About breast cancer"
									minHeight="min-h-[67px]"
									maxWidth="max-w-[262px]"
									textColor="text-white"
									textSize="text-[21px]"
								/></Link>
							</div>

							<div className="p-4 mx-auto flex flex-col items-center gap-5">
								<div className="p-4 max-w-[351px] h-[351px] flex flex-col items-center justify-center rounded-full bg-[#FBDAE866] shadow-md">
									<img
										src={getHelp}
										alt="information"
									/>
									<h3 className="text-black text-[28px] font-semibold leading-[42px] text-center">
										Do you need information
									</h3>
									<p className="text-[20px] text-black text-center">
										Information is power, and ignorance can be dangerous. Get all
										information you need from here.
									</p>
								</div>
								<Button
									content="Get Help"
									minHeight="min-h-[67px]"
									maxWidth="max-w-[262px]"
									textColor="text-white"
									textSize="text-[21px]"
								/>
							</div>

							<div class="p-4 mx-auto flex flex-col items-center gap-5">
								<div className="p-4 max-w-[351px] h-[351px] flex flex-col items-center justify-center rounded-full bg-[#FBDAE866] shadow-md">
									<img
										src={reminders}
										alt="information"
									/>
									<h3 className="text-black text-[28px] font-semibold leading-[42px] text-center">
										Do you need information
									</h3>
									<p className="text-[20px] text-black text-center">
										Information is power, and ignorance can be dangerous. Get all
										information you need from here.
									</p>
								</div>
								<Button
									content="Get Reminders"
									minHeight="min-h-[67px]"
									maxWidth="max-w-[262px]"
									textColor="text-white"
									textSize="text-[21px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full bg-[#FBDCE4]">
				<div
					className="mx-auto max-w-[1512px] min-h-[948px] py-8 px-1 md:px-2 md:justify-between bg-cover bg-no-repeat relative"
					style={{ backgroundImage: `url(${diagnosisBg})` }}>
					<div className="flex flex-col items-center justify-between px-3 lg:flex-row gap-5 ">
						<div className="w-full max-w-[702px] flex flex-col gap-10 justify-center">
							<h3 className="text-[48px] font-semibold text-black leading-[32px] text-center lg:text-left">
								Get a Diagnosis
							</h3>
							<p className="	text-[26px] font-medium text-black leading-[39px] text-center lg:text-left">
								Do you feel some symptoms but you are unsure?
							</p>
							<Link to="/diagnosis">
								<Button
									content="Get a Diagnosis"
									maxWidth="max-w-[347px] mx-auto lg:mx-0"
									textSize="text-[30px]"
								/>
							</Link>
						</div>

						<img
							alt="diagnosis"
							src={diagnosis}
							className="w-full max-w-[536px]"
						/>
					</div>
				</div>
			</section>
			<Footer
				paddingTop="lg:pt-[250px] pt-[500px]"
				formTop="top-[-200px]"
			/>
		</div>
	);
};

export default Home;
