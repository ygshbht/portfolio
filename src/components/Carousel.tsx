import React, { useState } from "react";
import { Box } from "@mui/material";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CarouselProps {
	children?: any;
}

export default function Carousel({ children }: CarouselProps) {
	//convert children to array if only one element
	try {
		children = [...children];
	} catch {
		children = [children];
	}
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});

	return (
		<>
			<Box sx={{ width: "100%" }} className="navigation-wrapper">
				<div ref={sliderRef} className="keen-slider">
					{children.map((child: any, index: number) => {
						return (
							<Box
								sx={{ p: 1, display: "flex", justifyContent: "center" }}
								key={index}
								className="keen-slider__slide "
							>
								{child}
							</Box>
						);
					})}
					{/* <div className="keen-slider__slide number-slide2">2</div>
					<div className="keen-slider__slide number-slide3">3</div>
					<div className="keen-slider__slide number-slide4">4</div>
					<div className="keen-slider__slide number-slide5">5</div>
					<div className="keen-slider__slide number-slide6">6</div> */}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides.length - 1
							}
						/>
					</>
				)}
			</Box>
			{loaded && instanceRef.current && (
				<div className="dots">
					{[
						...Array(instanceRef.current.track.details.slides.length).fill(0),
					].map((asdf, idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={"dot" + (currentSlide === idx ? " active" : "")}
							></button>
						);
					})}
				</div>
			)}
		</>
	);
}

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabeld = props.disabled ? " arrow--disabled" : "";
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? "arrow--left" : "arrow--right"
			} ${disabeld}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}
