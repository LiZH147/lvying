var tableBody = document.querySelector('#my-table tbody');
var scoreImgOn = '';
for (let i = 1; i < 6; i++) {
	scoreImgOn += '<a onclick="selectScore(' + i + ')"><img id="selectScore" src="../img/ESG/scoreold/score (' + i +
		').png" alt="" style="width: 41px; height: 41px;"class="table-img"></a>'
}
var imgData = [];
for (let i = 1; i < 23; i++) {
	imgData[i] = '<img src="../img/ESG/' + i + '.png" alt="" style="width: 210px; height: 150px;">'
}

var data = [{
		titleImg: "0",
		score: 0,
		title: '1.碳及温室气体排放'
	},
	{
		titleImg: "1",
		score: 0,
		title: '2.环境政策'
	}, {
		titleImg: '2',
		score: 0,
		title: '3.废物污染及管理政策'
	}, {
		titleImg: '3',
		score: 0,
		title: '4.能源使用'
	}, {
		titleImg: '4',
		score: 0,
		title: '5.自然资源使用和管理政策'
	}, {
		titleImg: '5',
		score: 0,
		title: '6.员工环境意识'
	}, {
		titleImg: '6',
		score: 0,
		title: '7.绿色技术'
	}, {
		titleImg: '7',
		score: 0,
		title: '8.精准扶贫与乡村振兴'
	}, {
		titleImg: '8',
		score: 0,
		title: '9.人权政策及违反情况'
	}, {
		titleImg: '9',
		score: 0,
		title: '10.公益慈善及其他'
	}, {
		titleImg: '10',
		score: 0,
		title: '11.社会效益与经济效益统一性'
	}, {
		titleImg: '11',
		score: 0,
		title: '12.公司治理'
	}, {
		titleImg: '12',
		score: 0,
		title: '13.贪污受贿政策'
	}, {
		titleImg: '13',
		score: 0,
		title: '14.反不公平竞争'
	}, {
		titleImg: '14',
		score: 0,
		title: '15.风险管理'
	}, {
		titleImg: '15',
		score: 0,
		title: '16.税收透明'
	}, {
		titleImg: '16',
		score: 0,
		title: '17.道德行为准则'
	}, {
		titleImg: '17',
		score: 0,
		title: '18.合规性'
	}, {
		titleImg: '18',
		score: 0,
		title: '19.董事会独立性及多样性'
	}, {
		titleImg: '19',
		score: 0,
		title: '20.组织结构'
	}, {
		titleImg: '20',
		score: 0,
		title: '21.投资者关系'
	}, {
		titleImg: '21',
		score: 0,
		title: '22.成本考量'
	}
];

// console.log(scoreImgOn);
//添加表格主体内容，22个题
data.forEach(function(item) {
	var row1 = document.createElement('tr'); // 创建<tr>标签
	var imgColumn = document.createElement('td'); // 创建<td>标签
	var scoreColumn = document.createElement('td');
	var row2 = document.createElement('tr'); // 创建<tr>标签
	var titleColmu = document.createElement('td');
	var row3 = document.createElement('tr'); // 创建<tr>标签、空行
	var spanColmu = document.createElement('td');

	item.titleImg = Number(item.titleImg) + 1;
	imgUrl = '<img src="../img/ESG/' + item.titleImg + '.png" alt="" style="width: 41px; height: 41px;">'

	imgColumn.innerHTML = imgUrl;
	scoreColumn.innerHTML = scoreImgOn;
	imgColumn.setAttribute('style', 'text-align: left;');
	scoreColumn.setAttribute('style', 'width:70%;text-align: left;');
	row1.appendChild(imgColumn);
	row1.appendChild(scoreColumn);

	titleColmu.innerHTML = '<a style="font-size: 20px;">' + item.title + '</a>';
	titleColmu.setAttribute('colspan', '2');
	titleColmu.setAttribute('style', 'text-align:left');
	titleColmu.setAttribute('class', 'testTitle')
	row2.appendChild(titleColmu);
	// row2.setAttribute('colspan', '2');

	spanColmu.innerHTML = '<span></span>';
	spanColmu.setAttribute('colspan', '2');
	spanColmu.setAttribute('style', 'height:20px');
	row3.appendChild(spanColmu)

	tableBody.appendChild(row2);
	tableBody.appendChild(row1);
	tableBody.appendChild(row3);

});

var score = 0;

function selectScore(value) {
	// console.log(value)
	score = value;
	console.log(score)
	// var selectScore = document.getElementById("selectScore");
	// console.log(selectScore.attribute)

}


var table = document.getElementById('my-table');
var cells = table.getElementsByTagName('td');

for (var i = 1; i < cells.length; i++) {
	cells[i].addEventListener('click', function() {
		var row = (this.parentNode.rowIndex + 1) / 3;
		var col = this.cellIndex + 1;
		console.log('这个单元格位于第' + row + '行，第' + col + '列。');
		data[row - 1].score = score;
		console.log(data)

	});
};


//鼠标悬停、移走、点击效果
let clicked = [];
var images = table.getElementsByTagName('img');
// console.log(images);
var cnt = 0;
let check = 0;
for (var i = 0; i < images.length; i++) {
	let temp = Math.abs((cnt * 6 - i) - 6);
	// console.log(temp)
	let mouseOutImgUrl = "../img/ESG/scoreold/score (" + temp + ").png";
	let mouseOverImgUrl = "../img/ESG/score" + temp + ".gif";
	let clickImgUrl = "../img/ESG/score" + temp + ".gif";

	let idxTemp = ~~(i/6);
	images[i].addEventListener('mouseout', function() {
		// console.log(clicked)
		if(!clicked[idxTemp]){
			this.setAttribute('src', mouseOutImgUrl);
		}
	});
	images[i].addEventListener('mouseover', function() {
		if(!clicked[idxTemp]){
			this.setAttribute('src', mouseOverImgUrl);
		}
		
	});
	images[i].addEventListener('click', function() {
		clicked[idxTemp] = true;
		this.setAttribute('src', clickImgUrl);
	});
	if (i % 6 == 0) {
		cnt = cnt + 1;
	}
}