import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Button from "../components/Button";
import headerBg from "../assets/diag-header-bg.png";
import diagnosisBg from "../assets/diagnosis2-bg.png";
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import line from "../assets/line.png"

const Login = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className="font-primary">
			<div
				className="bg-cover bg-center"
				style={{ background: `url(${headerBg})` }}>
				<Header />
			</div>
			<section>
				<div
					className="max-w-[1512px] px-3 bg-cover bg-bottom py-[150px]"
					style={{ background: `url(${diagnosisBg})` }}>
					<Button
						content="Back"
						textSize="text-[18px] my-7"
						maxWidth="max-w-[128px]"
						minHeight="min-h-[51px]"
					/>
					<div className="min-h-[631px] max-w-[800px] mx-auto bg-[#F01C75] py-7 px-3 pt-[12%]">
						<form
							className="mx-auto rounded-[28px] pt-7 pb-7 px-3 bg-white max-w-[497px]"
							onSubmit={handleSubmit}>
							<p className="text-[24px] font-bold text-black text-center">
								Welcome Back
							</p>
							<p className="text-[14px] text-black text-center">
								Don’t have an account? <span className="underline">Start for free</span>
							</p>
							<div className="flex gap-x-3 w-full mt-5">
								<div className="h-[48px] w-[90%] flex items-center justify-center border rounded-[12px] font-bold text-black">
									<img
										src={google} alt=""
										className="inline-flex mr-2"
									/>{" "}
									Continue with Google
								</div>
								<div className="h-[48px] w-[10%] flex items-center justify-center border rounded-[12px]">
									<img
										src={facebook}
										alt=""
									/>
								</div>
							</div>
							<div className="flex gap-x-1.5 items-center justify-between my-3">
								<img
									src={line}
									alt="line"
								/>
								or
								<img
									src={line}
									alt="line"
								/>
							</div>
							<label className="flex flex-col">
								Email Address
								<input
									type="text"
									name="email"
									placeholder="name@example.com"
									className="outline-none border-[2px] py-[10px] px-[14px] rounded-[12px]"
								/>
							</label>
							<label className="flex flex-col mt-3">
								Password
								<input
									type="text"
									name="password"
									placeholder="name@example.com"
									className="outline-none border-[2px] py-[10px] px-[14px] rounded-[12px]"
								/>
							</label>
							<Button
								content="Login"
								textSize="text-[18px] my-7"
								maxWidth="max-w-full"
								minHeight="min-h-[51px]"
							/>
							<p className="underline text-[14px] text-black text-center">Forgot your password?</p>
						</form>
					</div>
				</div>
			</section>
			<Footer
				paddingTop="pt-[490px]"
				formTop="top-4"
			/>
		</div>
	);
};

export default Login;
