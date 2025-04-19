// 问卷问题数据
const questions = [
    {
        id: 1,
        question_content: "您的拍摄团队人数规模是？",
        type: 1,
        options: [
            { value: 1, content: "10人以下" },
            { value: 2, content: "10-30人" },
            { value: 3, content: "30-50人" },
            { value: 4, content: "50人以上" }
        ]
    },
    {
        id: 2,
        question_content: "您期望的拍摄场景类型是？",
        type: 1,
        options: [
            { value: 1, content: "现代都市" },
            { value: 2, content: "自然风光" },
            { value: 3, content: "历史古迹" },
            { value: 4, content: "工业园区" }
        ]
    },
    {
        id: 4,
        question_content: "您的目标受众年龄段是？",
        type: 1,
        options: [
            { value: 1, content: "青少年(13-18岁)" },
            { value: 2, content: "青年(19-35岁)" },
            { value: 3, content: "中年(36-55岁)" },
            { value: 4, content: "老年(56岁以上)" }
        ]
    },
    {
        id: 5,
        question_content: "您的预算范围是？",
        type: 1,
        options: [
            { value: 1, content: "5万以下" },
            { value: 2, content: "5-20万" },
            { value: 3, content: "20-50万" },
            { value: 4, content: "50万以上" }
        ]
    },
    {
        id: 6,
        question_content: "您期望的拍摄地理位置是？",
        type: 1,
        options: [
            { value: 1, content: "城市中心" },
            { value: 2, content: "城市郊区" },
            { value: 3, content: "乡村地区" },
            { value: 4, content: "山区" }
        ]
    },
    {
        id: 13,
        question_content: "请留下您的联系方式",
        type: 3
    }
]; 