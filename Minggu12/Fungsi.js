var data = [
	"Buku Tulis",
	"Pensil",
	"Spidol",
];

function show() {
	var list =  document.getElementById("list");
	list.innerHTML = "";
	
	for(let i = 0;i < data.length;i++) {
		var edit = "<a href='#' onclick='edit("+i+")'>Edit</a>";
		var hapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>"; 

		list.innerHTML += "<li>" + data[i] + "["+edit +" | "+hapus +"]</li>";
	}
}

function add() {
	var input = document.querySelector("input[name=barang]");
	data.push(input.value);
	show();
}

function edit(id){
	var newBarang = prompt("Nama Baru",data[id]);
	data[id] = newBarang;
	show();
}

function deleteBarang(id){ 
    data.splice(id, 1); 
    show(); 
}

show();