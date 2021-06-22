var msg = document.getElementById("MsgShow");
var app = document.getElementById("typed");

var json = 
[
	{
		"question" : "안녕",
		"answer" : "나도 안녕"
	},
	{
		"question" : "강아지가 먹으면 안되는 음식 좀 알려줘",
		"answer" : "카페인,초콜릿,포도,계란흰자,양파,마늘,견과류,아보카도 등이 있어."
        
	},
	{
		"question" : "권장 사료량을 알려줘",
        "answer" : "몇개월 이야?"
	},
    {   

		"question" :"1개월",
        "answer" : "몸무게의 7%"
    },
    {   
		"question" :"2개월",
        "answer" : "몸무게의 7%"
	},
    {   
		"question" :"3개월",
        "answer" : "몸무게의 5~7%"
	},
    {   
		"question" :"4개월",
        "answer" : "몸무게의 5~7%"
	},
    {   
		"question" :"5개월",
        "answer" : "몸무게의 5~7%"
	},
    {   
		"question" :"6개월",
        "answer" : "몸무게의 4~5%"
	},
    {   
		"question" :"7개월",
        "answer" : "몸무게의 4~5%"
	},
    {   
		"question" :"8개월",
        "answer" : "몸무게의 4~5%"
	},
    {   
		"question" :"9개월",
        "answer" : "몸무게의 4~5%"
	},
    {   
		"question" :"10개월",
        "answer" : "몸무게의 4~5%"
	},
    {   
		"question" :"11개월",
        "answer" : "몸무게의 4~5%"
	},
    {   
		"question" :"12개월~",
        "answer" : "몸무게의 2~3%"
	},
   
    {
        "question" : "불꺼줘",
		"answer" : "너무 어두워.. 빨리 불키자.."
    },
    {
        "question" : "불켜줘",
		"answer" : "휴,, 난 밝은게 좋아><"
    },
    {
        "question" : "몸과함께 꼬리를 흔드는건 뭐야?",
		"answer" : "움직임이 많을 수록 더 친근하다는 표현이야!"
    },

    {
        "question" : "꼬리를 천천히 흔드는 건 뭐야?",
		"answer" : "경계심을 갖는 행동이야!"
    },
    {
        "question" : "꼬리를 왼쪽으로 흔드는건 뭐야?",
		"answer" : "낯설고 공격적이라는 거야"
    },
    {
        "question" : "꼬리를 높고 뻣뻣하게 세우는건 뭐야?",
		"answer" : "경계하고있는 거야!"
    },
    {
        "question" : "강아지가 설사했는데 왜그럴까",
		"answer" : "설사를 2-3회하고 기운이 없어보이고 밥도 잘안먹으면 병원에 가야해 근처 병원 정보를 찾아보자 "
    },
    
]



var question = ""; //사용자의 질문을 임시 저장할 변수
var answer = ""; //사용자의 대답을 임시 저장할 변수
var key = 0;

function typing(text1, text2) {
    var typewriter = new Typewriter(msg, {loop: false});
    typewriter
        .typeString(text1)
    
    if(text2){
        typewriter
            .deleteAll()
            .typeString(text2)
            .pauseFor(2500)   
    }
    
    typewriter.start();
}

typing('궁금한 점을 나한테 물어봐☺')

function talk(){
	const txt = document.getElementById("input_msg").value;

	/*모르는 말 가르치기 */
	if(key == 1){
		if(txt == "그래"){
			typing ("어떤걸 배울지 궁금하다!")
			key = 2;
		}
		else{
			typing ("냐~!")
			key = 0;
		}
		return;
	}

	else if(key == 2){
		answer = txt; //전역변수 answer값에 사용자의 입력을 저장
		push_json(); //json 데이터에 값을 추가하는 함수 
        return;
	}

	for(let i = 0; i < json.length; i++){
		if(txt.includes(json[i].question)){
            if(json[i].question == "불꺼줘"){
                document.body.style.backgroundColor = "black";
                msg.style.color = "white";
            }
            else if(json[i].question == "불켜줘"){
                document.body.style.backgroundColor = "white";
                msg.style.color = "black";
            }
            else if(json[i].question == "따라해"){
                follow = 1;
            }else if(json[i].question == "그만"){
                follow = 0;
            }
            typing(json[i].answer)
            return;
        }
	}
    typing('아직 내가 잘 몰라!','가르쳐 줄수있어?? (그래 or 아니)')
            question = txt;
            key = 1;   
}function push_json(){
	json.push({question: `${question}`, answer: `${answer}`}); //json이라는 데이터에 값을 추가하는 push함수
    typing("새로운 말을 배웠어!!!") 
	key = 0; //키 값 0으로 초기화
}