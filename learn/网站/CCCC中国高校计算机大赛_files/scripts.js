//html/help.htm html/hmod01.htm html/hmod02.htm html/hmod03.htm html/hmod04.htm
var _mainmenu = [
	[	["首页","/","submenu","","",""],
		[	["最新公告","/#atblocklatest"],
			["现场播报","/#atblockhotcategori"],
			["竞赛花絮","/#atblockfloor"],
			["社区热点","/#atblockblog"],
			["高校简介","html/hunivlist.htm"],
			["联系方式","html/hcontact.htm"],
			["社交媒体","html/hsocials.htm"]
		]
	],
	[	["大赛信息","#","submenu","","",""],
		[	["大赛简介","html/habout.htm"],
			["大赛宗旨","html/hpurpose.htm"],
			["组织机构","html/hagency.htm"],
			["竞赛模块","html/hmodules.htm"],
			["常见问题","html/hfaq.htm"],
			["官方文件","html/hfiles.htm"],
			["资料下载","html/hdownload.htm"]
		]
	],
	[	["参加比赛","#","submenu","","",""],
		[	["参赛资格","html/hprerequisite.htm"],
			["竞赛规则","html/hrules.htm"],
			["竞赛环境","html/henvironment.htm"],
			["参赛程序","html/hflow.htm"],
			["异议和申诉","html/hcomplain.htm"],
			["年度竞赛计划","html/hplan.htm"],
			["竞赛邀请函","html/hinvitation.htm"],
			["参赛指南","html/hguide.htm"],
			["比赛日程","html/hschedule.htm"],
			["决赛名单","html/hfinal.htm"]
		]
	],
	[	["合作伙伴","#","submenu","","",""],
		[	["教育部教学指导委员会","html/hscme.htm"],
			["全国计算机教育研究会","html/hafcecv.htm"],
			["高等教育出版社","html/hhep.htm"],
			["网易","html/h163.htm"],
			["阿里巴巴","html/halibaba.htm"],
			["苹果","html/happle.htm"],
			["思科","html/hcisco.htm"]
		]
	],
	[	["大赛社区","#","","","",""]
	]
];

var _modulemenu = [
	[	["团体程序设计天梯赛","http://gplt.patest.cn/","images/index0101/icon/nav-cat3.png","images/index0101/media/bgmenu1.jpg"]
	],
	[	["大数据挑战赛","#","images/index0101/icon/nav-cat7.png","images/index0101/media/bgmenu2.jpg"]
	],
	[	["移动应用创新赛","#","images/index0101/icon/nav-cat2.png","images/index0101/media/bgmenu3.jpg"]
	],
	[	["网络技术挑战赛","#","images/index0101/icon/nav-cat9.png","images/index0101/media/bgmenu4.jpg"]
	]
];

/*
var _mainmenu = [
	[
		// mainmenu-title -URL -style -substyle -active -img-categori
		// mainmenu-title = NULL skip
		// style = megamenu submenu ""-no submenu
		// substyle = (megamenu) horizontal-menu vertical-menu
		// active = first is active
		// img-categori = (megamenu) menu embed image
		["首页","/","megamenu","horizontal-menu","active",""],
		[	["最新公告","/#atblocklatest"],
			["新闻焦点","/#atblockbanner"],
			["现场播报","/#atblockhotcategori"],
			["竞赛花絮","/#atblockfloor"]
		],
		[	["赛况信息","/#atblockblog"],
			["颁奖现场","/#atblockblog"],
			["社区热点","/#atblockblog""],
			["高校简介","html/hunivlist.htm"]
		],
		[	["联系方式","html/hcontact.htm"],
			["社交媒体","html/hsocials.htm"],
			["快速搜索","html/hsearch.htm"],
			["网站地图","html/hsitemap.htm"]
		]
	],
	[	["大赛信息","#","submenu","","",""],
		[	["大赛简介","html/habout.htm"],
			["大赛宗旨","html/hpurpose.htm"],
			["组织机构","html/hagency.htm"],
			["竞赛模块","html/hmodules.htm"],
			["常见问题","html/hfaq.htm"],
			["官方文件","html/hfiles.htm"],
			["资料下载","html/hdownload.htm"]
		]
	],
	[	["参加比赛","#","megamenu","horizontal-menu","","img-categori"],
		[	["竞赛模块1","#","images/index0101/media/img-categori1.jpg"],
			["title","团体程序设计天梯赛","#"],
			["参赛资格","html/hprerequisite.htm"],
			["竞赛规则","html/hrules.htm"],
			["竞赛环境","html/henvironment.htm"],
			["参赛程序","html/hflow.htm"],
			["异议和申诉","html/hcomplain.htm"]
		],
		[	["竞赛模块2","#","images/index0101/media/img-categori2.jpg"],
			["title","大数据挑战赛","#"],
			["年度竞赛计划","html/hplan.htm"],
			["区域赛查找","html/hregion.htm"],
			["区域赛结果","html/hrscore.htm"],
			["区域赛报名","html/hrsignup.htm"],
			["竞赛邀请函","html/hinvitation.htm"]
		],
		[	["竞赛模块3","#","images/index0101/media/img-categori3.jpg"],
			["title","移动应用创新赛","#"],
			["参赛指南","html/hguide.htm"],
			["比赛日程","html/hschedule.htm"],
			["现场活动","html/hactivities.htm"],
			["决赛名单","html/hfinal.htm"],
			["新闻报道","html/hnews.htm"]
		],
		[	["竞赛模块4","#","images/index0101/media/img-categori4.jpg"],
			["title","网络技术挑战赛","#"],
			["决赛结果","html/hresults.htm"],
			["获奖公示","html/hprizes.htm"],
			["统计数据","html/hstats.htm"],
			["历届试题","html/hpastproblems.htm"],
			["历届作品","html/hpastexhibits.htm"]
		]
	],
	[	["历届比赛","#","megamenu","vertical-menu","","img-categori"],
		["目录","#"],
		["往届成绩","html/hpastresults.htm"],
		["颁奖仪式","html/haward.htm"],
		["精彩图册","html/hgallery.htm"],
		["记录频道","html/hcinema.htm"],
		["优秀选手","html/htoprank.htm"],
		["承办单位","html/hsites.htm"],
		["媒体报道","html/hreports.htm"],
		["#","6","images/index0101/media/img-categori6.jpg"],
		["#","7","images/index0101/media/img-categori7.jpg"],
		["#","8","images/index0101/media/img-categori8.jpg"]
	],
	[	//竞赛教学
		["","#","megamenu","horizontal-menu","",""],
		[	["竞赛教学1","#"],
			["竞赛教学2","#"],
			["竞赛教学3","#"],
			["竞赛教学4","#"],
			["竞赛教学5","#"]
		],
		[	["竞赛教学1","#"],
			["竞赛教学2","#"],
			["竞赛教学3","#"],
			["竞赛教学4","#"],
			["竞赛教学5","#"]
		],
		[	["竞赛教学1","#"],
			["竞赛教学2","#"],
			["竞赛教学3","#"],
			["竞赛教学4","#"],
			["竞赛教学5","#"]
		]
	],			
	[	["合作伙伴","#","submenu","","",""],
		[	["教育部教学指导委员会","html/hscme.htm"],
			["全国计算机教育研究会","html/hafcecv.htm"],
			["高等教育出版社","html/hhep.htm"],
			["网易","html/h163.htm"],
			["阿里巴巴","html/halibaba.htm"],
			["苹果","html/happle.htm"],
			["思科","html/hcisco.htm"]
		]
	],
	[	["大赛社区","#","","","",""]
	]
];

var _modulemenu = [
	[
		//modulemenu-title -URL -iconURL -bgimageURL
		["团体程序设计天梯赛","http://gplt.patest.cn/","images/index0101/icon/nav-cat3.png","images/index0101/media/bgmenu1.jpg"],
		[
			[ ["东北赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华北赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["西北赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华中赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华东赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华南赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			]
		]
	],
	[	["大数据挑战赛","#","images/index0101/icon/nav-cat7.png","images/index0101/media/bgmenu2.jpg"],
		[
			[ ["初赛","#"],
				[
					["竞赛题目","#"],
					["竞赛数据","#"],
					["初赛提交","#"]
				]
			],
			[ ["复赛","#"],
				[
					["复赛名单","#"],
					["复赛平台","#"],
					["成绩排行榜","#"]
				]
			],
			[ ["决赛","#"],
				[
					["决赛名单","#"],
					["决赛提交","#"],
					["决赛成绩榜","#"]
				]
			]
		]
	],
	[	["移动应用创新赛","#","images/index0101/icon/nav-cat2.png","images/index0101/media/bgmenu3.jpg"],
		[
			[ ["预赛","#"],
				[
					["竞赛平台","#"],
					["预赛说明","#"],
					["预赛名单","#"]
				]
			],
			[ ["决赛","#"],
				[
					["决赛提交","#"],
					["决赛作品","#"],
					["决赛成绩榜","#"]
				]
			]
		]
	],
	[	["网络技术挑战赛","#","images/index0101/icon/nav-cat9.png","images/index0101/media/bgmenu4.jpg"],
		[
			[ ["东北赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华北赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["西北赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华中赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华东赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			],
			[ ["华南赛区","#"],
				[
					["区域赛信息","#"],
					["区域赛指南","#"],
					["区域赛成绩","#"],
					["承办单位","#"],
					["联系方式","#"]
				]
			]
		]
	]
];
*/

var _blockslides = [
	//slides-cssstyle -backgroundimagesURL -description-title -subtitle -des btn-name btn-URL
	["item2","images/index0101/banner/slide1.jpg","中国高校计算机大赛 ","China Collegiate Computing Contest","4个竞赛模块正在报名中","","#"],
	["item2","images/index0101/banner/slide2.jpg","团体程序设计天梯赛 ","Group Programming Ladder Tournament"," 报名日期：2017.2.10～4.10 <br> 区域赛：2017.3.25 <br> 总决赛：2017.4","详细信息","html/hmod01.htm"],
	["item3","images/index0101/banner/slide3.jpg","大数据挑战赛 ","Big Data Challenge "," 报名日期：2017.2.10～4.10 <br> 预赛：2017.5 <br> 决赛：2017.7","详细信息","html/hmod02.htm"],
	["item3","images/index0101/banner/slide4.jpg","移动应用创新赛 ","Mobile Application Innovation Contest "," 报名日期：2017.2.10～4.10 <br> 预赛：2017.5 <br> 决赛：2017.7","详细信息","html/hmod03.htm"],
	["item2","images/index0101/banner/slide5.jpg","网络技术挑战赛 ","Network Technology Challenge"," 报名日期：2017.2.10～4.10 <br> 区域赛：2017.4 <br> 总决赛：2017.6","详细信息","html/hmod04.htm"]
];

var _blocklatests = [
	[
		//latests-name
		["最新公告"],
		[
			//latests-publisher date -message -URL
			["","","目前已注册高校：100所，注册学生：400人，注册教练：20人，4个模块正在报名","#"],
			["团体程序设计天梯赛","2017-01-26","2017年2月25日在北京举办“中国高校计算机大赛—团体程序设计天梯赛”教练研讨会","html/hbullet20170126.htm"],
			["","","“中国高校计算机大赛—大数据挑战赛”即将报名，敬请关注","#"],
			["","","“中国高校计算机大赛—移动应用创新赛”即将报名，敬请关注","#"],
			["","","“中国高校计算机大赛—网络技术挑战赛”即将报名，敬请关注","#"]
		]
	]
];

var _blockbanners = [
	[
		//banner-name
		["竞赛模块"],
		[
			//banner-alt -imagesURL -URL
			["banner1","images/index0101/banner/banner1.jpg","html/hmod01.htm"],
			["banner2","images/index0101/banner/banner2.jpg","html/hmod02.htm"],
			["banner3","images/index0101/banner/banner3.jpg","html/hmod03.htm"],
			["banner4","images/index0101/banner/banner4.jpg","html/hmod04.htm"]
		]
	]
];

var _blockhotcategoris = [
	[
		//item-title -iconURL -URL
		["团体程序设计天梯赛","images/index0101/icon/title-hot-categori2.png","#"],
		[
			//categori-des -imagesURL -URL
			["天梯赛颁奖仪式","images/index0101/media/hot-categori1.jpg","#"],
			["天梯赛团队合影","images/index0101/media/hot-categori2.jpg","#"]
		]
	],
	[
		["大数据挑战赛","images/index0101/icon/title-hot-categori3.png","#"],
		[
			["挑战赛颁奖仪式","images/index0101/media/hot-categori3.jpg","#"],
			["挑战赛比赛现场","images/index0101/media/hot-categori4.jpg","#"]
		]
	],
	[
		["移动应用创新赛","images/index0101/icon/title-hot-categori5.png","#"],
		[
			["苹果CEO互动","images/index0101/media/hot-categori5.jpg","#"],
			["创新赛颁奖仪式","images/index0101/media/hot-categori6.jpg","#"]
		]
	],
	[
		["网络技术挑战赛","images/index0101/icon/title-hot-categori4.png","#"],
		[
			["N1","images/index0101/media/hot-categori7.jpg","#"],
			["N2","images/index0101/media/hot-categori8.jpg","#"]
		]
	],
	[
		["教练研讨会","images/index0101/icon/title-hot-categori1.png","#"],
		[
			["天梯赛教练会","images/index0101/media/hot-categori9.jpg","#"],
			["大数据研讨会","images/index0101/media/hot-categori10.jpg","#"]
		]
	]
];

var _blockfloors = [
	[	//block-title -iconURL
		["团体程序设计天梯赛花絮","images/index0101/media/flooricon1.png"],
		//col-banner-URL -imagesURL description-title -des btn-name -URL
		["#","images/index0101/media/baner-floor1.jpg","Sparklingflame","北京大学","","#"],
		[
			[
				//boxtab-actions-HTMLid -name
				["all1","所有图片"],
				[
					//detail-name -URL -des -photo-imagesURL -URL
					["北京大学-solidground","#","北京赛站","images/index0101/media/floor01.jpg","#"],
					["杭州电子科技大学-杭电一队","#","杭电赛站","images/index0101/media/floor02.jpg","#"]
				],
				[
					["电子科技大学-UESTC_ein","#","成都赛站","images/index0101/media/floor03.jpg","#"],
					["浙江工业大学-Zjut独立团一连","#","浙大赛站","images/index0101/media/floor04.jpg","#"]
				],
				[
					["广东工业大学-gdut_team2","#","广州赛站","images/index0101/media/floor05.jpg","#"],
					["南京理工大学-1队","#","南京赛站","images/index0101/media/floor06.jpg","#"]
				]
			],
			[	["Bestseller1","最佳"],
				[
					["重庆大学-威尼斯的航母","#","重庆赛站","images/index0101/media/floor07.jpg","#"],
					["大连理工大学-SSDUT01","#","长春赛站","images/index0101/media/floor08.jpg","#"]
				],
				[
					["西安交通大学-千里不留行","#","西安赛站","images/index0101/media/floor09.jpg","#"],
					["山东理工大学-斯巴达之魂","#","青岛赛站","images/index0101/media/floor10.jpg","#"]
				],
				[
					["吉首大学-牧羊人","#","宜昌赛站","images/index0101/media/floor11.jpg","#"],
					["浙江大学-我好菜啊.jpg","#","浙大赛站","images/index0101/media/floor12.jpg","#"]
				]
			],
			[	["Most1","最新"],
				[
					["北京航空航天大学-北航一队","#","北京赛站","images/index0101/media/floor13.jpg","#"],
					["西北工业大学-辰星曙光","#","西安赛站","images/index0101/media/floor14.jpg","#"]
				],
				[
					["山东科技大学-飞龙在天","#","青岛赛站","images/index0101/media/floor15.jpg","#"],
					["重庆邮电大学-锦神粉丝团","#","重庆赛站","images/index0101/media/floor16.jpg","#"]
				],
				[
					["长春理工大学-cust一队","#","长春赛站","images/index0101/media/floor17.jpg","#"],
					["北京大学–SparklingFlame","#","北京赛站","images/index0101/media/floor18.jpg","#"]
				]
			],
			[	["Specials1","特色"],
				[
					["福州大学–BandofBrothers","#","杭电赛站","images/index0101/media/floor19.jpg","#"],
					["浙江财经大学-黄金圣斗士","#","浙大赛站","images/index0101/media/floor20.jpg","#"]
				],
				[
					["西安电子科技大学-XDU-team_XD","#","西安赛站","images/index0101/media/floor21.jpg","#"],
					["青岛大学-此广告位今年招商失败","#","青岛赛站","images/index0101/media/floor22.jpg","#"]
				],
				[
					["北京邮电大学-BUPT-0","#","北京赛站","images/index0101/media/floor23.jpg","#"],
					["南京邮电大学-南邮2016天梯1队","#","南京赛站","images/index0101/media/floor24.jpg","#"]
				]
			]
		],
		[
			[
				//col-featured-name -URL -des -photo-imagesURL -URL
				["电子科技大学何柱","#","成都赛站","images/index0101/media/featured01.jpg","#"],
				["电子科技大学林维博","#","成都赛站","images/index0101/media/featured02.jpg","#"],
				["西北工业大学邓丝雨","#","西安赛站","images/index0101/media/featured03.jpg","#"]
			],
			[
				["浙江大学","#","浙大赛站","images/index0101/media/featured04.jpg","#"],
				["北京大学","#","北京赛站","images/index0101/media/featured05.jpg","#"],
				["浙江财经大学","#","杭电赛站","images/index0101/media/featured06.jpg","#"]
			]
		]
	]
];

var _blockblogs = [
	[
		//block-title
		["社区热点"],
		//block-content
		//blog-date -imagesURL -URL detail-name -URL -description -actions -URL
		["2016.5.23","images/index0101/media/blog1.jpg","#","天梯赛规则","#","天梯赛注重团队竞赛，每支队伍由10名选手参赛，队员独立比赛，团体计分。","更多细节","#"],
		["2016.9.1","images/index0101/media/blog2.jpg","#","天梯赛数据一览","#","天梯赛决赛在7月16日举行，共分11个赛点。204支队伍2023学生参赛。","更多细节","#"],
		["2016.10.20","images/index0101/media/blog3.jpg","#","2017年分组计划","#","竞赛计划分珠峰争鼎（本科组）、华山论剑（本科组）、沧海竞舟（专科组），适应不同类型高校需求。","更多细节","#"]
	]
];

var _blockbrands = [
	//brand-name -LogoimagesURL	-URL
	["高等教育出版社","images/index0101/brand1.jpg","http://www.hep.edu.cn/"],
	["网易","images/index0101/brand2.jpg","http://www.163.com/"],
	["微软","images/index0101/brand3.jpg","http://www.microsoft.com/"],
	["阿里巴巴","images/index0101/brand4.jpg","http://www.alibabagroup.com/cn/global/home"],
	["苹果","images/index0101/brand5.jpg","http://www.apple.com/cn/"],
	["思科","images/index0101/brand6.jpg","http://www.cisco.com/c/zh_cn/"]
];

var _settingHTML = [
	"<a data-toggle=\"dropdown\" role=\"button\" href=\"#\" class=\"dropdown-toggle \"><span>个性化</span> <i aria-hidden=\"true\" class=\"fa fa-angle-down\"></i></a>",
	"<div class=\"dropdown-menu  \">",
	"	<div class=\"switcher  switcher-language\">",
	"		<strong class=\"title\">Select language</strong>",
	"		<ul class=\"switcher-options \">",
	"			<li class=\"switcher-option\">",
	"				<a href=\"#\">",
	"					<img class=\"switcher-flag\" alt=\"flag\" src=\"images/index0101/icon/flag_china.png\">",
	"				</a>",
	"			</li>",
	"			<li class=\"switcher-option\">",
	"				<a href=\"#\">",
	"					<img class=\"switcher-flag\" alt=\"flag_english\" src=\"images/index0101/icon/flag_usenglish.png\">",
	"				</a>",
	"			</li>",
	"			<li class=\"switcher-option\">",
	"				<a href=\"#\">",
	"					<img class=\"switcher-flag\" alt=\"flag_french\" src=\"images/index0101/icon/flag_french.png\">",
	"				</a>",
	"			</li>",
	"			<li class=\"switcher-option\">",
	"				<a href=\"#\">",
	"					<img class=\"switcher-flag\" alt=\"flag_germany\" src=\"images/index0101/icon/flag_germany.png\">",
	"				</a>",
	"			</li>",
	"			<li class=\"switcher-option switcher-active\">",
	"				<a href=\"#\">",
	"					<img class=\"switcher-flag\" alt=\"flag_japan\" src=\"images/index0101/icon/flag_japan.png\">",
	"				</a>",
	"			</li>",
	"		</ul>",
	"	</div>",
	"	<div class=\"switcher  switcher-currency\">",
	"		<strong class=\"title\">SELECT STYLE</strong>",
	"		<ul class=\"switcher-options \">",
	"			<li class=\"switcher-option\">",
	"				<a href=\"#\">",
	"					<i class=\"fa\" aria-hidden=\"true\"> </i>",
	"				</a>",
	"			</li>",
	"			<li class=\"switcher-option switcher-active\">",
	"				<a href=\"#\">",
	"					<i class=\"fa\" aria-hidden=\"true\"> </i>",
	"				</a>",
	"			</li>",
	"			<li class=\"switcher-option\">",
	"				<a href=\"#\">",
	"					<i class=\"fa\" aria-hidden=\"true\"> </i>",
	"				</a>",
	"			</li>",
	"		</ul>",
	"	</div>",
	"	<ul class=\"account\">",
	"		<li><a href=\"#\">消息列表</a></li>",
	"		<li><a href=\"#\">个人信息</a></li>",
	"		<li><a href=\"#\">登录/注册</a></li>",
	"	</ul>",
	"</div>"
];

var _searchoptionHTML = [
	"<div class=\"categori-search  \">",
	"	<select data-placeholder=\"All Categories\" class=\"categori-search-option\">",
	"		<option>所有分类</option>",
	"		<option>竞赛模块</option>",
	"		<option>区域</option>",
	"		<option>承办者</option>",
	"		<option>高校</option>",
	"		<option>队伍</option>",
	"		<option>教练</option>",
	"	</select>",
	"</div>"
];

var _formsearchHTML = [
	"<div class=\"form-search\">",
	"	<form>",
	"		<div class=\"box-group\">",
	"			<input type=\"text\" class=\"form-control\" placeholder=\"请输入标题、关键词搜索\">",
	"			<button class=\"btn btn-search\" type=\"button\"><span>search</span></button>",
	"		</div>",
	"	</form>",
	"</div>"
];

var _formminicartHTML = [
	"<div class=\"dropdown-menu\">",
	"	<form>",
	"		<div  class=\"minicart-content-wrapper\" >",
	"			<div class=\"subtitle\">",
	"				你有 0 条通知消息",
	"			</div>",
	"			<div class=\"minicart-items-wrapper\">",
	"				<ol class=\"minicart-items\">",
	"					<li class=\"product-item\">",
	"					</li>",
	"					<li class=\"product-item\">",
	"					</li>",
	"				</ol>",
	"			</div>",
	"			<div class=\"subtotal\">",
	"			</div>",
	"			<div class=\"actions\">",
	"			</div>",
	"		</div>",
	"	</form>",
	"</div>"
];

var _serviceHTML = [
	"<div class=\"block-service\">",
	"	<div class=\"container\">",
	"		<div class=\"row\">",
	"			<div class=\"col-sm-4\">",
	"				<div class=\"item\">",
	"					<span class=\"icon\">",
	"						<img src=\"images/index0101/service1.png\" alt=\"service\">",
	"					</span>",
	"					<a href=\"#\"><strong class=\"title\">参赛高校</strong></a>",
	"					<span>200所</span>",
	"				</div>",
	"			</div>",
	"			<div class=\"col-sm-4\">",
	"				<div class=\"item\">",
	"					<span class=\"icon\">",
	"						<img src=\"images/index0101/service2.png\" alt=\"service\">",
	"					</span>",
	"					<a href=\"#\"><strong class=\"title\">承办高校</strong></a>",
	"					<span>6所</span>",
	"				</div>",
	"			</div>",
	"			<div class=\"col-sm-4\">",
	"				<div class=\"item\">",
	"					<span class=\"icon\">",
	"						<img src=\"images/index0101/service3.png\" alt=\"service\">",
	"					</span>",
	"					<a href=\"#\"><strong class=\"title\">服务高校</strong></a>",
	"					<span>4所</span>",
	"				</div>",
	"			</div>",
	"		</div>",
	"	</div>",
	"</div>"
];

var _footerHTML = [
"<footer class=\"site-footer footer-opt-1\">",
"	<div class=\"container\">",
"		<div class=\"footer-column\">",
"			<div class=\"row\">",
"				<div class=\"col-md-4 col-lg-4 col-sm-6\">",
"					<strong class=\"logo-footer\">",
"						<a href=\"#\"><img src=\"images/index0101/c4logo-footer.png\" alt=\"c4logo\"></a>",
"					</strong>",
"					<table class=\"address\">",
"						<tr>",
"							<td>&nbsp;</td>",
"							<td><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>&nbsp;开发团队</td>",
"						</tr>",
"						<tr>",
"							<td><b>地址:  </b></td>",
"							<td>陕西省西安市碑林区友谊西路127号<br>西北工业大学计算机学院</td>",
"						</tr>",
"						<tr>",
"							<td><b>电话: </b></td>",
"							<td>029-88495820</td>",
"						</tr>",
"						<tr>",
"							<td><b>邮箱:</b></td>",
"							<td>NPU_c4team@163.com</td>",
"						</tr>",
"					</table>",
"				</div>",
"				<div class=\"col-md-3 col-lg-2 col-sm-6\">",
"					<div class=\"links\">",
"						<h3 class=\"title\">赛事服务</h3>",
"						<ul>",
"							<li><a href=\"html/hprerequisite.htm\">参赛资格</a></li>",
"							<li><a href=\"html/hplan.htm\">年度计划</a></li>",
"							<li><a href=\"html/hrules.htm\">竞赛规则</a></li>",
"							<li><a href=\"html/hguide.htm\">参赛指南</a></li>",
"							<li><a href=\"html/hschedule.htm\">比赛日程</a></li>",
"							<li><a href=\"html/hfinal.htm\">决赛名单</a></li>",
"							<li><a href=\"html/hresults.htm\">竞赛结果</a></li>",
"							<li><a href=\"html/hinvitation.htm\">竞赛邀请函</a></li>",
"						</ul>",
"					</div>",
"				</div>",
"				<div class=\"col-md-2 col-lg-2 col-sm-6\">",
"					<div class=\"links\">",
"						<h3 class=\"title\">竞赛咨询</h3>",
"						<ul>",
"							<li><a href=\"html/hscme.htm\">计算机教学指导委员会</a></li>",
"							<li><a href=\"html/hncera.htm\">全国计算机教育研究会</a></li>",
"							<li><a href=\"html/habout.htm\">大赛简介</a></li>",
"							<li><a href=\"html/hfiles.htm\">官方文件</a></li>",
"							<li><a href=\"html/hfaq.htm\">常见问题</a></li>",
"							<li><a href=\"html/hsitemap.htm\">网站地图</a></li>",
"							<li><a href=\"html/help.htm\">帮助中心</a></li>",
"							<li><a href=\"#\">隐私政策</a></li>",
"						</ul>",
"					</div>",
"				</div>",
"				<div class=\"col-md-3 col-lg-4 col-sm-6\">",
"					<div class=\"block-newletter\">",
"						<div class=\"block-title\">赛事通讯</div>",
"						<div class=\"block-content\">",
"							<form>",
"								<div class=\"input-group\">",
"									<input type=\"text\" class=\"form-control\" placeholder=\"你的邮箱地址\">",
"									<span class=\"input-group-btn\">",
"										<button class=\"btn btn-subcribe\" type=\"button\"><span>订阅</span></button>",
"									</span>",
"								</div>",
"							</form>",
"						</div>",
"					</div>",
"					<div class=\"block-social\">",
"						<div class=\"block-title\">社交网络</div>",
"						<div class=\"block-content\">",
"							<a href=\"#\"><span class=\"icon-CN_tencent_QQ\"></span></a>",
"							<a href=\"#\"><span class=\"icon-CN_tencent_wechat\"></span></a>",
"							<a href=\"#\"><span class=\"icon-CN_renren\"></span></a>",
"							<a href=\"#\"><span class=\"icon-CN_zhihu\"></span></a>",
"							<a href=\"#\"><span class=\"icon-CN_sina_weibo\"></span></a>",
"							<a href=\"#\"><span class=\"icon-CN_cnblogs\"></span></a>",
"						</div>",
"					</div>",
"				</div>",
"			</div>",
"		</div>",
"		<div class=\"copyright\">",
"			Copyright © 2016 中国高校计算机大赛. 版权所有. Designed by NPU-c4team",
"		</div>",
"	</div>",
"</footer>"
];

function Getsetting()
{
	var strHTML,stmp="";;
	var i;
	for (i=0; i<_settingHTML.length; i++) {
		stmp += _settingHTML[i];
	}
	strHTML = "<li class=\"dropdown setting\">" + stmp + "</li>";
	return strHTML;
}

function Getsearch(ntype)
{
	var strHTML="",stmp="";
	var i;
	for (i=0; i<_formsearchHTML.length; i++)
		stmp += _formsearchHTML[i];

	strHTML += "<div class=\"block-search\">";
	strHTML += "<div class=\"block-title\">";
	strHTML += "<span>Search</span>";
	strHTML += "</div>";
	strHTML += "<div class=\"block-content\">";
	if (ntype>1) {
		// sticky search
		strHTML  += stmp + "</div>"; //block-content
		strHTML  += "</div>"; //block-search
	}
	else {
		// block search
		for (i=0; i<_searchoptionHTML.length; i++)
			strHTML += _searchoptionHTML[i];
		strHTML += stmp + "</div>"; //block-content
		strHTML += "</div>"; //block-search
	}
	return strHTML;
}

function Getminicart(ntype)
{
	var strHTML,strHTML2,stmp="";
	var i;
	for (i=0; i<_formminicartHTML.length; i++)
		stmp += _formminicartHTML[i];		

	strHTML   = "<div class=\"block-minicart dropdown \">";
	strHTML  += "<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\">";
	strHTML  += "<span class=\"cart-icon\"></span>";
	if (ntype>1) {
		// sticky minicart
		strHTML  += "</a>";
	}
	else {
		// block minicart
		strHTML += "<span class=\"cart-text\">cart</span>";
		strHTML += "<span class=\"counter qty\">";
		strHTML += "<span class=\"counter-number\">0</span>";
		strHTML += "</span>";
		strHTML += "</a>";		
	}
	strHTML  += stmp + "</div>"; //block-minicart
	return strHTML;
}

function Getmainmenu()
{
	var strHTML="",stmp;
	var i,j,k;
	strHTML += "<div class=\"block-nav-menu\">";
	if (_mainmenu.length>0) {
		strHTML += "<ul class=\"ui-menu\">";
		for (i=0; i<_mainmenu.length; i++) {
			// _mainmenu[i][0] = ["首页","#","megamenu","horizontal-menu","active",""]
			var e_menu = _mainmenu[i];
			var e_main = e_menu[0];
			if (e_main[0].length<=0) continue; //skip it
			
			if (e_main[2]=="megamenu") {
				if (e_main[3]=="horizontal-menu") {
					//["首页","#","megamenu","horizontal-menu","active",""],
					//["参加比赛","#","megamenu","horizontal-menu","","img-categori"],
					//["竞赛教学","#","megamenu","horizontal-menu","",""],
					strHTML += "<li class=\"parent parent-megamenu \""+e_main[4]+">"; //active
					strHTML += "<a href=\"#\">"+e_main[0]+"</a>";
					if (e_menu.length>=2) {
						strHTML += "<span class=\"toggle-submenu\"></span>";
						strHTML += "<div class=\""+e_main[2]+"\">";
						strHTML += "<div class=\""+e_main[3]+"\">";
						strHTML += "<ul>";
						for (j=1; j<e_menu.length; j++) {
							var e_item = e_menu[j];
							var item0 = 0;
							if (e_main[5]!="img-categori") {
								strHTML += "<li class=\"col-md-4\">";
							}
							else {
								strHTML += "<li class=\"col-md-3\">";
								strHTML += "<div class=\""+e_main[5]+"\">";
								strHTML += "<a href=\""+e_item[0][1]+"\"><img alt=\""+e_item[0][0]+"\" src=\""+e_item[0][2]+"\"></a>";
								strHTML += "</div>";
								strHTML += "<strong class=\""+e_item[1][0]+"\"><a href=\""+e_item[1][2]+"\"><span>"+e_item[1][1]+"</span></a></strong>";
								item0 = 2;
							}
							strHTML += "<ul class=\"list-submenu\">";
							for (k=item0; k<e_item.length; k++) {
								strHTML += "<li><a href=\""+e_item[k][1]+"\">"+e_item[k][0]+"</a></li>";
							}
							strHTML += "</ul>";
							strHTML += "</li>";
						}
						strHTML += "</ul>";
						strHTML += "</div>";
						strHTML += "</div>";
					}
					strHTML += " </li>";
				}
				else { //vertical-menu "++"
					//["历届比赛","#","megamenu","vertical-menu","","img-categori"],
					strHTML += "<li class=\"parent parent-megamenu\">";
					strHTML += "<a href=\""+e_main[1]+"\">"+e_main[0]+"</a>";
					if (e_menu.length>=2) {
						strHTML += "<span class=\"toggle-submenu\"></span>";
						strHTML += "<div class=\""+e_main[2]+"\">";
						strHTML += "<div class=\""+e_main[3]+"\">";
						strHTML += "<div class=\"col-left\">";
						var e_item = e_menu[1];
						strHTML += "<strong class=\"title\"><a href=\""+e_item[1]+"\">"+e_item[0]+"</a></strong>";
						stmp = "";
						for (j=2; j<e_menu.length; j++) {
							e_item = e_menu[j];
							if ( e_item.length ==2 ) {
								stmp += "<li><a href=\""+e_item[1]+"\">"+e_item[0]+"</a></li>"
							}
						}
						if (stmp.length>0) strHTML += "<ul>" + stmp + "</ul>";
						strHTML += "</div>"; //col-left
						stmp = "";
						for (j=2; j<e_menu.length; j++) {
							e_item = e_menu[j];
							if ( e_item.length ==3 ) {
								stmp += "<div class=\"col-md-4\">";
								stmp += "<a href=\""+e_item[0]+"\"><img alt=\""+e_item[1]+"\" src=\""+e_item[2]+"\"></a>";
								stmp += "</div>";
							}
						}
						if (stmp.length>0) strHTML += "<div class=\"col-right\">" + stmp + "</div>";
						strHTML += "</div>";
						strHTML += "</div>";
					}
					strHTML += "</li>";
				}
			}
			else if (e_main[2]=="submenu") {
				//["大赛信息","#","submenu","","",""],
				//["合作伙伴","#","submenu","","",""],
				strHTML += "<li class=\"parent\">";
				strHTML += "<a href=\""+e_main[1]+"\">"+e_main[0]+"</a>";
				strHTML += "<span class=\"toggle-submenu\"></span>";
				strHTML += "<ul class=\""+e_main[2]+"\">";
				var e_item = _mainmenu[i][1];
				for (j=0; j<e_item.length; j++) {
					strHTML += "<li><a href=\""+e_item[j][1]+"\">"+e_item[j][0]+"</a></li>";
				}
				strHTML += "</ul>";
				strHTML += "</li>";				
			}
			else {
				//["社区","#","","","",""]
				strHTML += "<li><a href=\"" + e_main[1] + "\">";
				strHTML += e_main[0] + "</a></li>";
			}
			
		}
		strHTML += "</ul>";
	}
	strHTML += "</div>"; //block-nav-menu
	return strHTML;
}

function Getmodulemenu()
{
	var strHTML="",stmp;
	var i,j,k;
	strHTML += "<div class=\"block-nav-categori \">";
	if (_modulemenu.length>0) {
		strHTML += "<div class=\"block-title\">";
		strHTML += "<img src=\"images/index0101/cmodulemenu.jpg\">";
		//strHTML += "<span>主菜单</span>";
		strHTML += "</div>";
		//block-content
		strHTML += "<div class=\"block-content\">";
			strHTML += "<ul class=\"ui-categori\">";
			for (i=0; i<_modulemenu.length; i++) {
				// ["团体程序设计天梯赛","#","images/index0101/icon/nav-cat3.png",""]
				var e_menu = _modulemenu[i];
				var e_main = e_menu[0];
				var e_submenu = e_menu.length>1 ? e_menu[1] : 0;
				
				stmp = "<a href=\""+e_main[1]+"\">";
				stmp += "<span class=\"icon\"><img src=\""+e_main[2]+"\" alt=\"nav-cat\"></span>";
				stmp += e_main[0] + "</a>";
				if ( e_submenu==0 ) {
					strHTML += "<li>";
					strHTML += stmp;
				}
				else {
					strHTML += "<li class=\"parent\">";
					strHTML += stmp;
					strHTML += "<span class=\"toggle-submenu\"></span>";
					if (e_main[3].length>0)
						strHTML += "<div class=\"submenu\" style=\"background-image: url("+e_main[3]+");\">";
					else
						strHTML += "<div class=\"submenu\">";
					for (j=0; j<e_submenu.length; j++) {
						if (j%3==0) { //3列一行 012 第1列
							if (i==0)
								strHTML += "<ul class=\"categori-list clearfix\">";
							else
								strHTML += "<ul class=\"categori-list\">";
						}
						strHTML += "<li class=\"col-sm-3\">";
						var e_subsubmenu = e_submenu[j][0];
						strHTML += "<strong class=\"title\"><a href=\""+e_subsubmenu[1]+"\">"+e_subsubmenu[0]+"</a></strong>";
						if ( e_submenu[j].length>0 ) {
							e_subsubmenu = e_submenu[j][1];
							strHTML += "<ul>";
							for (k=0; k<e_subsubmenu.length; k++) {
								strHTML += "<li><a href=\""+e_subsubmenu[k][1]+"\">"+e_subsubmenu[k][0]+"</a></li>";
							}
							strHTML += "</ul>";
						}
						strHTML += "</li>";
						if (j%3==2) { //3列一行 012 第3列
							strHTML += "</ul>";
						}
					}
					strHTML += "</div>";
				}
				strHTML += "</li>";
			}
			for (; i<11; i++) {
				strHTML += "<li>";
				strHTML += "<a href=\"#\">&nbsp;</a>";
				strHTML += "</li>";
			}
			strHTML += "</ul>";
			//strHTML += "<div class=\"view-all-categori\">";
			//strHTML += "<a class=\"open-cate btn-view-all\">&nbsp;</a>";
			//strHTML += "</div>";
		strHTML += "</div>"; //block-content
	}
	strHTML += "</div>"; //block-nav-categori
	return strHTML;
}

function Getblockslide()
{
	var strHTML;
	var i;
	var e;
	strHTML  = "<div class=\"block-slide-main slide-opt-1\" >";
		strHTML += "<div class=\"owl-carousel\"";
		strHTML += "data-nav=\"true\" ";
		strHTML += "data-dots=\"false\" ";
		strHTML += "data-margin=\"0\" ";
		strHTML += "data-items='1' ";
		strHTML += "data-autoplayTimeout=\"700\" ";
		strHTML += "data-autoplay=\"true\" ";
		strHTML += "data-loop=\"true\">";
		for (i=0; i<_blockslides.length; i++) {
			e = _blockslides[i];
			strHTML += "<div class=\"item "+e[0]+"\" style=\"background-image: url("+e[1]+");\">";
			strHTML += "<div class=\"container\">";
			strHTML += "<div class=\"description\">";
			if ( e[2].length>0 )
				strHTML += "<span class=\"title\">"+e[2]+"</span>";
			if ( e[3].length>0 )
				strHTML += "<span class=\"subtitle\">"+e[3]+"</span>";
			if ( e[4].length>0 )
				strHTML += "<span class=\"des\">"+e[4]+"</span>";
			if ( e[5].length>0 )
				strHTML += "<a href=\""+e[6]+"\" class=\"btn\">"+e[5]+"</a>";
			strHTML += "</div>";
			strHTML += "</div>";
			strHTML += "</div>";
		}
		strHTML += "</div>"; //owl-carousel
	strHTML += "</div>"; //block-slide-main
	return strHTML;
}

function Getsectiontop()
{
	var strHTML="";
	//<!-- section top -->
	strHTML += "<div class=\"block-section-top block-section-top1\" >";
		//<!-- categories -->
		//模块菜单 option-tiem
		//strHTML += "<div class=\"container\">";
		//strHTML += Getmodulemenu(); //<!-- modules menu -->
		//strHTML += "</div>"; //<!-- categories -->
		//滚动广告
		strHTML += Getblockslide(); //<!-- block slide top -->
	strHTML += "</div>"; //<!-- section top -->
	return strHTML;
}

function Getblocklatest()
{
	var strHTML,stmp;
	var i,j,btail=false;
	var item,e;
	for (i=0; i<_blocklatests.length; i++) {
		item = _blocklatests[i][1];
		strHTML = "<div id=\"atblocklatest\" class=\"blocklatest\">";
		strHTML+= "<div class=\"container\">";
		if (item.length>0) {
			strHTML+= "<div class=\"ticker-container \">"; //bn-color
			strHTML+= "<div class=\"bn-title\"><h2>"+_blocklatests[i][0][0]+"</h2><span></span></div>";
			strHTML+= "<ul>";
			for (j=0; j<item.length; j++) {
				e = item[j];
				strHTML+= "<div>";
				strHTML+= "<li><a href=\""+e[3]+"\">&nbsp;"; //+j.toString()+".";
				strHTML+= e[2]+"<span>";
				stmp = "";
				if (e[0].length>0) {
					stmp += "（"+e[0]; //publisher
					if (e[1].length>0) stmp += "，"+e[1]+'发布'; //date
					stmp += "）";
				}
				else {
					if (e[1].length>0) stmp += "（"+e[1]+"发布）"; //date
				}
				//strHTML += stmp; //添加发布人和发布日期
				strHTML += "</span></a></li></div>";
			}
			strHTML+= "</ul>";
			strHTML+= "</div>"; //ticker-container
		}
		strHTML+= "</div>"; //container
		strHTML+= "</div>"; //block-the-blog
	}
	return strHTML;
}

function Getblockbanner()
{
	var strHTML;
	var i,j,btail=false;
	var item,e;
	for (i=0; i<_blockbanners.length; i++) {
		item = _blockbanners[i][1];
		strHTML = "<div id=\"atblockbanner\" class=\"block-banner-main effect-banner1\">";
		strHTML+= "<div class=\"container\">";
		strHTML+= "<div class=\"block-title\">";
		strHTML+= "<span class=\"title\">"+_blockbanners[i][0][0]+"</span>";
		strHTML+= "</div>"; //block-title
		for (j=0; j<item.length; j++) {
			e = item[j];
			if (j%4==0) { //4列一行 0123 第1列
				strHTML+= "<div class=\"row\">";
				btail=true;
			}
			strHTML+= "<div class=\"col-sm-3\">";
			strHTML+= "<a href=\""+e[2]+"\" class=\"box-img\"><img src=\""+e[1]+"\" alt=\""+e[0]+"\"></a>";
			strHTML+= "</div>";
			if (j%4==3) { //4列一行 0123 第4列
				strHTML+= "</div>";
				btail=false;
			}				
		}
		if (btail) {
			strHTML+= "</div>";
		}
		strHTML+= "</div>"; //container
		strHTML+= "</div>"; //block-banner-main
	}
	return strHTML;
}

function Getblockhotcategori()
{
	var strHTML="";
	var i,j;
	strHTML+= "<div id=\"atblockhotcategori\" class=\"block-hot-categori\">";
	strHTML+= "<div class=\"container\">";
	strHTML+= "<div class=\"block-title\">";
	strHTML+= "<span class=\"title\">现场播报</span>";
	strHTML+= "</div>";
		//block-content
		strHTML+= "<div class=\"block-content\">";
		for (i=0; i<_blockhotcategoris.length; i++) {
			var e = _blockhotcategoris[i];
			var item = e[0];
			strHTML+= "<div class=\"item\">";
			strHTML+= "<div class=\"item-info\">";
			strHTML+= "<strong class=\"title\">";
			strHTML+= "<a href=\""+item[2]+"\"><img alt=\"title-hot-categori\" src=\""+item[1]+"\" >";
			strHTML+= "<span>"+item[0]+"</span></a>";
			strHTML+= "</strong>";
			item = e[1];
			if (item.length>0) {
				strHTML+= "<ul>";
				for (j=0; j<item.length; j++) {
					strHTML+= "<li>";
					strHTML+= "<a href=\""+item[j][2]+"\">";
					strHTML+= "<img alt=\"hot-categori\" src=\""+item[j][1]+"\" >";
					strHTML+= "<span>"+item[j][0]+"</span>";
					strHTML+= "</a>";
					strHTML+= "</li>";
				}
				strHTML+= "</ul>";
			}
			strHTML+= "</div>"; //item-info
			strHTML+= "</div>"; //item
		}
		strHTML+= "</div>"; //block-content
	strHTML+= "</div>"; //container
	strHTML+= "</div>"; //block-hot-categori
	return strHTML;
}

function Getblockfloor()
{
	var strHTML="";
	var i,j,k,m,num=_blockfloors.length;
	var e,e_banner,e_list,e_featured,item,subitem,xe;
	for (i=0; i<num; i++) {
		e = _blockfloors[i]; // e[0] e[1] e[2] e[3]
		e_banner   = e[1];
		e_list     = e[2];
		e_featured = e[3];
		strHTML += "<div id=\"atblockfloor\" class=\"block-floor-products  block-floor-products-opt1 block-floor-1\" id=\"floor1-"+(i+1).toString()+"\">";
		strHTML += "<div class=\"container\">";
		//title
		strHTML += "<div class=\"block-title heading-opt-1\">";
		strHTML += "<span class=\"title\"><img src=\""+e[0][1]+"\" alt=\"floor\">"+e[0][0]+"</span>";
		strHTML += "<ul class=\"links\">";
		for (j=0; j<e_list.length; j++) {
			item = e_list[j];
			strHTML += "<li role=\"presentation\"";
			if (j==0)
				strHTML += " class=\"active\"";
			strHTML += "><a href=\"#"+item[0][0]+"\" role=\"tab\" data-toggle=\"tab\">"+item[0][1]+"</a></li>";
		}
		strHTML += "</ul>";
		strHTML += "<div class=\"actions\">";
		if (i==0)
			strHTML += "<a href=\"#\" class=\"action action-up\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>";
		else
			strHTML += "<a href=\"#floor1-"+i.toString()+"\" class=\"action action-up\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>";
		if (i==num-1)
			strHTML += "<a href=\"#\" class=\"action action-down\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>";
		else
			strHTML += "<a href=\"#floor1-"+(i+2).toString()+"\" class=\"action action-down\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>";
		strHTML += "</div>"; //actions
		strHTML += "</div>"; //block-title
		//content
		strHTML += "<div class=\"block-content\">";
			//banner
			strHTML += "<div class=\"col-banner\">";
			strHTML += "<a href=\""+e_banner[0]+"\" class=\"img\"><img src=\""+e_banner[1]+"\" alt=\"baner-floor\"></a>";
			strHTML += "<div class=\"description\">";
			strHTML += "<strong class=\"title\">"+e_banner[2]+"</strong>";
			strHTML += "<div class=\"des\">"+e_banner[3]+"</div>";
			strHTML += "<a href=\""+e_banner[5]+"\" class=\"btn btn-default\">"+e_banner[4]+"</a>";
			strHTML += "</div>"; //description
			strHTML += "</div>"; //col-banner
			//products
			strHTML += "<div class=\"col-products \">";
			for (j=0; j<e_list.length; j++) {
				item = e_list[j];
				if (j==0)
					strHTML += "<div class=\"box-tab active in  fade \" id=\""+item[0][0]+"\" role=\"tabpanel\">";
				else
					strHTML += "<div class=\"box-tab fade \" id=\""+item[0][0]+"\" role=\"tabpanel\">";
				strHTML += "<div class=\"owl-carousel\" ";
				strHTML += "data-nav=\"true\" ";
				strHTML += "data-dots=\"false\" ";
				strHTML += "data-margin=\"0\" ";
				strHTML += "data-responsive='{";
				strHTML += "\"0\":{\"items\":1},";
				strHTML += "\"420\":{\"items\":2},";
				strHTML += "\"600\":{\"items\":3},";
				strHTML += "\"768\":{\"items\":3},";
				strHTML += "\"992\":{\"items\":3},";
				strHTML += "\"1200\":{\"items\":3}";
				strHTML += "}'>";
				for (k=1; k<item.length; k++) {
					subitem = item[k];
					strHTML += "<div class=\"item\">";
					for (m=0; m<subitem.length; m++) {
						xe = subitem[m];
						strHTML += "<div class=\"product-item product-item-opt-1\">";
						strHTML += "<div class=\"product-item-info\">";
						strHTML += "<div class=\"product-item-photo\">";
						strHTML += "<a class=\"product-item-img\" href=\""+xe[4]+"\"><img alt=\"name\" src=\""+xe[3]+"\"></a>";
						strHTML += "</div>";
						strHTML += "<div class=\"product-item-detail\">";
						strHTML += "<strong class=\"product-item-name\"><a href=\""+xe[1]+"\">"+xe[0]+"</a></strong>";
						strHTML += "<div class=\"product-item-price\">";
						strHTML += "<span class=\"price\">"+xe[2]+"</span>";
						strHTML += "</div>";
						strHTML += "</div>";
						strHTML += "</div>";
						strHTML += "</div>";
					}
					strHTML += "</div>";
				}
				strHTML += "</div>";
				strHTML += "</div>";
			}
			strHTML += "</div>"; //products
			//col-featured
			strHTML += "<div class=\"col-featured\">";
			strHTML += "<span class=\"label-featured\"><img src=\"images/index0101/icon/label-featured.png\" alt=\"label-featured\"></span>";
			strHTML += "<div class=\"owl-carousel\" ";
			strHTML += "data-nav=\"true\" ";
			strHTML += "data-dots=\"false\" ";
			strHTML += "data-margin=\"0\" ";
			strHTML += "data-responsive='{";
			strHTML += "\"0\":{\"items\":1},";
			strHTML += "\"380\":{\"items\":2},";
			strHTML += "\"480\":{\"items\":2},";
			strHTML += "\"600\":{\"items\":1},";
			strHTML += "\"992\":{\"items\":1}";
			strHTML += "}'>";
			for (j=0; j<e_featured.length; j++) {
				item = e_featured[j];
				strHTML += "<div class=\"item\">";
				for (k=0; k<item.length; k++) {
					xe = item[k];
					strHTML += "<div class=\"product-item product-item-opt-1\">";
					strHTML += "<div class=\"product-item-info\">";
					strHTML += "<div class=\"product-item-photo\">";
					strHTML += "<a class=\"product-item-img\" href=\""+xe[4]+"\"><img alt=\"name\" src=\""+xe[3]+"\"></a>";
					strHTML += "</div>";
					strHTML += "<div class=\"product-item-detail\">";
					strHTML += "<strong class=\"product-item-name\"><a href=\""+xe[1]+"\">"+xe[0]+"</a></strong>";
					strHTML += "<div class=\"product-item-price\">";
					strHTML += "<span class=\"price\">"+xe[2]+"</span>";
					strHTML += "</div>";
					strHTML += "</div>";
					strHTML += "</div>";
					strHTML += "</div>";
				}
				strHTML += "</div>";
			}
			strHTML += "</div>"; //owl-carousel
			strHTML += "</div>"; //col-featured
		//content
		strHTML += "</div>"; //block-content
		//container
		strHTML += "</div>"; //container
		strHTML += "</div>"; //block-floor-products
	}
	return strHTML;
}

function Getblockblog()
{
	var strHTML="";
	var i,j;
	var e,item;
	for (i=0; i<_blockblogs.length; i++) {
		e = _blockblogs[i];
		//block-the-blog
		strHTML+= "<div id=\"atblockblog\" class=\"block-the-blog\">";
		strHTML+= "<div class=\"container\">";
		strHTML+= "<div class=\"block-title\">";
		strHTML+= "<span class=\"title\">"+e[0][0]+"</span>";
		strHTML+= "</div>";
			//block-content
			strHTML+= "<div class=\"block-content\">";
			//owl-carousel
			strHTML+= "<div class=\"owl-carousel\" ";
			strHTML+= "data-nav=\"true\" ";
			strHTML+= "data-dots=\"false\" ";
			strHTML+= "data-margin=\"30\" ";
			strHTML+= "data-responsive='{";
			strHTML+= "\"0\":{\"items\":1},";
			strHTML+= "\"480\":{\"items\":2},";
			strHTML+= "\"768\":{\"items\":2},";
			strHTML+= "\"992\":{\"items\":3},";
			strHTML+= "\"1200\":{\"items\":3}";
			strHTML+= "}'>";
			for (j=1; j<e.length; j++) {
				item = e[j];
				strHTML+= "<div class=\"blog-item\">";
				strHTML+= "<div class=\"blog-photo\">";
				strHTML+= "<a href=\""+item[2]+"\"><img src=\""+item[1]+"\" alt=\"blog\"></a>";
				strHTML+= "<span class=\"blog-date\">";
				strHTML+= item[0];
				strHTML+= "</span>";
				strHTML+= "</div>";
				strHTML+= "<div class=\"blog-detail\">";
				strHTML+= "<strong class=\"blog-name\"><a href=\""+item[4]+"\">"+item[3]+"</a></strong>";
				strHTML+= "<div class=\"blog-des\">";
				strHTML+= item[5];
				strHTML+= "</div>";
				strHTML+= "<div class=\"blog-actions\">";
				strHTML+= "<a href=\""+item[7]+"\" class=\"action\">"+item[6]+"</a>";
				strHTML+= "</div>";
				strHTML+= "</div>";
				strHTML+= "</div>";
			}
			strHTML+= "</div>"; //owl-carousel
			strHTML+= "</div>"; //block-content
		strHTML+= "</div>"; //container
		strHTML+= "</div>"; //block-the-blog
	}
	return strHTML;
}

function Getblockbrand()
{
	var strHTML="";
	var i;
	var e;
	strHTML+= "<div class=\"block-brand\">";
	strHTML+= "<div class=\"container\">";
		strHTML+= "<div class=\"owl-carousel\" ";
		strHTML+= "data-nav=\"true\" ";
		strHTML+= "data-dots=\"false\" ";
		strHTML+= "data-margin=\"30\" ";
		strHTML+= "data-responsive='{";
		strHTML+= "\"0\":{\"items\":3},";
		strHTML+= "\"480\":{\"items\":4},";
		strHTML+= "\"600\":{\"items\":5},";
		strHTML+= "\"992\":{\"items\":6}";
		strHTML+= "}'>";
		for (i=0; i<_blockbrands.length; i++) {
			e = _blockbrands[i];
			strHTML+= "<div class=\"item\">";
			strHTML+= "<a target=\"_blank\" href=\""+e[2]+"\"><img src=\""+e[1]+"\" alt=\""+e[0]+"\"></a>";
			strHTML+= "</div>";
		}
		strHTML+= "</div>"; //owl-carousel
	strHTML+= "</div>"; //container
	strHTML+= "</div>"; //block-brand
	return strHTML;
}

function Getblockservice()
{
	var strHTML="";
	var i,j;
	for (i=0; i<_serviceHTML.length; i++)
		strHTML += _serviceHTML[i];
	return strHTML;
}

function Getheaderhotlinelinks(ntype)
{	//ntype=1 home
	var strHTML="";
	strHTML += "<div class=\"header-top\">"; //<!-- header-top -->
	strHTML += "<div class=\"container\">";
		strHTML += "<ul class=\"hotline nav-left\" >"; //<!-- hotline -->
		//热线联系 option-tiem
		//strHTML += "<li ><span><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>+ 010 12345678</span></li>";
		//strHTML += "<li ><span><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> 请与我们联系</span></li>";
		if (ntype!=1)
			strHTML += "<li ><img src=\"images/index0101/c4.png\"></li>";
		strHTML += "</ul>"; //<!-- hotline -->
		strHTML += "<ul class=\"links nav-right\">"; //<!-- header links -->
		strHTML += "<li id=\"c4top_register\"><a href=\"/register\">注册 </a></li>";
		strHTML += "<li id=\"c4top_login\"><a href=\"/login\" >登录 </a></li>";
		strHTML += "<li><a href=\"html/help.htm\">帮助 </a></li>";
		//个性化
		strHTML += Getsetting(); //<!-- header setting -->
		strHTML += "</ul>"; //<!-- heder links -->
	strHTML += "</div>";
	strHTML += "</div>";
	return strHTML;
}

function Getheadercontent()
{
	var strHTML="";
	strHTML += "<div class=\"header-content\">"; //<!-- header-content -->
	strHTML += "<div class=\"container\">";
	strHTML += "<div class=\"row\">";
		strHTML += "<div class=\"col-md-5 nav-left\">";
		//<!-- logo -->
		// home = /
		strHTML += "<a href=\"/\"><img src=\"images/index0101/c4logo.png\" alt=\"c4logo\"></a>";
		strHTML += "</div>";
		strHTML += "<div class=\"col-md-5 nav-mind\">"; // style=\"background-color:#f00;\"
		//搜索
		strHTML += Getsearch(1); //<!-- block search -->
		strHTML += "</div>";
		strHTML += "<div class=\"col-md-2 nav-right\">";
		//消息记录
		strHTML += Getminicart(1); //<!-- block mini cart -->
		//收藏 option-tiem
		//strHTML += "<a href=\"#\" class=\"link-wishlist\"><span>收藏</span></a>";//<!-- link  wishlish-->
		strHTML += "</div>";
	strHTML += "</div>";
	strHTML += "</div>";
	strHTML += "</div>"; //<!-- header-content -->
	return strHTML;
}

function Getheadernav()
{
	var strHTML="";
	//<!-- header-nav -->
	strHTML += "<div class=\"header-nav mid-header\">";
	strHTML += "<div class=\"container\">";
	strHTML += "<div class=\"box-header-nav\">";
		strHTML += "<span data-action=\"toggle-nav-cat\" class=\"nav-toggle-menu nav-toggle-cat\">"
		strHTML += "<img src=\"images/index0101/cmodulemenu.jpg\"><i aria-hidden=\"true\" class=\"fa fa-bars\"></i>";
		strHTML += "</span>";
		//sticky模块菜单
		strHTML += Getmodulemenu(); //<!-- modules menu -->
		//主菜单
		strHTML += Getmainmenu(); //<!-- main menu -->
		strHTML += "<span data-action=\"toggle-nav\" class=\"nav-toggle-menu\">";
		strHTML += "<img src=\"images/index0101/cmainmenu.jpg\"><i aria-hidden=\"true\" class=\"fa fa-bars\"></i>";
		strHTML += "</span>";
		strHTML += Getminicart(2);//<!-- sticky header minicart -->
		strHTML += Getsearch(2);//<!-- sticky header search -->
		strHTML += Getsetting();//<!-- sticky header setting -->
	strHTML += "</div>"; //box-header-nav
	strHTML += "</div>";
	strHTML += "</div>"; //<!-- header-nav -->
	return strHTML;
}

function MKheadertop(ntype)
{
	var strHTML="";
	ntype = ntype || 2017; //=1 home
	if (ntype==1) {
		strHTML += Getheaderhotlinelinks(ntype);
		strHTML += Getheadercontent();
	}
	strHTML += Getheadernav();
	$("#c4top_headertop").replaceWith(strHTML);
}

function MKfooter()
{
	var strHTML="";
	var i,j;
	for (i=0; i<_footerHTML.length; i++)
		strHTML += _footerHTML[i];
	$("#c4top_footer").replaceWith(strHTML);
}

function MKhomepagemain()
{
	var strHTML="";
	//模块菜单+滚动广告1
	strHTML += Getsectiontop();
	//最新公告
	strHTML += Getblocklatest();//<!-- block latest -->
	//新闻焦点
	strHTML += Getblockbanner();//<!-- block banner -->
	//现场播报
	strHTML += Getblockhotcategori();//<!-- block hot-categori -->
	//花絮
	strHTML += Getblockfloor();//<!-- block floor -->
	//社区热点
	strHTML += Getblockblog();//<!-- block blog -->
	//赞助商
	strHTML += Getblockbrand();//<!-- block brand -->
	//大赛单位
	strHTML += Getblockservice();//<!-- block service-->

	$("#c4top_pagemain").replaceWith(strHTML);
}

function MKhomeUI()
{
	_gHost = 0; //root host
	//首页调用
	MKheadertop(1); //页面顶部和菜单
	MKhomepagemain(); //中心页面
	MKfooter(); //网页脚注
}










/*
常量地址均按root形式表示：
空白链接	href="#"
html网页	href="html/xxx.htm"
首页		href="/"
图片		src="xxx"
*/

function AdjustURL(str)
{
	//Adjust <img src="xxx ===> <img src="../xxx
	str = str.replace(/src=\"/g,"src=\"" + '../');
	//Adjust <a href="html/xxx.htm ===> <a href="xxx.htm
	str = str.replace(/href=\"html\//g,"href=\"");
	return str;
}

var _doc_footerHTML = [
	"<footer class=\"site-footer\">",
	"	<div class=\"container\">",
	"		<a id=\"scroll-up\" href=\"#\"><i class=\"fa fa-angle-up\"></i></a>",
	"		<div class=\"row\">",
	"			<div class=\"col-md-6 col-sm-6\">",
	"				<p>Copyright &copy; 2016 中国高校计算机大赛. 版权所有. Designed by NPU-c4team.</p>",
	"			</div>",
	"			<div class=\"col-md-6 col-sm-6\">",
	"				<ul class=\"footer-menu\">",
	"					<li><a href=\"#\">网站条款</a></li>",
	"					<li><a href=\"#\">隐私政策</a></li>",
	"					<li><a href=\"NPU_c4team@163.com\">联系我们</a></li>",
	"				</ul>",
	"			</div>",
	"		</div>",
	"	</div>",
	"</footer>"
];

function Getnavbar()
{
	var strHTML;
	strHTML  = "<nav class=\"navbar navbar-default\">"; //<!-- header-nav -->
	strHTML += "<div class=\"header-nav mid-header\">";
	strHTML += "<div class=\"container\">";
	strHTML += "<div class=\"box-header-nav\">";
		strHTML += "<div class=\"block-nav-categori\">"; //<!-- block categori -->
		strHTML += "<a class=\"navbar-brand\" href=\"/\"><img src=\"images/index0101/c4logoc.png\" alt=\"logo\"></a>";
		strHTML += "</div>"; //<!-- block categori -->
		strHTML += Getmainmenu(); //<!-- menu -->
		strHTML += "<span data-action=\"toggle-nav\" class=\"nav-toggle-menu\">";
		strHTML += "<span>&nbsp;</span><i aria-hidden=\"true\" class=\"fa fa-bars\"></i></span>";
	strHTML += "</div>"; //<!-- box-header-nav -->
	strHTML += "</div>"; //<!-- container -->
	strHTML += "</div>"; //<!-- header-nav -->
	strHTML += "</nav>";
	return strHTML;
}
function MKnavbar()
{
	var strHTML;
	strHTML = Getnavbar();
	strHTML = AdjustURL(strHTML);
	$("#c4topdoc_navbar").replaceWith(strHTML);
}
function MKbreadcrumb(homeName,currentName)
{	//"首页","大赛简介"
	var strHTML;
	strHTML  = "<div class=\"breadcrumb-page container\">";
	strHTML += "<ol class=\"breadcrumb\">";
	strHTML += "<li><a href=\"#\">"+homeName+"</a></li>";
	strHTML += "<li class=\"active\">"+currentName+"</li>";
	strHTML += "</ol>";
	strHTML += "</div>"; //breadcrumb-page
	strHTML += Getblocklatest(); //最新公告
	//$("#c4topdoc_breadcrumb").replaceWith(strHTML);
}
function MKblocklatest()
{
	var strHTML=Getblocklatest();
	strHTML = AdjustURL(strHTML);
	$("#c4topdoc_blocklatest").replaceWith(strHTML);
}
function MKDocfooter()
{
	var strHTML="";
	var i,j;
	for (i=0; i<_doc_footerHTML.length; i++)
		strHTML += _doc_footerHTML[i];
	strHTML = AdjustURL(strHTML);
	$("#c4topdoc_footer").replaceWith(strHTML);
}
function MKDocPageUI()
{
	//页面调用
	MKnavbar(); //页面顶部导航菜单
	//MKbreadcrumb(); //中心页面面包屑和最新公告
	MKblocklatest(); //最新公告
	MKDocfooter(); //网页脚注
}

//(function( $ ){
//	"use strict";
//	$(document).ready(function() {
//	});
//} )( jQuery );