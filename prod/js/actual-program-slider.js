window.onload = function() {
	let swiper = new Swiper(".actual-program-slider", {
		slidesPerView: 2,
		spaceBetween: 24,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 4,
				centeredSlides: true,
			},
			769: {
				slidesPerView: 2,
				spaceBetween: 24,
				grid: {
					rows: 2,
					fill: "row",
				},
			},
		}
	});
}