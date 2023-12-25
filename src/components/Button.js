import React from "react";

const Button = ({
	content,
	maxWidth,
	minHeight= "min-h-[92px]",
	color = "bg-[#ED0566D9]",
	hover = "hover:bg-[#ED0566D9]/95",
	textColor = "text-white",
	textSize = "text-[30px]",
	border
}) => {
	return (
		<button
			className={`btn w-full ${color} ${hover} ${maxWidth} ${minHeight} ${textSize} ${textColor} ${border} transition-all rounded-[16px]`}>
			{content}
		</button>
	);
};

export default Button;
