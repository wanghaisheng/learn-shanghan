# 产品需求文档 (PRD)

## 1. 产品概述

### 1.1 产品名称
伤寒论学习 - 中医经典学习平台

### 1.2 产品愿景
打造一款融合游戏化元素的中医经典学习应用，通过听说读写四种模式的挑战，帮助用户轻松学习并记忆中医经典著作内容。

### 1.3 目标用户
- 中医学院学生
- 中医爱好者
- 中医从业人员
- 对中医经典感兴趣的普通用户

### 1.4 核心价值
- 将枯燥的中医经典学习转化为有趣的游戏化体验
- 通过多种学习模式强化记忆
- 社交竞争元素增强学习动力
- 系统化的进度追踪提高学习效率

## 2. 功能规格

### 2.1 核心功能

#### 2.1.1 四种学习模式
1. **听力挑战**
   - 用户聆听系统朗读的中医经典内容，测试听力理解能力
   - 配有拼音辅助，帮助用户识别生僻字音
   - 提供减速、重复功能
   - 每日可领取奖励次数为3次，界面显示"今日奖励: X/3"

2. **口语挑战**
   - 用户朗读指定文本，系统识别发音准确度
   - 提供发音比对和评分
   - 支持录音回放
   - 每日可领取奖励次数为3次，界面显示"今日奖励: X/3"

3. **阅读挑战**
   - 以"刮刮乐"形式揭示文本内容，增强阅读趣味性
   - 逐字显示，帮助用户专注于每个字
   - 提供全部显示和重新隐藏选项
   - 每日可领取奖励次数为3次，界面显示"今日奖励: X/3"

4. **写作挑战**
   - 系统展示文本缺失部分，用户需填写正确内容
   - 使用虚拟键盘输入
   - 即时反馈，正确显示绿色，错误显示红色
   - 每日可领取奖励次数为3次，界面显示"今日奖励: X/3"

#### 2.1.2 游戏化学习系统
1. **关卡系统**
   - 经典著作分为多个章节，每个章节划分为若干关卡
   - 关卡解锁机制：完成前一关卡才能解锁下一关卡
   - 每关包含听说读写四种挑战模式
   - 关卡数量会根据用户设置的学习计划天数自动调整

2. **奖励系统**
   - 虚拟货币：完成挑战获得宝石
   - 每日签到奖励：连续登录获得额外奖励
   - 成就系统：完成特定目标解锁成就
   - 奖励兑换：使用虚拟货币兑换额外学习资源或特权

3. **社交排行榜**
   - 周榜/月榜/总榜多维度排名
   - 基于学习时长、挑战完成度等指标评分
   - 排名奖励：每日前100名完成挑战的用户可获得额外奖励，其余用户获得默认奖励加成
   - 用户互动：点击榜单中的用户可获得奖励币，用于兑换副本或VIP体验券

#### 2.1.3 学习计划与统计
1. **学习计划**
   - 自定义学习计划，设置学习周期（30天、90天、180天、365天或自定义天数）
   - 系统根据计划自动分配每日学习内容
   - 付费会员可修改每本书的学习时长，设置后关卡数量自动更新
   - 系统后台根据设定天数自动拆分每日学习文本量

2. **学习统计**
   - 总学习时间、已学习天数、挑战完成次数等数据统计
   - 每日学习时间图表展示
   - 学习日历以日历图形式记录每日学习情况和强度
   - 学习进度跟踪，显示各经典著作的完成百分比

### 2.2 用户界面

#### 2.2.1 主要页面
1. **首页**
   - 用户信息展示
   - 每日任务
   - 学习进度概览
   - 快速进入最近学习的副本

2. **训练选择页**
   - 展示所有可学习的经典著作
   - 显示学习进度
   - 提供导入新书籍功能
   - 付费会员可修改每本书的学习计划天数
   - 修改天数后系统自动重新计算每日学习量

3. **关卡选择页**
   - 分章节展示关卡
   - 已完成/当前/未解锁关卡状态显示
   - 关卡信息与学习计划展示
   - 关卡数量根据学习计划天数自动调整

4. **挑战模式选择页**
   - 听力/口语/阅读/写作四种模式选择
   - 当前关卡内容预览
   - 每种模式显示当日可领取奖励总次数和已领取次数(X/3)
   - 全部模式挑战选项，可一次性完成所有四种挑战

5. **挑战详情页**
   - 根据不同挑战模式展示相应内容
   - 操作指引和工具栏
   - 进度指示器与完成按钮
   - 显示当前奖励获取状态

6. **统计页面**
   - 学习概况数据
   - 每日学习时间图表
   - 学习日历以日历图形式展示，不同颜色代表不同学习强度
   - 学习进度追踪
   - 学习建议

7. **排行榜页面**
   - 周榜/月榜/总榜切换
   - 排名展示
   - 奖励规则说明：每日前100名完成挑战可获得额外奖励，其余用户享受默认奖励加成
   - 用户当前排名
   - 点击其他用户可获得奖励币
   - 奖励币兑换选项：可兑换副本或VIP体验券

8. **成就页面**
   - 每日奖励领取
   - 已解锁成就展示
   - 可兑换奖励列表
   - 奖励币余额显示

9. **设置页面**
   - 账户信息管理
   - 学习设置
   - 应用设置
   - 支持选项

#### 2.2.2 UI风格
- 深色背景主题
- 游戏化UI元素：粒子特效、动画效果、交互反馈
- 现代简约风格与传统中医元素结合
- 响应式设计，适配不同设备

### 2.3 技术规格

#### 2.3.1 前端技术
- HTML5 + CSS3 + JavaScript
- 前端框架：TailwindCSS用于样式
- 响应式设计，支持移动设备
- 动画效果：CSS动画和JavaScript实现

#### 2.3.2 后端技术
- 用户数据持久化存储
- 学习进度同步
- 排行榜数据处理
- 自动学习计划生成算法

#### 2.3.3 音频处理
- 语音识别技术用于口语挑战
- 文本转语音技术用于听力挑战

## 3. 用户流程

### 3.1 首次使用流程
1. 下载应用 → 注册/登录 → 首页展示
2. 选择感兴趣的经典著作 → 设置学习计划
3. 进入第一关 → 体验四种挑战模式
4. 获得初始奖励 → 解锁第二关

### 3.2 日常使用流程
1. 登录应用 → 查看每日任务
2. 继续当前学习进度 → 完成挑战
3. 领取每日奖励 → 查看学习统计
4. 查看排行榜 → 调整学习计划

### 3.3 社交互动流程
1. 查看排行榜 → 点击其他用户
2. 获得互动奖励币 → 兑换副本或VIP体验券
3. 查看自己排名 → 制定提升策略

### 3.4 会员功能使用流程
1. 成为付费会员 → 访问训练选择页
2. 选择需修改的副本 → 调整学习时长
3. 系统自动重新计算每日学习量
4. 进入关卡页面查看更新后的关卡数量和内容

## 4. 商业模式

### 4.1 付费会员
- 修改学习计划天数，调整每日学习量
- 解锁所有学习副本
- 学习数据详细分析
- 无广告体验

### 4.2 虚拟货币充值
- 购买宝石用于兑换奖励
- 不同档位的充值套餐

### 4.3 学习资源购买
- 使用宝石购买额外的经典著作
- 特殊学习工具解锁
- 使用排行榜获得的奖励币兑换副本或VIP体验券

## 5. 发展路线图

### 5.1 第一阶段 (MVP)
- 实现核心四种挑战模式
- 完成伤寒论教材内容
- 基础游戏化元素实现
- 学习统计基本功能

### 5.2 第二阶段
- 增加更多中医经典著作
- 完善社交排行系统
- 增强游戏化元素
- 实现付费会员系统

### 5.3 第三阶段
- AI辅助学习功能
- 用户自定义学习内容
- 社区功能：学习笔记分享
- 多平台支持

## 6. 关键指标

### 6.1 用户指标
- 日活跃用户 (DAU)
- 月活跃用户 (MAU)
- 用户留存率 (1天、7天、30天)
- 平均学习时长

### 6.2 学习效果指标
- 挑战完成率
- 知识点掌握程度
- 学习计划坚持度

### 6.3 商业指标
- 付费转化率
- 付费用户平均收入 (ARPU)
- 虚拟货币消费情况
- 奖励币兑换率

## 7. 竞品分析

### 7.1 市场现状
- 传统中医学习应用偏向于辞典类工具
- 游戏化中医学习产品较少
- 用户对中医学习有持续需求

### 7.2 竞争优势
- 独特的游戏化学习方式
- 四种模式全面提升记忆效果
- 社交竞争增强学习动力
- 专注于经典原文学习而非简化内容
- 灵活的学习计划定制

## 8. 风险与挑战

### 8.1 产品风险
- 游戏化元素可能分散学习注意力
- 内容深度与用户接受度平衡
- 社交功能的隐私保护问题

### 8.2 技术风险
- 语音识别准确率挑战
- 大量用户同时在线的服务器压力
- 不同设备兼容性问题
- 学习计划自动拆分算法的准确性

### 8.3 应对策略
- A/B测试不同游戏化程度，找到最佳平衡点
- 多层次内容难度，满足不同用户需求
- 严格的隐私政策制定与实施
- 持续优化语音识别算法
- 服务器弹性扩容机制
- 跨平台兼容性测试
- 基于用户反馈优化学习计划算法

## 9. 实施计划

### 9.1 开发时间线
- 需求分析与设计：2周
- MVP开发：6周
- 内部测试：2周
- 公测：4周
- 正式发布：第15周

### 9.2 资源需求
- 开发团队：前端2人，后端2人，UI设计1人
- 内容团队：中医专家1人，编辑2人
- 测试团队：测试工程师2人
- 运营团队：产品运营1人，社区运营1人

### 9.3 上线后计划
- 每周小版本更新
- 每月功能迭代
- 季度大版本更新
- 社区活动与线下合作

## 10. 附录

### 10.1 用户画像
1. **医学生李明**
   - 22岁，中医学院大三学生
   - 需要记忆大量经典原文
   - 希望找到高效记忆方法
   - 喜欢通过手机学习

2. **中医爱好者王芳**
   - 35岁，白领，业余时间学习中医
   - 希望系统化学习经典著作
   - 时间碎片化，需要灵活学习计划
   - 愿意为优质内容付费

3. **中医师张伟**
   - 45岁，执业中医师
   - 需要温习经典原文
   - 希望有深度解析功能
   - 对学习效率要求高

### 10.2 页面原型参考
- 首页设计
- 训练选择页设计
- 四种挑战模式页面设计
- 排行榜页面设计
- 统计页面设计

### 10.3 数据字典
- 用户属性定义
- 学习进度数据结构
- 排行榜计分规则
- 奖励系统计算公式
- 学习计划天数与每日学习量对应关系

### 10.4 具体功能详细说明

#### 10.4.1 模式选择页面逻辑
- 显示当前关卡内容预览
- 展示四种挑战模式（听力、口语、阅读、写作）
- 每种模式卡片上显示"今日奖励: X/3"，表示当日已获取奖励次数和总次数
- 全部挑战模式选项显示预计完成时间
- 完成所有四种挑战可获得额外奖励提示

#### 10.4.2 排行榜奖励系统逻辑
- 用户可根据周/月/总榜查看排名
- 每日系统统计完成挑战次数，前100名用户获得额外奖励
- 非前100名用户获得默认奖励加成（基础奖励的10%）
- 点击榜单中的任意用户，获得10个奖励币
- 奖励币可用于兑换《脉经》副本（100币）、VIP体验券（50币）、特殊头像框（30币）等
- 点击用户获得奖励币后，系统弹出兑换选项

#### 10.4.3 学习统计页面逻辑
- 顶部显示学习概况数据：总学习时间、已学习天数、完成挑战次数、连续学习天数
- 每日学习时间图表以柱状图形式展示过去7天的学习情况
- 学习日历以月历形式展示学习强度：
  - 灰色：未学习
  - 浅绿色：少量学习（<15分钟）
  - 中绿色：中量学习（15-30分钟）
  - 深绿色：大量学习（>30分钟）
- 学习进度跟踪显示各个学习内容的完成百分比
- 底部提供个性化学习建议

#### 10.4.4 付费会员学习计划设置逻辑
- 在训练选择页面，付费会员可点击每本书的"修改计划"按钮
- 弹出计划设置弹窗，显示当前书籍总字数
- 提供多个预设选项：30天（速成）、90天（标准）、180天（进阶）、365天（全年）
- 自定义选项允许输入7-999天的自定义天数
- 根据所选天数，实时计算并显示每日学习量（约X字/天）
- 保存后系统自动重新计算关卡数量和每日学习内容
- 非会员点击修改按钮会提示"会员专属功能"

