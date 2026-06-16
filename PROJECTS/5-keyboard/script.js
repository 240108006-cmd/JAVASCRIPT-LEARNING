let result = document.querySelector(".result")
document.addEventListener("keydown",function(e){
    result.innerHTML=`<table>
        <tr>
            <th> key </th>
            <th> keycode</th>
            <th> code </th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>`
})
