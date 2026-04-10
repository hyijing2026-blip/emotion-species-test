import { Question } from "@/types/quiz";

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    title: "朋友突然已读不回，你第一反应是？",
    options: [
      {
        id: "a",
        text: "先装没事，十分钟后开始复盘",
        effects: [
          { dimension: "anxiety", score: 3 },
          { dimension: "overthink", score: 3 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "b",
        text: "回想是不是哪句说重了",
        effects: [
          { dimension: "sensitivity", score: 3 },
          { dimension: "anxiety", score: 2 },
          { dimension: "clinginess", score: 1 },
        ],
      },
      {
        id: "c",
        text: "算了，对方也可能只是去洗头",
        effects: [
          { dimension: "anxiety", score: -2 },
          { dimension: "overthink", score: -2 },
          { dimension: "ego", score: -1 },
        ],
      },
      {
        id: "d",
        text: "直接补一张表情包，看谁先破功",
        effects: [
          { dimension: "chaos", score: 2 },
          { dimension: "control", score: 1 },
          { dimension: "clinginess", score: 2 },
        ],
      },
    ],
  },
  {
    id: "q2",
    title: "有人说“随便”，你默认他其实是？",
    options: [
      {
        id: "a",
        text: "一点都不随便，只是懒得明说",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "b",
        text: "真随便，我也懒得替他脑补",
        effects: [
          { dimension: "anxiety", score: -1 },
          { dimension: "overthink", score: -2 },
          { dimension: "detachment", score: 1 },
          { dimension: "ego", score: -1 },
        ],
      },
      {
        id: "c",
        text: "嘴上随便，心里已经有标准答案",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "sarcasm", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "d",
        text: "他最好真随便，不然我开始反着来",
        effects: [
          { dimension: "rebellion", score: 2 },
          { dimension: "ego", score: 1 },
          { dimension: "sarcasm", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q3",
    title: "群里突然安静下来时，你最像哪种人？",
    options: [
      {
        id: "a",
        text: "怀疑是不是我把气氛聊没了",
        effects: [
          { dimension: "anxiety", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "b",
        text: "立刻消失，像从没出现过",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "socialMask", score: 1 },
          { dimension: "anxiety", score: 1 },
        ],
      },
      {
        id: "c",
        text: "补个梗，把场子硬救回来",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "chaos", score: 1 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "d",
        text: "安静挺好，终于不用营业",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "socialMask", score: -1 },
          { dimension: "clinginess", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q4",
    title: "你最常见的拖延理由是？",
    options: [
      {
        id: "a",
        text: "再等等，我得先 mentally prepare",
        effects: [
          { dimension: "anxiety", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "b",
        text: "没人催我，我就当这事不存在",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "rebellion", score: 1 },
          { dimension: "control", score: -1 },
        ],
      },
      {
        id: "c",
        text: "想做得漂亮，所以迟迟不肯开始",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "d",
        text: "先刷点别的，灵感来了再发疯",
        effects: [
          { dimension: "chaos", score: 2 },
          { dimension: "rebellion", score: 1 },
          { dimension: "collapse", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q5",
    title: "当别人语气突然冷一点，你会？",
    options: [
      {
        id: "a",
        text: "表面正常，心里警报拉满",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "anxiety", score: 2 },
          { dimension: "sensitivity", score: 2 },
        ],
      },
      {
        id: "b",
        text: "先冷回去，谁还不会了",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "sarcasm", score: 2 },
          { dimension: "detachment", score: 1 },
        ],
      },
      {
        id: "c",
        text: "直接问是不是不高兴",
        effects: [
          { dimension: "clinginess", score: 2 },
          { dimension: "sensitivity", score: 1 },
          { dimension: "ego", score: -1 },
          { dimension: "detachment", score: -1 },
        ],
      },
      {
        id: "d",
        text: "没空猜，爱冷不冷",
        effects: [
          { dimension: "anxiety", score: -2 },
          { dimension: "detachment", score: 2 },
          { dimension: "rebellion", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q6",
    title: "和不太熟的人单独相处时，你通常？",
    options: [
      {
        id: "a",
        text: "疯狂找话题，不能让空气赢",
        effects: [
          { dimension: "anxiety", score: 1 },
          { dimension: "control", score: 1 },
          { dimension: "socialMask", score: 2 },
        ],
      },
      {
        id: "b",
        text: "礼貌微笑，内心倒计时",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "socialMask", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "c",
        text: "看对方类型，自动切合适模式",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "socialMask", score: 3 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "d",
        text: "直接安静，也不强行熟起来",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "anxiety", score: -1 },
          { dimension: "clinginess", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q7",
    title: "你发消息后对方一直没回，你会怎么做？",
    options: [
      {
        id: "a",
        text: "撤回重发的冲动先忍住",
        effects: [
          { dimension: "anxiety", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "clinginess", score: 2 },
        ],
      },
      {
        id: "b",
        text: "补一句“你先忙”，假装我很大度",
        effects: [
          { dimension: "ego", score: 1 },
          { dimension: "socialMask", score: 2 },
          { dimension: "clinginess", score: 1 },
        ],
      },
      {
        id: "c",
        text: "连发两条，活人请出声",
        effects: [
          { dimension: "clinginess", score: 3 },
          { dimension: "chaos", score: 1 },
          { dimension: "anxiety", score: 1 },
        ],
      },
      {
        id: "d",
        text: "已发送就算交卷，不盯结果",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "anxiety", score: -2 },
          { dimension: "overthink", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q8",
    title: "吵架时你更容易进入哪种状态？",
    options: [
      {
        id: "a",
        text: "嘴比脑子快，气势先到位",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "chaos", score: 2 },
          { dimension: "sarcasm", score: 1 },
        ],
      },
      {
        id: "b",
        text: "不说重话，但句句都记分",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "detachment", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "c",
        text: "现场没赢，回家补赛三小时",
        effects: [
          { dimension: "overthink", score: 3 },
          { dimension: "anxiety", score: 1 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "d",
        text: "直接上头，开始抽象输出",
        effects: [
          { dimension: "chaos", score: 3 },
          { dimension: "rebellion", score: 1 },
          { dimension: "collapse", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q9",
    title: "有人当众开了你不太喜欢的玩笑，你会？",
    options: [
      {
        id: "a",
        text: "笑一下，回头把这事存档",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "overthink", score: 1 },
          { dimension: "sarcasm", score: 1 },
        ],
      },
      {
        id: "b",
        text: "当场轻轻补刀，让他知道边界",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "sarcasm", score: 2 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "c",
        text: "表情直接掉线，装不了一点",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "collapse", score: 1 },
          { dimension: "socialMask", score: -2 },
        ],
      },
      {
        id: "d",
        text: "没兴趣配合，现场直接冷掉",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "rebellion", score: 1 },
          { dimension: "control", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q10",
    title: "你明知道自己有点难过，但嘴上通常会说？",
    options: [
      {
        id: "a",
        text: "没事啊，我挺好的",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "socialMask", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "b",
        text: "也就一点点，死不了",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "sarcasm", score: 1 },
          { dimension: "anxiety", score: 1 },
        ],
      },
      {
        id: "c",
        text: "我现在有点不对劲",
        effects: [
          { dimension: "clinginess", score: 1 },
          { dimension: "sensitivity", score: 1 },
          { dimension: "ego", score: -1 },
          { dimension: "detachment", score: -1 },
        ],
      },
      {
        id: "d",
        text: "先消失，等我恢复成人类",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "collapse", score: 1 },
          { dimension: "chaos", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q11",
    title: "如果计划突然被打乱，你通常的内心 OS 是？",
    options: [
      {
        id: "a",
        text: "完了，整个节奏都废了",
        effects: [
          { dimension: "control", score: 3 },
          { dimension: "anxiety", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "b",
        text: "烦，但我会装得像能接受",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "ego", score: 1 },
          { dimension: "control", score: 1 },
          { dimension: "rebellion", score: -1 },
        ],
      },
      {
        id: "c",
        text: "那就换个玩法，谁怕谁",
        effects: [
          { dimension: "chaos", score: 2 },
          { dimension: "rebellion", score: 2 },
          { dimension: "anxiety", score: -1 },
        ],
      },
      {
        id: "d",
        text: "好耶，不用按剧本走了",
        effects: [
          { dimension: "rebellion", score: 2 },
          { dimension: "chaos", score: 1 },
          { dimension: "control", score: -2 },
        ],
      },
    ],
  },
  {
    id: "q12",
    title: "在暧昧阶段，对方回消息慢，你会怎么理解？",
    options: [
      {
        id: "a",
        text: "他是不是热情降级了",
        effects: [
          { dimension: "anxiety", score: 3 },
          { dimension: "overthink", score: 3 },
          { dimension: "sensitivity", score: 2 },
        ],
      },
      {
        id: "b",
        text: "先等等，也许人家真有事",
        effects: [
          { dimension: "anxiety", score: 1 },
          { dimension: "clinginess", score: 1 },
          { dimension: "sensitivity", score: 1 },
          { dimension: "ego", score: -1 },
          { dimension: "overthink", score: -1 },
        ],
      },
      {
        id: "c",
        text: "嘴上说随缘，实际点开聊天框八次",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "clinginess", score: 2 },
          { dimension: "overthink", score: 2 },
        ],
      },
      {
        id: "d",
        text: "慢就慢吧，我也不是客服",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "rebellion", score: 1 },
          { dimension: "anxiety", score: -2 },
        ],
      },
    ],
  },
  {
    id: "q13",
    title: "别人让你“别多想”，你的第一反应是？",
    options: [
      {
        id: "a",
        text: "你倒是给我一个不想的理由",
        effects: [
          { dimension: "overthink", score: 2 },
          { dimension: "sarcasm", score: 2 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "b",
        text: "好的，我现在开始想你为什么这么说",
        effects: [
          { dimension: "overthink", score: 3 },
          { dimension: "anxiety", score: 1 },
        ],
      },
      {
        id: "c",
        text: "表面点头，内心继续开会",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "d",
        text: "那我就不解释了，爱咋咋地",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "rebellion", score: 2 },
          { dimension: "ego", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q14",
    title: "你最容易在哪个瞬间突然情绪上头？",
    options: [
      {
        id: "a",
        text: "被误会还不让我解释的时候",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "ego", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "b",
        text: "连续被敷衍三次的时候",
        effects: [
          { dimension: "clinginess", score: 2 },
          { dimension: "anxiety", score: 2 },
          { dimension: "chaos", score: 1 },
        ],
      },
      {
        id: "c",
        text: "事情脱离我掌控的时候",
        effects: [
          { dimension: "control", score: 3 },
          { dimension: "anxiety", score: 1 },
        ],
      },
      {
        id: "d",
        text: "没人惹我，但我自己突然想到一堆事",
        effects: [
          { dimension: "overthink", score: 3 },
          { dimension: "collapse", score: 2 },
        ],
      },
    ],
  },
  {
    id: "q15",
    title: "碰到自己不想参加的局，你会？",
    options: [
      {
        id: "a",
        text: "提前找理由遁走",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "anxiety", score: 1 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "b",
        text: "嘴上答应，临近再想办法消失",
        effects: [
          { dimension: "ego", score: 1 },
          { dimension: "socialMask", score: 2 },
          { dimension: "rebellion", score: 1 },
        ],
      },
      {
        id: "c",
        text: "去了也会在角落省电",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "collapse", score: 1 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "d",
        text: "直接说不想去，别给我做思想工作",
        effects: [
          { dimension: "rebellion", score: 3 },
          { dimension: "ego", score: 1 },
          { dimension: "control", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q16",
    title: "当你真的很累时，你表面上通常还是？",
    options: [
      {
        id: "a",
        text: "正常营业，仿佛我毫无波澜",
        effects: [
          { dimension: "socialMask", score: 3 },
          { dimension: "collapse", score: 2 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "b",
        text: "嘴更硬了，谁问都说没事",
        effects: [
          { dimension: "ego", score: 3 },
          { dimension: "socialMask", score: 1 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "c",
        text: "状态写脸上，装不了一点",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "socialMask", score: -2 },
        ],
      },
      {
        id: "d",
        text: "突然失联，等电量回一点再说",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "collapse", score: 2 },
          { dimension: "clinginess", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q17",
    title: "你在朋友眼里更像哪一类？",
    options: [
      {
        id: "a",
        text: "场面稳住选手",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "socialMask", score: 1 },
          { dimension: "detachment", score: 1 },
        ],
      },
      {
        id: "b",
        text: "嘴欠但靠谱的人",
        effects: [
          { dimension: "sarcasm", score: 2 },
          { dimension: "ego", score: 1 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "c",
        text: "容易想太多的细节怪",
        effects: [
          { dimension: "overthink", score: 2 },
          { dimension: "sensitivity", score: 2 },
          { dimension: "anxiety", score: 1 },
        ],
      },
      {
        id: "d",
        text: "说疯就疯的气氛发动机",
        effects: [
          { dimension: "chaos", score: 3 },
          { dimension: "socialMask", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q18",
    title: "当有人强行给你建议，你会？",
    options: [
      {
        id: "a",
        text: "先听着，心里已经开始反驳",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "b",
        text: "礼貌说谢谢，转头一个字不改",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "rebellion", score: 1 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "c",
        text: "要是他说得对，我也会不爽",
        effects: [
          { dimension: "rebellion", score: 1 },
          { dimension: "ego", score: 2 },
        ],
      },
      {
        id: "d",
        text: "直接问：你是建议，还是在安排我",
        effects: [
          { dimension: "control", score: 1 },
          { dimension: "rebellion", score: 2 },
          { dimension: "sarcasm", score: 2 },
        ],
      },
    ],
  },
  {
    id: "q19",
    title: "如果对方说“你想太多了”，你会？",
    options: [
      {
        id: "a",
        text: "瞬间更想太多",
        effects: [
          { dimension: "overthink", score: 3 },
          { dimension: "anxiety", score: 2 },
          { dimension: "sensitivity", score: 1 },
          { dimension: "ego", score: -1 },
        ],
      },
      {
        id: "b",
        text: "嘴上说好，心里判他不懂我",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "detachment", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "c",
        text: "阴阳一句：对，我想得可少了",
        effects: [
          { dimension: "sarcasm", score: 3 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "d",
        text: "懒得解释，直接降低投入",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "control", score: 1 },
          { dimension: "clinginess", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q20",
    title: "你面对尴尬场面时通常怎么救自己？",
    options: [
      {
        id: "a",
        text: "疯狂找补，不能让气氛死我这",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "socialMask", score: 2 },
          { dimension: "anxiety", score: 1 },
          { dimension: "rebellion", score: -1 },
        ],
      },
      {
        id: "b",
        text: "开个自嘲玩笑，把伤害转给自己",
        effects: [
          { dimension: "socialMask", score: 1 },
          { dimension: "chaos", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "c",
        text: "装没听见，让时间自己过去",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "d",
        text: "直接撤退，尴尬这种东西谁爱扛谁扛",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "rebellion", score: 2 },
          { dimension: "anxiety", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q21",
    title: "你心情不好时最常见的状态是？",
    options: [
      {
        id: "a",
        text: "安静，但脑内弹幕一刻不停",
        effects: [
          { dimension: "overthink", score: 2 },
          { dimension: "detachment", score: 1 },
          { dimension: "anxiety", score: 2 },
        ],
      },
      {
        id: "b",
        text: "表面稳住，细节开始失控",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "collapse", score: 2 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "c",
        text: "找个人说，不然会憋炸",
        effects: [
          { dimension: "clinginess", score: 2 },
          { dimension: "collapse", score: 1 },
          { dimension: "sensitivity", score: 1 },
          { dimension: "detachment", score: -1 },
        ],
      },
      {
        id: "d",
        text: "整点抽象内容给自己续命",
        effects: [
          { dimension: "chaos", score: 2 },
          { dimension: "rebellion", score: 1 },
          { dimension: "collapse", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q22",
    title: "你对“发疯文学”的态度更接近？",
    options: [
      {
        id: "a",
        text: "理解且支持，我本人偶尔就是原作者",
        effects: [
          { dimension: "chaos", score: 3 },
          { dimension: "rebellion", score: 1 },
        ],
      },
      {
        id: "b",
        text: "好笑归好笑，但我更擅长暗疯",
        effects: [
          { dimension: "overthink", score: 2 },
          { dimension: "sarcasm", score: 1 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "c",
        text: "我会看，但不会让自己真疯出来",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "detachment", score: 1 },
        ],
      },
      {
        id: "d",
        text: "不理解，情绪稳定比较省事",
        effects: [
          { dimension: "chaos", score: -2 },
          { dimension: "control", score: 1 },
          { dimension: "rebellion", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q23",
    title: "别人说你变冷淡了，你心里会想？",
    options: [
      {
        id: "a",
        text: "不是冷淡，是你没赶上我有电的时候",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "b",
        text: "我一直这样，只是你现在才发现",
        effects: [
          { dimension: "ego", score: 1 },
          { dimension: "detachment", score: 1 },
        ],
      },
      {
        id: "c",
        text: "是不是我最近演得不够用力",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "anxiety", score: 1 },
          { dimension: "detachment", score: -1 },
        ],
      },
      {
        id: "d",
        text: "那你倒是先别让我失望啊",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "sarcasm", score: 1 },
          { dimension: "clinginess", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q24",
    title: "你在关系里最怕的事情是什么？",
    options: [
      {
        id: "a",
        text: "热情忽然变淡，我还最后一个知道",
        effects: [
          { dimension: "anxiety", score: 3 },
          { dimension: "clinginess", score: 2 },
          { dimension: "sensitivity", score: 2 },
          { dimension: "detachment", score: -1 },
        ],
      },
      {
        id: "b",
        text: "我表现太多，对方却只是在随便玩玩",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "anxiety", score: 2 },
          { dimension: "detachment", score: 1 },
        ],
      },
      {
        id: "c",
        text: "对方想管我、安排我、定义我",
        effects: [
          { dimension: "rebellion", score: 2 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "d",
        text: "什么都要解释，太消耗了",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "collapse", score: 1 },
          { dimension: "control", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q25",
    title: "你最像哪种“嘴硬现场”？",
    options: [
      {
        id: "a",
        text: "不在意啊，只是顺手看了十次手机",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "clinginess", score: 2 },
          { dimension: "overthink", score: 1 },
        ],
      },
      {
        id: "b",
        text: "我没生气，只是不想理人",
        effects: [
          { dimension: "ego", score: 1 },
          { dimension: "detachment", score: 2 },
          { dimension: "sarcasm", score: 1 },
        ],
      },
      {
        id: "c",
        text: "你开心就好，我没意见",
        effects: [
          { dimension: "sarcasm", score: 2 },
          { dimension: "socialMask", score: 1 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "d",
        text: "算了，随便，都听你的吧",
        effects: [
          { dimension: "collapse", score: 1 },
          { dimension: "overthink", score: 2 },
          { dimension: "socialMask", score: 1 },
          { dimension: "ego", score: -2 },
        ],
      },
    ],
  },
  {
    id: "q26",
    title: "有人临时改时间、改安排，你会？",
    options: [
      {
        id: "a",
        text: "表面说行，心里已经扣分",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "sarcasm", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "b",
        text: "先问清楚为啥改，不然我很烦",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "anxiety", score: 1 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "c",
        text: "只要别影响我躺着，都行",
        effects: [
          { dimension: "anxiety", score: -1 },
          { dimension: "detachment", score: 1 },
          { dimension: "overthink", score: -1 },
        ],
      },
      {
        id: "d",
        text: "那我也临时改心情，不一定配合",
        effects: [
          { dimension: "rebellion", score: 3 },
          { dimension: "chaos", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q27",
    title: "你在社交中最擅长的是？",
    options: [
      {
        id: "a",
        text: "读气氛，然后选最安全的话说",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "socialMask", score: 2 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "b",
        text: "让大家都不尴尬，哪怕我先累",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "collapse", score: 1 },
          { dimension: "clinginess", score: 1 },
          { dimension: "rebellion", score: -1 },
        ],
      },
      {
        id: "c",
        text: "看人下菜碟，模式切得很快",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "control", score: 2 },
          { dimension: "detachment", score: 1 },
        ],
      },
      {
        id: "d",
        text: "说一两句精准怪话，让人记住我",
        effects: [
          { dimension: "sarcasm", score: 3 },
          { dimension: "ego", score: 1 },
          { dimension: "chaos", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q28",
    title: "真正让你崩溃的，通常不是大事，而是？",
    options: [
      {
        id: "a",
        text: "很多小事一起排队来敲我",
        effects: [
          { dimension: "collapse", score: 3 },
          { dimension: "anxiety", score: 2 },
          { dimension: "overthink", score: 1 },
        ],
      },
      {
        id: "b",
        text: "我明明撑着，别人还来补一刀",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "collapse", score: 2 },
          { dimension: "ego", score: 1 },
        ],
      },
      {
        id: "c",
        text: "计划被打乱后还要我立刻微笑",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "socialMask", score: 2 },
          { dimension: "collapse", score: 1 },
        ],
      },
      {
        id: "d",
        text: "被晾着、被拖着、没人给准话",
        effects: [
          { dimension: "clinginess", score: 2 },
          { dimension: "anxiety", score: 2 },
          { dimension: "control", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q29",
    title: "你觉得自己更像哪种情绪动物？",
    options: [
      {
        id: "a",
        text: "表面安静的猫，其实耳朵一直在听",
        effects: [
          { dimension: "sensitivity", score: 2 },
          { dimension: "detachment", score: 1 },
          { dimension: "control", score: 1 },
        ],
      },
      {
        id: "b",
        text: "嘴硬的刺猬，扎人前先扎自己",
        effects: [
          { dimension: "ego", score: 2 },
          { dimension: "anxiety", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "c",
        text: "偶尔发癫的猴，场面不能太无聊",
        effects: [
          { dimension: "chaos", score: 3 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "d",
        text: "省电的乌龟，能不动就先不动",
        effects: [
          { dimension: "detachment", score: 1 },
          { dimension: "chaos", score: -1 },
          { dimension: "collapse", score: -1 },
        ],
      },
    ],
  },
  {
    id: "q30",
    title: "如果有人说你不好相处，你更可能？",
    options: [
      {
        id: "a",
        text: "礼貌笑笑，回去想半天",
        effects: [
          { dimension: "socialMask", score: 2 },
          { dimension: "overthink", score: 2 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "b",
        text: "那说明你确实不太会相处",
        effects: [
          { dimension: "sarcasm", score: 2 },
          { dimension: "ego", score: 2 },
          { dimension: "rebellion", score: 1 },
        ],
      },
      {
        id: "c",
        text: "无所谓，不熟的人意见不进系统",
        effects: [
          { dimension: "detachment", score: 2 },
          { dimension: "anxiety", score: -1 },
        ],
      },
      {
        id: "d",
        text: "嘴上说行，心里把对方踢出名单",
        effects: [
          { dimension: "control", score: 2 },
          { dimension: "ego", score: 1 },
        ],
      },
    ],
  },
  {
    id: "q31",
    title: "做完这套测试后，你最希望看到的结果是？",
    options: [
      {
        id: "a",
        text: "别把我写太惨，但要准得冒犯",
        effects: [
          { dimension: "socialMask", score: 1 },
          { dimension: "ego", score: 1 },
          { dimension: "sensitivity", score: 1 },
        ],
      },
      {
        id: "b",
        text: "最好一针见血，让我能立刻发群里",
        effects: [
          { dimension: "chaos", score: 1 },
          { dimension: "control", score: 1 },
          { dimension: "socialMask", score: 1 },
        ],
      },
      {
        id: "c",
        text: "希望它说我其实没那么内耗",
        effects: [
          { dimension: "anxiety", score: -1 },
          { dimension: "overthink", score: -2 },
          { dimension: "collapse", score: -1 },
        ],
      },
      {
        id: "d",
        text: "只要有梗，顺便证明我不是难搞",
        effects: [
          { dimension: "ego", score: 1 },
          { dimension: "sarcasm", score: 1 },
          { dimension: "detachment", score: 1 },
        ],
      },
    ],
  },
];
