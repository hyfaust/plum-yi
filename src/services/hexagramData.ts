/**
 * 易经卦象数据模块
 * I Ching Hexagram Data Module
 * 
 * 包含完整的64卦数据、八卦基础数据
 * 支持中英文双语
 */

// ============================================================
// 类型定义 Type Definitions
// ============================================================

/** 五行属性 Five Elements */
export type WuXing = '金' | '木' | '水' | '火' | '土';

/** 八卦名称 Trigram Names */
export type TrigramName = '乾' | '坤' | '震' | '巽' | '坎' | '离' | '艮' | '兑';

/** 爻线类型 Line Types */
export type LineType = '阳' | '阴' | '老阳' | '老阴';

/** 爻辞数据 Line Text Data */
export interface LineText {
  /** 爻位（1-6，从下到上） */
  position: number;
  /** 中文爻辞 */
  textCN: string;
  /** 英文爻辞 */
  textEN: string;
  /** 中文解释 */
  interpretationCN: string;
  /** 英文解释 */
  interpretationEN: string;
}

/** 八卦数据 Trigram Data */
export interface TrigramData {
  /** 卦名（中文） */
  nameCN: TrigramName;
  /** 卦名（英文） */
  nameEN: string;
  /** 象征（中文） */
  symbolCN: string;
  /** 象征（英文） */
  symbolEN: string;
  /** 自然象征 */
  nature: string;
  /** 五行属性 */
  wuXing: WuXing;
  /** 卦象（二进制表示，从下到上） */
  lines: [number, number, number];
  /** 家族关系 */
  familyCN: string;
  familyEN: string;
  /** 方位 */
  directionCN: string;
  directionEN: string;
}

/** 六十四卦数据 Hexagram Data */
export interface HexagramData {
  /** 卦序（1-64） */
  number: number;
  /** 卦名（中文） */
  nameCN: string;
  /** 卦名（英文） */
  nameEN: string;
  /** 中文卦辞 */
  judgmentCN: string;
  /** 英文卦辞 */
  judgmentEN: string;
  /** 中文象辞 */
  imageCN: string;
  /** 英文象辞 */
  imageEN: string;
  /** 上卦 */
  upperTrigram: TrigramName;
  /** 下卦 */
  lowerTrigram: TrigramName;
  /** 爻辞（从初爻到上爻） */
  lines: LineText[];
  /** 中文概述 */
  summaryCN: string;
  /** 英文概述 */
  summaryEN: string;
}

// ============================================================
// 八卦数据 Trigram Data
// ============================================================

/** 八卦基础数据 */
export const TRIGRAMS: Record<TrigramName, TrigramData> = {
  乾: {
    nameCN: '乾',
    nameEN: 'Qian',
    symbolCN: '天',
    symbolEN: 'Heaven',
    nature: '刚健',
    wuXing: '金',
    lines: [1, 1, 1],
    familyCN: '父',
    familyEN: 'Father',
    directionCN: '西北',
    directionEN: 'Northwest',
  },
  坤: {
    nameCN: '坤',
    nameEN: 'Kun',
    symbolCN: '地',
    symbolEN: 'Earth',
    nature: '柔顺',
    wuXing: '土',
    lines: [0, 0, 0],
    familyCN: '母',
    familyEN: 'Mother',
    directionCN: '西南',
    directionEN: 'Southwest',
  },
  震: {
    nameCN: '震',
    nameEN: 'Zhen',
    symbolCN: '雷',
    symbolEN: 'Thunder',
    nature: '动',
    wuXing: '木',
    lines: [1, 0, 0],
    familyCN: '长男',
    familyEN: 'First Son',
    directionCN: '东',
    directionEN: 'East',
  },
  巽: {
    nameCN: '巽',
    nameEN: 'Xun',
    symbolCN: '风',
    symbolEN: 'Wind',
    nature: '入',
    wuXing: '木',
    lines: [0, 1, 1],
    familyCN: '长女',
    familyEN: 'First Daughter',
    directionCN: '东南',
    directionEN: 'Southeast',
  },
  坎: {
    nameCN: '坎',
    nameEN: 'Kan',
    symbolCN: '水',
    symbolEN: 'Water',
    nature: '陷',
    wuXing: '水',
    lines: [0, 1, 0],
    familyCN: '中男',
    familyEN: 'Second Son',
    directionCN: '北',
    directionEN: 'North',
  },
  离: {
    nameCN: '离',
    nameEN: 'Li',
    symbolCN: '火',
    symbolEN: 'Fire',
    nature: '丽',
    wuXing: '火',
    lines: [1, 0, 1],
    familyCN: '中女',
    familyEN: 'Second Daughter',
    directionCN: '南',
    directionEN: 'South',
  },
  艮: {
    nameCN: '艮',
    nameEN: 'Gen',
    symbolCN: '山',
    symbolEN: 'Mountain',
    nature: '止',
    wuXing: '土',
    lines: [0, 0, 1],
    familyCN: '少男',
    familyEN: 'Third Son',
    directionCN: '东北',
    directionEN: 'Northeast',
  },
  兑: {
    nameCN: '兑',
    nameEN: 'Dui',
    symbolCN: '泽',
    symbolEN: 'Lake',
    nature: '悦',
    wuXing: '金',
    lines: [1, 1, 0],
    familyCN: '少女',
    familyEN: 'Third Daughter',
    directionCN: '西',
    directionEN: 'West',
  },
};

// ============================================================
// 六十四卦数据 Hexagram Data (1-64)
// ============================================================

/** 六十四卦完整数据 */
export const HEXAGRAMS: HexagramData[] = [
  // 第1卦 乾为天
  {
    number: 1,
    nameCN: '乾',
    nameEN: 'Qian (The Creative)',
    judgmentCN: '元亨利贞。',
    judgmentEN: 'The Creative works sublime success, furthering through perseverance.',
    imageCN: '天行健，君子以自强不息。',
    imageEN: 'The movement of heaven is full of power. Thus the superior man makes himself strong and untiring.',
    upperTrigram: '乾',
    lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '潜龙勿用。', textEN: 'Hidden dragon. Do not act.', interpretationCN: '阳气潜藏，宜蛰伏待机。', interpretationEN: 'Yang energy is hidden. Wait for the right time.' },
      { position: 2, textCN: '见龙在田，利见大人。', textEN: 'Dragon appearing in the field. It furthers one to see the great man.', interpretationCN: '崭露头角，宜求贤者指引。', interpretationEN: 'Emerging into the open. Seek guidance from the wise.' },
      { position: 3, textCN: '君子终日乾乾，夕惕若厉，无咎。', textEN: 'All day long the creative man is creatively active. At nightfall his mind is still beset with cares. No blame.', interpretationCN: '勤勉不懈，警惕自省可免灾祸。', interpretationEN: 'Stay vigilant and diligent to avoid misfortune.' },
      { position: 4, textCN: '或跃在渊，无咎。', textEN: 'Wavering flight over the depths. No blame.', interpretationCN: '进退自如，审时度势。', interpretationEN: 'Ready to advance or retreat as conditions warrant.' },
      { position: 5, textCN: '飞龙在天，利见大人。', textEN: 'Flying dragon in the heavens. It furthers one to see the great man.', interpretationCN: '事业鼎盛，宜广纳贤才。', interpretationEN: 'At the height of power. Embrace wisdom from others.' },
      { position: 6, textCN: '亢龙有悔。', textEN: 'Arrogant dragon will have cause to repent.', interpretationCN: '物极必反，盛极而衰。', interpretationEN: 'Pride goes before a fall. Excess leads to regret.' },
    ],
    summaryCN: '乾卦象征天道刚健，代表创造的力量。君子应效法天道，自强不息。',
    summaryEN: 'The Qian hexagram symbolizes the power of creation. The superior man should emulate heaven\'s ceaseless vitality.',
  },
  // 第2卦 坤为地
  {
    number: 2,
    nameCN: '坤',
    nameEN: 'Kun (The Receptive)',
    judgmentCN: '元亨，利牝马之贞。君子有攸往，先迷后得主。利西南得朋，东北丧朋。安贞吉。',
    judgmentEN: 'The Receptive brings about sublime success, furthering through the perseverance of a mare. If the superior man undertakes something and tries to lead, he goes astray; but if he follows, he finds guidance.',
    imageCN: '地势坤，君子以厚德载物。',
    imageEN: 'The earth\'s condition is receptive devotion. Thus the superior man who has breadth of character carries the outer world.',
    upperTrigram: '坤',
    lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '履霜，坚冰至。', textEN: 'When there is hoarfrost underfoot, solid ice is not far off.', interpretationCN: '见微知著，防患未然。', interpretationEN: 'Be alert to early signs of trouble.' },
      { position: 2, textCN: '直方大，不习无不利。', textEN: 'Straight, square, great. Without purpose, yet nothing remains unfurthered.', interpretationCN: '正直宽厚，自然通达。', interpretationEN: 'Uprightness and devotion naturally bring success.' },
      { position: 3, textCN: '含章可贞，或从王事，无成有终。', textEN: 'Hidden lines. One is able to remain persevering. If by chance you are in the service of a king, seek not works, but bring to completion.', interpretationCN: '韬光养晦，功成不居。', interpretationEN: 'Conceal your talents; focus on completing tasks.' },
      { position: 4, textCN: '括囊，无咎无誉。', textEN: 'A tied-up sack. No blame, no praise.', interpretationCN: '谨慎收敛，安守本分。', interpretationEN: 'Exercise caution and restraint.' },
      { position: 5, textCN: '黄裳，元吉。', textEN: 'A yellow lower garment brings supreme good fortune.', interpretationCN: '中正之德，大吉大利。', interpretationEN: 'Central and correct virtue brings great fortune.' },
      { position: 6, textCN: '龙战于野，其血玄黄。', textEN: 'Dragons fight in the meadow. Their blood is black and yellow.', interpretationCN: '阴阳相争，两败俱伤。', interpretationEN: 'When opposites clash, both sides suffer.' },
    ],
    summaryCN: '坤卦象征大地的包容，代表顺从与承载。君子应效法大地，厚德载物。',
    summaryEN: 'Kun symbolizes the earth\'s receptivity. The superior man should emulate the earth\'s nurturing capacity.',
  },
  // 第3卦 水雷屯
  {
    number: 3,
    nameCN: '屯',
    nameEN: 'Zhun (Difficulty at the Beginning)',
    judgmentCN: '元亨利贞，勿用有攸往，利建侯。',
    judgmentEN: 'Difficulty at the Beginning works supreme success, furthering through perseverance. Do not put forward anything. It is advantageous to establish helpers.',
    imageCN: '云雷屯，君子以经纶。',
    imageEN: 'Clouds and thunder: the image of Difficulty at the Beginning. Thus the superior man brings order out of confusion.',
    upperTrigram: '坎',
    lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '磐桓，利居贞，利建侯。', textEN: 'Hesitation and hindrance. It furthers one to remain persevering. It furthers one to appoint helpers.', interpretationCN: '初创艰难，宜守正待援。', interpretationEN: 'At the beginning, stay steadfast and seek allies.' },
      { position: 2, textCN: '屯如邅如，乘马班如，匪寇婚媾，女子贞不字，十年乃字。', textEN: 'Difficulties pile up. Horse and rider part. He is not a robber; he wants to woo when the time comes. The maiden is chaste, she does not pledge herself. Ten years—then she pledges herself.', interpretationCN: '困难重重，需耐心等待时机。', interpretationEN: 'Patience is needed; the right time will come.' },
      { position: 3, textCN: '即鹿无虞，惟入于林中，君子几不如舍，往吝。', textEN: 'Whoever hunts deer without the forester only loses his way in the forest. The superior man understands the signs of the time and prefers to desist.', interpretationCN: '盲目行动，不如放弃。', interpretationEN: 'Know when to quit; persistence without wisdom leads astray.' },
      { position: 4, textCN: '乘马班如，求婚媾，往吉无不利。', textEN: 'Horse and rider part. He seeks union. To go brings good fortune. Everything acts to further.', interpretationCN: '主动追求，可获吉祥。', interpretationEN: 'Take initiative in seeking alliances; fortune favors the bold.' },
      { position: 5, textCN: '屯其膏，小贞吉，大贞凶。', textEN: 'Difficulty in blessing. In small matters perseverance furthers. In great matters it does not.', interpretationCN: '小事可成，大事难为。', interpretationEN: 'Small efforts succeed; grand ambitions face obstacles.' },
      { position: 6, textCN: '乘马班如，泣血涟如。', textEN: 'Horse and rider part. Bloody tears flow.', interpretationCN: '进退两难，徒增悲伤。', interpretationEN: 'Stuck between advance and retreat, only sorrow remains.' },
    ],
    summaryCN: '屯卦象征初生的困难，万事开头难。需要坚定意志，寻求帮助。',
    summaryEN: 'Zhun symbolizes the difficulties of new beginnings. Perseverance and seeking help are essential.',
  },
  // 第4卦 山水蒙
  {
    number: 4,
    nameCN: '蒙',
    nameEN: 'Meng (Youthful Folly)',
    judgmentCN: '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
    judgmentEN: 'Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me. At the first oracle I give information. If he asks two or three times, it is importunity. If he importunes, I give no information. Perseverance furthers.',
    imageCN: '山下出泉，蒙。君子以果行育德。',
    imageEN: 'A spring wells up at the foot of the mountain: the image of Youth. Thus the superior man fosters his character by thoroughness in all he does.',
    upperTrigram: '艮',
    lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '发蒙，利用刑人，用说桎梏，以往吝。', textEN: 'To make a fool develop it furthers one to apply discipline. The fetters should be removed. To go on in this way brings humiliation.', interpretationCN: '启蒙之初，宜严加管教。', interpretationEN: 'In educating the young, firm discipline is needed.' },
      { position: 2, textCN: '包蒙吉，纳妇吉，子克家。', textEN: 'To take a maiden to wife brings good fortune. The son is capable of taking charge of the household.', interpretationCN: '包容蒙昧，可获吉祥。', interpretationEN: 'Tolerance and acceptance bring good fortune.' },
      { position: 3, textCN: '勿用取女，见金夫，不有躬，无攸利。', textEN: 'Take not a maiden who, when she sees a man of bronze, loses possession of herself. Nothing furthers.', interpretationCN: '贪慕虚荣，终无所得。', interpretationEN: 'Chasing superficial attractions leads nowhere.' },
      { position: 4, textCN: '困蒙，吝。', textEN: 'Entangled folly brings humiliation.', interpretationCN: '困于蒙昧，处境艰难。', interpretationEN: 'Being trapped in ignorance brings shame.' },
      { position: 5, textCN: '童蒙，吉。', textEN: 'Childlike folly brings good fortune.', interpretationCN: '谦虚好学，吉利亨通。', interpretationEN: 'Humility in learning brings fortune.' },
      { position: 6, textCN: '击蒙，不利为寇，利御寇。', textEN: 'In punishing folly it does not further one to commit raids. It furthers one to ward off raids.', interpretationCN: '矫正蒙昧，宜防御不宜进攻。', interpretationEN: 'Correcting ignorance benefits defense, not aggression.' },
    ],
    summaryCN: '蒙卦象征蒙昧与启蒙，强调教育的重要性。求学者应虚心求教。',
    summaryEN: 'Meng symbolizes youth and learning. The student should seek knowledge with humility.',
  },
  // 第5卦 水天需
  {
    number: 5,
    nameCN: '需',
    nameEN: 'Xu (Waiting)',
    judgmentCN: '有孚，光亨贞吉，利涉大川。',
    judgmentEN: 'Waiting. If you are sincere, you have light and success. Perseverance brings good fortune. It furthers one to cross the great water.',
    imageCN: '云上于天，需。君子以饮食宴乐。',
    imageEN: 'Clouds rise up to heaven: the image of Waiting. Thus the superior man eats and drinks, is joyous and of good cheer.',
    upperTrigram: '坎',
    lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '需于郊，利用恒，无咎。', textEN: 'Waiting in the meadow. It furthers one to abide in what endures. No blame.', interpretationCN: '在郊外等待，宜持之以恒。', interpretationEN: 'Wait patiently at a safe distance.' },
      { position: 2, textCN: '需于沙，小有言，终吉。', textEN: 'Waiting on the sand. There is some gossip. The end brings good fortune.', interpretationCN: '虽有闲言，终获吉祥。', interpretationEN: 'Some criticism arises, but the outcome is good.' },
      { position: 3, textCN: '需于泥，致寇至。', textEN: 'Waiting in the mud brings about the arrival of the enemy.', interpretationCN: '陷于泥泞，招致祸患。', interpretationEN: 'Getting stuck invites trouble.' },
      { position: 4, textCN: '需于血，出自穴。', textEN: 'Waiting in blood. Get out of the pit.', interpretationCN: '身处险境，宜尽快脱身。', interpretationEN: 'In dire circumstances, escape is paramount.' },
      { position: 5, textCN: '需于酒食，贞吉。', textEN: 'Waiting at meat and drink. Perseverance brings good fortune.', interpretationCN: '安享等待，守正得吉。', interpretationEN: 'Wait in comfort; steadfastness brings fortune.' },
      { position: 6, textCN: '入于穴，有不速之客三人来，敬之终吉。', textEN: 'Three uninvited guests arrive. Honor them, and in the end there will be good fortune.', interpretationCN: '意外来客，以礼相待终吉。', interpretationEN: 'Welcome unexpected guests with respect.' },
    ],
    summaryCN: '需卦象征等待，强调耐心的重要性。诚信等待，终将获得成功。',
    summaryEN: 'Xu symbolizes the need for patience. Sincere waiting leads to eventual success.',
  },
  // 第6卦 天水讼
  {
    number: 6,
    nameCN: '讼',
    nameEN: 'Song (Conflict)',
    judgmentCN: '有孚窒惕，中吉，终凶。利见大人，不利涉大川。',
    judgmentEN: 'Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune. It furthers one to see the great man. It does not further one to cross the great water.',
    imageCN: '天与水违行，讼。君子以作事谋始。',
    imageEN: 'Heaven and water go their opposite ways: the image of Conflict. Thus in all his transactions the superior man carefully considers the beginning.',
    upperTrigram: '乾',
    lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '不永所事，小有言，终吉。', textEN: 'If one does not perpetuate the affair, there is a little gossip. In the end, good fortune.', interpretationCN: '争讼之事，适可而止终吉。', interpretationEN: 'Drop the dispute early; minor criticism fades.' },
      { position: 2, textCN: '不克讼，归而逋，其邑人三百户无眚。', textEN: 'One cannot engage in conflict; one returns home, gives way. The people of his town, three hundred households, remain free of guilt.', interpretationCN: '不敌则退，可保平安。', interpretationEN: 'Retreat when outmatched; preserve your community.' },
      { position: 3, textCN: '食旧德，贞厉，终吉。或从王事，无成。', textEN: 'Nourished on the virtue of one\'s ancestors. Perseverance brings danger. In the end, good fortune comes. If by chance you are in the service of a king, seek not works.', interpretationCN: '守旧有险，终可化吉。', interpretationEN: 'Living on past merits is risky but can end well.' },
      { position: 4, textCN: '不克讼，复即命渝，安贞吉。', textEN: 'One cannot engage in conflict. One turns back and submits to fate, changes one\'s attitude. Perseverance brings good fortune.', interpretationCN: '放弃争讼，顺命守正得吉。', interpretationEN: 'Accept fate and change course; persistence brings good fortune.' },
      { position: 5, textCN: '讼，元吉。', textEN: 'Conflict dealt with. Supreme good fortune.', interpretationCN: '公正裁决，大吉大利。', interpretationEN: 'Fair resolution of conflict brings supreme fortune.' },
      { position: 6, textCN: '或锡之鞶带，终朝三褫之。', textEN: 'If by chance a leather belt is bestowed on one, by the end of the morning it will have been snatched away three times.', interpretationCN: '虽获赏赐，终被剥夺。', interpretationEN: 'Ill-gotten gains are quickly lost.' },
    ],
    summaryCN: '讼卦象征争讼，告诫人们慎于争端，适可而止。',
    summaryEN: 'Song symbolizes conflict. Be cautious in disputes; know when to stop.',
  },
  // 第7卦 地水师
  {
    number: 7,
    nameCN: '师',
    nameEN: 'Shi (The Army)',
    judgmentCN: '贞丈人吉，无咎。',
    judgmentEN: 'The Army. The army needs perseverance and a strong man. Good fortune without blame.',
    imageCN: '地中有水，师。君子以容民畜众。',
    imageEN: 'In the middle of the earth is water: the image of The Army. Thus the superior man increases his masses by generosity toward the people.',
    upperTrigram: '坤',
    lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '师出以律，否臧凶。', textEN: 'An army must set forth in proper order. If the order is not good, misfortune threatens.', interpretationCN: '行军须有纪律，否则凶险。', interpretationEN: 'Discipline is essential; disorder invites disaster.' },
      { position: 2, textCN: '在师中吉，无咎，王三锡命。', textEN: 'In the midst of the army. Good fortune. No blame. The king bestows a triple mandate.', interpretationCN: '身在军中得吉，受天子恩宠。', interpretationEN: 'Being in the midst of the army brings honor.' },
      { position: 3, textCN: '师或舆尸，凶。', textEN: 'Perchance the army carries corpses in the cart. Misfortune.', interpretationCN: '车载尸骨，大凶之兆。', interpretationEN: 'Carrying corpses indicates great misfortune.' },
      { position: 4, textCN: '师左次，无咎。', textEN: 'The army retreats. No blame.', interpretationCN: '退守无过，知进退。', interpretationEN: 'Strategic retreat carries no blame.' },
      { position: 5, textCN: '田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。', textEN: 'In the field there is game. It is advantageous to catch it. No blame. Let the eldest lead the army. If the younger leads, corpses are carried. Perseverance brings misfortune.', interpretationCN: '用人得当则吉，用人不当则凶。', interpretationEN: 'Put the right person in charge; wrong leadership brings disaster.' },
      { position: 6, textCN: '大君有命，开国承家，小人勿用。', textEN: 'The great prince issues commands, founds states, vests families with fiefs. Inferior people should not be employed.', interpretationCN: '论功行赏，勿用小人。', interpretationEN: 'Reward merit; do not employ the unworthy.' },
    ],
    summaryCN: '师卦象征军队与领导，强调纪律和正确领导的重要性。',
    summaryEN: 'Shi symbolizes an army. Discipline and proper leadership are essential.',
  },
  // 第8卦 水地比
  {
    number: 8,
    nameCN: '比',
    nameEN: 'Bi (Holding Together)',
    judgmentCN: '吉。原筮元永贞，无咎。不宁方来，后夫凶。',
    judgmentEN: 'Holding Together brings good fortune. Inquire of the oracle once more whether you possess sublimity, constancy, and perseverance. If you are sincere, you have no blame. Those who are uncertain gradually come. Whoever comes too late meets with misfortune.',
    imageCN: '地上有水，比。先王以建万国，亲诸侯。',
    imageEN: 'On the earth is water: the image of Holding Together. Thus the kings of antiquity bestowed the different states as fiefs and cultivated friendly relations with the feudal lords.',
    upperTrigram: '坎',
    lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '有孚比之，无咎。有孚盈缶，终来有它吉。', textEN: 'Hold to him in truth and loyalty; this is without blame. Truth, like a full earthen bowl. In the end, good fortune comes from without.', interpretationCN: '诚信亲附，终获吉祥。', interpretationEN: 'Sincere attachment brings eventual good fortune.' },
      { position: 2, textCN: '比之自内，贞吉。', textEN: 'Hold to him inwardly. Perseverance brings good fortune.', interpretationCN: '发自内心的亲附，守正得吉。', interpretationEN: 'Inner sincerity in devotion brings fortune.' },
      { position: 3, textCN: '比之匪人。', textEN: 'You hold to the wrong person.', interpretationCN: '亲附不当之人。', interpretationEN: 'Attaching to the wrong person.' },
      { position: 4, textCN: '外比之，贞吉。', textEN: 'Hold to him from without. Perseverance brings good fortune.', interpretationCN: '向外亲附贤者，守正得吉。', interpretationEN: 'Seeking attachment outside; steadfastness brings fortune.' },
      { position: 5, textCN: '显比，王用三驱，失前禽，邑人不诫，吉。', textEN: 'Manifestation of holding together. In the hunt the king uses beaters on three sides only and foregoes the game that runs off in front. The people of the city are not warned. Good fortune.', interpretationCN: '光明正大地亲附，不强求。', interpretationEN: 'Open and fair attachment; do not coerce.' },
      { position: 6, textCN: '比之无首，凶。', textEN: 'He finds no head for holding together. Misfortune.', interpretationCN: '亲附无统领之人，凶。', interpretationEN: 'Attachment without leadership brings misfortune.' },
    ],
    summaryCN: '比卦象征亲附与团结，强调诚信团结的重要性。',
    summaryEN: 'Bi symbolizes unity and togetherness. Sincere attachment to the right leader is vital.',
  },
  // 第9卦 风天小畜
  {
    number: 9,
    nameCN: '小畜',
    nameEN: 'Xiao Xu (The Taming Power of the Small)',
    judgmentCN: '亨。密云不雨，自我西郊。',
    judgmentEN: 'The Taming Power of the Small has success. Dense clouds, no rain from our western region.',
    imageCN: '风行天上，小畜。君子以懿文德。',
    imageEN: 'The wind drives across heaven: the image of The Taming Power of the Small. Thus the superior man refines the outward aspect of his nature.',
    upperTrigram: '巽',
    lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '复自道，何其咎，吉。', textEN: 'Return to the way. How could there be blame in this? Good fortune.', interpretationCN: '回归正道，何咎之有。', interpretationEN: 'Returning to the right path brings good fortune.' },
      { position: 2, textCN: '牵复，吉。', textEN: 'He allows himself to be drawn back. Good fortune.', interpretationCN: '被牵引而回，吉利。', interpretationEN: 'Being pulled back brings good fortune.' },
      { position: 3, textCN: '舆说辐，夫妻反目。', textEN: 'The spokes burst out of the wagon wheels. Man and wife turn their backs on each other.', interpretationCN: '车轮损坏，夫妻不和。', interpretationEN: 'Breakdown leads to discord.' },
      { position: 4, textCN: '有孚，血去惕出，无咎。', textEN: 'If you are sincere, blood vanishes and fear gives way. No blame.', interpretationCN: '诚信可免灾祸。', interpretationEN: 'Sincerity removes harm and fear.' },
      { position: 5, textCN: '有孚挛如，富以其邻。', textEN: 'If you are sincere and loyally attached, you are rich in your neighbor.', interpretationCN: '诚信相连，与邻共富。', interpretationEN: 'Loyalty enriches both you and your neighbor.' },
      { position: 6, textCN: '既雨既处，尚德载，妇贞厉。月几望，君子征凶。', textEN: 'The rain comes, there is rest. This is due to the lasting effect of character. Perseverance brings danger. When the moon is nearly full, the right time is at hand for the superior man to act.', interpretationCN: '雨已降，德已满，宜守不宜进。', interpretationEN: 'When conditions are ripe, act; but excess brings danger.' },
    ],
    summaryCN: '小畜卦象征小有积蓄，力量尚弱，需要耐心积累。',
    summaryEN: 'Xiao Xu symbolizes small accumulation. Strength is still limited; patience is needed.',
  },
  // 第10卦 天泽履
  {
    number: 10,
    nameCN: '履',
    nameEN: 'Lu (Treading)',
    judgmentCN: '履虎尾，不咥人，亨。',
    judgmentEN: 'Treading. Treading upon the tail of the tiger. It does not bite the man. Success.',
    imageCN: '上天下泽，履。君子以辩上下，定民志。',
    imageEN: 'Heaven above, the lake below: the image of Treading. Thus the superior man discriminates between high and low and thereby fortifies the thinking of the people.',
    upperTrigram: '乾',
    lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '素履，往无咎。', textEN: 'Simple treading. Going forward without blame.', interpretationCN: '质朴前行，无有过咎。', interpretationEN: 'Proceeding simply and without pretense.' },
      { position: 2, textCN: '履道坦坦，幽人贞吉。', textEN: 'The way of the level. The recluse\'s perseverance brings good fortune.', interpretationCN: '道路平坦，隐者守正得吉。', interpretationEN: 'A level path; the quiet one perseveres to fortune.' },
      { position: 3, textCN: '眇能视，跛能履，履虎尾，咥人凶。武人为于大君。', textEN: 'A one-eyed man is able to see, a lame man is able to tread. He treads on the tail of the tiger. The tiger bites the man. Misfortune. A warrior acts for the great prince.', interpretationCN: '力不从心，贸然行动招凶。', interpretationEN: 'Acting beyond one\'s ability invites disaster.' },
      { position: 4, textCN: '履虎尾，愬愬终吉。', textEN: 'He treads on the tail of the tiger. Caution and circumspection lead ultimately to good fortune.', interpretationCN: '小心翼翼，终获吉祥。', interpretationEN: 'Treading cautiously on a dangerous path leads to fortune.' },
      { position: 5, textCN: '夬履，贞厉。', textEN: 'Resolute treading. Perseverance brings danger.', interpretationCN: '果断前行，守正有险。', interpretationEN: 'Decisive action carries risk.' },
      { position: 6, textCN: '视履考祥，其旋元吉。', textEN: 'Look to your conduct and weigh the favorable signs. When everything is fulfilled, supreme good fortune.', interpretationCN: '审视行为，周全则大吉。', interpretationEN: 'Examine your conduct; completeness brings supreme fortune.' },
    ],
    summaryCN: '履卦象征小心行走，告诫在危险中保持谨慎。',
    summaryEN: 'Lu symbolizes careful treading. Caution is needed in dangerous situations.',
  },
  // 第11卦 地天泰
  {
    number: 11,
    nameCN: '泰',
    nameEN: 'Tai (Peace)',
    judgmentCN: '小往大来，吉亨。',
    judgmentEN: 'Peace. The small departs, the great approaches. Good fortune. Success.',
    imageCN: '天地交泰，后以财成天地之道。',
    imageEN: 'Heaven and earth unite: the image of Peace. Thus the ruler divides and completes the course of heaven and earth.',
    upperTrigram: '坤',
    lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '拔茅茹以其汇，征吉。', textEN: 'When the stalks of茅 are pulled up, the bunch comes with it. Undertakings bring good fortune.', interpretationCN: '连根拔起，一同前进吉利。', interpretationEN: 'Moving together brings good fortune.' },
      { position: 2, textCN: '包荒，用冯河，不遐遗，朋亡，得尚于中行。', textEN: 'Bearing with the uncultured in gentleness, fording the river with resolution, not forgetting the distant in anxiety for the near, seeking counsel from the worthy.', interpretationCN: '包容荒远，中道而行。', interpretationEN: 'Embrace all; seek the middle way.' },
      { position: 3, textCN: '无平不陂，无往不复，艰贞无咎，勿恤其孚，于食有福。', textEN: 'No plain not followed by a slope. No going not followed by a return. He who remains persevering in danger is without blame. Do not complain about this truth. Enjoy the good things you have.', interpretationCN: '没有永远的平坦，守正可免咎。', interpretationEN: 'Nothing lasts forever; steadfastness averts blame.' },
      { position: 4, textCN: '翩翩不富以其邻，不戒以孚。', textEN: 'He flutters down, not boasting of his wealth, together with his neighbor, guileless and sincere.', interpretationCN: '不以财富骄人，与邻同乐。', interpretationEN: 'Do not flaunt wealth; share with neighbors.' },
      { position: 5, textCN: '帝乙归妹，以祉元吉。', textEN: 'The sovereign Yi gave his daughter in marriage. This brought blessing and supreme good fortune.', interpretationCN: '帝乙嫁女，福祉大吉。', interpretationEN: 'Noble unions bring great blessings.' },
      { position: 6, textCN: '城复于隍，勿用师，自邑告命，贞吝。', textEN: 'The wall falls back into the moat. Use no army now. Make your commands known within your own town. Perseverance brings humiliation.', interpretationCN: '城墙倒塌，不宜用兵。', interpretationEN: 'When the structure collapses, do not use force.' },
    ],
    summaryCN: '泰卦象征通泰和平，天地交感，万物亨通。',
    summaryEN: 'Tai symbolizes peace and prosperity. Heaven and earth interact harmoniously.',
  },
  // 第12卦 天地否
  {
    number: 12,
    nameCN: '否',
    nameEN: 'Pi (Standstill)',
    judgmentCN: '否之匪人，不利君子贞，大往小来。',
    judgmentEN: 'Standstill. Evil people do not further the perseverance of the superior man. The great departs, the small approaches.',
    imageCN: '天地不交，否。君子以俭德辟难，不可荣以禄。',
    imageEN: 'Heaven and earth do not unite: the image of Standstill. Thus the superior man falls back upon his inner worth in order to escape the difficulties. He does not permit himself to be honored with revenue.',
    upperTrigram: '乾',
    lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '拔茅茹以其汇，贞吉亨。', textEN: 'When the stalks of茅 are pulled up, the bunch comes with it. Perseverance brings good fortune and success.', interpretationCN: '团结一致，守正得吉。', interpretationEN: 'Unity in perseverance brings fortune.' },
      { position: 2, textCN: '包承，小人吉，大人否亨。', textEN: 'They bear and endure. The inferior person is fortunate. The great person\'s standstill is favorable.', interpretationCN: '包容顺承，小人得志。', interpretationEN: 'The small prosper; the great endure.' },
      { position: 3, textCN: '包羞。', textEN: 'They bear shame.', interpretationCN: '含羞忍辱。', interpretationEN: 'Bearing shame.' },
      { position: 4, textCN: '有命无咎，畴离祉。', textEN: 'He who acts under the order of fate remains without blame. Those of like mind partake of the blessing.', interpretationCN: '顺天命而行，同伴共享福祉。', interpretationEN: 'Acting by fate\'s order brings blessings to allies.' },
      { position: 5, textCN: '休否，大人吉。其亡其亡，系于苞桑。', textEN: 'Standstill comes to an end. The great person is fortunate. It is灭亡! It is灭亡! One clings to the sprouting bush.', interpretationCN: '否极泰来，居安思危。', interpretationEN: 'Standstill ends; remain vigilant.' },
      { position: 6, textCN: '倾否，先否后喜。', textEN: 'The standstill comes to an end. First standstill, then good fortune.', interpretationCN: '否极泰来，先苦后甜。', interpretationEN: 'After hardship comes joy.' },
    ],
    summaryCN: '否卦象征闭塞不通，小人得势，君子退隐。',
    summaryEN: 'Pi symbolizes standstill and stagnation. The worthy retreat while the small advance.',
  },
  // 第13卦 天火同人
  {
    number: 13,
    nameCN: '同人',
    nameEN: 'Tong Ren (Fellowship)',
    judgmentCN: '同人于野，亨。利涉大川，利君子贞。',
    judgmentEN: 'Fellowship with men in the open. Success. It furthers one to cross the great water. The perseverance of the superior man furthers.',
    imageCN: '天与火，同人。君子以类族辨物。',
    imageEN: 'Heaven together with fire: the image of Fellowship. Thus the superior man organizes the clans and makes distinctions between things.',
    upperTrigram: '乾',
    lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '同人于门，无咎。', textEN: 'Fellowship with men at the gate. No blame.', interpretationCN: '在家门口与人交往，无咎。', interpretationEN: 'Fellowship at the threshold brings no blame.' },
      { position: 2, textCN: '同人于宗，吝。', textEN: 'Fellowship with men in the clan. Humiliation.', interpretationCN: '只与同宗交往，格局狭小。', interpretationEN: 'Limiting fellowship to the clan is narrow-minded.' },
      { position: 3, textCN: '伏戎于莽，升其高陵，三岁不兴。', textEN: 'He hides weapons in the thicket. He climbs the high hill in front of it. For three years he does not rise up.', interpretationCN: '暗藏兵器，三年不能得逞。', interpretationEN: 'Hidden aggression fails for years.' },
      { position: 4, textCN: '乘其墉，弗克攻，吉。', textEN: 'He climbs up on his wall; he cannot attack. Good fortune.', interpretationCN: '登上城墙，不攻自破为吉。', interpretationEN: 'Refraining from attack brings fortune.' },
      { position: 5, textCN: '同人先号咷而后笑，大师克相遇。', textEN: 'Men first weep and lament, but afterward they laugh. After great struggles they succeed in meeting.', interpretationCN: '先哭后笑，历经艰辛终相聚。', interpretationEN: 'Tears before laughter; after struggle comes reunion.' },
      { position: 6, textCN: '同人于郊，无悔。', textEN: 'Fellowship with men in the suburbs. No remorse.', interpretationCN: '在郊外与人交往，无悔。', interpretationEN: 'Fellowship in the countryside; no regret.' },
    ],
    summaryCN: '同人卦象征志同道合，强调广泛团结的重要性。',
    summaryEN: 'Tong Ren symbolizes fellowship. Unity with like-minded people brings success.',
  },
  // 第14卦 火天大有
  {
    number: 14,
    nameCN: '大有',
    nameEN: 'Da You (Great Possession)',
    judgmentCN: '元亨。',
    judgmentEN: 'Possession in Great Measure. Supreme success.',
    imageCN: '火在天上，大有。君子以遏恶扬善，顺天休命。',
    imageEN: 'Fire in heaven above: the image of Possession in Great Measure. Thus the superior man curbs evil and promotes good, and thereby obeys the benevolent will of heaven.',
    upperTrigram: '离',
    lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '无交害，匪咎，艰则无咎。', textEN: 'No relationship with what is harmful. This is not a mistake. If difficulties arise, they can be overcome without blame.', interpretationCN: '不涉有害之事，虽艰无咎。', interpretationEN: 'Avoiding harm; difficulties can be overcome.' },
      { position: 2, textCN: '大车以载，有攸往，无咎。', textEN: 'A big wagon for loading. One may undertake something. No blame.', interpretationCN: '大车装载，可以前往。', interpretationEN: 'Well-equipped to proceed; no blame.' },
      { position: 3, textCN: '公用亨于天子，小人弗克。', textEN: 'A prince offers it to the Son of Heaven. A petty man cannot do this.', interpretationCN: '公侯向天子进献，小人不能。', interpretationEN: 'Only the worthy can offer tribute to the sovereign.' },
      { position: 4, textCN: '匪其彭，无咎。', textEN: 'He makes a difference between himself and his neighbor. No blame.', interpretationCN: '不僭越本分，无咎。', interpretationEN: 'Knowing one\'s place averts blame.' },
      { position: 5, textCN: '厥孚交如威如，吉。', textEN: 'He whose truth is accessible, yet dignified, has good fortune.', interpretationCN: '诚信而有威严，吉利。', interpretationEN: 'Sincerity combined with dignity brings fortune.' },
      { position: 6, textCN: '自天祐之，吉无不利。', textEN: 'He is blessed by heaven. Good fortune. Nothing that does not further.', interpretationCN: '天降福祐，无所不利。', interpretationEN: 'Heaven\'s blessing brings universal advantage.' },
    ],
    summaryCN: '大有卦象征大有收获，事业昌盛，应遏恶扬善。',
    summaryEN: 'Da You symbolizes great possession. Use prosperity to promote good and curb evil.',
  },
  // 第15卦 地山谦
  {
    number: 15,
    nameCN: '谦',
    nameEN: 'Qian (Modesty)',
    judgmentCN: '亨，君子有终。',
    judgmentEN: 'Modesty creates success. The superior man carries things through.',
    imageCN: '地中有山，谦。君子以裒多益寡，称物平施。',
    imageEN: 'Within the earth, a mountain: the image of Modesty. Thus the superior man reduces what is too much and augments what is insufficient. He weighs things and makes them equal.',
    upperTrigram: '坤',
    lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '谦谦君子，用涉大川，吉。', textEN: 'A superior man of modesty and humility carries things through. It is favorable to cross the great water. Good fortune.', interpretationCN: '谦而又谦，可涉险境。', interpretationEN: 'Great humility enables one to overcome great obstacles.' },
      { position: 2, textCN: '鸣谦，贞吉。', textEN: 'Modesty that comes to expression. Perseverance brings good fortune.', interpretationCN: '谦德彰显，守正得吉。', interpretationEN: 'Expressed modesty brings fortune.' },
      { position: 3, textCN: '劳谦君子，有终吉。', textEN: 'A superior man of modesty and merit carries things through. Good fortune.', interpretationCN: '辛劳而谦逊，终获吉祥。', interpretationEN: 'Diligent modesty leads to good fortune.' },
      { position: 4, textCN: '无不利，撝谦。', textEN: 'Nothing that does not further modesty in movement.', interpretationCN: '发挥谦德，无所不利。', interpretationEN: 'All movements benefit from modesty.' },
      { position: 5, textCN: '不富以其邻，利用侵伐，无不利。', textEN: 'Does not boast of riches with his neighbor. It is advantageous to attack by force. Nothing that does not further.', interpretationCN: '不以富邻自居，征讨有利。', interpretationEN: 'Not flaunting wealth; forceful action is justified.' },
      { position: 6, textCN: '鸣谦，利用行师征邑国。', textEN: 'Modesty that comes to expression. It is favorable to march against cities and states.', interpretationCN: '谦德远播，可以征讨。', interpretationEN: 'Manifest modesty empowers righteous campaigns.' },
    ],
    summaryCN: '谦卦象征谦逊，是易经中唯一六爻皆吉的卦。',
    summaryEN: 'Qian symbolizes modesty—the only hexagram where all six lines are favorable.',
  },
  // 第16卦 雷地豫
  {
    number: 16,
    nameCN: '豫',
    nameEN: 'Yu (Enthusiasm)',
    judgmentCN: '利建侯行师。',
    judgmentEN: 'Enthusiasm. It furthers one to install helpers and to set armies marching.',
    imageCN: '雷出地奋，豫。先王以作乐崇德。',
    imageEN: 'Thunder comes forth from the earth, resounding: the image of Enthusiasm. The ancient kings made music in order to honor merit.',
    upperTrigram: '震',
    lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '鸣豫，凶。', textEN: 'Enthusiasm that self-manifests brings misfortune.', interpretationCN: '自鸣得意，招致凶险。', interpretationEN: 'Boastful enthusiasm invites misfortune.' },
      { position: 2, textCN: '介于石，不终日，贞吉。', textEN: 'Firm as a rock. Not a whole day. Perseverance brings good fortune.', interpretationCN: '坚如磐石，守正得吉。', interpretationEN: 'Firmness and quickness bring fortune.' },
      { position: 3, textCN: '盱豫悔，迟有悔。', textEN: 'Enthusiasm that looks upward creates remorse. Hesitation brings remorse.', interpretationCN: '仰望他人而后悔，迟疑生悔。', interpretationEN: 'Looking up to others with envy brings regret.' },
      { position: 4, textCN: '由豫，大有得，勿疑。朋盍簪。', textEN: 'The source of enthusiasm. Great gain. Do not doubt. Gather friends like hairpins.', interpretationCN: '众望所归，大有收获。', interpretationEN: 'Being the source of enthusiasm brings great gains.' },
      { position: 5, textCN: '贞疾，恒不死。', textEN: 'Perseverance in illness. One does not die of it.', interpretationCN: '久病不死，坚守正道。', interpretationEN: 'Persistent illness but enduring life.' },
      { position: 6, textCN: '冥豫，成有渝，无咎。', textEN: 'Dark enthusiasm at the end. After completion, change. No blame.', interpretationCN: '沉溺安乐后能改过，无咎。', interpretationEN: 'Blind enthusiasm; change after completion averts blame.' },
    ],
    summaryCN: '豫卦象征欢乐与热情，但需警惕过度安逸。',
    summaryEN: 'Yu symbolizes enthusiasm. Beware of excessive comfort and complacency.',
  },
  // 第17卦 泽雷随
  {
    number: 17,
    nameCN: '随',
    nameEN: 'Sui (Following)',
    judgmentCN: '元亨利贞，无咎。',
    judgmentEN: 'Following has supreme success. Perseverance furthers. No blame.',
    imageCN: '泽中有雷，随。君子以向晦入宴息。',
    imageEN: 'Thunder in the middle of the lake: the image of Following. Thus at nightfall the superior man goes to rest and recuperate.',
    upperTrigram: '兑',
    lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '官有渝，贞吉。出门交有功。', textEN: 'The standard changes. Perseverance brings good fortune. To go out of the door in company produces deeds of merit.', interpretationCN: '变通守正，出门交往有功。', interpretationEN: 'Change standards; going out brings achievement.' },
      { position: 2, textCN: '系小子，失丈夫。', textEN: 'If one clings to the little boy, one loses the strong man.', interpretationCN: '依附小人，失去君子。', interpretationEN: 'Clinging to the small means losing the great.' },
      { position: 3, textCN: '系丈夫，失小子，随有求得，利居贞。', textEN: 'If one clings to the strong man, one loses the little boy. Through following one finds what one seeks. It is advantageous to remain persevering.', interpretationCN: '依附君子，有所求得。', interpretationEN: 'Clinging to the great brings what is sought.' },
      { position: 4, textCN: '随有获，贞凶。有孚在道，以明，何咎。', textEN: 'Following leads to gain. Perseverance brings misfortune. If you are sincere in following, and illuminate the way, what blame can there be?', interpretationCN: '虽有收获，须诚信光明。', interpretationEN: 'Gains through following; sincerity illuminates the way.' },
      { position: 5, textCN: '孚于嘉，吉。', textEN: 'Sincere devotion to the good brings good fortune.', interpretationCN: '诚信追随美善，吉利。', interpretationEN: 'Devotion to the good brings fortune.' },
      { position: 6, textCN: '拘系之，乃从维之，王用亨于西山。', textEN: 'He is bound and held fast. The king makes offerings on the western mountain.', interpretationCN: '紧密追随，王祭于西山。', interpretationEN: 'Bound in devotion; the king makes offerings.' },
    ],
    summaryCN: '随卦象征随从与适应，强调灵活应变的智慧。',
    summaryEN: 'Sui symbolizes following and adaptation. Flexibility and timing are key.',
  },
  // 第18卦 山风蛊
  {
    number: 18,
    nameCN: '蛊',
    nameEN: 'Gu (Work on What Has Been Spoiled)',
    judgmentCN: '元亨，利涉大川。先甲三日，后甲三日。',
    judgmentEN: 'Work on What Has Been Spoiled has supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days.',
    imageCN: '山下有风，蛊。君子以振民育德。',
    imageEN: 'The wind blows low on the mountain: the image of Decay. The superior man stirs up the people and strengthens their spirit.',
    upperTrigram: '艮',
    lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '干父之蛊，有子，考无咎，厉终吉。', textEN: 'Setting right what has been spoiled by the father. If there is a son, no blame rests upon the departed father. Danger. In the end good fortune.', interpretationCN: '继承父业，终获吉祥。', interpretationEN: 'Continuing the father\'s work; eventual fortune.' },
      { position: 2, textCN: '干母之蛊，不可贞。', textEN: 'Setting right what has been spoiled by the mother. One should not be too persevering.', interpretationCN: '矫正母亲的过失，不可过于固执。', interpretationEN: 'Correcting the mother\'s errors; do not be rigid.' },
      { position: 3, textCN: '干父之蛊，小有悔，无大咎。', textEN: 'Setting right what has been spoiled by the father. There will be little remorse, no great blame.', interpretationCN: '矫正父辈过失，虽有小悔无大咎。', interpretationEN: 'Correcting the father\'s mistakes; minor regret, no great blame.' },
      { position: 4, textCN: '裕父之蛊，往见吝。', textEN: 'Tolerating what has been spoiled by the father. Going forward leads to humiliation.', interpretationCN: '宽容父辈过失，前进有吝。', interpretationEN: 'Tolerating the father\'s errors leads to shame.' },
      { position: 5, textCN: '干父之蛊，用誉。', textEN: 'Setting right what has been spoiled by the father. One obtains praise.', interpretationCN: '矫正父辈过失，获得赞誉。', interpretationEN: 'Correcting the father\'s mistakes wins praise.' },
      { position: 6, textCN: '不事王侯，高尚其事。', textEN: 'He does not serve kings and lords, sets himself above such service.', interpretationCN: '不事权贵，高洁自守。', interpretationEN: 'Not serving lords; maintaining noble independence.' },
    ],
    summaryCN: '蛊卦象征积弊与整治，需要革除旧弊，开创新局。',
    summaryEN: 'Gu symbolizes decay and renewal. Corrupt conditions must be reformed.',
  },
  // 第19卦 地泽临
  {
    number: 19,
    nameCN: '临',
    nameEN: 'Lin (Approach)',
    judgmentCN: '元亨利贞。至于八月有凶。',
    judgmentEN: 'Approach has supreme success, furthering through perseverance. When the eighth month comes, there will be misfortune.',
    imageCN: '泽上有地，临。君子以教思无穷，容保民无疆。',
    imageEN: 'The earth above the lake: the image of Approach. Thus the superior man is inexhaustible in his will to teach and without limits in his tolerance and protection of the people.',
    upperTrigram: '坤',
    lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '咸临，贞吉。', textEN: 'Joint approach. Perseverance brings good fortune.', interpretationCN: '感召而来，守正得吉。', interpretationEN: 'Approaching together; steadfastness brings fortune.' },
      { position: 2, textCN: '咸临，吉，无不利。', textEN: 'Joint approach. Good fortune. Everything furthers.', interpretationCN: '感召而来，吉利，无所不利。', interpretationEN: 'Joint approach brings universal benefit.' },
      { position: 3, textCN: '甘临，无攸利，既忧之，无咎。', textEN: 'Comfortable approach brings nothing that furthers. If one is induced to grieve over it, one becomes free of blame.', interpretationCN: '甘言媚人无利，忧虑可免咎。', interpretationEN: 'Sweet talk profits nothing; worry averts blame.' },
      { position: 4, textCN: '至临，无咎。', textEN: 'Complete approach. No blame.', interpretationCN: '亲临现场，无咎。', interpretationEN: 'Arriving in person; no blame.' },
      { position: 5, textCN: '知临，大君之宜，吉。', textEN: 'Wise approach. This is the right course for a great prince. Good fortune.', interpretationCN: '明智地亲临，吉利。', interpretationEN: 'Wise approach suits a great ruler.' },
      { position: 6, textCN: '敦临，吉，无咎。', textEN: 'Generous approach. Good fortune. No blame.', interpretationCN: '敦厚亲临，吉利无咎。', interpretationEN: 'Generous approach brings fortune and no blame.' },
    ],
    summaryCN: '临卦象征临近与领导，强调领导者应亲近民众。',
    summaryEN: 'Lin symbolizes approach and leadership. Leaders should be close to the people.',
  },
  // 第20卦 风地观
  {
    number: 20,
    nameCN: '观',
    nameEN: 'Guan (Contemplation)',
    judgmentCN: '盥而不荐，有孚颙若。',
    judgmentEN: 'Contemplation. The ablution has been made, but not yet the offering. Full of trust they look up to him.',
    imageCN: '风行地上，观。先王以省方观民设教。',
    imageEN: 'The wind blows over the earth: the image of Contemplation. Thus the kings of old visited the regions of the world, contemplated the people, and gave them instruction.',
    upperTrigram: '巽',
    lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '童观，小人无咎，君子吝。', textEN: 'Childlike contemplation. For the inferior man, no blame. For the superior man, humiliation.', interpretationCN: '幼稚的观察，小人无咎君子吝。', interpretationEN: 'Naive observation; acceptable for the small, shameful for the great.' },
      { position: 2, textCN: '窥观，利女贞。', textEN: 'Contemplation through the crack of the door. Furthering for the perseverance of a woman.', interpretationCN: '窥视观察，利于女子守正。', interpretationEN: 'Peeping through the door; suitable for feminine modesty.' },
      { position: 3, textCN: '观我生，进退。', textEN: 'Contemplation of my life enables me to choose between advance and retreat.', interpretationCN: '审视自身，决定进退。', interpretationEN: 'Self-contemplation guides advance and retreat.' },
      { position: 4, textCN: '观国之光，利用宾于王。', textEN: 'Contemplation of the light of the kingdom. It furthers one to be a guest of the king.', interpretationCN: '观察国家光辉，宜作王者宾客。', interpretationEN: 'Contemplating the kingdom\'s glory; serve the king.' },
      { position: 5, textCN: '观我生，君子无咎。', textEN: 'Contemplation of my life. The superior man is without blame.', interpretationCN: '审视自身行为，君子无咎。', interpretationEN: 'Self-examination leaves the superior man blameless.' },
      { position: 6, textCN: '观其生，君子无咎。', textEN: 'Contemplation of his life. The superior man is without blame.', interpretationCN: '观察他人行为，君子无咎。', interpretationEN: 'Observing others\' conduct; the superior man remains blameless.' },
    ],
    summaryCN: '观卦象征观察与审视，强调观察事物的本质。',
    summaryEN: 'Guan symbolizes contemplation. Look beyond the surface to understand the essence.',
  },
  // 第21-40卦
  {
    number: 21, nameCN: '噬嗑', nameEN: 'Shi Ke (Biting Through)',
    judgmentCN: '亨，利用狱。', judgmentEN: 'Biting through has success. It is favorable to let justice be administered.',
    imageCN: '雷电噬嗑，先王以明罚敕法。', imageEN: 'Thunder and lightning: the image of Biting Through. The ancient kings made their punishments clear and enforced the laws.',
    upperTrigram: '离', lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '屦校灭趾，无咎。', textEN: 'His feet are in stocks so that his toes are cut off. No blame.', interpretationCN: '小惩大诫，无咎。', interpretationEN: 'Minor punishment prevents greater offenses.' },
      { position: 2, textCN: '噬肤灭鼻，无咎。', textEN: 'Bites through tender skin so that his nose disappears. No blame.', interpretationCN: '刑罚稍重，但无咎。', interpretationEN: 'Harsh but justified punishment.' },
      { position: 3, textCN: '噬腊肉，遇毒。小吝，无咎。', textEN: 'Bites on dried meat and meets with something poisonous. Slight humiliation, but no blame.', interpretationCN: '遇到困难，小吝无咎。', interpretationEN: 'Encountering difficulties; minor shame but no blame.' },
      { position: 4, textCN: '噬干胏，得金矢，利艰贞吉。', textEN: 'Bites on dried gristly meat. Receives a metal arrow. It is favorable to be persevering in difficulty. Good fortune.', interpretationCN: '艰难中坚守正道得吉。', interpretationEN: 'Perseverance through difficulty brings fortune.' },
      { position: 5, textCN: '噬干肉，得黄金，贞厉无咎。', textEN: 'Bites on dried lean meat. Receives yellow gold. Perseverance brings danger, but no blame.', interpretationCN: '守正虽危，终无咎。', interpretationEN: 'Perseverance is dangerous but blameless.' },
      { position: 6, textCN: '何校灭耳，凶。', textEN: 'His neck is in a wooden cangue so that his ears disappear. Misfortune.', interpretationCN: '不听劝告，终致凶险。', interpretationEN: 'Ignoring warnings leads to misfortune.' },
    ],
    summaryCN: '噬嗑卦象征刑罚与决断，强调公正执法的必要性。',
    summaryEN: 'Shi Ke symbolizes justice and decisive action. Fair enforcement of laws is essential.',
  },
  {
    number: 22, nameCN: '贲', nameEN: 'Bi (Grace)',
    judgmentCN: '亨，小利有攸往。', judgmentEN: 'Grace has success. In small matters it is favorable to undertake something.',
    imageCN: '山下有火，贲。君子以明庶政，无敢折狱。', imageEN: 'Fire at the foot of the mountain: the image of Grace. Thus the superior man seeks to clarify current affairs but dare not decide lawsuits.',
    upperTrigram: '艮', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '贲其趾，舍车而徒。', textEN: 'He adorns his toes, leaves the carriage, and walks.', interpretationCN: '舍弃华丽，脚踏实地。', interpretationEN: 'Choosing simplicity over grandeur.' },
      { position: 2, textCN: '贲其须。', textEN: 'He adorns his beard.', interpretationCN: '修饰外表。', interpretationEN: 'Adorning the outward appearance.' },
      { position: 3, textCN: '贲如濡如，永贞吉。', textEN: 'Graceful and moist. Perseverance brings good fortune.', interpretationCN: '润泽有光，守正得吉。', interpretationEN: 'Radiant grace; steadfastness brings fortune.' },
      { position: 4, textCN: '贲如皤如，白马翰如，匪寇婚媾。', textEN: 'Grace or simplicity? A white horse comes as if on wings. He is not a robber, he will woo at the right time.', interpretationCN: '朴素之美，求婚而来。', interpretationEN: 'Simple elegance; the suitor arrives at the right time.' },
      { position: 5, textCN: '贲于丘园，束帛戋戋，吝，终吉。', textEN: 'Grace in the hills and gardens. The roll of silk is meager. Humiliation, but in the end good fortune.', interpretationCN: '简朴之美，虽吝终吉。', interpretationEN: 'Simple adornment; initial shame ends in fortune.' },
      { position: 6, textCN: '白贲，无咎。', textEN: 'Simple grace. No blame.', interpretationCN: '素朴之美，无咎。', interpretationEN: 'Pure simplicity; no blame.' },
    ],
    summaryCN: '贲卦象征文饰与修饰，强调内在与外在的和谐。',
    summaryEN: 'Bi symbolizes grace and adornment. Balance inner substance with outer form.',
  },
  {
    number: 23, nameCN: '剥', nameEN: 'Bo (Splitting Apart)',
    judgmentCN: '不利有攸往。', judgmentEN: 'Splitting Apart. It is not favorable to go anywhere.',
    imageCN: '山附于地，剥。上以厚下安宅。', imageEN: 'The mountain rests on the earth: the image of Splitting Apart. Those above ensure stable homes by being generous to those below.',
    upperTrigram: '艮', lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '剥床以足，蔑贞凶。', textEN: 'The legs of the bed are split. The perseverance of the inferior person brings misfortune.', interpretationCN: '基础受损，凶险。', interpretationEN: 'Foundation damaged; misfortune for the unworthy.' },
      { position: 2, textCN: '剥床以辨，蔑贞凶。', textEN: 'The bed is split at the edge. The perseverance of the inferior person brings misfortune.', interpretationCN: '边缘崩坏，凶险。', interpretationEN: 'Edges crumbling; misfortune.' },
      { position: 3, textCN: '剥之，无咎。', textEN: 'He splits with them. No blame.', interpretationCN: '脱离腐朽，无咎。', interpretationEN: 'Separating from decay; no blame.' },
      { position: 4, textCN: '剥床以肤，凶。', textEN: 'The bed is split up to the skin. Misfortune.', interpretationCN: '灾祸临身，凶险。', interpretationEN: 'Harm reaches the person; misfortune.' },
      { position: 5, textCN: '贯鱼，以宫人宠，无不利。', textEN: 'A shoal of fish. Favor through the court ladies. Everything furthers.', interpretationCN: '以柔顺之道，无所不利。', interpretationEN: 'Gentle approach brings universal benefit.' },
      { position: 6, textCN: '硕果不食，君子得舆，小人剥庐。', textEN: 'There is a large fruit uneaten. The superior man gets a carriage. The inferior man splits his hut.', interpretationCN: '硕果仅存，君子得位。', interpretationEN: 'The great fruit remains; the worthy succeed.' },
    ],
    summaryCN: '剥卦象征剥落与衰败，提醒人们居安思危。',
    summaryEN: 'Bo symbolizes decay and splitting apart. Be vigilant in times of decline.',
  },
  {
    number: 24, nameCN: '复', nameEN: 'Fu (Return)',
    judgmentCN: '亨。出入无疾，朋来无咎。反复其道，七日来复。利有攸往。', judgmentEN: 'Return. Success. Going out and coming in without error. Friends come without blame. To and fro goes the way. On the seventh day comes return. It furthers one to have somewhere to go.',
    imageCN: '雷在地中，复。先王以至日闭关。', imageEN: 'Thunder within the earth: the image of Return. Thus the kings of old closed the passes at the time of solstice.',
    upperTrigram: '坤', lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '不远复，无祗悔，元吉。', textEN: 'Return from a short distance. No need for remorse. Supreme good fortune.', interpretationCN: '及时回归，大吉大利。', interpretationEN: 'Quick return; no regret, supreme fortune.' },
      { position: 2, textCN: '休复，吉。', textEN: 'Quiet return. Good fortune.', interpretationCN: '安然回归，吉利。', interpretationEN: 'Peaceful return brings good fortune.' },
      { position: 3, textCN: '频复，厉，无咎。', textEN: 'Frequent return. Danger. No blame.', interpretationCN: '屡次回归，虽危无咎。', interpretationEN: 'Repeated return; dangerous but blameless.' },
      { position: 4, textCN: '中行独复。', textEN: 'Walking in the center, he returns alone.', interpretationCN: '中道而行，独自回归。', interpretationEN: 'Walking the middle path; returning alone.' },
      { position: 5, textCN: '敦复，无悔。', textEN: 'Honest return. No remorse.', interpretationCN: '敦厚回归，无悔。', interpretationEN: 'Sincere return; no regret.' },
      { position: 6, textCN: '迷复，凶，有灾眚。用行师，终有大败。以其国君凶，至于十年不克征。', textEN: 'Lost return. Misfortune. Misfortune from within and without. If armies are set marching in this way, one will in the end suffer a great defeat. It bodes ill for the ruler of the state. For ten years it will not be possible to attack again.', interpretationCN: '迷而不返，大凶之兆。', interpretationEN: 'Failing to return; great misfortune.' },
    ],
    summaryCN: '复卦象征回归与复兴，一阳复始，万象更新。',
    summaryEN: 'Fu symbolizes return and renewal. The turning point brings new beginnings.',
  },
  {
    number: 25, nameCN: '无妄', nameEN: 'Wu Wang (Innocence)',
    judgmentCN: '元亨利贞。其匪正有眚，不利有攸往。', judgmentEN: 'Innocence. Supreme success. Through perseverance the man who is not upright meets with misfortune. It does not further one to go anywhere.',
    imageCN: '天下雷行，物与无妄。先王以茂对时育万物。', imageEN: 'Thunder rolls beneath heaven: the image of Innocence. The ancient kings enriched and nourished the world in accordance with the seasons.',
    upperTrigram: '乾', lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '无妄，往吉。', textEN: 'Innocent behavior brings good fortune.', interpretationCN: '纯真前行，吉利。', interpretationEN: 'Acting innocently brings good fortune.' },
      { position: 2, textCN: '不耕获，不菑畲，则利有攸往。', textEN: 'If one does not plow in order to reap, nor clear land in order to cultivate, then it furthers one to go somewhere.', interpretationCN: '不计收获，只管耕耘。', interpretationEN: 'Act without expectation of reward.' },
      { position: 3, textCN: '无妄之灾，或系之牛，行人之得，邑人之灾。', textEN: 'Undeserved misfortune. The cow that was tethered is stolen by the passerby. The people of the town suffer misfortune.', interpretationCN: '无妄之灾，飞来横祸。', interpretationEN: 'Undeserved calamity strikes.' },
      { position: 4, textCN: '可贞，无咎。', textEN: 'One can be persevering. No blame.', interpretationCN: '可以守正，无咎。', interpretationEN: 'Perseverance is possible; no blame.' },
      { position: 5, textCN: '无妄之疾，勿药有喜。', textEN: 'Use no medicine for an innocent illness. There will be joy.', interpretationCN: '无妄之疾，不药而愈。', interpretationEN: 'Innocent illness needs no medicine; joy follows.' },
      { position: 6, textCN: '无妄，行有眚，无攸利。', textEN: 'Innocent action brings misfortune. Nothing furthers.', interpretationCN: '盲目行动，无利可图。', interpretationEN: 'Acting blindly leads to misfortune.' },
    ],
    summaryCN: '无妄卦象征纯真无邪，强调顺应天道，不妄为。',
    summaryEN: 'Wu Wang symbolizes innocence. Follow the natural way; do not act rashly.',
  },
  {
    number: 26, nameCN: '大畜', nameEN: 'Da Xu (The Taming Power of the Great)',
    judgmentCN: '利贞，不家食吉，利涉大川。', judgmentEN: 'The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune. It furthers one to cross the great water.',
    imageCN: '天在山中，大畜。君子以多识前言往行，以畜其德。', imageEN: 'Heaven within the mountain: the image of The Taming Power of the Great. Thus the superior man acquaints himself with the words and deeds of the past to strengthen his character.',
    upperTrigram: '艮', lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '有厉，利已。', textEN: 'Danger. It is favorable to stop.', interpretationCN: '有危险，宜止住。', interpretationEN: 'Danger; it is wise to halt.' },
      { position: 2, textCN: '舆说辐。', textEN: 'The axletrees are taken from the wagon.', interpretationCN: '车轴脱落，不能前进。', interpretationEN: 'The wagon cannot move forward.' },
      { position: 3, textCN: '良马逐，利艰贞，曰闲舆卫，利有攸往。', textEN: 'A good horse that follows others. Awareness of danger, developing the ability to guard against it. It furthers one to have somewhere to go.', interpretationCN: '良马追逐，利于艰难中守正。', interpretationEN: 'Good horses race; perseverance in difficulty furthers.' },
      { position: 4, textCN: '童牛之牿，元吉。', textEN: 'The headboard of a young bull. Supreme good fortune.', interpretationCN: '牛犊戴枷，防患未然大吉。', interpretationEN: 'Preventing the young bull\'s horns; supreme fortune.' },
      { position: 5, textCN: '豶豕之牙，吉。', textEN: 'The tusks of a castrated boar. Good fortune.', interpretationCN: '阉猪之牙，去除危害吉利。', interpretationEN: 'Removing the threat; good fortune.' },
      { position: 6, textCN: '何天之衢，亨。', textEN: 'The path to heaven. Success.', interpretationCN: '通天大道，亨通。', interpretationEN: 'The path to heaven; success.' },
    ],
    summaryCN: '大畜卦象征大积蓄，积蓄力量，等待时机。',
    summaryEN: 'Da Xu symbolizes great accumulation. Store up strength and wait for the right time.',
  },
  {
    number: 27, nameCN: '颐', nameEN: 'Yi (The Corners of the Mouth)',
    judgmentCN: '贞吉。观颐，自求口实。', judgmentEN: 'The Corners of the Mouth. Perseverance brings good fortune. Observe the jaws and seek to nourish yourself.',
    imageCN: '山下有雷，颐。君子以慎言语，节饮食。', imageEN: 'Thunder at the foot of the mountain: the image of Nourishment. The superior man is careful with his words and moderate in eating and drinking.',
    upperTrigram: '艮', lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '舍尔灵龟，观我朵颐，凶。', textEN: 'You let your magic tortoise fall, and look at me with the corners of your mouth dropping. Misfortune.', interpretationCN: '放弃灵龟，垂涎他人，凶。', interpretationEN: 'Abandoning wisdom for greed; misfortune.' },
      { position: 2, textCN: '颠颐，拂经于丘颐，征凶。', textEN: 'Turning to the summit for nourishment. Going further brings misfortune.', interpretationCN: '颠倒求养，征行有凶。', interpretationEN: 'Seeking nourishment wrongly; misfortune.' },
      { position: 3, textCN: '拂颐，贞凶，十年勿用，无攸利。', textEN: 'Turning away from nourishment. Perseverance brings misfortune. Do not act thus for ten years. Nothing furthers.', interpretationCN: '违背养生之道，十年无利。', interpretationEN: 'Violating proper nourishment; ten years of futility.' },
      { position: 4, textCN: '颠颐吉，虎视眈眈，其欲逐逐，无咎。', textEN: 'Turning to the summit for nourishment brings good fortune. Staring like a tiger with insistent desire. No blame.', interpretationCN: '居上养下，如虎视眈眈无咎。', interpretationEN: 'Nourishing from above; tiger-like vigilance, no blame.' },
      { position: 5, textCN: '拂经，居贞吉，不可涉大川。', textEN: 'Turning from the norm. Remaining persevering brings good fortune. One should not cross the great water.', interpretationCN: '违背常道，安居守正吉利。', interpretationEN: 'Deviating from norms; staying steadfast brings fortune.' },
      { position: 6, textCN: '由颐，厉吉，利涉大川。', textEN: 'The source of nourishment. Danger brings good fortune. It furthers one to cross the great water.', interpretationCN: '滋养之源，虽危终吉。', interpretationEN: 'The source of nourishment; danger leads to fortune.' },
    ],
    summaryCN: '颐卦象征颐养，强调言语谨慎、饮食有节。',
    summaryEN: 'Yi symbolizes nourishment. Be careful with words and moderate in consumption.',
  },
  {
    number: 28, nameCN: '大过', nameEN: 'Da Guo (Preponderance of the Great)',
    judgmentCN: '栋桡，利有攸往，亨。', judgmentEN: 'Preponderance of the Great. The ridgepole sags to the breaking point. It furthers one to have somewhere to go. Success.',
    imageCN: '泽灭木，大过。君子以独立不惧，遁世无闷。', imageEN: 'The lake rises above the trees: the image of Preponderance of the Great. The superior man stands alone without fear and withdraws from the world without regret.',
    upperTrigram: '兑', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '藉用白茅，无咎。', textEN: 'To spread white rushes underneath. No blame.', interpretationCN: '以白茅垫底，谨慎无咎。', interpretationEN: 'Spreading white rushes; caution brings no blame.' },
      { position: 2, textCN: '枯杨生稊，老夫得其女妻，无不利。', textEN: 'A dry poplar sprouts at the root. An older man takes a young wife. Everything furthers.', interpretationCN: '枯木逢春，老少配无不利。', interpretationEN: 'New life from old; all things benefit.' },
      { position: 3, textCN: '栋桡，凶。', textEN: 'The ridgepole sags. Misfortune.', interpretationCN: '栋梁弯曲，凶险。', interpretationEN: 'The beam bends; misfortune.' },
      { position: 4, textCN: '栋隆，吉。有它吝。', textEN: 'The ridgepole is braced. Good fortune. If there are ulterior motives, humiliation.', interpretationCN: '栋梁加固，吉利。', interpretationEN: 'The beam is reinforced; good fortune.' },
      { position: 5, textCN: '枯杨生华，老妇得其士夫，无咎无誉。', textEN: 'A dry poplar blossoms. An older woman takes a young husband. No blame, no praise.', interpretationCN: '枯木开花，无咎无誉。', interpretationEN: 'Late bloom; neither blame nor praise.' },
      { position: 6, textCN: '过涉灭顶，凶，无咎。', textEN: 'One must wade through the flood. The water rises above the head. Misfortune, but no blame.', interpretationCN: '涉水灭顶，虽凶无咎。', interpretationEN: 'Crossing deep water; misfortune but no blame.' },
    ],
    summaryCN: '大过卦象征过度，事物发展到极端需要非常之策。',
    summaryEN: 'Da Guo symbolizes excess. Extreme situations require extraordinary measures.',
  },
  {
    number: 29, nameCN: '坎', nameEN: 'Kan (The Abysmal Water)',
    judgmentCN: '习坎，有孚，维心亨，行有尚。', judgmentEN: 'The Abysmal repeated. If you are sincere, you have success in your heart. Whatever you do succeeds.',
    imageCN: '水洊至，习坎。君子以常德行，习教事。', imageEN: 'Water flows on uninterruptedly and reaches its goal: the image of the Abysmal repeated. The superior man walks in lasting virtue and carries on the business of teaching.',
    upperTrigram: '坎', lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '习坎，入于坎窞，凶。', textEN: 'In repeated danger, one falls into a pit. Misfortune.', interpretationCN: '重重险陷，凶险。', interpretationEN: 'In deep danger; misfortune.' },
      { position: 2, textCN: '坎有险，求小得。', textEN: 'The pit is dangerous. One should strive to attain small things.', interpretationCN: '虽有险难，可小有所得。', interpretationEN: 'Danger in the pit; seek small gains.' },
      { position: 3, textCN: '来之坎坎，险且枕，入于坎窞，勿用。', textEN: 'Danger upon danger. To go forward or back is equally dangerous. One falls into a pit. Do not act.', interpretationCN: '进退皆险，不可妄动。', interpretationEN: 'Danger everywhere; do not act.' },
      { position: 4, textCN: '樽酒簋贰，用缶，纳约自牖，终无咎。', textEN: 'A jug of wine, a bowl of rice with it. Earthen vessels simply handed through the window. In the end, no blame.', interpretationCN: '简朴真诚，终无咎。', interpretationEN: 'Simple sincerity through the window; no blame.' },
      { position: 5, textCN: '坎不盈，祗既平，无咎。', textEN: 'The pit is not yet filled up to overflowing. To be content brings no blame.', interpretationCN: '险难未满，知足无咎。', interpretationEN: 'The pit is not overflowing; contentment averts blame.' },
      { position: 6, textCN: '系用徽纆，寘于丛棘，三岁不得，凶。', textEN: 'Bound with cords and ropes, shut in between thorn-hedged walls. For three years one does not find the way. Misfortune.', interpretationCN: '被缚于荆棘，三年不能脱困，凶。', interpretationEN: 'Bound and trapped; three years of misfortune.' },
    ],
    summaryCN: '坎卦象征重重险难，告诫人们面对困难要诚信坚定。',
    summaryEN: 'Kan symbolizes repeated danger. Face difficulties with sincerity and determination.',
  },
  {
    number: 30, nameCN: '离', nameEN: 'Li (The Clinging Fire)',
    judgmentCN: '利贞，亨。畜牝牛，吉。', judgmentEN: 'The Clinging. Perseverance furthers. It is favorable to acquire a cow. Good fortune.',
    imageCN: '明两作，离。大人以继明照于四方。', imageEN: 'Fire comes repeatedly: the image of the Clinging. The great man continues the succession of light and illuminates the four quarters of the world.',
    upperTrigram: '离', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '履错然，敬之无咎。', textEN: 'The footprints run crisscross. If one is seriously intent, no blame.', interpretationCN: '谨慎恭敬，无咎。', interpretationEN: 'Treading carefully; respect averts blame.' },
      { position: 2, textCN: '黄离，元吉。', textEN: 'Yellow light. Supreme good fortune.', interpretationCN: '中正之德，大吉。', interpretationEN: 'Central virtue; supreme fortune.' },
      { position: 3, textCN: '日昃之离，不鼓缶而歌，则大耋之嗟，凶。', textEN: 'In the sunset one beats the pot and sings. If one does not do this, the great man\'s lament. Misfortune.', interpretationCN: '夕阳西下，不及时行乐则凶。', interpretationEN: 'At sunset; failing to enjoy brings misfortune.' },
      { position: 4, textCN: '突如其来如，焚如，死如，弃如。', textEN: 'Its coming is sudden. It flames up, dies, is thrown away.', interpretationCN: '突然而来，如焚如死。', interpretationEN: 'Sudden arrival; burning, dying, discarded.' },
      { position: 5, textCN: '出涕沱若，戚嗟若，吉。', textEN: 'Tears in floods, sighing and lamenting. Good fortune.', interpretationCN: '涕泪纵横，悲叹终吉。', interpretationEN: 'Floods of tears; lamenting brings fortune.' },
      { position: 6, textCN: '王用出征，有嘉折首，获匪其丑，无咎。', textEN: 'The king uses him to march forth and chastise. It is best to kill the leaders and capture the followers. No blame.', interpretationCN: '出征讨伐，惩治首恶无咎。', interpretationEN: 'Marching forth to punish; capturing the guilty, no blame.' },
    ],
    summaryCN: '离卦象征光明与依附，强调附丽于正道。',
    summaryEN: 'Li symbolizes clinging and brightness. Attach yourself to what is right.',
  },
  // 第31-40卦
  {
    number: 31, nameCN: '咸', nameEN: 'Xian (Influence)',
    judgmentCN: '亨，利贞，取女吉。', judgmentEN: 'Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune.',
    imageCN: '山上有泽，咸。君子以虚受人。', imageEN: 'A lake on the mountain: the image of Influence. Thus the superior man encourages people to approach him by his readiness to receive them.',
    upperTrigram: '兑', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '咸其拇。', textEN: 'Influence in the big toe.', interpretationCN: '感应在脚趾。', interpretationEN: 'Influence at the toes.' },
      { position: 2, textCN: '咸其腓，凶，居吉。', textEN: 'Influence in the calves. Misfortune. Remaining brings good fortune.', interpretationCN: '感应在小腿，安居吉利。', interpretationEN: 'Influence in the calves; staying put brings fortune.' },
      { position: 3, textCN: '咸其股，执其随，往吝。', textEN: 'Influence in the thighs. Holding to what follows. Going forward brings humiliation.', interpretationCN: '感应在大腿，盲从有吝。', interpretationEN: 'Influence in the thighs; following blindly brings shame.' },
      { position: 4, textCN: '贞吉悔亡，憧憧往来，朋从尔思。', textEN: 'Perseverance brings good fortune and remembrance of all that is good. If you are sincere, your friends will follow your thoughts.', interpretationCN: '守正得吉，朋友追随。', interpretationEN: 'Steadfastness brings fortune; friends follow your thoughts.' },
      { position: 5, textCN: '咸其脢，无悔。', textEN: 'Influence in the back of the neck. No remorse.', interpretationCN: '感应在脊背，无悔。', interpretationEN: 'Influence in the neck; no regret.' },
      { position: 6, textCN: '咸其辅颊舌。', textEN: 'Influence in the jaws, cheeks, and tongue.', interpretationCN: '感应在口舌。', interpretationEN: 'Influence in the jaws and tongue.' },
    ],
    summaryCN: '咸卦象征感应与交感，强调心灵相通的重要性。',
    summaryEN: 'Xian symbolizes mutual influence. Spiritual connection between people is vital.',
  },
  {
    number: 32, nameCN: '恒', nameEN: 'Heng (Duration)',
    judgmentCN: '亨，无咎，利贞，利有攸往。', judgmentEN: 'Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go.',
    imageCN: '雷风恒，君子以立不易方。', imageEN: 'Thunder and wind: the image of Duration. Thus the superior man stands firm and does not change his direction.',
    upperTrigram: '震', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '浚恒，贞凶，无攸利。', textEN: 'Seeking duration too eagerly brings misfortune. Nothing furthers.', interpretationCN: '急于求恒，凶险无利。', interpretationEN: 'Seeking permanence too eagerly; misfortune.' },
      { position: 2, textCN: '悔亡。', textEN: 'Remorse disappears.', interpretationCN: '悔恨消亡。', interpretationEN: 'Regret vanishes.' },
      { position: 3, textCN: '不恒其德，或承之羞，贞吝。', textEN: 'He who does not give duration to his character meets with humiliation. Perseverance brings humiliation.', interpretationCN: '德行不恒，招致羞辱。', interpretationEN: 'Lack of consistency brings shame.' },
      { position: 4, textCN: '田无禽。', textEN: 'No game in the field.', interpretationCN: '田猎无获。', interpretationEN: 'No catch in the field.' },
      { position: 5, textCN: '恒其德，贞，妇人吉，夫子凶。', textEN: 'Giving duration to his character through perseverance. The wife is fortunate, the man misfortunate.', interpretationCN: '恒守其德，妇人吉男子凶。', interpretationEN: 'Consistent virtue; fortune for the wife, misfortune for the husband.' },
      { position: 6, textCN: '振恒，凶。', textEN: 'Restlessness in duration brings misfortune.', interpretationCN: '摇摆不定，凶险。', interpretationEN: 'Restlessness brings misfortune.' },
    ],
    summaryCN: '恒卦象征恒久，强调持之以恒的重要性。',
    summaryEN: 'Heng symbolizes duration. Consistency and perseverance are essential.',
  },
  {
    number: 33, nameCN: '遁', nameEN: 'Dun (Retreat)',
    judgmentCN: '亨，小利贞。', judgmentEN: 'Retreat. Success. In what is small, perseverance furthers.',
    imageCN: '天下有山，遁。君子以远小人，不恶而严。', imageEN: 'Mountain under heaven: the image of Retreat. Thus the superior man keeps the inferior man at a distance, not with anger but with reserve.',
    upperTrigram: '乾', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '遁尾，厉，勿用有攸往。', textEN: 'At the tail of retreat. Danger. Do not act. Do not undertake anything.', interpretationCN: '退避落后，危险，不宜前进。', interpretationEN: 'Lagging in retreat; danger, do not act.' },
      { position: 2, textCN: '执之用黄牛之革，莫之胜说。', textEN: 'He holds him fast with yellow oxhide. No one can tear him loose.', interpretationCN: '以黄牛皮绳系住，无人能解。', interpretationEN: 'Holding fast with oxhide; cannot be torn away.' },
      { position: 3, textCN: '系遁，有疾厉，畜臣妾吉。', textEN: 'A halted retreat is nerve-wracking. Keeping servants and maids brings good fortune.', interpretationCN: '被牵制而退，畜养臣妾吉利。', interpretationEN: 'Hindered retreat; caring for subordinates brings fortune.' },
      { position: 4, textCN: '好遁君子吉，小人否。', textEN: 'Willing retreat brings good fortune to the superior man. The inferior man is blocked.', interpretationCN: '君子好退则吉，小人则否。', interpretationEN: 'Voluntary retreat suits the noble; the small are blocked.' },
      { position: 5, textCN: '嘉遁贞吉。', textEN: 'Friendly retreat. Perseverance brings good fortune.', interpretationCN: '美好退隐，守正得吉。', interpretationEN: 'Graceful retreat; steadfastness brings fortune.' },
      { position: 6, textCN: '肥遁，无不利。', textEN: 'Cheerful retreat. Everything furthers.', interpretationCN: '从容退隐，无所不利。', interpretationEN: 'Contented retreat; all things benefit.' },
    ],
    summaryCN: '遁卦象征退隐，告诫在不利形势下明智撤退。',
    summaryEN: 'Dun symbolizes retreat. In unfavorable times, wise withdrawal is prudent.',
  },
  {
    number: 34, nameCN: '大壮', nameEN: 'Da Zhuang (The Power of the Great)',
    judgmentCN: '利贞。', judgmentEN: 'The Power of the Great. Perseverance furthers.',
    imageCN: '雷在天上，大壮。君子以非礼弗履。', imageEN: 'Thunder in heaven above: the image of The Power of the Great. Thus the superior man does not tread upon paths that do not accord with established order.',
    upperTrigram: '震', lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '壮于趾，征凶，有孚。', textEN: 'Power in the toes. Going forward brings misfortune. This is certainly true.', interpretationCN: '壮于脚趾，前进有凶。', interpretationEN: 'Power in the toes; advancing brings misfortune.' },
      { position: 2, textCN: '贞吉。', textEN: 'Perseverance brings good fortune.', interpretationCN: '守正得吉。', interpretationEN: 'Steadfastness brings fortune.' },
      { position: 3, textCN: '小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。', textEN: 'The inferior man uses force. The superior man uses no force. Perseverance brings danger. The ram butts against a hedge and gets its horns entangled.', interpretationCN: '小人逞强，君子守正。', interpretationEN: 'The small use force; the wise do not.' },
      { position: 4, textCN: '贞吉悔亡，藩决不羸，壮于大舆之輹。', textEN: 'Perseverance brings good fortune and the disappearance of remorse. The hedge is broken, the horns are free.', interpretationCN: '守正得吉，障碍消除。', interpretationEN: 'Steadfastness; obstacles removed.' },
      { position: 5, textCN: '丧羊于易，无悔。', textEN: 'Loses the ram at the border. No remorse.', interpretationCN: '丧羊于田野，无悔。', interpretationEN: 'Losing the ram at the frontier; no regret.' },
      { position: 6, textCN: '羝羊触藩，不能退，不能遂，无攸利，艰则吉。', textEN: 'The ram butts against the hedge. It cannot go back, it cannot advance. Nothing furthers. If one is aware of the difficulty, good fortune.', interpretationCN: '进退两难，知难则吉。', interpretationEN: 'Stuck between advance and retreat; awareness of difficulty brings fortune.' },
    ],
    summaryCN: '大壮卦象征刚强壮大，但需以礼节制力量。',
    summaryEN: 'Da Zhuang symbolizes great power. Strength must be tempered by propriety.',
  },
  {
    number: 35, nameCN: '晋', nameEN: 'Jin (Progress)',
    judgmentCN: '康侯用锡马蕃庶，昼日三接。', judgmentEN: 'Progress. The powerful prince is honored with horses in large numbers. In a single day he is granted audience three times.',
    imageCN: '明出地上，晋。君子以自昭明德。', imageEN: 'The sun rises over the earth: the image of Progress. Thus the superior man himself brightens his bright virtue.',
    upperTrigram: '离', lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '晋如摧如，贞吉，罔孚裕无咎。', textEN: 'Progressing, yet encountering obstruction. Perseverance brings good fortune. Trust is not yet established, but tolerance brings no blame.', interpretationCN: '前进受阻，守正得吉。', interpretationEN: 'Progress hindered; steadfastness brings fortune.' },
      { position: 2, textCN: '晋如愁如，贞吉，受兹介福于其王母。', textEN: 'Progressing, yet encountering sorrow. Perseverance brings good fortune. One receives great blessings from the queen mother.', interpretationCN: '前进忧愁，守正得大福。', interpretationEN: 'Progress with sorrow; steadfastness brings blessings.' },
      { position: 3, textCN: '众允，悔亡。', textEN: 'All are in accord. Remorse vanishes.', interpretationCN: '众人信任，悔恨消失。', interpretationEN: 'Universal trust; regret vanishes.' },
      { position: 4, textCN: '晋如鼫鼠，贞厉。', textEN: 'Progressing like a rat. Perseverance brings danger.', interpretationCN: '如鼫鼠般前进，守正有危。', interpretationEN: 'Progressing like a rat; perseverance brings danger.' },
      { position: 5, textCN: '悔亡，失得勿恤，往吉无不利。', textEN: 'Remorse vanishes. Do not worry about gain or loss. Going forward brings good fortune. Everything furthers.', interpretationCN: '悔恨消失，不计得失吉利。', interpretationEN: 'Regret vanishes; do not worry about gains.' },
      { position: 6, textCN: '晋其角，维用伐邑，厉吉无咎，贞吝。', textEN: 'Advancing with horns. Punish the town. Danger brings good fortune. No blame. Perseverance brings humiliation.', interpretationCN: '以角进攻，征讨有吉。', interpretationEN: 'Advancing aggressively; justified punishment.' },
    ],
    summaryCN: '晋卦象征前进与晋升，光明正大地前进。',
    summaryEN: 'Jin symbolizes progress. Advance with brightness and integrity.',
  },
  {
    number: 36, nameCN: '明夷', nameEN: 'Ming Yi (Darkening of the Light)',
    judgmentCN: '利艰贞。', judgmentEN: 'Darkening of the Light. In adversity it furthers to be persevering.',
    imageCN: '明入地中，明夷。君子以莅众，用晦而明。', imageEN: 'The light has sunk into the earth: the image of Darkening of the Light. Thus does the superior man live with the great mass: he veils his light, yet still shines.',
    upperTrigram: '坤', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。', textEN: 'Darkening of the light during flight. He lowers his wings. The superior man goes on a three-day fast. There are rumors, but the master speaks.', interpretationCN: '光明受损，如鸟垂翼。', interpretationEN: 'Light dimmed in flight; the wise withdraw.' },
      { position: 2, textCN: '明夷，夷于左股，用拯马壮，吉。', textEN: 'Darkening of the light. He is wounded in the left thigh. He saves his strong horse. Good fortune.', interpretationCN: '左腿受伤，以壮马救援吉利。', interpretationEN: 'Wounded but saved by a strong horse; fortune.' },
      { position: 3, textCN: '明夷于南狩，得其大首，不可疾贞。', textEN: 'Darkening of the light during the hunt in the south. The great leader is captured. One must not expect perseverance too quickly.', interpretationCN: '南方狩猎，擒获首领。', interpretationEN: 'Hunting in the south; capturing the leader.' },
      { position: 4, textCN: '入于左腹，获明夷之心，出于门庭。', textEN: 'He penetrates the left side of the belly. One gets at the very heart of the darkening of the light and leaves gate and courtyard.', interpretationCN: '深入腹地，了解黑暗本质。', interpretationEN: 'Penetrating to the heart of darkness; escaping.' },
      { position: 5, textCN: '箕子之明夷，利贞。', textEN: 'Darkening of the light as with Prince Chi. Perseverance furthers.', interpretationCN: '如箕子韬光养晦，利于守正。', interpretationEN: 'Like Prince Chi hiding his light; perseverance furthers.' },
      { position: 6, textCN: '不明晦，初登于天，后入于地。', textEN: 'Not light but darkness. First he climbed up to heaven, then he plunged into the depths.', interpretationCN: '先升后坠，光明消逝。', interpretationEN: 'First ascending to heaven, then plunging into darkness.' },
    ],
    summaryCN: '明夷卦象征光明受损，在黑暗时期韬光养晦。',
    summaryEN: 'Ming Yi symbolizes darkening of the light. In dark times, hide your brightness and persevere.',
  },
  {
    number: 37, nameCN: '家人', nameEN: 'Jia Ren (The Family)',
    judgmentCN: '利女贞。', judgmentEN: 'The Family. The perseverance of the woman furthers.',
    imageCN: '风自火出，家人。君子以言有物而行有恒。', imageEN: 'Wind comes forth from fire: the image of The Family. Thus the superior man has substance in his words and duration in his way of life.',
    upperTrigram: '巽', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '闲有家，悔亡。', textEN: 'Firmness at the beginning of family life. Remorse vanishes.', interpretationCN: '家规严明，悔恨消失。', interpretationEN: 'Setting rules early; regret vanishes.' },
      { position: 2, textCN: '无攸遂，在中馈，贞吉。', textEN: 'She should not follow her own whims. She must attend to the food within. Perseverance brings good fortune.', interpretationCN: '操持家务，守正得吉。', interpretationEN: 'Managing household affairs; steadfastness brings fortune.' },
      { position: 3, textCN: '家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。', textEN: 'When tempers flare in the family, too much severity leads to good fortune. When wife and children are frivolous, humiliation results.', interpretationCN: '家教严格终吉，放纵终吝。', interpretationEN: 'Strictness brings fortune; indulgence brings shame.' },
      { position: 4, textCN: '富家，大吉。', textEN: 'She enriches the family. Supreme good fortune.', interpretationCN: '家业丰厚，大吉。', interpretationEN: 'Enriching the family; supreme fortune.' },
      { position: 5, textCN: '王假有家，勿恤，吉。', textEN: 'As a king he approaches his family. Do not worry. Good fortune.', interpretationCN: '王者治理家庭，吉利。', interpretationEN: 'The king governs his family; good fortune.' },
      { position: 6, textCN: '有孚威如，终吉。', textEN: 'His work commands respect. In the end, good fortune.', interpretationCN: '诚信有威严，终获吉祥。', interpretationEN: 'Sincere authority; eventual fortune.' },
    ],
    summaryCN: '家人卦象征家庭，强调治家之道的重要性。',
    summaryEN: 'Jia Ren symbolizes the family. Proper management of household affairs is essential.',
  },
  {
    number: 38, nameCN: '睽', nameEN: 'Kui (Opposition)',
    judgmentCN: '小事吉。', judgmentEN: 'Opposition. In small matters, good fortune.',
    imageCN: '上火下泽，睽。君子以同而异。', imageEN: 'Fire above, the lake below: the image of Opposition. Thus the superior man, in the midst of society, maintains his own individuality.',
    upperTrigram: '离', lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '悔亡，丧马勿逐，自复。见恶人，无咎。', textEN: 'Remorse vanishes. If you lose your horse, do not run after it; it will return by itself. If you meet an evil person, no blame.', interpretationCN: '丧马勿追，自会回来。', interpretationEN: 'Lost horse returns; meeting the evil, no blame.' },
      { position: 2, textCN: '遇主于巷，无咎。', textEN: 'One meets his lord in a narrow lane. No blame.', interpretationCN: '在小巷遇主人，无咎。', interpretationEN: 'Meeting the master in a narrow lane; no blame.' },
      { position: 3, textCN: '见舆曳，其牛掣，其人天且劓，无初有终。', textEN: 'One sees the wagon dragged back, the ox held fast. The man is branded and has his nose cut off. No beginning, but an end.', interpretationCN: '困难重重，无始有终。', interpretationEN: 'Obstacles everywhere; no beginning but an end.' },
      { position: 4, textCN: '睽孤，遇元夫，交孚，厉无咎。', textEN: 'Isolated through opposition, one meets a like-minded man with whom one can associate in good faith. Although the danger remains, no blame.', interpretationCN: '孤独中遇知己，虽危无咎。', interpretationEN: 'Isolated but meeting a kindred spirit; danger but no blame.' },
      { position: 5, textCN: '悔亡，厥宗噬肤，往何咎。', textEN: 'Remorse vanishes. His companion bites through the skin. Going forward, what blame is there?', interpretationCN: '悔恨消失，前往无咎。', interpretationEN: 'Regret vanishes; advancing brings no blame.' },
      { position: 6, textCN: '睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。', textEN: 'Isolated through opposition, one sees one\'s companion as a pig covered with mud, a wagon full of devils. First one draws the bow, then lays the bow aside. If it is not a robber, it is a wooer. Going forward, meeting with rain brings good fortune.', interpretationCN: '先疑后解，遇雨则吉。', interpretationEN: 'Initial suspicion resolved; rain brings fortune.' },
    ],
    summaryCN: '睽卦象征对立与异同，在差异中寻求和谐。',
    summaryEN: 'Kui symbolizes opposition. Find harmony within diversity.',
  },
  {
    number: 39, nameCN: '蹇', nameEN: 'Jian (Obstruction)',
    judgmentCN: '利西南，不利东北。利见大人，贞吉。', judgmentEN: 'Obstruction. It furthers one to go to the southwest. It does not further one to go to the northeast. It furthers one to see the great man. Perseverance brings good fortune.',
    imageCN: '山上有水，蹇。君子以反身修德。', imageEN: 'Water on the mountain: the image of Obstruction. Thus the superior man turns his attention to himself and molds his character.',
    upperTrigram: '坎', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '往蹇来誉。', textEN: 'Going leads to obstruction, coming brings praise.', interpretationCN: '前往有难，返回有誉。', interpretationEN: 'Advancing brings obstacles; retreating brings praise.' },
      { position: 2, textCN: '王臣蹇蹇，匪躬之故。', textEN: 'The king\'s servant is beset by obstruction upon obstruction. It is not through his own fault.', interpretationCN: '忠臣屡遭困难，非己之过。', interpretationEN: 'The loyal servant faces repeated obstacles; not his fault.' },
      { position: 3, textCN: '往蹇来反。', textEN: 'Going leads to obstruction, coming leads to return.', interpretationCN: '前往有难，返回为宜。', interpretationEN: 'Advancing brings obstacles; returning is wise.' },
      { position: 4, textCN: '往蹇来连。', textEN: 'Going leads to obstruction, coming leads to union.', interpretationCN: '前往有难，返回可联合。', interpretationEN: 'Advancing brings obstacles; returning brings alliance.' },
      { position: 5, textCN: '大蹇朋来。', textEN: 'In the greatest obstruction, friends come.', interpretationCN: '大难之时，朋友来助。', interpretationEN: 'In great obstruction, friends arrive.' },
      { position: 6, textCN: '往蹇来硕，吉。利见大人。', textEN: 'Going leads to obstruction, coming leads to great gain. Good fortune. It furthers one to see the great man.', interpretationCN: '前往有难，返回大获吉利。', interpretationEN: 'Advancing brings obstacles; returning brings great gain.' },
    ],
    summaryCN: '蹇卦象征艰难险阻，告诫知难而退，反省修德。',
    summaryEN: 'Jian symbolizes obstruction. Retreat and self-reflection are wise in difficult times.',
  },
  {
    number: 40, nameCN: '解', nameEN: 'Xie (Deliverance)',
    judgmentCN: '利西南，无所往，其来复吉。有攸往，夙吉。', judgmentEN: 'Deliverance. The southwest is favorable. If there is no longer anything to do, return brings good fortune. If there is still something to do, going quickly brings good fortune.',
    imageCN: '雷雨作，解。君子以赦过宥罪。', imageEN: 'Thunder and rain set in: the image of Deliverance. Thus the superior man pardons mistakes and forgives misdeeds.',
    upperTrigram: '震', lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '无咎。', textEN: 'No blame.', interpretationCN: '无咎。', interpretationEN: 'No blame.' },
      { position: 2, textCN: '田获三狐，得黄矢，贞吉。', textEN: 'One kills three foxes in the field and receives a yellow arrow. Perseverance brings good fortune.', interpretationCN: '猎获三狐，守正得吉。', interpretationEN: 'Catching three foxes; steadfastness brings fortune.' },
      { position: 3, textCN: '负且乘，致寇至，贞吝。', textEN: 'If a man carries a burden on his back and rides in a carriage, he thereby invites robbers. Perseverance brings humiliation.', interpretationCN: '负重乘车，招致盗寇。', interpretationEN: 'Carrying burdens while riding invites robbers.' },
      { position: 4, textCN: '解而拇，朋至斯孚。', textEN: 'Deliver yourself from your big toe. Your friend will then come and you can trust him.', interpretationCN: '解除束缚，朋友信任而来。', interpretationEN: 'Free yourself; friends will come with trust.' },
      { position: 5, textCN: '君子维有解，吉。有孚于小人。', textEN: 'If only the superior man can deliver himself, good fortune comes. He is believed by the inferior man.', interpretationCN: '君子自我解脱，吉利。', interpretationEN: 'The wise free themselves; even the small believe.' },
      { position: 6, textCN: '公用射隼于高墉之上，获之，无不利。', textEN: 'The prince shoots a hawk on the high wall and kills it. Everything furthers.', interpretationCN: '射猎高墙之隼，无所不利。', interpretationEN: 'Shooting the hawk; all things benefit.' },
    ],
    summaryCN: '解卦象征解除困难，困难消除后宜恢复常态。',
    summaryEN: 'Xie symbolizes deliverance. After difficulties are resolved, return to normal.',
  },
  // 第41-64卦
  {
    number: 41, nameCN: '损', nameEN: 'Sun (Decrease)',
    judgmentCN: '有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。', judgmentEN: 'Decrease combined with sincerity brings supreme good fortune without blame. If you are sincere, you may persevere. What shall you use? Two baskets of rice may be offered.',
    imageCN: '山下有泽，损。君子以惩忿窒欲。', imageEN: 'At the foot of the mountain, a lake: the image of Decrease. Thus the superior man controls his anger and restrains his desires.',
    upperTrigram: '艮', lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '已事遄往，无咎，酌损之。', textEN: 'When the work is done, go quickly. No blame. Consider the decrease.', interpretationCN: '事毕速往，酌量减损。', interpretationEN: 'When done, depart quickly; consider what to decrease.' },
      { position: 2, textCN: '利贞，征凶，弗损益之。', textEN: 'Perseverance furthers. To go brings misfortune. Do not decrease but increase.', interpretationCN: '利于守正，征行有凶。', interpretationEN: 'Steadfastness furthers; advancing brings misfortune.' },
      { position: 3, textCN: '三人行，则损一人，一人行，则得其友。', textEN: 'When three people travel together, one is lost. When one travels alone, he finds a friend.', interpretationCN: '三人同行必损一人。', interpretationEN: 'Three together lose one; alone, one finds a friend.' },
      { position: 4, textCN: '损其疾，使遄有喜，无咎。', textEN: 'He decreases his ailment. Make haste to bring about joy. No blame.', interpretationCN: '减损疾病，迅速带来喜悦。', interpretationEN: 'Decreasing illness; hastening brings joy, no blame.' },
      { position: 5, textCN: '或益之十朋之龟，弗克违，元吉。', textEN: 'Someone increases him by ten pairs of turtles. He cannot resist. Supreme good fortune.', interpretationCN: '十朋之龟增益，大吉。', interpretationEN: 'Gift of ten pairs of turtles; supreme fortune.' },
      { position: 6, textCN: '弗损益之，无咎，贞吉，利有攸往，得臣无家。', textEN: 'He does not decrease but increases. No blame. Perseverance brings good fortune. It furthers one to have somewhere to go. One acquires servants without a home.', interpretationCN: '不损反益，守正得吉。', interpretationEN: 'Not decreasing but increasing; steadfastness brings fortune.' },
    ],
    summaryCN: '损卦象征减损，适当的减损可以带来更大的收获。',
    summaryEN: 'Sun symbolizes decrease. Proper decrease can lead to greater gain.',
  },
  {
    number: 42, nameCN: '益', nameEN: 'Yi (Increase)',
    judgmentCN: '利有攸往，利涉大川。', judgmentEN: 'Increase. It furthers one to undertake something. It furthers one to cross the great water.',
    imageCN: '风雷益，君子以见善则迁，有过则改。', imageEN: 'Wind and thunder: the image of Increase. Thus the superior man, seeing good, approaches it, and having faults, he reforms.',
    upperTrigram: '巽', lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '利用为大作，元吉，无咎。', textEN: 'It furthers one to undertake great works. Supreme good fortune. No blame.', interpretationCN: '利于做大事，大吉无咎。', interpretationEN: 'Undertaking great works; supreme fortune, no blame.' },
      { position: 2, textCN: '或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。', textEN: 'Someone increases him by ten pairs of turtles. He cannot resist. Perseverance brings good fortune. The king presents him to God. Good fortune.', interpretationCN: '十朋之龟增益，永守正道吉利。', interpretationEN: 'Gift of ten pairs of turtles; eternal steadfastness brings fortune.' },
      { position: 3, textCN: '益之用凶事，无咎。有孚中行，告公用圭。', textEN: 'Increase through difficult events. No blame. If you are sincere and walk in the middle, report to the prince with a jade tablet.', interpretationCN: '因凶事而增益，无咎。', interpretationEN: 'Increase through hardship; no blame.' },
      { position: 4, textCN: '中行告公从，利用为依迁国。', textEN: 'If you walk in the center and report to the prince, he will follow. It is favorable to be used as a support for relocating the capital.', interpretationCN: '中道而行，利于迁都。', interpretationEN: 'Walking the middle path; favorable for relocating.' },
      { position: 5, textCN: '有孚惠心，勿问元吉。有孚惠我德。', textEN: 'If in truth you have a kind heart, ask not about supreme good fortune. Your sincerity will benefit all.', interpretationCN: '诚信施惠，大吉不必问。', interpretationEN: 'Sincere kindness brings supreme fortune.' },
      { position: 6, textCN: '莫益之，或击之，立心勿恒，凶。', textEN: 'He does not increase him. Someone may attack him. A heart that is not constant brings misfortune.', interpretationCN: '无人增益反被攻击，心不恒则凶。', interpretationEN: 'No increase but attack; inconstant heart brings misfortune.' },
    ],
    summaryCN: '益卦象征增益，利于进取和冒险。',
    summaryEN: 'Yi symbolizes increase. It favors undertaking ventures and bold action.',
  },
  {
    number: 43, nameCN: '夬', nameEN: 'Guai (Breakthrough)',
    judgmentCN: '扬于王庭，孚号有厉，告自邑，不利即戎，利有攸往。', judgmentEN: 'Breakthrough. The truth must be announced in the royal court. A resolute advance is needed. It does not further to resort to arms. It furthers one to undertake something.',
    imageCN: '泽上于天，夬。君子以施禄及下，居德则忌。', imageEN: 'The lake has risen up to heaven: the image of Breakthrough. Thus the superior man dispenses riches downward and refrains from resting on his virtue.',
    upperTrigram: '兑', lowerTrigram: '乾',
    lines: [
      { position: 1, textCN: '壮于前趾，往不胜为咎。', textEN: 'Power in the toes at the beginning. Going forward without success brings blame.', interpretationCN: '脚趾逞强，前进不胜有咎。', interpretationEN: 'Power in the toes; advancing without success brings blame.' },
      { position: 2, textCN: '惕号，莫夜有戎，勿恤。', textEN: 'A cry of alarm. Armed conflict at night. Do not worry.', interpretationCN: '警惕呼号，夜间有兵戎不必忧虑。', interpretationEN: 'Alarm at night; do not worry.' },
      { position: 3, textCN: '壮于頄，有凶。君子夬夬独行，遇雨若濡，有愠，无咎。', textEN: 'Power in the jaw brings misfortune. The superior man walks alone and meets with rain. He gets wet and is angry. No blame.', interpretationCN: '刚壮于面，有凶。', interpretationEN: 'Power in the jaw; misfortune.' },
      { position: 4, textCN: '臀无肤，其行次且，牵羊悔亡，闻言不信。', textEN: 'There is no skin on his thighs, and walking is difficult. If one leads a sheep, remorse vanishes. If one hears these words and does not believe, misfortune results.', interpretationCN: '行走困难，牵羊悔亡。', interpretationEN: 'Walking is difficult; leading a sheep removes regret.' },
      { position: 5, textCN: '苋陆夬夬，中行无咎。', textEN: 'Walking in the middle of the path, like pulling up purslane. No blame.', interpretationCN: '中道而行，无咎。', interpretationEN: 'Walking the middle path; no blame.' },
      { position: 6, textCN: '无号，终有凶。', textEN: 'No cry. In the end, misfortune comes.', interpretationCN: '无呼号，终有凶险。', interpretationEN: 'No warning cry; misfortune comes at the end.' },
    ],
    summaryCN: '夬卦象征决断，果断地去除小人，但不可用武力。',
    summaryEN: 'Guai symbolizes breakthrough. Decisive action against the small, but avoid force.',
  },
  {
    number: 44, nameCN: '姤', nameEN: 'Gou (Coming to Meet)',
    judgmentCN: '女壮，勿用取女。', judgmentEN: 'Coming to Meet. The maiden is powerful. One should not marry such a maiden.',
    imageCN: '天下有风，姤。后以施命诰四方。', imageEN: 'Wind under heaven: the image of Coming to Meet. Thus the sovereign distributes his commands and proclaims them to the four quarters.',
    upperTrigram: '乾', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅。', textEN: 'Tied to a metal brake. Perseverance brings good fortune. Going forward brings misfortune. A lean pig fidgets.', interpretationCN: '系于金柅，守正得吉。', interpretationEN: 'Tied to a brake; steadfastness brings fortune.' },
      { position: 2, textCN: '包有鱼，无咎，不利宾。', textEN: 'There is a fish in the kitchen. No blame. It does not further the guest.', interpretationCN: '厨房有鱼，无咎，不利客。', interpretationEN: 'Fish in the kitchen; no blame, but not for guests.' },
      { position: 3, textCN: '臀无肤，其行次且，厉，无大咎。', textEN: 'There is no skin on his thighs, and walking is difficult. Danger, but no great blame.', interpretationCN: '行走困难，虽危无大咎。', interpretationEN: 'Walking difficult; danger but no great blame.' },
      { position: 4, textCN: '包无鱼，起凶。', textEN: 'There is no fish in the kitchen. Misfortune arises.', interpretationCN: '厨房无鱼，凶险将起。', interpretationEN: 'No fish in the kitchen; misfortune arises.' },
      { position: 5, textCN: '以杞包瓜，含章，有陨自天。', textEN: 'A melon covered with willow leaves. Hidden lines. Something comes down from heaven.', interpretationCN: '以杞树叶包瓜，天降福祐。', interpretationEN: 'Melon covered with leaves; blessing from heaven.' },
      { position: 6, textCN: '姤其角，吝，无咎。', textEN: 'Coming to meet with horns. Humiliation. No blame.', interpretationCN: '以角相遇，吝，无咎。', interpretationEN: 'Meeting with horns; shame but no blame.' },
    ],
    summaryCN: '姤卦象征相遇，阴柔势力初生，需警惕防范。',
    summaryEN: 'Gou symbolizes unexpected encounter. The yin force is rising; be vigilant.',
  },
  {
    number: 45, nameCN: '萃', nameEN: 'Cui (Gathering Together)',
    judgmentCN: '亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。', judgmentEN: 'Gathering Together. Success. The king approaches his temple. It furthers one to see the great man. Success. Perseverance furthers. To bring great offerings creates good fortune. It furthers one to undertake something.',
    imageCN: '泽上于地，萃。君子以除戎器，戒不虞。', imageEN: 'Over the earth, the lake: the image of Gathering Together. Thus the superior man renews his arms in order to meet the unforeseen.',
    upperTrigram: '兑', lowerTrigram: '坤',
    lines: [
      { position: 1, textCN: '有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎。', textEN: 'If sincerity is not maintained to the end, confusion and gathering result. If you call out, you can laugh. Do not worry. Going forward brings no blame.', interpretationCN: '诚信不终，混乱聚集。', interpretationEN: 'Sincerity lacking; confusion results.' },
      { position: 2, textCN: '引吉，无咎，孚乃利用禴。', textEN: 'Letting oneself be drawn brings good fortune and no blame. Sincerity enables even a simple offering.', interpretationCN: '被牵引吉利，诚信可用薄祭。', interpretationEN: 'Being drawn brings fortune; sincerity suffices.' },
      { position: 3, textCN: '萃如嗟如，无攸利，往无咎，小吝。', textEN: 'Gathering together with sighs. Nothing furthers. Going forward brings no blame, but small humiliation.', interpretationCN: '聚集叹息，前进无咎小吝。', interpretationEN: 'Gathering with sighs; advancing brings minor shame.' },
      { position: 4, textCN: '大吉，无咎。', textEN: 'Supreme good fortune. No blame.', interpretationCN: '大吉无咎。', interpretationEN: 'Supreme fortune; no blame.' },
      { position: 5, textCN: '萃有位，无咎。匪孚，元永贞，悔亡。', textEN: 'If in gathering together one has a position, no blame. If one is not believed, the beginning of perseverance leads to the disappearance of remorse.', interpretationCN: '聚集有位，无咎。', interpretationEN: 'Gathering with position; no blame.' },
      { position: 6, textCN: '赍咨涕洟，无咎。', textEN: 'Sighing and lamenting, tears and sniffling. No blame.', interpretationCN: '叹息流泪，无咎。', interpretationEN: 'Sighing and weeping; no blame.' },
    ],
    summaryCN: '萃卦象征聚集，团结一致可以成就大事。',
    summaryEN: 'Cui symbolizes gathering. Unity enables great achievements.',
  },
  {
    number: 46, nameCN: '升', nameEN: 'Sheng (Pushing Upward)',
    judgmentCN: '南征吉。', judgmentEN: 'Pushing Upward has supreme success. If one sees the great man, do not worry. Going south brings good fortune.',
    imageCN: '地中生木，升。君子以顺德，积小以高大。', imageEN: 'Wood growing up within the earth: the image of Pushing Upward. Thus the superior man, in devotion to his virtue, accumulates small things to achieve greatness.',
    upperTrigram: '坤', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '允升，大吉。', textEN: 'Pushing upward that is acknowledged brings supreme good fortune.', interpretationCN: '上升被认可，大吉。', interpretationEN: 'Acknowledged ascent; supreme fortune.' },
      { position: 2, textCN: '孚乃利用禴，无咎。', textEN: 'If one is sincere, even a simple offering suffices. No blame.', interpretationCN: '诚信可用薄祭，无咎。', interpretationEN: 'Sincerity makes even simple offerings acceptable.' },
      { position: 3, textCN: '升虚邑。', textEN: 'One pushes upward into an empty city.', interpretationCN: '上升入空城。', interpretationEN: 'Ascending into an empty city.' },
      { position: 4, textCN: '王用亨于岐山，吉，无咎。', textEN: 'The king makes offerings on Mount Qi. Good fortune. No blame.', interpretationCN: '王祭于岐山，吉利无咎。', interpretationEN: 'The king offers at Mount Qi; fortune, no blame.' },
      { position: 5, textCN: '贞吉，升阶。', textEN: 'Perseverance brings good fortune. One ascends the steps.', interpretationCN: '守正得吉，拾级而上。', interpretationEN: 'Steadfastness brings fortune; ascending the steps.' },
      { position: 6, textCN: '冥升，利于不息之贞。', textEN: 'Pushing upward in darkness. It furthers one to be unceasingly persevering.', interpretationCN: '暗中上升，利于不停守正。', interpretationEN: 'Ascending in darkness; ceaseless perseverance furthers.' },
    ],
    summaryCN: '升卦象征上升，循序渐进地向上发展。',
    summaryEN: 'Sheng symbolizes upward movement. Gradual progress leads to success.',
  },
  {
    number: 47, nameCN: '困', nameEN: 'Kun (Oppression)',
    judgmentCN: '亨，贞，大人吉，无咎。有言不信。', judgmentEN: 'Oppression. Success. Perseverance. The great man brings about good fortune. No blame. When one has something to say, it is not believed.',
    imageCN: '泽无水，困。君子以致命遂志。', imageEN: 'The lake has no water: the image of Oppression. Thus the superior man stakes his life on following his will.',
    upperTrigram: '兑', lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '臀困于株木，入于幽谷，三岁不觌。', textEN: 'One sits oppressed under a bare tree and strays into a gloomy valley. For three years one does not see the light.', interpretationCN: '困于树桩，三年不见光明。', interpretationEN: 'Trapped under a tree; three years of darkness.' },
      { position: 2, textCN: '困于酒食，朱绂方来，利用享祀，征凶，无咎。', textEN: 'One is oppressed while eating and drinking. Red knee bands are coming. It furthers one to make offerings. Going brings misfortune. No blame.', interpretationCN: '困于酒食，利于祭祀。', interpretationEN: 'Oppressed while feasting; offerings furthers.' },
      { position: 3, textCN: '困于石，据于蒺藜，入其宫不见其妻，凶。', textEN: 'A man oppressed by stone leans on thorns and thistles. He enters his house and does not see his wife. Misfortune.', interpretationCN: '困于荆棘，回家不见妻，凶。', interpretationEN: 'Oppressed by stone and thorns; misfortune.' },
      { position: 4, textCN: '来徐徐，困于金车，吝，有终。', textEN: 'He comes very quietly, oppressed in a golden carriage. Humiliation, but there is an end.', interpretationCN: '缓缓而来，虽吝有终。', interpretationEN: 'Coming slowly in a golden carriage; shame but an end.' },
      { position: 5, textCN: '劓刖，困于赤绂，乃徐有说，利用祭祀。', textEN: 'His nose and feet are cut off. Oppressed by men in red knee bands. Joy comes softly. It furthers one to make offerings.', interpretationCN: '受刑困厄，渐渐解脱。', interpretationEN: 'Mutilated and oppressed; gradual release.' },
      { position: 6, textCN: '困于葛藟，于臲卼，曰动悔。有悔，征吉。', textEN: 'He is oppressed by creeping vines. He moves and finds no rest. If he regrets this and takes action, good fortune.', interpretationCN: '困于藤蔓，悔悟后行动吉利。', interpretationEN: 'Oppressed by vines; regret and action bring fortune.' },
    ],
    summaryCN: '困卦象征困顿，在困境中坚守信念，以言感人。',
    summaryEN: 'Kun symbolizes oppression. Maintain faith in adversity; words may not be believed.',
  },
  {
    number: 48, nameCN: '井', nameEN: 'Jing (The Well)',
    judgmentCN: '改邑不改井，无丧无得，往来井井。汔至亦未繘井，羸其瓶，凶。', judgmentEN: 'The Well. The town may be changed, but the well cannot be changed. Neither do it decrease nor increase. People come and go, drawing from the well. If one gets down almost to the water and the rope does not reach, or the jug breaks, misfortune.',
    imageCN: '木上有水，井。君子以劳民劝相。', imageEN: 'Water over wood: the image of the Well. Thus the superior man encourages the people at their work and exhorts them to help one another.',
    upperTrigram: '坎', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '井泥不食，旧井无禽。', textEN: 'One does not drink the mud of the well. No animals come to an old well.', interpretationCN: '井泥不能食用，旧井无禽。', interpretationEN: 'Muddy well water; no one drinks from an old well.' },
      { position: 2, textCN: '井谷射鲋，瓮敝漏。', textEN: 'At the wellhole one shoots fish. The jug is broken and leaks.', interpretationCN: '井谷射鱼，瓮破漏水。', interpretationEN: 'Shooting fish in the well; the jug leaks.' },
      { position: 3, textCN: '井渫不食，为我心恻，可用汲，王明，并受其福。', textEN: 'The well is cleaned but no one drinks from it. This is my heart\'s sorrow. If only the king were wise, all could share in the blessing.', interpretationCN: '井水清洁却无人饮用。', interpretationEN: 'Clean well water unused; my heart grieves.' },
      { position: 4, textCN: '井甃，无咎。', textEN: 'The well is lined with stone. No blame.', interpretationCN: '井壁砌石，无咎。', interpretationEN: 'Well lined with stone; no blame.' },
      { position: 5, textCN: '井冽寒泉食。', textEN: 'In the well there is a clear, cold spring from which one can drink.', interpretationCN: '井水清冽甘甜可饮。', interpretationEN: 'Clear, cold spring water; drinkable.' },
      { position: 6, textCN: '井收勿幕，有孚元吉。', textEN: 'One draws from the well without covering it. Sincerity brings supreme good fortune.', interpretationCN: '井水汲取不加盖，诚信大吉。', interpretationEN: 'Drawing water without covering; sincerity brings fortune.' },
    ],
    summaryCN: '井卦象征水井，代表滋养万民的根本。',
    summaryEN: 'Jing symbolizes the well. It represents the fundamental source that nourishes all.',
  },
  {
    number: 49, nameCN: '革', nameEN: 'Ge (Revolution)',
    judgmentCN: '已日乃孚，元亨利贞，悔亡。', judgmentEN: 'Revolution. On your own day you are believed. Supreme success. Furthering through perseverance. Remorse vanishes.',
    imageCN: '泽中有火，革。君子以治历明时。', imageEN: 'Fire in the lake: the image of Revolution. Thus the superior man sets the calendar in order and makes the seasons clear.',
    upperTrigram: '兑', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '巩用黄牛之革。', textEN: 'Wrapped in the hide of a yellow cow.', interpretationCN: '以黄牛皮革牢固。', interpretationEN: 'Bound with yellow oxhide.' },
      { position: 2, textCN: '已日乃革之，征吉，无咎。', interpretationCN: '等到时机成熟再变革，征行吉利无咎。', textEN: 'On your own day you may make revolution. Going brings good fortune. No blame.', interpretationEN: 'At the right time, revolution brings fortune.' },
      { position: 3, textCN: '征凶，贞厉，革言三就，有孚。', textEN: 'Going brings misfortune. Perseverance brings danger. When the talk of revolution has gone three times round, one may believe.', interpretationCN: '征行有凶，变革之议三度成熟。', interpretationEN: 'Advancing brings misfortune; after three rounds, believe.' },
      { position: 4, textCN: '悔亡，有孚改命，吉。', textEN: 'Remorse vanishes. If one is believed, one may change the mandate. Good fortune.', interpretationCN: '悔恨消失，诚信改命吉利。', interpretationEN: 'Regret vanishes; sincerity changes destiny.' },
      { position: 5, textCN: '大人虎变，未占有孚。', textEN: 'The great man changes like a tiger. No need for divination to be believed.', interpretationCN: '大人如虎般变革，不必占卜。', interpretationEN: 'The great man transforms like a tiger; no need for divination.' },
      { position: 6, textCN: '君子豹变，小人革面，征凶，居贞吉。', textEN: 'The superior man changes like a leopard. The inferior man changes his face. Going brings misfortune. Remaining persevering brings good fortune.', interpretationCN: '君子如豹般变革，小人只换面具。', interpretationEN: 'The wise change like leopards; the small only change masks.' },
    ],
    summaryCN: '革卦象征变革，顺天应人地进行革新。',
    summaryEN: 'Ge symbolizes revolution. Change should accord with heaven and the people.',
  },
  {
    number: 50, nameCN: '鼎', nameEN: 'Ding (The Caldron)',
    judgmentCN: '元吉，亨。', judgmentEN: 'The Caldron. Supreme good fortune. Success.',
    imageCN: '木上有火，鼎。君子以正位凝命。', imageEN: 'Fire over wood: the image of the Caldron. Thus the superior man consolidates his fate by making his position correct.',
    upperTrigram: '离', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '鼎颠趾，利出否，得妾以其子，无咎。', textEN: 'The caldron is overturned with its legs in the air. It is favorable to remove the dross. One takes a concubine for the sake of her son. No blame.', interpretationCN: '鼎翻倒倒出渣滓，无咎。', interpretationEN: 'Overturning to remove dross; no blame.' },
      { position: 2, textCN: '鼎有实，我仇有疾，不我能即，吉。', textEN: 'The caldron is filled with food. My companion is jealous, but cannot approach me. Good fortune.', interpretationCN: '鼎中有食物，吉利。', interpretationEN: 'Caldron filled; companion cannot approach; fortune.' },
      { position: 3, textCN: '鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。', textEN: 'The handle of the caldron is altered. One\'s way is blocked. The pheasant fat is not eaten. When rain comes, remorse vanishes. In the end, good fortune.', interpretationCN: '鼎耳改变，行路受阻，终吉。', interpretationEN: 'Handle altered; path blocked; eventual fortune.' },
      { position: 4, textCN: '鼎折足，覆公餗，其形渥，凶。', textEN: 'The legs of the caldron are broken. The prince\'s food is spilled. His person is wet. Misfortune.', interpretationCN: '鼎足折断，食物倾覆，凶。', interpretationEN: 'Legs broken; food spilled; misfortune.' },
      { position: 5, textCN: '鼎黄耳金铉，利贞。', textEN: 'The caldron has yellow handles and golden carrying rings. Perseverance furthers.', interpretationCN: '鼎有黄耳金铉，利于守正。', interpretationEN: 'Yellow handles and golden rings; perseverance furthers.' },
      { position: 6, textCN: '鼎玉铉，大吉，无不利。', textEN: 'The caldron has jade carrying rings. Supreme good fortune. Everything furthers.', interpretationCN: '鼎有玉铉，大吉无所不利。', interpretationEN: 'Jade carrying rings; supreme fortune.' },
    ],
    summaryCN: '鼎卦象征鼎新，代表文明与革新。',
    summaryEN: 'Ding symbolizes the caldron. It represents civilization and renewal.',
  },
  {
    number: 51, nameCN: '震', nameEN: 'Zhen (The Arousing Thunder)',
    judgmentCN: '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。', judgmentEN: 'Shock brings success. Shock comes, oh, oh! Laughing words, ha, ha! The shock terrifies for a hundred miles and one does not let fall the sacrificial spoon.',
    imageCN: '洊雷，震。君子以恐惧修省。', imageEN: 'Thunder repeated: the image of Shock. Thus the superior man in fear and trembling sets his life in order and examines himself.',
    upperTrigram: '震', lowerTrigram: '震',
    lines: [
      { position: 1, textCN: '震来虩虩，后笑言哑哑，吉。', textEN: 'Shock comes, oh, oh! Then follow laughing words, ha, ha! Good fortune.', interpretationCN: '震惊而来，后有笑语，吉利。', interpretationEN: 'Shock arrives; laughter follows; fortune.' },
      { position: 2, textCN: '震来厉，亿丧贝，跻于九陵，勿逐，七日得。', textEN: 'Shock comes bringing danger. One loses treasures and climbs the nine hills. Do not pursue. In seven days you will find them.', interpretationCN: '震惊危险，勿追，七日可得。', interpretationEN: 'Shock brings danger; do not pursue; recover in seven days.' },
      { position: 3, textCN: '震苏苏，震行无眚。', textEN: 'Shock makes one quiver. Going forward brings no misfortune.', interpretationCN: '震惊颤栗，前进无灾。', interpretationEN: 'Shock causes trembling; advancing brings no misfortune.' },
      { position: 4, textCN: '震遂泥。', textEN: 'Shock is mired in mud.', interpretationCN: '震惊陷于泥中。', interpretationEN: 'Shock stuck in mud.' },
      { position: 5, textCN: '震往来厉，亿无丧，有事。', textEN: 'Shock going and coming brings danger. One does not lose what one has. There are events to attend to.', interpretationCN: '震惊往来危险，有事务要处理。', interpretationEN: 'Shock in movement; events require attention.' },
      { position: 6, textCN: '震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。', textEN: 'Shock makes one shiver and stare with frightened eyes. Going brings misfortune. If the shock does not affect one\'s own person but one\'s neighbor, no blame. In a partnership there is talk.', interpretationCN: '震惊颤栗，征行有凶。', interpretationEN: 'Shock causes fear; advancing brings misfortune.' },
    ],
    summaryCN: '震卦象征震动，惊恐之后反思修省。',
    summaryEN: 'Zhen symbolizes shock. After fear comes self-reflection and renewal.',
  },
  {
    number: 52, nameCN: '艮', nameEN: 'Gen (Keeping Still)',
    judgmentCN: '艮其背，不获其身，行其庭不见其人，无咎。', judgmentEN: 'Keeping Still. Keeping his back still, so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame.',
    imageCN: '兼山，艮。君子以思不出其位。', imageEN: 'Mountains standing close together: the image of Keeping Still. Thus the superior man does not permit his thoughts to go beyond his situation.',
    upperTrigram: '艮', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '艮其趾，无咎，利永贞。', textEN: 'Keeping his toes still. No blame. Perseverance furthers.', interpretationCN: '止于脚趾，无咎。', interpretationEN: 'Stillness at the toes; no blame.' },
      { position: 2, textCN: '艮其腓，不拯其随，其心不快。', textEN: 'Keeping his calves still. He cannot rescue the one he follows. His heart is not glad.', interpretationCN: '止于小腿，心中不快。', interpretationEN: 'Stillness at the calves; heart not glad.' },
      { position: 3, textCN: '艮其限，列其夤，厉薰心。', textEN: 'Keeping his hips still. His flesh burns. Danger makes the heart blaze.', interpretationCN: '止于腰部，危险熏心。', interpretationEN: 'Stillness at the waist; danger burns the heart.' },
      { position: 4, textCN: '艮其身，无咎。', textEN: 'Keeping his trunk still. No blame.', interpretationCN: '止于身体，无咎。', interpretationEN: 'Stillness at the trunk; no blame.' },
      { position: 5, textCN: '艮其辅，言有序，悔亡。', textEN: 'Keeping his jaws still. His words are orderly. Remorse vanishes.', interpretationCN: '止于口舌，言语有序。', interpretationEN: 'Stillness at the jaws; orderly speech.' },
      { position: 6, textCN: '敦艮，吉。', textEN: 'Keeping still with good heart. Good fortune.', interpretationCN: '敦厚止静，吉利。', interpretationEN: 'Earnest stillness; good fortune.' },
    ],
    summaryCN: '艮卦象征止静，适时停止，内心安宁。',
    summaryEN: 'Gen symbolizes keeping still. Know when to stop; find inner peace.',
  },
  {
    number: 53, nameCN: '渐', nameEN: 'Jian (Development)',
    judgmentCN: '女归吉，利贞。', judgmentEN: 'Development. The maiden is given in marriage. Good fortune. Perseverance furthers.',
    imageCN: '山上有木，渐。君子以居贤德善俗。', imageEN: 'A tree on the mountain: the image of Development. Thus the superior man abides in dignity and virtue to improve the mores.',
    upperTrigram: '巽', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '鸿渐于干，小子厉，有言，无咎。', textEN: 'The wild goose gradually draws near the shore. The young one is in danger. There is talk. No blame.', interpretationCN: '鸿雁渐近水边，无咎。', interpretationEN: 'Wild goose approaching shore; no blame.' },
      { position: 2, textCN: '鸿渐于磐，饮食衎衎，吉。', textEN: 'The wild goose gradually draws near the cliff. Eating and drinking in peace. Good fortune.', interpretationCN: '鸿雁渐近磐石，饮食安乐吉利。', interpretationEN: 'Wild goose at the cliff; peaceful feasting; fortune.' },
      { position: 3, textCN: '鸿渐于陆，夫征不复，妇孕不育，凶，利御寇。', textEN: 'The wild goose gradually draws near the plateau. The man goes forth and does not return. The woman carries a child but does not bring it forth. Misfortune. It furthers one to fight off robbers.', interpretationCN: '鸿雁渐近高地，征行不复凶。', interpretationEN: 'Wild goose on the plateau; husband does not return; misfortune.' },
      { position: 4, textCN: '鸿渐于木，或得其桷，无咎。', textEN: 'The wild goose gradually draws near the tree. Perhaps it will find a flat branch. No blame.', interpretationCN: '鸿雁渐近树木，或得平枝无咎。', interpretationEN: 'Wild goose at the tree; finding a branch; no blame.' },
      { position: 5, textCN: '鸿渐于陵，妇三岁不孕，终莫之胜，吉。', textEN: 'The wild goose gradually draws near the summit. For three years the woman bears no child. In the end, nothing can hinder her. Good fortune.', interpretationCN: '鸿雁渐近山陵，终获吉利。', interpretationEN: 'Wild goose at the summit; eventual fortune.' },
      { position: 6, textCN: '鸿渐于逵，其羽可用为仪，吉。', textEN: 'The wild goose gradually draws near the clouds. Its feathers can be used for the sacred dance. Good fortune.', interpretationCN: '鸿雁渐近云端，羽毛可用作礼仪。', interpretationEN: 'Wild goose in the clouds; feathers for ceremony; fortune.' },
    ],
    summaryCN: '渐卦象征循序渐进，如鸿雁有序地前进。',
    summaryEN: 'Jian symbolizes gradual development. Progress steadily like wild geese in formation.',
  },
  {
    number: 54, nameCN: '归妹', nameEN: 'Gui Mei (The Marrying Maiden)',
    judgmentCN: '征凶，无攸利。', judgmentEN: 'The Marrying Maiden. Undertakings bring misfortune. Nothing that would further.',
    imageCN: '泽上有雷，归妹。君子以永终知敝。', imageEN: 'Thunder over the lake: the image of The Marrying Maiden. Thus the superior man understands the transitory in the light of the eternity of the end.',
    upperTrigram: '震', lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '归妹以娣，跛能履，征吉。', textEN: 'The marrying maiden as a concubine. A lame man can walk. Going brings good fortune.', interpretationCN: '以妾身份出嫁，征行吉利。', interpretationEN: 'Maiden as concubine; advancing brings fortune.' },
      { position: 2, textCN: '眇能视，利幽人之贞。', textEN: 'A one-eyed man can see. It furthers the perseverance of a recluse.', interpretationCN: '独眼能视，利于隐者守正。', interpretationEN: 'One-eyed can see; perseverance of the recluse furthers.' },
      { position: 3, textCN: '归妹以须，反归以娣。', textEN: 'The marrying maiden as a slave. She returns as a concubine.', interpretationCN: '以奴婢身份出嫁，后为妾。', interpretationEN: 'Maiden as slave; returns as concubine.' },
      { position: 4, textCN: '归妹愆期，迟归有时。', textEN: 'The marrying maiden draws out the time. A late marriage has its due time.', interpretationCN: '出嫁延期，迟嫁有其时。', interpretationEN: 'Marriage delayed; late marriage has its time.' },
      { position: 5, textCN: '帝乙归妹，其君之袂不如其娣之袂良，月几望，吉。', textEN: 'The sovereign Yi gave his daughter in marriage. The sleeves of the princess were not as fine as those of the serving maid. The moon was almost full. Good fortune.', interpretationCN: '帝乙嫁女，月近圆满吉利。', interpretationEN: 'The king\'s daughter married; nearly full moon; fortune.' },
      { position: 6, textCN: '女承筐无实，士刲羊无血，无攸利。', textEN: 'The woman holds the basket, but there is no fruit in it. The man stabs the sheep, but no blood flows. Nothing that would further.', interpretationCN: '空筐无实，无血无利。', interpretationEN: 'Empty basket; no blood flows; nothing furthers.' },
    ],
    summaryCN: '归妹卦象征少女出嫁，强调角色与地位的适应。',
    summaryEN: 'Gui Mei symbolizes the marrying maiden. One must adapt to one\'s role and position.',
  },
  {
    number: 55, nameCN: '丰', nameEN: 'Feng (Abundance)',
    judgmentCN: '亨，王假之，勿忧，宜日中。', judgmentEN: 'Abundance has success. The king attains abundance. Do not worry. Be like the sun at noon.',
    imageCN: '雷电皆至，丰。君子以折狱致刑。', imageEN: 'Both thunder and lightning come: the image of Abundance. Thus the superior man decides lawsuits and inflicts punishments.',
    upperTrigram: '震', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '遇其配主，虽旬无咎，往有尚。', textEN: 'When a man meets his destined companion, even ten days bring no blame. Going brings respect.', interpretationCN: '遇其匹配之人，前往受尊敬。', interpretationEN: 'Meeting one\'s match; advancing brings respect.' },
      { position: 2, textCN: '丰其蔀，日中见斗，往得疑疾，有孚发若，吉。', textEN: 'The screen is thick. At noon one sees the Big Dipper. Going brings distrust and illness. If one is sincere and can break through, good fortune.', interpretationCN: '遮蔽重重，诚信突破吉利。', interpretationEN: 'Thick screen; sincerity breaks through; fortune.' },
      { position: 3, textCN: '丰其沛，日中见沬，折其右肱，无咎。', textEN: 'The screen is thick. At noon one sees small stars. He breaks his right arm. No blame.', interpretationCN: '遮蔽更厚，折断右臂无咎。', interpretationEN: 'Thicker screen; breaking right arm; no blame.' },
      { position: 4, textCN: '丰其蔀，日中见斗，遇其夷主，吉。', textEN: 'The screen is thick. At noon one sees the Big Dipper. He meets his equal. Good fortune.', interpretationCN: '遮蔽重重，遇其平等之人吉利。', interpretationEN: 'Thick screen; meeting one\'s equal; fortune.' },
      { position: 5, textCN: '来章，有庆誉，吉。', textEN: 'Bright lines come. Blessing and praise. Good fortune.', interpretationCN: '光明来临，有福庆赞誉。', interpretationEN: 'Brightness arrives; blessings and praise; fortune.' },
      { position: 6, textCN: '丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。', textEN: 'His house is abundant, his screen is thick. He peeps through the door and finds no one there. For three years he does not see anyone. Misfortune.', interpretationCN: '房屋丰盛却无人，三年不见人，凶。', interpretationEN: 'Abundant house but empty; three years alone; misfortune.' },
    ],
    summaryCN: '丰卦象征丰盛，在丰盛时期保持清醒。',
    summaryEN: 'Feng symbolizes abundance. In times of plenty, maintain clarity.',
  },
  {
    number: 56, nameCN: '旅', nameEN: 'Lu (The Wanderer)',
    judgmentCN: '小亨，旅贞吉。', judgmentEN: 'The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer.',
    imageCN: '山上有火，旅。君子以明慎用刑而不留狱。', imageEN: 'Fire on the mountain: the image of The Wanderer. Thus the superior man is clear-minded and cautious in imposing penalties and avoids prolonging lawsuits.',
    upperTrigram: '离', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '旅琐琐，斯其所取灾。', textEN: 'The wanderer is mean and petty. He brings misfortune upon himself.', interpretationCN: '旅人琐碎卑鄙，自取灾祸。', interpretationEN: 'The petty wanderer brings misfortune upon himself.' },
      { position: 2, textCN: '旅即次，怀其资，得童仆贞。', textEN: 'The wanderer comes to an inn. He has his property with him. He acquires the perseverance of a young servant.', interpretationCN: '旅人到旅店，怀揣资财。', interpretationEN: 'Wanderer at an inn; with property; acquiring a servant.' },
      { position: 3, textCN: '旅焚其次，丧其童仆，贞厉。', textEN: 'The wanderer\'s inn burns down. He loses his servant. Perseverance brings danger.', interpretationCN: '旅店被焚，丧失仆人。', interpretationEN: 'Inn burns; servant lost; perseverance dangerous.' },
      { position: 4, textCN: '旅于处，得其资斧，我心不快。', textEN: 'The wanderer rests in a shelter. He obtains his property and an ax. My heart is not glad.', interpretationCN: '旅人暂居，得资斧但心不快。', interpretationEN: 'Wanderer in shelter; obtains axe; heart not glad.' },
      { position: 5, textCN: '射雉一矢亡，终以誉命。', textEN: 'He shoots a pheasant. It drops with the first arrow. In the end this brings both praise and office.', interpretationCN: '射雉一箭即中，终获赞誉。', interpretationEN: 'Shooting pheasant; one arrow; praise and office.' },
      { position: 6, textCN: '鸟焚其巢，旅人先笑后号咷，丧牛于易，凶。', textEN: 'The bird\'s nest burns up. The wanderer laughs at first, then must needs lament and weep. He loses his cow at the border. Misfortune.', interpretationCN: '鸟巢被焚，先笑后哭，凶。', interpretationEN: 'Nest burns; laughter then tears; loses cow; misfortune.' },
    ],
    summaryCN: '旅卦象征旅行，旅途中小心谨慎。',
    summaryEN: 'Lu symbolizes the wanderer. Be cautious and modest in travel.',
  },
  {
    number: 57, nameCN: '巽', nameEN: 'Xun (The Gentle Wind)',
    judgmentCN: '小亨，利有攸往，利见大人。', judgmentEN: 'The Gentle. Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man.',
    imageCN: '随风，巽。君子以申命行事。', imageEN: 'Wind following upon wind: the image of The Gentle. Thus the superior man extends his directives and carries out his undertakings.',
    upperTrigram: '巽', lowerTrigram: '巽',
    lines: [
      { position: 1, textCN: '进退，利武人之贞。', textEN: 'Advancing and retreating. It furthers the perseverance of a warrior.', interpretationCN: '进退不定，利于武人守正。', interpretationEN: 'Advancing and retreating; perseverance of a warrior furthers.' },
      { position: 2, textCN: '巽在床下，用史巫纷若，吉，无咎。', textEN: 'Penetration under the bed. Priests and magicians are used in great number. Good fortune. No blame.', interpretationCN: '谦卑至床下，吉利无咎。', interpretationEN: 'Humble penetration; fortune, no blame.' },
      { position: 3, textCN: '频巽，吝。', textEN: 'Repeated penetration. Humiliation.', interpretationCN: '反复谦卑，有吝。', interpretationEN: 'Repeated humility brings shame.' },
      { position: 4, textCN: '悔亡，田获三品。', textEN: 'Remorse vanishes. During the hunt three kinds of game are taken.', interpretationCN: '悔恨消失，猎获三种猎物。', interpretationEN: 'Regret vanishes; three kinds of game caught.' },
      { position: 5, textCN: '贞吉悔亡，无不利。无初有终。先庚三日，后庚三日，吉。', textEN: 'Perseverance brings good fortune. Remorse vanishes. Nothing that does not further. No beginning, but an end. Before the change, three days. After the change, three days. Good fortune.', interpretationCN: '守正得吉，无不利。', interpretationEN: 'Steadfastness; fortune; all things benefit.' },
      { position: 6, textCN: '巽在床下，丧其资斧，贞凶。', textEN: 'Penetration under the bed. He loses his property and his ax. Perseverance brings misfortune.', interpretationCN: '谦卑至床下，丧失资斧，凶。', interpretationEN: 'Humble to excess; loses property; misfortune.' },
    ],
    summaryCN: '巽卦象征柔顺，以柔和的方式渗透影响。',
    summaryEN: 'Xun symbolizes gentle penetration. Influence through soft, persistent effort.',
  },
  {
    number: 58, nameCN: '兑', nameEN: 'Dui (The Joyous Lake)',
    judgmentCN: '亨，利贞。', judgmentEN: 'The Joyous. Success. Perseverance furthers.',
    imageCN: '丽泽，兑。君子以朋友讲习。', imageEN: 'Lake over lake: the image of The Joyous. Thus the superior man joins with his friends in discussion and practice.',
    upperTrigram: '兑', lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '和兑，吉。', textEN: 'Contented joyousness. Good fortune.', interpretationCN: '和悦吉利。', interpretationEN: 'Harmonious joy; good fortune.' },
      { position: 2, textCN: '孚兑，吉，悔亡。', textEN: 'Sincere joyousness. Good fortune. Remorse vanishes.', interpretationCN: '诚信喜悦，吉利。', interpretationEN: 'Sincere joy; fortune; regret vanishes.' },
      { position: 3, textCN: '来兑，凶。', textEN: 'Coming joyousness. Misfortune.', interpretationCN: '前来取悦，凶。', interpretationEN: 'Seeking joy from others; misfortune.' },
      { position: 4, textCN: '商兑未宁，介疾有喜。', textEN: 'Joyousness that is pondered is not yet at rest. If one cures a slight ailment, joy comes.', interpretationCN: '商讨未宁，治愈小疾有喜。', interpretationEN: 'Contemplated joy; curing illness brings joy.' },
      { position: 5, textCN: '孚于剥，有厉。', textEN: 'Sincerity in what is decayed brings danger.', interpretationCN: '诚信于腐朽之事，有危险。', interpretationEN: 'Sincerity in decay; danger.' },
      { position: 6, textCN: '引兑。', textEN: 'Seductive joyousness.', interpretationCN: '引诱喜悦。', interpretationEN: 'Seductive joy.' },
    ],
    summaryCN: '兑卦象征喜悦，真诚的喜悦带来和谐。',
    summaryEN: 'Dui symbolizes joy. Sincere joy brings harmony.',
  },
  {
    number: 59, nameCN: '涣', nameEN: 'Huan (Dispersion)',
    judgmentCN: '亨。王假有庙，利涉大川，利贞。', judgmentEN: 'Dispersion. Success. The king approaches his temple. It furthers one to cross the great water. Perseverance furthers.',
    imageCN: '风行水上，涣。先王以享于帝立庙。', imageEN: 'Wind blowing over the water: the image of Dispersion. Thus the kings of old sacrificed to God and established temples.',
    upperTrigram: '巽', lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '用拯马壮，吉。', textEN: 'He brings help with the strength of a horse. Good fortune.', interpretationCN: '以壮马救援，吉利。', interpretationEN: 'Help with a strong horse; good fortune.' },
      { position: 2, textCN: '涣奔其机，悔亡。', textEN: 'At the dissolution, he hurries to that which supports him. Remorse vanishes.', interpretationCN: '涣散时奔向依靠，悔恨消失。', interpretationEN: 'In dispersion, rushing to support; regret vanishes.' },
      { position: 3, textCN: '涣其躬，无悔。', textEN: 'He dissolves his self. No remorse.', interpretationCN: '舍弃自我，无悔。', interpretationEN: 'Dissolving the self; no regret.' },
      { position: 4, textCN: '涣其群，元吉。涣有丘，匪夷所思。', textEN: 'He dissolves his group. Supreme good fortune. Dispersion leads to accumulation. What seems unbelievable comes to pass.', interpretationCN: '涣散其群，大吉。', interpretationEN: 'Dissolving the group; supreme fortune.' },
      { position: 5, textCN: '涣汗其大号，涣王居，无咎。', textEN: 'His loud cries are as dissolving as sweat. Dispersion leaves the king\'s dwelling. No blame.', interpretationCN: '大声呼号如汗，无咎。', interpretationEN: 'Loud cries like sweat; no blame.' },
      { position: 6, textCN: '涣其血去逖出，无咎。', textEN: 'He dissolves his blood. Departure and flight. No blame.', interpretationCN: '涣散其血，远离无咎。', interpretationEN: 'Dissolving blood; departure; no blame.' },
    ],
    summaryCN: '涣卦象征涣散，通过精神力量重新凝聚。',
    summaryEN: 'Huan symbolizes dispersion. Reunite through spiritual strength.',
  },
  {
    number: 60, nameCN: '节', nameEN: 'Jie (Limitation)',
    judgmentCN: '亨。苦节不可贞。', judgmentEN: 'Limitation. Success. Bitter limitation cannot be persevered in.',
    imageCN: '泽上有水，节。君子以制数度，议德行。', imageEN: 'Water over the lake: the image of Limitation. Thus the superior man creates number and measure and examines the nature of virtue and conduct.',
    upperTrigram: '坎', lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '不出户庭，无咎。', textEN: 'Not going out of the door and courtyard. No blame.', interpretationCN: '不出门户庭院，无咎。', interpretationEN: 'Not leaving the courtyard; no blame.' },
      { position: 2, textCN: '不出门庭，凶。', textEN: 'Not going out of the gate and courtyard. Misfortune.', interpretationCN: '不出门庭，凶。', interpretationEN: 'Not leaving the gate; misfortune.' },
      { position: 3, textCN: '不节若，则嗟若，无咎。', textEN: 'He who knows no limitation will have cause to lament. No blame.', interpretationCN: '不知节制则叹息，但无咎。', interpretationEN: 'No limitation leads to lament; no blame.' },
      { position: 4, textCN: '安节，亨。', textEN: 'Contented limitation. Success.', interpretationCN: '安然节制，亨通。', interpretationEN: 'Contented limitation; success.' },
      { position: 5, textCN: '甘节，吉，往有尚。', textEN: 'Sweet limitation brings good fortune. Going brings esteem.', interpretationCN: '甘愿节制，吉利。', interpretationEN: 'Sweet limitation; fortune; esteem.' },
      { position: 6, textCN: '苦节，贞凶，悔亡。', textEN: 'Bitter limitation. Perseverance brings misfortune. Remorse vanishes.', interpretationCN: '苦涩节制，守正凶，悔恨消失。', interpretationEN: 'Bitter limitation; misfortune; regret vanishes.' },
    ],
    summaryCN: '节卦象征节制，适度的节制是美德。',
    summaryEN: 'Jie symbolizes limitation. Moderate restraint is a virtue.',
  },
  {
    number: 61, nameCN: '中孚', nameEN: 'Zhong Fu (Inner Truth)',
    judgmentCN: '豚鱼吉，利涉大川，利贞。', judgmentEN: 'Inner Truth. Pigs and fishes bring good fortune. It furthers one to cross the great water. Perseverance furthers.',
    imageCN: '泽上有风，中孚。君子以议狱缓死。', imageEN: 'Wind over the lake: the image of Inner Truth. Thus the superior man deliberates lawsuits and delays death sentences.',
    upperTrigram: '巽', lowerTrigram: '兑',
    lines: [
      { position: 1, textCN: '虞吉，有它不燕。', textEN: 'Being prepared brings good fortune. If there are other designs, no peace.', interpretationCN: '安虞吉利，有他念不安。', interpretationEN: 'Preparedness brings fortune; other designs bring unrest.' },
      { position: 2, textCN: '鹤鸣在阴，其子和之，我有好爵，吾与尔靡之。', textEN: 'A crane calling in the shade. Its young answers it. I have a good goblet. I will share it with you.', interpretationCN: '鹤鸣子和，共享美酒。', interpretationEN: 'Crane calls; young answers; sharing a goblet.' },
      { position: 3, textCN: '得敌，或鼓或罢，或泣或歌。', textEN: 'He finds a comrade. Now he drums, now he stops. Now he weeps, now he sings.', interpretationCN: '遇敌或鼓或止，或泣或歌。', interpretationEN: 'Finding a comrade; drumming or stopping; weeping or singing.' },
      { position: 4, textCN: '月几望，马匹亡，无咎。', textEN: 'The moon is nearly full. The horse goes astray. No blame.', interpretationCN: '月近圆满，马匹走失无咎。', interpretationEN: 'Nearly full moon; horse strays; no blame.' },
      { position: 5, textCN: '有孚挛如，无咎。', textEN: 'Sincerity linked with truth. No blame.', interpretationCN: '诚信紧密相连，无咎。', interpretationEN: 'Sincerity linked; no blame.' },
      { position: 6, textCN: '翰音登于天，贞凶。', textEN: 'The crowing of a cock penetrates to heaven. Perseverance brings misfortune.', interpretationCN: '鸡鸣登天，守正凶。', interpretationEN: 'Cock\'s crow reaches heaven; perseverance brings misfortune.' },
    ],
    summaryCN: '中孚卦象征内心诚信，真诚可以感动万物。',
    summaryEN: 'Zhong Fu symbolizes inner truth. Sincerity moves all things.',
  },
  {
    number: 62, nameCN: '小过', nameEN: 'Xiao Guo (Preponderance of the Small)',
    judgmentCN: '亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。', judgmentEN: 'Preponderance of the Small. Success. Perseverance furthers. Small things may be done, but great things should not be done. The flying bird brings the message: it is not well to strive upward, it is well to remain below. Great good fortune.',
    imageCN: '山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。', imageEN: 'Thunder on the mountain: the image of Preponderance of the Small. Thus the superior man, in his conduct, goes beyond in respect, in mourning beyond in grief, in expenditure beyond in economy.',
    upperTrigram: '震', lowerTrigram: '艮',
    lines: [
      { position: 1, textCN: '飞鸟以凶。', textEN: 'The flying bird brings misfortune.', interpretationCN: '飞鸟带来凶险。', interpretationEN: 'Flying bird brings misfortune.' },
      { position: 2, textCN: '过其祖，遇其妣，不及其君，遇其臣，无咎。', textEN: 'She passes her grandfather and meets her grandmother. She does not reach her prince, but meets his servant. No blame.', interpretationCN: '越过祖父遇祖母，无咎。', interpretationEN: 'Passing grandfather; meeting grandmother; no blame.' },
      { position: 3, textCN: '弗过防之，从或戕之，凶。', textEN: 'If one does not go beyond precaution, one may follow and be overtaken. Misfortune.', interpretationCN: '不加防范，或被伤害，凶。', interpretationEN: 'Without precaution; overtaken; misfortune.' },
      { position: 4, textCN: '无咎，弗过遇之，往厉必戒，勿用永贞。', textEN: 'No blame. He does not go beyond meeting. Going brings danger and one must be on guard. Do not act. Be constantly persevering.', interpretationCN: '无咎，前往有危须戒备。', interpretationEN: 'No blame; danger ahead; be vigilant.' },
      { position: 5, textCN: '密云不雨，自我西郊，公弋取彼在穴。', textEN: 'Dense clouds, no rain from our western region. The prince shoots and hits him who is in the cave.', interpretationCN: '密云不雨，射取穴中之物。', interpretationEN: 'Dense clouds, no rain; shooting into the cave.' },
      { position: 6, textCN: '弗遇过之，飞鸟离之，凶，是谓灾眚。', textEN: 'He does not meet with him but passes by. The flying bird leaves him. Misfortune. This means misfortune and calamity.', interpretationCN: '错过相遇，飞鸟离去，凶。', interpretationEN: 'Missing the meeting; bird flies away; misfortune.' },
    ],
    summaryCN: '小过卦象征小有过越，在小事上可以通融。',
    summaryEN: 'Xiao Guo symbolizes small excess. Small matters may be flexible; great matters should not.',
  },
  {
    number: 63, nameCN: '既济', nameEN: 'Ji Ji (After Completion)',
    judgmentCN: '亨小利贞，初吉终乱。', judgmentEN: 'After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune, at the end disorder.',
    imageCN: '水在火上，既济。君子以思患而豫防之。', imageEN: 'Water over fire: the image of After Completion. Thus the superior man thinks of misfortune and arms himself against it in advance.',
    upperTrigram: '坎', lowerTrigram: '离',
    lines: [
      { position: 1, textCN: '曳其轮，濡其尾，无咎。', textEN: 'He brakes his wheels. He gets his tail wet. No blame.', interpretationCN: '拉住车轮，弄湿尾巴，无咎。', interpretationEN: 'Braking wheels; wetting tail; no blame.' },
      { position: 2, textCN: '妇丧其茀，勿逐，七日得。', textEN: 'The woman loses her curtain. Do not pursue. In seven days she will find it.', interpretationCN: '妇人丧失帷幕，七日可得。', interpretationEN: 'Woman loses curtain; do not pursue; find in seven days.' },
      { position: 3, textCN: '高宗伐鬼方，三年克之，小人勿用。', textEN: 'The ancestor attacks the Demon Country. After three years he conquers it. The inferior man should not be used.', interpretationCN: '高宗讨伐鬼方，三年方克。', interpretationEN: 'Ancestor conquers Demon Country in three years; do not use the small.' },
      { position: 4, textCN: '繻有衣袽，终日戒。', textEN: 'The finest clothes turn to rags. Be careful all day long.', interpretationCN: '华服变破衣，终日戒备。', interpretationEN: 'Fine clothes become rags; be vigilant all day.' },
      { position: 5, textCN: '东邻杀牛，不如西邻之禴祭，实受其福。', textEN: 'The neighbor in the east who slaughters an ox does not attain as much as the neighbor in the west with his small offering. Real blessing.', interpretationCN: '东邻杀牛不如西邻薄祭。', interpretationEN: 'Eastern neighbor\'s ox less than western neighbor\'s simple offering.' },
      { position: 6, textCN: '濡其首，厉。', textEN: 'He gets his head wet. Danger.', interpretationCN: '弄湿头部，危险。', interpretationEN: 'Wetting the head; danger.' },
    ],
    summaryCN: '既济卦象征事已成，但要居安思危。',
    summaryEN: 'Ji Ji symbolizes completion. But be vigilant; success can lead to complacency.',
  },
  {
    number: 64, nameCN: '未济', nameEN: 'Wei Ji (Before Completion)',
    judgmentCN: '亨。小狐汔济，濡其尾，无攸利。', judgmentEN: 'Before Completion. Success. But if the young fox, nearly across the water, gets his tail wet, nothing furthers.',
    imageCN: '火在水上，未济。君子以慎辨物居方。', imageEN: 'Fire over water: the image of the condition before transition. Thus the superior man is careful in the differentiation of things so that each finds its place.',
    upperTrigram: '离', lowerTrigram: '坎',
    lines: [
      { position: 1, textCN: '濡其尾，吝。', textEN: 'He gets his tail wet. Humiliation.', interpretationCN: '弄湿尾巴，有吝。', interpretationEN: 'Wetting the tail; shame.' },
      { position: 2, textCN: '曳其轮，贞吉。', textEN: 'He brakes his wheels. Perseverance brings good fortune.', interpretationCN: '拉住车轮，守正得吉。', interpretationEN: 'Braking wheels; steadfastness brings fortune.' },
      { position: 3, textCN: '未济，征凶，利涉大川。', textEN: 'Before completion. Going brings misfortune. It furthers one to cross the great water.', interpretationCN: '未完成，征行有凶，利于涉水。', interpretationEN: 'Before completion; advancing brings misfortune; crossing furthers.' },
      { position: 4, textCN: '贞吉，悔亡，震用伐鬼方，三年有赏于大国。', textEN: 'Perseverance brings good fortune. Remorse vanishes. He attacks the Demon Country. After three years he receives the prize from the great kingdom.', interpretationCN: '守正得吉，三年受赏。', interpretationEN: 'Steadfastness; attacking Demon Country; three years to prize.' },
      { position: 5, textCN: '贞吉，无悔。君子之光，有孚，吉。', textEN: 'Perseverance brings good fortune. No remorse. The light of the superior man is sincere. Good fortune.', interpretationCN: '守正得吉，君子之光诚信吉利。', interpretationEN: 'Steadfastness; light of the superior man; sincerity; fortune.' },
      { position: 6, textCN: '有孚于饮酒，无咎，濡其首，有孚失是。', textEN: 'There is sincerity in drinking. No blame. But if one wets his head, sincerity is lost.', interpretationCN: '诚信饮酒无咎，弄湿头部则失信。', interpretationEN: 'Sincerity in drinking; no blame; wetting the head loses sincerity.' },
    ],
    summaryCN: '未济卦象征事未完成，万事处于过渡状态。',
    summaryEN: 'Wei Ji symbolizes incompletion. All things are in transition.',
  },
];

// ============================================================
// 辅助函数 Helper Functions
// ============================================================

/**
 * 根据卦序获取卦象数据
 * @param number 卦序 (1-64)
 * @returns 卦象数据或undefined
 */
export function getHexagramByNumber(number: number): HexagramData | undefined {
  return HEXAGRAMS.find(h => h.number === number);
}

/**
 * 根据上卦和下卦获取卦象数据
 * @param upper 上卦名称
 * @param lower 下卦名称
 * @returns 卦象数据或undefined
 */
export function getHexagramByTrigrams(upper: TrigramName, lower: TrigramName): HexagramData | undefined {
  return HEXAGRAMS.find(h => h.upperTrigram === upper && h.lowerTrigram === lower);
}

/**
 * 根据中文名获取卦象数据
 * @param name 卦名（中文）
 * @returns 卦象数据或undefined
 */
export function getHexagramByName(name: string): HexagramData | undefined {
  return HEXAGRAMS.find(h => h.nameCN === name);
}

/**
 * 获取所有卦象名称列表
 * @returns 卦名列表
 */
export function getAllHexagramNames(): Array<{ number: number; nameCN: string; nameEN: string }> {
  return HEXAGRAMS.map(h => ({
    number: h.number,
    nameCN: h.nameCN,
    nameEN: h.nameEN,
  }));
}
