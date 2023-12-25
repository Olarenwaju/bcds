import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import headerBg from "../assets/diag-header-bg.png";
import aboutBg from "../assets/about-bg.png";
import aboutImg from "../assets/about.png"
const About = () => {

	return (
		<div className="font-primary">
			<div
				className="bg-cover bg-center bg-no-repeat"
				style={{ background: `url(${headerBg})` }}>
				<Header />
			</div>
			<section>
				<div
					className="text-black max-w-[1512px] px-3 md:px-10 bg-cover bg-center py-[50px]"
					style={{ background: `url(${aboutBg})` }}>
					<h1 className="text-[43px] text-black">About Breast Cancer</h1>
					<section>
						<div className="mx-auto max-w-[1512px] flex gap-x-[30px] text-[18px] md:text-[26px]">
							<div>
								<p>
									Breast cancer is a disease in which abnormal breast cells grow out of
									control and form tumours. If left unchecked, the tumours can spread
									throughout the body and become fatal. Breast cancer is a complex and
									potentially life-threatening disease characterized by the uncontrolled
									growth of cells in breast tissue. It primarily affects women but can
									also occur in men, although male breast cancer is relatively rare. This
									disease is a global health concern, with varying incidence rates across
									regions and populations. (W.H.O, 2023).
								</p>
								<h3 className="font-bold text-black mt-4">Types of Breast Cancer </h3>
								<p>
									Breast cancer encompasses several different types and subtypes, which
									can be classified based on various factors, including the type of cells
									involved and specific molecular characteristics. This condition can be
									categorized into two primary classifications: invasive and non-invasive
									breast cancer (Nair, 2015).
								</p>
							</div>
							<img
								src={aboutImg}
								alt=""
								className="hidden md:block"
							/>
						</div>
					</section>

					<section>
						<div className="mx-auto max-w-[1512px] flex gap-x-[30px] text-[18px] md:text-[26px]">
							<div>
								<h3 className="font-bold text-black mt-5">Invasive Breast Cancer </h3>
								<p>
									Invasive breast cancer also referred to as infiltrating breast cancer,
									indicates the presence of cancer cells that have penetrated and spread
									into the surrounding breast tissue. The two predominant forms of
									invasive breast cancer are distinguished by their point of origin
									within the breast: <br />
									<br /> 1. Invasive Ductal Carcinoma (IDC): This type of invasive breast
									cancer initiates its growth within the milk ducts, which are the
									conduits responsible for transporting milk from the lobules to the
									nipple. It stands as the most prevalent form, accounting for
									approximately 80% of all breast cancer diagnoses. <br />
									<br /> 2. Invasive Lobular Carcinoma (ILC): Invasive lobular carcinoma
									arises from the lobules, the glandular structures responsible for milk
									production in the breast. It ranks as the second most common type,
									representing around 10% of all cases of invasive breast cancer (Zhang
									et al., 2020). <br />
									<br /> Several subtypes of invasive breast cancer exhibit distinct
									characteristics that influence their development and treatment
									approaches <br />
									<br /> 1. Triple-Negative Breast Cancer: This aggressive form of
									invasive breast cancer lacks estrogen and progesterone receptors and
									does not overexpress HER2 proteins. It constitutes approximately 12% of
									all invasive breast cancer cases.
									<br />
									<br /> 2. Inflammatory Breast Cancer: Inflammatory breast cancer is a
									rare and highly aggressive type of invasive breast cancer, accounting
									for approximately 1% of all breast cancer cases in the United States.
									<br />
									<br /> 3. Metastatic Breast Cancer (Stage IV): Metastatic breast cancer
									refers to invasive breast cancer that has spread (metastasized) to
									distant parts of the body, such as the bones, liver, lungs, or brain.
									Some individuals may be initially diagnosed with metastatic disease (de
									novo metastatic breast cancer), while others experience metastatic
									recurrence months or years after the original treatment.
									<br /> 4. Recurrent Breast Cancer: Recurrent invasive breast cancer is
									characterized by its return, occurring months or years after initial
									treatment. It can recur locally in the same breast, regionally in
									nearby lymph nodes (e.g., armpit or collarbone), or distantly
									(metastatic or distant recurrence).
									<br />
									<br /> 5. Male Breast Cancer: Although rare, breast cancer can affect
									men, accounting for fewer than 1% of all breast cancer cases. The
									majority of male breast cancers are invasive ductal carcinomas.
									<br />
									<br /> 6. Paget Disease of the Breast: This uncommon form of breast
									cancer involves the accumulation of cancer cells in or around the
									nipple.
									<br />
									<br /> These distinctions in origin and prevalence guide medical
									professionals in tailoring treatment approaches and strategies for
									patients diagnosed with invasive breast cancer (DePolo, 2023; A.C.S,
									2021).
									<br />
									<br /> <span className="font-bold text-black">Non-invasion Breast Cancer</span> 
									<br /> Non-invasive breast cancer, also known as in situ breast cancer,
									signifies that the cancer has not extended beyond the original breast
									tissue where it originated. These non-invasive breast cancer types are
									sometimes referred to as precancerous conditions. There are two primary
									categories of non-invasive breast cancer:
									<br />
									<br /> 1. Ductal Carcinoma In Situ (DCIS): DCIS is a non-invasive form
									of breast cancer that remains confined within the milk ducts where it
									initially developed. While DCIS is not an immediate threat to life, it
									is regarded as a precursor to invasive breast cancer and elevates the
									risk of developing invasive breast cancer later in life. DCIS accounts
									for approximately 16% of all breast cancer diagnoses.
									<br />
									<br /> 2. Lobular Carcinoma In Situ (LCIS): LCIS is a non-invasive
									breast condition that does not spread beyond the lobules, despite its
									name. It is considered a benign breast condition and is not categorized
									as true breast cancer. These distinctions are essential in guiding
									medical decisions and treatment strategies for individuals diagnosed
									with non-invasive breast cancer or related conditions (DePolo, 2023;
									A.G.C.A, 2023).
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
			<Footer
				paddingTop="pt-[490px]"
				formTop="top-4"
			/>
		</div>
	);
};

export default About;
