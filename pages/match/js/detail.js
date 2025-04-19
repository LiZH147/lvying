// 模拟问卷详情数据
const mockQuestionnaireData = {
    id: 1,
    submission_time: '2024-03-20 10:30:00',
    processing_status: 1,
    contact_information: 'test@example.com',
    answer: [
        {
            id: 1,
            question: "您的拍摄团队人数规模是？",
            content: "10-30人",
            value: 2
        },
        {
            id: 2,
            question: "您期望的拍摄场景类型是？",
            content: "自然风光",
            value: 2
        },
        {
            id: 4,
            question: "您的目标受众年龄段是？",
            content: "青年(19-35岁)",
            value: 2
        },
        {
            id: 5,
            question: "您的预算范围是？",
            content: "5-20万",
            value: 2
        },
        {
            id: 6,
            question: "您期望的拍摄地理位置是？",
            content: "城市郊区",
            value: 2
        }
    ]
};

// 模拟推荐数据
const mockRecommendations = [
    {
        id: 1,
        name: "阳光影视基地",
        description: "位于城市郊区的综合性影视基地，适合各类现代题材拍摄",
        location: "城市郊区",
        price: "15000元/天",
        rating: 4.5,
        image: "static/assets/images/base1.jpg"
    },
    {
        id: 2,
        name: "山水影视城",
        description: "自然风光与现代设施完美结合，适合偶像剧、网剧拍摄",
        location: "城市郊区",
        price: "12000元/天",
        rating: 4.8,
        image: "static/assets/images/base2.jpg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数中的问卷ID
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // 在实际应用中，这里应该根据ID从服务器获取数据
    // 这里使用模拟数据
    loadQuestionnaireInfo(mockQuestionnaireData);
    loadRecommendations(mockRecommendations);
});

function loadQuestionnaireInfo(data) {
    const container = document.getElementById('questionnaireInfo');
    
    const infoHtml = `
        <div class="row mb-4">
            <div class="col-md-6">
                <p><strong>提交时间：</strong>${data.submission_time}</p>
                <p><strong>处理状态：</strong>${data.processing_status === 0 ? '未处理' : '已处理'}</p>
                <p><strong>联系方式：</strong>${data.contact_information}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h4>问卷答案</h4>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>问题</th>
                                <th>答案</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.answer.map(item => `
                                <tr>
                                    <td>${item.question}</td>
                                    <td>${item.content}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = infoHtml;
}

function loadRecommendations(recommendations) {
    const container = document.getElementById('recommendations');
    
    const recommendationsHtml = recommendations.map(item => `
        <div class="col-lg-6 mb-4">
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><strong>位置：</strong>${item.location}</p>
                            <p class="mb-0"><strong>价格：</strong>${item.price}</p>
                        </div>
                        <div>
                            <span class="badge badge-primary">评分：${item.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = recommendationsHtml;
} 