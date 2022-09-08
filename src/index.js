import "./scss/main.scss";

// DOM
const container = document.querySelector(".container");
const intro = document.querySelector(".intro");
const introContent = intro.querySelector(".content");
const introTitle = introContent.querySelector(".title");
const introTitleSizeStart = introContent.offsetWidth * 0.13;
const section1 = document.querySelector(".section__1");
const section1Content = section1.querySelector(".content");
const section2 = document.querySelector(".section__2");
const section2Content = section2.querySelector(".content");
const section3 = document.querySelector(".section__3");
const section3Content = section3.querySelector(".content");
const section3Anchor = section3.querySelector('.move');
const winWidth = window.innerWidth;

// 섹션 정보 변수 설정
const sectionInfo = [
	// intro
	{
		width: intro.offsetWidth,
		introContentWidthStart: introContent.offsetWidth,
		introContentWidthEnd: 0,
		introFontStart: introTitleSizeStart,
		introFontEnd: 0,
	},
	// section1
	{
		width: section1.offsetWidth,
		translateXStart: winWidth - 150,
		translateXEnd: 50,
		content: section1Content,
		scrollWidth: section1Content.scrollWidth,
		contentWidth: section1Content.scrollWidth + 50,
	},
	// section2
	{
		width: section2.offsetWidth,
		translateXStart: winWidth - 100,
		translateXEnd: 100,
		content: section2Content,
		scrollWidth: section2Content.scrollWidth,
		contentWidth: section2Content.scrollWidth + 50,
	},
	// section3
	{
		width: section3.offsetWidth,
		translateXStart: winWidth - 50,
		translateXEnd: 150,
		content: section3Content,
		scrollWidth: section3Content.scrollWidth,
		contentWidth: section3Content.scrollWidth + 50,
	},
];

// 휠 이벤트 구분 지점 변수 설정
const section1Start = 0;
const section1End = sectionInfo[0].width + sectionInfo[1].width;
const section1TotalLength = section1End - section1Start;
const section1ScrollStart = section1End + 1000;
const section2Start = section1End + sectionInfo[1].contentWidth + 1000;
const section2End = section2Start + sectionInfo[2].width;
const section2TotalLength = section2End - section2Start;
const section2ScrollStart = section2End + 1000;
const section3Start = section2End + sectionInfo[2].contentWidth + 1000;
const section3End = section3Start + sectionInfo[3].width;
const section3TotalLength = section3End - section3Start;
const section3ScrollStart = section3End + 1000;
const sectionEndPoint = section3End + sectionInfo[3].contentWidth + 1000;


// 초기 셋팅
introTitle.style.fontSize = `${introTitleSizeStart}px`

// 가로스크롤 구현
let offset = 0;
let scrollHeight = sectionEndPoint

container.addEventListener("wheel", (e) => {
	e.preventDefault;
	offset += Math.sign(e.deltaY) * 300;

	if (offset < 0) {
		offset = 0;
		return;
	} else if (offset > scrollHeight) {
		offset = scrollHeight;
	}

	console.log(offset, scrollHeight);

	moveSection(offset);
});

// 반복문 해서 offset값 조정해보기
// section3Anchor.addEventListener('click', () => {
// 	offset = section3Start;
// })

function moveSection(offset) {
	let introWidthSize = 0;
	let introTitleFontsize = 0;
	let section1Translate = 0;
	let section1ContentScroll = 0;
	let section2Translate = 0;
	let section2ContentScroll = 0;
	let section3Translate = 0;
	let section3ContentScroll = 0;

	// intro, section1
	if (offset >= section1Start && offset <= section1End) {
		introWidthSize =
			((offset - section1Start) / section1TotalLength) *
				(sectionInfo[0].introContentWidthEnd -
					sectionInfo[0].introContentWidthStart) +
			sectionInfo[0].introContentWidthStart;

		introTitleFontsize =
			((offset - section1Start) / section1TotalLength) *
				(sectionInfo[0].introFontEnd - sectionInfo[0].introFontStart) +
			sectionInfo[0].introFontStart;

		section1Translate =
			((offset - section1Start) / section1TotalLength) *
				(sectionInfo[1].translateXEnd -
					sectionInfo[1].translateXStart) +
			sectionInfo[1].translateXStart;
	} else if (offset < section1Start) {
		introWidthSize = sectionInfo[0].introContentWidthStart;
		introTitleFontsize = sectionInfo[0].introFontStart;
		section1Translate = sectionInfo[1].translateXStart;
	} else if (offset > section1End) {
		introWidthSize = sectionInfo[0].introContentWidthEnd;
		introTitleFontsize = sectionInfo[0].introFontEnd;
		section1Translate = sectionInfo[1].translateXEnd;
	}

	introContent.style.width = `${introWidthSize}px`;
	introTitle.style.fontSize = `${introTitleFontsize}px`;
	section1.style.transform = `translateX(${section1Translate}px)`;

	//section1 content scroll
	if (offset > section1ScrollStart && offset <= section2Start) {
		section1ContentScroll = offset - section1ScrollStart;
	} else if (offset < section1ScrollStart) {
		section1ContentScroll = 0;
	} else if (offset > section2Start) {
		section1ContentScroll = sectionInfo[1].contentWidth;
	}

	sectionInfo[1].content.scrollTo(section1ContentScroll, 0);

	// section2
	if (offset >= section2Start && offset <= section2End) {
		section2Translate =
			((offset - section2Start) / section2TotalLength) *
				(sectionInfo[2].translateXEnd -
					sectionInfo[2].translateXStart) +
			sectionInfo[2].translateXStart;
	} else if (offset < section2Start) {
		section2Translate = sectionInfo[2].translateXStart;
	} else if (offset > section2End) {
		section2Translate = sectionInfo[2].translateXEnd;
	}

	section2.style.transform = `translateX(${section2Translate}px)`;

	//section2 content scroll
	if (offset > section2ScrollStart && offset <= section3Start) {
		section2ContentScroll = offset - section2ScrollStart;
	} else if (offset < section2ScrollStart) {
		section2ContentScroll = 0;
	} else if (offset > section3Start) {
		section2ContentScroll = sectionInfo[2].contentWidth;
	}

	sectionInfo[2].content.scrollTo(section2ContentScroll, 0);

	// section3
	if (offset >= section3Start && offset <= section3End) {
		section3Translate =
			((offset - section3Start) / section3TotalLength) *
				(sectionInfo[3].translateXEnd -
					sectionInfo[3].translateXStart) +
			sectionInfo[3].translateXStart;
	} else if (offset < section3Start) {
		section3Translate = sectionInfo[3].translateXStart;
	} else if (offset > section3End) {
		section3Translate = sectionInfo[3].translateXEnd;
	}

	section3.style.transform = `translateX(${section3Translate}px)`;

	//section3 content scroll
	if (offset > section3ScrollStart && offset <= sectionEndPoint) {
		section3ContentScroll = offset - section3ScrollStart;
	} else if (offset < section3ScrollStart) {
		section3ContentScroll = 0;
	} else if (offset > sectionEndPoint) {
		section3ContentScroll = sectionInfo[3].contentWidth;
	}

	sectionInfo[3].content.scrollTo(section3ContentScroll, 0);
}
