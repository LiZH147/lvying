document.addEventListener('DOMContentLoaded', function () {
    loadQuestions();
});

function loadQuestions() {
    const container = document.getElementById('questionsContainer');

    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'row mb-4';

        // 创建问题标签
        const label = document.createElement('label');
        label.htmlFor = question.id;
        label.textContent = question.question_content;
        questionDiv.appendChild(label);

        if (question.type === 1) { // 下拉选择
            const select = document.createElement('select');
            select.className = 'form-control';
            select.id = question.id;
            select.name = question.id;

            question.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.content;
                select.appendChild(optionElement);
            });

            questionDiv.appendChild(select);
        } else if (question.type === 3) { // 文本输入
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'form-control';
            input.id = question.id;
            input.name = question.id;
            input.required = true;
            input.style.backgroundColor = '#f8f9fa'; // 设置背景色为浅灰色
            input.style.width = '30%'; // 设置宽度为100%

            questionDiv.appendChild(input);
        }

        container.appendChild(questionDiv);
    });
}

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // 在实际应用中，这里可以添加数据验证逻辑

    // 模拟提交成功
    alert('问卷提交成功！');

    // 清空表单
    event.target.reset();
} 