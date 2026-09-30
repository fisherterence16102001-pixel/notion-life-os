import { DatabaseConfig } from '../types';

export const databases: DatabaseConfig[] = [
  {
    name: '今日生活指数',
    description: '记录当天生活指数、Top 3、Boss Fight 与 AI 总结',
    fields: [
      { name: '日期', type: 'date' },
      { name: '生活指数', type: 'number' },
      { name: 'Top 3', type: 'rich_text' },
      { name: 'Boss Fight', type: 'rich_text' },
      { name: 'AI总结', type: 'rich_text' },
      { name: '明日建议', type: 'rich_text' },
      { name: '状态', type: 'status', options: { options: ['待处理', '已完成', '已归档'] } }
    ]
  },
  {
    name: '日程统筹',
    description: '日程任务和重要待办',
    fields: [
      { name: '日期', type: 'date' },
      { name: '时间', type: 'rich_text' },
      { name: '事项', type: 'title' },
      { name: '标签', type: 'multi_select', options: { options: ['工作', '学习', '健康', '财务', '生活', '关系'] } },
      { name: '优先级', type: 'select', options: { options: ['P1', 'P2', 'P3'] } },
      { name: '备注', type: 'rich_text' },
      { name: '完成状态', type: 'checkbox' }
    ]
  },
  {
    name: '每日复盘',
    description: '每天通过复盘改善生活',
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
    description: '习惯完成状态',
    fields: [
      { name: '日期', type: 'date' },
      { name: '习惯名称', type: 'rich_text' },
      { name: '目标值', type: 'number' },
      { name: '实际值', type: 'number' },
      { name: '完成率', type: 'number' },
      { name: '连续天数', type: 'number' }
    ]
  },
  {
    name: '睡眠记录',
    description: '睡眠质量和时长',
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
    description: '阅读统计与笔记',
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
    description: '时间分配与审计',
    fields: [
      { name: '日期', type: 'date' },
      { name: '类别', type: 'select', options: { options: ['工作', '学习', '娱乐', '休息', '社交'] } },
      { name: '分钟', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: '备忘录',
    description: '临时提醒和待办',
    fields: [
      { name: '日期', type: 'date' },
      { name: '标题', type: 'title' },
      { name: '内容', type: 'rich_text' },
      { name: '优先级', type: 'select', options: { options: ['高', '中', '低'] } }
    ]
  },
  {
    name: '收支记录',
    description: '收入与支出记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '分类', type: 'select', options: { options: ['收入', '支出', '投资', '借贷'] } },
      { name: '金额', type: 'number' },
      { name: '说明', type: 'rich_text' }
    ]
  },
  {
    name: '预算',
    description: '预算计划与执行',
    fields: [
      { name: '月份', type: 'date' },
      { name: '类别', type: 'rich_text' },
      { name: '预算金额', type: 'number' },
      { name: '实际金额', type: 'number' },
      { name: '状态', type: 'status', options: { options: ['正常', '超支', '警告'] } }
    ]
  },
  {
    name: '电商商品库',
    description: '电商商品与利润核心库',
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
      { name: '净利', type: 'number' },
      { name: 'ROI', type: 'number' }
    ]
  },
  {
    name: '电商订单',
    description: '订单与销售状态',
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
    name: '体重记录',
    description: '体重和体脂趋势',
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
    description: '训练与热量记录',
    fields: [
      { name: '日期', type: 'date' },
      { name: '训练类型', type: 'rich_text' },
      { name: '分钟', type: 'number' },
      { name: '热量消耗', type: 'number' },
      { name: '备注', type: 'rich_text' }
    ]
  },
  {
    name: 'AI学习记录',
    description: 'AI 学习轨迹与思考',
    fields: [
      { name: '日期', type: 'date' },
      { name: '工具', type: 'select', options: { options: ['ChatGPT', 'Gemini', 'GitHub Copilot', 'Claude', 'Notion AI', '其他'] } },
      { name: '主题', type: 'rich_text' },
      { name: '时长', type: 'number' },
      { name: '总结', type: 'rich_text' }
    ]
  },
  {
    name: '人生目标',
    description: '人生目标分层结构',
    fields: [
      { name: '名称', type: 'title' },
      { name: '类型', type: 'select', options: { options: ['人生目标', '年度目标', '季度目标', '月目标', '项目', '任务'] } },
      { name: '截止时间', type: 'date' },
      { name: '当前进度', type: 'number' },
      { name: '状态', type: 'select', options: { options: ['未开始', '进行中', '已完成', '暂停'] } },
      { name: '重要程度', type: 'select', options: { options: ['高', '中', '低'] } }
    ]
  }
];
