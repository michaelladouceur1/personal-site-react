import { DiReact, DiCss3, DiGitBranch, DiPython, DiSqllite, DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5, AiFillApi, AiFillGithub } from "react-icons/ai";
import { SiPostgresql, SiNodedotjs, SiCplusplus, SiHeroku, SiJquery, SiGraphql, SiJest, SiMongodb, SiTypescript, SiD3DotJs, SiWebpack } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FcDataEncryption } from "react-icons/fc";

const data = {
	career: [
		{
			company: "Aurora Storage Products, Inc.",
			title: "Mechanical Design Engineer",
			years: "December 2017 - May 2021",
			description: `I was the lead design engineer for all new product development of
      new storage equipment at Aurora Storage Products, Inc (ASP). With
      all of my designs at ASP, I tried to consider manufacturability
      (DFMA), cost reduction, customer satisfaction, and safety of the
      finished products. I also gained hands-on experience prototyping and
      trouble shooting many of my new designs.`,
			location: "Aurora, IL",
		},
		{
			company: "Metropolitan Air Technology",
			title: "Mechanical Design Engineer",
			years: "May 2016 - June 2017",
			description: `At Metropolitan Air Technology (MAT), I lead the design process of a
      new fire & smoke damper product line that met UL standards. In
      addition to the design of the products, my responsibilities
      included: manufacturing process layout, manufacturing floor layout
      for overseas facility, custom tooling design, and general on-site
      facility maintenance.`,
			location: "Chicago, IL",
		},
		{
			company: "S&C Electric Co.",
			title: "Design Automation Engineer",
			years: "June 2015 - May 2016",
			description: `Integrated design automation software (Rule Stream) with CAD
      software (SolidEdge) using VBA programming language. Purpose of this
      project was to reduce design time needed for engineered-to-order
      quotes and orders.`,
			location: "Chicago, IL",
		},
	],

	education: [
		{
			institution: "Full Stack Academy",
			degree: "Software Developer Certificate",
			years: "2021",
			description: `I had been contemplating a change of careers for several years, and
      decided to take the plunge with the Full Stack Academy/UIC software
      development bootcamp. Topics covered during my coursework included:
      Javascript, React, JQuery, HTML, CSS, Node, SQL, and others.`,
			location: "Online",
		},
		{
			institution: "University of Illinois at Chicago",
			degree: "B.S., Mechanical Engineering",
			years: "2013-2015",
			description: `University of Illinois at Chicago (UIC) is where I finished my
      undergraduate education, and where my passion for learning ignited.
      During my two years at UIC, I covered many interesting and
      informative topics including: fluid mechanics, thermodynamics, heat
      transfer, numerical & computational methods, engineering design, and
      higher-level mathematics. I wrapped up my time at UIC with a 1st
      prize award at the 2015 UIC Engineering Expo for my part on the
      design team of an endoluminal sewing machine.`,
			location: "Chicago, IL",
		},
		{
			institution: "College of Dupage",
			degree: "General Education",
			years: "2010-2013",
			description: `I entered College of Dupage (COD) after high school with no real
      direction. I questioned taking a semester off, but decided to take
      an introductory engineering course as a last ditch effort. The
      material sucked me in, and I remember the day I wanted to get into
      the sciences; The professor wrote a differential equation on the
      board and asked an upper classman a question about it. It was like
      black magic to me, and I wanted to know how it worked.`,
			location: "Glen Ellyn, IL",
		},
	],

	portfolio: [
		{
			title: "Retro Draw",
			description:
				"A varying-resolution drawing tool with functionality to speed up the drawing time. Functionality for filling all spaces, filling all blank spaces, and clearing the spaces. The color palette was setup for easy addition of future colors.",
			image:
				"https://lh3.googleusercontent.com/5HFcd5uFzUf-l_2rW5cwR5lWgGBYOD12YnEiXTV7YDFHKsjqFySYUMWGl4yyaHiF_jgHprdyabdJ7hVyf2KmpnsqsNxPv7K3wnazBa4UmSxQZEFzzFtTmhmL0jcMYDSu8X-btwz4E3v0EZSlPzcVLt-m1kEZxpNg1KE6OfGFxhJLMIOwIlPu5FrXsBpvgimhObiQXS4XHah2GLwSlgJjY4Q6IwbCmcCcRBNIt7QsW1-Oj9QbVFzPxUFMYbSnK2c1UVDBBeKwhtZ4egebe2SU3XxPhTO5aVBgy8buiQHB2LlHvjJ9efXTG_EamZAU1nZkgCAwpBK8dP7wuzjed8Bg_oXuQIggeSoPGuJxTw-5Reitt2xDFvxfg0RDAHNtc3q4pnMQB4gpfAYYjLjgLH4mcJGJnm7NIfbWjL6BUtlmHawxJNeaowuKr_yRfJ9y8LAt9xWTi1ajHyVjCj_iGIk5CRe9J2mcfplP0G2gd6QkQOyPXAPehQ2DLg8w2Q7oytEAzuLSwCVY9jRtxMM4gm9s88cIkDiM3gr3w1rry-9uDlXhqWlYnUFXPLqrPzw8LU_VUZbTv-vqne8b1DkoWulZT_VebzzNKnd7TFyzY0IW62clqWqptb-hyT01S2q4UYVH5_4L2g-_K5qMOBzy8aZ21hbL3dOoBzViBLLOX-WnIMFPmsBHsCjj_VYjy8l1Ky7JR_9isTu-1Ss6nOJ6OqCPDw1b_FFAmrv4KciKisDTWf_EitlemRYG77LdkB5C_hFdzV5VGt1ZdY-SSIntL82znJdNdmdy8_xw=w798-h797-no?authuser=1",
			deployed_url: "https://musing-lichterman-df9769.netlify.app/",
			github_url: "",
			technology: ["JavaScript", "JQuery", "HTML", "CSS"],
			pinned: false,
		},
		{
			title: "Calculator",
			description: "A simple calculator utilizing object function creation",
			image:
				"https://lh3.googleusercontent.com/_R6RKxHcW9I13MKk4IN4oDbALn4wBY4d-cV_2-Lu-dzka9CRiZsKQO94LmUDOMwwFon3pTxvxcuv3cZpupEZs0cSvrWBoA-zIOzN7rhLNmha8vN9FuiB8461FBaE115LI64YxWTgmxZBI080B6s6twzZOr3bL55OPXbGhT2MbTz-aSyp92tMpwY2Nvsm3ScKXKIcBnq0KHPyC9UgQ_4--txFrZQmC9WuWWCVe-vV-YGYEzj58JNLPuJO9XYTctuqgR8ylJGnKnzhrE3NHDdkeVfMCNpl1QTx87rp_UuN6cesfmAAS9OTJlfI92xPpnZKh8MSJfX85RYhV0M8hBOCnrP9hfIOy-3-oX3e1YAkUnWaTwW0WBG5JlpgtVMi7SothSmRU_YYvaFcRIPY-C8v0e91CRdxGe1T9zRLiU-Yqmem6B6IdXZArIQBqXLN_NZopzJ1orhhuHGM4tZWS0UboLPDddBzuuK37rItGEqrWfaBQsuFrNNQvUGHh4EJ_sqlxTdjySnMknkxV3Ej66-G1FVBfT3I82I7dd8jo08yDaftLPQmF_4sLiX5mTban9hVHAnDdWIRExN2FiNAVLmVwQUcTUxqIYvcMNQFLD8zv1fM3PY3XXrsW3g8iwKdat1uKvny0ls1SKjzGwrd14p7HIjRM2gUGEQRxmMO2tvJVx95GG48H9T_R2LBwabTlRcdCuSY6N2oxh7RxoPJ294YnQuUsbZd6jRNATt1QDbkkWVnVSopHgiTxtGbYO5ZcWMOEKnCT4DS2iqISXe8mvBs2JYOHQPb9uUD=s807-no?authuser=1",
			deployed_url: "https://distracted-kowalevski-8a2e53.netlify.app/",
			github_url: "",
			technology: ["JavaScript", "JQuery", "HTML", "CSS"],
			pinned: false,
		},
		{
			title: "Arcade",
			description:
				"A retro-themed arcade app showcasing classic games for multiple players. The design of the overall site was made to be modular to integrate new future games easier.",
			image:
				"https://lh3.googleusercontent.com/pnItELbGW3vuBDe1GUKiEKGJoEe0Gy71n8tLyaOhdBfjTi8a-eFvtef9nhsXezZbp6IAlKjPnm8270DR-HhPft5JLa46Bj3F5zRsTDm_KMMNyrMvxjpjCqIK8nc4y4f0IMQoil_yAjo6iWwwy_F2SLzMDi9giGQ9eIaYdntqI9T8U8etTSuviQn-BvfY88ksMqM0rdNy29ubq1SvGV5OmicGinYWx5JbLxGDlm1qB2hASqR6_JJb84GX9wosYiSERhAouoyM0XzFWdLhCPO9IFozvhF1LLevoVB1p65Cz8BKPcXzOGdGJ4L0xyd8-VxXQljHzzKP0rvzppTL6HcqJsUQNx8XJ4DD6FHplmTsbsMmcFl-S_XSv1TDDbWqEgvg72zf51xUQbg1EACKW58NOfzGE1Bbq18EKps06HJMgzPjahOpsr3egKNXdGYvTK3SZHT5K5KoVq4GOck8nUuQppnvpOu-BH96N7rP6w82_lpkYfDARtFwsMvgusbd8HXyEaWTe5enl_ahRb5EvE_gleIvmPpUGojnYM6zGPYsL0G44vcAT-2eXSGf4pWL4JrvJbJTlGZV-P0VdYTkUEb3i7RVaJjMUF99GKDViX9Wb9UVR6yBfYsON-Gaai4nEHuW4gs0aOo_Shi7JaaRi5b0BwcwtpdO269T-ue5ejaQUk50KXPsnm58pcyqxHQ4CuBwSl2CUzatKiFGWsYnQqqp-hv1qJqgHcJ1rptQqYby0nooHMorZqV2yswPjW8eLqLCk_6eZckInxjtCUxten_4TvkfXrnyIe3A=w872-h858-no?authuser=1",
			deployed_url: "https://angry-wozniak-f00827.netlify.app/",
			github_url: "",
			technology: ["JavaScript", "JQuery", "HTML", "CSS"],
			pinned: true,
		},
		{
			title: "User Hub",
			description: "A user hub app utilizing JQuery and async functions for fetching data",
			image:
				"https://lh3.googleusercontent.com/NxW34GNgqAxora4HzgTk-pyB80wr9C6q-YPWEWoEWshfohNg4ATprdXctjNzOYQnRSKeUhyLL-qmpcO6B_Z-tHIuK_6Sxh1KzRMeNnXRuWinVONctsmcROXyyfh1xPN3x3oEvfY3gbODPjs_hD25Wj_MfApVd8XCf0tw6lEsKyFDDOQARP0RFSIkUL8gBg-V-tBon-noTE2QN5aOXQERPoJ6vaBstilOlyQRujk1-xc9htC2bau6hCGwbKDOpQNISnNcaJ5RGE8aTlb0x_6zHRC_ANL_OQsAcv44D_VC5h9tXWdrIgq2cX57WiuhKyHHFGJeUDeiDgkf_8GFYtTPWZuI3xw4kCpfnSg1IsV1OurJDfkotXyAlgeRB85ZI96bna_pDtIjsUtWnx4jmMxrIxfOxH5dm6D8w5tyulsrZngZkskXbVv4ARnx7m9VJJbb0g3fNk2qoC-MajziQOHgFZcHHMCUQc0TSc1HuiwBy1FK-kwLJ8b3ULEoAWpJYvEybl_vbhBYtxPPzYPtonAy6KWY4PHU9nVEJKRR0Hr_sc_wfKxtUtBczMZcXch97q3iZlq4eXgK3YAk-8vJzWU_s73UldmKxHep_Ngy60QAirhxoX1DAcr_tMuZm7tDaWMbHdQzJsJ8zJFjBbwjXNFhjxlSMiy5QDb7ZDKU-x_3GPIbE7yulcbFN5rRoY6HEIRlzYPc7aQVSIjStzHdzVNtnphywLXUds9GSv8O33WF_vVAzJPEZJ-n5Y3280du2T1wZUxkMKxLZx7ZexB_l8Pk86FWDPjh0MNF=s357-no?authuser=1",
			deployed_url: "https://stupefied-golick-d91c6f.netlify.app/",
			github_url: "",
			technology: ["JavaScript", "JQuery", "Axios", "HTML", "CSS"],
			pinned: false,
		},
		{
			title: "Art Collector",
			description: "A art search app utilizing JQuery and async functions for fetching data from Harvard Art API",
			image:
				"https://lh3.googleusercontent.com/v9nFzRks6ik6Zhc5V2iYdjXDiCAUA5DLokwlVKVupq7dIjUDwW2w5WgveL4r_qEWf5Cwz45vAOBE2eB8TrEqFahH9a9SU7kRdKDV6BTw23s3F5IyV8Z2sjR_AWpkeWpf60StsnxuCiuVmHbdEkmMtD_RiyOijEfF5AiHn2q4yzEI13I7UB438_7yiAYbapydxZeV7zUpCUFD0CgQUImqDu8_E2xkVIox3bg15QzU0WwUirvxPGL_qXOiEADaJmFx6ZO5RddwkfcQcMiEtbmK1ChWoVz_d3SLCAp45qVhd23zQKPz0iRaS840NYQqTI1ipbLxUnhA3QptpEOI20aYCvB3N7D_MM5GxxsLH-RYR16IS38UVVyGd6HO0Bn0vRtHUOUdmjDHdaVsEt80j2inPGCqISxQTysyR9U4VZbJBvnLkJs2jdRDELDSk__Dt70GbzjebIGZM8noTc1sOgoQehjbxKI8s3ItmTukeRolNPtRUnYAYtcDU0-5L5-O2ZJpCQSVsZhLS7sLNPSZq2vh9SUF8pf5hyHALe5Vq1Zmeubbf3YCQkQCrQ2Sr6JsX3mI90S120KKmEeDMr47SETsm9srcFhdXKFwWIu0tofFtPmat2Q2Jw58DVRMv4rZmgYNDIWKxexyKuiqCZFr4Cl1_6lFP8Yi5taetEgJ8dlMYvz6XIFh66LIfGAnvbDl9zokY9bmZb5JvrhGE7mkuLhXmwUD-EHV-Wvl_bCOhNklONKX_x7UBJYsx7dilv-judJmUkKeTAZqWby1PtAe2-zuQ4pUMKTh6qIn=w973-h947-no?authuser=1",
			deployed_url: "https://silly-easley-3392c1.netlify.app/",
			github_url: "",
			technology: ["JavaScript", "JQuery", "Axios", "HTML", "CSS"],
			pinned: false,
		},
		{
			title: "User Hub (React)",
			description: "A blog and todo app utilizing react framework",
			image:
				"https://lh3.googleusercontent.com/EgyoadhAhj_Uc3ps7oA33kSma9ei51Ub41R-p6x84mq8KdaDGKNyKY8PZlVThJX31FqKjKOVOYAtwmdCJXe_0isqKaXlJhDQccN95JQpFVC550RiU2xrwsPmNLF0XpKjWH47672CY4MT7-XzmQixO_Yxm4pqrXr8bAXF0seBVV-mW-pzl30A4y-b9hfpALKsvyrdFPPP1ZxIjks9WiW-qC21byY7eUrMZcAC1cQ8l5EZIOis-hX2BCvVhdF26N2_oynjfc4VajPImZAo7P6huYd5kGBsP8HQ4mhiysfs5sUjwPq0sJ7mE_Rehyl-YDHs3ctTKzobg2ef8xN6wTqjXKftAidWv7aLcAZ1b0W95pY6IOe0BLZrpTMqF59dgeXEDYzO1n-yXl9dQyi-zrXWusnVNtho6t8tt9L7L82a76Ki7t8UEjbOMjoRMH2JrU_zymKfUXAYQ6px949IeRNWcziHxlLdfXXuOEkJVuIgzuQg7KiSBXNFhuTvGRC50X8thxtAAUlYMe0v-lxQgtmz0pKDR7I_vfl-4yLzfgYkWYXKddC2-_30SiI7Y_wAJsTlva70HiuWSGNy1OvrOrcNZxM_XPJcyydjtSvdOEsAo0cuTV3ZrPFd39fy6Rqx6a4HgEHlfl6uOf83i1OF6holaWPgTsjR8kqM3umpfa7q5-BYvOLWAH0ALWKOQCChcNhNkoN9HLOc2I6rzHEO_KAqv1FcP1mM2OWJOzeDx_xh8DhRO03hNxIno-aI5M_6LntBp0IftZgFCeSmIa1_vGlgwpBMG6AVDnmO=s951-no?authuser=1",
			deployed_url: "https://festive-fermi-6afda0.netlify.app/",
			github_url: "",
			technology: ["JavaScript", "React", "Axios", "HTML", "CSS"],
			pinned: true,
		},
		{
			title: "TicketMain",
			description:
				"An e-commerce site with the purpose of selling tickets to unconventional destinations and events developed by a team of 4 students from the FSA/UIC Bootcamp. A full UI was developed with the ability for a customer to browse products, browse seller pages, persistently update carts, and submit orders. An administrative dashboard was also developed for the purpose of adding and updating products, viewing orders, and viewing user details.",
			image:
				"https://lh3.googleusercontent.com/W-FpC0fdrH3W_WaRL81RaFysZtmCK55wiHiSuQigo89YRXOKxfc1dpNjXUcBVSHleYQaHfXo709vU7GWabr6CD7noowlUEg1pUlc0fY57ktb0mn8cpPJgHqXn7pOT39VBLmqqYjHK-hmR1Z9LAHKsF5xYoeXyt_TCpIzSIjecoGmJagkxvxlEujpkoAFotSCQtL6eIT9tJpe71KP7lzK5n6xvZnTvsAZn16gc97rSSzRak54j8RS6p8QAHUBvxqM5zJKIaY2mCm-sA31n19gGvwsZck20Bu3C-o6ADCtXxM5HCxTxL6CX_vhGgDoJs1ViNQUO_ML7QytyeAOp8HAGw5x__zpccIqpXM5-2mxWPUjp4yU6LG8EKwi0cBKC80TO6bUHTb4KPQjE-rAuDm8gG5z404UIV7Y0qLZoNaaITRJOLa5tVzdoldEz68GgORnm16BkkO7AqLMdcUku5gv5c-fujj-T-9bUydm4tP45OL6BYyaZj2oJ8rdmkfr8Eij50sKoWFLmorRofnCmB6SdWDogTSbve82A5x630QuLdEWfCyVymFU1ln3CgtdDtxG7QT-2NFBiYaHdt_HWnWXBhiSLmXmWzCVYCoI0bXASOfnwnBwD7AVBAKpvJ2OxU0wkCTc0CYbEWfjaxDXRhMx5otLbW-FTUW-m4MA8h4Vbwv9FDYBrsq49E2F5Sx33MfBEJHIRZJW13CPIScba_NdhqJphL3d9nyIXhFiMQqkdPApZ9xZx4bsJ9FIFOzh2Yqwf_ykANZjwCtwcEJaTgfkDorMjomeY3nE=s976-no?authuser=1",
			deployed_url: "https://ticketmain.herokuapp.com/",
			github_url: "https://github.com/HeartsFSA/GraceShopper",
			youtube_url: "https://www.youtube.com/watch?v=WBS-jkXAgzI&list=PLPLveFltzJ39xrV7e0lizrrzRS5GP2Wmt&index=3",
			technology: ["JavaScript", "React", "Node.js/Express.js", "PostgreSQL", "SQL", "HTML", "CSS", "BCrypt", "MaterialUI", "Stripe"],
			pinned: true,
		},
	],

	skills: [
		{
			name: "JavaScript",
			element: <IoLogoJavascript />,
		},
		{
			name: "React",
			element: <DiReact />,
		},
		{
			name: "Node.js/Express.js",
			element: <SiNodedotjs />,
		},
		{
			name: "PostgreSQL",
			element: <SiPostgresql />,
		},
		{
			name: "SQL",
			element: <FaDatabase />,
		},
		{
			name: "RestfulAPI",
			element: <AiFillApi />,
		},
		{
			name: "JQuery",
			element: <SiJquery />,
		},
		{
			name: "Git",
			element: <DiGitBranch />,
		},
		{
			name: "Github",
			element: <AiFillGithub />,
		},
		{
			name: "HTML",
			element: <AiFillHtml5 />,
		},
		{
			name: "CSS",
			element: <DiCss3 />,
		},
		{
			name: "Sass",
			element: <DiSass />,
		},
		{
			name: "Python",
			element: <DiPython />,
		},
		{
			name: "SQLlite",
			element: <DiSqllite />,
		},
		{
			name: "C++",
			element: <SiCplusplus />,
		},
		{
			name: "Heroku",
			element: <SiHeroku />,
		},
	],
};

export default data;
