let habits =
JSON.parse(localStorage.getItem("habits")) || [];

const list =
document.getElementById("habitList");

function render(){

    list.innerHTML="";

    habits.forEach((habit,index)=>{

        const div =
        document.createElement("div");

        div.className="habit";

        div.innerHTML=`
        <span>${habit}</span>
        <button onclick="deleteHabit(${index})">
        削除
        </button>
        `;

        list.appendChild(div);
    });
}

function addHabit(){

    const input =
    document.getElementById("habitInput");

    const value =
    input.value.trim();

    if(!value) return;

    habits.push(value);

    localStorage.setItem(
        "habits",
        JSON.stringify(habits)
    );

    input.value="";

    render();
}

function deleteHabit(index){

    habits.splice(index,1);

    localStorage.setItem(
        "habits",
        JSON.stringify(habits)
    );

    render();
}

document
.getElementById("themeBtn")
.onclick=()=>{

    document.body
    .classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ?"dark":"light"
    );
};

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

render();
