// ── Translations ─────────────────────────────────────────────────────────────

const T = {
  ko: {
    title: '💪 근비대 루틴 생성기',
    subtitle: 'AI가 나에게 맞는 근비대 운동 루틴을 짜드립니다',
    level: '운동 경력',
    beginner: '초급', beginnerDesc: '운동 시작한 지 1년 미만',
    intermediate: '중급', intermediateDesc: '1~3년 꾸준히 운동',
    advanced: '고급', advancedDesc: '3년 이상 체계적 훈련',
    days: '주간 운동 일수',
    daysDisplay: n => `주 ${n}일`,
    targetLabel: '목표 부위', targetHint: ' (복수 선택 가능)',
    muscle_chest: '가슴', muscle_back: '등', muscle_legs: '하체',
    muscle_shoulders: '어깨', muscle_arms: '팔', muscle_abs: '복근',
    equipment: '사용 가능 장비',
    gym: '헬스장', gymDesc: '바벨, 덤벨, 머신 모두',
    homegym: '홈짐', homegymDesc: '덤벨, 바벨, 풀업바',
    bodyweight: '맨몸', bodyweightDesc: '장비 없이 자체 중량',
    generate: '루틴 생성하기',
    errorTarget: '목표 부위를 최소 1개 이상 선택해주세요.',
    resultTitle: (lv, d, eq) => `📋 ${lv} | 주 ${d}일 | ${eq}`,
    sets: '세트', repsUnit: '회', seconds: '초',
    restBetween: '세트 간 휴식', restDayNote: '운동일 사이 최소 1일 휴식 권장',
    tipTitle: '근비대 핵심 팁',
    viewGif: '동작 보기',
    gifLoading: '동작 영상 불러오는 중...',
    gifError: '동작 영상을 찾을 수 없습니다 😅',
    share: '루틴 공유',
    shareCopied: '링크 복사됨! ✅',
    levelMap: { '초급': '초급', '중급': '중급', '고급': '고급' },
    equipMap: { '헬스장': '헬스장', '홈짐': '홈짐', '맨몸': '맨몸' },
    muscleMap: { '가슴': '가슴', '등': '등', '하체': '하체', '어깨': '어깨', '팔': '팔', '복근': '복근' },
  },
  en: {
    title: '💪 Hypertrophy Routine Generator',
    subtitle: 'Get a personalized muscle-building workout plan',
    level: 'Experience Level',
    beginner: 'Beginner', beginnerDesc: 'Less than 1 year of training',
    intermediate: 'Intermediate', intermediateDesc: '1–3 years of consistent training',
    advanced: 'Advanced', advancedDesc: '3+ years of structured training',
    days: 'Training Days per Week',
    daysDisplay: n => `${n} days / week`,
    targetLabel: 'Target Muscles', targetHint: ' (multiple selection)',
    muscle_chest: 'Chest', muscle_back: 'Back', muscle_legs: 'Legs',
    muscle_shoulders: 'Shoulders', muscle_arms: 'Arms', muscle_abs: 'Abs',
    equipment: 'Available Equipment',
    gym: 'Gym', gymDesc: 'Barbell, dumbbell, machines',
    homegym: 'Home Gym', homegymDesc: 'Dumbbells, barbell, pull-up bar',
    bodyweight: 'Bodyweight', bodyweightDesc: 'No equipment needed',
    generate: 'Generate Routine',
    errorTarget: 'Please select at least one target muscle.',
    resultTitle: (lv, d, eq) => `📋 ${lv} | ${d} days/week | ${eq}`,
    sets: 'sets', repsUnit: 'reps', seconds: 's',
    restBetween: 'Rest between sets', restDayNote: 'At least 1 rest day between sessions',
    tipTitle: 'Key Hypertrophy Tips',
    viewGif: 'View Exercise',
    gifLoading: 'Loading exercise demo...',
    gifError: 'Exercise demo not found 😅',
    share: 'Share Routine',
    shareCopied: 'Link copied! ✅',
    levelMap: { '초급': 'Beginner', '중급': 'Intermediate', '고급': 'Advanced' },
    equipMap: { '헬스장': 'Gym', '홈짐': 'Home Gym', '맨몸': 'Bodyweight' },
    muscleMap: { '가슴': 'Chest', '등': 'Back', '하체': 'Legs', '어깨': 'Shoulders', '팔': 'Arms', '복근': 'Abs' },
  },
  zh: {
    title: '💪 增肌训练计划生成器',
    subtitle: '获取专属于您的增肌训练方案',
    level: '训练经验',
    beginner: '初级', beginnerDesc: '训练不足1年',
    intermediate: '中级', intermediateDesc: '持续训练1~3年',
    advanced: '高级', advancedDesc: '系统训练3年以上',
    days: '每周训练天数',
    daysDisplay: n => `每周 ${n} 天`,
    targetLabel: '目标肌肉', targetHint: '（可多选）',
    muscle_chest: '胸部', muscle_back: '背部', muscle_legs: '腿部',
    muscle_shoulders: '肩部', muscle_arms: '手臂', muscle_abs: '腹部',
    equipment: '可用器材',
    gym: '健身房', gymDesc: '杠铃、哑铃、器械全套',
    homegym: '家庭健身房', homegymDesc: '哑铃、杠铃、引体向上杆',
    bodyweight: '徒手', bodyweightDesc: '无需器械',
    generate: '生成训练计划',
    errorTarget: '请至少选择一个目标肌肉部位。',
    resultTitle: (lv, d, eq) => `📋 ${lv} | 每周${d}天 | ${eq}`,
    sets: '组', repsUnit: '次', seconds: '秒',
    restBetween: '组间休息', restDayNote: '建议每次训练之间至少休息1天',
    tipTitle: '增肌核心要点',
    viewGif: '查看动作',
    gifLoading: '加载动作演示中...',
    gifError: '未找到动作演示 😅',
    share: '分享计划',
    shareCopied: '链接已复制！✅',
    levelMap: { '초급': '初级', '중급': '中级', '고급': '高级' },
    equipMap: { '헬스장': '健身房', '홈짐': '家庭健身房', '맨몸': '徒手' },
    muscleMap: { '가슴': '胸部', '등': '背部', '하체': '腿部', '어깨': '肩部', '팔': '手臂', '복근': '腹部' },
  },
  ja: {
    title: '💪 筋肥大ルーティン生成器',
    subtitle: 'あなたに最適な筋肥大トレーニングプランを作成します',
    level: 'トレーニング経験',
    beginner: '初級', beginnerDesc: 'トレーニング歴1年未満',
    intermediate: '中級', intermediateDesc: '1〜3年継続的にトレーニング',
    advanced: '上級', advancedDesc: '3年以上の体系的なトレーニング',
    days: '週のトレーニング日数',
    daysDisplay: n => `週 ${n} 日`,
    targetLabel: '鍛えたい部位', targetHint: '（複数選択可）',
    muscle_chest: '胸', muscle_back: '背中', muscle_legs: '脚',
    muscle_shoulders: '肩', muscle_arms: '腕', muscle_abs: '腹筋',
    equipment: '使用可能な器具',
    gym: 'ジム', gymDesc: 'バーベル・ダンベル・マシン全て',
    homegym: 'ホームジム', homegymDesc: 'ダンベル・バーベル・懸垂バー',
    bodyweight: '自重', bodyweightDesc: '器具なし',
    generate: 'ルーティンを生成する',
    errorTarget: '少なくとも1つの部位を選択してください。',
    resultTitle: (lv, d, eq) => `📋 ${lv} | 週${d}日 | ${eq}`,
    sets: 'セット', repsUnit: '回', seconds: '秒',
    restBetween: 'セット間の休憩', restDayNote: 'トレーニング日の間に最低1日の休息を推奨',
    tipTitle: '筋肥大のキーポイント',
    viewGif: '動作を見る',
    gifLoading: '動作デモを読み込み中...',
    gifError: '動作デモが見つかりません 😅',
    share: 'ルーティンを共有',
    shareCopied: 'リンクをコピーしました！✅',
    levelMap: { '초급': '初級', '중급': '中級', '고급': '上級' },
    equipMap: { '헬스장': 'ジム', '홈짐': 'ホームジム', '맨몸': '自重' },
    muscleMap: { '가슴': '胸', '등': '背中', '하체': '脚', '어깨': '肩', '팔': '腕', '복근': '腹筋' },
  },
};

// ── Exercise name translations ────────────────────────────────────────────────

const EXERCISE_T = {
  '바벨 벤치프레스':             { en: 'Barbell Bench Press',          zh: '杠铃卧推',         ja: 'バーベルベンチプレス' },
  '인클라인 바벨 벤치프레스':    { en: 'Incline Barbell Bench Press',  zh: '上斜杠铃卧推',     ja: 'インクラインバーベルベンチプレス' },
  '덤벨 플라이':                 { en: 'Dumbbell Fly',                 zh: '哑铃飞鸟',         ja: 'ダンベルフライ' },
  '인클라인 덤벨 프레스':        { en: 'Incline Dumbbell Press',       zh: '上斜哑铃推胸',     ja: 'インクラインダンベルプレス' },
  '케이블 크로스오버':           { en: 'Cable Crossover',              zh: '绳索夹胸',         ja: 'ケーブルクロスオーバー' },
  '딥스':                        { en: 'Dips',                         zh: '双杠臂屈伸',       ja: 'ディップス' },
  '덤벨 벤치프레스':             { en: 'Dumbbell Bench Press',         zh: '哑铃卧推',         ja: 'ダンベルベンチプレス' },
  '클로즈그립 덤벨 프레스':      { en: 'Close-Grip Dumbbell Press',    zh: '窄握哑铃推胸',     ja: 'クローズグリップダンベルプレス' },
  '푸시업':                      { en: 'Push-Up',                      zh: '俯卧撑',           ja: 'プッシュアップ' },
  '와이드 푸시업':               { en: 'Wide Push-Up',                 zh: '宽距俯卧撑',       ja: 'ワイドプッシュアップ' },
  '인클라인 푸시업':             { en: 'Incline Push-Up',              zh: '上斜俯卧撑',       ja: 'インクラインプッシュアップ' },
  '디클라인 푸시업':             { en: 'Decline Push-Up',              zh: '下斜俯卧撑',       ja: 'デクラインプッシュアップ' },
  '다이아몬드 푸시업':           { en: 'Diamond Push-Up',              zh: '钻石俯卧撑',       ja: 'ダイヤモンドプッシュアップ' },
  '바벨 로우':                   { en: 'Barbell Row',                  zh: '杠铃划船',         ja: 'バーベルロウ' },
  '랫풀다운':                    { en: 'Lat Pulldown',                 zh: '高位下拉',         ja: 'ラットプルダウン' },
  '시티드 케이블 로우':          { en: 'Seated Cable Row',             zh: '坐姿绳索划船',     ja: 'シーテッドケーブルロウ' },
  '풀업':                        { en: 'Pull-Up',                      zh: '引体向上',         ja: 'プルアップ' },
  '데드리프트':                  { en: 'Deadlift',                     zh: '硬拉',             ja: 'デッドリフト' },
  '원암 덤벨 로우':              { en: 'One-Arm Dumbbell Row',         zh: '单臂哑铃划船',     ja: 'ワンアームダンベルロウ' },
  '인버티드 로우':               { en: 'Inverted Row',                 zh: '反向划船',         ja: 'インバーテッドロウ' },
  '슈퍼맨':                      { en: 'Superman',                     zh: '超人式',           ja: 'スーパーマン' },
  '친업':                        { en: 'Chin-Up',                      zh: '反握引体向上',     ja: 'チンアップ' },
  '바벨 스쿼트':                 { en: 'Barbell Squat',                zh: '杠铃深蹲',         ja: 'バーベルスクワット' },
  '레그 프레스':                 { en: 'Leg Press',                    zh: '腿举',             ja: 'レッグプレス' },
  '루마니안 데드리프트':         { en: 'Romanian Deadlift',            zh: '罗马尼亚硬拉',     ja: 'ルーマニアンデッドリフト' },
  '레그 컬':                     { en: 'Leg Curl',                     zh: '腿弯举',           ja: 'レッグカール' },
  '레그 익스텐션':               { en: 'Leg Extension',                zh: '腿屈伸',           ja: 'レッグエクステンション' },
  '카프레이즈':                  { en: 'Calf Raise',                   zh: '提踵',             ja: 'カーフレイズ' },
  '덤벨 스쿼트':                 { en: 'Dumbbell Squat',               zh: '哑铃深蹲',         ja: 'ダンベルスクワット' },
  '불가리안 스플릿 스쿼트':      { en: 'Bulgarian Split Squat',        zh: '保加利亚分腿蹲',   ja: 'ブルガリアンスプリットスクワット' },
  '덤벨 런지':                   { en: 'Dumbbell Lunge',               zh: '哑铃弓步蹲',       ja: 'ダンベルランジ' },
  '스쿼트':                      { en: 'Squat',                        zh: '深蹲',             ja: 'スクワット' },
  '런지':                        { en: 'Lunge',                        zh: '弓步蹲',           ja: 'ランジ' },
  '글루트 브릿지':               { en: 'Glute Bridge',                 zh: '臀桥',             ja: 'グルートブリッジ' },
  '점프 스쿼트':                 { en: 'Jump Squat',                   zh: '跳跃深蹲',         ja: 'ジャンプスクワット' },
  '바벨 오버헤드프레스':         { en: 'Barbell Overhead Press',       zh: '杠铃推举',         ja: 'バーベルオーバーヘッドプレス' },
  '덤벨 숄더프레스':             { en: 'Dumbbell Shoulder Press',      zh: '哑铃推举',         ja: 'ダンベルショルダープレス' },
  '레터럴 레이즈':               { en: 'Lateral Raise',                zh: '侧平举',           ja: 'レイタラルレイズ' },
  '프론트 레이즈':               { en: 'Front Raise',                  zh: '前平举',           ja: 'フロントレイズ' },
  '리어 델트 플라이':            { en: 'Rear Delt Fly',                zh: '俯身飞鸟',         ja: 'リアデルトフライ' },
  '페이스풀':                    { en: 'Face Pull',                    zh: '绳索面拉',         ja: 'フェイスプル' },
  '파이크 푸시업':               { en: 'Pike Push-Up',                 zh: '俯身推肩',         ja: 'パイクプッシュアップ' },
  '숄더 탭 푸시업':              { en: 'Shoulder Tap Push-Up',         zh: '肩部触碰俯卧撑',   ja: 'ショルダータッププッシュアップ' },
  '핸드스탠드 홀드':             { en: 'Handstand Hold',               zh: '倒立支撑',         ja: 'ハンドスタンドホールド' },
  '월 워크':                     { en: 'Wall Walk',                    zh: '墙上倒立练习',     ja: 'ウォールウォーク' },
  '바벨 컬':                     { en: 'Barbell Curl',                 zh: '杠铃弯举',         ja: 'バーベルカール' },
  '덤벨 해머컬':                 { en: 'Dumbbell Hammer Curl',         zh: '哑铃锤式弯举',     ja: 'ダンベルハンマーカール' },
  '인클라인 덤벨 컬':            { en: 'Incline Dumbbell Curl',        zh: '上斜哑铃弯举',     ja: 'インクラインダンベルカール' },
  '트라이셉스 푸시다운':         { en: 'Triceps Pushdown',             zh: '绳索下压',         ja: 'トライセプスプッシュダウン' },
  '스컬크러셔':                  { en: 'Skull Crusher',                zh: '仰卧臂屈伸',       ja: 'スカルクラッシャー' },
  '오버헤드 트라이셉스 익스텐션':{ en: 'Overhead Triceps Extension',   zh: '头顶臂屈伸',       ja: 'オーバーヘッドトライセプスエクステンション' },
  '덤벨 컬':                     { en: 'Dumbbell Curl',                zh: '哑铃弯举',         ja: 'ダンベルカール' },
  '해머컬':                      { en: 'Hammer Curl',                  zh: '锤式弯举',         ja: 'ハンマーカール' },
  '컨센트레이션 컬':             { en: 'Concentration Curl',           zh: '集中弯举',         ja: 'コンセントレーションカール' },
  '덤벨 트라이셉스 킥백':        { en: 'Dumbbell Triceps Kickback',    zh: '哑铃俯身臂屈伸',   ja: 'ダンベルトライセプスキックバック' },
  '친업 (언더그립)':             { en: 'Chin-Up (Underhand)',          zh: '反握引体向上',     ja: 'チンアップ（アンダーグリップ）' },
  '역그립 인버티드 로우':        { en: 'Reverse-Grip Inverted Row',    zh: '反握反向划船',     ja: 'リバースグリップインバーテッドロウ' },
  '클로즈그립 푸시업':           { en: 'Close-Grip Push-Up',           zh: '窄距俯卧撑',       ja: 'クローズグリッププッシュアップ' },
  '크런치':                      { en: 'Crunch',                       zh: '卷腹',             ja: 'クランチ' },
  '레그레이즈':                  { en: 'Leg Raise',                    zh: '仰卧举腿',         ja: 'レッグレイズ' },
  '케이블 크런치':               { en: 'Cable Crunch',                 zh: '绳索卷腹',         ja: 'ケーブルクランチ' },
  '플랭크':                      { en: 'Plank',                        zh: '平板支撑',         ja: 'プランク' },
  '행잉 레그레이즈':             { en: 'Hanging Leg Raise',            zh: '悬垂举腿',         ja: 'ハンギングレッグレイズ' },
  '바이시클 크런치':             { en: 'Bicycle Crunch',               zh: '自行车卷腹',       ja: 'バイシクルクランチ' },
  '리버스 크런치':               { en: 'Reverse Crunch',               zh: '反向卷腹',         ja: 'リバースクランチ' },
  '마운틴클라이머':              { en: 'Mountain Climber',             zh: '登山跑',           ja: 'マウンテンクライマー' },
  'V업':                         { en: 'V-Up',                         zh: 'V形卷腹',          ja: 'Vアップ' },
};

function exName(koName) {
  if (lang === 'ko') return koName;
  return EXERCISE_T[koName]?.[lang] ?? koName;
}

// ── Split day-name translations ───────────────────────────────────────────────

const SPLIT_NAMES_T = {
  fullA:         { ko: '전신 A',          en: 'Full Body A',        zh: '全身 A',         ja: '全身 A' },
  fullB:         { ko: '전신 B',          en: 'Full Body B',        zh: '全身 B',         ja: '全身 B' },
  push:          { ko: 'Push (밀기)',      en: 'Push',               zh: '推（Push）',      ja: 'プッシュ' },
  pull:          { ko: 'Pull (당기기)',    en: 'Pull',               zh: '拉（Pull）',      ja: 'プル' },
  legs:          { ko: 'Legs (하체)',      en: 'Legs',               zh: '腿部',            ja: 'レッグス' },
  upperA:        { ko: '상체 A',          en: 'Upper Body A',       zh: '上肢 A',          ja: '上半身 A' },
  lowerA:        { ko: '하체 A',          en: 'Lower Body A',       zh: '下肢 A',          ja: '下半身 A' },
  upperB:        { ko: '상체 B',          en: 'Upper Body B',       zh: '上肢 B',          ja: '上半身 B' },
  lowerB:        { ko: '하체 B',          en: 'Lower Body B',       zh: '下肢 B',          ja: '下半身 B' },
  chest_tri:     { ko: '가슴 + 삼두',     en: 'Chest + Triceps',    zh: '胸部＋三头肌',    ja: '胸＋三頭筋' },
  back_bi:       { ko: '등 + 이두',       en: 'Back + Biceps',      zh: '背部＋二头肌',    ja: '背中＋二頭筋' },
  legs_only:     { ko: '하체',            en: 'Legs',               zh: '腿部',            ja: '脚' },
  shoulder_abs:  { ko: '어깨 + 복근',     en: 'Shoulders + Abs',    zh: '肩部＋腹部',      ja: '肩＋腹筋' },
  full_compound: { ko: '전신 컴파운드',   en: 'Full Body Compound', zh: '全身复合训练',    ja: '全身コンパウンド' },
  pushA:         { ko: 'Push A',          en: 'Push A',             zh: 'Push A',         ja: 'プッシュ A' },
  pullA:         { ko: 'Pull A',          en: 'Pull A',             zh: 'Pull A',         ja: 'プル A' },
  legsA:         { ko: 'Legs A',          en: 'Legs A',             zh: '腿部 A',          ja: 'レッグス A' },
  pushB:         { ko: 'Push B',          en: 'Push B',             zh: 'Push B',         ja: 'プッシュ B' },
  pullB:         { ko: 'Pull B',          en: 'Pull B',             zh: 'Pull B',         ja: 'プル B' },
  legsB:         { ko: 'Legs B',          en: 'Legs B',             zh: '腿部 B',          ja: 'レッグス B' },
};

// ── Tips (multilingual) ───────────────────────────────────────────────────────

const TIPS = {
  초급: {
    ko: [
      '점진적 과부하 — 매주 무게를 조금씩 늘려가며 근육에 새로운 자극을 주세요.',
      '기본 복합 동작(스쿼트, 벤치프레스, 데드리프트)에 집중하세요.',
      '단백질을 체중(kg) × 1.6~2g 섭취하고, 수면 7~9시간을 유지하세요.',
    ],
    en: [
      'Progressive Overload — Add a little weight each week to keep challenging your muscles.',
      'Focus on compound movements: Squat, Bench Press, Deadlift.',
      'Aim for 1.6–2g of protein per kg of bodyweight and 7–9 hours of sleep.',
    ],
    zh: [
      '渐进超负荷 — 每周逐渐增加重量，持续给肌肉新的刺激。',
      '专注于基础复合动作：深蹲、卧推、硬拉。',
      '每日摄入体重(kg)×1.6~2g蛋白质，保持7~9小时睡眠。',
    ],
    ja: [
      '漸進的過負荷 — 毎週少しずつ重量を増やして筋肉に新しい刺激を与えましょう。',
      '基本のコンパウンド種目（スクワット・ベンチプレス・デッドリフト）に集中しましょう。',
      '体重(kg)×1.6〜2gのタンパク質を摂取し、7〜9時間の睡眠を心がけましょう。',
    ],
  },
  중급: {
    ko: [
      '주당 총 세트 수를 점진적으로 늘려 근비대 볼륨을 확보하세요.',
      '마음-근육 연결(Mind-Muscle Connection)에 집중해 자극을 극대화하세요.',
      '3~4주 고강도 후 1주 디로드(강도 ↓)를 넣어 회복을 관리하세요.',
    ],
    en: [
      'Gradually increase weekly volume (total sets) to maximize hypertrophy stimulus.',
      'Focus on the mind-muscle connection to maximize activation in target muscles.',
      'Use periodization: 3–4 weeks of high intensity followed by 1 deload week.',
    ],
    zh: [
      '逐步增加每周总组数，最大化增肌效果。',
      '专注于神经-肌肉连接，提升目标肌肉的激活感。',
      '采用周期化训练：3~4周高强度后安排1周减量周。',
    ],
    ja: [
      '週の総セット数を徐々に増やし、筋肥大の刺激を高めましょう。',
      'マインドマッスルコネクションに集中し、対象筋の活性化を最大化しましょう。',
      '3〜4週間の高強度後に1週間のディロードを取り入れましょう。',
    ],
  },
  고급: {
    ko: [
      '드롭셋·슈퍼셋·강제 반복 등 고급 기법으로 정체기를 돌파하세요.',
      '운동 전후 30분 내 탄수화물 + 단백질을 섭취해 회복 속도를 높이세요.',
      '약점 부위를 세션 초반에 배치해 가장 좋은 에너지로 훈련하세요.',
    ],
    en: [
      'Use advanced techniques (drop sets, supersets, forced reps) to break through plateaus.',
      'Consume carbs + protein within 30 minutes pre/post-workout to accelerate recovery.',
      'Train weak points first in the session when your energy is at its peak.',
    ],
    zh: [
      '利用递减组、超级组、强迫次数等高级技巧突破瓶颈。',
      '训练前后30分钟内补充碳水化合物+蛋白质，加速恢复。',
      '将薄弱部位安排在训练初期，利用最佳精力强化训练。',
    ],
    ja: [
      'ドロップセット・スーパーセット・強制反復などの高度なテクニックでプラトーを突破しましょう。',
      'トレーニング前後30分以内に炭水化物+タンパク質を摂取して回復を促進しましょう。',
      '弱点部位をセッションの最初に配置し、最高のエネルギーでトレーニングしましょう。',
    ],
  },
};

// ── Exercise DB & Routine Logic ───────────────────────────────────────────────

const DB = {
  가슴: {
    헬스장: ['바벨 벤치프레스', '인클라인 바벨 벤치프레스', '덤벨 플라이', '인클라인 덤벨 프레스', '케이블 크로스오버', '딥스'],
    홈짐:  ['덤벨 벤치프레스', '인클라인 덤벨 프레스', '덤벨 플라이', '딥스', '클로즈그립 덤벨 프레스'],
    맨몸:  ['푸시업', '와이드 푸시업', '인클라인 푸시업', '디클라인 푸시업', '딥스', '다이아몬드 푸시업'],
  },
  등: {
    헬스장: ['바벨 로우', '랫풀다운', '시티드 케이블 로우', '풀업', '데드리프트', '원암 덤벨 로우'],
    홈짐:  ['원암 덤벨 로우', '풀업', '바벨 로우', '인버티드 로우', '데드리프트'],
    맨몸:  ['풀업', '친업', '인버티드 로우', '슈퍼맨'],
  },
  하체: {
    헬스장: ['바벨 스쿼트', '레그 프레스', '루마니안 데드리프트', '레그 컬', '레그 익스텐션', '카프레이즈'],
    홈짐:  ['덤벨 스쿼트', '불가리안 스플릿 스쿼트', '루마니안 데드리프트', '카프레이즈', '덤벨 런지'],
    맨몸:  ['스쿼트', '런지', '불가리안 스플릿 스쿼트', '글루트 브릿지', '카프레이즈', '점프 스쿼트'],
  },
  어깨: {
    헬스장: ['바벨 오버헤드프레스', '덤벨 숄더프레스', '레터럴 레이즈', '프론트 레이즈', '리어 델트 플라이', '페이스풀'],
    홈짐:  ['덤벨 숄더프레스', '레터럴 레이즈', '프론트 레이즈', '리어 델트 플라이', '페이스풀'],
    맨몸:  ['파이크 푸시업', '숄더 탭 푸시업', '핸드스탠드 홀드', '월 워크'],
  },
  팔: {
    헬스장: ['바벨 컬', '덤벨 해머컬', '인클라인 덤벨 컬', '트라이셉스 푸시다운', '스컬크러셔', '오버헤드 트라이셉스 익스텐션'],
    홈짐:  ['덤벨 컬', '해머컬', '컨센트레이션 컬', '덤벨 트라이셉스 킥백', '클로즈그립 덤벨 프레스'],
    맨몸:  ['친업 (언더그립)', '클로즈그립 푸시업', '딥스', '역그립 인버티드 로우'],
  },
  복근: {
    헬스장: ['크런치', '레그레이즈', '케이블 크런치', '플랭크', '행잉 레그레이즈'],
    홈짐:  ['크런치', '레그레이즈', '플랭크', '바이시클 크런치', '리버스 크런치'],
    맨몸:  ['크런치', '레그레이즈', '플랭크', '마운틴클라이머', '바이시클 크런치', 'V업'],
  },
};

const SPLITS = {
  2: [
    ['fullA', ['가슴','등','하체','어깨','팔','복근']],
    ['fullB', ['가슴','등','하체','어깨','팔','복근']],
  ],
  3: [
    ['push', ['가슴','어깨','팔']],
    ['pull', ['등','팔']],
    ['legs', ['하체','복근']],
  ],
  4: [
    ['upperA', ['가슴','등','어깨']],
    ['lowerA', ['하체','복근']],
    ['upperB', ['가슴','등','팔']],
    ['lowerB', ['하체','복근']],
  ],
  5: [
    ['chest_tri', ['가슴','팔']],
    ['back_bi', ['등','팔']],
    ['legs_only', ['하체','복근']],
    ['shoulder_abs', ['어깨','복근']],
    ['full_compound', ['가슴','등','하체','어깨']],
  ],
  6: [
    ['pushA', ['가슴','어깨','팔']],
    ['pullA', ['등','팔']],
    ['legsA', ['하체','복근']],
    ['pushB', ['가슴','어깨','팔']],
    ['pullB', ['등','팔']],
    ['legsB', ['하체','복근']],
  ],
};

const SCHEME = {
  초급: { sets: 3, repsRange: '10~12', restSec: '60', exPerMuscle: 2 },
  중급: { sets: 4, repsRange: '8~10',  restSec: '90', exPerMuscle: 3 },
  고급: { sets: 4, repsRange: '6~10',  restSec: '90~120', exPerMuscle: 3 },
};

function pickExercises(muscle, equipment, count, offset) {
  const list = DB[muscle]?.[equipment] ?? [];
  if (!list.length) return [];
  return Array.from({ length: Math.min(count, list.length) }, (_, i) =>
    list[(offset + i) % list.length]
  );
}

function generateRoutine(level, days, targets, equipment) {
  const scheme = SCHEME[level];
  const template = SPLITS[days] ?? SPLITS[4];
  const muscleOffset = {};
  const workoutDays = [];

  for (const [dayKey, dayMuscles] of template) {
    const activeMuscles = dayMuscles.filter(m => targets.includes(m));
    if (!activeMuscles.length) continue;

    const exercises = [];
    for (const muscle of activeMuscles) {
      muscleOffset[muscle] ??= 0;
      const offset = muscleOffset[muscle] * scheme.exPerMuscle;
      muscleOffset[muscle]++;
      pickExercises(muscle, equipment, scheme.exPerMuscle, offset)
        .forEach(name => exercises.push({ muscle, name }));
    }

    workoutDays.push({ dayKey, exercises: exercises.slice(0, 8) });
  }

  return { workoutDays, scheme, tips: TIPS[level] };
}

// ── Language & theme state ────────────────────────────────────────────────────

let lang = localStorage.getItem('lang') ?? 'ko';
let lastRoutine = null;

// ── DOM refs ──────────────────────────────────────────────────────────────────

const slider       = document.getElementById('daysSlider');
const sliderDisplay = document.getElementById('sliderDisplay');
const form         = document.getElementById('routineForm');
const result       = document.getElementById('result');
const themeToggle  = document.getElementById('themeToggle');

// ── Language ──────────────────────────────────────────────────────────────────

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    localStorage.setItem('lang', lang);
    applyLang();
    if (lastRoutine) renderResult(lastRoutine);
  });
});

function applyLang() {
  const t = T[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key in t) el.textContent = t[key];
  });

  // Restore emoji in h1 (data-i18n overwrites the whole textContent)
  const h1 = document.querySelector('h1[data-i18n="title"]');
  if (h1) h1.textContent = t.title;

  // Update <title>
  document.title = t.title.replace('💪 ', '');

  updateSliderDisplay();

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function updateSliderDisplay() {
  sliderDisplay.textContent = T[lang].daysDisplay(slider.value);
  const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background =
    `linear-gradient(to right, var(--accent) ${pct}%, var(--border) ${pct}%)`;
}

slider.addEventListener('input', updateSliderDisplay);

// ── Theme ─────────────────────────────────────────────────────────────────────

const savedTheme = localStorage.getItem('theme') ?? 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  document.documentElement.classList.toggle('light', theme === 'light');
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ── Form submit ───────────────────────────────────────────────────────────────

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const t = T[lang];

  const level     = document.querySelector('input[name="level"]:checked').value;
  const days      = Number(slider.value);
  const targets   = [...document.querySelectorAll('input[name="target"]:checked')].map(el => el.value);
  const equipment = document.querySelector('input[name="equipment"]:checked').value;

  if (!targets.length) {
    showError(t.errorTarget);
    return;
  }

  const routineData = generateRoutine(level, days, targets, equipment);
  lastRoutine = { level, days, equipment, ...routineData };
  pushRoutineUrl(level, days, targets, equipment);
  renderResult(lastRoutine);
});

// ── Render ────────────────────────────────────────────────────────────────────

function showError(msg) {
  result.className = 'result error';
  result.innerHTML = '⚠️ ' + msg;
  result.classList.remove('hidden');
}

function renderResult({ level, days, equipment, workoutDays, scheme, tips }) {
  const t = T[lang];
  result.className = 'result';

  const levelLabel = t.levelMap[level];
  const equipLabel = t.equipMap[equipment];
  const header = `<h2>${t.resultTitle(levelLabel, days, equipLabel)}</h2>`;

  const daysHtml = workoutDays.map((day, dayIdx) => `
    <div class="day-block">
      <div class="day-title">Day ${dayIdx + 1} — ${SPLIT_NAMES_T[day.dayKey][lang]}</div>
      <ul class="exercise-list">
        ${day.exercises.map(ex => `
          <li>
            <span class="muscle-tag">${t.muscleMap[ex.muscle]}</span>
            <span class="ex-info">${exName(ex.name)} — ${scheme.sets} ${t.sets} × ${scheme.repsRange} ${t.repsUnit}</span>
            <button class="gif-btn" data-ko="${ex.name.replace(/"/g, '&quot;')}" title="${t.viewGif}">🎬</button>
          </li>`).join('')}
      </ul>
    </div>
  `).join('');

  const tipsList = tips[lang].map((tip, i) => `${i + 1}. ${tip}`).join('<br>');
  const tipHtml = `
    <div class="tip">
      <strong>${t.tipTitle}</strong><br><br>
      ${tipsList}<br><br>
      <strong>${t.restBetween}:</strong> ${scheme.restSec}${t.seconds} &nbsp;·&nbsp; ${t.restDayNote}
    </div>
  `;

  const shareHtml = `
    <div class="share-row">
      <button class="save-routine-btn${currentUser ? '' : ' hidden'}" id="saveRoutineBtn" onclick="saveRoutineToCloud()">💾 루틴 저장</button>
      <button class="share-btn" id="shareBtn">🔗 ${t.share}</button>
    </div>
  `;

  result.innerHTML = header + daysHtml + tipHtml + shareHtml;
  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('shareBtn').addEventListener('click', () => {
    copyRoutineUrl();
  });
}

// ── URL Share ─────────────────────────────────────────────────────────────────

function pushRoutineUrl(level, days, targets, equipment) {
  const params = new URLSearchParams({
    level, days, targets: targets.join(','), equipment, lang,
  });
  history.replaceState(null, '', '?' + params.toString());
}

function copyRoutineUrl() {
  const btn = document.getElementById('shareBtn');
  navigator.clipboard.writeText(location.href).then(() => {
    btn.textContent = T[lang].shareCopied;
    setTimeout(() => { btn.textContent = '🔗 ' + T[lang].share; }, 2500);
  });
}

function restoreFromUrl() {
  const p = new URLSearchParams(location.search);
  if (!p.has('level')) return;

  const level     = p.get('level');
  const days      = Number(p.get('days'));
  const targets   = p.get('targets').split(',').filter(Boolean);
  const equipment = p.get('equipment');
  const urlLang   = p.get('lang');

  // 언어 복원
  if (urlLang && T[urlLang]) {
    lang = urlLang;
    localStorage.setItem('lang', lang);
  }

  // 폼 값 복원
  const levelInput = document.querySelector(`input[name="level"][value="${level}"]`);
  if (levelInput) levelInput.checked = true;

  if (days >= 2 && days <= 6) slider.value = days;

  document.querySelectorAll('input[name="target"]').forEach(cb => {
    cb.checked = targets.includes(cb.value);
  });

  const eqInput = document.querySelector(`input[name="equipment"][value="${equipment}"]`);
  if (eqInput) eqInput.checked = true;

  // 루틴 생성
  const routineData = generateRoutine(level, days, targets, equipment);
  lastRoutine = { level, days, equipment, ...routineData };
  renderResult(lastRoutine);
}

// ── Exercise GIF Modal ────────────────────────────────────────────────────────

const modal      = document.getElementById('exModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody  = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(koName) {
  const displayName = exName(koName);
  const enName = EXERCISE_T[koName]?.en ?? koName;
  modalTitle.textContent = displayName;
  modalBody.innerHTML = `<div class="spinner"></div><p class="modal-loading">${T[lang].gifLoading}</p>`;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  fetchExerciseGif(koName, enName);
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// 결과 영역에 gif-btn 이벤트 위임
result.addEventListener('click', e => {
  const btn = e.target.closest('.gif-btn');
  if (btn) openModal(btn.dataset.ko);
});

// ── ExerciseDB API 키 (RapidAPI 무료 발급) ───────────────────────────────────
// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb 에서 무료 구독 후 입력
const EXERCISEDB_KEY = 'YOUR_RAPIDAPI_KEY';

// ── GIF 표시 헬퍼 ─────────────────────────────────────────────────────────────

function showModalGif(url, altText, sourceLabel, sourceHref) {
  const img = document.createElement('img');
  img.className = 'modal-gif';
  img.alt = altText;
  img.onload = () => {
    modalBody.innerHTML = '';
    modalBody.appendChild(img);
    const src = document.createElement('p');
    src.className = 'modal-source';
    src.innerHTML = `via <a href="${sourceHref}" target="_blank" rel="noopener">${sourceLabel}</a>`;
    modalBody.appendChild(src);
  };
  img.onerror = () => renderModalError();
  img.src = url;
}

function renderModalError() {
  modalBody.innerHTML = `<p class="modal-error">${T[lang].gifError}</p>`;
}

// ── 1차: ExerciseDB (GIF, 전체 운동 지원) ────────────────────────────────────

async function fetchFromExerciseDB(enName) {
  if (EXERCISEDB_KEY === 'YOUR_RAPIDAPI_KEY') return null;
  const url = `https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(enName.toLowerCase())}?offset=0&limit=1`;
  const res = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': EXERCISEDB_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data[0]?.gifUrl ?? null;
}

// ── 2차: wger.de (일부 운동 이미지) ──────────────────────────────────────────

async function fetchFromWger(enName) {
  const searchUrl = `https://wger.de/api/v2/exercise/search/?term=${encodeURIComponent(enName)}&language=english&format=json`;
  const res = await fetch(searchUrl);
  if (!res.ok) return null;
  const data = await res.json();

  const suggestion = data.suggestions?.[0];
  let imgUrl = suggestion?.data?.image;
  const baseId = suggestion?.data?.base_id;

  if (!imgUrl && baseId) {
    const imgRes = await fetch(
      `https://wger.de/api/v2/exerciseimage/?format=json&exercise_base_id=${baseId}`
    );
    if (imgRes.ok) {
      const imgData = await imgRes.json();
      imgUrl = imgData.results?.[0]?.image;
    }
  }
  return imgUrl ?? null;
}

// ── 통합 GIF 조회 ─────────────────────────────────────────────────────────────

async function fetchExerciseGif(koName, enName) {
  // 1차: ExerciseDB (애니메이션 GIF)
  try {
    const gifUrl = await fetchFromExerciseDB(enName);
    if (gifUrl) {
      showModalGif(gifUrl, enName, 'ExerciseDB', 'https://exercisedb.io');
      return;
    }
  } catch { /* 다음 소스로 */ }

  // 2차: wger.de (정적 이미지)
  try {
    const imgUrl = await fetchFromWger(enName);
    if (imgUrl) {
      showModalGif(imgUrl, enName, 'wger.de', 'https://wger.de');
      return;
    }
  } catch { /* 다음 소스로 */ }

  // 최종: 에러 메시지
  renderModalError();
}

// ── Firebase ──────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            'AIzaSyBU2TNqcNHyBF6ljpQIwznOc3VLkgM5ooA',
  authDomain:        'health-3d452.firebaseapp.com',
  projectId:         'health-3d452',
  storageBucket:     'health-3d452.firebasestorage.app',
  messagingSenderId: '989455480587',
  appId:             '1:989455480587:web:ad98e70e1aa1973818140e',
  measurementId:     'G-7KCG2P4XTR',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth           = firebase.auth();
const db             = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

let currentUser = null;

// ── Auth 상태 감지 ────────────────────────────────────────────────────────────

auth.onAuthStateChanged(user => {
  currentUser = user;
  renderUserArea();
  const wrapper = document.getElementById('myRoutinesWrapper');
  if (wrapper) wrapper.classList.toggle('hidden', !user);
  if (user) loadMyRoutines();
});

// ── 로그인 / 로그아웃 ─────────────────────────────────────────────────────────

function signInWithGoogle() {
  auth.signInWithPopup(googleProvider).catch(err => console.error('로그인 실패:', err));
}

function signOut() {
  auth.signOut();
}

// ── 유저 UI 렌더 ──────────────────────────────────────────────────────────────

const G_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
</svg>`;

function renderUserArea() {
  const area = document.getElementById('userArea');
  if (!area) return;

  if (currentUser) {
    const firstName = (currentUser.displayName || currentUser.email || '').split(' ')[0];
    const pic       = currentUser.photoURL || '';
    area.innerHTML  = `
      <div class="user-profile">
        ${pic ? `<img class="user-avatar" src="${pic}" alt="${firstName}" referrerpolicy="no-referrer" />` : ''}
        <span class="user-name" title="${currentUser.email}">${firstName}</span>
        <button class="logout-btn" onclick="signOut()" title="로그아웃">✕</button>
      </div>`;
  } else {
    area.innerHTML = `
      <button class="login-btn" onclick="signInWithGoogle()">
        ${G_ICON} 로그인
      </button>`;
  }

  // 결과 영역 저장 버튼 표시 갱신
  const saveBtn = document.getElementById('saveRoutineBtn');
  if (saveBtn) saveBtn.classList.toggle('hidden', !currentUser);
}

// ── Firestore: 루틴 저장 ──────────────────────────────────────────────────────

async function saveRoutineToCloud() {
  if (!currentUser || !lastRoutine) return;
  const btn = document.getElementById('saveRoutineBtn');
  if (btn) { btn.disabled = true; btn.textContent = '저장 중…'; }

  try {
    await db.collection('users').doc(currentUser.uid)
            .collection('routines').add({
      level:       lastRoutine.level,
      days:        lastRoutine.days,
      equipment:   lastRoutine.equipment,
      workoutDays: lastRoutine.workoutDays,
      lang,
      createdAt:   firebase.firestore.FieldValue.serverTimestamp(),
    });
    if (btn) btn.textContent = '✅ 저장됨!';
    setTimeout(() => {
      if (btn) { btn.textContent = '💾 루틴 저장'; btn.disabled = false; }
    }, 2000);
    loadMyRoutines();
  } catch (err) {
    console.error('저장 실패:', err);
    if (btn) { btn.textContent = '저장 실패 ❌'; btn.disabled = false; }
  }
}

// ── Firestore: 내 루틴 목록 ───────────────────────────────────────────────────

let routinesLoading = false; // 중복 호출 방어 플래그

async function loadMyRoutines() {
  const section = document.getElementById('myRoutinesSection');
  if (!section || !currentUser || routinesLoading) return;

  routinesLoading = true;
  section.innerHTML = '<p class="no-routines">불러오는 중…</p>';

  // 8초 초과 시 자동 해제
  const timeoutId = setTimeout(() => {
    if (routinesLoading) {
      section.innerHTML = '<p class="no-routines">연결 시간 초과 — 새로고침해주세요.</p>';
      routinesLoading = false;
    }
  }, 8000);

  try {
    // orderBy 제거 → 클라이언트 정렬로 대체 (Firestore 인덱스 불필요)
    const snap = await db.collection('users').doc(currentUser.uid)
      .collection('routines')
      .limit(10)
      .get();

    clearTimeout(timeoutId);

    if (snap.empty) {
      section.innerHTML = '<p class="no-routines">저장된 루틴이 없습니다.</p>';
      return;
    }

    // 클라이언트에서 createdAt 내림차순 정렬 후 최대 5개
    const docs = snap.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0))
      .slice(0, 5);

    const t = T[lang];
    section.innerHTML = docs.map(d => {
      const date    = d.createdAt?.toDate?.();
      const dateStr = date
        ? date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
        : '';
      return `
        <div class="saved-routine-card" onclick="loadSavedRoutine('${d.id}', this)">
          <div class="saved-routine-meta">
            <span class="saved-badge">${t.levelMap?.[d.level] ?? d.level}</span>
            <span class="saved-badge">주 ${d.days}일</span>
            <span class="saved-badge">${t.equipMap?.[d.equipment] ?? d.equipment}</span>
          </div>
          <div class="saved-routine-date">${dateStr}</div>
        </div>`;
    }).join('');
  } catch (err) {
    clearTimeout(timeoutId);
    console.error('루틴 목록 오류:', err);
    section.innerHTML = '<p class="no-routines">불러오기 실패 ❌</p>';
  } finally {
    routinesLoading = false;
  }
}

async function loadSavedRoutine(routineId, cardEl) {
  if (!currentUser) return;
  try {
    const doc = await db.collection('users').doc(currentUser.uid)
      .collection('routines').doc(routineId).get();
    if (!doc.exists) return;
    const d    = doc.data();
    lastRoutine = { ...d, scheme: SCHEME[d.level], tips: TIPS[d.level] };
    renderResult(lastRoutine);
    document.querySelectorAll('.saved-routine-card').forEach(c => c.classList.remove('active'));
    cardEl.classList.add('active');
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (err) {
    console.error('루틴 로드 실패:', err);
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────

applyLang();
restoreFromUrl();
