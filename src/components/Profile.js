import React from "react";

// Local Imports - JS
import Section from "./Section";
import GithubPreview from "./GithubPreview/GithubPreview";

// Local Imports - CSS
import "./css/Profile.scss";

const IMAGE_URLS = [
	"https://lh3.googleusercontent.com/pw/AL9nZEUqVjZju_ITphdCgsszKw6n58OP40V3ZVQwYoE8yK6exca-2AE1XW4XMtqcpUlJXJdR7ho91L8AhCcK61YXAjRW1wiwXMecS131eu6i2yAyye5z7xOKbmxc6HJ1N-db8XYfakVogqqWp-0XPkWR3ZY=s1088-no?authuser=0",
	"https://lh3.googleusercontent.com/yhC-wQmvdikipeCFR8dS_bumiFj0lFQrTHovPjTcueWwuC2gIY1qEKtATXx6nNnc9Z9T0o0OxE6QWEkmYq_7dYiyQ00VPvSIfnSgjWOpc80k_oQpBkHaK4Azyy7Zrg2VSGBRPpDJ_ROoiaOkAATS9txAOSS9hix9_ZzaKyQ7uxghguwtgxz6tf1C79nBt3kSG_fu7pO5MHnTdo_YlMw2CRRyvNo1r9loo_hlpf68jYCSZtNU2gDRrfKkKWvVcljVhSF_Vjeq_yWMlL29H3-L2J2CKlUmk-4Uwfyq6NGyJL-yNl6Cbm7m6EMw1lp2JvkUIfMW5ePNPqsjlHBSCsRMfKhGDbsbwYII08TbDSO9UGUk6PRFuaJnCjRzVwFsjlKIh1vPJy6QwVv6XZj0zbC9v5Gm3AJv1fzE3LwXbjdrCZkURrwYb8cQL1BifISm9_N2f-64_p3GmvigpND8qDD939LN1SUMQQdaNre2zvstfN65TvuTgitzFqQj5LYaULS0oj8ypUFq26JM4XVSVCKAW8fLnGimD5c4YNFui33TWQ91pa37wHKB9Ssc-n94LI3YnwI4az2ES8IpGRBQxkHDVmD42mBkzvzDJO9QLjNKMN2dORVp87NF-q6FsCKMEwYgVhTCk8aKlt2O8icMR1dz95IBzd8tMepvJz3ARO3T_2QK-tA8--r1W3lY7exOAna7VvObMezcQUBQ3unsxmVCOwyGhF_AlYuGzqqWAfNlbzjIc3uexHmrP6hVmJ-xiaLLrxnQ-zecedp-qoK1uaNydO4K829PB8hq=s1088-no?authuser=1",
	"https://lh3.googleusercontent.com/BjB17IKrPvogjbgfK57jQEjd7UNEQhl2yaq4wACED7n71OTWRgpRYraBkfsc6cFt0ACHvymMcsyoomjVZB9ohNQ0hmA3QYGqmHH-9ibO16NjGaBSOsa-45w4YpsqIy6PhmeyBmmQERyz8uiHFbZvvEinOXrOaNWRIFGHWNzoSQtYsgJLQFDSAGu6MlJZn-uaxxczKqknM5Dgt1cEt5qBzmeNlFZHKU9D-7OrDfEpqjbZINBD9lkKMFAy1wPJjvWCi0yrk2JyYuYDheK9vCI8q_cDBs9zNYLBLQjPdXOye15qI68IEp8--41iPalGoYjJNmOYkD9hFwiLBHHd4k_yyVmhYR12evNbs6aPZoPbXmDQ-6Dy346EVH1WYTRQgirku9z6lTak2LypI-CYu9bqD4grXtDcCMGrYplRfdJO5LOUlGgAb7-Wx0-PzYchoiqaqb09wjglZW26LPNh7lncv5gzPVQnZhIGr7o2tZUYfDG2bRilmYeJ0cQFpuMrPPHpayybdp7sUTfFv9DeT0FQrtORPNsZk0j2SOuWdqA6gLsDP0uIt0ckAq23uA_bmixm_lfM31NMLMvvLpT3LKBQCD8IFS3dqyJsBiiESehfcOS_FJDFAml4BG5vtlYvddDHCjQqbM3A-3RK7-7ej2s0w6UTLyQ4aOQ375zmHXknnuwlhvDR1e9jbp_nM_L-AZmdV0KsSIP7MzEVKXSLno63J_aQQOq8I3CVueZmiCw3N8wtDpa_9Kxk2Gwi2hY22D7BIVm8XcYWzT2aMJbmVm4iRUNmSafEFLyP=s1088-no?authuser=1",
	"https://lh3.googleusercontent.com/bO6y6EdmeVZeO5OtRXdObbzAM_wx9FSTIjOBkBlg-3NBDwdQ6iTaJKkumKzDAPgTwAZ8Lh1sOH7SazQwEdvltBRJuV_uM8M3SjyrsrOYLtULXFCgC8w7Y3L1-a0xHw_KKpQLuw9LVqWqsRqce4BEo9EYE0zJEprzvkB3GDWPYMB5-wz7-anCUNml5cOwsWWASxS4Gbv49sO-EI9WB4v54n9bragcx1Ed8_R2vwIe2rDNM-o9tIo4QvbNJVY7iz0a6x4gplPW476lLrR7hUYNbwDMSZx2CT6yBrP3gAn1dwkqLTBKDTQc_XifE5dIn34ndIs9rVoTGrBS9Pk4S3FKUAXm1mS-mKW_CVXoo6SLHrO9d4bne1dmLT8Yau1akN90HqKR11LJK-WkB__8bcFRLUBa0p26bIcsiGaXxlbiHKTSFsneQSt0WcVoR_TiVaTCNyp2CURu4ubumyvd1-QCA5-z4zXjlA8i1Sw2Yy4VRSbIZoead6VxyXTOpUvYaBPuttJu_NT7-ovtu-Maf83XS3C6AYDWuIh8BPORypdtJ_DCLXrRU6TeiS0qLadbfO-bGttFwTX9x0qVpWBLUN4o1RBFQsYzQyCXjcXmYLUnF311Ognw8pAuix1rREbzKNtEF7mMlZFM3fBC4F54o8ekbuLB3laC7BEKmOQZGaQDJdsJueT0wnRKPPOW8KcKN58khVKiUW7KDgcRZG3kenyDqI4TwgXFdkklKy2NM5T-ebAwh0j-Bv3JdU96qz-Cfq3rRwvnF0e5Es7IYgmRqsFDAt2ZEbEtuAsb=w373-h444-no?authuser=1",
	"https://lh3.googleusercontent.com/IGguqRSNKLX__eauzIgpYDlcACQLWgr88KPgbvzya-sU_a6CfBwQqOMPbfEC64AcQYgWEFahe2ishOz5e7CITf2CBfSWPkCi3MDaAqLsiCf1ZPAVz1FVGNn-wTEvsmHgm_A5hcYoWujjC9wEcXkZvS8MuacncRnoMpfQUsOaloEIbqTVcQS93MKXDVmFY-nHgktgasIsXeIe9PQ1rQm3BmxhIc0JLNdaYCH6S0-OqGpJl3WJffKovleKgPZwJMhz-6XWmb8cWqOWuVU3HKprcm_9L_wGu0rlNUDX9byFWXidlki34UOznMDbENwHwFGI8KaljI_dVkQ6VSugP-DcHPOMHYfrStWxolGNog6eNGlf0VMkR2tkTAnEcFtqGHQeuhkGuEsFNJSI9TSb2zZ9R_cXgBMBJ0nCcN5-9Sb7w3j2CkIJrqqjCd0mx7FCw00Ss22f2s5hCi3OLnQ5NKNyKI8Mhzq-oeY_90lZzlWZkvoG9-5JGSbLKGk7knqy916VRuJXa5teTfZuCr_nf0XzqGq2i4LeE3XZQeNbtoXH6XXFgyCs4vE5FeYbzXVV3VSnWStpqUuSWiYp_zCI02ar19XiH5JmcAV4T2krZa76e85cRhDSbuNEagTrlJxLQZ0tFIZGEocHeKSzMbVnkyn2gx85puULfqcxeyEDPy05J-IN5q76pZQmG_4CsYk18s0fBocpyWu5Vk-np3WnzrpS5Opqkx-aebqB3qxrQC1TONAoEUCQS7gOrXyu0E0cXezKNsBfjO4QtSXHYN39ObeoAyF793pGOPwl=w439-h461-no?authuser=1",
	"https://lh3.googleusercontent.com/5BkKFvZRUk_6FEoTGELDsil8WvLSnUPSnnAkdw6D6GRO2YCrxaurp77eHLLthiCkyD5tr5sacmwG-sZ0XC1Es83UoQq4x9LLjbE4OpT7d8TNnPSH6cS0wOeN-6P157qiXJ458RAxkuJYRktT3H5_w2DTXKuDvb5-v-3tWarhh3ejR5k2jefzr-V-76nv1c4H-8ZxR6zZiHMrgP7fbvtDoEm-166ipn3fN0CxAKqvHgwPDBbdmOdCkt5xlXPIMPjprudRCox70FNVW5FfwGyE8DVgTQ2oHLEVBkR2HO8kvZIkOL7XxmWCjLOp0zrNlGgYwAtZwy6hs6uBMj8QJXX0FfQYvOWeGLm_8NLeQsSXt8XiafxPVypMZFO6p1yAGFabMYfhiFitY1cPmvXjz1NiCYimpsLO7o-p9Ow4BOqCEkJ3KiVxU4gbjJU1q2ErRwa-cBLaAn2aSkqHub-tD4kdSvSXpn5u3wkijO7JuTQqg519TRr6ac9aYSFuhxWxBo3T9poFw38fhLirfQLYxfjVwWfCNDmvrbmpAJmSvekT1nepDoVQJE4IWoJWsMRYzBravkS9FVn0HZkxKWeuQBovk3XY4Q11936d2r8MW8RaqhZoRyJHNKTyF8vRikmnLgBL9MJlIf3xr5FlioAPLazLO9ERBijKBA1epu28ryYKh303LUGl2aA-SXwoiXG0M6nDmOmgNbjRQ4BmSP2n6_6TtpZEYjRLGJsseF4YjwhL8hM1a1j9x-fve6fIpi6ZuaIFRrHe5P-DL-4qjqdMUhFchYPgKgrmahAm=s497-no?authuser=1",
	"https://lh3.googleusercontent.com/h38k_CGGVScoTmSJQeOCVE2nyin4GCME2cWNGNuY7Qsmkgj0b9QAN-mgail17NO0cV9IAHxEWDnsnKcpLUkrCvlgKnfcHlO9RAdfKyOikwtvvgggSL68pIcOrxbguFEmKfixYHEasZEUqpryYQu84S9UOUgY0_OjVOR_gIiKiHeYdEVxWS46BffKxlWgrD8d8E8eIDofD_OXsvKa8_TJ6x-3N8YT3y-pcJCKYSqO9NElFC9LNdBSttv4UgM5ZXRLNo0b4XYUy8n_qhh5SLOf2mVZHKKbdohMeYYYT_RBoVgVVzTQiunTe4V8G-UM1H5-gwaHyVJxYkuB87VzkbXUkstf4lczZkpacItVG_fcpDmLGKq6W41EvnYuAJ6Z5931kfl3JlQwvBstFqE1oP5Eh0wLmoKLXc2a-cCPSCB29lm4ACvxoUbOvLC4TLkrb8ncS9mvDoytbs4NcEFiWd-Qpt5IF3EvDTfh_rozPjhgGCv_tZnbTGQXUyjhhhy0wPgXUID_o7zgoEXi0ReuZUWlNvsITOl5hTKf8uXmpS9DN8xrrwxHxnb1TGY9zXc9yrWtV5Wk4d5RNdcwqOMiZMZ3tXd4nc3B9DTDZuDpHxTafyQrOYFU99E9l9aAiOjmTyAUbqwN5yUCgiqToyXMIsKxag--Wh9IGysaOdVrgZGCXfcFCgBWIX6xFZKFtj5bxchan3raheDq8gX97mGAya_THFiqm-NH1xoc9YXyW90p2TTr0XvSKoeBoPDIFnREcDBTqoGIFTz9Jwv5d9IxNIR_wqYGrbHg-kch=w514-h497-no?authuser=1",
];

const PROFILE_IMAGE = IMAGE_URLS[6];

function Profile(props) {
	// const { githubData } = props;

	function getAge() {
		const birthday = new Date("06/09/1992");
		const today = new Date();
		const diff = new Date(today - birthday);
		return Math.abs(diff.getUTCFullYear() - 1970);
	}

	return (
		<Section name="profile">
			<div className="section-header">
				<h1>Michael LaDouceur</h1>
				<h3>A former mechanical engineer finding his passion in software development</h3>
			</div>
			<div className="section-body">
				<div className="profile">
					<div className="profile-content">
						<p>
							I am a full stack software developer with an appetite for learning. In my free time I enjoy travelling, wood working, exercise, camping, and
							anything science & design related. Also enjoy taking pictures with sqirrels.
						</p>
					</div>
					<img src={PROFILE_IMAGE} alt="" />
					<div className="profile-content">
						<div>
							<h3>Name:</h3>
							<h4>Michael LaDouceur</h4>
						</div>
						<div>
							<h3>Age:</h3>
							<h4>{getAge()}</h4>
						</div>
						<div>
							<h3>Location:</h3>
							<h4>Chicago, IL</h4>
						</div>
						<div>
							<h3>Favorite Food:</h3>
							<h4>Sushi</h4>
						</div>
					</div>
				</div>
			</div>
			{/* <GithubPreview githubData={githubData} /> */}
		</Section>
	);
}

export default Profile;
