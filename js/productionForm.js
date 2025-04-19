//保存输入信息
var user = {
	companyName: "",
	year: "",
	month: "",
	province: "",
	tel: "",
	email: "",
	region: ""
};
//声明一个json数组，用于保存所有的省份信息
var provinces = [{
		Provinceno: "bj",
		Provincename: "北京市",
		value: 0
	},
	{
		Provinceno: "tj",
		Provincename: "天津市",
		value: 1
	},
	{
		Provinceno: "hb",
		Provincename: "河北省",
		value: 2
	},
	{
		Provinceno: "sx",
		Provincename: "山西省",
		value: 3
	},
	{
		Provinceno: "sd",
		Provincename: "山东省",
		value: 4
		// 华北
	},
	{
		Provinceno: "hlj",
		Provincename: "黑龙江省",
		value: 5
	},
	{
		Provinceno: "jl",
		Provincename: "吉林省",
		value: 6
	},
	{
		Provinceno: "ln",
		Provincename: "辽宁",
		value: 7
	},
	{
		Provinceno: "nmg",
		Provincename: "内蒙古自治区",
		value: 8
		//东北
	},
	{
		Provinceno: "sh",
		Provincename: "上海市",
		value: 9
	},
	{
		Provinceno: "js",
		Provincename: "江苏省",
		value: 10
	},
	{
		Provinceno: "zj",
		Provincename: "浙江省",
		value: 11
	},
	{
		Provinceno: "ah",
		Provincename: "安徽省",
		value: 12
	},
	{
		Provinceno: "fj",
		Provincename: "福建省",
		value: 13
		//华东
	},
	{
		Provinceno: "hb",
		Provincename: "湖北省",
		value: 14
	},
	{
		Provinceno: "hn",
		Provincename: "河南省",
		value: 15
	},
	{
		Provinceno: "jx",
		Provincename: "江西省",
		value: 16
	},
	{
		Provinceno: "hn",
		Provincename: "湖南省",
		value: 17
		//华中
	},
	{
		Provinceno: "sx",
		Provincename: "陕西省",
		value: 18
	},
	{
		Provinceno: "gs",
		Provincename: "甘肃省",
		value: 19
	},
	{
		Provinceno: "qh",
		Provincename: "青海省",
		value: 20
	},
	{
		Provinceno: "nx",
		Provincename: "宁夏回族自治区",
		value: 21
	},
	{
		Provinceno: "xj",
		Provincename: "新疆维吾尔自治区",
		value: 22
	},
	{
		Provinceno: "xz",
		Provincename: "西藏自治区",
		value: 23
		// 西北
	},
	{
		Provinceno: "cq",
		Provincename: "重庆市",
		value: 24
	},
	{
		Provinceno: "sc",
		Provincename: "四川省",
		value: 25
	},
	{
		Provinceno: "gd",
		Provincename: "广东省",
		value: 26
	},
	{
		Provinceno: "gx",
		Provincename: "广西壮族自治区",
		value: 27
	},
	{
		Provinceno: "yn",
		Provincename: "云南省",
		value: 28
	},
	{
		Provinceno: "gz",
		Provincename: "贵州省",
		value: 29
		//南方
	},
	{
		Provinceno: "hn",
		Provincename: "海南省",
		value: 30
	}
];


var regions = [{
		regionName: "华北区域电网",
		carbonEmissionFactor: 0.3461388
	},
	{
		regionName: "东北区域电网",
		carbonEmissionFactor: 0.3044688
	},
	{
		regionName: "华东区域电网",
		carbonEmissionFactor: 0.2577984
	},
	{
		regionName: "华中区域电网",
		carbonEmissionFactor: 0.2225178
	},
	{
		regionName: "西北区域电网",
		carbonEmissionFactor: 0.2769666
	},
	{
		regionName: "南方区域电网",
		carbonEmissionFactor: 0.1983492
	},
	{
		regionName: "海南区域电网",
		carbonEmissionFactor: 0.2547426
	}
];

var combustionParameters = [{
		NVC: 41.816,
		EF: 0.072226
	},
	{
		NVC: 41.816,
		EF: 0.075819333
	},
	{
		NVC: 43.070,
		EF: 0.067914
	},
	{
		NVC: 43.070,
		EF: 0.070429333
	},
	{
		NVC: 42.652,
		EF: 0.072585333
	},
	{
		NVC: 50.179,
		EF: 0.061805333
	} //,
	// {
	// 	NVC: 45.998,
	// 	EF: 0.065398667
	// },
	// {
	// 	NVC: 389.31,
	// 	EF: 0.055539
	// },
	// {
	// 	NVC: 173.54,
	// 	EF: 0.043923
	// },
	// {
	// 	NVC: 33.00,
	// 	EF: 0.257004
	// },
	// {
	// 	NVC: 52.27,
	// 	EF: 0.044286
	// }

];


var months = [{
		label: "1月",
		value: 1
	},
	{
		label: "2月",
		value: 2
	},
	{
		label: "3月",
		value: 3
	},
	{
		label: "4月",
		value: 4
	},
	{
		label: "5月",
		value: 5
	},
	{
		label: "6月",
		value: 6
	},
	{
		label: "7月",
		value: 7
	},
	{
		label: "8月",
		value: 8
	},
	{
		label: "9月",
		value: 9
	},
	{
		label: "10月",
		value: 10
	},
	{
		label: "11月",
		value: 11
	},
	{
		label: "12月",
		value: 12
	}
];

var years = [{
		label: "2023",
		value: 0
	},
	{
		label: "2022",
		value: 1
	},
	{
		label: "2021",
		value: 2
	},
	{
		label: "2020",
		value: 3
	},
	{
		label: "2019",
		value: 4
	},
	{
		label: "2018",
		value: 5
	},
	{
		label: "2017",
		value: 6
	},
	{
		label: "2016",
		value: 7
	}, {
		label: "2015",
		value: 8
	},

	{
		label: "更早",
		value: -1
	},
];


window.onload = function() {
	showProvince();
	showMonth();
	showYear();
	
	var RegionSelect = document.getElementById("Region");
	RegionSelect.setAttribute("placeholder", "请选择区域");
	
	OK();
}
/**
//根据provinces中信息生成省份记录
**/
function showProvince() {
	//抓到省份下拉列表
	var ProvinceSelect = document.getElementById("Province");
	//遍历provinces中的所有省份
	for (var i = 0; i < provinces.length; i++) {
		var oProvince = provinces[i];
		//根据oProvince创建Option 
		var oOption = document.createElement("option");
		oOption.text = oProvince["Provincename"];
		oOption.value = oProvince["value"];
		//将option放入select对象
		ProvinceSelect.add(oOption);
	}
}



//月份选择
function showMonth() {

	var MonthSelect = document.getElementById("Month");

	for (var i = 0; i < months.length; i++) {
		var oMonth = months[i];

		var oOption = document.createElement("option");
		oOption.text = oMonth["label"];
		oOption.value = oMonth["value"];
		//将option放入select对象
		MonthSelect.add(oOption);
	}
}

//年份选择
function showYear() {

	var YearSelect = document.getElementById("Year");

	for (var i = 0; i < years.length; i++) {
		var oYear = years[i];

		var oOption = document.createElement("option");
		oOption.text = oYear["label"];
		oOption.value = oYear["value"];
		//将option放入select对象
		YearSelect.add(oOption);
	}
}

//电网区域选择
var EF = 0;
function showRegion() {

	var RegionSelect = document.getElementById("Region");
	var province = document.getElementById("Province");
	let provinceValue = province.value;
	
	if (provinceValue >= 0 && provinceValue <= 4) {
		// console.log(regions[0].regionName);
		RegionSelect.setAttribute("placeholder", regions[0].regionName);
		EF = regions[0].carbonEmissionFactor;
	} else if (provinceValue >= 5 && provinceValue <= 8) {
		RegionSelect.setAttribute("placeholder", regions[1].regionName);
		EF = regions[1].carbonEmissionFactor;
	} else if (provinceValue >= 9 && provinceValue <= 13) {
		RegionSelect.setAttribute("placeholder", regions[2].regionName);
		EF = regions[2].carbonEmissionFactor;
	} else if (provinceValue >= 14 && provinceValue <= 17) {
		RegionSelect.setAttribute("placeholder", regions[3].regionName);
		EF = regions[3].carbonEmissionFactor;
	} else if (provinceValue >= 18 && provinceValue <= 23) {
		RegionSelect.setAttribute("placeholder", regions[4].regionName);
		EF = regions[4].carbonEmissionFactor;
	} else if (provinceValue >= 24 && provinceValue <= 29) {
		RegionSelect.setAttribute("placeholder", regions[5].regionName);
		EF = regions[5].carbonEmissionFactor;
	} else {
		RegionSelect.setAttribute("placeholder", regions[6].regionName);
		EF = regions[6].carbonEmissionFactor;
	}

}

function OK() {
	submit();
	if (user.province != '') {
		// console.log(user.region)
		let showRight = 'auto';
		$("#right").css("pointer-events", showRight);
		$("#right").css("background", "rgb(255, 255, 255)");
		$("#right").css("opacity", 1)
		let power1 = document.getElementById("power1")
		power1.setAttribute("placeholder", "请输入电力消耗");
	}

}

function submit() {
	user.companyName = document.getElementsByName("companyName")[0].value;
	user.year = document.getElementById("Year")[0].value;
	user.month = document.getElementsByName("month")[0].value;
	user.province = document.getElementsByName("province")[0].value;
	user.tel = document.getElementsByName("tel")[0].value;
	user.email = document.getElementsByName("email")[0].value;
	user.region = document.getElementById("Region").attributes[1].nodeValue;
	console.log(this.user);
}

function showE(i) {
	var inputLabel = "FC" + i;
	var outputLabel = "E" + i;
	console.log(inputLabel)
	var input = document.getElementById(inputLabel);
	var output = document.getElementById(outputLabel);
	console.log(input.value)
	var re;
	re = input.value * combustionParameters[i - 1].NVC * combustionParameters[i - 1].EF;
	re = Number(re);
	re = re.toFixed(4);
	output.innerText = re;


	//求和
	// var totalConsumption;
	// var totalInput = 0;
	// totalInput = totalInput + input.value;
	// totalConsumption = document.getElementById("totalConsumption");
	// totalConsumption.innerText = Number(totalConsumption.innerText) + input.value
}



//预生产阶段
//纸张
function showPaperCO2(i){
	let paperCO2 = document.getElementById("paperCO2");
	let number = Number(i) * 0.0005 + Number(i) * 0.00002;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	paperCO2.innerText = number;
}

//电力
function showPowerCO2(value, i){
	let temp = 'power' + i + "CO2";
	let powerCO2 = document.getElementById(temp);
	let number = EF * Number(value) * 3.6;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	powerCO2.innerText = number;
}
//汽油
function showgasolineCO2(value, i){
	let temp = 'gasoline' + i + "CO2";
	let gasoline = document.getElementById(temp);
	let number = Number(value) * combustionParameters[2].EF * combustionParameters[2].NVC;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	gasoline.innerText = number;
}
//柴油
function showdieselOilCO2(value, i){
	let temp = 'dieselOil' + i + "CO2";
	let dieselOil = document.getElementById(temp);
	let number = Number(value) * combustionParameters[3].EF * combustionParameters[3].NVC;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	dieselOil.innerText = number;
}
//钢铁
function showsteelCO2(value){
	let steel = document.getElementById("steelCO2");
	let number = Number(value) * 1.9;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	steel.innerText = number;
}
//塑料
function showplasticsCO2(value){
	let temp = document.getElementById("plasticsCO2");
	let number = Number(value) * 4.5;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	temp.innerText = number;
}
//木材
function showwoodCO2(value){
	let temp = document.getElementById("woodCO2");
	let number = Number(value) * 0.45;
	number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4);
	temp.innerText = number;
}
//求和部分
var numCO2 = 0;
var sum = 0;
function sum(i){
	
	if (numCO2 != i){
		sum -= numCO2;
		numCO2 = i;
		sum += numCO2;
	}
	console.log(sum);
}


//拍摄阶段

function showRes() {
	var total = 0;
		
	var info = [];
	info[0] = document.getElementById("paperCO2").textContent;
	for(let i = 1; i < 4; i++){
		let temp = "power" + i + "CO2";
		info[i] = document.getElementById(temp).textContent
	}
	for(let i = 1; i < 4; i++){
		let temp = "gasoline" + i + "CO2";
		info[i + 3] = document.getElementById(temp).textContent
	}
	for(let i = 1; i < 4; i++){
		let temp = "dieselOil" + i + "CO2";
		info[i + 6] = document.getElementById(temp).textContent
	}
	info[10] = document.getElementById("steelCO2").textContent;
	info[11] = document.getElementById("plasticsCO2").textContent;
	info[12] = document.getElementById("woodCO2").textContent;
	
	console.log(info)
	for(let i = 0; i < 13; i++){
		total += Number(info[i]);
	}
	
	// for (var i = 1; i < combustionParameters.length + 1; i++) {
	// 	var ELabel = "E" + i;
	// 	var E = document.getElementById(ELabel);
	// 	sum1 += Number(E.innerHTML) * Number(combustionParameters[i - 1].EF);
	// 	console.log(sum1)
	// }
	// let region = document.getElementById("Region");
	// let regionEF = region.options[region.selectedIndex].value;
	// // console.log(regionContent);
	// // console.log(document.getElementById("usedPower").value)
	// sum2 = regionEF * document.getElementById("usedPower").value;
	// res = sum1 + sum2;
	alert(total);
}
