import React, { useState,useRef } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Button from "../components/Button";
import headerBg from "../assets/diag-header-bg.png";
import diagnosisBg from "../assets/diagnosis2-bg.png";
import info from "../assets/inform.svg";
import add from "../assets/add.svg";
import arrow from "../assets/arrow-right.svg"

const Diagnosis = () => {
	const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  	const [diagnosisResult, setDiagnosisResult] = useState('');
  	const [recommendationsResult, setRecommendationsResult] = useState('');

	const symptomData = [
		{
		  symptoms: ['Lump or Mass', 'Nipple Change', 'Skin change'],
		  diagnosis: 'Ductal Carcinoma In Situ (DCIS)',
		  recommendations: ['- Lumpectomy (removal of the tumor)', '- Mastectomy (removal of the entire breast)'],
		},
		{
		  symptoms: ['Thickening or swelling in breast', 'Skin chnages'],
		  diagnosis: 'Invasive Ductal Carcinoma (IDC) ',
		  recommendations: ['Surgery (lumpectomy or mastectomy)', 'Radiation therapy', 'Chemotherapy'],
		},
		{
			symptoms: ['changes in breast appearance', 'Swelling', 'Breast Pain'],
			diagnosis: 'Invasive Lobular Carcinoma (ILC)',
			recommendations: ['Hormone therapy', 'Chemotherapy', 'Surgery (lumpectomy or mastectomy)'],
		},
		{
			symptoms: ['Breast lump or mass', '- Skin changes (redness, dimpling)', 'Breast Pain'],
			diagnosis: 'Triple-Negative Breast Cancer',
			recommendations: ['Immunotherapy (in some cases)', 'Chemotherapy', 'Surgery (lumpectomy or mastectomy)'],
		},
		// Add more symptom data as needed
	];
	


	const handleSymptomChange = (event) => {
		const { value } = event.target;
	
		// Toggle the selected symptom
		setSelectedSymptoms((prevSelected) =>
		  prevSelected.includes(value)
			? prevSelected.filter((s) => s !== value)
			: [...prevSelected, value]
		);
	};

	const handleDiagnosisButtonClick = () => {
		// Logic to find diagnosis and recommendations based on selected symptoms
		const { diagnosis, recommendations } = findDiagnosisAndRecommendations(selectedSymptoms);

		console.log('Diagnosis: ', diagnosis)
		console.log('Recommendations: ', recommendations)
	
		// Update state to display the result
		setDiagnosisResult(diagnosis);
		setRecommendationsResult(recommendations);
	};

	const findDiagnosisAndRecommendations = (selectedSymptoms) => {
		
	
		// Convert selected symptoms to a set for easier comparison
		const selectedSet = new Set(selectedSymptoms);
	
		// Find matching symptom set in symptomData
		const matchedSymptomSet = symptomData.find((item) =>
		  item.symptoms.every((symptom) => selectedSet.has(symptom))
		);
	
		// Return diagnosis and recommendations if a match is found
		return matchedSymptomSet
		  ? { diagnosis: matchedSymptomSet.diagnosis, recommendations: matchedSymptomSet.recommendations }
		  : { diagnosis: '', recommendations: [] };
	};


	const fileInputRef = useRef(null);

		const handleHiddenInputClick = () => {
			fileInputRef.current.click();
		};

		const handleFileInputChange = (event) => {
			const fileList = event.target.files;
			// Handle the file list as needed, e.g., upload or process the files
			console.log(fileList);
		};


	const ages = Array.from({ length: 43 }, (_, index) => `${index + 18}`);



	return (
		<div className="font-primary">
			<div
				className="bg-cover bg-center"
				style={{ background: `url(${headerBg})` }}>
				<Header />
			</div>
			<section>
				<div
					className="max-w-[1512px] px-3 bg-cover bg-bottom"
					style={{ background: `url(${diagnosisBg})` }}>
					<form
						className="pt-7 pb-7"
						onSubmit={(e) => e.preventDefault()}>
						<Button
							content="Back"
							textSize="text-[18px] my-7"
							maxWidth="max-w-[128px]"
							minHeight="min-h-[51px]"
						/>
						<h3 className="text-black text-[28px] font-bold">Get a Diagnosis</h3>
						<p className="text-[22px] text-[#7E7E7E]">Enter your details</p>
						<div className="flex flex-col ">
							<label className="text-[#7E7E7E] mt-2">Age</label>
							<select className="max-w-[424px]">
								{ages.map((age, index) => (
									<option
										key={index}
										value={age}>
										{age}
									</option>
								))}
							</select>
						</div>
						<div className="mt-7">
							<label className="text-[#696A6F]">Symptoms:</label>
							<div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-wrap">

							{symptomData.map((item, index) => (
								<div key={index}>
								{item.symptoms.map((symptom) => (
									<div key={symptom}>
									<label className="min-w-max text-black font-semibold">
										<input
										type="checkbox"
										className="mr-2"
										value={symptom}
										checked={selectedSymptoms.includes(symptom)}
										onChange={handleSymptomChange}
										/>
										{symptom}
									</label>
									</div>
								))}
								</div>
							))}	

								{/* {symptomData.map((item) => (
									<div key={item.diagnosis}>

										{item.symptoms.map((symptom) => (
											<div key={symptom}>
												<label className="min-w-max text-black fonr-semibold">
													<input
														type="checkbox"
														className="mr-2"
														value={symptom}
														checked={selectedSymptoms.includes(symptom)}
														onChange={handleSymptomChange}
													/>
													{symptom}
												</label>
											</div>
										))}								
									</div>							
								))} */}

								 {/* <div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="lump_or_mass"
											checked={selectedSymptoms.includes("lump_or_mass")}
											onChange={handleSymptomChange}
										/>
										Lump or Mass
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="changes_in_size_or_shape"
											checked={selectedSymptoms.includes("changes_in_size_or_shape")}
											onChange={handleSymptomChange}
										/>
										Changes in Size or Shape
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="skin_changes"
											checked={selectedSymptoms.includes("skin_changes")}
											onChange={handleSymptomChange}
										/>
										Skin Changes
										<div style={{ marginLeft: "20px", fontSize: "0.85em" }}>
											<label className="text-[#696A6F] text-[14px]">
												Redness, dimpling, or puckering
											</label>
										</div>
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="nipple_changes"
											checked={selectedSymptoms.includes("nipple_changes")}
											onChange={handleSymptomChange}
										/>
										Nipple Changes
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="discharge_other_than_breast_milk"
											checked={selectedSymptoms.includes(
												"discharge_other_than_breast_milk",
											)}
											onChange={handleSymptomChange}
										/>
										Discharge other than breast milk
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="pain_or_discomfort"
											checked={selectedSymptoms.includes("pain_or_discomfort")}
											onChange={handleSymptomChange}
										/>
										Pain or Discomfort
										<div style={{ marginLeft: "20px", fontSize: "0.85em" }}>
											<label className="text-[#696A6F] text-[14px]">
												Unexplained tenderness or pain
											</label>
										</div>
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="skin_colour_changes"
											checked={selectedSymptoms.includes("skin_colour_changes")}
											onChange={handleSymptomChange}
										/>
										Skin Colour Changes
									</label>
								</div>

								<div>
									<label className="min-w-max text-black fonr-semibold">
										<input
											type="checkbox"
											className="mr-2"
											value="swelling"
											checked={selectedSymptoms.includes("swelling")}
											onChange={handleSymptomChange}
										/>
										Swelling
										<div style={{ marginLeft: "20px", fontSize: "0.85em" }}>
											<label className="text-[#696A6F] text-[14px]">
												Distortion or swelling in part of the breast
											</label>
										</div>
									</label>
								</div>  */}

							</div>

							<div className="mt-7">
								<label className="text-[14px] text-[#696A6F]">
									Mammogram (Optional)
								</label>
								<div>
									<input
										type="file"
										ref={fileInputRef}
										onChange={handleFileInputChange}
										style={{ display: "none" }}
									/>
									<div
										onClick={handleHiddenInputClick}
										className="bg-[#E0E0E0] rounded-lg py-2 px-5 cursor-pointer w-fit my-2">
										<img
											src={add}
											alt=""
											className="inline-flex mr-1.5"
										/>
										PNG or JPEG
										<img
											src={arrow}
											alt=""
											className="inline-flex ml-1.5"
										/>
									</div>
								</div>
								<label className="text-[#696A6F] text-[14px]">
									<img
										src={info}
										className="inline-flex mr-2"
										alt=""
									/>
									maximum file size: 1MB
								</label>
							</div>

							<div className="my-5">
								<Button
									onClick={handleDiagnosisButtonClick}
									content="Diagnosis"
									textSize="text-[18px] mb-5"
									maxWidth="max-w-[128px]"
									minHeight="min-h-[51px]"
								/>

								<button onClick={handleDiagnosisButtonClick}>
									Diagnosis
								</button>
							</div>

							<div className="mt-7">
								<div className="mb-4">
									<label
										htmlFor="diagnosis"
										className="block font-semibold mb-2">
										Diagnosis Result:
									</label>
									<textarea
										id="diagnosis"
										value={diagnosisResult}
										className="border border-gray-300 rounded-md w-full p-2 outline-none"
										rows="5"
									/>
								</div>

								<div classsName="max-w-[424px] outline-none mt-10">
									<label
										htmlFor="recommendations"
										className="block font-semibold mb-2">
										Recommendations:
									</label>
									<textarea
										id="recommendations"
										value={Array.isArray(recommendationsResult) ? recommendationsResult.join('\n') : recommendationsResult}								
										className="border border-gray-300 rounded-md w-full p-2 outline-none"
										rows="5"
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			<Footer paddingTop="pt-[490px]" formTop="top-4"/>
		</div>
	);
};

export default Diagnosis;
