import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Rellax from "rellax";

const images = [
	"css.png",
	"js.png",
	"node.png",
	"express.png",
	"react.png",
	"html.png",
];

export default function Background() {
	const imagesRef = useRef<HTMLElement>(null);

	// useEffect(() => {
	// 	const rellax = new Rellax(".imgs-container img");
	// }, []);

	// useEffect(() => {
	// 	function handleResize() {
	// 		const container = imagesRef.current as HTMLElement;
	// 		let images = container.querySelectorAll("img");
	// 		images.forEach((img) => {
	// 			let marginLeft = container.offsetWidth * Math.random();
	// 			function shiftValueTowardsEnd() {
	// 				if (marginLeft > container.offsetWidth / 2) {
	// 					marginLeft =
	// 						marginLeft + (container.offsetWidth - marginLeft) / 1.5;
	// 				} else {
	// 					marginLeft = marginLeft - marginLeft / 1.5;
	// 				}
	// 			}
	// 			shiftValueTowardsEnd();
	// 			img.style.marginLeft = marginLeft + "px";
	// 		});
	// 	}
	// 	window.addEventListener("resize", handleResize);
	// 	handleResize();
	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// });
	return (
		<Box
			className="bg-cover-center"
			sx={{
				position: "fixed",
				top: 0,
				zIndex: -1,
				mx: "auto",
				width: "min(1920px, 100%)",
				height: "100%",
			}}
		>
			<img
				style={{
					opacity: 0.1,
					// transform: "rotate(90deg)",
					objectFit: "cover",
					width: "100%",
					height: "100%",
				}}
				src="/main bg.jpg"
				alt=""
			/>
			<Box
				className="imgs-container"
				ref={imagesRef}
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					padding: "30px",
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					"&>*": {
						maxWidth: "100px",
						maxHeight: "100px",
						my: 3,
						// minHeight: "50px",
						// minWidth: "50px",
						padding: 2,
						boxShadow: "0 0 3px  black",
						display: "block",
						marginLeft: Math.random() * 100,
						opacity: 0.6,
						// position: "absolute",
					},
				}}
			>
				{/* {multiplyArray(images, 6).map((img, index) => {
					return (
						<img
							data-rellax-speed={Math.random() * 15}
							key={index}
							src={`/bg images/${img}`}
							alt=""
						/>
					);
				})} */}

				{/* 			 */}
			</Box>
		</Box>
	);
}
function multiplyArray(array: any[], num: number) {
	let tempArray: any[] = [];
	for (let i = 0; i < num; i++) {
		array.forEach((item) => {
			tempArray.push(item);
		});
	}
	return tempArray;
}
