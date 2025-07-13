document.addEventListener('DOMContentLoaded', function() {
    // 人物数据
  const characters = [

    // 悠然部分
    { id: "12122:794428397", name: "悠然·玖毅", state: "一念悠然", aliases: "悠然·毅" },
    { id: "12130:794954078", name: "悠然·完美", state: "一念悠然", aliases: "完美启示" },
    { id: "12130:794957662", name: "悠然·紫嫣", state: "一念悠然", aliases: "紫嫣 一世" },
    { id: "12183:798430256", name: "悠然·天相", state: "一念悠然", aliases: "九儿 匪九" },
    { id: "12183:798426997", name: "悠然·天机", state: "一念悠然", aliases: "潇潇 穗" },
    { id: "11055:724502760", name: "悠然·靓女", state: "一念悠然", aliases: "悠然·独行" },
    { id: "12117:794104339", name: "悠然·暖暖", state: "一念悠然", aliases: "南一 坏桃 麻薯熊" },
    { id: "12119:794232374", name: "悠然鸟大王", state: "一念悠然", aliases: "平山海·洛 重楼" },
    { id: "12146:796005041", name: "悠然·解靖", state: "一念悠然", aliases: "清风扶醉月" },
    { id: "12185:798561859", name: "悠然·兜兜", state: "一念悠然", aliases: "兜兜里有糖" },
    { id: "12119:794233134", name: "悠然·黎开", state: "一念悠然", aliases: "" },
    { id: "12119:794232671", name: "悠然·青画", state: "一念悠然", aliases: "" },
    { id: "12197:799347883", name: "有点甜", state: "一念悠然", aliases: "心伤 韭菜" },
    { id: "12122:794431447", name: "七分糖", state: "一念悠然", aliases: "密密 大表姐" },
    { id: "12119:794234189", name: "悠然·纤云", state: "一念悠然", aliases: "" },
    { id: "12167:797382037", name: "悠然·天机", state: "一念悠然", aliases: "" },
    { id: "12121:794365893", name: "悠然·白白", state: "一念悠然", aliases: "临江仙·白 长腿" },
    { id: "12135:795285556", name: "悠然·岁宁", state: "一念悠然", aliases: "" },
    { id: "12167:797377603", name: "踏凌霄·安", state: "一念悠然", aliases: "安若 安若桦婷" },
    { id: "12118:794167237", name: "浅听人间雨", state: "一念悠然", aliases: "悠然明 篱下浅笙歌" },
    { id: "12140:795609097", name: "悠然·猪猪", state: "一念悠然", aliases: "唱跳RAP" },
    { id: "12167:797380292", name: "悠然·天相", state: "一念悠然", aliases: "悠然知酒" },
    { id: "12181:798295410", name: "悠然·匪庄", state: "一念悠然", aliases: "庄理" },
    { id: "12181:798299569", name: "悠然·匪少", state: "一念悠然", aliases: "年少轻狂" },
    { id: "12167:797380241", name: "悠然·天同", state: "一念悠然", aliases: "一念柏文" },
    { id: "12118:794170364", name: "悠然·韩信", state: "一念悠然", aliases: "泡泡" },
    { id: "12167:797381563", name: "悠然·天府", state: "一念悠然", aliases: "瑶歌" },
    { id: "12180:798231908", name: "悠然丶拜拜", state: "一念悠然", aliases: "凌烟拜拜" },
    { id: "12172:797708131", name: "悠然星陈", state: "一念悠然", aliases: "凌烟星陈" },
    { id: "12132:795083767", name: "煞魂", state: "一念悠然", aliases: "" },
    { id: "12185:798562145", name: "悠然·匪陆", state: "一念悠然", aliases: "陆大能耐" },
    { id: "12185:798557705", name: "悠然·小糖", state: "一念悠然", aliases: "" },
    { id: "12119:794235824", name: "悠然·月暖", state: "一念悠然", aliases: "" },
    { id: "12115:793970587", name: "悠然·都冷", state: "一念悠然", aliases: "" },
    { id: "12183:798429530", name: "繁花·似锦", state: "一念悠然", aliases: "悠然明轩" },
    { id: "12141:795674344", name: "悠然·皓月", state: "一念悠然", aliases: "哈哈一笑" },
    { id: "12188:798755014", name: "悠然临江仙", state: "一念悠然", aliases: "人机九号 大祭司" },
    { id: "12136:795347878", name: "悠然·玲珑", state: "一念悠然", aliases: "" },
    { id: "12181:798295165", name: "悠然·匪孤", state: "一念悠然", aliases: "独孤" },
    { id: "12121:794364710", name: "悠然酒蒙子", state: "一念悠然", aliases: "" },
    { id: "12122:794429192", name: "悠然思玉丹", state: "一念悠然", aliases: "靓女" },
    { id: "12187:798690779", name: "苏苏苏无鱼", state: "一念悠然", aliases: "" },
    { id: "12167:797380931", name: "悠然·天梁", state: "一念悠然", aliases: "" },
    { id: "12119:794236309", name: "阿竹", state: "一念悠然", aliases: "" },
    { id: "12178:798100503", name: "悠然·鹑首", state: "一念悠然", aliases: "凌烟今晚来我家" },
    { id: "12122:794432528", name: "悠然·初旧", state: "一念悠然", aliases: "" },
    { id: "12131:795022183", name: "悠然·K", state: "一念悠然", aliases: "悠然·暴富" },
    { id: "12119:794234639", name: "悠然·火烧", state: "一念悠然", aliases: "止渊 诸事顺遂" },
    { id: "12122:794430650", name: "飞天大野猪", state: "一念悠然", aliases: "纤云" },
    { id: "12144:795873028", name: "悠然·梁梁", state: "一念悠然", aliases: "凌烟梁梁" },
    { id: "12187:798689257", name: "悠然韩道友", state: "一念悠然", aliases: "凌烟贾斯汀" },
    { id: "12195:799212752", name: "孤独患者", state: "一念悠然", aliases: "桉崽" },
    { id: "12116:794039074", name: "悠然·火火", state: "一念悠然", aliases: "" },
    { id: "12160:796922390", name: "危楼高百尺", state: "一念悠然", aliases: "凌烟破晓" },
    { id: "12148:796133286", name: "悠然·子画", state: "一念悠然", aliases: "宣子画" },
    { id: "12169:797510951", name: "悠然、界尺", state: "一念悠然", aliases: "哼哼嘿哈" },
    { id: "12148:796133633", name: "陈总的姑姑", state: "一念悠然", aliases: "南宫琉璃" },
    { id: "12169:797512329", name: "悠然花寻双", state: "一念悠然", aliases: "" },
    { id: "12116:794037086", name: "悠然·轻喃", state: "一念悠然", aliases: "" },
    { id: "12187:798688819", name: "隐ι", state: "一念悠然", aliases: "苏无鱼" },
    { id: "12177:798033869", name: "悠然煲仔饭", state: "一念悠然", aliases: "青菜白玉汤" },
    { id: "12167:797378407", name: "悠然·七杀", state: "一念悠然", aliases: "" },
    { id: "12148:796133639", name: "悠然·白鹭", state: "一念悠然", aliases: "" },
    { id: "12135:795283692", name: "悠然小岁宁", state: "一念悠然", aliases: "" },
    { id: "12169:797513524", name: "悠然·行之", state: "一念悠然", aliases: "L" },
    { id: "12142:795742047", name: "悠然·方卓", state: "一念悠然", aliases: "" },
    { id: "12186:798624891", name: "悠然·二蛋", state: "一念悠然", aliases: "神奇的二蛋" },
    { id: "12173:797773408", name: "悠然林渡", state: "一念悠然", aliases: "橘猫" },
    { id: "12152:796398445", name: "宣之", state: "一念悠然", aliases: "" },
    { id: "12186:798627207", name: "悠然·听闻", state: "一念悠然", aliases: "闻法 闻道友" },
    { id: "12173:797774246", name: "玉白", state: "一念悠然", aliases: "伍问雁" },
    { id: "12148:796132372", name: "悠然·一屯", state: "一念悠然", aliases: "凌烟一屯" },
    { id: "12146:796002097", name: "悠然·成玉", state: "一念悠然", aliases: "凌烟春日部" },
    { id: "12146:796001793", name: "神女", state: "一念悠然", aliases: "" },
    { id: "12119:794233042", name: "悠然廉若烟", state: "一念悠然", aliases: "" },
    { id: "12170:797575433", name: "悠然加菲猫", state: "一念悠然", aliases: "" },
    { id: "12131:795022070", name: "挑灯夜战", state: "一念悠然", aliases: "" },
    { id: "12120:794301134", name: "悠然·细语", state: "一念悠然", aliases: "" },
    { id: "12146:796005072", name: "小哪咤", state: "一念悠然", aliases: "糊涂仙子" },
    { id: "12119:794234228", name: "悠然·眠羊", state: "一念悠然", aliases: "飞天大野猪" },
    { id: "12184:798493523", name: "赤木晴子", state: "一念悠然", aliases: "苏无鱼" },
    { id: "12172:797706137", name: "悠然缅因猫", state: "一念悠然", aliases: "" },
    { id: "12173:797775381", name: "悠然·墨晚", state: "一念悠然", aliases: "茶" },
    { id: "12172:797709285", name: "小元宝", state: "一念悠然", aliases: "木婉清 小笼包" },
    { id: "12177:798036122", name: "凌烟、清欢", state: "一念悠然", aliases: "" },
    { id: "12170:797576162", name: "易晴", state: "一念悠然", aliases: "易又晴" },
    { id: "12171:797642720", name: "悠然·远山", state: "一念悠然", aliases: "天天" },
    { id: "12122:794429435", name: "悠然小密密", state: "一念悠然", aliases: "" },
    { id: "12135:795283075", name: "悠然·时宜", state: "一念悠然", aliases: "悠然小玲珑" },
    { id: "12187:798688777", name: "悠然糖栗", state: "一念悠然", aliases: "" },

    //凌烟部分
    { id: "12177:798033146", name: "木头马尾", state: "一念凌烟", aliases: "" },
    { id: "12177:798033817", name: "凌烟丶大橘", state: "一念凌烟", aliases: "" },
    { id: "12180:798231905", name: "郭黎阳", state: "一念凌烟", aliases: "" },
    { id: "12148:796135233", name: "凌烟、微活", state: "一念凌烟", aliases: "" },
    { id: "12178:798100660", name: "冰墩墩", state: "一念凌烟", aliases: "" },
    { id: "12177:798034197", name: "种植大户", state: "一念凌烟", aliases: "" },
    { id: "12150:796266384", name: "慎梦槐", state: "一念凌烟", aliases: "" },
    { id: "12148:796136423", name: "闲萸", state: "一念凌烟", aliases: "" },
    { id: "12148:796136506", name: "不懂", state: "一念凌烟", aliases: "" },
    { id: "12187:798688288", name: "松彬", state: "一念凌烟", aliases: "" },
    { id: "12169:797511497", name: "京墨", state: "一念凌烟", aliases: "" },
    { id: "12171:797639814", name: "仰小星", state: "一念凌烟", aliases: "" },
    { id: "12173:797774051", name: "浅浅", state: "一念凌烟", aliases: "" },
    { id: "12169:797512014", name: "艾觅", state: "一念凌烟", aliases: "" },
    { id: "12169:797509547", name: "钮祜禄甄嬛", state: "一念凌烟", aliases: "" },
    { id: "12146:796005015", name: "绛雪垂裳", state: "一念凌烟", aliases: "" },
    { id: "12177:798037410", name: "喻之", state: "一念凌烟", aliases: "" },
    { id: "12167:797377563", name: "悠然小天相", state: "一念凌烟", aliases: "" },
    { id: "11338:743051867", name: "凌晨八点半", state: "一念凌烟", aliases: "" },
    { id: "12173:797772800", name: "cn", state: "一念凌烟", aliases: "" },
    { id: "12145:795939279", name: "苏小北", state: "一念凌烟", aliases: "" },
    { id: "12174:797840117", name: "夏墨", state: "一念凌烟", aliases: "" },

    // 燎原部分
    { id: "12131:795018529", name: "吾有一壶酒", state: "燎原", aliases: "A建材陈总" },
    { id: "12144:795873495", name: "鬼徹亡者戲", state: "燎原", aliases: "飛龍侍極 风林火山 空虚公子 德华" },
    { id: "12161:796987028", name: "西夕", state: "燎原", aliases: "" },
    { id: "12144:795872052", name: "辰风", state: "燎原", aliases: "" },
    { id: "12160:796919958", name: "信陵无忌", state: "燎原", aliases: "" },
    { id: "12160:796921069", name: "花落千殇", state: "燎原", aliases: "" },
    { id: "12172:797706592", name: "虾仁不眨眼", state: "燎原", aliases: "华景逸 烈酒敬过往 悠然柳如烟" },
    { id: "12131:795019763", name: "楼上黄昏", state: "燎原", aliases: "雁字回时" },
    { id: "12160:796921256", name: "手可摘星辰", state: "燎原", aliases: "朝廷抚恤金" },
    { id: "12164:797182435", name: "大漠燕云", state: "燎原", aliases: "" },
    { id: "12160:796922262", name: "慕婉玲", state: "燎原", aliases: "" },
    { id: "12151:796330482", name: "东北雨姐丿", state: "燎原", aliases: "哆啦A梦丿 肾虚公子 燎原小叮当" },
    { id: "12166:797312211", name: "足以慰平生", state: "燎原", aliases: "踏雪寻玉" },
    { id: "12152:796399323", name: "黄毛", state: "燎原", aliases: "西海岸祖容  有铁算我输" },
    { id: "12160:796918798", name: "星辰", state: "燎原", aliases: "悠然扫田了" },
    { id: "12160:796919941", name: "星河", state: "燎原", aliases: "良田我最乖" },
    { id: "12136:795349540", name: "lxmqr", state: "燎原", aliases: "" },
    { id: "12160:796922226", name: "假期ing", state: "燎原", aliases: "假期木有了" },
    { id: "12125:794625271", name: "兕子", state: "燎原", aliases: "任红昌" },
    { id: "12130:794954831", name: "林夜白", state: "燎原", aliases: "" },
    { id: "12137:795411694", name: "晓风残月", state: "燎原", aliases: "" },
    { id: "12059:790302371", name: "雾芜", state: "燎原", aliases: "" },
    { id: "12150:796267659", name: "木之本桃矢", state: "燎原", aliases: "小小小小" },
    { id: "12181:798300074", name: "云轩ぃ", state: "燎原", aliases: "" },
    { id: "12146:796002828", name: "炮灰", state: "燎原", aliases: "" },
    { id: "12160:796923247", name: "夏侯文弘", state: "燎原", aliases: "" },
    { id: "12161:796984509", name: "滿滿", state: "燎原", aliases: "" },
    { id: "12168:797447168", name: "胡楠", state: "燎原", aliases: "" },
    { id: "12165:797247884", name: "苔花如米", state: "燎原", aliases: "" },
    { id: "11197:733809126", name: "邢恩", state: "燎原", aliases: "" },
    { id: "12131:795018549", name: "白金汉足道", state: "燎原", aliases: "" },
    { id: "12132:795086714", name: "黎明", state: "燎原", aliases: "" },
    { id: "12152:796396280", name: "明月", state: "燎原", aliases: "" },
    { id: "12192:799015989", name: "落葵", state: "燎原", aliases: "" },
    { id: "12132:795085373", name: "唐凌", state: "燎原", aliases: "" },
    { id: "12133:795150165", name: "無淚", state: "燎原", aliases: "" },
    { id: "12131:795018367", name: "呼噜噜", state: "燎原", aliases: "" },
    { id: "12135:795281937", name: "贝壳", state: "燎原", aliases: "" },
    { id: "12160:796922441", name: "珑•墨香", state: "燎原", aliases: "" },
    { id: "12137:795416404", name: "yobi臻", state: "燎原", aliases: "" },
    { id: "11309:741148866", name: "温瞳", state: "燎原", aliases: "" },
    { id: "12151:796330816", name: "甘若烟", state: "燎原", aliases: "" },
    { id: "12132:795084496", name: "晴於", state: "燎原", aliases: "" },
    { id: "12165:797250535", name: "煜珑", state: "燎原", aliases: "" },
    { id: "12151:796331075", name: "宦惜雪", state: "燎原", aliases: "" },
    { id: "12135:795284006", name: "套你猴子", state: "燎原", aliases: "" },
    { id: "12132:795085818", name: "羊渊", state: "燎原", aliases: "" },
    { id: "12166:797315369", name: "卜法", state: "燎原", aliases: "" },
    { id: "12147:796070880", name: "无涯", state: "燎原", aliases: "" },
    { id: "12150:796267235", name: "柚柚的右", state: "燎原", aliases: "" },
    { id: "12166:797315047", name: "甘迎曼", state: "燎原", aliases: "" },
    { id: "11648:763366376", name: "谈谈", state: "燎原", aliases: "" },
    { id: "12201:799608937", name: "悠然狗曰的", state: "燎原", aliases: "" },
    { id: "12146:796003427", name: "玉麒浔", state: "燎原", aliases: "" },
    { id: "11333:742720685", name: "咩呀", state: "燎原", aliases: "" },
    { id: "11400:747116545", name: "杨拉拉吐泡", state: "燎原", aliases: "" },
    { id: "12132:795087084", name: "普通市民", state: "燎原", aliases: "熬夜会秃头  疯狂星期四" },

    // 繁花烟雨部分
    { id: "12135:795281951", name: "倒头就睡", state: "繁花烟雨，一念悠然", aliases: "长生" },
    { id: "12135:795282853", name: "晚来天欲雪", state: "繁花烟雨，一念悠然", aliases: "星瑶" },
    { id: "12135:795282784", name: "挽歌渡临舟", state: "繁花烟雨，一念悠然", aliases: "羽" },
    { id: "12134:795215468", name: "倾城音.珩", state: "繁花烟雨，一念悠然", aliases: "蟑螂  繁花.鹤鹤" },
    { id: "12135:795282139", name: "一只狍子丿", state: "繁花烟雨，一念悠然", aliases: "没有名字啦" },
    { id: "12134:795215921", name: "春意知几许", state: "繁花烟雨一念悠然,", aliases: "星洛" },
    { id: "12134:795215035", name: "巧乐兹", state: "繁花烟雨，一念悠然", aliases: "人间富贵花  秋绥" },
    { id: "12151:796329776", name: "十郎", state: "繁花烟雨", aliases: "楚嫣" },
    { id: "12134:795215359", name: "辛夷", state: "繁花烟雨，一念悠然", aliases: "" },
    { id: "12134:795218412", name: "青衫灼桃花", state: "繁花烟雨，一念悠然", aliases: "凤九" },
    { id: "12152:796396503", name: "夏天", state: "繁花烟雨", aliases: "一颗橙子" },
    { id: "12151:796332648", name: "一两风", state: "繁花烟雨", aliases: "和平" },
    { id: "12159:796853454", name: "时致", state: "繁花烟雨", aliases: "" },
    { id: "12151:796333521", name: "梧颜", state: "繁花烟雨", aliases: "无言" },
    { id: "12141:795677902", name: "这城有此鱼", state: "繁花烟雨，一念悠然", aliases: "？" },
    { id: "12149:796200017", name: "仗剑天涯", state: "繁花烟雨", aliases: "？" },
    { id: "12140:795609021", name: "繁花此鱼丿", state: "繁花烟雨，一念悠然", aliases: "九州卧龙号  此鱼" },
    { id: "12136:795347071", name: "哆啦a梦丿", state: "繁花烟雨，一念悠然", aliases: "悠然小叮当" },
    { id: "12135:795284763", name: "予卿茉莉❀", state: "繁花烟雨，一念悠然", aliases: "心有蛋挞 月隐" },
    { id: "12134:795214944", name: "丿罗汉果乀", state: "繁花烟雨，一念悠然", aliases: "罗汉果" },
    { id: "12135:795282233", name: "耶不耶耶啵", state: "繁花烟雨，一念悠然", aliases: "还没有想好 宛白" },
    { id: "12134:795215039", name: "薄荷糖微凉", state: "繁花烟雨，一念悠然", aliases: "明明" },
    { id: "12134:795217925", name: "丿小叮当.", state: "繁花烟雨，一念悠然", aliases: "" },
    { id: "12152:796397649", name: "达拉崩吧", state: "繁花烟雨", aliases: "" },
    { id: "12131:795021278", name: "未瞳", state: "繁花烟雨", aliases: "" },
    { id: "12148:796135973", name: "好多鱼", state: "繁花烟雨", aliases: "容竹" },
    { id: "12152:796397791", name: "花花", state: "繁花烟雨", aliases: "问雁" },
    { id: "12161:796986680", name: "夕拾", state: "繁花烟雨", aliases: "" },

    // 韶州部分
    { id: "12153:796464966", name: "北辰", state: "韶州", aliases: "" },
    { id: "12153:796462207", name: "笨笨走不动", state: "韶州", aliases: "" },
    { id: "12162:797052665", name: "榕榕", state: "韶州", aliases: "" },
    { id: "12161:796989176", name: "老虎不马虎", state: "韶州", aliases: "" },
    { id: "12162:797050569", name: "魏使甲", state: "韶州", aliases: "" },
    { id: "12155:796592996", name: "从之", state: "韶州", aliases: "" },
    { id: "12155:796592188", name: "焦新柔", state: "韶州", aliases: "" },
    { id: "12162:797052511", name: "萧婉婉", state: "韶州", aliases: "" },
    { id: "12162:797055745", name: "悸莞", state: "韶州", aliases: "" },
    { id: "12186:798626442", name: "青衫烟雨客", state: "韶州", aliases: "" },
    { id: "12169:797512585", name: "大知闲闲", state: "韶州", aliases: "" },
    { id: "12187:798688539", name: "江南春不晚", state: "韶州", aliases: "" },
    { id: "12166:797314462", name: "旺旺碎冰冰", state: "韶州", aliases: "" },
    { id: "12149:796198274", name: "崽崽", state: "韶州", aliases: "" },
    { id: "12177:798033553", name: "念卿", state: "韶州", aliases: "" },
    { id: "12132:795086362", name: "醒了睡", state: "韶州", aliases: "" },
    { id: "12168:797446959", name: "王祖贤", state: "韶州", aliases: "" },
    { id: "12146:796003209", name: "圆圆圆不圆", state: "韶州", aliases: "" },
    { id: "11321:741936534", name: "小陌", state: "韶州", aliases: "" },
    { id: "12162:797054798", name: "如果", state: "韶州", aliases: "" },
    { id: "12157:796724026", name: "妤", state: "韶州", aliases: "" },
    { id: "12127:794758255", name: "甜啵儿吖", state: "韶州", aliases: "" },
    { id: "12157:796724465", name: "沐夏", state: "韶州", aliases: "" },
    { id: "12152:796395880", name: "顾倾卿", state: "韶州", aliases: "" },
    { id: "12145:795937783", name: "伍子涵", state: "韶州", aliases: "" },
    { id: "12124:794561278", name: "苍穹黄河", state: "韶州", aliases: "" },
    { id: "12162:797049867", name: "凌羽", state: "韶州", aliases: "" },
    { id: "12162:797051560", name: "墨染", state: "韶州", aliases: "" },
    { id: "12139:795543250", name: "妙妙", state: "韶州", aliases: "" },
    { id: "12162:797055359", name: "倪锐", state: "韶州", aliases: "" },
    { id: "12157:796724696", name: "随喜", state: "韶州", aliases: "" },
    { id: "12162:797051253", name: "大A挺住啊", state: "韶州", aliases: "" },
    { id: "12162:797052741", name: "叶夜白", state: "韶州", aliases: "" },
    { id: "12193:799081928", name: "错在行太软", state: "韶州", aliases: "" },
    { id: "12153:796462729", name: "王学", state: "韶州", aliases: "" },
    { id: "12159:796854616", name: "经盼夏", state: "韶州", aliases: "" },
    { id: "12192:799016756", name: "连俊杰", state: "韶州", aliases: "" },
    { id: "12188:798754620", name: "云奕", state: "韶州", aliases: "" },
    { id: "12153:796464452", name: "仲雪柳", state: "韶州", aliases: "" },
    { id: "12159:796857078", name: "谷诗", state: "韶州", aliases: "" },
    { id: "12153:796461773", name: "符天泽", state: "韶州", aliases: "" },
    { id: "11428:748949538", name: "印笑愚", state: "韶州", aliases: "" },
    { id: "12153:796463095", name: "糖不苦", state: "韶州", aliases: "" },
    { id: "11408:747639744", name: "乐此不疲", state: "韶州", aliases: "" },
    { id: "12162:797055152", name: "梨梨", state: "韶州", aliases: "" },
    { id: "12155:796595516", name: "程卓逸", state: "韶州", aliases: "" },
    { id: "12165:797246670", name: "二世回缘", state: "韶州", aliases: "" },
    { id: "12179:798165134", name: "败家野男人", state: "韶州", aliases: "" },
    { id: "12164:797185204", name: "姜梦", state: "韶州", aliases: "" },
    { id: "12155:796593575", name: "徐榕", state: "韶州", aliases: "" },
    { id: "12197:799348369", name: "文南晴", state: "韶州", aliases: "" },
    { id: "11327:742330869", name: "农民", state: "韶州", aliases: "" },
    { id: "12126:794692555", name: "林秋", state: "韶州", aliases: "" },
    { id: "12166:797316173", name: "强雅绿", state: "韶州", aliases: "" },
    { id: "12173:797775183", name: "干如霜", state: "韶州", aliases: "" },
    { id: "11400:747116775", name: "林雨", state: "韶州", aliases: "" },

    // 香洲部分
    { id: "12195:799215721", name: "迷雾谷", state: "香洲", aliases: "" },
    { id: "12196:799281918", name: "伍诚", state: "香洲", aliases: "" },
    { id: "12196:799278999", name: "陆承星", state: "香洲", aliases: "" },
    { id: "12141:795674626", name: "老丁", state: "香洲", aliases: "" },
    { id: "12155:796594771", name: "暄域", state: "香洲", aliases: "" },
    { id: "12155:796592940", name: "凉北″", state: "香洲", aliases: "" },
    { id: "12195:799215871", name: "麦林", state: "香洲", aliases: "" },
    { id: "12197:799346474", name: "乐斯", state: "香洲", aliases: "" },
    { id: "12195:799214759", name: "捌丶月", state: "香洲", aliases: "" },
    { id: "12155:796592260", name: "豆包耶耶冰", state: "香洲", aliases: "" },
    { id: "12141:795675291", name: "老酒", state: "香洲", aliases: "" },
    { id: "12155:796593604", name: "山海河神", state: "香洲", aliases: "" },
    { id: "12155:796594396", name: "充婉", state: "香洲", aliases: "" },
    { id: "12152:796395130", name: "云天韵", state: "香洲", aliases: "" },
    { id: "12146:796003098", name: "莫风华", state: "香洲", aliases: "" },
    { id: "12141:795678505", name: "最爱蛋炒饭", state: "香洲", aliases: "" },
    { id: "12143:795806795", name: "月月", state: "香洲", aliases: "" },
    { id: "12157:796726982", name: "许悬明", state: "香洲", aliases: "" },
    { id: "12155:796593660", name: "吕慕晴", state: "香洲", aliases: "" },
    { id: "12154:796529567", name: "诗和远芳", state: "香洲", aliases: "" },
    { id: "12197:799347464", name: "解致", state: "香洲", aliases: "" },
    { id: "12195:799215392", name: "陆丶月", state: "香洲", aliases: "" },
    { id: "12198:799410972", name: "嘘亮", state: "香洲", aliases: "" },
    { id: "12198:799410206", name: "澳大利亚", state: "香洲", aliases: "" },
    { id: "12196:799280489", name: "凉薇", state: "香洲", aliases: "" },
    { id: "12198:799410834", name: "勿言", state: "香洲", aliases: "" },
    { id: "12133:795153836", name: "乔", state: "香洲", aliases: "" },
    { id: "12163:797118858", name: "晚星河", state: "香洲", aliases: "" },
    { id: "12130:794954307", name: "苏叶", state: "香洲", aliases: "" },
    { id: "12197:799343847", name: "拎壶冲", state: "香洲", aliases: "" },
    { id: "12177:798034904", name: "杏花弦外雨", state: "香洲", aliases: "" },
    { id: "12187:798690450", name: "无事小神仙", state: "香洲", aliases: "苏无鱼小号" },
    { id: "12186:798626857", name: "执笔画流年", state: "香洲", aliases: "" },
    { id: "12187:798692708", name: "厉道友", state: "香洲", aliases: "凌烟的" },
    { id: "12148:796136157", name: "东风快递", state: "香洲", aliases: "凌烟的" },
    { id: "12130:794952944", name: "祈安", state: "香洲", aliases: "" },
    { id: "12148:796134995", name: "神农·银霜", state: "香洲", aliases: "" },
    { id: "12150:796266034", name: "别摸我", state: "香洲", aliases: "" },
    { id: "12154:796527504", name: "南风", state: "香洲", aliases: "" },
    { id: "12196:799279363", name: "宋凌", state: "香洲", aliases: "" },
    { id: "12155:796595571", name: "赵智渊", state: "香洲", aliases: "" },
    { id: "12156:796656943", name: "扫扫", state: "香洲", aliases: "" },
    { id: "12143:795806594", name: "甜☾", state: "香洲", aliases: "" },
    { id: "12012:787221946", name: "兰亭", state: "香洲", aliases: "" },
    { id: "12196:799282071", name: "终觅波", state: "香洲", aliases: "" },
    { id: "12195:799216341", name: "柒丶月", state: "香洲", aliases: "" },
    { id: "12195:799215494", name: "昊天", state: "香洲", aliases: "" },
    { id: "12125:794630051", name: "宫柔馨", state: "香洲", aliases: "" },
    { id: "12155:796593826", name: "闰土", state: "香洲", aliases: "" },
    { id: "11852:776736508", name: "清纵", state: "香洲", aliases: "" },
    { id: "12132:795086907", name: "烟雨任平生", state: "香洲", aliases: "" },
    { id: "12189:798821222", name: "易雪", state: "香洲", aliases: "" },
    { id: "12197:799348041", name: "容娟娟", state: "香洲", aliases: "" },
    { id: "12006:786827266", name: "一乐", state: "香洲", aliases: "" },
    { id: "12069:790955912", name: "顾淳", state: "香洲", aliases: "" },
    { id: "11158:731255638", name: "枫叶大佬", state: "香洲", aliases: "" },
    { id: "11545:756617332", name: "应妙海", state: "香洲", aliases: "" },
    { id: "12143:795804687", name: "挥剑斩红尘", state: "香洲", aliases: "" },
    { id: "12148:796135910", name: "寒衣", state: "香洲", aliases: "" },
    { id: "12143:795805186", name: "秀秀", state: "香洲", aliases: "" },
    { id: "12159:796853454", name: "时致", state: "香洲", aliases: "" },
    { id: "12162:797054317", name: "携花伴君侧", state: "香洲", aliases: "" },
    { id: "12195:799216584", name: "冰丶月", state: "香洲", aliases: "" },
    { id: "12149:796202347", name: "虾酱", state: "香洲", aliases: "" },
    { id: "11997:786237033", name: "七夜", state: "香洲", aliases: "" },
    { id: "12195:799213562", name: "旧城故人", state: "香洲", aliases: "" },
    { id: "12195:799215855", name: "单紫衣", state: "香洲", aliases: "" },
    { id: "12198:799412135", name: "上官婉儿", state: "香洲", aliases: "" },
    { id: "12197:799347483", name: "宿修杰", state: "香洲", aliases: "" },
    { id: "12176:797973126", name: "寒时倾", state: "香洲", aliases: "" },
    { id: "12195:799216446", name: "郁雪兰", state: "香洲", aliases: "" },
    { id: "12160:796922929", name: "连桐", state: "香洲", aliases: "" },
    { id: "11178:732564846", name: "沈星晚", state: "香洲", aliases: "" },

    // 沧海州部分
    { id: "12238:802031473", name: "泠泠上弦月", state: "沧海州", aliases: "", position: "刺史1002" },
    { id: "12229:801443114", name: "沧海·月白", state: "沧海州", aliases: "", position: "先锋1944" },
    { id: "12229:801443185", name: "泠泠七弦上", state: "沧海州", aliases: "", position: "督军1804" },
    { id: "12230:801510617", name: "心灰灰", state: "沧海州", aliases: "", position: "别架1513" },
    { id: "12232:801637373", name: "纯情美艳呆", state: "沧海州", aliases: "", position: "别架1407" },
    { id: "12238:802031104", name: "好无聊", state: "沧海州", aliases: "", position: "别架1236" },
    { id: "12259:803407338", name: "勾栏听曲", state: "沧海州", aliases: "", position: "招募1204" },
    { id: "12232:801637422", name: "沧海·忠", state: "沧海州", aliases: "", position: "别架1301" },
    { id: "12231:801573530", name: "烟雨泊江南", state: "沧海州", aliases: "", position: "鸿胪1332" },
    { id: "12258:803345439", name: "与子同袍", state: "沧海州", aliases: "", position: "参军" },
    { id: "12254:803080538", name: "古越龙山", state: "沧海州", aliases: "" },
    { id: "12217:800654597", name: "年年有余", state: "沧海州", aliases: "" },
    { id: "12232:801641010", name: "冷少の铁库", state: "沧海州", aliases: "" },
    { id: "12238:802030615", name: "玫玫", state: "沧海州", aliases: "" },
    { id: "12238:802030586", name: "沧海·冷少", state: "沧海州", aliases: "" },
    { id: "12257:803277771", name: "花楹", state: "沧海州", aliases: "" },
    { id: "12242:802295977", name: "岂日无衣", state: "沧海州", aliases: "", position: "" },
    { id: "12232:801637424", name: "又逢下小雨", state: "沧海州", aliases: "" },
    { id: "12229:801444239", name: "你可真秀啊", state: "沧海州", aliases: "" },
    { id: "12259:803409008", name: "南枝暖", state: "沧海州", aliases: "" },
    { id: "12228:801379664", name: "八方来财", state: "沧海州", aliases: "" },
    { id: "12216:800591725", name: "岁岁平安", state: "沧海州", aliases: "" },
    { id: "12259:803409664", name: "ikun.", state: "沧海州", aliases: "" },
    { id: "12215:800523460", name: "沧海·淡定", state: "沧海州", aliases: "" },
    { id: "12231:801575611", name: "沧海·梦曦", state: "沧海州", aliases: "" },
    { id: "12216:800589240", name: "无能老登", state: "沧海州", aliases: "" },
    { id: "12238:802031027", name: "辰星", state: "沧海州", aliases: "" },
    { id: "12239:802098769", name: "沧海·阿良", state: "沧海州", aliases: "" },
    { id: "12243:802362849", name: "灯火", state: "沧海州", aliases: "", position: "市令" },
    { id: "12259:803408802", name: "钱程似锦", state: "沧海州", aliases: "" },
    { id: "12206:799933472", name: "帅哥", state: "沧海州", aliases: "" },
    { id: "12258:803343927", name: "小诗", state: "沧海州", aliases: "" },
    { id: "12238:802030597", name: "一笑", state: "沧海州", aliases: "" },
    { id: "12258:803345329", name: "蟒雀吞龍", state: "沧海州", aliases: "" },
    { id: "12236:801900422", name: "团沅沅", state: "沧海州", aliases: "" },
    { id: "12258:803343099", name: "沧海·凉凉", state: "沧海州", aliases: "" },
    { id: "12258:803345297", name: "童童童", state: "沧海州", aliases: "" },
    { id: "12253:803014768", name: "冰糖橘", state: "沧海州", aliases: "" },
    { id: "12242:802293123", name: "康天麻", state: "沧海州", aliases: "" },
    { id: "12256:803214555", name: "祖钧", state: "沧海州", aliases: "" },
    { id: "12228:801379063", name: "孤鹤", state: "沧海州", aliases: "" },
    { id: "12235:801835371", name: "万事如意", state: "沧海州", aliases: "" },
    { id: "12231:801574557", name: "沧海·天泽", state: "沧海州", aliases: "" },
    { id: "12229:801444620", name: "狄狄", state: "沧海州", aliases: "" },
    { id: "12232:801637363", name: "沧海·迈卡", state: "沧海州", aliases: "" },
    { id: "12259:803406846", name: "难受啊马飞", state: "沧海州", aliases: "" },
    { id: "12242:802296407", name: "沙悟能", state: "沧海州", aliases: "" },
    { id: "12238:802030686", name: "无聊", state: "沧海州", aliases: "" },
    { id: "12257:803276507", name: "困(ಥ_ಥ", state: "沧海州", aliases: "" },
    { id: "12239:802098061", name: "易", state: "沧海州", aliases: "" },
    { id: "12258:803342209", name: "绵绵冰", state: "沧海州", aliases: "" },
    { id: "12259:803408907", name: "不会种田的", state: "沧海州", aliases: "" },
    { id: "12248:802688533", name: "慎盼兰", state: "沧海州", aliases: "" },
    { id: "12239:802098261", name: "一念", state: "沧海州", aliases: "" },
    { id: "12259:803408242", name: "随波乱流", state: "沧海州", aliases: "" },
    { id: "12247:802622136", name: "沧海·霸吧", state: "沧海州", aliases: "" },
    { id: "12258:803341818", name: "恩静我的爱", state: "沧海州", aliases: "" },
    { id: "12233:801707782", name: "凶狗睡大石", state: "沧海州", aliases: "" },
    { id: "12259:803409759", name: "冘吉", state: "沧海州", aliases: "" },
    { id: "12248:802688666", name: "沧海·顾茉", state: "沧海州", aliases: "" },
    { id: "12242:802296291", name: "玖月", state: "沧海州", aliases: "" },
    { id: "12236:801904403", name: "灰兔๓", state: "沧海州", aliases: "" },
    { id: "12238:802031748", name: "沧海•白菜", state: "沧海州", aliases: "" },
    { id: "12228:801379173", name: "阳里阳气", state: "沧海州", aliases: "" },
    { id: "12259:803407900", name: "泱泱༄", state: "沧海州", aliases: "" },
    { id: "12243:802361337", name: "奔雷手文泰", state: "沧海州", aliases: "" },
    { id: "12239:802098095", name: "Adam", state: "沧海州", aliases: "" },
    { id: "12243:802359932", name: "月下疏影", state: "沧海州", aliases: "" },
    { id: "12251:802882837", name: "王安石", state: "沧海州", aliases: "" },
    { id: "12238:802031998", name: "我飞扬", state: "沧海州", aliases: "" },
    { id: "12259:803410773", name: "许愿超灵验", state: "沧海州", aliases: "" },
    { id: "12242:802293224", name: "52HZ", state: "沧海州", aliases: "" },
    { id: "12258:803341622", name: "缘辞", state: "沧海州", aliases: "" },
    { id: "12242:802293620", name: "伊媛媛", state: "沧海州", aliases: "" },
    { id: "12243:802359015", name: "半糖", state: "沧海州", aliases: "" },
    { id: "12242:802295354", name: "十二楼五城", state: "沧海州", aliases: "" },
    { id: "11899:779816322", name: "艾斯", state: "沧海州", aliases: "" },
    { id: "12259:803408643", name: "运气爆棚", state: "沧海州", aliases: "" },
    { id: "12234:801771505", name: "ʚ凹凸曼ɞ", state: "沧海州", aliases: "" },
    { id: "12258:803344861", name: "旭见一生", state: "沧海州", aliases: "" },
    { id: "12238:802030925", name: "婉儿铁铁铁", state: "沧海州", aliases: "" },
    { id: "12217:800654335", name: "独坐幽篁里", state: "沧海州", aliases: "" },
    { id: "12238:802030595", name: "小布丁", state: "沧海州", aliases: "" },
    { id: "12217:800654587", name: "杜噜嘟嘟", state: "沧海州", aliases: "" },
    { id: "12232:801637390", name: "女大铁号", state: "沧海州", aliases: "" },
    { id: "12238:802030598", name: "闪电", state: "沧海州", aliases: "" },
    { id: "12234:801768556", name: "千事吉祥", state: "沧海州", aliases: "" },
    { id: "12234:801770675", name: "百事可乐", state: "沧海州", aliases: "" },
    { id: "12231:801572014", name: "南烛铁", state: "沧海州", aliases: "" }
];

        
  
    
    // 获取DOM元素
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultContainer = document.getElementById('result-container');
    const noResult = document.getElementById('no-result');
    const navItems = document.querySelectorAll('.nav-item');
    const audioElement = document.querySelector('audio');
    
    // 底部导航栏点击效果
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // 可以根据不同导航项添加功能
            const itemName = this.querySelector('span').textContent;
            console.log(`导航项点击: ${itemName}`);
        });
    });
    
    // 设置视口缩放
    function setViewportScale() {
        const viewport = document.querySelector('meta[name="viewport"]');
        const screenWidth = window.innerWidth;
        
        if (screenWidth < 480) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=1.0, user-scalable=yes');
        } else if (screenWidth < 768) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=1.0, user-scalable=yes');
        } else {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    }
    
    // 搜索功能
    function performSearch() {
        const searchId = searchInput.value.trim();
        
        if (searchId === '') {
            alert('请输入ID');
            return;
        }
        
        const foundCharacter = characters.find(char => char.id === searchId);
        
        if (foundCharacter) {
            document.getElementById('character-name').textContent = foundCharacter.name;
            document.getElementById('character-id').textContent = `ID: ${foundCharacter.id}`;
            document.getElementById('character-state').textContent = `所在州或曾在州: ${foundCharacter.state}`;
            document.getElementById('character-aliases').textContent = `曾用名: ${foundCharacter.aliases}`;
            
            resultContainer.style.display = 'block';
            noResult.style.display = 'none';
        } else {
            resultContainer.style.display = 'none';
            noResult.style.display = 'block';
        }
    }
    
    // 自动播放音乐
    function handleAudioAutoplay() {
        if (audioElement) {
            audioElement.play().catch(error => {
                console.log('自动播放被阻止:', error);
                // 可以在这里添加一个播放按钮让用户手动触发
            });
        }
    }
    
    // 事件监听
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    document.querySelectorAll('.bottom-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // 确保链接正常跳转
        window.location.href = this.href;
    });
});
    // 初始化
    setViewportScale();
    window.addEventListener('resize', setViewportScale);
    handleAudioAutoplay();

    
});
