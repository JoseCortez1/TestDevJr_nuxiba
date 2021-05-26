/** @format */

function crear(data2) {
	console.log("Crear tables", data2)
	var col = 5
	var filas = data2.length
	var tabla = `<table class="superheroes table">`
	for (i = 0; i < filas; i++) {
		if (i % 2 === 0) {
			tabla += `<tr class="row par">`
		} else {
			tabla += `<tr class="row none">`
		}

		tabla += `<td class="element" >${data2[i].superhero}</td>`

		tabla += `<td class="element">${data2[i].publisher}</td>`

		tabla += `<td class="element">${data2[i].alter_ego}</td>`

		tabla += `<td class="element">${data2[i].first_appearance}</td>`

		tabla += `<td class="element">${data2[i].characters}</td>`

		/*
		for (j = 0; j < col; j++) {
			if (j == 0) {
				tabla += `<td class="element" >${data2[i].superhero}</td>`
			}
			if (j == 1) {
				tabla += `<td class="element">${data2[i].publisher}</td>`
			}
			if (j == 2) {
				tabla += `<td class="element">${data2[i].alter_ego}</td>`
			}
			if (j == 3) {
				tabla += `<td class="element">${data2[i].first_appearance}</td>`
			}
			if (j == 4) {
				tabla += `<td class="element">${data2[i].characters}</td>`
			}
		}*/
		tabla += "</tr>"
	}
	tabla += `</ table>`
	document.querySelector("#root").insertAdjacentHTML("afterend", tabla)
}

function crear2() {
	readTextFile("superheroes.json", function (text) {
		var data = JSON.parse(text)
		console.log(data)
		crear(data)
	})
}

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest()
	rawFile.overrideMimeType("Application/Json")
	rawFile.open("GET", file, true)
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText)
		}
	}
	rawFile.send(null)
}
