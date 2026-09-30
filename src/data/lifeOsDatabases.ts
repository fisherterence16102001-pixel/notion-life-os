import { DatabaseConfig } from '../types';

export const lifeOsDatabases: DatabaseConfig[] = [
  {
    name: '今日生活指数',
    description: '生活指数、Top 3、Boss Fight、AI 今日总结',
    fields: [
      { name: '日期', type: 'date' },
      { name: '生活指数', type: 'number' },
      { name: 'Top 3', type: 'rich_text' },
      { name: 'Boss Fight', type: 'rich_text' },
      { name: 'AI总结', type: 'rich_text' },
      { name: '明日建议', type: 'rich_text' },
      { name: '状态', type: 'status', options: { options: ['待处理', '完成', '已归档'] } }
    ]
  },
  {
    name: '日程统筹',
    description: '任务安排与优先级管理',
    fields: [
      { name: '日期', type: 'date' },
      { name: '时间', type: 'rich_text' },
      { name: '事项', type: 'title' },
      { name: '标签', type: 'multi_select', options: { options: ['工作', '学习', '生活', '健康', '财务', '关系'] } },
      { name: '优先级', type: 'select', options: { options: ['P1', 'P2', 'P3'] } },
      { name: '备注', type: 'rich_text' },
      { name: '完成状态', type: 'checkbox' }
    ]
  },
  {
    name: '每日复盘',
    fields: [
      { name: '日期', type: 'date' },
      { name: '感受', type: 'rich_text' },
      { name: '亮点', type: 'rich_text' },
      { name: '问题', type: 'rich_text' },
      { name: '改进', type: 'rich_text' }
    ]
  },
  {
    name: '习惯打卡',
    fields: [
      { name: '日期', type: 'date' },
      { name: '习惯', type: 'rich_text' },
      { name: '目标值', type: 'number' },
      { name: '实际值', type: 'number' },
      { name: '完成率', type: 'number' },
      { name: '连续天数', type: 'number' }
    ]
  },
  {
    name: '睡眠记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '入睡时间', type: 'rich_text' },
      { name: '起床时间', type: 'rich_text' },
      { name: '睡眠时长', type: 'number' },
      { name: '目标时长', type: 'number' },
      { name: '睡眠质量', type: 'number' },
      { name: '连续达标', type: 'number' },
      { name: '7日平均', type: 'number' },
      { name: '30日平均', type: 'number' }
    ]
  },
  {
    name: '阅读记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '书籍', type: 'rich_text' },
      { name: '今日分钟', type: 'number' },
      { name: '目标分钟', type: 'number' },
      { name: '连续天数', type: 'number' },
      { name: '30日累计分钟', type: 'number' },
      { name: '完成率', type: 'number' },
      { name: '阅读笔记', type: 'rich_text' }
    ]
  },
  {
    name: '时间审计',
    fields: [
      { name: '日期', type: 'date' },
      { name: '类别', type: 'select', options: { options: ['工作', '学习', '娱乐', '休息', '社交'] } },
      { name: '分钟', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '备忘录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '标题', type: 'title' },
      { name: '内容', type: 'rich_text' },
      { name: '优先级', type: 'select', options: { options: ['高', '中', '低'] } }
    ]
  },
  {
    name: '收支记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '分类', type: 'select', options: { options: ['收入', '支出', '投资', '借贷'] } },
      { name: '金额', type: 'number' },
      { name: '说明', type: 'rich_text' }
    ]
  },
  {
    name: '预算',
    fields: [
      { name: '月份', type: 'date' },
      { name: '类别', type: 'rich_text' },
      { name: '预算金额', type: 'number' },
      { name: '实际金额', type: 'number' },
      { name: '状态', type: 'status', options: { options: ['正常', '超支', '警告'] } }
    ]
  },
  {
    name: '消费分类',
    fields: [
      { name: '名称', type: 'title' },
      { name: '类别', type: 'select', options: { options: ['餐饮', '购物', '学习', '交通', '娱乐', '医疗'] } },
      { name: '金额', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '现金储备',
    fields: [
      { name: '日期', type: 'date' },
      { name: '金额', type: 'number' },
      { name: '月平均必要支出', type: 'number' },
      { name: '可支撑月数', type: 'number' }
    ]
  },
  {
    name: '投资',
    fields: [
      { name: '日期', type: 'date' },
      { name: '名称', type: 'rich_text' },
      { name: '金额', type: 'number' },
      { name: '收益', type: 'number' },
      { name: '风险等级', type: 'select', options: { options: ['低', '中', '高'] } }
    ]
  },
  {
    name: '保险',
    fields: [
      { name: '名称', type: 'title' },
      { name: '类型', type: 'select', options: { options: ['医疗', '车险', '人生', '财产'] } },
      { name: '保费', type: 'number' },
      { name: '到期日', type: 'date' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '体重记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '体重', type: 'number' },
      { name: '体脂', type: 'number' },
      { name: 'BMI', type: 'number' },
      { name: '目标进度', type: 'number' }
    ]
  },
  {
    name: '训练记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '训练类型', type: 'rich_text' },
      { name: '分钟', type: 'number' },
      { name: '热量消耗', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '热量记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '食物', type: 'rich_text' },
      { name: '热量', type: 'number' },
      { name: '蛋白质', type: 'number' },
      { name: '碳水', type: 'number' },
      { name: '脂肪', type: 'number' }
    ]
  },
  {
    name: '减脂计划',
    fields: [
      { name: '开始日期', type: 'date' },
      { name: '目标体重', type: 'number' },
      { name: '当前体重', type: 'number' },
      { name: '目标热量缺口', type: 'number' },
      { name: '状态', type: 'status', options: { options: ['进行中', '已完成', '暂停'] } }
    ]
  },
  {
    name: '电商商品库',
    fields: [
      { name: '商品', type: 'title' },
      { name: '平台', type: 'select', options: { options: ['抖音', '闲鱼', '拼多多', '小红书'] } },
      { name: '商品链接', type: 'url' },
      { name: '1688货源', type: 'url' },
      { name: '采购价', type: 'number' },
      { name: '售价', type: 'number' },
      { name: '物流成本', type: 'number' },
      { name: '售后率', type: 'number' },
      { name: '售后成本', type: 'number' },
      { name: '推广费用', type: 'number' },
      { name: '销售额', type: 'number' },
      { name: '毛利', type: 'number' },
      { name: '净利润', type: 'number' },
      { name: 'ROI', type: 'number' }
    ]
  },
  {
    name: '电商订单',
    fields: [
      { name: '订单号', type: 'title' },
      { name: '平台', type: 'select', options: { options: ['抖音', '闲鱼', '拼多多', '小红书'] } },
      { name: '商品', type: 'rich_text' },
      { name: '销售额', type: 'number' },
      { name: '净利润', type: 'number' },
      { name: '状态', type: 'status', options: { options: ['待发货', '已发货', '待退款', '已退款'] } }
    ]
  },
  {
    name: '选品库',
    fields: [
      { name: '名称', type: 'title' },
      { name: '平台', type: 'select', options: { options: ['抖音', '闲鱼', '拼多多', '小红书'] } },
      { name: '潜力分', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '供应商',
    fields: [
      { name: '名称', type: 'title' },
      { name: '联系人', type: 'rich_text' },
      { name: '电话', type: 'phone_number' },
      { name: '价格', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '库存',
    fields: [
      { name: '商品', type: 'rich_text' },
      { name: '数量', type: 'number' },
      { name: '预警数量', type: 'number' },
      { name: '状态', type: 'status', options: { options: ['正常', '缺货', '预警'] } }
    ]
  },
  {
    name: 'AI学习记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '工具', type: 'select', options: { options: ['ChatGPT', 'Gemini', 'GitHub Copilot', 'Claude', 'Notion AI', '其他'] } },
      { name: '主题', type: 'rich_text' },
      { name: '时长', type: 'number' },
      { name: '总结', type: 'rich_text' }
    ]
  },
  {
    name: 'AI工具库',
    fields: [
      { name: '名称', type: 'title' },
      { name: '用途', type: 'rich_text' },
      { name: '价格', type: 'number' },
      { name: '版本', type: 'rich_text' },
      { name: '评价', type: 'number' }
    ]
  },
  {
    name: '人生目标',
    fields: [
      { name: '名称', type: 'title' },
      { name: '类型', type: 'select', options: { options: ['人生目标', '年度目标', '季度目标', '月目标', '项目', '任务'] } },
      { name: '截止时间', type: 'date' },
      { name: '当前进度', type: 'number' },
      { name: '状态', type: 'select', options: { options: ['未开始', '进行中', '已完成', '暂停'] } },
      { name: '重要程度', type: 'select', options: { options: ['高', '中', '低'] } }
    ]
  },
  {
    name: '旅行计划',
    fields: [
      { name: '目的地', type: 'rich_text' },
      { name: '出发日期', type: 'date' },
      { name: '预算', type: 'number' },
      { name: '状态', type: 'status', options: { options: ['计划中', '已出发', '已完成'] } }
    ]
  },
  {
    name: '我的衣柜',
    fields: [
      { name: '名称', type: 'title' },
      { name: '分类', type: 'select', options: { options: ['上衣', '裤子', '鞋子', '外套', '配饰'] } },
      { name: '颜色', type: 'rich_text' },
      { name: '穿搭说明', type: 'rich_text' }
    ]
  },
  {
    name: '护肤产品',
    fields: [
      { name: '名称', type: 'title' },
      { name: '品牌', type: 'rich_text' },
      { name: '类型', type: 'select', options: { options: ['洁面', '精华', '面霜', '防晒', '修复'] } },
      { name: '使用感受', type: 'rich_text' }
    ]
  }
];
