// 模拟数据
const mockResults = [
    {
        id: 1,
        submission_time: '2024-03-20 10:30:00',
        processing_status: 0,
        contact_information: 'test@example.com'
    },
    {
        id: 2,
        submission_time: '2024-03-21 14:20:00',
        processing_status: 1,
        contact_information: 'test@example.com'
    }
];

function handleQuery(event) {
    event.preventDefault();
    
    const contactInfo = document.getElementById('contact_info').value;
    
    // 在实际应用中，这里应该发送API请求获取数据
    // 这里使用模拟数据演示
    const results = mockResults.filter(item => 
        item.contact_information === contactInfo
    );
    
    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('queryResults');
    const resultsBody = document.getElementById('resultsBody');
    
    // 清空现有结果
    resultsBody.innerHTML = '';
    
    if (results.length === 0) {
        resultsDiv.style.display = 'block';
        resultsBody.innerHTML = '<tr><td colspan="4" class="text-center">未找到相关记录</td></tr>';
        return;
    }
    
    results.forEach(result => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${result.submission_time}</td>
            <td>${result.processing_status === 0 ? '未处理' : '已处理'}</td>
            <td>${result.contact_information}</td>
            <td>
                <a href="detail.html?id=${result.id}" class="btn btn-primary btn-sm">查看详情</a>
            </td>
        `;
        
        resultsBody.appendChild(row);
    });
    
    resultsDiv.style.display = 'block';
} 