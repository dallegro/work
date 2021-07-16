//todo.js
const todoInput = document.querySelector("#todo-input");//getElementById를 해도 되겠지만 태그네임 클래스네임보다는 쿼리셀렉터를 사용할것임
const todoList = document.querySelector(".todo-list");


/* 
ES6
function() { }
//funtion안써도됨 => 대체
()=>{} 
*/

//console.log(todoInput)
//제대로 불러와졌나 확인 | DOM을 보고싶으면 중괄호로 감싸면 오브젝트 형식으로 확인 할 수 있음

todoInput.addEventListener("keypress", (e) =>{
    //console.log(e) 확인용
    if (e.keyCode === 13) { //자료형 비교 (문자열이면 성립x)
        generateTodo(todoInput.value)
        todoInput.value=""
    }
})
//이벤트 걸기 | 이벤트라는 것을 추가함. 그래야 불러온 input창에 어떠한 이벤트가 발생하는지 감지를 해서 값을 받아오던지 할 수 있으니까

/* 방법 다양
function generateTodo() { }
const generateTodo = function () { }
const generateTodo =()=>{} */

const generateTodo = (todo) => {
    const li = document.createElement("li")
    const likeSpan = generateLike();
    const itemSpan = generateItem(todo);
    const manageSpan = generateManage();
    li.appendChild(likeSpan);
    li.appendChild(itemSpan);
    li.appendChild(manageSpan);
    todoList.appendChild(li);
}
const generateLike = () => {
    const span = document.createElement("span");
    span.classList.add("todo-like")
    const icon = document.createElement("i");
    icon.classList.add("material-icons")
    icon.classList.add("like")
    icon.innerText = "favorite_border"
    span.addEventListener("click", () => {
        // 조건 ? 참 : 거짓
        icon.innerText === 'favorite_border' ?
            icon.innerText = "favorite" : icon.innerText = "favorite_border"
        
            /* if (span.innerText === 'favorite_border') {
            span.innerText = "favorite"
        } else {
            icon.innerText="favorite_border"
        } */
    })
    span.appendChild(icon);
    //console.log(span)
    return span; //리턴해주는 값을 받아와서 각각의 값을 li에 넣어
}
const generateItem = (todo) => {
    const span = document.createElement("span");
    span.classList.add("todo-item")
    span.innerText = todo;
    return span;
}
const generateManage = () => {
    const span = document.createElement("span");
    span.classList.add("todo-manage")
    const icon1 = document.createElement("i");
    const icon2 = document.createElement("i");
    icon1.classList.add("material-icons")
    icon1.classList.add("check")
    icon1.innerText ="check"
    icon2.classList.add("material-icons")
    icon2.classList.add("clear")
    icon2.innerText = "clear"
    

    icon1.addEventListener("click", (e) => {
       const li= e.target.parentNode.parentNode;
       li.classList.add('done')
        console.log(li)
    })

    icon2.addEventListener("click", (e) => {
        const li= e.target.parentNode.parentNode;
        li.classList.add('done')
        todoList.removeChild(li)
    })
    
    span.appendChild(icon1)
    span.appendChild(icon2)
    return span;
}
