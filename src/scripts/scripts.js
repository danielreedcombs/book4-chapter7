// // vanilla
// // Select a DOM component
// const sourceComponent = document.querySelector("#fishgut")

// // Get its contents
// console.log(sourceComponent.textContent)

// // JQuery
// // Select a DOM component
// const sourceComponent = $("#fishgut")

// // Get its contents
// console.log(sourceComponent.text())

// // vanilla 
// document.querySelector("#studentInfo").innerHTML = `
//     <div>
//         Michael Tambornino
//     </div>
// `

// JQuery
$("#studentInfo").html(`
    <div>
        Michael Tambornino
    </div>
`)

// let jqlist= ${"#list-of-stuff"}
$(".delete").click(() =>{
    console.log("hey that was easy")
})

$("#destroyer").click(() => {
    $(".song-container").slideToggle()
    $(this).addClass("isRed")
})

$(".article--main").eq(1).addClass("isRed")
$(".article--main").hover( function(){
    $(this).toggleClass("isBlue")
})

